'use client';

import React, { useState, useEffect } from 'react';
import { useSartStore } from '@/store/useSartStore';

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

const RENTAL_MASTER_CATEGORIES = [
  { id: 'bike', name: 'Bikes & Scooters', icon: 'fa-motorcycle', color: '#f59e0b', desc: 'Commuters & Sports Bikes', type: 'ROAD', list: ROAD_RENTAL_FLEET[0].vehicles },
  { id: 'car', name: 'Cars & Sedans', icon: 'fa-car-side', color: '#3b82f6', desc: 'Hatchbacks & Premium Sedans', type: 'ROAD', list: [...ROAD_RENTAL_FLEET[1].vehicles, ...ROAD_RENTAL_FLEET[2].vehicles] },
  { id: 'suv', name: 'SUVs & Off-Roaders', icon: 'fa-mountain-sun', color: '#ec4899', desc: 'Compact & Luxury SUVs', type: 'ROAD', list: ROAD_RENTAL_FLEET[3].vehicles },
  { id: 'van', name: 'Vans & Specialty', icon: 'fa-van-shuttle', color: '#10b981', desc: 'Minivans & RVs', type: 'ROAD', list: ROAD_RENTAL_FLEET[4].vehicles },
  { id: 'water', name: 'Boats & Yachts', icon: 'fa-ship', color: '#0ea5e9', desc: 'Speedboats & Private Yachts', type: 'SEA', list: [...SEA_RENTAL_FLEET[0].vehicles, ...SEA_RENTAL_FLEET[1].vehicles, ...SEA_RENTAL_FLEET[2].vehicles] },
  { id: 'air', name: 'Air Charters', icon: 'fa-plane', color: '#8b5cf6', desc: 'Helicopters & Private Jets', type: 'AIR', list: [...AIR_RENTAL_FLEET[0].vehicles, ...AIR_RENTAL_FLEET[1].vehicles] },
  { id: 'rail', name: 'Train Charters', icon: 'fa-train', color: '#ef4444', desc: 'Saloon Cars & Tourist Trains', type: 'RAIL', list: RAIL_RENTAL_FLEET[0].vehicles }
];

interface RentalBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

class ModalErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: any}> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ zIndex: 9999, position: 'fixed', top: '100px', left: '20px', background: 'red', color: 'white', padding: '20px', borderRadius: '10px' }}>
          <h2>Modal Crash!</h2>
          <pre>{this.state.error?.message}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function RentalBookingModalWrapper(props: RentalBookingModalProps) {
  return (
    <ModalErrorBoundary>
      <RentalBookingModal {...props} />
    </ModalErrorBoundary>
  );
}

