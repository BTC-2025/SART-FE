'use client';

import React, { useState } from 'react';

const ROAD_COMMUNITY = [
  {
    title: 'Road Unions & Stands',
    vehicles: [
      { id: 'com-auto', name: 'Auto-Rickshaw Stand Union', icon: 'fa-taxi', color: '#f59e0b', price: 500 },
      { id: 'com-taxi', name: 'City Taxi Drivers Union', icon: 'fa-car', color: '#3b82f6', price: 1000 },
      { id: 'com-truck', name: 'Heavy Truckers Association', icon: 'fa-truck-front', color: '#8b5cf6', price: 2500 },
      { id: 'com-bus', name: 'Private Bus Owners Club', icon: 'fa-bus', color: '#10b981', price: 5000 },
    ]
  }
];

const SEA_COMMUNITY = [
  {
    title: 'Marine Clubs & Port Unions',
    vehicles: [
      { id: 'com-fisher', name: 'Fishermen Coastal Union', icon: 'fa-fish', color: '#0ea5e9', price: 200 },
      { id: 'com-yacht', name: 'Elite Yacht Owners Club', icon: 'fa-sailboat', color: '#db2777', price: 15000 },
      { id: 'com-ferry', name: 'Ferry Captains Syndicate', icon: 'fa-ferry', color: '#4f46e5', price: 3000 },
    ]
  }
];

const AIR_COMMUNITY = [
  {
    title: 'Aviation Associations',
    vehicles: [
      { id: 'com-drone', name: 'Commercial Drone Pilots', icon: 'fa-helicopter-symbol', color: '#f97316', price: 800 },
      { id: 'com-pilot', name: 'Charter Pilots Association', icon: 'fa-plane', color: '#3b82f6', price: 8000 },
      { id: 'com-heli', name: 'Helicopter Operators Club', icon: 'fa-helicopter', color: '#10b981', price: 5000 },
    ]
  }
];

const RAIL_COMMUNITY = [
  {
    title: 'Rail Worker Unions',
    vehicles: [
      { id: 'com-train', name: 'Locomotive Engineers Union', icon: 'fa-train', color: '#8b5cf6', price: 2000 },
      { id: 'com-metro', name: 'Urban Metro Workers', icon: 'fa-train-subway', color: '#ec4899', price: 1500 },
    ]
  }
];

const ALL_COMMUNITIES = [
  ...ROAD_COMMUNITY.map(c => c.vehicles).flat(),
  ...SEA_COMMUNITY.map(c => c.vehicles).flat(),
  ...AIR_COMMUNITY.map(c => c.vehicles).flat(),
  ...RAIL_COMMUNITY.map(c => c.vehicles).flat()
];

