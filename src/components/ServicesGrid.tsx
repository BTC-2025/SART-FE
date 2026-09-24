'use client';

import React from 'react';
import './ServicesGrid.css';

const SERVICES = [
  { id: 'modal-ride', title: 'Rides', tag: 'Road', rating: 4.9, icon: '🚗', price: 'From ₹800', colorClass: 'rec-card-red', pos: { left: '17.7%', top: '79.5%' } },
  { id: 'modal-carrier', title: 'Carrier', tag: 'Logistics', rating: 4.8, icon: '🚛', price: 'From ₹3,500', colorClass: 'rec-card-orange', pos: { left: '25.6%', top: '79.5%' } },
  { id: 'modal-rental', title: 'Rental', tag: 'Self-Drive', rating: 4.9, icon: '🔑', price: 'From ₹1,800/day', colorClass: 'rec-card-blue', pos: { left: '33.4%', top: '79.5%' } },
  { id: 'modal-community', title: 'Community', tag: 'Shared', rating: 4.7, icon: '👥', price: 'Ride Pooling', colorClass: 'rec-card-purple', pos: { left: '59.9%', top: '79.5%' } },
  { id: 'modal-drivers', title: 'Drivers', tag: 'On Demand', rating: 4.8, icon: '👨‍✈️', price: 'From ₹1,200', colorClass: 'rec-card-green', pos: { left: '68.1%', top: '79.5%' } },
  { id: 'modal-parking', title: 'Parking', tag: 'Shared', rating: 4.6, icon: '🅿️', price: 'From ₹150', colorClass: 'rec-card-teal', pos: { left: '83.1%', top: '79.5%' } },
  { id: 'modal-mechanic', title: 'Mechanic', tag: 'Service', rating: 4.8, icon: '🔧', price: 'From ₹1,200', colorClass: 'rec-card-slate', pos: { left: '91.2%', top: '79.5%' } },
];

export default function ServicesGrid() {
  const openModal = (id: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('openReactModal', { detail: id }));
    }
  };

  return (
    <div className="recommended-section" style={{ position: 'static' }}>
      <h2 style={{
        position: 'absolute',
        top: '62%', /* Positions the heading on the brown chassis rail */
        left: '-8%', /* Shifted slightly to the left */
        width: '100%',
        textAlign: 'center',
        fontSize: '15px',
        fontWeight: 900,
        color: '#fff',
        textShadow: '0 2px 10px rgba(0,0,0,0.8)',
        letterSpacing: '2px',
        zIndex: 10
      }}>Book a Services</h2>

      <div className="tire-grid">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="tire-card"
            onClick={() => openModal(service.id)}
            style={{ left: service.pos.left, top: service.pos.top }}
          >
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
