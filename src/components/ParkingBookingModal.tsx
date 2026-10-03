'use client';

import React, { useState } from 'react';

const ROAD_PARKING = [
  {
    title: 'Road Vehicle Parking',
    vehicles: [
      { id: 'p-bike', name: 'Two-Wheeler Parking', icon: 'fa-motorcycle', color: '#10b981', price: 20 },
      { id: 'p-car', name: 'Car Parking Space', icon: 'fa-car-side', color: '#3b82f6', price: 50 },
      { id: 'p-suv', name: 'SUV / MPV Large Space', icon: 'fa-truck-pickup', color: '#8b5cf6', price: 80 },
      { id: 'p-truck', name: 'Commercial Truck Yard', icon: 'fa-truck-front', color: '#f59e0b', price: 200 },
    ]
  }
];

const SEA_PARKING = [
  {
    title: 'Marine Docking & Harbors',
    vehicles: [
      { id: 'p-boat', name: 'Small Boat Mooring', icon: 'fa-sailboat', color: '#0ea5e9', price: 500 },
      { id: 'p-yacht', name: 'Luxury Yacht Marina Slip', icon: 'fa-anchor', color: '#ec4899', price: 2500 },
      { id: 'p-ship', name: 'Commercial Ship Berth', icon: 'fa-ship', color: '#4f46e5', price: 10000 },
    ]
  }
];

const AIR_PARKING = [
  {
    title: 'Aviation Hangars & Tie-Downs',
    vehicles: [
      { id: 'p-heli', name: 'Helipad Landing/Parking', icon: 'fa-helicopter-symbol', color: '#10b981', price: 1500 },
      { id: 'p-light', name: 'Light Aircraft Hangar', icon: 'fa-plane', color: '#8b5cf6', price: 3000 },
      { id: 'p-jet', name: 'Private Jet Tie-Down', icon: 'fa-plane-up', color: '#f97316', price: 8000 },
    ]
  }
];

const RAIL_PARKING = [
  {
    title: 'Rail Depots & Sidings',
    vehicles: [
      { id: 'p-train', name: 'Locomotive Depot Slot', icon: 'fa-train', color: '#f59e0b', price: 5000 },
      { id: 'p-wagon', name: 'Freight Wagon Siding', icon: 'fa-train-subway', color: '#14b8a6', price: 2000 },
    ]
  }
];

const ALL_PARKING = [
  ...ROAD_PARKING.map(c => c.vehicles).flat(),
  ...SEA_PARKING.map(c => c.vehicles).flat(),
  ...AIR_PARKING.map(c => c.vehicles).flat(),
  ...RAIL_PARKING.map(c => c.vehicles).flat()
];

