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
      <div className="subnav-actions" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button className="subnav-btn btn-vendor" onClick={() => alert('SART Vendor Registration Panel loading...')}>
          <i className="fa-solid fa-store"></i> VENDOR
        </button>
        <button className="subnav-btn btn-wallet" onClick={() => (window as any).switchTab('wallet')}>
          <i className="fa-solid fa-wallet"></i> ₹15,000.00
        </button>
        <div className="ctrl-btn" onClick={() => alert('Help and Support')}>
          <i className="fa-solid fa-headset"></i>
        </div>
        <div className="ctrl-btn" onClick={() => (window as any).switchTab('profile')}>
          <i className="fa-solid fa-gear"></i>
        </div>
      </div>
    </div>
  );
}
