module.exports = [
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SubNavbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SubNavbar.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "web-app-layout",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SubNavbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                dangerouslySetInnerHTML: {
                    __html: `<main class="web-main-content">
      
      <!-- 1. HOME TAB (Wireframe-aligned Dashboard) -->
      <section class="tab-screen active" id="tab-home">
        
        <!-- Home Header Row (Search Only - Location moved to Nav) -->
        <div class="home-top-bar" style="justify-content: center; margin-bottom: 20px;">
          <div class="home-search-bar" onclick="openModal('modal-search')" style="max-width: 700px; width: 100%;">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" id="home-portal-search-placeholder" placeholder="Search rides, flights, trains, carriers, diagnostics..." readonly>
            <button class="search-btn">Search Portal</button>
          </div>
        </div>



        <!-- Shortcuts Row (Transport Only) -->
        <div class="shortcuts-row">
          <div class="shortcut-pill" onclick="openModal('modal-ride')">
            <i class="fa-solid fa-car-side" style="color: #ef4444;"></i>
            <span>Rides</span>
          </div>
          <div class="shortcut-pill" onclick="openModal('modal-carrier')">
            <i class="fa-solid fa-truck-moving" style="color: #f97316;"></i>
            <span>Carrier</span>
          </div>
          <div class="shortcut-pill" onclick="openModal('modal-rental')">
            <i class="fa-solid fa-key" style="color: #3b82f6;"></i>
            <span>Rental</span>
          </div>
          <div class="shortcut-pill" onclick="openModal('modal-community')">
            <i class="fa-solid fa-users" style="color: #a855f7;"></i>
            <span>Community</span>
          </div>
          <div class="shortcut-pill" onclick="openModal('modal-drivers')">
            <i class="fa-solid fa-user-tie" style="color: #10b981;"></i>
            <span>Drivers On Demand</span>
          </div>
          <div class="shortcut-pill" onclick="openModal('modal-air')">
            <i class="fa-solid fa-plane-departure" style="color: #06b6d4;"></i>
            <span>Air Travel</span>
          </div>
          <div class="shortcut-pill" onclick="openModal('modal-train')">
            <i class="fa-solid fa-train" style="color: #6366f1;"></i>
            <span>Train</span>
          </div>
          <div class="shortcut-pill" onclick="openModal('modal-parking')">
            <i class="fa-solid fa-square-parking" style="color: #14b8a6;"></i>
            <span>Shared Parking</span>
          </div>
          <div class="shortcut-pill" onclick="openModal('modal-find-vehicle')">
            <i class="fa-solid fa-location-crosshairs" style="color: #ec4899;"></i>
            <span>Find My Vehicle</span>
          </div>
          <div class="shortcut-pill" onclick="openModal('modal-bookings-registry')">
            <i class="fa-solid fa-receipt" style="color: #f5c518;"></i>
            <span>My Bookings</span>
          </div>
          <div class="shortcut-pill shortcut-add" onclick="alert('Configure custom shortcut widget')">
            <i class="fa-solid fa-plus"></i>
            <span>Shortcut +</span>
          </div>
        </div>

        <!-- SART Transport Services Grid -->
        <div class="recommended-section">
          <h2>Book a Service</h2>
          <p>All SART transportation services at your fingertips</p>
          <div class="recommended-grid" style="grid-template-columns: repeat(5, 1fr);">

            <!-- Card 1: Rides (Red) -->
            <div class="recommended-card rec-card-red" onclick="openModal('modal-ride')">
              <div class="rec-card-top-row">
                <span class="rec-card-tag">Road</span>
                <span class="rec-card-rating"><i class="fa-solid fa-star"></i> 4.9</span>
              </div>
              <div class="rec-card-body">
                <span class="rec-card-illustration">🚗</span>
              </div>
              <div class="rec-card-footer">
                <h3 class="rec-card-title">Rides</h3>
                <span class="rec-card-price">From ₹800</span>
              </div>
            </div>

            <!-- Card 2: Carrier (Orange) -->
            <div class="recommended-card rec-card-orange" onclick="openModal('modal-carrier')">
              <div class="rec-card-top-row">
                <span class="rec-card-tag">Logistics</span>
                <span class="rec-card-rating"><i class="fa-solid fa-star"></i> 4.8</span>
              </div>
              <div class="rec-card-body">
                <span class="rec-card-illustration">🚛</span>
              </div>
              <div class="rec-card-footer">
                <h3 class="rec-card-title">Carrier</h3>
                <span class="rec-card-price">From ₹3,500</span>
              </div>
            </div>

            <!-- Card 3: Rental (Blue) -->
            <div class="recommended-card rec-card-blue" onclick="openModal('modal-rental')">
              <div class="rec-card-top-row">
                <span class="rec-card-tag">Self-Drive</span>
                <span class="rec-card-rating"><i class="fa-solid fa-star"></i> 4.9</span>
              </div>
              <div class="rec-card-body">
                <span class="rec-card-illustration">🔑</span>
              </div>
              <div class="rec-card-footer">
                <h3 class="rec-card-title">Rental</h3>
                <span class="rec-card-price">From ₹1,800/day</span>
              </div>
            </div>

            <!-- Card 4: Community (Purple) -->
            <div class="recommended-card rec-card-purple" onclick="openModal('modal-community')">
              <div class="rec-card-top-row">
                <span class="rec-card-tag">Shared</span>
                <span class="rec-card-rating"><i class="fa-solid fa-star"></i> 4.7</span>
              </div>
              <div class="rec-card-body">
                <span class="rec-card-illustration">👥</span>
              </div>
              <div class="rec-card-footer">
                <h3 class="rec-card-title">Community</h3>
                <span class="rec-card-price">Ride Pooling</span>
              </div>
            </div>

            <!-- Card 5: Drivers On Demand (Green) -->
            <div class="recommended-card rec-card-green" onclick="openModal('modal-drivers')">
              <div class="rec-card-top-row">
                <span class="rec-card-tag">On Demand</span>
                <span class="rec-card-rating"><i class="fa-solid fa-star"></i> 4.8</span>
              </div>
              <div class="rec-card-body">
                <span class="rec-card-illustration">👨‍✈️</span>
              </div>
              <div class="rec-card-footer">
                <h3 class="rec-card-title">Drivers On Demand</h3>
                <span class="rec-card-price">From ₹1,200</span>
              </div>
            </div>

            <!-- Card 6: Shared Parking (Teal) -->
            <div class="recommended-card rec-card-teal" onclick="openModal('modal-parking')">
              <div class="rec-card-top-row">
                <span class="rec-card-tag">Parking</span>
                <span class="rec-card-rating"><i class="fa-solid fa-star"></i> 4.6</span>
              </div>
              <div class="rec-card-body">
                <span class="rec-card-illustration">🅿️</span>
              </div>
              <div class="rec-card-footer">
                <h3 class="rec-card-title">Shared Parking</h3>
                <span class="rec-card-price">From ₹150</span>
              </div>
            </div>

            <!-- Card 7: Air (Yellow/Gold) -->
            <div class="recommended-card rec-card-pink" onclick="openModal('modal-air')" style="--glow-pink: #f59e0b;">
              <div class="rec-card-top-row">
                <span class="rec-card-tag">Fly</span>
                <span class="rec-card-rating"><i class="fa-solid fa-star"></i> 4.9</span>
              </div>
              <div class="rec-card-body">
                <span class="rec-card-illustration">✈️</span>
              </div>
              <div class="rec-card-footer">
                <h3 class="rec-card-title">Air Travel</h3>
                <span class="rec-card-price">From ₹4,500</span>
              </div>
            </div>

            <!-- Card 8: Train (Indigo) -->
            <div class="recommended-card rec-card-indigo" onclick="openModal('modal-train')">
              <div class="rec-card-top-row">
                <span class="rec-card-tag">Rail</span>
                <span class="rec-card-rating"><i class="fa-solid fa-star"></i> 4.9</span>
              </div>
              <div class="rec-card-body">
                <span class="rec-card-illustration">🚆</span>
              </div>
              <div class="rec-card-footer">
                <h3 class="rec-card-title">Train</h3>
                <span class="rec-card-price">From ₹850</span>
              </div>
            </div>

            <!-- Card 9: Sea (Cyan) -->
            <div class="recommended-card rec-card-cyan" onclick="openModal('modal-sea')">
              <div class="rec-card-top-row">
                <span class="rec-card-tag">Sail</span>
                <span class="rec-card-rating"><i class="fa-solid fa-star"></i> 4.7</span>
              </div>
              <div class="rec-card-body">
                <span class="rec-card-illustration">⛴️</span>
              </div>
              <div class="rec-card-footer">
                <h3 class="rec-card-title">Sea Voyage</h3>
                <span class="rec-card-price">From ₹600</span>
              </div>
            </div>

            <!-- Card 10: Mechanic (Slate) -->
            <div class="recommended-card rec-card-slate" onclick="openModal('modal-mechanic')">
              <div class="rec-card-top-row">
                <span class="rec-card-tag">Service</span>
                <span class="rec-card-rating"><i class="fa-solid fa-star"></i> 4.8</span>
              </div>
              <div class="rec-card-body">
                <span class="rec-card-illustration">🔧</span>
              </div>
              <div class="rec-card-footer">
                <h3 class="rec-card-title">Mechanic</h3>
                <span class="rec-card-price">From ₹1,200</span>
              </div>
            </div>

          </div>
        </div>

        <!-- Hero Carousel Section (Bokspot Style) -->
        <div class="hero-carousel-container" style="margin-bottom: 20px;">
          <!-- Slide 1 (Rides) -->
          <div class="carousel-slide active" id="slide-0">
            <div class="slide-bg" style="background-image: url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80');"></div>
            <div class="slide-content">
              <span class="slide-tag" style="background: rgba(239, 68, 68, 0.15); color: #ef4444; border-color: rgba(239,68,68,0.3);">City Rides</span>
              <h2 class="slide-title">Book a Ride Instantly</h2>
              <p class="slide-desc">Get a cab, share a ride or book a premium vehicle — wherever you are, in seconds.</p>
              <button class="slide-btn" onclick="openModal('modal-ride')">BOOK RIDE NOW</button>
            </div>
          </div>
          <!-- Slide 2 (EV Rental) -->
          <div class="carousel-slide" id="slide-1">
            <div class="slide-bg" style="background-image: url('https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80');"></div>
            <div class="slide-content">
              <span class="slide-tag" style="background: rgba(59, 130, 246, 0.15); color: #3b82f6; border-color: rgba(59,130,246,0.3);">Self Drive</span>
              <h2 class="slide-title">Tata Nexon EV Rental</h2>
              <p class="slide-desc">Sleek, eco-friendly electric SUVs. 100% charged and ready for daily commutes.</p>
              <button class="slide-btn" onclick="openModal('modal-rental')">RENT EV NOW</button>
            </div>
          </div>
          <!-- Slide 3 (Carrier & Logistics) -->
          <div class="carousel-slide" id="slide-2">
            <div class="slide-bg" style="background-image: url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80');"></div>
            <div class="slide-content">
              <span class="slide-tag" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; border-color: rgba(245,158,11,0.3);">Carrier & Logistics</span>
              <h2 class="slide-title">Heavy Carrier On Demand</h2>
              <p class="slide-desc">Move goods, parcels and industrial cargo with full-track visibility across India.</p>
              <button class="slide-btn" onclick="openModal('modal-carrier')">BOOK CARRIER</button>
            </div>
          </div>

          <!-- Dots -->
          <div class="carousel-dots">
            <span class="carousel-dot active" onclick="setSlide(0)"></span>
            <span class="carousel-dot" onclick="setSlide(1)"></span>
            <span class="carousel-dot" onclick="setSlide(2)"></span>
          </div>
        </div>

        <!-- Live Fleet & Route Tracker Map Section -->
        <div class="home-map-wrapper">
          <div class="home-map-title-row">
            <h2>Live Fleet & Route Tracker</h2>
            <span class="action-link" onclick="toggleMapHotspots()"><i class="fa-solid fa-radar"></i> Refresh Nearby Fleet</span>
          </div>
          
          <div class="home-map-panel">
            <div id="explore-map"></div>
            
            <!-- Floating Actions Overlay -->
            <div class="map-floating-bottom-left">
              <button class="map-action-btn-liked" id="home-liked-btn" onclick="openModal('modal-liked')">
                <i class="fa-solid fa-star"></i> LIKED
              </button>
            </div>
            <div class="map-floating-bottom-right">
              <button class="map-action-btn-nearby" id="home-nearby-btn" onclick="toggleMapHotspots()">
                <i class="fa-solid fa-radar"></i> NEAR BY FIND
              </button>
            </div>
            
            <!-- Floating Map Controls -->
            <div class="map-floating-controls">
              <button class="map-circle-btn" onclick="zoomInMap()"><i class="fa-solid fa-plus"></i></button>
              <button class="map-circle-btn" onclick="zoomOutMap()"><i class="fa-solid fa-minus"></i></button>
              <button class="map-circle-btn" onclick="recenterMap()"><i class="fa-solid fa-crosshairs"></i></button>
            </div>

            <!-- Floating Active Booking Card overlay on Map -->
            <div class="map-active-booking-panel floating-map-booking-panel" id="map-active-booking-card" style="display: none;">
              <div class="panel-header-badge">LIVE TRACKING ACTIVE</div>
              <div class="panel-main">
                <div class="panel-icon-wrap" id="map-active-booking-icon-container">
                  <i class="fa-solid fa-car-side" id="map-active-booking-icon"></i>
                </div>
                <div class="panel-desc">
                  <h4 id="map-active-booking-title">Ride to Kempegowda Airport</h4>
                  <p id="map-active-booking-desc">Driver is starting journey...</p>
                </div>
              </div>
              <button class="cancel-booking-btn" onclick="openModal('modal-bookings-registry')">Manage Ticket Details</button>
            </div>
          </div>
        </div>

        <!-- News Feed Grid Area -->
        <div class="dashboard-card" id="news-section-div" style="margin-top: 18px;">
          <div class="section-header-row">
            <h2 class="card-headline">Latest Transit Ecosystem News</h2>
            <span class="action-link" onclick="alert('Auto News RSS Feed connected.')">See All Feed</span>
          </div>
          <div class="web-news-row" id="news-cards-container">
            <!-- Loaded dynamically -->
          </div>
        </div>
      </section>
      
      <!-- 3. PREMIUM SART STORE TAB -->
      <section class="tab-screen" id="tab-store">
        <div class="store-container">
          
          <div class="store-hero">
            <div class="store-hero-text">
              <h1>SART Smart Store</h1>
              <p>Enhance your commute with certified telemetry upgrades, advanced diagnostics, and premium vehicle accessories.</p>
            </div>
            <div class="store-hero-image">🔋</div>
          </div>
          
          <div class="store-grid-layout">
            <!-- Left Products Section -->
            <div class="store-products-section">
              <div>
                <h3 class="store-category-title">Popular Accessories</h3>
                <div class="store-products-grid">
                  <!-- Card 1 -->
                  <div class="store-product-card">
                    <span class="product-badge">Top Seller</span>
                    <div class="product-image-container">⚡</div>
                    <div class="product-info">
                      <h3>Smart Fast Charger Pro</h3>
                      <p>Ultra-compact 7.2kW AC home charger with auto battery cut-off and mobile app telemetry link.</p>
                    </div>
                    <div class="product-footer">
                      <span class="product-price">₹18,500</span>
                      <button class="product-buy-btn" onclick="addStoreItemToCart('Smart Fast Charger Pro', 18500)">Add to Cart</button>
                    </div>
                  </div>
                  <!-- Card 2 -->
                  <div class="store-product-card">
                    <span class="product-badge">New</span>
                    <div class="product-image-container">🧭</div>
                    <div class="product-info">
                      <h3>GPS Tracker Pro</h3>
                      <p>Anti-theft satellite-linked tracker featuring real-time geofence alerts and remote engine lock.</p>
                    </div>
                    <div class="product-footer">
                      <span class="product-price">₹4,200</span>
                      <button class="product-buy-btn" onclick="addStoreItemToCart('GPS Tracker Pro', 4200)">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 class="store-category-title">Safety & Comfort</h3>
                <div class="store-products-grid">
                  <!-- Card 3 -->
                  <div class="store-product-card">
                    <span class="product-badge">Safety</span>
                    <div class="product-image-container">🛞</div>
                    <div class="product-info">
                      <h3>Smart Tire Pressure Gauge</h3>
                      <p>Bluetooth tire valve caps displaying precise PSI diagnostics directly on SART AI dashboard.</p>
                    </div>
                    <div class="product-footer">
                      <span class="product-price">₹2,800</span>
                      <button class="product-buy-btn" onclick="addStoreItemToCart('Smart Tire Pressure Gauge', 2800)">Add to Cart</button>
                    </div>
                  </div>
                  <!-- Card 4 -->
                  <div class="store-product-card">
                    <span class="product-badge">Upgrade</span>
                    <div class="product-image-container">🛋️</div>
                    <div class="product-info">
                      <h3>Chauffeur Comfort Cushion</h3>
                      <p>Ergonomic memory foam cushion with orthopedic support, tailor-made for long distance trips.</p>
                    </div>
                    <div class="product-footer">
                      <span class="product-price">₹1,950</span>
                      <button class="product-buy-btn" onclick="addStoreItemToCart('Chauffeur Comfort Cushion', 1950)">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Right Cart Panel -->
            <div class="store-cart-panel">
              <div class="cart-header">
                <h3>Shopping Cart</h3>
                <i class="fa-solid fa-cart-shopping" style="color: var(--primary);"></i>
              </div>
              <div class="cart-items-list" id="store-cart-items">
                <!-- Cart items list dynamically populated -->
                <div style="text-align: center; color: var(--text-secondary); padding: 30px; font-size:12px;">Your cart is empty.</div>
              </div>
              <div class="cart-totals">
                <div class="cart-total-row">
                  <span>Subtotal</span>
                  <span id="store-cart-subtotal">₹0.00</span>
                </div>
                <div class="cart-total-row" style="font-weight: 800; border-top: 1px solid var(--dark-border); padding-top: 10px; margin-top: 5px;">
                  <span>Grand Total</span>
                  <span id="store-cart-total" style="color: var(--primary);">₹0.00</span>
                </div>
              </div>
              <button class="checkout-btn" onclick="checkoutStoreCart()">Pay via SART Wallet</button>
            </div>
          </div>
          
        </div>
      </section>
      
      <!-- 3. AI ASSISTANT TAB -->
      <section class="tab-screen" id="tab-ai">
        <div class="ai-assistant-layout">
          <div class="dashboard-card ai-chat-card">
            <div class="ai-chat-header">
              <div class="ai-copilot-title">
                <i class="fa-solid fa-robot"></i>
                <div>
                  <h3>SART AI Copilot</h3>
                  <p>Vehicle Telemetry & Route Optimizer</p>
                </div>
              </div>
              <span class="ai-status-pulse"><span class="pulse-dot"></span> Online</span>
            </div>
            
            <div class="ai-chat-body" id="ai-chat-history">
              <div class="chat-msg system">
                <p>System Initialized: AI Copilot diagnostics connected to Tata Nexon EV [KA-03-MY-8820].</p>
              </div>
              <div class="chat-msg assistant">
                <p>Hello Alex! I am your SART AI Assistant. I have analyzed your vehicles. Your Tata Nexon EV battery status is healthy at 84% charge. Front-left tire pressure is slightly low (28 PSI). Let me know if you want me to search route traffic updates or schedule a tire inflator upgrade from the store!</p>
              </div>
            </div>
            
            <div class="ai-chat-footer">
              <input type="text" id="ai-chat-input" placeholder="Ask AI Copilot: 'Diagnose vehicle warnings', 'Optimize commute for NH-44', 'Suggest nearest EV spot'..." onkeydown="if(event.key==='Enter') sendAiMessage()">
              <button class="ai-send-btn" onclick="sendAiMessage()"><i class="fa-solid fa-paper-plane"></i></button>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. SUPER WALLET TAB -->
      <section class="tab-screen" id="tab-wallet">
        <div class="wallet-page-layout">
          
          <div class="wallet-dashboard-col">
            <div class="dashboard-card wallet-card-wide">
              <div class="wallet-page-header">
                <h2>Super Wallet Dashboard</h2>
                <span class="gold-tier-badge">GOLD ELITE MEMBER</span>
              </div>
              
              <div class="wallet-page-metrics">
                <div class="wallet-metric-box">
                  <span class="lbl">Available Balance</span>
                  <h1 class="val" id="wallet-pg-balance">₹15,000.00</h1>
                  <span class="subtext">Secure escrow holding</span>
                </div>
                <div class="wallet-metric-box">
                  <span class="lbl">Loyalty Points</span>
                  <h1 class="val" style="color:var(--secondary);" id="wallet-pg-points">2,450 pts</h1>
                  <span class="subtext">Claim details under profile</span>
                </div>
                <div class="wallet-metric-box">
                  <span class="lbl">Accumulated Cashback</span>
                  <h1 class="val" style="color:var(--success);" id="wallet-pg-cashback">₹350.00</h1>
                  <button class="claim-btn" onclick="claimCashbackMoney()">Claim to Balance</button>
                </div>
              </div>
            </div>

            <!-- Wallet Forms row -->
            <div class="wallet-forms-row">
              <div class="dashboard-card" style="flex: 1;">
                <h3><i class="fa-solid fa-plus" style="color:var(--success);"></i> Load Funds</h3>
                <p style="font-size:11px; color:var(--text-secondary); margin-bottom:12px;">Add instant digital currency to your wallet balance.</p>
                
                <div class="form-group">
                  <label>Amount to Deposit (INR)</label>
                  <input type="number" class="input-field" id="wallet-pg-deposit-amount" value="5000">
                </div>
                <div class="form-group">
                  <label>Payment Source Card</label>
                  <select class="input-field select-field" id="wallet-pg-deposit-source">
                    <option value="Visa (last 4: 4242)">Visa •••• 4242</option>
                    <option value="Mastercard (last 4: 8839)">Mastercard •••• 8839</option>
                  </select>
                </div>
                <button class="action-btn" onclick="executeWalletPageDeposit()">Process Deposit</button>
              </div>

              <div class="dashboard-card" style="flex: 1;">
                <h3><i class="fa-solid fa-paper-plane" style="color:var(--primary);"></i> Send Money (UPI)</h3>
                <p style="font-size:11px; color:var(--text-secondary); margin-bottom:12px;">Transfer funds immediately to any UPI ID or account number.</p>
                
                <div class="form-group">
                  <label>Recipient Address</label>
                  <input type="text" class="input-field" id="wallet-pg-transfer-recipient" placeholder="upi-id@bank or account no" value="rajesh.kumar@upi">
                </div>
                <div class="form-group">
                  <label>Amount to Send (INR)</label>
                  <input type="number" class="input-field" id="wallet-pg-transfer-amount" value="1000">
                </div>
                <button class="action-btn" onclick="executeWalletPageTransfer()">Transfer Funds</button>
              </div>
            </div>
          </div>

          <div class="wallet-history-col">
            <div class="dashboard-card" style="height: 100%; display: flex; flex-direction: column;">
              <h3>Recent Transaction Registry</h3>
              <p style="font-size:11px; color:var(--text-secondary); margin-bottom:14px;">Audit log of recent wallet charges and top-ups.</p>
              <div class="transactions-full-list" id="wallet-pg-transactions-list" style="flex:1; overflow-y:auto; display:flex; flex-direction:column; gap:10px;">
                <!-- Dynamically loaded -->
              </div>
            </div>
          </div>

        </div>
      </section>
      
      <!-- 5. PROFILE TAB (Premium Redesign) -->
      <section class="tab-screen" id="tab-profile">
        <div class="profile-container">
          
          <div class="profile-card">
            <div class="profile-avatar-container">
              <div class="profile-avatar">
                AC
              </div>
              <div class="profile-avatar-badge"></div>
            </div>
            <div class="profile-info-details">
              <h2>Alex Carter</h2>
              <p>alex.carter@sart.com • +91 98765 43210</p>
              <span class="profile-tier">SART TEAL ELITE</span>
            </div>
          </div>
          
          <div class="profile-stats-row">
            <div class="profile-stat-box">
              <div class="num">142</div>
              <div class="lbl">Total Trips</div>
            </div>
            <div class="profile-stat-box">
              <div class="num">₹15,000.00</div>
              <div class="lbl">Wallet Balance</div>
            </div>
            <div class="profile-stat-box">
              <div class="num">85%</div>
              <div class="lbl">Beta Trust</div>
            </div>
          </div>
          
          <div class="profile-sections-list">
            <div class="profile-section-item" onclick="openProfileSubpage('documents', 'Documents & Verification')">
              <div class="profile-section-left">
                <div class="profile-section-icon"><i class="fa-solid fa-folder-open"></i></div>
                <div class="profile-section-text">
                  <h4>Documents & DigiLocker</h4>
                  <p>Manage driving licenses, vehicle permit credentials & verified ID cards.</p>
                </div>
              </div>
              <i class="fa-solid fa-chevron-right" style="font-size:12px; color:var(--text-secondary);"></i>
            </div>
            
            <div class="profile-section-item" onclick="openProfileSubpage('payment', 'Payment Settings')">
              <div class="profile-section-left">
                <div class="profile-section-icon"><i class="fa-solid fa-credit-card"></i></div>
                <div class="profile-section-text">
                  <h4>Linked Payments & Wallets</h4>
                  <p>Configure bank accounts, credit cards, auto-recharge settings and UPI IDs.</p>
                </div>
              </div>
              <i class="fa-solid fa-chevron-right" style="font-size:12px; color:var(--text-secondary);"></i>
            </div>
            
            <div class="profile-section-item" onclick="openProfileSubpage('safety', 'Safety & Ride Settings')">
              <div class="profile-section-left">
                <div class="profile-section-icon"><i class="fa-solid fa-shield-halved"></i></div>
                <div class="profile-section-text">
                  <h4>Safety & Ride Preferences</h4>
                  <p>Configure kids & women protection, professional chauffeur mode, speed alerts.</p>
                </div>
              </div>
              <i class="fa-solid fa-chevron-right" style="font-size:12px; color:var(--text-secondary);"></i>
            </div>
            
            <div class="profile-section-item" onclick="openProfileSubpage('language', 'Language & Country')">
              <div class="profile-section-left">
                <div class="profile-section-icon"><i class="fa-solid fa-globe"></i></div>
                <div class="profile-section-text">
                  <h4>Localization Settings</h4>
                  <p>Set standard language (English), local currency (INR) and home country (India).</p>
                </div>
              </div>
              <i class="fa-solid fa-chevron-right" style="font-size:12px; color:var(--text-secondary);"></i>
            </div>
            
            <div class="profile-section-item" onclick="openProfileSubpage('help', 'Help & Support')">
              <div class="profile-section-left">
                <div class="profile-section-icon"><i class="fa-solid fa-circle-question"></i></div>
                <div class="profile-section-text">
                  <h4>Customer Help Desk</h4>
                  <p>Read FAQs, initiate safety contacts, or open support ticket entries.</p>
                </div>
              </div>
              <i class="fa-solid fa-chevron-right" style="font-size:12px; color:var(--text-secondary);"></i>
            </div>
            
            <div class="profile-section-item" onclick="openProfileSubpage('about', 'About SART')">
              <div class="profile-section-left">
                <div class="profile-section-icon"><i class="fa-solid fa-info"></i></div>
                <div class="profile-section-text">
                  <h4>About Universal SART</h4>
                  <p>Version 2.4.0-Beta. Standard legal privacy policy, terms of service agreements.</p>
                </div>
              </div>
              <i class="fa-solid fa-chevron-right" style="font-size:12px; color:var(--text-secondary);"></i>
            </div>
            
            <div class="profile-section-item" onclick="openModal('modal-bit-feed')">
              <div class="profile-section-left">
                <div class="profile-section-icon" style="background: rgba(21,127,138,0.15);"><i class="fa-solid fa-compass"></i></div>
                <div class="profile-section-text">
                  <h4>BIT Tool Active Feed</h4>
                  <p>Access the live activity dashboard tracking vehicle events across city sectors.</p>
                </div>
              </div>
              <i class="fa-solid fa-chevron-right" style="font-size:12px; color:var(--text-secondary);"></i>
            </div>
          </div>
          
        </div>
      </section>
      
      <!-- 5. DYNAMIC PROFILE SUB-PAGE VIEW PANEL -->
      <section class="tab-screen" id="tab-profile-subpage">
        <div class="dashboard-card" style="max-width: 800px; margin: 20px auto;">
          <div class="subpage-header">
            <button class="back-btn" onclick="backToProfile()"><i class="fa-solid fa-chevron-left"></i> Back to Profile</button>
            <h2 id="subpage-title-txt" style="font-size: 20px; font-weight: 800;">Settings Section</h2>
          </div>
          <hr style="border:0; border-top: 1px solid var(--dark-border); margin: 20px 0;">
          <div id="subpage-content-container">
            <!-- Loaded dynamically via js -->
          </div>
        </div>
      </section>
      
    </main>`
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: "/app.js",
                strategy: "lazyOnload"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 683,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useSartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/useSartStore.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Navbar() {
    const { location, setLocation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useSartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSartStore"])();
    const [isProfileOpen, setIsProfileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLocationOpen, setIsLocationOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "web-navbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nav-brand",
                                onClick: ()=>console.log('Home'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '28px',
                                            color: '#1a73e8',
                                            marginRight: '4px'
                                        },
                                        children: "bok"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 16,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '28px',
                                            color: '#ff5722'
                                        },
                                        children: "spot"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 17,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setIsLocationOpen(true),
                                className: "flex items-center gap-2 bg-[#9c7d30] text-white px-4 py-2 rounded-full cursor-pointer hover:bg-[#866a27] transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fa-solid fa-location-dot"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-sm",
                                        children: "Chennai"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 26,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fa-solid fa-chevron-down text-[10px] ml-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 27,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "nav-links",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nav-link active",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nav-link",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Categories"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nav-link",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Tracks"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav-controls flex items-center gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex items-center gap-2 bg-[#284160] text-white px-4 py-1.5 rounded-full font-bold text-sm hover:bg-[#1f334d] transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white text-[#284160] rounded-full w-6 h-6 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fa-solid fa-store text-xs"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    "VENDOR"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-headset text-xl cursor-pointer hover:text-white transition"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-gear text-xl cursor-pointer hover:text-white transition"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setIsProfileOpen(!isProfileOpen),
                                className: "w-8 h-8 rounded-full bg-[#1a73e8] text-white flex items-center justify-center font-bold cursor-pointer relative",
                                children: [
                                    "V",
                                    isProfileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-12 right-0 w-80 bg-white rounded-3xl p-4 shadow-xl z-50 flex flex-col items-center text-[#202124] cursor-default",
                                        onClick: (e)=>e.stopPropagation(),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-20 h-20 rounded-full bg-[#1a73e8] text-white text-4xl flex items-center justify-center relative mb-2",
                                                children: [
                                                    "V",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute bottom-0 right-0 bg-white text-gray-600 rounded-full p-1.5 shadow border border-gray-100 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fa-solid fa-camera text-xs"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Navbar.tsx",
                                                            lineNumber: 70,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Navbar.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold",
                                                children: "vinothkumar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 text-sm mb-4",
                                                children: "gmvinoth@bnxmail.com"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-[#1a73e8] font-semibold text-sm hover:bg-gray-50 transition mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fa-solid fa-user-gear"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Navbar.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Manage your account"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full border-t border-gray-200 my-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 81,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "w-full flex items-center gap-4 py-3 px-4 hover:bg-gray-50 rounded-xl transition font-semibold text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fa-solid fa-user-plus text-lg text-gray-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Navbar.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Add another account"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "w-full flex items-center gap-4 py-3 px-4 hover:bg-gray-50 rounded-xl transition font-semibold text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fa-solid fa-arrow-right-from-bracket text-lg text-gray-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Navbar.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Sign out of this account"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            isLocationOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/60 z-[999] flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white w-full max-w-2xl rounded-3xl p-6 shadow-2xl relative text-[#202124]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsLocationOpen(false),
                            className: "absolute top-6 right-6 text-gray-500 hover:text-black",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-xmark text-xl"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold mb-6",
                            children: "Select Location"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search city, area or locality",
                                    className: "w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex items-center gap-2 text-[#9c7d30] font-bold mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-location-crosshairs"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this),
                                " Use Current Location"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-4 gap-4 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-[#9c7d30] bg-[#fdfbf6] rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fa-solid fa-location-dot text-[#9c7d30] mb-2 text-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-sm",
                                            children: "Chennai"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer hover:border-gray-300 transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fa-solid fa-location-dot text-gray-400 mb-2 text-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 125,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-sm",
                                            children: "Bangalore"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer hover:border-gray-300 transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fa-solid fa-location-dot text-gray-400 mb-2 text-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-sm",
                                            children: "Goa"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer hover:border-gray-300 transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fa-solid fa-location-dot text-gray-400 mb-2 text-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-sm",
                                            children: "Hyderabad"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer hover:border-gray-300 transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fa-solid fa-location-dot text-gray-400 mb-2 text-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-sm",
                                            children: "Kolkata"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer hover:border-gray-300 transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fa-solid fa-location-dot text-gray-400 mb-2 text-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-sm",
                                            children: "Mumbai"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 142,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer hover:border-gray-300 transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fa-solid fa-location-dot text-gray-400 mb-2 text-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-sm",
                                            children: "Pune"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-bold text-[#475569] mb-4",
                            children: "All Cities"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-4 text-[#9c7d30] font-bold text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "A"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "B"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "C"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 43
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "D"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 57
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "E"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 71
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "F"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 85
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "G"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 99
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "H"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 113
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "I"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 127
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "J"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 141
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "K"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 155
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "L"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 169
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "M"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 183
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "N"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 197
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "O"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 211
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "P"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 225
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Q"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 239
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "R"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 253
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "S"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 267
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "T"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 281
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "U"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 295
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "V"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 309
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "W"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 323
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "X"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 337
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Y"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 351
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 365
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 99,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/SubNavbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SubNavbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useSartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/useSartStore.ts [app-ssr] (ecmascript)");
'use client';
;
;
function SubNavbar() {
    const { wallet } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useSartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSartStore"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "web-subnavbar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "subnav-links",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "subnav-link",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-plane"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SubNavbar.tsx",
                                lineNumber: 13,
                                columnNumber: 11
                            }, this),
                            " Travel"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SubNavbar.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "subnav-link",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-hotel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SubNavbar.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            " Stay & Accommodation"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SubNavbar.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "subnav-link",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-film"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SubNavbar.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            " Entertainment"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SubNavbar.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "subnav-link",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-football"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SubNavbar.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            " Sports"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SubNavbar.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "subnav-link",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-award"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SubNavbar.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            " Lifestyle Services"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SubNavbar.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SubNavbar.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "subnav-actions flex items-center gap-4 pr-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wallet-badge cursor-pointer hover:bg-opacity-80 transition bg-[#0052ff15] border border-[#0052ff40] px-4 py-1.5 rounded-md flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-wallet text-[#0052ff]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SubNavbar.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "wallet-val font-bold text-white",
                                children: [
                                    "₹",
                                    wallet.balance.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SubNavbar.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SubNavbar.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "subnav-btn btn-vendor",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-store"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SubNavbar.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            " VENDOR"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SubNavbar.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SubNavbar.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SubNavbar.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/store/useSartStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSartStore",
    ()=>useSartStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
;
;
const DEFAULT_STATE = {
    wallet: {
        balance: 15000.00,
        points: 2450,
        cashback: 350.00,
        transactions: [
            {
                id: 'tx-001',
                title: 'Airport Taxi Booking',
                amount: 800.00,
                date: new Date(Date.now() - 7200000).toLocaleString(),
                isCredit: false,
                category: 'Ride'
            },
            {
                id: 'tx-002',
                title: 'Tire Air Replacement Kit',
                amount: 3500.00,
                date: new Date(Date.now() - 86400000).toLocaleString(),
                isCredit: false,
                category: 'Store'
            },
            {
                id: 'tx-003',
                title: 'Visa Top-up Loaded',
                amount: 10000.00,
                date: new Date(Date.now() - 172800000).toLocaleString(),
                isCredit: true,
                category: 'Deposit'
            }
        ]
    },
    bookings: [
        {
            id: 'bk-001',
            title: 'Tata Nexon EV Rental',
            type: 'rental',
            dateTime: new Date(Date.now() + 172800000).toLocaleString(),
            details: 'Pickup: 10:00 AM • 3 Days Duration',
            status: 'Active',
            cost: 4500.00
        },
        {
            id: 'bk-002',
            title: 'Tire Diagnostics & Balance',
            type: 'mechanic',
            dateTime: new Date(Date.now() - 259200000).toLocaleString(),
            details: 'Assigned: Rajesh Kumar • Completed',
            status: 'Completed',
            cost: 1200.00
        }
    ],
    cart: [],
    wishlist: [],
    notifications: [
        {
            id: 'notif-1',
            title: 'Gold Tier Perks Unlocked!',
            desc: 'Enjoy free airport terminal lounge access & priority dispatch.',
            read: false,
            date: 'Today'
        },
        {
            id: 'notif-2',
            title: 'EV Battery Status Optimized',
            desc: 'Tata Nexon EV charge finished cycle. Ready for commutes.',
            read: false,
            date: 'Yesterday'
        },
        {
            id: 'notif-3',
            title: 'Toll Refund Processed',
            desc: '₹120 refund credited for NH-44 Fastag anomaly.',
            read: true,
            date: '3 days ago'
        }
    ],
    location: "Indiranagar, Bengaluru",
    activeBookingId: null
};
const useSartStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        ...DEFAULT_STATE,
        addTransaction: (tx)=>set((state)=>({
                    wallet: {
                        ...state.wallet,
                        transactions: [
                            tx,
                            ...state.wallet.transactions
                        ]
                    }
                })),
        updateBalance: (amount, isDeposit)=>set((state)=>{
                const newBalance = isDeposit ? state.wallet.balance + amount : state.wallet.balance - amount;
                return {
                    wallet: {
                        ...state.wallet,
                        balance: newBalance
                    }
                };
            }),
        addBooking: (booking)=>set((state)=>({
                    bookings: [
                        booking,
                        ...state.bookings
                    ],
                    activeBookingId: booking.id
                })),
        addToCart: (item)=>set((state)=>{
                const existing = state.cart.find((i)=>i.id === item.id);
                if (existing) {
                    return {
                        cart: state.cart.map((i)=>i.id === item.id ? {
                                ...i,
                                quantity: i.quantity + 1
                            } : i)
                    };
                }
                return {
                    cart: [
                        ...state.cart,
                        item
                    ]
                };
            }),
        removeFromCart: (itemId)=>set((state)=>({
                    cart: state.cart.filter((i)=>i.id !== itemId)
                })),
        clearCart: ()=>set({
                cart: []
            }),
        toggleWishlist: (itemId)=>set((state)=>{
                const exists = state.wishlist.includes(itemId);
                return {
                    wishlist: exists ? state.wishlist.filter((id)=>id !== itemId) : [
                        ...state.wishlist,
                        itemId
                    ]
                };
            }),
        setLocation: (loc)=>set({
                location: loc
            }),
        setActiveBookingId: (id)=>set({
                activeBookingId: id
            })
    }), {
    name: 'sart-storage-v2',
    partialize: (state)=>({
            wallet: state.wallet,
            bookings: state.bookings,
            cart: state.cart,
            wishlist: state.wishlist,
            location: state.location
        })
}));
}),
];

//# sourceMappingURL=src_1fso3bn._.js.map