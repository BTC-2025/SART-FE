'use client';

import React, { useState } from 'react';

export default function CommunityModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'private' | 'public'>('private');
  
  // State for Private Community interactions
  const [showAllocateModal, setShowAllocateModal] = useState(false);
  const [showAddVehicleModal, setShowAddVehicleModal] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay open" style={{ display: 'flex', zIndex: 1000, background: 'rgba(0,0,0,0.6)' }} onClick={onClose}>
      <div className="modal-sheet centered-modal" style={{ maxWidth: '1000px', width: '95%', height: '90vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f9fafb', borderRadius: '24px', overflow: 'hidden' }} onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: '#ffffff', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ fontSize: '22px', fontWeight: '800', color: '#111827', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <i className="fa-solid fa-users" style={{ color: '#8b5cf6' }}></i> SART Communities
          </div>
          <button onClick={onClose} style={{ background: '#f3f4f6', border: 'none', width: '36px', height: '36px', borderRadius: '50%', color: '#4b5563', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', borderBottom: '1px solid #e5e7eb', background: '#ffffff', padding: '0 24px' }}>
          <button 
            onClick={() => setActiveTab('private')}
            style={{ 
              padding: '16px 24px', 
              border: 'none', 
              background: 'transparent', 
              fontSize: '16px', 
              fontWeight: '700', 
              color: activeTab === 'private' ? '#8b5cf6' : '#6b7280',
              borderBottom: activeTab === 'private' ? '3px solid #8b5cf6' : '3px solid transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <i className="fa-solid fa-building-user"></i> Private (Fleet Owners)
          </button>
          <button 
            onClick={() => setActiveTab('public')}
            style={{ 
              padding: '16px 24px', 
              border: 'none', 
              background: 'transparent', 
              fontSize: '16px', 
              fontWeight: '700', 
              color: activeTab === 'public' ? '#10b981' : '#6b7280',
              borderBottom: activeTab === 'public' ? '3px solid #10b981' : '3px solid transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <i className="fa-solid fa-people-group"></i> Public (Unions & Stands)
          </button>
        </div>
        
        {/* Main Content Area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          
          {/* ================= PRIVATE COMMUNITY ================= */}
          {activeTab === 'private' && (
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
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
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
          {activeTab === 'public' && (
            <div className="fade-in">
              <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <h2 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: '800', color: '#1f2937' }}>Unions & Vehicle Stands</h2>
                  <p style={{ margin: 0, color: '#6b7280', fontSize: '15px' }}>Register as a driver, join local unions, add your vehicle, and connect with people directly.</p>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button style={{ background: '#ffffff', color: '#1f2937', border: '1px solid #d1d5db', padding: '10px 16px', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <i className="fa-solid fa-id-badge"></i> Register as Driver
                  </button>
                  <button style={{ background: '#10b981', color: '#ffffff', border: 'none', padding: '10px 16px', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <i className="fa-solid fa-handshake-angle"></i> Join a Union
                  </button>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                
                {/* Left Column: Popular Unions/Stands */}
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#374151', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <i className="fa-solid fa-map-location-dot" style={{ color: '#0ea5e9' }}></i> Local Stands & Unions (Chennai Area)
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {[
                      { name: 'Koyambedu Lorry Union', members: 1250, type: 'Heavy Transport', rating: 4.8 },
                      { name: 'T-Nagar Auto Stand', members: 85, type: 'Passenger Transit', rating: 4.5 },
                      { name: 'Chennai Port Container Hub', members: 340, type: 'Logistics / Sea', rating: 4.9 },
                    ].map((union, idx) => (
                      <div key={idx} style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: '#4b5563' }}>
                            <i className="fa-solid fa-users"></i>
                          </div>
                          <div>
                            <div style={{ fontSize: '16px', fontWeight: '700', color: '#111827', marginBottom: '4px' }}>{union.name}</div>
                            <div style={{ fontSize: '13px', color: '#6b7280' }}>{union.type} • {union.members} Members</div>
                          </div>
                        </div>
                        <button style={{ background: '#ecfdf5', color: '#10b981', border: '1px solid #a7f3d0', padding: '6px 16px', borderRadius: '20px', fontWeight: '700', fontSize: '13px', cursor: 'pointer' }}>Connect</button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Driver Networking / Community Feed */}
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#374151', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <i className="fa-solid fa-comments" style={{ color: '#f59e0b' }}></i> Union Notice Board
                  </h3>
                  <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '20px', height: '350px', overflowY: 'auto' }}>
                    <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #f3f4f6' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>M</div>
                          <div style={{ fontSize: '14px', fontWeight: '700', color: '#1f2937' }}>Muthu (Koyambedu Union)</div>
                        </div>
                        <span style={{ fontSize: '12px', color: '#9ca3af' }}>2 hrs ago</span>
                      </div>
                      <p style={{ margin: 0, fontSize: '14px', color: '#4b5563', lineHeight: '1.5' }}>
                        Need 2 backup drivers for Bangalore route tonight. Any free members from our union? Standard union rates apply. Contact me directly!
                      </p>
                      <div style={{ marginTop: '12px', display: 'flex', gap: '16px' }}>
                        <span style={{ fontSize: '13px', color: '#10b981', fontWeight: '600', cursor: 'pointer' }}><i className="fa-solid fa-reply"></i> Reply</span>
                        <span style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '600', cursor: 'pointer' }}><i className="fa-solid fa-phone"></i> Call Now</span>
                      </div>
                    </div>

                    <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #f3f4f6' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#f59e0b', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>A</div>
                          <div style={{ fontSize: '14px', fontWeight: '700', color: '#1f2937' }}>Union President (T-Nagar)</div>
                        </div>
                        <span style={{ fontSize: '12px', color: '#9ca3af' }}>5 hrs ago</span>
                      </div>
                      <p style={{ margin: 0, fontSize: '14px', color: '#4b5563', lineHeight: '1.5' }}>
                        Important update: The local authorities have closed the main road near the station for the next 3 days due to metro work. All auto drivers are requested to use the alternate route via South Usman Road to avoid passenger delays.
                      </p>
                    </div>
                  </div>
                  <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
                    <input type="text" placeholder="Post a message to your union..." style={{ flex: 1, padding: '12px 16px', borderRadius: '24px', border: '1px solid #d1d5db', outline: 'none' }} />
                    <button style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#10b981', color: '#fff', border: 'none', cursor: 'pointer' }}><i className="fa-solid fa-paper-plane"></i></button>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
      
      {/* Simple overlay modals for Allocate/Add Vehicle */}
      {showAllocateModal && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setShowAllocateModal(false)}>
          <div style={{ background: '#fff', padding: '32px', borderRadius: '16px', width: '400px' }} onClick={e => e.stopPropagation()}>
            <h3 style={{ margin: '0 0 16px 0' }}>Allocate Driver</h3>
            <select style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #ccc' }}>
              <option>Select Unassigned Vehicle</option>
              <option>TN-04-KL-5566</option>
            </select>
            <select style={{ width: '100%', padding: '12px', marginBottom: '24px', borderRadius: '8px', border: '1px solid #ccc' }}>
              <option>Select Available Driver</option>
              <option>Mahesh D.</option>
              <option>Abdul K.</option>
            </select>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button onClick={() => setShowAllocateModal(false)} style={{ padding: '10px 16px', background: '#f3f4f6', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Cancel</button>
              <button onClick={() => { alert('Driver Allocated Successfully!'); setShowAllocateModal(false); }} style={{ padding: '10px 16px', background: '#8b5cf6', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Allocate</button>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}
