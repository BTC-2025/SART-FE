'use client';

import React, { useState } from 'react';

const ROAD_RENTAL_FLEET = [
  {
    title: 'Two-Wheelers & Micro-Mobility',
    vehicles: [
      { id: 'r-bicycle', name: 'Geared Bicycle', icon: 'fa-bicycle', color: '#10b981', price: 250 },
      { id: 'r-scooter', name: 'City Scooter (Gearless)', icon: 'fa-motorcycle', color: '#3b82f6', price: 400 },
      { id: 'r-commuter', name: 'Standard Commuter Bike', icon: 'fa-motorcycle', color: '#f59e0b', price: 600 },
      { id: 'r-sports', name: 'Premium Sports Bike', icon: 'fa-motorcycle', color: '#ef4444', price: 1200 },
      { id: 'r-adv', name: 'Adventure Tourer', icon: 'fa-mountain', color: '#8b5cf6', price: 1800 },
    ]
  },
  {
    title: 'Economy & City Cars',
    vehicles: [
      { id: 'r-micro', name: 'Micro Hatchback', icon: 'fa-car-side', color: '#0ea5e9', price: 1500 },
      { id: 'r-premium-hatch', name: 'Premium Hatchback', icon: 'fa-car', color: '#6366f1', price: 2000 },
      { id: 'r-sedan', name: 'Standard Sedan', icon: 'fa-car', color: '#3b82f6', price: 2500 },
    ]
  },
  {
    title: 'Premium & Executive Cars',
    vehicles: [
      { id: 'r-exec', name: 'Executive Sedan', icon: 'fa-briefcase', color: '#1d4ed8', price: 4500 },
      { id: 'r-luxury', name: 'Luxury Sedan', icon: 'fa-gem', color: '#8b5cf6', price: 8000 },
      { id: 'r-sports-car', name: 'Sports / Convertible', icon: 'fa-car-burst', color: '#e11d48', price: 15000 },
    ]
  },
  {
    title: 'SUVs & Off-Roaders',
    vehicles: [
      { id: 'r-csuv', name: 'Compact SUV', icon: 'fa-truck-pickup', color: '#ec4899', price: 3000 },
      { id: 'r-4x4', name: '4x4 Off-Roader', icon: 'fa-mountain-sun', color: '#f97316', price: 5500 },
      { id: 'r-premium-suv', name: 'Premium 7-Seater SUV', icon: 'fa-crown', color: '#eab308', price: 7000 },
      { id: 'r-luxury-suv', name: 'Luxury Full-Size SUV', icon: 'fa-truck-monster', color: '#be123c', price: 12000 },
    ]
  },
  {
    title: 'Vans, RVs & Specialty',
    vehicles: [
      { id: 'r-minivan', name: 'Passenger Minivan (8 Seater)', icon: 'fa-van-shuttle', color: '#14b8a6', price: 4000 },
      { id: 'r-camper', name: 'Camper Van / RV', icon: 'fa-caravan', color: '#06b6d4', price: 8500 },
      { id: 'r-vanity', name: 'Luxury Vanity Van', icon: 'fa-star', color: '#db2777', price: 25000 },
      { id: 'r-moving', name: 'Self-Drive Moving Truck', icon: 'fa-truck', color: '#4f46e5', price: 5000 },
    ]
  }
];

const SEA_RENTAL_FLEET = [
  {
    title: 'Personal Watercraft',
    vehicles: [
      { id: 'r-jetski', name: 'Jet Ski / WaveRunner', icon: 'fa-water', color: '#0ea5e9', price: 3500 },
      { id: 'r-skiff', name: 'Small Motorboat / Skiff', icon: 'fa-sailboat', color: '#38bdf8', price: 6000 },
    ]
  },
  {
    title: 'Private Charters & Speedboats',
    vehicles: [
      { id: 'r-speedboat', name: 'Standard Speedboat', icon: 'fa-ship', color: '#0284c7', price: 12000 },
      { id: 'r-cabin', name: 'Premium Cabin Cruiser', icon: 'fa-anchor', color: '#0369a1', price: 25000 },
    ]
  },
  {
    title: 'Luxury Yachts & Catamarans',
    vehicles: [
      { id: 'r-catamaran', name: 'Sailing Catamaran', icon: 'fa-sailboat', color: '#0f766e', price: 45000 },
      { id: 'r-yacht', name: 'Luxury Private Yacht', icon: 'fa-champagne-glasses', color: '#eab308', price: 150000 },
    ]
  }
];

