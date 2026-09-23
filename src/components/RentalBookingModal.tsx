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

const ALL_RENTALS = [
  ...ROAD_RENTAL_FLEET.map(c => c.vehicles).flat(),
  ...SEA_RENTAL_FLEET.map(c => c.vehicles).flat(),
  ...AIR_RENTAL_FLEET.map(c => c.vehicles).flat()
];

interface RentalBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RentalBookingModal({ isOpen, onClose }: RentalBookingModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedVehicle, setSelectedVehicle] = useState('r-premium-hatch');
  const [pickup, setPickup] = useState('Current Location');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [returnTime, setReturnTime] = useState('');

  if (!isOpen) return null;

  const handleClose = () => {
    setStep(1);
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

    let subtitle = `${vehicleName} • Self-Drive Rental`;
    if (startDate && returnDate) {
      subtitle += ` • From ${startDate} to ${returnDate}`;
    }
    
    if ((window as any).executeGenericBooking) {
      (window as any).executeGenericBooking('rental', `Rental: ${pickup}`, subtitle, vehiclePrice, { from: pickup, startDate, startTime, returnDate, returnTime });
    }
    handleClose();
  };

  const selectedVehicleObj = ALL_RENTALS.find(v => v.id === selectedVehicle);

  const renderGridSection = (title: string, icon: string, data: typeof ROAD_RENTAL_FLEET) => (
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
            <i className="fa-solid fa-key" style={{ color: '#0ea5e9' }}></i> Omni-Transit Rental Booking
          </div>
          <button onClick={handleClose} style={{ background: '#f3f4f6', border: 'none', width: '36px', height: '36px', borderRadius: '50%', color: '#4b5563', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        
        {step === 1 && (
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
            {renderGridSection('ROAD RENTALS', 'fa-car-side', ROAD_RENTAL_FLEET)}
            {renderGridSection('SEA & MARINE RENTALS', 'fa-ship', SEA_RENTAL_FLEET)}
            {renderGridSection('AIR & CHARTER RENTALS', 'fa-plane', AIR_RENTAL_FLEET)}
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
                  <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#6b7280' }}>Selected Rental Vehicle</p>
                </div>
                <div style={{ fontSize: '16px', fontWeight: '700', color: '#111827', textAlign: 'right' }}>
                  <div style={{ fontSize: '24px', fontWeight: '800' }}>₹{selectedVehicleObj.price.toLocaleString('en-IN')}</div>
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>per day / block</div>
                </div>
              </div>
            )}

            <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '24px' }}>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#4b5563', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Pickup & Dropoff Location</label>
                <input type="text" style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #d1d5db', background: '#f9fafb', color: '#111827', fontSize: '15px' }} placeholder="Enter location (e.g., Airport Terminal 1, Marina Bay)" value={pickup} onChange={e => setPickup(e.target.value)} />
              </div>
              
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#111827', margin: '0 0 16px 0', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>Rental Period</h4>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#6b7280', marginBottom: '6px' }}>Start Date</label>
                  <input type="date" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db', background: '#f9fafb', color: '#111827', fontSize: '14px' }} value={startDate} onChange={e => setStartDate(e.target.value)} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#6b7280', marginBottom: '6px' }}>Start Time</label>
                  <input type="time" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db', background: '#f9fafb', color: '#111827', fontSize: '14px' }} value={startTime} onChange={e => setStartTime(e.target.value)} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#6b7280', marginBottom: '6px' }}>Return Date</label>
                  <input type="date" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db', background: '#f9fafb', color: '#111827', fontSize: '14px' }} value={returnDate} onChange={e => setReturnDate(e.target.value)} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#6b7280', marginBottom: '6px' }}>Return Time</label>
                  <input type="time" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db', background: '#f9fafb', color: '#111827', fontSize: '14px' }} value={returnTime} onChange={e => setReturnTime(e.target.value)} />
                </div>
              </div>

              <button 
                onClick={handleBook}
                style={{ width: '100%', padding: '16px', borderRadius: '12px', background: '#0ea5e9', color: '#ffffff', border: 'none', fontSize: '16px', fontWeight: '700', cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#0284c7'}
                onMouseLeave={e => e.currentTarget.style.background = '#0ea5e9'}
              >
                Confirm Rental Booking
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