export default function CommunityModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [activeMainTab, setActiveMainTab] = useState<'private' | 'public'>('private');
  
  // State for Public Unions
  const [step, setStep] = useState<1 | 2>(1);
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'ROAD' | 'SEA' | 'AIR' | 'RAIL'>('ALL');
  const [selectedVehicle, setSelectedVehicle] = useState('com-auto');
  const [pickup, setPickup] = useState('My City / Region');
  const [date, setDate] = useState('');

  // Modals for Private
  const [showAllocateModal, setShowAllocateModal] = useState(false);
  const [showAddVehicleModal, setShowAddVehicleModal] = useState(false);

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
    updateUrl(`/home/community/${encodeURIComponent(cleanName)} join`);
  };

  const handleClose = () => {
    setStep(1);
    updateUrl('/');
    onClose();
  };

  const handleJoinUnion = () => {
    let vehicleName = 'Community';
    let vehiclePrice = 500;
    
    const found = ALL_COMMUNITIES.find(v => v.id === selectedVehicle);
    if (found) {
      vehicleName = found.name;
      vehiclePrice = found.price;
    }

    let subtitle = `Membership • ${vehicleName}`;
    if (date) {
      subtitle += ` • Starting: ${date}`;
    }
    
    if ((window as any).executeGenericBooking) {
      (window as any).executeGenericBooking('community', `Join Union: ${vehicleName} (${pickup})`, subtitle, vehiclePrice, { from: pickup, date });
    }
    handleClose();
  };

  const selectedVehicleObj = ALL_COMMUNITIES.find(v => v.id === selectedVehicle);

  const renderGridSection = (title: string, icon: string, data: typeof ROAD_COMMUNITY) => {
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
      <div className="modal-sheet centered-modal" style={{ maxWidth: '1000px', width: '95%', height: '90vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f9fafb', borderRadius: '24px', overflow: 'hidden' }} onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: '#ffffff', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ fontSize: '22px', fontWeight: '800', color: '#111827', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <i className="fa-solid fa-users" style={{ color: '#8b5cf6' }}></i> SART Communities
          </div>
          <button onClick={handleClose} style={{ background: '#f3f4f6', border: 'none', width: '36px', height: '36px', borderRadius: '50%', color: '#4b5563', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', borderBottom: '1px solid #e5e7eb', background: '#ffffff', padding: '0 24px' }}>
          <button 
            onClick={() => setActiveMainTab('private')}
            style={{ 
              padding: '16px 24px', 
              border: 'none', 
              background: 'transparent', 
              fontSize: '16px', 
              fontWeight: '700', 
              color: activeMainTab === 'private' ? '#8b5cf6' : '#6b7280',
              borderBottom: activeMainTab === 'private' ? '3px solid #8b5cf6' : '3px solid transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <i className="fa-solid fa-building-user"></i> Private (Fleet Owners)
          </button>
          <button 
            onClick={() => { setActiveMainTab('public'); setStep(1); }}
            style={{ 
              padding: '16px 24px', 
              border: 'none', 
              background: 'transparent', 
              fontSize: '16px', 
              fontWeight: '700', 
              color: activeMainTab === 'public' ? '#10b981' : '#6b7280',
              borderBottom: activeMainTab === 'public' ? '3px solid #10b981' : '3px solid transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <i className="fa-solid fa-people-group"></i> Public (Unions & Stands)
          </button>
        </div>
        
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          
          {/* ================= PRIVATE COMMUNITY ================= */}
          {activeMainTab === 'private' && (
            <div className="fade-in">
              <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <h2 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: '800', color: '#1f2937' }}>Fleet Management Hub</h2>
                  <p style={{ margin: 0, color: '#6b7280', fontSize: '15px' }}>Track your owned vehicles, manage drivers, and allocate resources efficiently.</p>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button onClick={() => setShowAddVehicleModal(true)} style={{ background: '#ffffff', color: '#1f2937', border: '1px solid #d1d5db', padding: '10px 16px', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <i className="fa-solid fa-truck-medical"></i> Add Vehicle
                  </button>
                  <button onClick={() => setShowAllocateModal(true)} style={{ background: '#8b5cf6', color: '#ffffff', border: 'none', padding: '10px 16px', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <i className="fa-solid fa-user-plus"></i> Allocate Driver
                  </button>
                </div>
              </div>

              {/* Private Dashboard Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
                <div style={{ background: '#ffffff', padding: '20px', borderRadius: '16px', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#f3e8ff', color: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}><i className="fa-solid fa-truck"></i></div>
                  <div><div style={{ fontSize: '24px', fontWeight: '800', color: '#111827' }}>12</div><div style={{ fontSize: '13px', color: '#6b7280', fontWeight: '600' }}>Total Vehicles</div></div>
                </div>
                <div style={{ background: '#ffffff', padding: '20px', borderRadius: '16px', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#dcfce7', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}><i className="fa-solid fa-id-card"></i></div>
                  <div><div style={{ fontSize: '24px', fontWeight: '800', color: '#111827' }}>8</div><div style={{ fontSize: '13px', color: '#6b7280', fontWeight: '600' }}>Active Drivers</div></div>
                </div>
                <div style={{ background: '#ffffff', padding: '20px', borderRadius: '16px', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#e0f2fe', color: '#0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}><i className="fa-solid fa-route"></i></div>
                  <div><div style={{ fontSize: '24px', fontWeight: '800', color: '#111827' }}>5</div><div style={{ fontSize: '13px', color: '#6b7280', fontWeight: '600' }}>On Duty (Live)</div></div>
                </div>
                <div style={{ background: '#ffffff', padding: '20px', borderRadius: '16px', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#ffedd5', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}><i className="fa-solid fa-triangle-exclamation"></i></div>
                  <div><div style={{ fontSize: '24px', fontWeight: '800', color: '#111827' }}>2</div><div style={{ fontSize: '13px', color: '#6b7280', fontWeight: '600' }}>Needs Maint.</div></div>
                </div>
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#374151', marginBottom: '16px' }}>Live Fleet Tracking & Allocation</h3>
              <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead style={{ background: '#f9fafb' }}>
                    <tr>
                      <th style={{ padding: '16px', fontSize: '13px', color: '#6b7280', fontWeight: '600', borderBottom: '1px solid #e5e7eb' }}>Vehicle</th>
                      <th style={{ padding: '16px', fontSize: '13px', color: '#6b7280', fontWeight: '600', borderBottom: '1px solid #e5e7eb' }}>Assigned Driver</th>
                      <th style={{ padding: '16px', fontSize: '13px', color: '#6b7280', fontWeight: '600', borderBottom: '1px solid #e5e7eb' }}>Status</th>
                      <th style={{ padding: '16px', fontSize: '13px', color: '#6b7280', fontWeight: '600', borderBottom: '1px solid #e5e7eb' }}>Live Location</th>
                      <th style={{ padding: '16px', fontSize: '13px', color: '#6b7280', fontWeight: '600', borderBottom: '1px solid #e5e7eb' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { v: 'TN-01-AB-1234 (Ashok Leyland)', d: 'Ramesh Kumar', stat: 'On Duty', loc: 'Chennai - Bangalore Hwy', color: '#10b981' },
                      { v: 'TN-02-XY-9876 (Tata Signa)', d: 'Suresh Babu', stat: 'Resting', loc: 'Vellore Checkpost', color: '#f59e0b' },
                      { v: 'TN-04-KL-5566 (Mahindra Blazo)', d: 'Unassigned', stat: 'Idle', loc: 'Chennai Hub', color: '#9ca3af' },
                    ].map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid #f3f4f6' }}>
                        <td style={{ padding: '16px', fontSize: '14px', fontWeight: '600', color: '#1f2937' }}>{row.v}</td>
                        <td style={{ padding: '16px', fontSize: '14px', color: '#4b5563' }}>{row.d}</td>
                        <td style={{ padding: '16px' }}><span style={{ padding: '4px 10px', borderRadius: '12px', background: row.color+'20', color: row.color, fontSize: '12px', fontWeight: '700' }}>{row.stat}</span></td>
                        <td style={{ padding: '16px', fontSize: '14px', color: '#6b7280' }}><i className="fa-solid fa-location-dot" style={{ color: '#ef4444', marginRight: '6px' }}></i> {row.loc}</td>
                        <td style={{ padding: '16px' }}>
                          <button style={{ background: '#f3f4f6', border: 'none', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', color: '#374151', fontWeight: '600', fontSize: '12px' }}>Track <i className="fa-solid fa-arrow-right"></i></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ================= PUBLIC COMMUNITY ================= */}
          {activeMainTab === 'public' && step === 1 && (
            <div className="fade-in">
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: '800', color: '#1f2937' }}>Join Unions & Vehicle Stands</h2>
                <p style={{ margin: 0, color: '#6b7280', fontSize: '15px' }}>Register as a driver, join local unions, add your vehicle, and connect with peers.</p>
              </div>

              {/* Category Selector */}
              <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', overflowX: 'auto', paddingBottom: '8px' }}>
                {[
                  { id: 'ALL', label: 'All Communities', icon: 'fa-globe', color: '#f59e0b' },
                  { id: 'ROAD', label: 'Road', icon: 'fa-car', color: '#3b82f6' },
                  { id: 'SEA', label: 'Sea & Water', icon: 'fa-ship', color: '#0ea5e9' },
                  { id: 'AIR', label: 'Aviation', icon: 'fa-plane', color: '#8b5cf6' },
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
              {activeCategory === 'ALL' && renderGridSection('ALL COMMUNITIES', 'fa-globe', [{ title: 'All', vehicles: ALL_COMMUNITIES }] as any)}
              {activeCategory === 'ROAD' && renderGridSection('ROAD UNIONS', 'fa-car', ROAD_COMMUNITY)}
              {activeCategory === 'SEA' && renderGridSection('MARINE CLUBS', 'fa-ship', SEA_COMMUNITY)}
              {activeCategory === 'AIR' && renderGridSection('AVIATION CLUBS', 'fa-plane', AIR_COMMUNITY)}
              {activeCategory === 'RAIL' && renderGridSection('RAIL UNIONS', 'fa-train', RAIL_COMMUNITY)}
            </div>
          )}

          {activeMainTab === 'public' && step === 2 && (
            <div className="fade-in" style={{ padding: '0 8px' }}>
              <button 
                onClick={() => setStep(1)} 
                style={{ background: 'transparent', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: '15px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 0 24px 0' }}
              >
                <i className="fa-solid fa-arrow-left"></i> Back to Communities
              </button>

              {selectedVehicleObj && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '20px', marginBottom: '32px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: selectedVehicleObj.color + '20', color: selectedVehicleObj.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>
                    <i className={`fa-solid ${selectedVehicleObj.icon}`}></i>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: '#111827' }}>{selectedVehicleObj.name}</h3>
                    <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#6b7280' }}>Selected Community / Union</p>
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '800', color: '#111827' }}>
                    ₹{selectedVehicleObj.price.toLocaleString('en-IN')}<span style={{fontSize: '12px', color: '#6b7280'}}>/yr</span>
                  </div>
                </div>
              )}

              <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '24px' }}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#4b5563', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Your Region / City</label>
                  <input type="text" style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #d1d5db', background: '#f9fafb', color: '#111827', fontSize: '15px' }} placeholder="Enter city for local union" value={pickup} onChange={e => setPickup(e.target.value)} />
                </div>
                
                <div style={{ marginBottom: '32px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#4b5563', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Join Date</label>
                  <input type="date" style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #d1d5db', background: '#f9fafb', color: '#111827', fontSize: '15px' }} value={date} onChange={e => setDate(e.target.value)} />
                </div>

                <button 
                  onClick={handleJoinUnion}
                  style={{ width: '100%', padding: '16px', borderRadius: '12px', background: '#8b5cf6', color: '#ffffff', border: 'none', fontSize: '16px', fontWeight: '700', cursor: 'pointer', transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#7c3aed'}
                  onMouseLeave={e => e.currentTarget.style.background = '#8b5cf6'}
                >
                  Apply to Join
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
