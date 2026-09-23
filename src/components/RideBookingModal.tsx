'use client';

import React, { useState } from 'react';

const ROAD_FLEET = [
  {
    title: 'Micro-Mobility & Last-Mile',
    vehicles: [
      { id: 'bike', name: 'Bike / Moto', icon: 'fa-motorcycle', color: '#ff6b6b', price: 250 },
      { id: 'escooter', name: 'Electric Scooter', icon: 'fa-bolt', color: '#10b981', price: 150 },
      { id: 'auto', name: 'Auto-Rickshaw', icon: 'fa-taxi', color: '#f59e0b', price: 350 },
      { id: 'erickshaw', name: 'E-Rickshaw', icon: 'fa-taxi', color: '#34d399', price: 200 },
    ]
  },
  {
    title: 'Economy & Premium Cabs',
    vehicles: [
      { id: 'micro', name: 'Micro Hatchback', icon: 'fa-car-side', color: '#3b82f6', price: 800 },
      { id: 'sedan', name: 'Standard Sedan', icon: 'fa-car', color: '#2563eb', price: 1200 },
      { id: 'exec', name: 'Executive Sedan', icon: 'fa-briefcase', color: '#1d4ed8', price: 1800 },
      { id: 'luxury', name: 'Luxury Sedan', icon: 'fa-gem', color: '#8b5cf6', price: 3500 },
    ]
  },
  {
    title: 'Multi-Utility & SUVs',
    vehicles: [
      { id: 'csuv', name: 'Compact SUV', icon: 'fa-truck-pickup', color: '#ec4899', price: 1500 },
      { id: 'mpv', name: 'Standard MPV', icon: 'fa-van-shuttle', color: '#f43f5e', price: 2200 },
      { id: 'psuv', name: 'Premium SUV', icon: 'fa-crown', color: '#eab308', price: 4500 },
      { id: 'lsuv', name: 'Large SUV / XL', icon: 'fa-truck-monster', color: '#f97316', price: 5500 },
    ]
  },
  {
    title: 'Minivans & Maxi-Cabs',
    vehicles: [
      { id: 'minivan', name: 'Standard Minivan', icon: 'fa-shuttle-van', color: '#14b8a6', price: 6500 },
      { id: 'maxicab', name: 'Maxi-Cab', icon: 'fa-bus-simple', color: '#06b6d4', price: 8500 },
      { id: 'microcoach', name: 'Luxury Micro-Coach', icon: 'fa-bus', color: '#0ea5e9', price: 12000 },
    ]
  },
  {
    title: 'Buses, Coaches & Mass Transit',
    vehicles: [
      { id: 'minibus', name: 'Mini-Bus', icon: 'fa-bus-simple', color: '#6366f1', price: 18000 },
      { id: 'citybus', name: 'Standard City Bus', icon: 'fa-bus', color: '#8b5cf6', price: 25000 },
      { id: 'sleeper', name: 'Sleeper Coach', icon: 'fa-bed', color: '#a855f7', price: 35000 },
      { id: 'doubledecker', name: 'Double-Decker Bus', icon: 'fa-bus', color: '#d946ef', price: 45000 },
      { id: 'articulated', name: 'Articulated Bus', icon: 'fa-truck-front', color: '#f43f5e', price: 60000 },
    ]
  }
];

const SEA_FLEET = [
  {
    title: 'Micro-Watercraft',
    vehicles: [
      { id: 'jetski', name: 'Jet Ski', icon: 'fa-water', color: '#0ea5e9', price: 1500 },
      { id: 'skiff', name: 'Small Motorboat', icon: 'fa-sailboat', color: '#38bdf8', price: 3500 },
    ]
  },
  {
    title: 'Private Charters & Speedboats',
    vehicles: [
      { id: 'speedboat', name: 'Standard Speedboat', icon: 'fa-ship', color: '#0284c7', price: 8500 },
      { id: 'cabin', name: 'Premium Cabin Cruiser', icon: 'fa-anchor', color: '#0369a1', price: 15000 },
      { id: 'smallyacht', name: 'Small Luxury Yacht', icon: 'fa-champagne-glasses', color: '#eab308', price: 45000 },
    ]
  },
  {
    title: 'Mid-Sized Passenger Craft',
    vehicles: [
      { id: 'watertaxi', name: 'Commercial Water Taxi', icon: 'fa-ferry', color: '#0d9488', price: 25000 },
      { id: 'catamaran', name: 'Sailing Catamaran', icon: 'fa-sailboat', color: '#0f766e', price: 65000 },
      { id: 'partyyacht', name: 'Luxury Party Yacht', icon: 'fa-martini-glass', color: '#db2777', price: 120000 },
    ]
  },
  {
    title: 'Regional Marine Transit',
    vehicles: [
      { id: 'hydrofoil', name: 'Hydrofoil / Fast Ferry', icon: 'fa-ship', color: '#4f46e5', price: 85000 },
      { id: 'riverboat', name: 'Large Sightseeing River Boat', icon: 'fa-camera', color: '#7c3aed', price: 150000 },
    ]
  },
  {
    title: 'Mass Marine Transit & Ships',
    vehicles: [
      { id: 'roro', name: 'Ro-Ro Passenger Ferry', icon: 'fa-ferry', color: '#4338ca', price: 350000 },
      { id: 'cruise', name: 'Ocean-Going Cruise Liner', icon: 'fa-ship', color: '#be123c', price: 2500000 },
    ]
  }
];

