'use client';

import React, { useState } from 'react';

const DRIVER_CATEGORIES = [
  {
    title: 'Road Drivers',
    icon: 'fa-car',
    drivers: [
      { id: 'rd-1', name: 'Ramesh Kumar', vehicleType: 'Cars & SUVs', experience: '8 Years', rating: 4.9, price: 1200, avatar: 'fa-user-tie', color: '#3b82f6' },
      { id: 'rd-2', name: 'Suresh Babu', vehicleType: 'Heavy Trucks (HGVs)', experience: '12 Years', rating: 4.8, price: 2500, avatar: 'fa-user-helmet-safety', color: '#f59e0b' },
      { id: 'rd-3', name: 'Anita Desai', vehicleType: 'Luxury Chauffeur', experience: '5 Years', rating: 5.0, price: 3000, avatar: 'fa-user-tie', color: '#8b5cf6' },
    ]
  },
  {
    title: 'Sea / Water Captains',
    icon: 'fa-ship',
    drivers: [
      { id: 'sd-1', name: 'Capt. Vikram Singh', vehicleType: 'Private Yachts', experience: '15 Years', rating: 4.9, price: 15000, avatar: 'fa-anchor', color: '#0ea5e9' },
      { id: 'sd-2', name: 'Capt. Thomas Raj', vehicleType: 'Commercial Boats', experience: '20 Years', rating: 4.7, price: 12000, avatar: 'fa-anchor', color: '#2563eb' },
    ]
  },
  {
    title: 'Air Pilots',
    icon: 'fa-plane',
    drivers: [
      { id: 'ad-1', name: 'Capt. Aisha Khan', vehicleType: 'Helicopters', experience: '10 Years', rating: 4.9, price: 45000, avatar: 'fa-plane-up', color: '#10b981' },
      { id: 'ad-2', name: 'Capt. Rahul Sharma', vehicleType: 'Charter Jets', experience: '14 Years', rating: 5.0, price: 80000, avatar: 'fa-plane-departure', color: '#059669' },
    ]
  }
];

