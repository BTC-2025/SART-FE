'use client';

import React, { useState, useEffect } from 'react';
import { useSartStore } from '@/store/useSartStore';
import SubNavbar from '@/components/SubNavbar';
import QuickBookingForm from '@/components/QuickBookingForm';
import MapEngine from '@/components/MapEngine';
import NewsFeed from '@/components/NewsFeed';
import OffersSlider from '@/components/OffersSlider';
import './HomeTab.css';

export default function HomeTab() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { activeTab } = useSartStore();

  return (
    <section className={`tab-screen ${activeTab === 'home' ? 'active' : ''}`} id="tab-home">
      
      {/* 🖼️ New Panorama Hero Section */}
      <div className="new-hero-container">
        {/* SubNavbar Overlay */}
        <div className="hero-subnav-overlay">
          <SubNavbar />
        </div>

        {/* The Panorama Image */}
        <div className="hero-image-wrapper">
          <img src="/hero-new.jpg" alt="SART Universal Transport" className="hero-panorama-img" />
          
          {/* Invisible clickable overlays for the buttons in the image */}
          <div className="hero-click-area area-carrier" onClick={() => { if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('openReactModal', { detail: 'modal-carrier' })) }} title="Book Carrier"></div>
          <div className="hero-click-area area-rides" onClick={() => { if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('openReactModal', { detail: 'modal-ride' })) }} title="Book Ride"></div>
          <div className="hero-click-area area-rental" onClick={() => { if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('openReactModal', { detail: 'modal-rental' })) }} title="Rent Vehicle"></div>
          <div className="hero-click-area area-communities" onClick={() => { if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('openReactModal', { detail: 'modal-community' })) }} title="SART Communities"></div>
          <div className="hero-click-area area-parking" onClick={() => { if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('openReactModal', { detail: 'modal-parking' })) }} title="Find Parking"></div>
          <div className="hero-click-area area-drivers" onClick={() => { if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('openReactModal', { detail: 'modal-drivers' })) }} title="Hire Driver"></div>
        </div>
      </div>

      {/* Yellow Quick Booking Form (Below Truck) */}
      <QuickBookingForm />

      {/* Special Offers Carousel */}
      <OffersSlider />

      <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '24px' }}>
        <MapEngine />
        <NewsFeed />
      </div>

    </section>
  );
}