function RentalBookingModal({ isOpen, onClose }: RentalBookingModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedMasterId, setSelectedMasterId] = useState('');
  const [selectedVehicleId, setSelectedVehicleId] = useState('');
  
  // Form State
  const [pickup, setPickup] = useState('Current Location');
  const [rentalType, setRentalType] = useState('Daily');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [returnTime, setReturnTime] = useState('');

  useEffect(() => {
    const handleReset = () => {
      setStep(1);
    };
    window.addEventListener('resetModalSteps', handleReset);
    return () => window.removeEventListener('resetModalSteps', handleReset);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/home/rental') {
        setStep(1);
      } else if (path === '/' || path === '/home') {
        useSartStore.getState().setActiveTab('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (!isOpen) return null;

  const handleSelectMaster = (master: any) => {
    setSelectedMasterId(master.id);
    if (master.list.length > 0) {
      setSelectedVehicleId(master.list[0].id);
    }
    setStep(2);
  };

  const handleBackToFleet = () => {
    setStep(1);
  };

  const handleClose = () => {
    setStep(1);
    useSartStore.getState().setActiveTab('home');
    onClose();
  };

  const handleBook = () => {
    let vehicleName = 'Self-Drive Vehicle';
    let vehiclePrice = 1500;
    
    const master = RENTAL_MASTER_CATEGORIES.find(m => m.id === selectedMasterId);
    if (master) {
      const found = master.list.find((v: any) => v.id === selectedVehicleId);
      if (found) {
        vehicleName = found.name;
        vehiclePrice = found.price;
      }
    }

    let subtitle = `${vehicleName} • ${rentalType} Rental`;
    if (startDate && returnDate) {
      subtitle += ` • From ${startDate} to ${returnDate}`;
    }
    
    if ((window as any).executeGenericBooking) {
      (window as any).executeGenericBooking('rental', `Rental: ${pickup}`, subtitle, vehiclePrice, { from: pickup, startDate, startTime, returnDate, returnTime, rentalType });
    }
    handleClose();
  };

  const activeMaster = RENTAL_MASTER_CATEGORIES.find(m => m.id === selectedMasterId);
  const activeVehicle = activeMaster?.list.find((v: any) => v.id === selectedVehicleId);

  return (
    <div className="modal-overlay open" style={{ display: 'flex', zIndex: 1000, background: 'rgba(0,0,0,0.6)' }} onClick={handleClose}>
      <div className="modal-sheet centered-modal" style={{ maxWidth: '1000px', width: '95%', height: '90vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f9fafb', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }} onClick={e => e.stopPropagation()}>
        
        {/* HACK: globals.css has `#tab-service-pages .modal-sheet>div:first-child { display: none !important; }`
            This dummy div absorbs that CSS rule so our actual content doesn't get hidden! */}
        <div className="dummy-modal-header-for-css-hack"></div>

        {/* ================= STEP 1: MASTER CATEGORIES ================= */}
        {step === 1 && (
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: '#ffffff', borderBottom: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: '22px', fontWeight: '800', color: '#111827', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <i className="fa-solid fa-key" style={{ color: '#0ea5e9' }}></i> Self-Drive & Rentals
              </div>
            </div>
            
            <div style={{ flex: 1, overflowY: 'auto', padding: '24px', background: '#ffffff' }}>
              <h2 style={{ margin: '0 0 24px 0', fontSize: '24px', fontWeight: '800', color: '#111827' }}>What would you like to rent?</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                {RENTAL_MASTER_CATEGORIES.map(m => (
                  <div 
                    key={m.id}
                    onClick={() => handleSelectMaster(m)}
                    style={{
                      border: '1px solid #e5e7eb',
                      borderRadius: '16px',
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      background: '#ffffff',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)'; }}
                  >
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: m.color + '20', color: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '16px' }}>
                      <i className={`fa-solid ${m.icon}`}></i>
                    </div>
                    <div style={{ fontSize: '18px', fontWeight: '800', color: '#1f2937', textAlign: 'center', marginBottom: '8px' }}>
                      {m.name}
                    </div>
                    <div style={{ fontSize: '13px', color: '#6b7280', textAlign: 'center' }}>
                      {m.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ================= STEP 2: BOOKING DASHBOARD (ZOOMCAR STYLE) ================= */}
        {step === 2 && activeMaster && (
          <div style={{ display: 'flex', flex: 1, height: '80vh', overflow: 'hidden' }}>
            
            {/* Left Sidebar (Booking Form) */}
            <div style={{ width: '420px', background: '#ffffff', display: 'flex', flexDirection: 'column', borderRight: '1px solid #e5e7eb', zIndex: 10, boxShadow: '4px 0 16px rgba(0,0,0,0.05)', overflowY: 'auto' }}>
              
              {/* Header */}
              <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '1px solid #f3f4f6', position: 'sticky', top: 0, background: '#fff', zIndex: 20 }}>
                <button onClick={handleBackToFleet} style={{ background: '#f3f4f6', border: 'none', width: '36px', height: '36px', borderRadius: '50%', color: '#111827', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <h2 style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: '#111827' }}>{activeMaster.name}</h2>
              </div>

              {/* Form Content */}
              <div style={{ padding: '24px' }}>
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '800', color: '#6b7280', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Pick-up Location</label>
                  <div style={{ display: 'flex', alignItems: 'center', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '12px 16px' }}>
                    <i className="fa-solid fa-location-dot" style={{ color: '#10b981', marginRight: '12px', fontSize: '18px' }}></i>
                    <input type="text" style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none', fontSize: '15px', fontWeight: '600', color: '#111827' }} placeholder="Enter City, Airport, or Address" value={pickup} onChange={e => setPickup(e.target.value)} />
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '800', color: '#6b7280', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Rental Duration Plan</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    {['Hourly', 'Daily', 'Weekly', 'Monthly'].map(type => (
                      <button 
                        key={type}
                        onClick={() => setRentalType(type)}
                        style={{ padding: '10px', borderRadius: '8px', border: rentalType === type ? `1px solid ${activeMaster.color}` : '1px solid #e5e7eb', background: rentalType === type ? activeMaster.color + '10' : '#ffffff', color: rentalType === type ? activeMaster.color : '#4b5563', fontSize: '13px', fontWeight: '700', cursor: 'pointer', transition: 'all 0.2s' }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ border: '1px solid #e5e7eb', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', padding: '16px', borderBottom: '1px solid #e5e7eb' }}>
                    <div style={{ width: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '3px solid #10b981' }}></div>
                      <div style={{ width: '2px', height: '24px', background: '#e5e7eb' }}></div>
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div>
                        <div style={{ fontSize: '12px', color: '#6b7280', fontWeight: '600', marginBottom: '4px' }}>START</div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} style={{ padding: '8px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', flex: 1, outline: 'none' }} />
                          <input type="time" value={startTime} onChange={e => setStartTime(e.target.value)} style={{ padding: '8px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', width: '110px', outline: 'none' }} />
                        </div>
                      </div>
                      <div>
                        <div style={{ fontSize: '12px', color: '#6b7280', fontWeight: '600', marginBottom: '4px' }}>END</div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <input type="date" value={returnDate} onChange={e => setReturnDate(e.target.value)} style={{ padding: '8px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', flex: 1, outline: 'none' }} />
                          <input type="time" value={returnTime} onChange={e => setReturnTime(e.target.value)} style={{ padding: '8px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', width: '110px', outline: 'none' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ background: '#f9fafb', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#4b5563', fontWeight: '600' }}>
                    <i className="fa-solid fa-clock" style={{ color: '#f59e0b' }}></i> Ensure accurate drop-off time to avoid penalties.
                  </div>
                </div>

                {/* Price Breakdown */}
                {activeVehicle && (
                  <div style={{ background: '#f3f4f6', borderRadius: '16px', padding: '20px', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '14px', color: '#4b5563' }}>
                      <span>Base Fare ({rentalType})</span>
                      <span style={{ fontWeight: '700', color: '#111827' }}>₹{activeVehicle.price}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '14px', color: '#4b5563' }}>
                      <span>Taxes & Fees</span>
                      <span style={{ fontWeight: '700', color: '#111827' }}>₹{(activeVehicle.price * 0.18).toFixed(0)}</span>
                    </div>
                    <div style={{ borderTop: '1px dashed #d1d5db', margin: '12px 0' }}></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '16px', fontWeight: '800', color: '#111827' }}>Total Estimate</span>
                      <span style={{ fontSize: '24px', fontWeight: '800', color: activeMaster.color }}>₹{(activeVehicle.price * 1.18).toFixed(0)}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Action */}
              <div style={{ padding: '20px', background: '#ffffff', borderTop: '1px solid #e5e7eb', position: 'sticky', bottom: 0, marginTop: 'auto' }}>
                <button 
                  onClick={handleBook}
                  style={{ width: '100%', background: activeMaster.color, color: '#ffffff', border: 'none', padding: '16px', borderRadius: '12px', fontSize: '16px', fontWeight: '800', cursor: 'pointer', transition: 'opacity 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>

            {/* Right Sidebar (Vehicle Selection Grid) */}
            <div style={{ flex: 1, background: '#f9fafb', display: 'flex', flexDirection: 'column', padding: '32px', overflowY: 'auto' }}>
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ margin: 0, fontSize: '24px', fontWeight: '800', color: '#111827' }}>Select your {activeMaster.name.split(' ')[0]}</h3>
                <p style={{ margin: '8px 0 0 0', color: '#6b7280', fontSize: '15px' }}>Choose a vehicle that fits your needs.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
                {activeMaster.list.map((v: any) => (
                  <div 
                    key={v.id}
                    onClick={() => setSelectedVehicleId(v.id)}
                    style={{
                      background: '#ffffff',
                      border: selectedVehicleId === v.id ? `2px solid ${activeMaster.color}` : '2px solid transparent',
                      borderRadius: '16px',
                      padding: '20px',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      boxShadow: selectedVehicleId === v.id ? `0 10px 25px -5px ${activeMaster.color}40` : '0 4px 6px -1px rgba(0,0,0,0.05)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      position: 'relative'
                    }}
                  >
                    {selectedVehicleId === v.id && (
                      <div style={{ position: 'absolute', top: '12px', right: '12px', color: activeMaster.color, fontSize: '18px' }}>
                        <i className="fa-solid fa-circle-check"></i>
                      </div>
                    )}
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: v.color + '15', color: v.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', marginBottom: '16px' }}>
                      <i className={`fa-solid ${v.icon}`}></i>
                    </div>
                    <div style={{ fontSize: '16px', fontWeight: '800', color: '#111827', marginBottom: '8px' }}>
                      {v.name}
                    </div>
                    <div style={{ fontSize: '18px', fontWeight: '800', color: '#4b5563' }}>
                      ₹{v.price} <span style={{ fontSize: '12px', fontWeight: '600', color: '#9ca3af' }}>/ {rentalType.toLowerCase()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
