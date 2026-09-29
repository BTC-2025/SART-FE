'use client';

import React, { useState } from 'react';

const ROAD_FLEET = [
  {
    title: 'Micro-Mobility & Last-Mile',
    vehicles: [
      { id: 'bicycle', name: 'Pedal Bicycle', icon: 'fa-bicycle', color: '#14b8a6', price: 50 },
      { id: 'bike', name: 'Bike / Moto', icon: 'fa-motorcycle', color: '#ff6b6b', price: 250 },
      { id: 'escooter', name: 'Electric Scooter', icon: 'fa-bolt', color: '#10b981', price: 150 },
      { id: 'segway', name: 'Segway / Hoverboard', icon: 'fa-shoe-prints', color: '#06b6d4', price: 200 },
      { id: 'auto', name: 'Auto-Rickshaw', icon: 'fa-taxi', color: '#f59e0b', price: 350 },
      { id: 'erickshaw', name: 'E-Rickshaw', icon: 'fa-taxi', color: '#34d399', price: 200 },
      { id: 'pedicab', name: 'Pedicab / Cycle Rickshaw', icon: 'fa-person-biking', color: '#84cc16', price: 100 },
    ]
  },
  {
    title: 'Economy & Premium Cabs',
    vehicles: [
      { id: 'micro', name: 'Micro Hatchback', icon: 'fa-car-side', color: '#3b82f6', price: 800 },
      { id: 'sedan', name: 'Standard Sedan', icon: 'fa-car', color: '#2563eb', price: 1200 },
      { id: 'exec', name: 'Executive Sedan', icon: 'fa-briefcase', color: '#1d4ed8', price: 1800 },
      { id: 'luxury', name: 'Luxury Sedan', icon: 'fa-gem', color: '#8b5cf6', price: 3500 },
      { id: 'limo', name: 'Stretch Limousine', icon: 'fa-glass-cheers', color: '#a855f7', price: 8000 },
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
      { id: 'campervan', name: 'Campervan / RV', icon: 'fa-caravan', color: '#84cc16', price: 15000 },
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
  },
  {
    title: 'Specialty & Terrain',
    vehicles: [
      { id: 'ambulance', name: 'Medical Ambulance', icon: 'fa-truck-medical', color: '#ef4444', price: 5000 },
      { id: 'cablecar', name: 'Cable Car / Gondola', icon: 'fa-cable-car', color: '#6366f1', price: 1200 },
      { id: 'atv', name: 'Off-Road ATV', icon: 'fa-truck-field', color: '#d97706', price: 3000 },
    ]
  }
];

const SEA_FLEET = [
  {
    title: 'Micro-Watercraft & Traditional',
    vehicles: [
      { id: 'jetski', name: 'Jet Ski', icon: 'fa-water', color: '#0ea5e9', price: 1500 },
      { id: 'skiff', name: 'Small Motorboat', icon: 'fa-sailboat', color: '#38bdf8', price: 3500 },
      { id: 'canoe', name: 'Canoe / Rowboat', icon: 'fa-anchor', color: '#f59e0b', price: 500 },
      { id: 'gondola', name: 'Venetian Gondola', icon: 'fa-sailboat', color: '#eab308', price: 2000 },
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
      { id: 'hovercraft', name: 'Hovercraft', icon: 'fa-wind', color: '#0ea5e9', price: 20000 },
      { id: 'hydrofoil', name: 'Hydrofoil / Fast Ferry', icon: 'fa-ship', color: '#4f46e5', price: 85000 },
      { id: 'riverboat', name: 'Large Sightseeing River Boat', icon: 'fa-camera', color: '#7c3aed', price: 150000 },
      { id: 'houseboat', name: 'Luxury Houseboat', icon: 'fa-house-tsunami', color: '#10b981', price: 25000 },
    ]
  },
  {
    title: 'Mass Marine Transit & Ships',
    vehicles: [
      { id: 'roro', name: 'Ro-Ro Passenger Ferry', icon: 'fa-ferry', color: '#4338ca', price: 350000 },
      { id: 'cruise', name: 'Ocean-Going Cruise Liner', icon: 'fa-ship', color: '#be123c', price: 2500000 },
      { id: 'submarine', name: 'Tourist Submarine', icon: 'fa-arrow-down-up-water', color: '#3b82f6', price: 400000 },
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
    title: 'Adventure & Leisure Flights',
    vehicles: [
      { id: 'paragliding', name: 'Tandem Paragliding', icon: 'fa-parachute-box', color: '#10b981', price: 4500 },
      { id: 'hotairballoon', name: 'Hot Air Balloon', icon: 'fa-map-pin', color: '#f97316', price: 8500 },
      { id: 'skydiving', name: 'Skydiving Drop', icon: 'fa-plane-slash', color: '#ec4899', price: 15000 },
      { id: 'glider', name: 'Sailplane / Glider', icon: 'fa-paper-plane', color: '#0ea5e9', price: 12000 },
      { id: 'blimp', name: 'Tourist Blimp / Airship', icon: 'fa-cloud', color: '#6366f1', price: 25000 },
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
  },
  {
    title: 'Future & Aerospace',
    vehicles: [
      { id: 'suborbital', name: 'Suborbital Spaceflight', icon: 'fa-rocket', color: '#4f46e5', price: 25000000 },
    ]
  }
];

const RAIL_FLEET = [
  {
    title: 'Urban & Commuter Rail',
    vehicles: [
      { id: 'metro', name: 'City Metro / Subway', icon: 'fa-train-subway', color: '#10b981', price: 50 },
      { id: 'tram', name: 'Light Rail / Tram', icon: 'fa-train-tram', color: '#0ea5e9', price: 40 },
      { id: 'monorail', name: 'Urban Monorail', icon: 'fa-train-subway', color: '#f59e0b', price: 60 },
      { id: 'funicular', name: 'Funicular / Cog Railway', icon: 'fa-mountain', color: '#8b5cf6', price: 150 },
    ]
  },
  {
    title: 'Intercity & High-Speed',
    vehicles: [
      { id: 'express', name: 'Express Train', icon: 'fa-train', color: '#3b82f6', price: 800 },
      { id: 'bullet', name: 'High-Speed Bullet Train', icon: 'fa-bolt', color: '#8b5cf6', price: 2500 },
      { id: 'maglev', name: 'Maglev Train', icon: 'fa-magnet', color: '#ec4899', price: 4000 },
      { id: 'hyperloop', name: 'Hyperloop Pod', icon: 'fa-angles-right', color: '#4338ca', price: 8500 },
    ]
  },
  {
    title: 'Luxury & Specialty Trains',
    vehicles: [
      { id: 'tourist', name: 'Luxury Tourist Train', icon: 'fa-champagne-glasses', color: '#eab308', price: 15000 },
      { id: 'steam', name: 'Heritage Steam Locomotive', icon: 'fa-train', color: '#71717a', price: 3500 },
    ]
  }
];

const ALL_FLEETS = [
  ...ROAD_FLEET.map(c => c.vehicles).flat(),
  ...SEA_FLEET.map(c => c.vehicles).flat(),
  ...AIR_FLEET.map(c => c.vehicles).flat(),
  ...RAIL_FLEET.map(c => c.vehicles).flat()
];

interface RideBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RideBookingModal({ isOpen, onClose }: RideBookingModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'ROAD' | 'SEA' | 'AIR' | 'RAIL'>('ALL');
  const [selectedVehicle, setSelectedVehicle] = useState('micro');
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
    // Remove special characters for a clean URL
    const cleanName = vehicle.name.split('/')[0].trim();
    updateUrl(`/home/rides/${encodeURIComponent(cleanName)} booking`);
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

  const renderGridSection = (title: string, icon: string, data: typeof ROAD_FLEET) => {
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
            <i className="fa-solid fa-compass" style={{ color: '#0ea5e9' }}></i> Omni-Transit Booking
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
                { id: 'ALL', label: 'All Transit', icon: 'fa-globe', color: '#f59e0b' },
                { id: 'ROAD', label: 'Road', icon: 'fa-car', color: '#3b82f6' },
                { id: 'SEA', label: 'Sea & Water', icon: 'fa-ship', color: '#0ea5e9' },
                { id: 'AIR', label: 'Air Transit', icon: 'fa-plane', color: '#8b5cf6' },
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
            {activeCategory === 'ALL' && renderGridSection('ALL TRANSIT OPTIONS', 'fa-globe', [{ title: 'All', vehicles: ALL_FLEETS }] as any)}
            {activeCategory === 'ROAD' && renderGridSection('ROAD TRANSIT', 'fa-car', ROAD_FLEET)}
            {activeCategory === 'SEA' && renderGridSection('SEA / WATER TRANSIT', 'fa-ship', SEA_FLEET)}
            {activeCategory === 'AIR' && renderGridSection('AIR TRANSIT', 'fa-plane', AIR_FLEET)}
            {activeCategory === 'RAIL' && renderGridSection('RAIL TRANSIT', 'fa-train', RAIL_FLEET)}
          </div>
        )}

        {step === 2 && (
          <div style={{ flex: 1, overflowY: 'auto', padding: '32px' }}>
            
            <button 
              onClick={handleBackToFleet} 
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
