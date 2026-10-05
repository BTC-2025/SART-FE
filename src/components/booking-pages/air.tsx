import React, { useState } from 'react';
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
  
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [showOriginSuggestions, setShowOriginSuggestions] = useState(false);
  const [showDestSuggestions, setShowDestSuggestions] = useState(false);

  const handleSwap = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
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
          <h2 style={{ margin: 0, textTransform: 'capitalize', color: '#1e293b' }}>{selectedVehicleType === 'flight' ? 'Flight' : 'Helicopter'} Booking</h2>
        </div>
        
        {/* Sub-tabs for Booking vs History */}
        <div style={{ display: 'flex', backgroundColor: 'white', padding: '4px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <button 
            onClick={() => setActiveSubTab('book')}
            style={{ padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', backgroundColor: activeSubTab === 'book' ? '#0052cc' : 'transparent', color: activeSubTab === 'book' ? 'white' : '#64748b', fontWeight: activeSubTab === 'book' ? 'bold' : 'normal' }}
          >
            Book Flight
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
        <div className="flight-search-widget" style={{ marginTop: '30px', maxWidth: '1000px', margin: '30px auto' }}>
          
          <div style={{ backgroundColor: '#0088ce', padding: '15px 25px', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>
            <h3 style={{ color: 'white', margin: 0, fontSize: '18px', fontWeight: '400' }}>Search for flights by origin and destination airport</h3>
          </div>

          <div style={{ backgroundColor: '#f1f5f9', padding: '20px 25px', display: 'flex', alignItems: 'center', gap: '15px', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            
            {/* Origin Input */}
            <div style={{ flex: '1', position: 'relative' }}>
              <label style={{ display: 'block', fontSize: '11px', color: '#64748b', fontWeight: 'bold', marginBottom: '6px', textTransform: 'uppercase' }}>Origin</label>
              <input 
                type="text"
                placeholder="Enter origin airport"
                value={origin}
                onChange={(e) => { setOrigin(e.target.value); setShowOriginSuggestions(true); }}
                onFocus={() => setShowOriginSuggestions(true)}
                onBlur={() => setTimeout(() => setShowOriginSuggestions(false), 200)}
                style={{ width: '100%', padding: '12px 16px', fontSize: '15px', border: '1px solid #cbd5e1', borderRadius: '4px', outline: 'none' }}
              />
              
              {showOriginSuggestions && origin.trim().length > 0 && (
                <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: 'white', border: '1px solid #cbd5e1', borderTop: 'none', zIndex: 10, maxHeight: '200px', overflowY: 'auto', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                  {AIRPORTS.filter(a => a.name.toLowerCase().includes(origin.toLowerCase()) || a.code.toLowerCase().includes(origin.toLowerCase())).map((airport, idx) => (
                    <div 
                      key={idx}
                      onClick={() => { setOrigin(airport.name); setShowOriginSuggestions(false); }}
                      style={{ padding: '10px 16px', cursor: 'pointer', fontSize: '14px', borderBottom: '1px solid #f1f5f9' }}
                      className="flight-suggestion-item"
                    >
                      {airport.name} - <strong>{airport.code}</strong>
                    </div>
                  ))}
                  {AIRPORTS.filter(a => a.name.toLowerCase().includes(origin.toLowerCase()) || a.code.toLowerCase().includes(origin.toLowerCase())).length === 0 && (
                    <div style={{ padding: '10px 16px', fontSize: '14px', color: '#94a3b8' }}>No airports found</div>
                  )}
                </div>
              )}
            </div>

            {/* Swap Button */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%', paddingTop: '20px' }}>
              <button 
                onClick={handleSwap}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#64748b', padding: '10px' }}
                title="Swap origin and destination"
              >
                <i className="fa-solid fa-right-left"></i>
              </button>
            </div>

            {/* Destination Input */}
            <div style={{ flex: '1', position: 'relative' }}>
              <label style={{ display: 'block', fontSize: '11px', color: '#64748b', fontWeight: 'bold', marginBottom: '6px', textTransform: 'uppercase' }}>Destination</label>
              <input 
                type="text"
                placeholder="Enter destination airport"
                value={destination}
                onChange={(e) => { setDestination(e.target.value); setShowDestSuggestions(true); }}
                onFocus={() => setShowDestSuggestions(true)}
                onBlur={() => setTimeout(() => setShowDestSuggestions(false), 200)}
                style={{ width: '100%', padding: '12px 16px', fontSize: '15px', border: '1px solid #cbd5e1', borderRadius: '4px', outline: 'none' }}
              />

              {showDestSuggestions && destination.trim().length > 0 && (
                <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: 'white', border: '1px solid #cbd5e1', borderTop: 'none', zIndex: 10, maxHeight: '200px', overflowY: 'auto', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                  {AIRPORTS.filter(a => a.name.toLowerCase().includes(destination.toLowerCase()) || a.code.toLowerCase().includes(destination.toLowerCase())).map((airport, idx) => (
                    <div 
                      key={idx}
                      onClick={() => { setDestination(airport.name); setShowDestSuggestions(false); }}
                      style={{ padding: '10px 16px', cursor: 'pointer', fontSize: '14px', borderBottom: '1px solid #f1f5f9' }}
                      className="flight-suggestion-item"
                    >
                      {airport.name} - <strong>{airport.code}</strong>
                    </div>
                  ))}
                  {AIRPORTS.filter(a => a.name.toLowerCase().includes(destination.toLowerCase()) || a.code.toLowerCase().includes(destination.toLowerCase())).length === 0 && (
                    <div style={{ padding: '10px 16px', fontSize: '14px', color: '#94a3b8' }}>No airports found</div>
                  )}
                </div>
              )}
            </div>

            {/* Search Button */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%', paddingTop: '20px' }}>
              <button style={{ backgroundColor: '#d97706', color: 'white', border: 'none', padding: '12px 18px', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            
          </div>
        </div>
      )}

      {activeSubTab === 'upcoming' && (
        <div style={{ padding: '40px', textAlign: 'center', backgroundColor: 'white', borderRadius: '12px', marginTop: '20px' }}>
          <img src="https://cdn-icons-png.flaticon.com/512/747/747116.png" alt="No bookings" width="100" style={{ opacity: 0.5, marginBottom: '20px' }} />
          <h3>No Upcoming Flights</h3>
          <p style={{ color: '#64748b' }}>Looks like you haven't booked any flights yet.</p>
        </div>
      )}

      {activeSubTab === 'past' && (
        <div style={{ padding: '40px', textAlign: 'center', backgroundColor: 'white', borderRadius: '12px', marginTop: '20px' }}>
          <img src="https://cdn-icons-png.flaticon.com/512/2884/2884323.png" alt="No past bookings" width="100" style={{ opacity: 0.5, marginBottom: '20px' }} />
          <h3>No Past Flight Bookings</h3>
          <p style={{ color: '#64748b' }}>Your completed flights will appear here.</p>
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
