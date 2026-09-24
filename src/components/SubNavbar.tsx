'use client';

import React from 'react';

export default function SubNavbar() {
  const openModal = (id: string) => {
    console.log('Opening modal:', id);
    // Connect to Zustand later
  };

  const switchTab = (tab: string) => {
    console.log('Switching to tab:', tab);
    // Connect to Zustand later
  };

  return (
    <div className="web-subnavbar">
      <div className="subnav-links">
        {/* Left side links removed per redesign request */}
      </div>
      <div className="subnav-actions" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button className="subnav-btn" onClick={() => alert('SART Vendor Registration Panel loading...')}>
          <i className="fa-solid fa-store" style={{ fontSize: '14px' }}></i> VENDOR
        </button>
        <button className="subnav-btn" onClick={() => (window as any).switchTab('wallet')}>
          <i className="fa-solid fa-wallet" style={{ fontSize: '14px' }}></i> ₹15,000.00
        </button>
        <div className="subnav-btn" onClick={() => alert('Help and Support')} style={{ padding: '2px 5px' }}>
          <i className="fa-solid fa-headset" style={{ fontSize: '14px' }}></i>
        </div>
        <div className="subnav-btn" onClick={() => (window as any).switchTab('profile')} style={{ padding: '2px 5px' }}>
          <i className="fa-solid fa-gear" style={{ fontSize: '14px' }}></i>
        </div>
      </div>
    </div>
  );
}
