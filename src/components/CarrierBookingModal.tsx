'use client';

import React, { useState } from 'react';

const ROAD_CARRIERS = [
  {
    title: 'Bikes, Trucks & Lorries',
    vehicles: [
      { id: 'c-bike', name: 'Delivery Bike / Moto', icon: 'fa-motorcycle', color: '#ff6b6b', price: 150 },
      { id: 'c-auto', name: 'Electric Three-Wheeler Cargo', icon: 'fa-truck-fast', color: '#f59e0b', price: 400 },
      { id: 'c-minitruck', name: 'Small Commercial Mini-Truck', icon: 'fa-truck-pickup', color: '#3b82f6', price: 900 },
      { id: 'c-lcv', name: 'Light Commercial Lorry (LCV)', icon: 'fa-truck', color: '#2563eb', price: 2500 },
      { id: 'c-hcv', name: 'Heavy Rigid Lorry (HCV)', icon: 'fa-truck-front', color: '#8b5cf6', price: 8000 },
      { id: 'c-trailer', name: 'Multi-Axle Semi-Trailer', icon: 'fa-truck-moving', color: '#ec4899', price: 15000 },
    ]
  }
];

const SEA_CARRIERS = [
  {
    title: 'Marine Cargo & Freight',
    vehicles: [
      { id: 'c-barge', name: 'Small Coastal Cargo Barge', icon: 'fa-sailboat', color: '#0ea5e9', price: 25000 },
      { id: 'c-general', name: 'General Cargo Ship', icon: 'fa-ship', color: '#0284c7', price: 150000 },
      { id: 'c-feeder', name: 'Feedership Container Ship', icon: 'fa-anchor', color: '#4f46e5', price: 500000 },
      { id: 'c-mega', name: 'Mega Container Ship', icon: 'fa-ferry', color: '#be123c', price: 2500000 },
    ]
  }
];

const AIR_CARRIERS = [
  {
    title: 'Express Aviation Freight',
    vehicles: [
      { id: 'c-drone', name: 'Delivery Drone / Quadcopter', icon: 'fa-helicopter-symbol', color: '#10b981', price: 500 },
      { id: 'c-belly', name: 'Passenger Aircraft Belly Cargo', icon: 'fa-plane', color: '#f59e0b', price: 15000 },
      { id: 'c-turboprop', name: 'Regional Turboprop Freighter', icon: 'fa-plane-departure', color: '#d97706', price: 120000 },
      { id: 'c-narrow', name: 'Narrow-Body Jet Freighter', icon: 'fa-plane-up', color: '#3b82f6', price: 650000 },
      { id: 'c-wide', name: 'Wide-Body Heavy Jet Freighter', icon: 'fa-globe', color: '#be123c', price: 3500000 },
    ]
  }
];

const RAIL_CARRIERS = [
  {
    title: 'Rail Freight & Bulk Transport',
    vehicles: [
      { id: 'c-freight', name: 'Standard Freight Train', icon: 'fa-train', color: '#8b5cf6', price: 150000 },
      { id: 'c-tanker', name: 'Liquid Tanker Train', icon: 'fa-train-subway', color: '#0ea5e9', price: 200000 },
      { id: 'c-intermodal', name: 'Intermodal Container Train', icon: 'fa-train-tram', color: '#10b981', price: 350000 },
      { id: 'c-heavyhaul', name: 'Heavy-Haul Locomotive', icon: 'fa-train', color: '#f59e0b', price: 500000 },
    ]
  }
];

const ALL_CARRIERS = [
  ...ROAD_CARRIERS.map(c => c.vehicles).flat(),
  ...SEA_CARRIERS.map(c => c.vehicles).flat(),
  ...AIR_CARRIERS.map(c => c.vehicles).flat(),
  ...RAIL_CARRIERS.map(c => c.vehicles).flat()
];