const AIR_RENTAL_FLEET = [
  {
    title: 'Urban Air Mobility & Choppers',
    vehicles: [
      { id: 'r-evtol', name: 'eVTOL / Air Taxi', icon: 'fa-helicopter-symbol', color: '#10b981', price: 35000 },
      { id: 'r-chopper', name: 'Light Helicopter', icon: 'fa-helicopter', color: '#059669', price: 85000 },
    ]
  },
  {
    title: 'Private Jets & Charters',
    vehicles: [
      { id: 'r-lightjet', name: 'Light Private Jet', icon: 'fa-plane-up', color: '#8b5cf6', price: 250000 },
      { id: 'r-heavyjet', name: 'Heavy Ultra-Long-Range Jet', icon: 'fa-gem', color: '#7c3aed', price: 850000 },
    ]
  }
];

const RAIL_RENTAL_FLEET = [
  {
    title: 'Private Rail & Saloon Cars',
    vehicles: [
      { id: 'r-saloon', name: 'Private Saloon Car', icon: 'fa-train', color: '#8b5cf6', price: 45000 },
      { id: 'r-tourist', name: 'Private Tourist Train', icon: 'fa-champagne-glasses', color: '#eab308', price: 250000 },
    ]
  }
];

const ALL_RENTALS = [
  ...ROAD_RENTAL_FLEET.map(c => c.vehicles).flat(),
  ...SEA_RENTAL_FLEET.map(c => c.vehicles).flat(),
  ...AIR_RENTAL_FLEET.map(c => c.vehicles).flat(),
  ...RAIL_RENTAL_FLEET.map(c => c.vehicles).flat()
];

