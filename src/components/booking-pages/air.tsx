import React, { useState, useEffect } from 'react';
import '../tabs/BookingsTab.css';

const AIRPORTS = [
  { code: 'DEL', name: 'Indira Gandhi International Airport (New Delhi)' },
  { code: 'BOM', name: 'Chhatrapati Shivaji Maharaj International Airport (Mumbai)' },
  { code: 'BLR', name: 'Kempegowda International Airport (Bengaluru)' },
  { code: 'HYD', name: 'Rajiv Gandhi International Airport (Hyderabad)' },
  { code: 'MAA', name: 'Chennai International Airport (Chennai)' },
  { code: 'CCU', name: 'Netaji Subhas Chandra Bose International Airport (Kolkata)' },
  { code: 'AMD', name: 'Sardar Vallabhbhai Patel International Airport (Ahmedabad)' },
  { code: 'PNQ', name: 'Pune International Airport (Pune)' },
  { code: 'GOI', name: 'Dabolim Airport (Goa)' },
  { code: 'COK', name: 'Cochin International Airport (Kochi)' },
  { code: 'JAI', name: 'Jaipur International Airport (Jaipur)' },
  { code: 'LKO', name: 'Chaudhary Charan Singh International Airport (Lucknow)' },
  { code: 'ATQ', name: 'Sri Guru Ram Dass Jee International Airport (Amritsar)' },
  { code: 'TRV', name: 'Trivandrum International Airport (Thiruvananthapuram)' },
  { code: 'VTZ', name: 'Visakhapatnam International Airport (Visakhapatnam)' }
];

