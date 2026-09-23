'use client';

import React from 'react';
import './ServicesGrid.css';

const SERVICES = [
  { id: 'modal-ride', title: 'Rides', tag: 'Road', rating: 4.9, icon: '🚗', price: 'From ₹800', colorClass: 'rec-card-red' },
  { id: 'modal-carrier', title: 'Carrier', tag: 'Logistics', rating: 4.8, icon: '🚛', price: 'From ₹3,500', colorClass: 'rec-card-orange' },
  { id: 'modal-rental', title: 'Rental', tag: 'Self-Drive', rating: 4.9, icon: '🔑', price: 'From ₹1,800/day', colorClass: 'rec-card-blue' },
  { id: 'modal-community', title: 'Community', tag: 'Shared', rating: 4.7, icon: '👥', price: 'Ride Pooling', colorClass: 'rec-card-purple' },
  { id: 'modal-drivers', title: 'Drivers', tag: 'On Demand', rating: 4.8, icon: '👨‍✈️', price: 'From ₹1,200', colorClass: 'rec-card-green' },
  { id: 'modal-parking', title: 'Parking', tag: 'Shared', rating: 4.6, icon: '🅿️', price: 'From ₹150', colorClass: 'rec-card-teal' },
  { id: 'modal-mechanic', title: 'Mechanic', tag: 'Service', rating: 4.8, icon: '🔧', price: 'From ₹1,200', colorClass: 'rec-card-slate' },
];

export default function ServicesGrid() {
  const openModal = (id: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('openReactModal', { detail: id }));
    }
  };

  return (
    <div className="recommended-section">
      <h2 style={{ fontSize: '20px', fontWeight: 900, marginBottom: '24px' }}>Book a Service</h2>
      
      <div className="tire-grid">
        {SERVICES.map((service) => (
          <div key={service.id} className="tire-card" onClick={() => openModal(service.id)}>
            {/* The outer rotating tire assembly */}
            <div className={`tire-outer-assembly ${service.colorClass}`}>
              {/* Outer Rubber Tire */}
              <div className="tire-rubber">
                {/* Treads */}
                <div className="tire-tread" style={{ transform: 'rotate(0deg)' }}></div>
                <div className="tire-tread" style={{ transform: 'rotate(30deg)' }}></div>
                <div className="tire-tread" style={{ transform: 'rotate(60deg)' }}></div>
                <div className="tire-tread" style={{ transform: 'rotate(90deg)' }}></div>
                <div className="tire-tread" style={{ transform: 'rotate(120deg)' }}></div>
                <div className="tire-tread" style={{ transform: 'rotate(150deg)' }}></div>
              </div>
              
              {/* Inner Alloy Wheel (No Star) */}
              <div className="tire-alloy">
              </div>
            </div>

            {/* The stationary center cap (Rolls-Royce style) */}
            <div className="tire-center-cap">
              <span className="tire-icon">{service.icon}</span>
              <span className="tire-title">{service.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