interface RentalBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RentalBookingModal({ isOpen, onClose }: RentalBookingModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'ROAD' | 'SEA' | 'AIR' | 'RAIL'>('ALL');
  const [selectedVehicle, setSelectedVehicle] = useState('r-premium-hatch');
  const [pickup, setPickup] = useState('Current Location');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [returnTime, setReturnTime] = useState('');

  React.useEffect(() => {
    const handleReset = () => {
      setStep(1);
    };
    window.addEventListener('resetModalSteps', handleReset);
    return () => window.removeEventListener('resetModalSteps', handleReset);
  }, []);

  if (!isOpen) return null;

  const updateUrl = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', path);
    }
  };

  const handleSelectVehicle = (vehicle: any) => {
    setSelectedVehicle(vehicle.id);
    setStep(2);
    const cleanName = vehicle.name.split('/')[0].trim();
    updateUrl(`/home/rental/${encodeURIComponent(cleanName)} booking`);
  };

  const handleBackToFleet = () => {
    setStep(1);
    updateUrl('/home/rental');
  };

  const handleClose = () => {
    setStep(1);
    updateUrl('/');
    onClose();
  };

  const handleBook = () => {
    let vehicleName = 'Self-Drive Vehicle';
    let vehiclePrice = 1500;
    
    const found = ALL_RENTALS.find(v => v.id === selectedVehicle);
    if (found) {
      vehicleName = found.name;
      vehiclePrice = found.price;
    }

    const isRoad = selectedVehicle.startsWith('r-') && ROAD_RENTAL_FLEET.some(c => c.vehicles.some(v => v.id === selectedVehicle));
    let subtitle = `${vehicleName} • ${isRoad ? 'Self-Drive Rental' : 'Private Charter'}`;
    if (startDate && returnDate) {
      subtitle += ` • From ${startDate} to ${returnDate}`;
    }
    
    if ((window as any).executeGenericBooking) {
      (window as any).executeGenericBooking('rental', `Rental: ${pickup}`, subtitle, vehiclePrice, { from: pickup, startDate, startTime, returnDate, returnTime });
    }
    handleClose();
  };

  const selectedVehicleObj = ALL_RENTALS.find(v => v.id === selectedVehicle);

  const renderGridSection = (title: string, icon: string, data: typeof ROAD_RENTAL_FLEET) => {
    const allVehicles = data.map(c => c.vehicles).flat();
    return (
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#111827', margin: '24px 0 16px 0', paddingBottom: '8px', borderBottom: '2px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <i className={`fa-solid ${icon}`}></i> {title}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '16px' }}>
            {allVehicles.map(v => (
            <div 
              key={v.id} 
              onClick={() => handleSelectVehicle(v)}
              style={{
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                padding: '16px 12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)'; }}
            >
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: v.color + '20', color: v.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '12px' }}>
                <i className={`fa-solid ${v.icon}`}></i>
              </div>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#1f2937', textAlign: 'center', lineHeight: '1.2' }}>
                {v.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="modal-overlay open" style={{ display: 'flex', zIndex: 1000, background: 'rgba(0,0,0,0.6)' }} onClick={handleClose}>
      <div className="modal-sheet centered-modal" style={{ maxWidth: '900px', width: '95%', height: '90vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f9fafb', borderRadius: '24px', overflow: 'hidden' }} onClick={e => e.stopPropagation()}>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: '#ffffff', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ fontSize: '22px', fontWeight: '800', color: '#111827', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <i className="fa-solid fa-key" style={{ color: '#0ea5e9' }}></i> Self-Drive & Rentals
          </div>
          <button onClick={handleClose} style={{ background: '#f3f4f6', border: 'none', width: '36px', height: '36px', borderRadius: '50%', color: '#4b5563', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        
        {step === 1 && (
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
            {/* Category Selector */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', overflowX: 'auto', paddingBottom: '8px' }}>
              {[
                { id: 'ALL', label: 'All Rentals', icon: 'fa-globe', color: '#f59e0b' },
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
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <i className={`fa-solid ${cat.icon}`}></i> {cat.label}
                </button>
              ))}
            </div>

            {/* Render only active category */}
            {activeCategory === 'ALL' && renderGridSection('ALL RENTAL OPTIONS', 'fa-globe', [{ title: 'All', vehicles: ALL_RENTALS }] as any)}
            {activeCategory === 'ROAD' && renderGridSection('ROAD RENTALS', 'fa-car', ROAD_RENTAL_FLEET)}
            {activeCategory === 'SEA' && renderGridSection('SEA / WATER RENTALS', 'fa-ship', SEA_RENTAL_FLEET)}
            {activeCategory === 'AIR' && renderGridSection('AIR CHARTERS', 'fa-plane', AIR_RENTAL_FLEET)}
            {activeCategory === 'RAIL' && renderGridSection('RAIL CHARTERS', 'fa-train', RAIL_RENTAL_FLEET)}
          </div>
        )}

        {step === 2 && (
          <div style={{ flex: 1, overflowY: 'auto', padding: '32px' }}>
            
            <button 
              onClick={handleBackToFleet} 
              style={{ background: 'transparent', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: '15px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 0 24px 0' }}
            >
              <i className="fa-solid fa-arrow-left"></i> Back to Rental Options
            </button>

            {selectedVehicleObj && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '20px', marginBottom: '32px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: selectedVehicleObj.color + '20', color: selectedVehicleObj.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>
                  <i className={`fa-solid ${selectedVehicleObj.icon}`}></i>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: '#111827' }}>{selectedVehicleObj.name}</h3>
                  <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#6b7280' }}>
                    {selectedVehicleObj.id.includes('saloon') || selectedVehicleObj.id.includes('tourist') || activeCategory === 'AIR' || activeCategory === 'SEA' ? 'Selected Charter' : 'Selected Rental'}
                  </p>
                </div>
                <div style={{ fontSize: '24px', fontWeight: '800', color: '#111827' }}>
                  ₹{selectedVehicleObj.price.toLocaleString('en-IN')}<span style={{fontSize: '12px', color: '#6b7280'}}>/day</span>
                </div>
              </div>
            )}

            <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '24px' }}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#4b5563', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Pickup Location</label>
                <input type="text" style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #d1d5db', background: '#f9fafb', color: '#111827', fontSize: '15px' }} placeholder="Enter pickup address" value={pickup} onChange={e => setPickup(e.target.value)} />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#4b5563', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Start Date</label>
                  <input type="date" style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #d1d5db', background: '#f9fafb', color: '#111827', fontSize: '15px' }} value={startDate} onChange={e => setStartDate(e.target.value)} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#4b5563', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Start Time</label>
                  <input type="time" style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #d1d5db', background: '#f9fafb', color: '#111827', fontSize: '15px' }} value={startTime} onChange={e => setStartTime(e.target.value)} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#4b5563', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Return Date</label>
                  <input type="date" style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #d1d5db', background: '#f9fafb', color: '#111827', fontSize: '15px' }} value={returnDate} onChange={e => setReturnDate(e.target.value)} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#4b5563', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Return Time</label>
                  <input type="time" style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #d1d5db', background: '#f9fafb', color: '#111827', fontSize: '15px' }} value={returnTime} onChange={e => setReturnTime(e.target.value)} />
                </div>
              </div>

              <button 
                onClick={handleBook}
                style={{ width: '100%', padding: '16px', borderRadius: '12px', background: '#0ea5e9', color: '#ffffff', border: 'none', fontSize: '16px', fontWeight: '700', cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#0284c7'}
                onMouseLeave={e => e.currentTarget.style.background = '#0ea5e9'}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
