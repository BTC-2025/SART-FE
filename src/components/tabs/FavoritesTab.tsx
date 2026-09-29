'use client';

import React, { useState } from 'react';
import { useSartStore } from '@/store/useSartStore';

export default function FavoritesTab() {
  const { activeTab } = useSartStore();
  const [filter, setFilter] = useState<'ALL' | 'RIDES' | 'RENTALS' | 'COMMUNITY'>('ALL');

  if (activeTab !== 'favorites') return null;

  const favItems = [
    { type: 'RIDES', title: 'Premium SUV Ride', subtitle: 'To Bangalore Airport', icon: 'fa-car', color: '#3b82f6', price: '₹1,500', date: 'Saved on 12 Sep' },
    { type: 'COMMUNITY', title: 'Chennai City Taxi Union', subtitle: 'Active Membership', icon: 'fa-taxi', color: '#f59e0b', price: '₹1,000/yr', date: 'Saved on 10 Sep' },
    { type: 'RENTALS', title: 'Luxury Yacht Charter', subtitle: 'Marina Bay', icon: 'fa-ship', color: '#0ea5e9', price: '₹15,000/day', date: 'Saved on 05 Sep' },
    { type: 'RIDES', title: 'Intermodal Freight Train', subtitle: 'Heavy Cargo Logistics', icon: 'fa-train-tram', color: '#10b981', price: '₹3,50,000', date: 'Saved on 01 Sep' },
  ];

  const filteredItems = filter === 'ALL' ? favItems : favItems.filter(i => i.type === filter);

  return (
    <div className="fade-in" style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', minHeight: '80vh' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
        <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#fce7f3', color: '#ec4899', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
          <i className="fa-solid fa-heart"></i>
        </div>
        <div>
          <h1 style={{ margin: '0 0 4px 0', fontSize: '28px', fontWeight: '800', color: '#1f2937' }}>Your Favorites</h1>
          <p style={{ margin: 0, color: '#6b7280', fontSize: '15px' }}>Saved rides, communities, and frequent bookings for quick access.</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', overflowX: 'auto', paddingBottom: '8px' }}>
        {[
          { id: 'ALL', label: 'All Saved', icon: 'fa-globe' },
          { id: 'RIDES', label: 'Rides & Cargo', icon: 'fa-car' },
          { id: 'RENTALS', label: 'Rentals & Charters', icon: 'fa-key' },
          { id: 'COMMUNITY', label: 'Unions & Communities', icon: 'fa-users' }
        ].map(cat => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id as any)}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px',
              borderRadius: '12px', border: 'none', cursor: 'pointer', fontSize: '15px', fontWeight: '700',
              background: filter === cat.id ? '#ec4899' : '#ffffff',
              color: filter === cat.id ? '#ffffff' : '#4b5563',
              boxShadow: filter === cat.id ? '0 4px 12px rgba(236, 72, 153, 0.3)' : '0 1px 3px rgba(0,0,0,0.1)',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
          >
            <i className={`fa-solid ${cat.icon}`}></i> {cat.label}
          </button>
        ))}
      </div>

      {filteredItems.length === 0 ? (
        <div style={{ background: '#ffffff', borderRadius: '24px', padding: '64px 24px', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <i className="fa-regular fa-heart" style={{ fontSize: '48px', color: '#d1d5db', marginBottom: '16px' }}></i>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', color: '#374151', fontWeight: '700' }}>No favorites found</h3>
          <p style={{ margin: 0, color: '#6b7280' }}>You haven't saved any {filter !== 'ALL' ? filter.toLowerCase() : 'items'} yet.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
          {filteredItems.map((item, idx) => (
            <div 
              key={idx} 
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                padding: '24px',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                border: '1px solid #f3f4f6',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.05)'; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: item.color + '20', color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#fce7f3', color: '#ec4899', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <i className="fa-solid fa-heart"></i>
                </div>
              </div>
              
              <div>
                <div style={{ fontSize: '11px', fontWeight: '700', color: item.color, letterSpacing: '1px', marginBottom: '4px' }}>{item.type}</div>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: '800', color: '#111827' }}>{item.title}</h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {item.subtitle}
                </p>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '16px', borderTop: '1px dashed #e5e7eb' }}>
                <div style={{ fontSize: '18px', fontWeight: '800', color: '#111827' }}>{item.price}</div>
                <button style={{ background: '#111827', color: '#ffffff', border: 'none', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