const AIR_FLEET = [
  {
    title: 'Urban Air Mobility & Light Choppers',
    vehicles: [
      { id: 'evtol', name: 'eVTOL / Air Taxi', icon: 'fa-helicopter', color: '#10b981', price: 25000 },
      { id: 'lightchopper', name: 'Light Helicopter', icon: 'fa-helicopter', color: '#059669', price: 45000 },
    ]
  },
  {
    title: 'Regional Turboprops & Twin-Engines',
    vehicles: [
      { id: 'utilityturbo', name: 'Utility Turboprop', icon: 'fa-plane', color: '#f59e0b', price: 120000 },
      { id: 'twinturbo', name: 'Twin-Engine Turboprop', icon: 'fa-plane-departure', color: '#d97706', price: 250000 },
    ]
  },
  {
    title: 'Private Executive Jets',
    vehicles: [
      { id: 'lightjet', name: 'Light Private Jet', icon: 'fa-plane-up', color: '#8b5cf6', price: 450000 },
      { id: 'heavyjet', name: 'Heavy Ultra-Long-Range Jet', icon: 'fa-gem', color: '#7c3aed', price: 1250000 },
    ]
  },
  {
    title: 'Regional Airliners & Corporate Shuttles',
    vehicles: [
      { id: 'largetwin', name: 'Large Twin-Turboprop', icon: 'fa-plane', color: '#3b82f6', price: 650000 },
      { id: 'regionaljet', name: 'Regional Jet Airliner', icon: 'fa-plane-departure', color: '#2563eb', price: 1500000 },
    ]
  },
  {
    title: 'Commercial Group Charters',
    vehicles: [
      { id: 'narrowbody', name: 'Narrow-Body Charter', icon: 'fa-plane-arrival', color: '#e11d48', price: 3500000 },
      { id: 'widebody', name: 'Wide-Body Mega-Charter', icon: 'fa-globe', color: '#be123c', price: 8500000 },
    ]
  }
];

const ALL_FLEETS = [
  ...ROAD_FLEET.map(c => c.vehicles).flat(),
  ...SEA_FLEET.map(c => c.vehicles).flat(),
  ...AIR_FLEET.map(c => c.vehicles).flat()
];

interface RideBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RideBookingModal({ isOpen, onClose }: RideBookingModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedVehicle, setSelectedVehicle] = useState('micro');
  const [pickup, setPickup] = useState('Current Location');
  const [dropoff, setDropoff] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  if (!isOpen) return null;

  const handleClose = () => {
    setStep(1);
    onClose();
  };

  const handleBook = () => {
    let vehicleName = 'Vehicle';
    let vehiclePrice = 800;
    
    const found = ALL_FLEETS.find(v => v.id === selectedVehicle);
    if (found) {
      vehicleName = found.name;
      vehiclePrice = found.price;
    }

    let subtitle = `${vehicleName} • Premium Chauffeur`;
    if (date || time) {
      subtitle += ` • Scheduled: ${date} ${time}`.trim();
    }
    
    if ((window as any).executeGenericBooking) {
      (window as any).executeGenericBooking('ride', `Booking: ${pickup} to ${dropoff || 'Destination'}`, subtitle, vehiclePrice, { from: pickup, to: dropoff, date, time });
    }
    handleClose();
  };

  const selectedVehicleObj = ALL_FLEETS.find(v => v.id === selectedVehicle);

  const renderGridSection = (title: string, icon: string, data: typeof ROAD_FLEET) => (
    <div style={{ marginBottom: '32px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#111827', margin: '24px 0 16px 0', paddingBottom: '8px', borderBottom: '2px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <i className={`fa-solid ${icon}`}></i> {title}
      </h2>
      {data.map((category, catIdx) => (
        <div key={catIdx} style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#4b5563', marginBottom: '16px' }}>
            {category.title}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '16px' }}>
            {category.vehicles.map(v => (
              <div 
                key={v.id} 
                onClick={() => { setSelectedVehicle(v.id); setStep(2); }}
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
      ))}
    </div>
  );

  return (
    <div className="modal-overlay open" style={{ display: 'flex', zIndex: 1000, background: 'rgba(0,0,0,0.6)' }} onClick={handleClose}>
      <div className="modal-sheet centered-modal" style={{ maxWidth: '900px', width: '95%', height: '90vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f9fafb', borderRadius: '24px', overflow: 'hidden' }} onClick={e => e.stopPropagation()}>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: '#ffffff', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ fontSize: '22px', fontWeight: '800', color: '#111827', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <i className="fa-solid fa-compass" style={{ color: '#0ea5e9' }}></i> Omni-Transit Booking
          </div>
          <button onClick={handleClose} style={{ background: '#f3f4f6', border: 'none', width: '36px', height: '36px', borderRadius: '50%', color: '#4b5563', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        
        {step === 1 && (
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
            {renderGridSection('ROAD TRANSIT', 'fa-car', ROAD_FLEET)}
            {renderGridSection('SEA / WATER TRANSIT', 'fa-ship', SEA_FLEET)}
            {renderGridSection('AIR TRANSIT', 'fa-plane', AIR_FLEET)}
          </div>
        )}

        {step === 2 && (
          <div style={{ flex: 1, overflowY: 'auto', padding: '32px' }}>
            
            <button 
              onClick={() => setStep(1)} 
              style={{ background: 'transparent', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: '15px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 0 24px 0' }}
            >
              <i className="fa-solid fa-arrow-left"></i> Back to Fleet Options
            </button>

            {selectedVehicleObj && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '20px', marginBottom: '32px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: selectedVehicleObj.color + '20', color: selectedVehicleObj.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>
                  <i className={`fa-solid ${selectedVehicleObj.icon}`}></i>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: '#111827' }}>{selectedVehicleObj.name}</h3>
                  <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#6b7280' }}>Selected Vehicle</p>
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