interface CarrierBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CarrierBookingModal({ isOpen, onClose }: CarrierBookingModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'ROAD' | 'SEA' | 'AIR' | 'RAIL'>('ALL');
  const [selectedVehicle, setSelectedVehicle] = useState('c-minitruck');
  const [pickup, setPickup] = useState('Current Location');
  const [dropoff, setDropoff] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

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
    updateUrl(`/home/carrier/${encodeURIComponent(cleanName)} booking`);
  };

  const handleBackToFleet = () => {
    setStep(1);
    updateUrl('/home/carrier');
  };

  const handleClose = () => {
    setStep(1);
    updateUrl('/');
    onClose();
  };

  const handleBook = () => {
    let vehicleName = 'Cargo Carrier';
    let vehiclePrice = 900;
    
    const found = ALL_CARRIERS.find(v => v.id === selectedVehicle);
    if (found) {
      vehicleName = found.name;
      vehiclePrice = found.price;
    }

    let subtitle = `${vehicleName} • Logistics Freight`;
    if (date || time) {
      subtitle += ` • Scheduled: ${date} ${time}`.trim();
    }
    
    if ((window as any).executeGenericBooking) {
      (window as any).executeGenericBooking('carrier', `Cargo: ${pickup} to ${dropoff || 'Destination'}`, subtitle, vehiclePrice, { from: pickup, to: dropoff, date, time });
    }
    handleClose();
  };

  const selectedVehicleObj = ALL_CARRIERS.find(v => v.id === selectedVehicle);

  const renderGridSection = (title: string, icon: string, data: typeof ROAD_CARRIERS) => {
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
            <i className="fa-solid fa-truck-fast" style={{ color: '#0ea5e9' }}></i> Cargo & Carrier Booking
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
                { id: 'ALL', label: 'All Carriers', icon: 'fa-globe', color: '#f59e0b' },
                { id: 'ROAD', label: 'Road', icon: 'fa-truck', color: '#3b82f6' },
                { id: 'SEA', label: 'Sea & Water', icon: 'fa-ship', color: '#0ea5e9' },
                { id: 'AIR', label: 'Air Freight', icon: 'fa-plane', color: '#8b5cf6' },
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
            {activeCategory === 'ALL' && renderGridSection('ALL CARRIER OPTIONS', 'fa-globe', [{ title: 'All', vehicles: ALL_CARRIERS }] as any)}
            {activeCategory === 'ROAD' && renderGridSection('ROAD CARRIERS', 'fa-truck', ROAD_CARRIERS)}
            {activeCategory === 'SEA' && renderGridSection('SEA / MARINE FREIGHT', 'fa-ship', SEA_CARRIERS)}
            {activeCategory === 'AIR' && renderGridSection('AIR FREIGHT', 'fa-plane', AIR_CARRIERS)}
            {activeCategory === 'RAIL' && renderGridSection('RAIL FREIGHT', 'fa-train', RAIL_CARRIERS)}
          </div>
        )}

        {step === 2 && (
          <div style={{ flex: 1, overflowY: 'auto', padding: '32px' }}>
            
            <button 
              onClick={handleBackToFleet} 
              style={{ background: 'transparent', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: '15px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 0 24px 0' }}
            >
              <i className="fa-solid fa-arrow-left"></i> Back to Carrier Options
            </button>

            {selectedVehicleObj && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '20px', marginBottom: '32px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: selectedVehicleObj.color + '20', color: selectedVehicleObj.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>
                  <i className={`fa-solid ${selectedVehicleObj.icon}`}></i>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: '#111827' }}>{selectedVehicleObj.name}</h3>
                  <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#6b7280' }}>Selected Cargo Carrier</p>
                </div>
                <div style={{ fontSize: '24px', fontWeight: '800', color: '#111827' }}>
                  ₹{selectedVehicleObj.price.toLocaleString('en-IN')}
                </div>
              </div>
            )}

            <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '24px' }}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#4b5563', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Pickup Location</label>
                <input type="text" style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #d1d5db', background: '#f9fafb', color: '#111827', fontSize: '15px' }} placeholder="Enter pickup address" value={pickup} onChange={e => setPickup(e.target.value)} />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#4b5563', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Dropoff Destination</label>
                <input type="text" style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #d1d5db', background: '#f9fafb', color: '#111827', fontSize: '15px' }} placeholder="Enter destination address" value={dropoff} onChange={e => setDropoff(e.target.value)} />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#4b5563', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Date</label>
                  <input type="date" style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #d1d5db', background: '#f9fafb', color: '#111827', fontSize: '15px' }} value={date} onChange={e => setDate(e.target.value)} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#4b5563', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Time</label>
                  <input type="time" style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #d1d5db', background: '#f9fafb', color: '#111827', fontSize: '15px' }} value={time} onChange={e => setTime(e.target.value)} />
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
