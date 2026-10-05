import React, { useState } from 'react';
import '../tabs/BookingsTab.css';

const INDIAN_STATIONS = [
  { code: 'SC', name: 'SECUNDERABAD JN' },
  { code: 'NLR', name: 'NELLORE' },
  { code: 'BZA', name: 'VIJAYAWADA JN' },
  { code: 'MAS', name: 'MGR CHENNAI CTL' },
  { code: 'NDLS', name: 'NEW DELHI' },
  { code: 'HWH', name: 'HOWRAH JN' },
  { code: 'CSMT', name: 'CSMT MUMBAI' },
  { code: 'SBC', name: 'KSR BENGALURU' },
  { code: 'CH', name: 'CHANDAUSI JN' },
  { code: 'CHE', name: 'SRIKAKULAM ROAD' },
  { code: 'J', name: 'JALNA' },
  { code: 'JL', name: 'JALGAON JN' },
  { code: 'JBP', name: 'JABALPUR' }
];

export default function TrainBooking({ selectedVehicleType, handleBackToFleet }: { selectedVehicleType: string, handleBackToFleet: () => void }) {
  const [activeSubTab, setActiveSubTab] = useState<'book' | 'upcoming' | 'past'>('book');
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);
  const [routeDate, setRouteDate] = useState('2026-10-05');
  const [showResults, setShowResults] = useState(false);
  
  // Quick dates
  const today = new Date();
  const getFormattedDate = (addDays = 0) => {
    const d = new Date(today);
    d.setDate(d.getDate() + addDays);
    return {
      day: d.getDate(),
      month: d.toLocaleString('en-US', { month: 'short' }),
      weekday: d.toLocaleString('en-US', { weekday: 'short' }),
      full: d.toISOString().split('T')[0],
      label: addDays === 0 ? 'Today' : addDays === 1 ? 'Tomorrow' : d.toLocaleString('en-US', { weekday: 'short' })
    };
  };

  const handleSwap = () => {
    const temp = fromStation;
    setFromStation(toStation);
    setToStation(temp);
  };

  return (
    <div className="bookings-tab-container fleet-selection-container" style={{ minHeight: '80vh', padding: '20px', backgroundColor: '#f0f4f8' }}>
      {/* Top Navigation */}
      <div className="bookings-top-actions" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button 
            onClick={handleBackToFleet}
            style={{ padding: '10px 20px', backgroundColor: 'black', color: 'white', borderRadius: '8px', cursor: 'pointer', border: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <i className="fa-solid fa-arrow-left"></i> Back to Fleet
          </button>
          <h2 style={{ margin: 0, textTransform: 'capitalize', color: '#1e293b' }}>Train Ticket Booking</h2>
        </div>
        
        {/* Sub-tabs for Booking vs History */}
        <div style={{ display: 'flex', backgroundColor: 'white', padding: '4px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <button 
            onClick={() => setActiveSubTab('book')}
            style={{ padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', backgroundColor: activeSubTab === 'book' ? '#0052cc' : 'transparent', color: activeSubTab === 'book' ? 'white' : '#64748b', fontWeight: activeSubTab === 'book' ? 'bold' : 'normal' }}
          >
            Book Ticket
          </button>
          <button 
            onClick={() => setActiveSubTab('upcoming')}
            style={{ padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', backgroundColor: activeSubTab === 'upcoming' ? '#0052cc' : 'transparent', color: activeSubTab === 'upcoming' ? 'white' : '#64748b', fontWeight: activeSubTab === 'upcoming' ? 'bold' : 'normal' }}
          >
            Upcoming
          </button>
          <button 
            onClick={() => setActiveSubTab('past')}
            style={{ padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', backgroundColor: activeSubTab === 'past' ? '#0052cc' : 'transparent', color: activeSubTab === 'past' ? 'white' : '#64748b', fontWeight: activeSubTab === 'past' ? 'bold' : 'normal' }}
          >
            Past Bookings
          </button>
        </div>
      </div>

      {activeSubTab === 'book' && (
        <div className="train-search-widget" style={{ backgroundColor: '#0f3a63', padding: '40px 20px', borderRadius: '16px', position: 'relative', marginTop: '20px' }}>
          
          <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '1100px', margin: '0 auto' }}>
            
            {/* Main Search Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              
              {/* From Station */}
              <div style={{ position: 'relative', flex: '1', minWidth: '200px' }}>
                <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f1f5f9', borderRadius: '8px', padding: '12px 16px' }}>
                  <i className="fa-solid fa-location-arrow" style={{ color: '#0052cc', marginRight: '10px' }}></i>
                  <input 
                    type="text" 
                    placeholder="From Station" 
                    value={fromStation}
                    onChange={(e) => { setFromStation(e.target.value); setShowFromSuggestions(true); }}
                    onFocus={() => setShowFromSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowFromSuggestions(false), 200)}
                    style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '16px', fontWeight: '500' }}
                  />
                </div>
                
                {/* Suggestions Dropdown */}
                {showFromSuggestions && fromStation.length > 0 && (
                  <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', zIndex: 10, marginTop: '4px', maxHeight: '250px', overflowY: 'auto', padding: '8px' }}>
                    <div style={{ fontSize: '12px', color: '#0052cc', fontWeight: 'bold', padding: '4px 8px', marginBottom: '4px' }}>Suggestions</div>
                    {INDIAN_STATIONS.filter(s => s.name.toLowerCase().includes(fromStation.split('(')[0].trim().toLowerCase()) || s.code.toLowerCase().includes(fromStation.split('(')[0].trim().toLowerCase())).map((station, i) => (
                      <div 
                        key={i} 
                        onMouseDown={() => { setFromStation(`${station.name} (${station.code})`); setShowFromSuggestions(false); }}
                        style={{ padding: '10px 8px', cursor: 'pointer', display: 'flex', alignItems: 'center', borderBottom: '1px solid #f1f5f9' }}
                        className="hover-bg-slate"
                      >
                        <span style={{ backgroundColor: '#f1f5f9', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', marginRight: '12px', minWidth: '50px', textAlign: 'center' }}>{station.code}</span>
                        <span style={{ fontSize: '14px', fontWeight: '500' }}>{station.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Swap Button */}
              <button 
                onClick={handleSwap}
                style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#0f3a63', color: 'white', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
              >
                <i className="fa-solid fa-arrow-right-arrow-left"></i>
              </button>

              {/* To Station */}
              <div style={{ position: 'relative', flex: '1', minWidth: '200px' }}>
                <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f1f5f9', borderRadius: '8px', padding: '12px 16px' }}>
                  <i className="fa-solid fa-location-dot" style={{ color: '#0052cc', marginRight: '10px' }}></i>
                  <input 
                    type="text" 
                    placeholder="To Station" 
                    value={toStation}
                    onChange={(e) => { setToStation(e.target.value); setShowToSuggestions(true); }}
                    onFocus={() => setShowToSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowToSuggestions(false), 200)}
                    style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '16px', fontWeight: '500' }}
                  />
                </div>
                {/* Suggestions Dropdown */}
                {showToSuggestions && toStation.length > 0 && (
                  <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', zIndex: 10, marginTop: '4px', maxHeight: '250px', overflowY: 'auto', padding: '8px' }}>
                    <div style={{ fontSize: '12px', color: '#0052cc', fontWeight: 'bold', padding: '4px 8px', marginBottom: '4px' }}>Suggestions</div>
                    {INDIAN_STATIONS.filter(s => s.name.toLowerCase().includes(toStation.split('(')[0].trim().toLowerCase()) || s.code.toLowerCase().includes(toStation.split('(')[0].trim().toLowerCase())).map((station, i) => (
                      <div 
                        key={i} 
                        onMouseDown={() => { setToStation(`${station.name} (${station.code})`); setShowToSuggestions(false); }}
                        style={{ padding: '10px 8px', cursor: 'pointer', display: 'flex', alignItems: 'center', borderBottom: '1px solid #f1f5f9' }}
                        className="hover-bg-slate"
                      >
                        <span style={{ backgroundColor: '#f1f5f9', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', marginRight: '12px', minWidth: '50px', textAlign: 'center' }}>{station.code}</span>
                        <span style={{ fontSize: '14px', fontWeight: '500' }}>{station.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Date Input */}
              <div style={{ display: 'flex', alignItems: 'center', padding: '8px 16px', flex: '0.8', minWidth: '150px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 'bold' }}>Date</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input 
                      type="date" 
                      value={routeDate}
                      onChange={(e) => setRouteDate(e.target.value)}
                      style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '16px', fontWeight: 'bold', color: '#0f3a63', cursor: 'pointer', width: '100%' }}
                    />
                  </div>
                </div>
              </div>

              {/* Quick Dates */}
              <div style={{ display: 'flex', gap: '8px' }}>
                {[0, 1].map(days => {
                  const d = getFormattedDate(days);
                  return (
                    <div 
                      key={days} 
                      onClick={() => setRouteDate(d.full)}
                      style={{ border: '1px solid #cbd5e1', borderRadius: '8px', padding: '6px 12px', textAlign: 'center', cursor: 'pointer', backgroundColor: routeDate === d.full ? '#0052cc' : 'white', color: routeDate === d.full ? 'white' : '#0f3a63' }}
                    >
                      <div style={{ fontSize: '13px', fontWeight: 'bold' }}>{d.label}</div>
                      <div style={{ fontSize: '11px', color: routeDate === d.full ? '#e2e8f0' : '#64748b' }}>{d.day} {d.month}</div>
                    </div>
                  );
                })}
              </div>

              {/* Search Button */}
              <button onClick={() => setShowResults(true)} style={{ backgroundColor: '#0052cc', color: 'white', padding: '16px 32px', borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginLeft: 'auto' }}>
                SEARCH TRAINS
              </button>
            </div>

            {/* Filters Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px', backgroundColor: '#f8fafc', borderRadius: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#334155' }}>Quick Filters:</span>
              
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
                <input type="checkbox" /> AC Only
              </label>
              
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
                <input type="checkbox" /> Available Seats
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
                <input type="checkbox" /> Morning Departure (06:00 - 12:00)
              </label>
              
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
                <input type="checkbox" /> Ladies Quota
              </label>

              <div style={{ marginLeft: 'auto', display: 'flex', gap: '12px' }}>
                <select style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', outline: 'none', backgroundColor: 'white', fontSize: '14px' }}>
                  <option>All Classes</option>
                  <option>1A (First AC)</option>
                  <option>2A (Second AC)</option>
                  <option>3A (Third AC)</option>
                  <option>SL (Sleeper)</option>
                </select>
                
                <select style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', outline: 'none', backgroundColor: 'white', fontSize: '14px' }}>
                  <option>General</option>
                  <option>Tatkal</option>
                  <option>Ladies</option>
                  <option>Senior Citizen</option>
                </select>
              </div>
            </div>

          </div>
          
          {/* TRAIN SEARCH RESULTS */}
          {showResults && (
            <div style={{ maxWidth: '1100px', margin: '24px auto 0' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', backgroundColor: 'white', padding: '16px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                <button onClick={() => setShowResults(false)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#0f172a' }}>
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <div>
                  <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>{fromStation || 'SECUNDERABAD JN (SC)'} To {toStation || 'NELLORE (NLR)'}</h2>
                  <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>{new Date(routeDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', weekday: 'long' })}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                 <button style={{ flex: 1, padding: '12px', background: 'white', border: '2px solid #0ea5e9', borderRadius: '8px', color: '#0f172a', fontWeight: 'bold', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                   <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fa-solid fa-train"></i> Trains <span style={{ background: '#c084fc', color: 'white', fontSize: '10px', padding: '2px 6px', borderRadius: '12px' }}>Upto ₹40 off</span></span>
                   <span style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>₹330 • 8h 13m</span>
                 </button>
                 <button style={{ flex: 1, padding: '12px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', color: '#64748b', fontWeight: 'bold', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                   <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fa-solid fa-bus"></i> Buses</span>
                   <span style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>₹370 • ~9h 17m</span>
                 </button>
              </div>

              {[
                { 
                  name: fromStation.toLowerCase().includes('secunderabad') && toStation.toLowerCase().includes('nellore') ? 'Narayanadri Sf' : `${fromStation ? fromStation.split(' ')[0] : 'Sart'} Superfast`,
                  num: fromStation.toLowerCase().includes('secunderabad') && toStation.toLowerCase().includes('nellore') ? '12734' : Math.floor(Math.random() * 90000 + 10000).toString(),
                  dep: '6:10 PM', arr: '2:48 AM', dur: '08h 38m',
                  c1: '2A', c1P: '1,710', c1S: 'Available 2', c1C: '#0ea5e9', c1Q: 'TATKAL',
                  c2: 'SL', c2P: '460', c2S: 'TQWL 52', c2C: '#f59e0b', c2Q: 'TATKAL'
                },
                { 
                  name: fromStation.toLowerCase().includes('secunderabad') && toStation.toLowerCase().includes('nellore') ? 'Charminar Sf Exp' : `${toStation ? toStation.split(' ')[0] : 'Express'} Mail`,
                  num: fromStation.toLowerCase().includes('secunderabad') && toStation.toLowerCase().includes('nellore') ? '12760' : Math.floor(Math.random() * 90000 + 10000).toString(),
                  dep: '6:25 PM', arr: '3:33 AM', dur: '09h 08m',
                  c1: 'SL', c1P: '495', c1S: 'TQWL 37', c1C: '#f59e0b', c1Q: 'TATKAL',
                  c2: 'SL', c2P: '395', c2S: 'PQWL 23', c2C: '#f59e0b', c2Q: ''
                }
              ].map((train, idx) => (
                <div key={idx} className="train-result-card" style={{ background: 'white', padding: '16px', borderRadius: '12px', marginBottom: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>{train.name} <span style={{ color: '#94a3b8', fontWeight: 'normal' }}>(#{train.num})</span></h3>
                    <div style={{ fontSize: '12px', letterSpacing: '2px', color: '#0f172a', fontWeight: 'bold' }}>M T W T F S S</div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '16px' }}>{train.dep}</h4>
                      <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>{fromStation || 'SECUNDERABAD JN (SC)'}</p>
                    </div>
                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>{train.dur}</div>
                    <div style={{ textAlign: 'right' }}>
                      <h4 style={{ margin: 0, fontSize: '16px' }}>{train.arr}</h4>
                      <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>{toStation || 'NELLORE (NLR)'}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '8px' }}>
                    <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px', minWidth: '140px' }}>
                       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                         <strong style={{ fontSize: '14px' }}>{train.c1} {train.c1Q && <span style={{ background: '#fbbf24', color: 'white', fontSize: '10px', padding: '2px 6px', borderRadius: '4px' }}>{train.c1Q}</span>}</strong>
                         <strong style={{ fontSize: '14px' }}>₹ {train.c1P}</strong>
                       </div>
                       <p style={{ margin: 0, color: train.c1C, fontSize: '14px', fontWeight: 'bold' }}>{train.c1S}</p>
                       <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#64748b' }}>Free Cancellation<br/>Updated recently</p>
                    </div>
                    <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px', minWidth: '140px' }}>
                       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                         <strong style={{ fontSize: '14px' }}>{train.c2} {train.c2Q && <span style={{ background: '#fbbf24', color: 'white', fontSize: '10px', padding: '2px 6px', borderRadius: '4px' }}>{train.c2Q}</span>}</strong>
                         <strong style={{ fontSize: '14px' }}>₹ {train.c2P}</strong>
                       </div>
                       <p style={{ margin: 0, color: train.c2C, fontSize: '14px', fontWeight: 'bold' }}>{train.c2S}</p>
                       <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#64748b' }}>Free Cancellation<br/>Updated recently</p>
                    </div>
                  </div>
                </div>
              ))}

              <div style={{ backgroundColor: '#e0f2fe', borderRadius: '8px', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <input type="checkbox" style={{ transform: 'scale(1.2)' }} />
                  <div>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '15px' }}>Get full fare refund on cancellation</h4>
                    <p style={{ margin: 0, fontSize: '13px', color: '#475569' }}>Zero cancellation fee on all bookings</p>
                  </div>
                </div>
                <i className="fa-solid fa-shield-halved" style={{ fontSize: '24px', color: '#0284c7' }}></i>
              </div>

            </div>
          )}

        </div>
      )}

      {activeSubTab === 'upcoming' && (
        <div style={{ padding: '40px', textAlign: 'center', backgroundColor: 'white', borderRadius: '12px', marginTop: '20px' }}>
          <img src="https://cdn-icons-png.flaticon.com/512/747/747116.png" alt="No bookings" width="100" style={{ opacity: 0.5, marginBottom: '20px' }} />
          <h3>No Upcoming Train Journeys</h3>
          <p style={{ color: '#64748b' }}>Looks like you haven't booked any trains yet. Switch to the Book Ticket tab to plan a trip!</p>
        </div>
      )}

      {activeSubTab === 'past' && (
        <div style={{ padding: '40px', textAlign: 'center', backgroundColor: 'white', borderRadius: '12px', marginTop: '20px' }}>
          <img src="https://cdn-icons-png.flaticon.com/512/2884/2884323.png" alt="No past bookings" width="100" style={{ opacity: 0.5, marginBottom: '20px' }} />
          <h3>No Past Train Bookings</h3>
          <p style={{ color: '#64748b' }}>Your completed journeys will appear here.</p>
        </div>
      )}

      <style>{`
        .hover-bg-slate:hover {
          background-color: #e2e8f0 !important;
        }
      `}</style>
    </div>
  );
}
