'use client';

import React, { useState } from 'react';

// Step 1: Master Categories
const MASTER_CATEGORIES = [
  { id: 'bike', name: 'Bike', icon: 'fa-motorcycle', color: '#ff6b6b', type: 'ROAD' },
  { id: 'auto', name: 'Auto', icon: 'fa-taxi', color: '#f59e0b', type: 'ROAD' },
  { id: 'car', name: 'Car / Sedan', icon: 'fa-car', color: '#3b82f6', type: 'ROAD' },
  { id: 'suv', name: 'SUV & Multi-Utility', icon: 'fa-truck-pickup', color: '#ec4899', type: 'ROAD' },
  { id: 'bus', name: 'Bus & Minivan', icon: 'fa-bus', color: '#8b5cf6', type: 'ROAD' },
  { id: 'boat', name: 'Boat & Speedboat', icon: 'fa-ship', color: '#0ea5e9', type: 'SEA' },
  { id: 'yacht', name: 'Yacht & Cruise', icon: 'fa-anchor', color: '#0369a1', type: 'SEA' },
  { id: 'flight', name: 'Charter Flight', icon: 'fa-plane', color: '#8b5cf6', type: 'AIR' },
  { id: 'heli', name: 'Helicopter', icon: 'fa-helicopter', color: '#10b981', type: 'AIR' },
  { id: 'train', name: 'Express Train', icon: 'fa-train', color: '#eab308', type: 'RAIL' }
];

// Base rates per KM for dynamic pricing
const VEHICLE_DATABASE: Record<string, any[]> = {
  'bike': [
    { id: 'pedal', name: 'Pedal Bicycle', icon: 'fa-bicycle', color: '#14b8a6', ratePerKm: 5, capacity: 1, luggage: 0, models: 'Standard Pedal Bike' },
    { id: 'moto', name: 'Bike / Moto', icon: 'fa-motorcycle', color: '#ff6b6b', ratePerKm: 12, capacity: 1, luggage: 1, models: 'Splendor, Activa, Jupiter' },
    { id: 'escooter', name: 'Electric Scooter', icon: 'fa-bolt', color: '#10b981', ratePerKm: 8, capacity: 1, luggage: 0, models: 'Ather, Ola S1, TVS iQube' }
  ],
  'auto': [
    { id: 'auto-std', name: 'Standard Auto', icon: 'fa-taxi', color: '#f59e0b', ratePerKm: 18, capacity: 3, luggage: 2, models: 'Bajaj RE, TVS King' },
    { id: 'e-rickshaw', name: 'E-Rickshaw', icon: 'fa-leaf', color: '#34d399', ratePerKm: 15, capacity: 4, luggage: 2, models: 'Mahindra Treo, Piaggio Ape Electrik' }
  ],
  'car': [
    { id: 'mini', name: 'Mini Hatchback', icon: 'fa-car-side', color: '#3b82f6', ratePerKm: 22, capacity: 4, luggage: 2, models: 'Swift, Grand i10, WagonR' },
    { id: 'sedan', name: 'Premium Sedan', icon: 'fa-car', color: '#2563eb', ratePerKm: 28, capacity: 4, luggage: 3, models: 'Maruti Dzire, Honda Amaze, Ford Aspire' },
    { id: 'exec', name: 'Executive Luxury', icon: 'fa-gem', color: '#8b5cf6', ratePerKm: 55, capacity: 4, luggage: 3, models: 'Honda City, Hyundai Verna, VW Virtus' }
  ],
  'suv': [
    { id: 'suv-std', name: 'Standard SUV', icon: 'fa-truck-pickup', color: '#ec4899', ratePerKm: 35, capacity: 6, luggage: 4, models: 'Ertiga, XL6, Carens' },
    { id: 'suv-prem', name: 'Premium SUV XL', icon: 'fa-crown', color: '#eab308', ratePerKm: 45, capacity: 7, luggage: 5, models: 'Innova Crysta, XUV700, Safari' }
  ],
  'bus': [
    { id: 'minivan', name: 'Traveller', icon: 'fa-shuttle-van', color: '#14b8a6', ratePerKm: 60, capacity: 12, luggage: 8, models: 'Force Traveller 12 Seater' },
    { id: 'bus-std', name: 'Standard Bus', icon: 'fa-bus', color: '#8b5cf6', ratePerKm: 120, capacity: 40, luggage: 20, models: '40 Seater AC Coach' }
  ]
};

