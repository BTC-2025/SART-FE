import React, { useEffect, useState } from 'react';
import './BookingsRegistryModal.css';

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
    dateTime: new Date(Date.now() + 172800000).toLocaleString(),
    details: 'Pickup: 10:00 AM • 3 Days Duration',
    status: 'Active',
    cost: 4500.00
  },
  {
    id: 'bk-002',
    title: 'Tire Diagnostics & Balance',
    type: 'mechanic',
    dateTime: new Date(Date.now() - 259200000).toLocaleString(),
    details: 'Assigned: Rajesh Kumar • Completed',
    status: 'Completed',
    cost: 1200.00
  },
  {
    id: 'bk-003',
    title: 'Airport Taxi Booking',
    type: 'ride',
    dateTime: new Date(Date.now() - 720000000).toLocaleString(),
    details: 'Terminal 1 • Completed',
    status: 'Completed',
    cost: 800.00
  }
];

export default function BookingsRegistryModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'active' | 'past'>('active');

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredBookings = MOCK_BOOKINGS.filter(b => 
    activeTab === 'active' ? b.status === 'Active' : b.status === 'Completed'
  );

  return (
    <div className="react-modal-overlay">
      <div className="react-modal-content slide-up">
        <div className="react-modal-header">
          <h2><i className="fa-solid fa-bag-shopping" style={{ color: 'var(--primary)' }}></i> My Bookings</h2>
          <button className="react-modal-close" onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        
        <div className="react-modal-body">
          <div className="bookings-tabs">
            <button 
              className={`booking-tab-btn ${activeTab === 'active' ? 'active' : ''}`}
              onClick={() => setActiveTab('active')}
            >
              Active
            </button>
            <button 
              className={`booking-tab-btn ${activeTab === 'past' ? 'active' : ''}`}
              onClick={() => setActiveTab('past')}
            >
              Past
            </button>
          </div>

          <div className="bookings-list">
            {filteredBookings.length > 0 ? (
              filteredBookings.map(booking => (
                <div key={booking.id} className="booking-card">
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
                <i className="fa-solid fa-box-open" style={{ fontSize: '48px', color: '#cbd5e1', marginBottom: '16px' }}></i>
                <p>No {activeTab} bookings found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
