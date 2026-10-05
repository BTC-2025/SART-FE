import React, { useState, useEffect } from 'react';
import '../tabs/BookingsTab.css';

export default function RoadBooking({ selectedVehicleType, handleBackToFleet }: { selectedVehicleType: string, handleBackToFleet: () => void }) {
  const [activeSubTab, setActiveSubTab] = useState<'book' | 'upcoming' | 'past' | 'cancelled'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`sart_road_activeTab_${selectedVehicleType}`);
      return (saved as any) || 'book';
    }
    return 'book';
  });

  useEffect(() => {
    localStorage.setItem(`sart_road_activeTab_${selectedVehicleType}`, activeSubTab);
  }, [activeSubTab, selectedVehicleType]);

  const [bookingStep, setBookingStep] = useState(0); // 0 = route, 1 = details
  const [pickup, setPickup] = useState('Bengaluru, Karnataka');
  const [dropoff, setDropoff] = useState('Visakhapatnam, Andhra Pradesh');
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  
  // Passenger Details
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  // Bookings state
  const [activeBooking, setActiveBooking] = useState<any>(null);
  const [pastBookings, setPastBookings] = useState<any[]>([]);
  const [cancelledBookings, setCancelledBookings] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('sart_bookings_road');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setActiveBooking(data.activeBooking || null);
        setPastBookings(data.pastBookings || []);
        setCancelledBookings(data.cancelledBookings || []);
      } catch (e) {}
    }
  }, []);

  const saveToStorage = (active: any, past: any[], cancelled: any[]) => {
    localStorage.setItem('sart_bookings_road', JSON.stringify({
      activeBooking: active,
      pastBookings: past,
      cancelledBookings: cancelled
    }));
  };

  // Generate the Google Maps Embed URL
  const mapUrl = `https://maps.google.com/maps?saddr=${encodeURIComponent(pickup)}&daddr=${encodeURIComponent(dropoff)}&output=embed`;
  const appUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(pickup)}&destination=${encodeURIComponent(dropoff)}&travelmode=driving`;

  const handleSwap = () => {
    const temp = pickup;
    setPickup(dropoff);
    setDropoff(temp);
  };

  const handleSearch = () => {
    setBookingStep(1);
  };

  const handlePayment = () => {
    if (!firstName || !mobile) {
      alert("Please enter at least First Name and Mobile Number.");
      return;
    }
    const newBooking = {
      id: `BK${Math.floor(Math.random() * 100000000)}`,
      pnr: `PNR${Math.floor(Math.random() * 10000000)}`,
      type: selectedVehicleType,
      from: pickup,
      to: dropoff,
      passenger: `${firstName} ${lastName}`,
      mobile,
      email,
      driverAvailable: 'Yes (Nearby)',
      distanceFromDriver: '1.2 km',
      date: new Date().toLocaleString(),
    };
    
    setActiveBooking(newBooking);
    saveToStorage(newBooking, pastBookings, cancelledBookings);
    
    // Save to global storage for PNR tracking
    const globalBookingsStr = localStorage.getItem('sart_global_bookings');
    let globalBookings = globalBookingsStr ? JSON.parse(globalBookingsStr) : [];
    globalBookings.push({
      pnr: newBooking.pnr,
      bookingId: newBooking.id,
      title: `${selectedVehicleType.toUpperCase()} RIDE`,
      number: newBooking.id,
      source: pickup.split(',')[0],
      destination: dropoff.split(',')[0],
      statusText: 'CONFIRMED',
      sourceTime: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      sourceDate: new Date().toLocaleDateString(),
      destinationTime: 'TBD',
      destinationDate: new Date().toLocaleDateString(),
      stops: []
    });
    localStorage.setItem('sart_global_bookings', JSON.stringify(globalBookings));

    setBookingStep(0);
    setActiveSubTab('upcoming');
  };

  const completeRide = () => {
    if (activeBooking) {
      const updatedPast = [...pastBookings, activeBooking];
      setPastBookings(updatedPast);
      setActiveBooking(null);
      saveToStorage(null, updatedPast, cancelledBookings);
      setActiveSubTab('past');

      const globalStr = localStorage.getItem('sart_global_bookings');
      if (globalStr) {
        let globals = JSON.parse(globalStr);
        globals = globals.map((g: any) => g.bookingId === activeBooking.id ? { ...g, statusText: 'COMPLETED' } : g);
        localStorage.setItem('sart_global_bookings', JSON.stringify(globals));
      }
    }
  };

  const cancelRide = () => {
    if (activeBooking) {
      const cancelled = {
        ...activeBooking,
        cancellationId: Math.floor(Math.random() * 100000000000),
        txnId: `10000${Math.floor(Math.random() * 10000000)}`,
        cancelDate: new Date().toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }),
        ticketCharge: 7420,
        fee: 1705.4,
        refund: 5714.6
      };
      const updatedCancelled = [...cancelledBookings, cancelled];
      setCancelledBookings(updatedCancelled);
      setActiveBooking(null);
      saveToStorage(null, pastBookings, updatedCancelled);
      setActiveSubTab('cancelled');

      const globalStr = localStorage.getItem('sart_global_bookings');
      if (globalStr) {
        let globals = JSON.parse(globalStr);
        globals = globals.map((g: any) => g.bookingId === activeBooking.id ? { ...g, statusText: 'CANCELLED' } : g);
        localStorage.setItem('sart_global_bookings', JSON.stringify(globals));
      }
    }
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
          <h2 style={{ margin: 0, textTransform: 'capitalize', color: '#1e293b' }}>{selectedVehicleType} Booking</h2>
        </div>
        
        {/* Sub-tabs for Booking vs History */}
        <div style={{ display: 'flex', backgroundColor: 'white', padding: '4px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <button 
            onClick={() => setActiveSubTab('book')}
            style={{ padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', backgroundColor: activeSubTab === 'book' ? '#0f172a' : 'transparent', color: activeSubTab === 'book' ? 'white' : '#64748b', fontWeight: activeSubTab === 'book' ? 'bold' : 'normal' }}
          >
            Book {selectedVehicleType}
          </button>
          <button 
            onClick={() => setActiveSubTab('upcoming')}
            style={{ padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', backgroundColor: activeSubTab === 'upcoming' ? '#0f172a' : 'transparent', color: activeSubTab === 'upcoming' ? 'white' : '#64748b', fontWeight: activeSubTab === 'upcoming' ? 'bold' : 'normal' }}
          >
            Upcoming
          </button>
          <button 
            onClick={() => setActiveSubTab('past')}
            style={{ padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', backgroundColor: activeSubTab === 'past' ? '#0f172a' : 'transparent', color: activeSubTab === 'past' ? 'white' : '#64748b', fontWeight: activeSubTab === 'past' ? 'bold' : 'normal' }}
          >
            Past Bookings
          </button>
          <button 
            onClick={() => setActiveSubTab('cancelled')}
            style={{ padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', backgroundColor: activeSubTab === 'cancelled' ? '#0f172a' : 'transparent', color: activeSubTab === 'cancelled' ? 'white' : '#64748b', fontWeight: activeSubTab === 'cancelled' ? 'bold' : 'normal' }}
          >
            Cancelled
          </button>
        </div>
      </div>

      {activeSubTab === 'book' && (
        <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
          
          {/* Left Side: Booking Form */}
          <div style={{ flex: '1', backgroundColor: 'white', borderRadius: '16px', padding: '30px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            
            {bookingStep === 0 && (
              <>
                <h3 style={{ fontSize: '20px', marginBottom: '24px', color: '#0f172a' }}>Enter Route Details</h3>
                
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Pickup */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: '#64748b', fontWeight: 'bold', marginBottom: '8px' }}>Pickup Location</label>
                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f8fafc', borderRadius: '8px', padding: '12px 16px', border: '1px solid #e2e8f0' }}>
                      <i className="fa-solid fa-location-dot" style={{ color: '#22c55e', marginRight: '12px' }}></i>
                      <input 
                        type="text" 
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        placeholder="Enter pickup location"
                        style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '15px' }}
                      />
                    </div>
                  </div>

                  {/* Connecting Line & Swap Button */}
                  <div style={{ position: 'absolute', left: '20px', top: '75px', bottom: '60px', width: '2px', backgroundColor: '#e2e8f0', zIndex: 0 }}></div>
                  
                  <button 
                    onClick={handleSwap}
                    style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}
                    title="Swap locations"
                  >
                    <i className="fa-solid fa-arrow-right-arrow-left" style={{ color: '#64748b', transform: 'rotate(90deg)' }}></i>
                  </button>

                  {/* Dropoff */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: '#64748b', fontWeight: 'bold', marginBottom: '8px' }}>Drop-off Location</label>
                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f8fafc', borderRadius: '8px', padding: '12px 16px', border: '1px solid #e2e8f0' }}>
                      <i className="fa-solid fa-location-dot" style={{ color: '#ef4444', marginRight: '12px' }}></i>
                      <input 
                        type="text" 
                        value={dropoff}
                        onChange={(e) => setDropoff(e.target.value)}
                        placeholder="Enter destination"
                        style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '15px' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Date & Time */}
                <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '13px', color: '#64748b', fontWeight: 'bold', marginBottom: '8px' }}>Pickup Date</label>
                    <input type="date" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '15px', outline: 'none', color: '#334155' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '13px', color: '#64748b', fontWeight: 'bold', marginBottom: '8px' }}>Time</label>
                    <input type="time" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '15px', outline: 'none', color: '#334155' }} />
                  </div>
                </div>

                <button onClick={handleSearch} style={{ width: '100%', marginTop: '32px', backgroundColor: 'black', color: 'white', padding: '16px', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-magnifying-glass"></i> Search Available {selectedVehicleType}s
                </button>
              </>
            )}

            {bookingStep === 1 && (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                  <button onClick={() => setBookingStep(0)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#64748b' }}><i className="fa-solid fa-arrow-left"></i></button>
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
                    <div><strong>From:</strong> {pickup}</div>
                    <div><strong>To:</strong> {dropoff}</div>
                    <div><strong>Vehicle:</strong> {selectedVehicleType}</div>
                  </div>
                </div>

                <button onClick={handlePayment} style={{ width: '100%', marginTop: '32px', backgroundColor: '#10b981', color: 'white', padding: '16px', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-credit-card"></i> Payment Options & Confirm
                </button>
              </>
            )}

          </div>

          {/* Right Side: Map Embedded */}
          <div style={{ flex: '1.5', backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', position: 'relative', minHeight: '500px' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
              {!isMapLoaded && (
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f1f5f9' }}>
                  <i className="fa-solid fa-spinner fa-spin fa-2x" style={{ color: '#94a3b8' }}></i>
                </div>
              )}
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0, opacity: isMapLoaded ? 1 : 0, transition: 'opacity 0.3s' }}
                loading="lazy"
                allowFullScreen
                onLoad={() => setIsMapLoaded(true)}
                referrerPolicy="no-referrer-when-downgrade"
                src={mapUrl}
              ></iframe>
            </div>

            {/* Map Overlay Button */}
            <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'white', padding: '12px 24px', borderRadius: '30px', boxShadow: '0 4px 15px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', gap: '12px', zIndex: 10 }}>
              <i className="fa-brands fa-google" style={{ color: '#4285F4', fontSize: '20px' }}></i>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 'bold' }}>Open in App</span>
                <a href={appUrl} target="_blank" rel="noreferrer" style={{ fontSize: '14px', color: '#0f172a', fontWeight: 'bold', textDecoration: 'none' }}>Google Maps Navigation</a>
              </div>
              <i className="fa-solid fa-arrow-up-right-from-square" style={{ color: '#94a3b8', fontSize: '12px', marginLeft: '8px' }}></i>
            </div>
          </div>
        </div>
      )}

      {activeSubTab === 'upcoming' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '20px' }}>
          
          <div style={{ display: 'flex', gap: '20px', alignItems: 'stretch' }}>
            {/* Left Ad - Video Poster */}
            <div style={{ width: '220px', backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80" alt="Travel Video" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: '2px solid white' }}>
                  <i className="fa-solid fa-play" style={{ color: 'white', fontSize: '20px', marginLeft: '4px' }}></i>
                </div>
              </div>
              <div style={{ padding: '16px', textAlign: 'center', background: '#0f172a', color: 'white', flex: 1 }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '15px' }}>Ultimate Road Trips</h4>
                <p style={{ margin: 0, fontSize: '12px', color: '#94a3b8' }}>Explore the top 10 scenic routes for your next adventure.</p>
              </div>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* Top Ad */}
              <div style={{ width: '100%', maxWidth: '600px', backgroundColor: '#fef3c7', borderRadius: '12px', padding: '12px 20px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #fde68a' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <i className="fa-solid fa-gift" style={{ color: '#d97706', fontSize: '20px' }}></i>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '14px', color: '#92400e' }}>Special Offer on Rentals</h4>
                    <p style={{ margin: 0, fontSize: '12px', color: '#b45309' }}>Rent a {selectedVehicleType.toLowerCase()} for a week and get 2 days free!</p>
                  </div>
                </div>
                <button style={{ background: '#d97706', color: 'white', border: 'none', borderRadius: '4px', padding: '6px 12px', fontSize: '12px', cursor: 'pointer' }}>Claim Offer</button>
              </div>

              {activeBooking ? (
                <div style={{ width: '100%', maxWidth: '600px', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                  {/* Ticket Header */}
                  <div style={{ background: '#0f172a', color: 'white', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className={`fa-solid ${activeBooking.type.toLowerCase() === 'bike' ? 'fa-motorcycle' : 'fa-car'}`} style={{ fontSize: '18px' }}></i>
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
                        <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase' }}>Pickup</div>
                        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#0f172a', marginTop: '4px' }}>{activeBooking.from}</div>
                      </div>
                      
                      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }}>
                        <i className="fa-solid fa-arrow-right-long" style={{ color: '#cbd5e1', fontSize: '20px' }}></i>
                      </div>

                      <div style={{ flex: 1, textAlign: 'right', zIndex: 1 }}>
                        <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase' }}>Drop-off</div>
                        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#0f172a', marginTop: '4px' }}>{activeBooking.to}</div>
                      </div>
                      
                      {/* Background Graphic */}
                      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', opacity: 0.03, fontSize: '100px', zIndex: 0 }}>
                        <i className={`fa-solid ${activeBooking.type.toLowerCase() === 'bike' ? 'fa-motorcycle' : 'fa-car'}`}></i>
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
                        <div style={{ fontSize: '12px', color: '#64748b' }}>Vehicle</div>
                        <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0f172a', marginTop: '2px', textTransform: 'capitalize' }}>{activeBooking.type}</div>
                      </div>
                    </div>

                    {/* Driver Details & Image */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: '#f8fafc', padding: '16px', borderRadius: '12px' }}>
                      {activeBooking.type.toLowerCase() === 'bike' && (
                        <div style={{ width: '80px', height: '80px', flexShrink: 0, borderRadius: '8px', overflow: 'hidden', border: '1px solid #e2e8f0', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                           <img src="/images/bike_ticket_icon.jpg" alt="Bike" style={{ width: '100%', height: '100%', objectFit: 'contain' }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<i class="fa-solid fa-motorcycle fa-2x" style="color:#94a3b8"></i>'; }} />
                        </div>
                      )}
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></div>
                          <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#0f172a' }}>Driver Available: {activeBooking.driverAvailable}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <i className="fa-solid fa-route" style={{ color: '#64748b' }}></i>
                          <span style={{ fontSize: '13px', color: '#475569' }}>Distance from Driver to you: <strong style={{ color: '#0f172a' }}>{activeBooking.distanceFromDriver}</strong></span>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                      <button onClick={() => alert('Viewing detailed ticket...')} style={{ flex: 1, background: '#e2e8f0', color: '#0f172a', border: 'none', padding: '14px', borderRadius: '8px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.2s' }}>
                        View Ticket
                      </button>
                      <button onClick={cancelRide} style={{ flex: 1, background: '#ef4444', color: 'white', border: 'none', padding: '14px', borderRadius: '8px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.2s' }}>
                        Cancel Ride
                      </button>
                      <button onClick={completeRide} style={{ flex: 1, background: '#0f172a', color: 'white', border: 'none', padding: '14px', borderRadius: '8px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.2s' }}>
                        Complete Ride
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{ padding: '60px 40px', textAlign: 'center', backgroundColor: 'white', borderRadius: '12px', width: '100%', maxWidth: '600px' }}>
                  <img src="https://cdn-icons-png.flaticon.com/512/747/747116.png" alt="No bookings" width="100" style={{ opacity: 0.5, marginBottom: '20px' }} />
                  <h3 style={{ fontSize: '24px' }}>No Upcoming {selectedVehicleType} Rides</h3>
                  <p style={{ color: '#64748b', marginTop: '10px' }}>Book a {selectedVehicleType} to see your scheduled trips here.</p>
                </div>
              )}
            </div>

            {/* Right Ad - Video Poster */}
            <div style={{ width: '220px', backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&q=80" alt="Offers Video" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: '2px solid white' }}>
                  <i className="fa-solid fa-play" style={{ color: 'white', fontSize: '20px', marginLeft: '4px' }}></i>
                </div>
              </div>
              <div style={{ padding: '16px', textAlign: 'center', background: '#0f172a', color: 'white', flex: 1 }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '15px' }}>Exclusive Offers</h4>
                <p style={{ margin: 0, fontSize: '12px', color: '#94a3b8' }}>Watch our latest video to uncover massive savings!</p>
              </div>
            </div>
          </div>

          {/* Bottom Posters - 3 Columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', width: '100%' }}>
            {/* Poster 1 */}
            <div style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)', borderRadius: '16px', padding: '24px', color: 'white', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '22px', fontWeight: 'bold', zIndex: 1 }}>Weekend Escapes</h3>
              <p style={{ margin: '0 0 20px 0', fontSize: '14px', zIndex: 1, opacity: 0.9 }}>Book a sedan for the weekend and get a free fuel voucher!</p>
              <button style={{ alignSelf: 'flex-start', background: 'white', color: '#2563eb', border: 'none', padding: '8px 16px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', zIndex: 1 }}>Claim Now</button>
              <i className="fa-solid fa-mountain-sun" style={{ position: 'absolute', right: '-20px', bottom: '-20px', fontSize: '120px', opacity: 0.2 }}></i>
            </div>
            {/* Poster 2 */}
            <div style={{ background: 'linear-gradient(135deg, #10b981, #059669)', borderRadius: '16px', padding: '24px', color: 'white', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '22px', fontWeight: 'bold', zIndex: 1 }}>SART Pro Membership</h3>
              <p style={{ margin: '0 0 20px 0', fontSize: '14px', zIndex: 1, opacity: 0.9 }}>Enjoy zero cancellation fees and priority support on rides.</p>
              <button style={{ alignSelf: 'flex-start', background: 'white', color: '#059669', border: 'none', padding: '8px 16px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', zIndex: 1 }}>Join Pro</button>
              <i className="fa-solid fa-crown" style={{ position: 'absolute', right: '-20px', bottom: '-20px', fontSize: '120px', opacity: 0.2 }}></i>
            </div>
            {/* Poster 3 */}
            <div style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', borderRadius: '16px', padding: '24px', color: 'white', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '22px', fontWeight: 'bold', zIndex: 1 }}>Refer & Earn</h3>
              <p style={{ margin: '0 0 20px 0', fontSize: '14px', zIndex: 1, opacity: 0.9 }}>Invite friends to book their travel and get ₹500 off.</p>
              <button style={{ alignSelf: 'flex-start', background: 'white', color: '#d97706', border: 'none', padding: '8px 16px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', zIndex: 1 }}>Invite Friends</button>
              <i className="fa-solid fa-user-group" style={{ position: 'absolute', right: '-20px', bottom: '-20px', fontSize: '120px', opacity: 0.2 }}></i>
            </div>
          </div>

        </div>
      )}

      {activeSubTab === 'past' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
          {pastBookings.length > 0 ? (
            <div style={{ width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#0f172a' }}>Completed Journeys</h3>
              {pastBookings.map((bk, i) => (
                <div key={i} style={{ background: 'white', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '48px', height: '48px', background: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                       <i className={`fa-solid ${bk.type.toLowerCase() === 'bike' ? 'fa-motorcycle' : 'fa-car'}`} style={{ color: '#64748b', fontSize: '20px' }}></i>
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0f172a' }}>{bk.from} &rarr; {bk.to}</div>
                      <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>{bk.date} • {bk.id}</div>
                    </div>
                  </div>
                  <div style={{ background: '#f0fdf4', color: '#16a34a', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
                    Completed
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ padding: '60px 40px', textAlign: 'center', backgroundColor: 'white', borderRadius: '12px', width: '100%', maxWidth: '600px' }}>
              <img src="https://cdn-icons-png.flaticon.com/512/2884/2884323.png" alt="No past bookings" width="100" style={{ opacity: 0.5, marginBottom: '20px' }} />
              <h3 style={{ fontSize: '24px' }}>No Past Bookings</h3>
              <p style={{ color: '#64748b', marginTop: '10px' }}>Your completed {selectedVehicleType} journeys will appear here.</p>
            </div>
          )}
        </div>
      )}

      {activeSubTab === 'cancelled' && (
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {cancelledBookings.length > 0 ? (
              <div style={{ width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {cancelledBookings.map((bk, i) => (
                  <div key={i} style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                    
                    {/* Header: Title and Txn Date */}
                    <div style={{ padding: '16px 24px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <div style={{ color: '#64748b', fontSize: '28px' }}>
                          <i className={`fa-solid ${bk.type.toLowerCase() === 'bike' ? 'fa-motorcycle' : 'fa-car'}`}></i>
                        </div>
                        <div>
                          <h4 style={{ margin: 0, fontSize: '16px', color: '#0f172a', fontWeight: 'bold', textTransform: 'uppercase' }}>{bk.type} RIDE - {bk.from.split(',')[0]}</h4>
                          <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#64748b' }}>{bk.from} &rarr; {bk.to}</p>
                          <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: '#94a3b8' }}>{bk.date}</p>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <div>
                          <p style={{ margin: 0, fontSize: '11px', color: '#475569' }}>Txn ID: {bk.txnId}</p>
                          <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: '#475569' }}>Txn date: {bk.cancelDate}</p>
                        </div>
                        <div style={{ background: '#fef2f2', color: '#ef4444', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', marginTop: '12px' }}>
                          TRANSACTION STATUS: CANCELLED
                        </div>
                      </div>
                    </div>

                    {/* Details section */}
                    <div style={{ padding: '24px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: '12px', fontSize: '13px', color: '#334155' }}>
                        <div style={{ fontWeight: 'bold', color: '#0f172a' }}>PNR No.:</div>
                        <div style={{ fontWeight: 'bold' }}>{bk.pnr || bk.id}</div>
                        
                        <div>Cancellation/Refund ID:</div>
                        <div>{bk.cancellationId}</div>
                        
                        <div>Transaction Amount:</div>
                        <div>₹ {bk.ticketCharge}</div>
                        
                        <div>Travel Insurance Refund Amount:</div>
                        <div>₹ 0.0</div>

                        <div>Cancellation Fee:</div>
                        <div style={{ color: '#ef4444' }}>-₹ {bk.fee}</div>
                        
                        <div style={{ fontWeight: 'bold', color: '#0f172a', marginTop: '8px' }}>Total Refund Amount:</div>
                        <div style={{ fontWeight: 'bold', color: '#10b981', marginTop: '8px', fontSize: '15px' }}>₹ {bk.refund}</div>
                        
                        <div style={{ marginTop: '8px' }}>Bank Name:</div>
                        <div style={{ marginTop: '8px', color: '#64748b' }}>Credit & Debit cards / UPI (Powered by SART iPay)</div>
                        
                        <div>Remark:</div>
                        <div style={{ color: '#64748b' }}>Refund amount has been sent to your Wallet/Bank/Travel Agent's A/c</div>
                      </div>
                    </div>

                    {/* Person Details overlay */}
                    <div style={{ background: '#f8fafc', padding: '16px 24px', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="fa-solid fa-user" style={{ color: 'white' }}></i>
                      </div>
                      <div>
                        <p style={{ margin: 0, fontSize: '13px', fontWeight: 'bold', color: '#0f172a' }}>{bk.passenger}</p>
                        <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#64748b' }}>{bk.email} • {bk.mobile}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ padding: '60px 40px', textAlign: 'center', backgroundColor: 'white', borderRadius: '12px', width: '100%', maxWidth: '600px' }}>
                <img src="https://cdn-icons-png.flaticon.com/512/9331/9331346.png" alt="No cancelled bookings" width="100" style={{ opacity: 0.5, marginBottom: '20px' }} />
                <h3 style={{ fontSize: '24px' }}>No Cancelled Bookings</h3>
                <p style={{ color: '#64748b', marginTop: '10px' }}>Cancelled journeys will appear here.</p>
              </div>
            )}
          </div>

          {/* Right Ad for cancelled page - Offers/Discounts */}
          <div style={{ width: '220px', backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', height: 'fit-content' }}>
            <div style={{ padding: '20px', textAlign: 'center', background: '#fef2f2', borderBottom: '1px solid #fee2e2' }}>
              <i className="fa-solid fa-ticket" style={{ color: '#ef4444', fontSize: '32px', marginBottom: '12px' }}></i>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '15px', color: '#991b1b' }}>Missed Your Ride?</h4>
              <p style={{ margin: 0, fontSize: '12px', color: '#b91c1c' }}>Here is a 20% discount on your next booking with us.</p>
            </div>
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', background: '#0f172a' }}>
              <div style={{ border: '2px dashed #475569', borderRadius: '8px', padding: '12px', textAlign: 'center', color: 'white' }}>
                <strong style={{ fontSize: '18px', letterSpacing: '2px' }}>SARTCOMEBACK</strong>
              </div>
              <button style={{ background: '#3b82f6', color: 'white', border: 'none', padding: '10px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Apply & Book Now</button>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