export default function RideBookingModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [step, setStep] = useState<1 | 2>(1);
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'ROAD' | 'SEA' | 'AIR' | 'RAIL'>('ALL');
  
  // Search Form State
  const [tripType, setTripType] = useState('Outstation One Way');
  const [pickup, setPickup] = useState('Chennai Central');
  const [dropoff, setDropoff] = useState('Chennai International Airport (MAA)');
  const [pickupDate, setPickupDate] = useState('30 Sep 26');
  const [pickupTime, setPickupTime] = useState('10:00 AM');
  
  // Data State
  const [relatedVehicles, setRelatedVehicles] = useState<any[]>([]);
  const [selectedMasterId, setSelectedMasterId] = useState<string>('');
  
  // Dummy Distance Calculation
  const estimatedDistance = 15; // km
  const estimatedTime = 41; // mins

  React.useEffect(() => {
    const handleReset = () => setStep(1);
    window.addEventListener('resetModalSteps', handleReset);

    // Deep link handling
    if (isOpen && typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.includes('/rides/') && path.split('/rides/')[1]) {
        const masterId = decodeURIComponent(path.split('/rides/')[1]).toLowerCase();
        const foundMaster = MASTER_CATEGORIES.find(m => m.name.toLowerCase().includes(masterId) || m.id === masterId);
        
        if (foundMaster) {
          setSelectedMasterId(foundMaster.id);
          setRelatedVehicles(VEHICLE_DATABASE[foundMaster.id] || VEHICLE_DATABASE['car']);
          setStep(2);
        }
      }
    }
    return () => window.removeEventListener('resetModalSteps', handleReset);
  }, [isOpen]);

  if (!isOpen) return null;

  const updateUrl = (path: string) => {
    if (typeof window !== 'undefined') window.history.pushState(null, '', path);
  };

  const handleSelectMasterCategory = (master: any) => {
    setSelectedMasterId(master.id);
    setRelatedVehicles(VEHICLE_DATABASE[master.id] || VEHICLE_DATABASE['car']);
    setStep(2);
    updateUrl(`/home/rides/${encodeURIComponent(master.id)}`);
  };

  const handleBackToFleet = () => {
    setStep(1);
    updateUrl('/home/ride');
  };

  const handleClose = () => {
    setStep(1);
    updateUrl('/');
    onClose();
  };

  const handleFinalBook = (v: any, finalPrice: number) => {
    const subtitle = `${v.name} • ${tripType} • ${pickupDate} ${pickupTime}`;
    if ((window as any).executeGenericBooking) {
      (window as any).executeGenericBooking('ride', `Ride: ${pickup} to ${dropoff}`, subtitle, finalPrice, { from: pickup, to: dropoff, date: pickupDate, time: pickupTime });
    }
    handleClose();
  };

  const displayedMasters = activeCategory === 'ALL' 
    ? MASTER_CATEGORIES 
    : MASTER_CATEGORIES.filter(m => m.type === activeCategory);

  return (
    <div className="modal-overlay open" style={{ display: 'flex', zIndex: 1000, background: 'rgba(0,0,0,0.6)' }} onClick={handleClose}>
      <div className="modal-sheet centered-modal" style={{ maxWidth: step === 2 ? '1300px' : '900px', width: '95%', height: step === 2 ? '95vh' : '80vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f3f4f6', borderRadius: step === 2 ? '16px' : '24px', overflow: 'hidden', transition: 'max-width 0.3s ease, height 0.3s ease' }} onClick={e => e.stopPropagation()}>
        
        <div className="hack-absorber" style={{ display: 'none' }}></div>

        {/* ================= STEP 1: SELECT MASTER CATEGORY ================= */}
        {step === 1 && (
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: '#ffffff', borderBottom: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: '22px', fontWeight: '800', color: '#111827', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <i className="fa-solid fa-car-side" style={{ color: '#3b82f6' }}></i> Ride Booking
              </div>
              <button onClick={handleClose} style={{ background: '#f3f4f6', border: 'none', width: '36px', height: '36px', borderRadius: '50%', color: '#4b5563', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            
            <div style={{ flex: 1, overflowY: 'auto', padding: '24px', background: '#ffffff' }}>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', overflowX: 'auto', paddingBottom: '8px' }}>
                {[
                  { id: 'ALL', label: 'All Fleet', icon: 'fa-globe', color: '#f59e0b' },
                  { id: 'ROAD', label: 'Road', icon: 'fa-car', color: '#3b82f6' },
                  { id: 'SEA', label: 'Sea & Water', icon: 'fa-ship', color: '#0ea5e9' },
                  { id: 'AIR', label: 'Air Charters', icon: 'fa-plane', color: '#8b5cf6' },
                  { id: 'RAIL', label: 'Train & Rail', icon: 'fa-train', color: '#10b981' }
                ].map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id as any)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 20px',
                      borderRadius: '12px', border: 'none', cursor: 'pointer', fontSize: '15px', fontWeight: '700',
                      background: activeCategory === cat.id ? cat.color : '#f3f4f6',
                      color: activeCategory === cat.id ? '#ffffff' : '#4b5563',
                      transition: 'all 0.2s ease', whiteSpace: 'nowrap'
                    }}
                  >
                    <i className={`fa-solid ${cat.icon}`}></i> {cat.label}
                  </button>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '20px' }}>
                {displayedMasters.map(m => (
                  <div 
                    key={m.id} 
                    onClick={() => handleSelectMasterCategory(m)}
                    style={{
                      background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '24px 12px',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)'; }}
                  >
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: m.color + '20', color: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '16px' }}>
                      <i className={`fa-solid ${m.icon}`}></i>
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: '800', color: '#1f2937', textAlign: 'center' }}>
                      {m.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ================= STEP 2: DASHBOARD (MAKEMYTRIP STYLE) ================= */}
        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
            
            {/* Top Search Bar (Dark Theme) */}
            <div style={{ display: 'flex', alignItems: 'center', background: '#222222', padding: '12px 20px', gap: '12px', flexShrink: 0 }}>
              <button onClick={handleBackToFleet} style={{ background: 'transparent', border: 'none', color: '#ffffff', cursor: 'pointer', fontSize: '18px', marginRight: '8px' }}>
                <i className="fa-solid fa-arrow-left"></i>
              </button>

              {/* Trip Type */}
              <div style={{ background: '#333333', borderRadius: '6px', padding: '6px 12px', display: 'flex', flexDirection: 'column', flex: '0 0 auto' }}>
                <span style={{ fontSize: '10px', color: '#a3a3a3', textTransform: 'uppercase', marginBottom: '2px' }}>Trip Type</span>
                <select value={tripType} onChange={e => setTripType(e.target.value)} style={{ background: 'transparent', border: 'none', color: '#ffffff', fontSize: '14px', fontWeight: '600', outline: 'none', cursor: 'pointer', padding: 0 }}>
                  <option value="Outstation One Way" style={{color:'#000'}}>Outstation One Way</option>
                  <option value="Round Trip" style={{color:'#000'}}>Round Trip</option>
                  <option value="Hourly Rental" style={{color:'#000'}}>Hourly Rental</option>
                </select>
              </div>

              {/* Locations Group */}
              <div style={{ display: 'flex', alignItems: 'center', background: '#333333', borderRadius: '6px', flex: 1, position: 'relative' }}>
                <div style={{ flex: 1, padding: '6px 16px', position: 'relative' }}>
                  <span style={{ fontSize: '10px', color: '#a3a3a3', textTransform: 'uppercase', marginBottom: '2px', display: 'block' }}>From</span>
                  <input type="text" value={pickup} onChange={e => setPickup(e.target.value)} style={{ background: 'transparent', border: 'none', color: '#ffffff', fontSize: '14px', fontWeight: '600', width: '100%', outline: 'none' }} />
                </div>
                
                {/* Swap Button */}
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '1px', height: '30px', background: '#555555' }}></div>
                  <button onClick={() => { const temp = pickup; setPickup(dropoff); setDropoff(temp); }} style={{ position: 'absolute', background: '#444444', border: '1px solid #555', color: '#fff', width: '24px', height: '24px', borderRadius: '50%', cursor: 'pointer', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="fa-solid fa-right-left" style={{ fontSize: '10px' }}></i>
                  </button>
                </div>

                <div style={{ flex: 1, padding: '6px 16px', display: 'flex', alignItems: 'center' }}>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: '10px', color: '#a3a3a3', textTransform: 'uppercase', marginBottom: '2px', display: 'block' }}>To</span>
                    <input type="text" value={dropoff} onChange={e => setDropoff(e.target.value)} style={{ background: 'transparent', border: 'none', color: '#ffffff', fontSize: '14px', fontWeight: '600', width: '100%', outline: 'none' }} />
                  </div>
                  {/* Add Stop inside the TO block, aligned to the right */}
                  <button style={{ background: '#222', border: '1px solid #555', color: '#fff', fontSize: '10px', fontWeight: '600', padding: '4px 10px', borderRadius: '12px', cursor: 'pointer', whiteSpace: 'nowrap', marginLeft: '12px' }}>
                    <i className="fa-solid fa-plus" style={{ color: '#e11d48' }}></i> Add Stop
                  </button>
                </div>
              </div>

              {/* Date & Time */}
              <div style={{ background: '#333333', borderRadius: '6px', padding: '6px 12px', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '10px', color: '#a3a3a3', textTransform: 'uppercase', marginBottom: '2px' }}>Pickup Date</span>
                <input type="text" value={pickupDate} onChange={e => setPickupDate(e.target.value)} style={{ background: 'transparent', border: 'none', color: '#ffffff', fontSize: '14px', fontWeight: '600', width: '90px', outline: 'none' }} />
              </div>
              <div style={{ background: '#333333', borderRadius: '6px', padding: '6px 12px', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '10px', color: '#a3a3a3', textTransform: 'uppercase', marginBottom: '2px' }}>Pickup Time</span>
                <input type="text" value={pickupTime} onChange={e => setPickupTime(e.target.value)} style={{ background: 'transparent', border: 'none', color: '#ffffff', fontSize: '14px', fontWeight: '600', width: '70px', outline: 'none' }} />
              </div>

              <button style={{ background: '#e11d48', color: '#ffffff', border: 'none', padding: '12px 24px', borderRadius: '24px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', marginLeft: '8px', flexShrink: 0 }}>
                Update Search
              </button>
              
              <button onClick={handleClose} style={{ background: 'transparent', border: 'none', color: '#a3a3a3', cursor: 'pointer', fontSize: '20px', marginLeft: '8px', flexShrink: 0 }}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/* Main Content Area */}
            <div style={{ display: 'flex', flex: 1, overflow: 'hidden', minHeight: 0 }}>
              
              {/* Left Sidebar (Map & Route Info) */}
              <div style={{ width: '320px', background: '#ffffff', padding: '20px', overflowY: 'auto', borderRight: '1px solid #e5e7eb' }}>
                
                {/* Banner */}
                <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '8px', padding: '12px', marginBottom: '20px' }}>
                  <div style={{ fontSize: '11px', fontWeight: '800', color: '#059669', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <i className="fa-regular fa-circle-check"></i> STATE PERMIT INCLUDED
                  </div>
                  <div style={{ fontSize: '12px', color: '#065f46', lineHeight: '1.4' }}>
                    Toll, permit and inter-city travel charges are included in the fare.
                  </div>
                </div>

                {/* Map Card */}
                <div style={{ border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden', background: '#ffffff', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                  <div style={{ padding: '16px', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: '800', color: '#111827' }}>
                    <i className="fa-solid fa-location-dot"></i> Your Route
                  </div>
                  
                  {/* Fake Map Background */}
                  <div style={{ height: '220px', background: '#f3f4f6', backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    
                    {/* Fake Route SVG */}
                    <div style={{ position: 'absolute', width: '80%', height: '80%' }}>
                      <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', strokeDasharray: '4 4', strokeWidth: '2', stroke: '#3b82f6', fill: 'none' }}>
                        <path d="M 20 80 Q 50 20 80 20" />
                      </svg>
                      <div style={{ position: 'absolute', bottom: '10%', left: '15%', width: '12px', height: '12px', borderRadius: '50%', background: '#10b981', border: '2px solid #fff' }}></div>
                      <div style={{ position: 'absolute', top: '15%', right: '15%', width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444', border: '2px solid #fff' }}></div>
                      
                      <div style={{ position: 'absolute', bottom: '-5%', left: '0%', fontSize: '11px', fontWeight: '700', color: '#111827', background: 'rgba(255,255,255,0.8)', padding: '2px 6px', borderRadius: '4px' }}>{pickup.split(' ')[0]}</div>
                      <div style={{ position: 'absolute', top: '0%', right: '0%', fontSize: '11px', fontWeight: '700', color: '#111827', background: 'rgba(255,255,255,0.8)', padding: '2px 6px', borderRadius: '4px' }}>{dropoff.split(' ')[0]}</div>
                    </div>
                  </div>

                  {/* Route Stats */}
                  <div style={{ display: 'flex', padding: '16px 0', borderTop: '1px solid #e5e7eb' }}>
                    <div style={{ flex: 1, textAlign: 'center', borderRight: '1px solid #e5e7eb' }}>
                      <div style={{ fontSize: '16px', fontWeight: '800', color: '#111827' }}>{estimatedDistance} kms</div>
                      <div style={{ fontSize: '11px', color: '#6b7280' }}>Distance</div>
                    </div>
                    <div style={{ flex: 1, textAlign: 'center', borderRight: '1px solid #e5e7eb' }}>
                      <div style={{ fontSize: '16px', fontWeight: '800', color: '#111827' }}>{estimatedTime} mins</div>
                      <div style={{ fontSize: '11px', color: '#6b7280' }}>Est. Time</div>
                    </div>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                      <div style={{ fontSize: '16px', fontWeight: '800', color: '#111827' }}>₹ 950</div>
                      <div style={{ fontSize: '11px', color: '#6b7280' }}>Toll (Est.)</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Sidebar (Vehicle List) */}
              <div style={{ flex: 1, padding: '32px 40px', overflowY: 'auto', background: '#f9fafb' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div>
                    <h2 style={{ margin: '0 0 4px 0', fontSize: '28px', fontWeight: '800', color: '#111827' }}>Choose your ride</h2>
                    <p style={{ margin: 0, color: '#6b7280', fontSize: '14px' }}>{relatedVehicles.length} rides available</p>
                  </div>
                  <button style={{ background: '#111827', color: '#ffffff', border: 'none', padding: '10px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <i className="fa-solid fa-share-nodes"></i> Share
                  </button>
                </div>

                {/* Permit Info */}
                <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '16px', marginBottom: '16px', display: 'flex', gap: '12px' }}>
                  <i className="fa-regular fa-circle-check" style={{ color: '#10b981', marginTop: '2px' }}></i>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: '#111827', marginBottom: '4px' }}>Permit Details</div>
                    <div style={{ fontSize: '13px', color: '#4b5563' }}>Toll, permit and inter-city travel charges are included in the fare.</div>
                  </div>
                </div>

                {/* Offers Banner */}
                <div style={{ background: '#fffbeb', border: '1px dashed #f59e0b', borderRadius: '12px', padding: '16px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', background: '#f59e0b', color: '#fff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                      <i className="fa-solid fa-tags"></i>
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '800', color: '#b45309', marginBottom: '2px' }}>Apply Promos & Offers</div>
                      <div style={{ fontSize: '12px', color: '#92400e' }}>Get up to ₹500 off on your first ride!</div>
                    </div>
                  </div>
                  <button style={{ background: 'transparent', border: '1px solid #f59e0b', color: '#b45309', padding: '6px 16px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}>
                    View Offers
                  </button>
                </div>

                {/* Vehicle Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {relatedVehicles.map(v => {
                    // Dynamic Price Calculation Fix
                    const finalPrice = Math.max(v.basePrice || 0, (v.ratePerKm || 10) * estimatedDistance);

                    return (
                    <div key={v.id} style={{ background: '#ffffff', border: '1px solid #fecdd3', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
                      
                      {/* Top Half: Basic Info & Price Action */}
                      <div style={{ display: 'flex', padding: '24px', borderBottom: '1px solid #f3f4f6' }}>
                        {/* Image/Icon */}
                        <div style={{ width: '140px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <i className={`fa-solid ${v.icon}`} style={{ fontSize: '56px', color: '#374151', marginBottom: '8px' }}></i>
                          <div style={{ fontSize: '12px', color: '#6b7280', textAlign: 'center' }}>Vehicle category icon</div>
                        </div>

                        {/* Middle: Details */}
                        <div style={{ flex: 1, paddingLeft: '24px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                            <h3 style={{ margin: 0, fontSize: '24px', fontWeight: '800', color: '#111827' }}>{v.name}</h3>
                            <span style={{ border: '1px solid #d1d5db', padding: '2px 8px', borderRadius: '12px', fontSize: '10px', fontWeight: '600', color: '#6b7280' }}>Or Similar</span>
                          </div>
                          <p style={{ margin: '0 0 16px 0', fontSize: '13px', color: '#4b5563' }}>{v.models}</p>
                          
                          <div style={{ display: 'flex', gap: '20px', fontSize: '13px', color: '#4b5563', fontWeight: '600' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><i className="fa-solid fa-user-group" style={{ color: '#9ca3af' }}></i> {v.capacity} People</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><i className="fa-solid fa-suitcase" style={{ color: '#9ca3af' }}></i> {v.luggage} Luggages</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><i className="fa-solid fa-snowflake" style={{ color: '#9ca3af' }}></i> AC</span>
                          </div>
                        </div>

                        {/* Right: Price Breakup & Select */}
                        <div style={{ width: '220px', paddingLeft: '24px', borderLeft: '1px solid #f3f4f6', display: 'flex', flexDirection: 'column' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <span style={{ fontSize: '12px', fontWeight: '700', color: '#111827' }}>Fare Breakdown</span>
                            <span style={{ fontSize: '12px', color: '#3b82f6', cursor: 'pointer' }}>View details <i className="fa-solid fa-angle-down"></i></span>
                          </div>
                          
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '10px', color: '#e11d48', fontWeight: '800', textTransform: 'uppercase', marginBottom: '4px' }}>Total Fare</div>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                              <span style={{ fontSize: '28px', fontWeight: '800', color: '#111827' }}>₹ {finalPrice}</span>
                              <span style={{ fontSize: '10px', color: '#6b7280' }}>Inc. of GST</span>
                            </div>
                          </div>

                          <button onClick={() => handleFinalBook(v, finalPrice)} style={{ background: '#e11d48', color: '#ffffff', border: 'none', padding: '12px', borderRadius: '8px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                            Select {v.name.split(' ')[0]} <i className="fa-solid fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>

                      {/* Bottom Half: Included/Excluded/Best For */}
                      <div style={{ display: 'flex', padding: '20px 24px', background: '#fdfbfb' }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
                            <div style={{ width: '3px', height: '14px', background: '#10b981' }}></div> Included
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#4b5563' }}>
                            <span><i className="fa-regular fa-circle-check" style={{ color: '#10b981', marginRight: '6px' }}></i> Fuel charges + AC</span>
                            <span><i className="fa-regular fa-circle-check" style={{ color: '#10b981', marginRight: '6px' }}></i> Vehicle charges</span>
                            <span><i className="fa-regular fa-circle-check" style={{ color: '#10b981', marginRight: '6px' }}></i> Driver allowances</span>
                          </div>
                        </div>

                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
                            <div style={{ width: '3px', height: '14px', background: '#ef4444' }}></div> Excluded
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#4b5563' }}>
                            <span><i className="fa-regular fa-circle-xmark" style={{ color: '#9ca3af', marginRight: '6px' }}></i> Private parking charges</span>
                          </div>
                        </div>

                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
                            <div style={{ width: '3px', height: '14px', background: '#8b5cf6' }}></div> Best For
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#4b5563' }}>
                            <span><i className="fa-regular fa-star" style={{ color: '#8b5cf6', marginRight: '6px' }}></i> Comfortable seating, good legroom</span>
                            <span><i className="fa-regular fa-star" style={{ color: '#8b5cf6', marginRight: '6px' }}></i> Fits {v.luggage} bags easily</span>
                          </div>
                        </div>
                      </div>

                    </div>
                    )
                  })}
                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