export default function AirBooking({ selectedVehicleType, handleBackToFleet }: { selectedVehicleType: string, handleBackToFleet: () => void }) {
  const [activeSubTab, setActiveSubTab] = useState<'book' | 'upcoming' | 'past'>('book');
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`sart_air_activeTab_${selectedVehicleType}`);
      if (saved) setActiveSubTab(saved as any);
    }
  }, [selectedVehicleType]);

  useEffect(() => {
    localStorage.setItem(`sart_air_activeTab_${selectedVehicleType}`, activeSubTab);
  }, [activeSubTab, selectedVehicleType]);
  
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [showOriginSuggestions, setShowOriginSuggestions] = useState(false);
  const [showDestSuggestions, setShowDestSuggestions] = useState(false);

  // New states for flow
  const [searchStep, setSearchStep] = useState(0); // 0 = Search form, 1 = Search results, 2 = Passenger details
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  
  const [selectedFlight, setSelectedFlight] = useState<any>(null);
  const [activeBooking, setActiveBooking] = useState<any>(null);
  const [showTicketModal, setShowTicketModal] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`sart_bookings_air_${selectedVehicleType}`);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setActiveBooking(data.activeBooking || null);
      } catch (e) {}
    }
  }, [selectedVehicleType]);

  const handleSwap = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  const handleSearch = () => {
    if (!origin || !destination) {
      alert("Please enter origin and destination.");
      return;
    }
    setSearchStep(1);
  };

  const handleSelectFlight = (flight: any) => {
    setSelectedFlight(flight);
    setSearchStep(2);
  };

  const handlePayment = () => {
    if (!firstName || !lastName || !mobile) {
      alert("Please fill in passenger details.");
      return;
    }
    const newBooking = {
      id: `BK${Math.floor(Math.random() * 100000000)}`,
      pnr: `PNR${Math.floor(Math.random() * 10000000)}`,
      type: selectedVehicleType,
      from: origin,
      to: destination,
      passenger: `${firstName} ${lastName}`,
      mobile,
      email,
      flightNum: selectedFlight.num,
      flightName: selectedFlight.name,
      dep: selectedFlight.dep,
      arr: selectedFlight.arr,
      date: new Date().toLocaleString(),
    };
    
    setActiveBooking(newBooking);
    localStorage.setItem(`sart_bookings_air_${selectedVehicleType}`, JSON.stringify({ activeBooking: newBooking }));
    
    // Save to global storage for PNR tracking
    const globalBookingsStr = localStorage.getItem('sart_global_bookings');
    let globalBookings = globalBookingsStr ? JSON.parse(globalBookingsStr) : [];
    globalBookings.push({
      pnr: newBooking.pnr,
      bookingId: newBooking.id,
      title: `${selectedVehicleType.toUpperCase()} BOOKING`,
      number: newBooking.flightNum,
      source: origin.split('(')[0].trim(),
      destination: destination.split('(')[0].trim(),
      statusText: 'CONFIRMED',
      sourceTime: selectedFlight.dep,
      sourceDate: new Date().toLocaleDateString(),
      destinationTime: selectedFlight.arr,
      destinationDate: new Date().toLocaleDateString(),
      stops: []
    });
    localStorage.setItem('sart_global_bookings', JSON.stringify(globalBookings));

    setSearchStep(0);
    setActiveSubTab('upcoming');
  };

  const cancelRide = () => {
    setActiveBooking(null);
    localStorage.setItem(`sart_bookings_air_${selectedVehicleType}`, JSON.stringify({ activeBooking: null }));
    setActiveSubTab('past');
  };

  // Dummy search results
  const flightResults = [
    { name: selectedVehicleType === 'helicopter' ? 'Pawan Hans' : 'IndiGo', num: selectedVehicleType === 'helicopter' ? 'PH-102' : '6E-4521', dep: '08:00', arr: '09:45', dur: '1h 45m', price: '4,500' },
    { name: selectedVehicleType === 'helicopter' ? 'Blade India' : 'Air India', num: selectedVehicleType === 'helicopter' ? 'BL-909' : 'AI-808', dep: '13:00', arr: '14:30', dur: '1h 30m', price: '5,200' },
  ];

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
          <h2 style={{ margin: 0, textTransform: 'capitalize', color: '#1e293b' }}>{selectedVehicleType === 'flight' ? 'Flight' : 'Helicopter'} Booking</h2>
        </div>
        
        {/* Sub-tabs for Booking vs History */}
        <div style={{ display: 'flex', backgroundColor: 'white', padding: '4px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <button 
            onClick={() => { setActiveSubTab('book'); setSearchStep(0); }}
            style={{ padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', backgroundColor: activeSubTab === 'book' ? '#0052cc' : 'transparent', color: activeSubTab === 'book' ? 'white' : '#64748b', fontWeight: activeSubTab === 'book' ? 'bold' : 'normal' }}
          >
            Book {selectedVehicleType === 'flight' ? 'Flight' : 'Helicopter'}
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
        <div style={{ maxWidth: '1000px', margin: '30px auto' }}>
          
          {searchStep === 0 && (
            <div className="flight-search-widget">
              <div style={{ backgroundColor: '#0088ce', padding: '15px 25px', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>
                <h3 style={{ color: 'white', margin: 0, fontSize: '18px', fontWeight: '400' }}>Search for {selectedVehicleType}s by origin and destination</h3>
              </div>

              <div style={{ backgroundColor: '#f1f5f9', padding: '20px 25px', display: 'flex', alignItems: 'center', gap: '15px', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                {/* Origin Input */}
                <div style={{ flex: '1', position: 'relative' }}>
                  <label style={{ display: 'block', fontSize: '11px', color: '#64748b', fontWeight: 'bold', marginBottom: '6px', textTransform: 'uppercase' }}>Origin</label>
                  <input 
                    type="text"
                    placeholder="Enter origin"
                    value={origin}
                    onChange={(e) => { setOrigin(e.target.value); setShowOriginSuggestions(true); }}
                    onFocus={() => setShowOriginSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowOriginSuggestions(false), 200)}
                    style={{ width: '100%', padding: '12px 16px', fontSize: '15px', border: '1px solid #cbd5e1', borderRadius: '4px', outline: 'none' }}
                  />
                  {showOriginSuggestions && origin.trim().length > 0 && (
                    <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: 'white', border: '1px solid #cbd5e1', borderTop: 'none', zIndex: 10, maxHeight: '200px', overflowY: 'auto', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                      {AIRPORTS.filter(a => a.name.toLowerCase().includes(origin.toLowerCase()) || a.code.toLowerCase().includes(origin.toLowerCase())).map((airport, idx) => (
                        <div key={idx} onMouseDown={() => { setOrigin(airport.name); setShowOriginSuggestions(false); }} style={{ padding: '10px 16px', cursor: 'pointer', fontSize: '14px', borderBottom: '1px solid #f1f5f9' }} className="flight-suggestion-item">
                          {airport.name} - <strong>{airport.code}</strong>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Swap Button */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%', paddingTop: '20px' }}>
                  <button onClick={handleSwap} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#64748b', padding: '10px' }}>
                    <i className="fa-solid fa-right-left"></i>
                  </button>
                </div>

                {/* Destination Input */}
                <div style={{ flex: '1', position: 'relative' }}>
                  <label style={{ display: 'block', fontSize: '11px', color: '#64748b', fontWeight: 'bold', marginBottom: '6px', textTransform: 'uppercase' }}>Destination</label>
                  <input 
                    type="text"
                    placeholder="Enter destination"
                    value={destination}
                    onChange={(e) => { setDestination(e.target.value); setShowDestSuggestions(true); }}
                    onFocus={() => setShowDestSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowDestSuggestions(false), 200)}
                    style={{ width: '100%', padding: '12px 16px', fontSize: '15px', border: '1px solid #cbd5e1', borderRadius: '4px', outline: 'none' }}
                  />
                  {showDestSuggestions && destination.trim().length > 0 && (
                    <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: 'white', border: '1px solid #cbd5e1', borderTop: 'none', zIndex: 10, maxHeight: '200px', overflowY: 'auto', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                      {AIRPORTS.filter(a => a.name.toLowerCase().includes(destination.toLowerCase()) || a.code.toLowerCase().includes(destination.toLowerCase())).map((airport, idx) => (
                        <div key={idx} onMouseDown={() => { setDestination(airport.name); setShowDestSuggestions(false); }} style={{ padding: '10px 16px', cursor: 'pointer', fontSize: '14px', borderBottom: '1px solid #f1f5f9' }} className="flight-suggestion-item">
                          {airport.name} - <strong>{airport.code}</strong>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Search Button */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%', paddingTop: '20px' }}>
                  <button onClick={handleSearch} style={{ backgroundColor: '#d97706', color: 'white', border: 'none', padding: '12px 18px', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>
            </div>
          )}

          {searchStep === 1 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <button onClick={() => setSearchStep(0)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#64748b' }}><i className="fa-solid fa-arrow-left"></i></button>
                <h3 style={{ fontSize: '20px', margin: 0, color: '#0f172a' }}>Available {selectedVehicleType}s: {origin.split('(')[0]} to {destination.split('(')[0]}</h3>
              </div>
              
              {flightResults.map((flight, idx) => (
                <div key={idx} style={{ background: 'white', padding: '24px', borderRadius: '12px', marginBottom: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '25%' }}>
                        <div style={{ color: '#0052cc', fontSize: '24px' }}>
                          <i className={`fa-solid ${selectedVehicleType === 'helicopter' ? 'fa-helicopter' : 'fa-plane'}`}></i>
                        </div>
                        <div>
                          <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#1e293b' }}>{flight.name}</h3>
                          <span style={{ fontSize: '13px', color: '#64748b' }}>{flight.num}</span>
                        </div>
                     </div>

                     <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, justifyContent: 'center' }}>
                        <h2 style={{ margin: 0, fontSize: '24px', color: '#0f172a', fontWeight: 'normal' }}>{flight.dep}</h2>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', flex: 1, maxWidth: '150px' }}>
                           <div style={{ height: '1px', borderBottom: '2px dashed #cbd5e1', flex: 1 }}></div>
                           <i className={`fa-solid ${selectedVehicleType === 'helicopter' ? 'fa-helicopter' : 'fa-plane'}`} style={{ color: '#94a3b8', fontSize: '14px' }}></i>
                           <div style={{ height: '1px', borderBottom: '2px dashed #cbd5e1', flex: 1 }}></div>
                        </div>
                        <h2 style={{ margin: 0, fontSize: '24px', color: '#0f172a', fontWeight: 'normal' }}>{flight.arr}</h2>
                     </div>

                     <div style={{ width: '25%', textAlign: 'right' }}>
                        <div style={{ color: '#10b981', fontSize: '20px', fontWeight: 'bold' }}>₹{flight.price} <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 'normal' }}>/pax</span></div>
                        <button onClick={() => handleSelectFlight(flight)} style={{ marginTop: '8px', backgroundColor: '#eff6ff', color: '#0052cc', border: 'none', padding: '8px 24px', borderRadius: '6px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer' }}>
                          Book Now
                        </button>
                     </div>
                   </div>
                   
                   <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                      <span style={{ fontSize: '12px', color: '#94a3b8' }}>Facilities:</span>
                      <div style={{ display: 'flex', gap: '20px', fontSize: '12px', color: '#64748b', fontWeight: '500' }}>
                        <span><i className="fa-solid fa-suitcase-rolling" style={{ marginRight: '6px' }}></i> Baggage 15kg</span>
                        <span><i className="fa-solid fa-utensils" style={{ marginRight: '6px' }}></i> In-Flight Meals</span>
                        <span><i className="fa-solid fa-wifi" style={{ marginRight: '6px' }}></i> WiFi</span>
                      </div>
                   </div>
                </div>
              ))}
            </div>
          )}

          {searchStep === 2 && (
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ flex: '1', backgroundColor: 'white', borderRadius: '16px', padding: '30px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                  <button onClick={() => setSearchStep(1)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#64748b' }}><i className="fa-solid fa-arrow-left"></i></button>
                  <h3 style={{ fontSize: '20px', margin: 0, color: '#0f172a' }}>Passenger Details</h3>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ flex: 1 }}>
                      <label style={{ display: 'block', fontSize: '13px', color: '#64748b', fontWeight: 'bold', marginBottom: '8px' }}>First Name</label>
                      <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '15px', outline: 'none' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label style={{ display: 'block', fontSize: '13px', color: '#64748b', fontWeight: 'bold', marginBottom: '8px' }}>Last Name</label>
                      <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '15px', outline: 'none' }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: '#64748b', fontWeight: 'bold', marginBottom: '8px' }}>Mobile Number</label>
                    <input type="tel" value={mobile} onChange={e => setMobile(e.target.value)} placeholder="+91 9876543210" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '15px', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: '#64748b', fontWeight: 'bold', marginBottom: '8px' }}>Email Address</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="name@example.com" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '15px', outline: 'none' }} />
                  </div>
                </div>

                <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                  <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#334155' }}>Ride Summary</h4>
                  <div style={{ fontSize: '13px', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div><strong>From:</strong> {origin.split('(')[0]}</div>
                    <div><strong>To:</strong> {destination.split('(')[0]}</div>
                    <div><strong>Vehicle:</strong> <span style={{textTransform:'capitalize'}}>{selectedVehicleType}</span> ({selectedFlight?.name})</div>
                  </div>
                </div>

                <button onClick={handlePayment} style={{ width: '100%', marginTop: '32px', backgroundColor: '#10b981', color: 'white', padding: '16px', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-credit-card"></i> Payment Options & Confirm
                </button>
              </div>
              
              <div style={{ flex: '0.8' }}>
                <img src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=500&q=80" alt="Travel" style={{ width: '100%', borderRadius: '16px', objectFit: 'cover', height: '100%' }} />
              </div>
            </div>
          )}

        </div>
      )}

      {activeSubTab === 'upcoming' && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
          {activeBooking ? (
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', maxWidth: '1000px', width: '100%' }}>
              <div style={{ flex: 1, background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                {/* Ticket Header */}
                <div style={{ background: '#0f172a', color: 'white', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className={`fa-solid ${activeBooking.type.toLowerCase() === 'helicopter' ? 'fa-helicopter' : 'fa-plane'}`} style={{ fontSize: '18px' }}></i>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>Booking ID</div>
                      <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{activeBooking.id}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>{activeBooking.date}</div>
                    <div style={{ display: 'inline-block', marginTop: '4px', background: '#22c55e', color: 'white', fontSize: '11px', fontWeight: 'bold', padding: '2px 8px', borderRadius: '12px' }}>Confirmed</div>
                  </div>
                </div>

                {/* Ticket Body */}
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', position: 'relative' }}>
                    <div style={{ flex: 1, zIndex: 1 }}>
                      <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase' }}>Origin</div>
                      <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#0f172a', marginTop: '4px' }}>{activeBooking.from.split('(')[0]}</div>
                      <div style={{ fontSize: '14px', color: '#0052cc', fontWeight: 'bold', marginTop: '8px' }}>{activeBooking.dep}</div>
                    </div>
                    
                    <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }}>
                      <i className="fa-solid fa-arrow-right-long" style={{ color: '#cbd5e1', fontSize: '20px' }}></i>
                    </div>

                    <div style={{ flex: 1, textAlign: 'right', zIndex: 1 }}>
                      <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase' }}>Destination</div>
                      <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#0f172a', marginTop: '4px' }}>{activeBooking.to.split('(')[0]}</div>
                      <div style={{ fontSize: '14px', color: '#0052cc', fontWeight: 'bold', marginTop: '8px' }}>{activeBooking.arr}</div>
                    </div>
                    
                    {/* Background Graphic */}
                    <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', opacity: 0.03, fontSize: '100px', zIndex: 0 }}>
                      <i className={`fa-solid ${activeBooking.type.toLowerCase() === 'helicopter' ? 'fa-helicopter' : 'fa-plane'}`}></i>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px dashed #cbd5e1', borderBottom: '1px dashed #cbd5e1', padding: '16px 0', margin: '20px 0', display: 'flex', gap: '20px' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>Passenger</div>
                      <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0f172a', marginTop: '2px' }}>{activeBooking.passenger}</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>Contact</div>
                      <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0f172a', marginTop: '2px' }}>{activeBooking.mobile}</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>Flight</div>
                      <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0f172a', marginTop: '2px' }}>{activeBooking.flightNum}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                    <button onClick={() => setShowTicketModal(true)} style={{ flex: 1, background: '#eff6ff', color: '#0052cc', border: 'none', padding: '14px', borderRadius: '8px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.2s' }}>
                      <i className="fa-solid fa-ticket"></i> View Ticket
                    </button>
                    <button onClick={cancelRide} style={{ flex: 1, background: '#ef4444', color: 'white', border: 'none', padding: '14px', borderRadius: '8px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.2s' }}>
                      Cancel Ride
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Right Side Video Banner */}
              <div style={{ width: '250px', backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '100%', height: '220px', position: 'relative' }}>
                  <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80" alt="Exclusive Offers" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: '2px solid white' }}>
                    <i className="fa-solid fa-play" style={{ color: 'white', fontSize: '20px', marginLeft: '4px' }}></i>
                  </div>
                </div>
                <div style={{ padding: '16px', textAlign: 'center', background: '#0f172a', color: 'white', flex: 1 }}>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: '15px' }}>Exclusive Upgrades</h4>
                  <p style={{ margin: 0, fontSize: '12px', color: '#94a3b8' }}>Watch our latest video to uncover massive savings on upgrades!</p>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ padding: '40px', textAlign: 'center', backgroundColor: 'white', borderRadius: '12px', marginTop: '20px', width: '100%', maxWidth: '600px' }}>
              <img src="https://cdn-icons-png.flaticon.com/512/747/747116.png" alt="No bookings" width="100" style={{ opacity: 0.5, marginBottom: '20px' }} />
              <h3>No Upcoming Flights</h3>
              <p style={{ color: '#64748b' }}>Looks like you haven't booked any flights yet.</p>
            </div>
          )}
        </div>
      )}

      {activeSubTab === 'past' && (
        <div style={{ padding: '40px', textAlign: 'center', backgroundColor: 'white', borderRadius: '12px', marginTop: '20px' }}>
          <img src="https://cdn-icons-png.flaticon.com/512/2884/2884323.png" alt="No past bookings" width="100" style={{ opacity: 0.5, marginBottom: '20px' }} />
          <h3>No Past Flight Bookings</h3>
          <p style={{ color: '#64748b' }}>Your completed flights will appear here.</p>
        </div>
      )}

      {/* Realistic Boarding Pass Modal */}
      {showTicketModal && activeBooking && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.8)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={() => setShowTicketModal(false)} style={{ background: 'white', border: 'none', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0f172a' }}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/* Boarding Pass Container */}
            <div style={{ display: 'flex', background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', position: 'relative' }}>
              
              {/* Left Main Ticket */}
              <div style={{ flex: '2', borderRight: '2px dashed #cbd5e1', position: 'relative', background: '#f8fafc' }}>
                {/* Header */}
                <div style={{ background: '#0052cc', color: 'white', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <i className="fa-solid fa-plane-departure" style={{ fontSize: '24px' }}></i>
                    <h2 style={{ margin: 0, fontSize: '20px', letterSpacing: '1px' }}>SART AIRLINES</h2>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ height: '4px', width: '4px', background: 'white', borderRadius: '50%' }}></div>
                    <div style={{ height: '4px', width: '4px', background: 'white', borderRadius: '50%' }}></div>
                    <div style={{ height: '4px', width: '4px', background: 'white', borderRadius: '50%' }}></div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase' }}>Passenger Name</div>
                      <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#0f172a', textTransform: 'uppercase' }}>{activeBooking.passenger}</div>
                      <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>{activeBooking.mobile}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase' }}>Flight</div>
                      <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#0052cc' }}>{activeBooking.flightNum}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase' }}>From</div>
                      <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0f172a' }}>{activeBooking.from.split('(')[1]?.replace(')','') || 'ORG'}</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>{activeBooking.from.split('(')[0]}</div>
                    </div>

                    <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                      <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0052cc' }}>{activeBooking.dep}</div>
                      <i className="fa-solid fa-plane" style={{ color: '#94a3b8', fontSize: '20px' }}></i>
                    </div>

                    <div style={{ flex: 1, textAlign: 'right' }}>
                      <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase' }}>To</div>
                      <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0f172a' }}>{activeBooking.to.split('(')[1]?.replace(')','') || 'DST'}</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>{activeBooking.to.split('(')[0]}</div>
                    </div>
                  </div>

                  {/* Info Blocks */}
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ background: '#0052cc', color: 'white', padding: '12px', borderRadius: '8px', flex: 1, textAlign: 'center' }}>
                      <div style={{ fontSize: '11px', opacity: 0.8, textTransform: 'uppercase' }}>Date</div>
                      <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{activeBooking.date.split(',')[0]}</div>
                    </div>
                    <div style={{ background: '#0052cc', color: 'white', padding: '12px', borderRadius: '8px', flex: 1, textAlign: 'center' }}>
                      <div style={{ fontSize: '11px', opacity: 0.8, textTransform: 'uppercase' }}>Gate</div>
                      <div style={{ fontSize: '16px', fontWeight: 'bold' }}>D4</div>
                    </div>
                    <div style={{ background: '#0052cc', color: 'white', padding: '12px', borderRadius: '8px', flex: 1, textAlign: 'center' }}>
                      <div style={{ fontSize: '11px', opacity: 0.8, textTransform: 'uppercase' }}>Seat</div>
                      <div style={{ fontSize: '16px', fontWeight: 'bold' }}>31B</div>
                    </div>
                  </div>
                </div>
                
                {/* Cutout circles on the dashed line */}
                <div style={{ position: 'absolute', top: '-12px', right: '-12px', width: '24px', height: '24px', background: 'rgba(15, 23, 42, 0.8)', borderRadius: '50%' }}></div>
                <div style={{ position: 'absolute', bottom: '-12px', right: '-12px', width: '24px', height: '24px', background: 'rgba(15, 23, 42, 0.8)', borderRadius: '50%' }}></div>
              </div>

              {/* Right Stub */}
              <div style={{ flex: '1', background: 'white', display: 'flex', flexDirection: 'column' }}>
                <div style={{ background: '#0052cc', color: 'white', padding: '16px', textAlign: 'center' }}>
                  <h3 style={{ margin: 0, fontSize: '16px', letterSpacing: '2px' }}>BOARDING PASS</h3>
                </div>
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase' }}>Passenger</div>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0f172a' }}>{activeBooking.passenger}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase' }}>Flight</div>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0052cc' }}>{activeBooking.flightNum}</div>
                  </div>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase' }}>Gate</div>
                      <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0f172a' }}>D4</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase' }}>Seat</div>
                      <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0f172a' }}>31B</div>
                    </div>
                  </div>
                  
                  {/* Barcode Mock */}
                  <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '100%', height: '40px', background: 'repeating-linear-gradient(90deg, #0f172a, #0f172a 2px, transparent 2px, transparent 4px, #0f172a 4px, #0f172a 5px, transparent 5px, transparent 8px)' }}></div>
                    <div style={{ fontSize: '10px', letterSpacing: '4px', color: '#64748b' }}>{activeBooking.pnr}</div>
                  </div>
                </div>
              </div>
            </div>

            <button style={{ alignSelf: 'center', marginTop: '16px', background: '#22c55e', color: 'white', border: 'none', padding: '12px 32px', borderRadius: '30px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 10px rgba(34, 197, 94, 0.3)' }}>
              <i className="fa-solid fa-file-pdf"></i> Download Ticket PDF
            </button>
            
          </div>
        </div>
      )}

      <style>{`
        .flight-suggestion-item:hover {
          background-color: #f8fafc !important;
          color: #0052cc;
        }
      `}</style>
    </div>
  );
}
