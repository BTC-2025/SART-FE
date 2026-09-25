import React, { useState } from 'react';
import './BookingsTab.css';

interface Booking {
  id: string;
  title: string;
  type: string;
  dateTime: string;
  details: string;
  status: string;
  cost: number;
}

const MOCK_BOOKINGS: Booking[] = [
  {
    id: 'bk-001',
    title: 'Tata Nexon EV Rental',
    type: 'rental',
    dateTime: 'Oct 02, 2026, 10:00 AM',
    details: 'Pickup: 10:00 AM • 3 Days Duration',
    status: 'Active',
    cost: 4500.00
  },
  {
    id: 'bk-002',
    title: 'Tire Diagnostics & Balance',
    type: 'mechanic',
    dateTime: 'Sept 22, 2026, 02:30 PM',
    details: 'Assigned: Rajesh Kumar • Completed',
    status: 'Completed',
    cost: 1200.00
  },
  {
    id: 'bk-003',
    title: 'Airport Taxi Booking',
    type: 'ride',
    dateTime: 'Sept 15, 2026, 08:45 AM',
    details: 'Terminal 1 • Completed',
    status: 'Completed',
    cost: 800.00
  }
];

export default function BookingsTab() {
  const [activeTab, setActiveTab] = useState<'active' | 'past'>('active');

  const filteredBookings = MOCK_BOOKINGS.filter(b => 
    activeTab === 'active' ? b.status === 'Active' : b.status === 'Completed'
  );

  return (
    <section className="tab-screen" id="tab-booking">
      <div className="bookings-tab-container">
        <div className="bookings-tab-header">
          <h2><i className="fa-solid fa-calendar-check" style={{ color: 'var(--primary)', marginRight: '12px' }}></i> My Bookings</h2>
          <p>View and manage all your past and upcoming SART transport bookings.</p>
        </div>
        
        <div className="bookings-tabs-nav">
          <button 
            className={`booking-tab-btn ${activeTab === 'active' ? 'active' : ''}`}
            onClick={() => setActiveTab('active')}
          >
            Active Bookings
          </button>
          <button 
            className={`booking-tab-btn ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => setActiveTab('past')}
          >
            Past Bookings
          </button>
        </div>

        <div className="bookings-list">
          {filteredBookings.length > 0 ? (
            filteredBookings.map(booking => (
              <div key={booking.id} className="booking-card-item">
                <div className="booking-card-header">
                  <span className="booking-id">#{booking.id}</span>
                  <span className={`booking-status ${booking.status.toLowerCase()}`}>{booking.status}</span>
                </div>
                <h3 className="booking-title">{booking.title}</h3>
                <p className="booking-details">{booking.details}</p>
                <div className="booking-card-footer">
                  <span className="booking-date"><i className="fa-regular fa-clock"></i> {booking.dateTime}</span>
                  <span className="booking-cost">₹{booking.cost.toFixed(2)}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="no-bookings">
              <i className="fa-solid fa-box-open" style={{ fontSize: '64px', color: '#cbd5e1', marginBottom: '24px' }}></i>
              <p>No {activeTab} bookings found.</p>
              <button className="book-now-btn" onClick={() => (window as any).switchTab('home')}>Book a Service Now</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