export default function DriversBookingModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [selectedDriver, setSelectedDriver] = useState<string | null>(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  if (!isOpen) return null;

  const handleClose = () => {
    setStep(1);
    setSelectedDriver(null);
    onClose();
  };

  const handleBook = () => {
    let driverName = 'Driver';
    let driverPrice = 1200;
    
    // Find the driver across all categories
    for (const cat of DRIVER_CATEGORIES) {
      const found = cat.drivers.find(d => d.id === selectedDriver);
      if (found) {
        driverName = found.name;
        driverPrice = found.price;
        break;
      }
    }

    let subtitle = `Professional Driver • ${driverName}`;
    if (date || time) {
      subtitle += ` • Scheduled: ${date} ${time}`.trim();
    }
    
    if ((window as any).executeGenericBooking) {
      (window as any).executeGenericBooking('drivers', `Driver Rental: ${driverName}`, subtitle, driverPrice, { date, time });
    }
    handleClose();
  };

  const selectedDriverObj = DRIVER_CATEGORIES.flatMap(c => c.drivers).find(d => d.id === selectedDriver);

  const renderGridSection = (title: string, icon: string, drivers: typeof DRIVER_CATEGORIES[0]['drivers']) => (
    <div style={{ marginBottom: '32px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#111827', margin: '24px 0 16px 0', paddingBottom: '8px', borderBottom: '2px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <i className={`fa-solid ${icon}`}></i> {title}
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
        {drivers.map(d => (
          <div 
            key={d.id} 
            onClick={() => { setSelectedDriver(d.id); setStep(2); }}
            style={{
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '16px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '16px',
              cursor: 'pointer',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)'; }}
          >
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: d.color + '20', color: d.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', flexShrink: 0 }}>
              <i className={`fa-solid ${d.avatar}`}></i>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '16px', fontWeight: '700', color: '#1f2937' }}>{d.name}</div>
              <div style={{ fontSize: '13px', color: '#6b7280', margin: '2px 0 4px 0' }}>{d.vehicleType} • {d.experience} Exp.</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', fontWeight: '600', color: '#f59e0b' }}><i className="fa-solid fa-star"></i> {d.rating}</span>
                <span style={{ fontSize: '14px', fontWeight: '800', color: '#10b981' }}>₹{d.price}/day</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="modal-overlay open" style={{ display: 'flex', zIndex: 1000, background: 'rgba(0,0,0,0.6)' }} onClick={handleClose}>
      <div className="modal-sheet centered-modal" style={{ maxWidth: '900px', width: '95%', height: '90vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f9fafb', borderRadius: '24px', overflow: 'hidden' }} onClick={e => e.stopPropagation()}>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: '#ffffff', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ fontSize: '22px', fontWeight: '800', color: '#111827', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <i className="fa-solid fa-id-card-clip" style={{ color: '#10b981' }}></i> Rent Professional Drivers
          </div>
          <button onClick={handleClose} style={{ background: '#f3f4f6', border: 'none', width: '36px', height: '36px', borderRadius: '50%', color: '#4b5563', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        
        {step === 1 && (
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
            <p style={{ color: '#64748b', fontSize: '16px', marginBottom: '12px', fontWeight: '500' }}>
              Hire highly trained, background-verified professionals for Road, Sea, or Air transport.
            </p>
            {DRIVER_CATEGORIES.map(cat => (
              <React.Fragment key={cat.title}>
                {renderGridSection(cat.title, cat.icon, cat.drivers)}
              </React.Fragment>
            ))}
          </div>
        )}

        {step === 2 && (
          <div style={{ flex: 1, overflowY: 'auto', padding: '32px' }}>
            
            <button 
              onClick={() => setStep(1)} 
              style={{ background: 'transparent', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: '15px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 0 24px 0' }}
            >
              <i className="fa-solid fa-arrow-left"></i> Back to driver selection
            </button>
            
            <div style={{ background: '#ffffff', borderRadius: '20px', padding: '24px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '24px' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #f3f4f6' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: (selectedDriverObj?.color || '#3b82f6') + '20', color: selectedDriverObj?.color || '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px' }}>
                  <i className={`fa-solid ${selectedDriverObj?.avatar || 'fa-user-tie'}`}></i>
                </div>
                <div>
                  <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#111827', margin: '0 0 4px 0' }}>{selectedDriverObj?.name}</h3>
                  <p style={{ fontSize: '15px', color: '#6b7280', margin: '0 0 8px 0' }}>{selectedDriverObj?.vehicleType} • {selectedDriverObj?.experience} Experience</p>
                  <span style={{ display: 'inline-block', background: '#ecfdf5', color: '#10b981', padding: '4px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: '700' }}>
                    <i className="fa-solid fa-shield-check"></i> Background Verified
                  </span>
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#374151', marginBottom: '12px' }}>Schedule Details</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: '#6b7280', marginBottom: '4px', fontWeight: '600' }}>Start Date</label>
                    <div style={{ position: 'relative' }}>
                      <i className="fa-solid fa-calendar" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }}></i>
                      <input 
                        type="date" 
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        style={{ width: '100%', padding: '12px 16px 12px 42px', borderRadius: '12px', border: '1px solid #d1d5db', fontSize: '15px', outline: 'none' }}
                      />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: '#6b7280', marginBottom: '4px', fontWeight: '600' }}>Time</label>
                    <div style={{ position: 'relative' }}>
                      <i className="fa-solid fa-clock" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }}></i>
                      <input 
                        type="time" 
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        style={{ width: '100%', padding: '12px 16px 12px 42px', borderRadius: '12px', border: '1px solid #d1d5db', fontSize: '15px', outline: 'none' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {step === 2 && (
          <div style={{ padding: '24px', background: '#ffffff', borderTop: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '14px', color: '#6b7280', fontWeight: '600' }}>Estimated Cost</div>
              <div style={{ fontSize: '28px', fontWeight: '800', color: '#111827' }}>₹{selectedDriverObj?.price || 1200} <span style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>/ day</span></div>
            </div>
            <button 
              onClick={handleBook}
              style={{ background: '#10b981', color: '#fff', border: 'none', padding: '16px 40px', borderRadius: '16px', fontSize: '18px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '8px' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Confirm Booking <i className="fa-solid fa-check"></i>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
