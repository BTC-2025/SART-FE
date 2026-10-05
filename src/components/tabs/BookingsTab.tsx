import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import './BookingsTab.css';
import { useSartStore } from '@/store/useSartStore';
import RoadBooking from '../booking-pages/road';
import SeaBooking from '../booking-pages/sea';
import AirBooking from '../booking-pages/air';
import TrainBooking from '../booking-pages/train';
import { FLEET_CATEGORIES, FLEET_ITEMS, MOCK_BOOKINGS, Booking } from '../../data/mockBookings';

export default function BookingsTab() {
  const pathname = usePathname();

  const [selectedFleetCategory, setSelectedFleetCategory] = useState('All Fleet');
  const [selectedVehicleType, setSelectedVehicleType] = useState<string | null>(() => {
    if (pathname && pathname.startsWith('/booking')) {
      const slugParts = pathname.split('/');
      const slug = slugParts[slugParts.length - 1];
      if (slug && slug !== 'booking') {
        const match = FLEET_ITEMS.find(item => item.id.toLowerCase() === slug.toLowerCase());
        if (match) return match.id;
      }
    }
    return null;
  });
  
  const [notFoundService, setNotFoundService] = useState<string | null>(() => {
    if (pathname && pathname.startsWith('/booking')) {
      const slugParts = pathname.split('/');
      const slug = slugParts[slugParts.length - 1];
      if (slug && slug !== 'booking') {
        const match = FLEET_ITEMS.find(item => item.id.toLowerCase() === slug.toLowerCase());
        if (!match) return slug;
      }
    }
    return null;
  });
  const [pnrInput, setPnrInput] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [trackedBooking, setTrackedBooking] = useState<Booking | null>(null);
  const [searchError, setSearchError] = useState<string | null>(null);

  const { activeTab: globalActiveTab, setActiveTab: setGlobalActiveTab } = useSartStore();

  // URL parsing is now handled efficiently in the initial useState logic above!

  const router = useRouter();

  const handleBackToFleet = () => {
    setSelectedVehicleType(null);
    window.history.pushState(null, '', '/booking');
  };

  const handleSelectFleetItem = (item: any) => {
    setSelectedVehicleType(item.id);
    setNotFoundService(null);
    window.history.pushState(null, '', `/booking/${item.id}`);
  };

  const getCategory = (id: string) => {
    if (['bike', 'auto', 'car', 'suv', 'bus'].includes(id)) return 'Road';
    if (['boat', 'ship'].includes(id)) return 'Sea';
    if (['aeroplane', 'helicopter'].includes(id)) return 'Air';
    if (['train'].includes(id)) return 'Train';
    return '';
  };

  const handlePnrSearch = () => {
    setSearchError(null);
    if (!pnrInput.trim()) {
      setSearchError('Please enter a PNR number');
      return;
    }
    const input = pnrInput.trim().toLowerCase();
    
    // Check mock bookings first
    let found = MOCK_BOOKINGS.find(b => b.pnr?.toLowerCase() === input || b.bookingId?.toLowerCase() === input);
    
    // Check global local storage
    if (!found && typeof window !== 'undefined') {
      const globalStr = localStorage.getItem('sart_global_bookings');
      if (globalStr) {
        const globals = JSON.parse(globalStr);
        found = globals.find((b: any) => b.pnr?.toLowerCase() === input || b.bookingId?.toLowerCase() === input);
      }
    }

    if (found) {
      setTrackedBooking(found);
    } else {
      setSearchError('No booking found for this PNR');
    }
  };

  if (notFoundService) {
    return (
      <section className={`tab-screen ${globalActiveTab === 'booking' ? 'active' : ''}`} id="tab-booking">
        <div className="bookings-tab-container fleet-selection-container" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>Service Not Found</h1>
          <p style={{ color: '#6b7280', marginBottom: '20px' }}>The service "{notFoundService}" does not exist.</p>
          <button
            onClick={() => {
              setNotFoundService(null);
              window.history.pushState(null, '', '/booking');
            }}
            style={{ padding: '10px 20px', backgroundColor: 'black', color: 'white', borderRadius: '8px', cursor: 'pointer', border: 'none' }}
          >
            Back to Booking
          </button>
        </div>
      </section>
    );
  }

  if (!selectedVehicleType) {
    const displayedFleet = selectedFleetCategory === 'All Fleet'
      ? FLEET_ITEMS
      : FLEET_ITEMS.filter(i => i.category === selectedFleetCategory);

    return (
      <section className={`tab-screen ${globalActiveTab === 'booking' ? 'active' : ''}`} id="tab-booking">
        <div className="bookings-tab-container fleet-selection-container">
          
          {/* TRACKING UI */}
          <div className="pnr-tracking-section">
            {trackedBooking ? (
              <div className="tracking-result-screen">
                <div className="tracking-result-header">
                  <button className="back-btn" onClick={() => setTrackedBooking(null)}>
                    <i className="fa-solid fa-arrow-left"></i>
                  </button>
                  <div>
                    <h4 className="tracking-subtitle">TRACKING RESULT</h4>
                    <h2 className="tracking-title">{trackedBooking.title} - {trackedBooking.number}</h2>
                    <p className="tracking-route">
                      {trackedBooking.source} <i className="fa-solid fa-arrow-right"></i> {trackedBooking.destination}
                    </p>
                  </div>
                </div>

                <div className="timeline-card" style={{ marginTop: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div>
                      <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>Status</p>
                      <h3 style={{ margin: '4px 0 0 0', color: '#10b981', fontSize: '18px' }}>{trackedBooking.statusText}</h3>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>PNR / Booking ID</p>
                      <h4 style={{ margin: '4px 0 0 0', fontSize: '16px' }}>{trackedBooking.pnr || trackedBooking.bookingId}</h4>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '24px', borderTop: '1px solid #e2e8f0', paddingTop: '16px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 45%' }}>
                      <p style={{ margin: 0, fontSize: '12px', color: '#94a3b8' }}>Departure</p>
                      <p style={{ margin: '4px 0 0 0', fontWeight: 'bold' }}>{trackedBooking.sourceTime}, {trackedBooking.sourceDate}</p>
                      <p style={{ margin: 0, fontSize: '13px', color: '#475569' }}>{trackedBooking.sourceCode} - {trackedBooking.sourcePlatform || 'Main Terminal'}</p>
                    </div>
                    <div style={{ flex: '1 1 45%' }}>
                      <p style={{ margin: 0, fontSize: '12px', color: '#94a3b8' }}>Arrival</p>
                      <p style={{ margin: '4px 0 0 0', fontWeight: 'bold' }}>{trackedBooking.destinationTime}, {trackedBooking.destinationDate}</p>
                      <p style={{ margin: 0, fontSize: '13px', color: '#475569' }}>{trackedBooking.destinationCode} - {trackedBooking.destinationPlatform || 'Main Terminal'}</p>
                    </div>
                  </div>
                  
                  {trackedBooking.stops && trackedBooking.stops.length > 0 && (
                     <div style={{ marginTop: '24px', padding: '16px', background: '#f8fafc', borderRadius: '8px' }}>
                       <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#334155' }}>Live Journey Details</h4>
                       <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                         {trackedBooking.stops.map((stop, idx) => (
                           <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                             <div style={{ 
                               width: '12px', height: '12px', borderRadius: '50%', 
                               background: stop.status === 'past' ? '#cbd5e1' : stop.status === 'current' ? '#3b82f6' : '#fff',
                               border: `2px solid ${stop.status === 'future' ? '#cbd5e1' : (stop.status === 'current' ? '#3b82f6' : '#cbd5e1')}`
                             }}></div>
                             <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between' }}>
                               <span style={{ fontSize: '14px', color: stop.status === 'past' ? '#94a3b8' : '#0f172a', fontWeight: stop.status === 'current' ? 'bold' : 'normal' }}>{stop.name}</span>
                               <span style={{ fontSize: '13px', color: stop.status === 'past' ? '#94a3b8' : '#64748b' }}>{stop.time}</span>
                             </div>
                           </div>
                         ))}
                       </div>
                     </div>
                  )}
                </div>
              </div>
            ) : (
              <>
                <h4 className="pnr-tracking-subtitle" style={{ textAlign: 'center' }}>TRACK LIVE STATUS</h4>
                <h2 className="pnr-tracking-title" style={{ textAlign: 'center' }}>Use PNR number to get the status</h2>
                <p className="pnr-tracking-desc" style={{ margin: '0 auto 32px auto', textAlign: 'center' }}>
                  With our tracker, you can now track the live status of domestic and international rides, trains, and more. Just enter a few details such as PNR number, travel date and get the live status.
                </p>
                
                <div className="pnr-search-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  <div className="pnr-input-group">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input 
                      type="text" 
                      placeholder="Search by PNR" 
                      value={pnrInput}
                      onChange={(e) => setPnrInput(e.target.value)}
                    />
                  </div>
                  
                  {searchError && <p style={{ color: '#ef4444', fontSize: '13px', margin: '0' }}>{searchError}</p>}
                  
                  <button className="pnr-search-btn" onClick={handlePnrSearch}>Search Ride</button>
                </div>
              </>
            )}
          </div>

          <div className="fleet-header">
            <i className="fa-solid fa-car-side fleet-main-icon"></i>
            <h2>Ride Booking</h2>
          </div>

          <div className="fleet-tabs">
            {FLEET_CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`fleet-tab-btn ${selectedFleetCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedFleetCategory(cat)}
              >
                {cat === 'All Fleet' && <i className="fa-solid fa-globe"></i>}
                {cat === 'Road' && <i className="fa-solid fa-car"></i>}
                {cat === 'Sea & Water' && <i className="fa-solid fa-ship"></i>}
                {cat === 'Air Charters' && <i className="fa-solid fa-plane"></i>}
                {cat === 'Train & Rail' && <i className="fa-solid fa-train"></i>}
                {cat}
              </button>
            ))}
          </div>

          <div className="fleet-grid">
            {displayedFleet.map(item => (
              <div
                key={item.id}
                className="fleet-card"
                onClick={() => handleSelectFleetItem(item)}
              >
                <div className="fleet-img-wrapper">
                  <img src={item.image} alt={item.name} />
                </div>
                <h4>{item.name}</h4>
              </div>
            ))}
          </div>

          {/* OFFERS SECTION */}
          <div className="offers-section" style={{ marginTop: '48px', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '24px', color: '#0f172a' }}>Special Offers</h2>
            <div className="offers-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
               
               {/* Offer 1 */}
               <div className="offer-card" style={{ background: '#0f172a', borderRadius: '16px', overflow: 'hidden', color: 'white', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                 <div style={{ padding: '32px', flex: 1, position: 'relative', zIndex: 1 }}>
                   <p style={{ margin: '0 0 8px 0', fontSize: '15px' }}>Stand a chance to win</p>
                   <h4 style={{ fontSize: '36px', margin: '0 0 4px 0', fontWeight: '800' }}>2,00,000</h4>
                   <p style={{ fontSize: '15px', color: '#38bdf8', marginBottom: '32px' }}>IndiGo BluChips</p>
                   
                   <p style={{ fontSize: '13px', margin: '0 0 4px 0' }}>Earn <strong style={{ fontSize: '18px' }}>2x</strong> IndiGo BluChips</p>
                   <p style={{ fontSize: '12px', color: '#94a3b8' }}>on IndiGoStretch, flights & partner spends</p>
                 </div>
                 <div style={{ position: 'absolute', top: '24px', left: '24px', border: '1px solid #38bdf8', padding: '12px', borderRadius: '8px', transform: 'rotate(-15deg)', opacity: 0.8 }}>
                    <h3 style={{ margin: 0, color: '#38bdf8', fontSize: '18px', textAlign: 'center', lineHeight: 1.2 }}>Blu<br/>October<br/>Festival</h3>
                 </div>
                 <p style={{ position: 'absolute', bottom: '16px', left: '24px', fontSize: '10px', color: '#64748b', margin: 0 }}>T&C apply.</p>
               </div>

               {/* Offer 2 */}
               <div className="offer-card" style={{ background: '#0a0a0a', borderRadius: '16px', overflow: 'hidden', color: 'white', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                 <div style={{ padding: '32px', flex: 1, zIndex: 1 }}>
                   <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
                     <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#94a3b8' }}>IndiGo BluChip</span>
                   </div>
                   <h3 style={{ fontSize: '22px', margin: '0 0 12px 0', lineHeight: 1.4, fontWeight: '600' }}>Earn 2x IndiGo Bluchips on every<br/>Cab booking</h3>
                   <p style={{ fontSize: '16px', color: '#e2e8f0', marginBottom: '32px' }}>Reserve your ride for just ₹1*</p>
                   <button style={{ background: '#334155', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '24px', fontSize: '12px', cursor: 'pointer' }}>Limited-time offer</button>
                 </div>
                 <div style={{ position: 'absolute', bottom: '24px', right: '24px', border: '1px solid #38bdf8', padding: '12px', borderRadius: '8px', transform: 'rotate(15deg)', opacity: 0.8 }}>
                    <h3 style={{ margin: 0, color: '#38bdf8', fontSize: '14px', textAlign: 'center', lineHeight: 1.2 }}>Blu<br/>October<br/>Festival</h3>
                 </div>
               </div>

               {/* Offer 3 */}
               <div className="offer-card" style={{ background: '#0284c7', borderRadius: '16px', overflow: 'hidden', color: 'white', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                 <div style={{ padding: '32px', flex: 1, zIndex: 1 }}>
                   <h3 style={{ fontSize: '28px', margin: '0 0 8px 0', fontWeight: '800' }}>Hotels on IndiGo</h3>
                   <p style={{ fontSize: '15px', margin: '0 0 24px 0', opacity: 0.9, lineHeight: 1.4 }}>Earn IndiGo BluChips on hotels and<br/>redeem for flights.</p>
                   
                   <div style={{ display: 'flex', gap: '8px', fontSize: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
                     <span style={{ border: '1px dashed rgba(255,255,255,0.6)', padding: '6px 10px', borderRadius: '4px' }}><i className="fa-solid fa-bed"></i> 7 lakh+ hotels</span>
                     <span style={{ border: '1px dashed rgba(255,255,255,0.6)', padding: '6px 10px', borderRadius: '4px' }}><i className="fa-regular fa-calendar-check"></i> Free cancellation</span>
                   </div>

                   <button style={{ background: 'transparent', color: 'white', border: '1px solid white', padding: '8px 16px', borderRadius: '24px', fontSize: '12px', cursor: 'pointer' }}>Book now on goIndiGo.in</button>
                 </div>
                 
                 {/* Decorative background image simulation */}
                 <div style={{ position: 'absolute', bottom: 0, right: 0, width: '100%', height: '50%', background: 'linear-gradient(to top, rgba(14,165,233,1) 0%, rgba(14,165,233,0) 100%)', zIndex: 0 }}></div>
               </div>
               
            </div>
          </div>
        </div>
      </section>
    );
  }

  const category = getCategory(selectedVehicleType);

  return (
    <section className={`tab-screen ${globalActiveTab === 'booking' ? 'active' : ''}`} id="tab-booking">
      {category === 'Road' && <RoadBooking selectedVehicleType={selectedVehicleType} handleBackToFleet={handleBackToFleet} />}
      {category === 'Sea' && <SeaBooking selectedVehicleType={selectedVehicleType} handleBackToFleet={handleBackToFleet} />}
      {category === 'Air' && <AirBooking selectedVehicleType={selectedVehicleType} handleBackToFleet={handleBackToFleet} />}
      {category === 'Train' && <TrainBooking selectedVehicleType={selectedVehicleType} handleBackToFleet={handleBackToFleet} />}
    </section>
  );
}
