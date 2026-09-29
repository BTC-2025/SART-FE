'use client';
import React, { useEffect, useState } from 'react';
import './StoreTab.css'; 
import { useSartStore } from '@/store/useSartStore';

export default function StoreTab() {
  const { activeTab } = useSartStore();
  const [mounted, setMounted] = useState(false);
  
  const [cart, setCart] = useState<{name: string, price: number, qty: number}[]>([]);

  useEffect(() => {
    // Load state from localStorage if exists
    const saved = localStorage.getItem('sart_web_state');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.cart) {
          setCart(parsed.cart || []);
        }
      } catch(e) {}
    }
    setMounted(true);
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    if (!mounted) return;
    const saved = localStorage.getItem('sart_web_state');
    let parsed = {} as any;
    if (saved) {
      try { parsed = JSON.parse(saved); } catch(e) {}
    }
    parsed = {
      ...parsed,
      cart
    };
    localStorage.setItem('sart_web_state', JSON.stringify(parsed));
  }, [cart, mounted]);

  const addToCart = (name: string, price: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.name === name);
      if (existing) {
        return prev.map(item => item.name === name ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { name, price, qty: 1 }];
    });
  };

  const removeFromCart = (name: string) => {
    setCart(prev => prev.filter(item => item.name !== name));
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const checkoutStoreCart = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }
    
    // Check wallet balance
    const saved = localStorage.getItem('sart_web_state');
    let parsed = {} as any;
    if (saved) {
      try { parsed = JSON.parse(saved); } catch(e) {}
    }
    
    if (!parsed.wallet) {
      alert("Wallet not initialized.");
      return;
    }

    if (parsed.wallet.balance < subtotal) {
      alert(`Insufficient Wallet Balance! You need ₹${subtotal.toFixed(2)}`);
      return;
    }

    // Deduct balance, clear cart
    parsed.wallet.balance -= subtotal;
    parsed.wallet.transactions.unshift({
      id: `tx-${Date.now()}`,
      title: 'Store Checkout: ' + cart.length + ' Items',
      amount: subtotal,
      date: new Date().toLocaleString(),
      isCredit: false,
      category: 'Store'
    });
    
    setCart([]);
    parsed.cart = [];
    localStorage.setItem('sart_web_state', JSON.stringify(parsed));
    
    // Dispatch a custom event in case wallet page needs to re-render
    window.dispatchEvent(new Event('storage'));
    
    alert(`Checkout successful! ₹${subtotal.toFixed(2)} deducted from your wallet.`);
  };

  if (!mounted) return null;


  return (
    <section className={`tab-screen ${activeTab === 'store' ? 'active' : ''}`} id="tab-store">
      <div className="store-container">
        
        <div className="store-hero">
          <div className="store-hero-text">
            <h1>SART Smart Store</h1>
            <p>Enhance your commute with certified telemetry upgrades, advanced diagnostics, and premium vehicle accessories.</p>
          </div>
          <div className="store-hero-image">🔋</div>
        </div>
        
        <div className="store-grid-layout">
          {/* Left Products Section */}
          <div className="store-products-section">
            <div>
              <h3 className="store-category-title">Popular Accessories</h3>
              <div className="store-products-grid">
                {/* Card 1 */}
                <div className="store-product-card">
                  <span className="product-badge">Top Seller</span>
                  <div className="product-image-container">⚡</div>
                  <div className="product-info">
                    <h3>Smart Fast Charger Pro</h3>
                    <p>Ultra-compact 7.2kW AC home charger with auto battery cut-off and mobile app telemetry link.</p>
                  </div>
                  <div className="product-footer">
                    <span className="product-price">₹18,500</span>
                    <button className="product-buy-btn" onClick={() => addToCart('Smart Fast Charger Pro', 18500)}>Add to Cart</button>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="store-product-card">
                  <span className="product-badge">New</span>
                  <div className="product-image-container">🧭</div>
                  <div className="product-info">
                    <h3>GPS Tracker Pro</h3>
                    <p>Anti-theft satellite-linked tracker featuring real-time geofence alerts and remote engine lock.</p>
                  </div>
                  <div className="product-footer">
                    <span className="product-price">₹4,200</span>
                    <button className="product-buy-btn" onClick={() => addToCart('GPS Tracker Pro', 4200)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="store-category-title">Safety & Comfort</h3>
              <div className="store-products-grid">
                {/* Card 3 */}
                <div className="store-product-card">
                  <span className="product-badge">Safety</span>
                  <div className="product-image-container">🛞</div>
                  <div className="product-info">
                    <h3>Smart Tire Pressure Gauge</h3>
                    <p>Bluetooth tire valve caps displaying precise PSI diagnostics directly on SART AI dashboard.</p>
                  </div>
                  <div className="product-footer">
                    <span className="product-price">₹2,800</span>
                    <button className="product-buy-btn" onClick={() => addToCart('Smart Tire Pressure Gauge', 2800)}>Add to Cart</button>
                  </div>
                </div>
                {/* Card 4 */}
                <div className="store-product-card">
                  <span className="product-badge">Upgrade</span>
                  <div className="product-image-container">🛋️</div>
                  <div className="product-info">
                    <h3>Chauffeur Comfort Cushion</h3>
                    <p>Ergonomic memory foam cushion with orthopedic support, tailor-made for long distance trips.</p>
                  </div>
                  <div className="product-footer">
                    <span className="product-price">₹1,950</span>
                    <button className="product-buy-btn" onClick={() => addToCart('Chauffeur Comfort Cushion', 1950)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Cart Panel */}
          <div className="store-cart-panel">
            <div className="cart-header">
              <h3>Shopping Cart</h3>
              <i className="fa-solid fa-cart-shopping" style={{ color: 'var(--primary)' }}></i>
            </div>
            <div className="cart-items-list">
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '30px', fontSize: '12px' }}>Your cart is empty.</div>
              ) : (
                cart.map(item => (
                  <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #e2e8f0' }}>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b' }}>{item.name}</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>₹{item.price} x {item.qty}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '14px', fontWeight: '800', color: '#1e293b' }}>₹{item.price * item.qty}</span>
                      <button onClick={() => removeFromCart(item.name)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '4px' }}><i className="fa-solid fa-trash"></i></button>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="cart-totals">
              <div className="cart-total-row">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
              <div className="cart-total-row" style={{ fontWeight: 800, borderTop: '1px solid var(--dark-border)', paddingTop: '10px', marginTop: '5px' }}>
                <span>Grand Total</span>
                <span style={{ color: 'var(--primary)' }}>₹{subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
            </div>
            <button className="checkout-btn" onClick={checkoutStoreCart}>Pay via SART Wallet</button>
          </div>
        </div>
        
      </div>
    </section>
  );
}