interface ParkingBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ParkingBookingModal({ isOpen, onClose }: ParkingBookingModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'ROAD' | 'SEA' | 'AIR' | 'RAIL'>('ALL');
  const [selectedVehicle, setSelectedVehicle] = useState('p-car');
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
    updateUrl(`/home/parking/${encodeURIComponent(cleanName)} booking`);
  };

  const handleBackToFleet = () => {
    setStep(1);
    updateUrl('/home/parking');
  };

  const handleClose = () => {
    setStep(1);
    updateUrl('/');
    onClose();
  };

  const handleBook = () => {
    let vehicleName = 'Parking Slot';
    let vehiclePrice = 50;
    
    const found = ALL_PARKING.find(v => v.id === selectedVehicle);
    if (found) {
      vehicleName = found.name;
      vehiclePrice = found.price;
    }

    let subtitle = `${vehicleName} • Reserved`;
    if (startDate && returnDate) {
      subtitle += ` • From ${startDate} to ${returnDate}`;
    }
    
    if ((window as any).executeGenericBooking) {
      (window as any).executeGenericBooking('parking', `Parking: ${pickup}`, subtitle, vehiclePrice, { from: pickup, startDate, startTime, returnDate, returnTime });
    }
    handleClose();
  };

  const selectedVehicleObj = ALL_PARKING.find(v => v.id === selectedVehicle);

  const renderGridSection = (title: string, icon: string, data: typeof ROAD_PARKING) => {
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
        
        {/* HACK for globals.css */}
        <div className="dummy-modal-header-for-css-hack"></div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: '#ffffff', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ fontSize: '22px', fontWeight: '800', color: '#111827', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <i className="fa-solid fa-square-parking" style={{ color: '#f59e0b' }}></i> Reserve Parking & Docking
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
                { id: 'ALL', label: 'All Slots', icon: 'fa-globe', color: '#6366f1' },
                { id: 'ROAD', label: 'Road Parking', icon: 'fa-car', color: '#3b82f6' },
                { id: 'SEA', label: 'Docks & Marinas', icon: 'fa-ship', color: '#0ea5e9' },
                { id: 'AIR', label: 'Hangars', icon: 'fa-plane', color: '#8b5cf6' },
                { id: 'RAIL', label: 'Train Depots', icon: 'fa-train', color: '#10b981' }
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
            {activeCategory === 'ALL' && renderGridSection('ALL PARKING OPTIONS', 'fa-globe', [{ title: 'All', vehicles: ALL_PARKING }] as any)}
            {activeCategory === 'ROAD' && renderGridSection('ROAD PARKING', 'fa-car', ROAD_PARKING)}
            {activeCategory === 'SEA' && renderGridSection('MARINE DOCKING', 'fa-ship', SEA_PARKING)}
            {activeCategory === 'AIR' && renderGridSection('AVIATION HANGARS', 'fa-plane', AIR_PARKING)}
            {activeCategory === 'RAIL' && renderGridSection('RAIL DEPOTS', 'fa-train', RAIL_PARKING)}
          </div>
        )}

        {step === 2 && (
          <div style={{ flex: 1, overflowY: 'auto', padding: '0' }}>
            <div style={{ display: 'flex', height: '100%', flexWrap: 'wrap' }}>
              
              {/* Left Column: Map & Search */}
              <div style={{ flex: '1 1 400px', borderRight: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '24px', background: '#ffffff', borderBottom: '1px solid #e5e7eb' }}>
                  <button 
                    onClick={handleBackToFleet} 
                    style={{ background: 'transparent', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: '15px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 0 16px 0' }}
                  >
                    <i className="fa-solid fa-arrow-left"></i> Back to Options
                  </button>
                  <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '800', color: '#111827' }}>Find Nearby Parking</h3>
                  <div style={{ position: 'relative' }}>
                    <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', left: '16px', top: '16px', color: '#9ca3af' }}></i>
                    <input type="text" style={{ width: '100%', padding: '14px 14px 14px 48px', borderRadius: '12px', border: '1px solid #d1d5db', background: '#f9fafb', color: '#111827', fontSize: '15px', outline: 'none' }} placeholder="Search area or landmark" value={pickup} onChange={e => setPickup(e.target.value)} />
                  </div>
                </div>
                
                {/* Simulated Map Area */}
                <div style={{ flex: 1, background: '#e2e8f0', position: 'relative', minHeight: '300px' }}>
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                    <i className="fa-solid fa-map-location-dot" style={{ fontSize: '48px', color: '#94a3b8', opacity: 0.5 }}></i>
                    <div style={{ marginTop: '12px', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Interactive Map Area</div>
                  </div>
                  
                  {/* Mock Map Pins */}
                  <div style={{ position: 'absolute', top: '30%', left: '40%', transform: 'translate(-50%, -50%)', cursor: 'pointer' }}>
                    <div style={{ background: '#f59e0b', color: '#fff', padding: '4px 8px', borderRadius: '8px', fontWeight: '700', fontSize: '12px', marginBottom: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>₹50/hr</div>
                    <i className="fa-solid fa-location-dot" style={{ color: '#f59e0b', fontSize: '24px', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}></i>
                  </div>
                  <div style={{ position: 'absolute', top: '60%', left: '70%', transform: 'translate(-50%, -50%)', cursor: 'pointer' }}>
                    <div style={{ background: '#10b981', color: '#fff', padding: '4px 8px', borderRadius: '8px', fontWeight: '700', fontSize: '12px', marginBottom: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>₹40/hr</div>
                    <i className="fa-solid fa-location-dot" style={{ color: '#10b981', fontSize: '24px', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}></i>
                  </div>
                </div>
              </div>

              {/* Right Column: Booking Details */}
              <div style={{ flex: '1 1 350px', background: '#f9fafb', padding: '32px', display: 'flex', flexDirection: 'column' }}>
                {selectedVehicleObj && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '20px', marginBottom: '24px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: selectedVehicleObj.color + '20', color: selectedVehicleObj.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
                      <i className={`fa-solid ${selectedVehicleObj.icon}`}></i>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '800', color: '#111827' }}>{selectedVehicleObj.name}</h3>
                      <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#6b7280' }}>Vehicle Requirement</p>
                    </div>
                  </div>
                )}

                <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '24px', flex: 1 }}>
                  <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '800', color: '#111827' }}>Schedule Booking</h3>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#4b5563', marginBottom: '6px', textTransform: 'uppercase' }}>Check-in Date</label>
                      <input type="date" style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #d1d5db', background: '#f9fafb', color: '#111827', fontSize: '14px', outline: 'none' }} value={startDate} onChange={e => setStartDate(e.target.value)} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#4b5563', marginBottom: '6px', textTransform: 'uppercase' }}>Check-in Time</label>
                      <input type="time" style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #d1d5db', background: '#f9fafb', color: '#111827', fontSize: '14px', outline: 'none' }} value={startTime} onChange={e => setStartTime(e.target.value)} />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#4b5563', marginBottom: '6px', textTransform: 'uppercase' }}>Check-out Date</label>
                      <input type="date" style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #d1d5db', background: '#f9fafb', color: '#111827', fontSize: '14px', outline: 'none' }} value={returnDate} onChange={e => setReturnDate(e.target.value)} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#4b5563', marginBottom: '6px', textTransform: 'uppercase' }}>Check-out Time</label>
                      <input type="time" style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #d1d5db', background: '#f9fafb', color: '#111827', fontSize: '14px', outline: 'none' }} value={returnTime} onChange={e => setReturnTime(e.target.value)} />
                    </div>
                  </div>

                  <button 
                    onClick={handleBook}
                    style={{ width: '100%', padding: '16px', borderRadius: '12px', background: '#f59e0b', color: '#ffffff', border: 'none', fontSize: '16px', fontWeight: '700', cursor: 'pointer', transition: 'background 0.2s', marginTop: 'auto' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#d97706'}
                    onMouseLeave={e => e.currentTarget.style.background = '#f59e0b'}
                  >
                    Confirm Parking Slot
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
