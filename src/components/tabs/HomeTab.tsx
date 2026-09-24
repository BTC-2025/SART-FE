'use client';

import React, { useState, useEffect } from 'react';
import SubNavbar from '@/components/SubNavbar';
import ServicesGrid from '@/components/ServicesGrid';
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

  return (
    <section className="tab-screen active" id="tab-home">
      
      {/* 🚚 Massive Truck Hero Section */}
      <div className="truck-hero-container">
        
        {/* SubNavbar placed at top right of the truck banner */}
        <div className="truck-subnav-overlay">
          <SubNavbar />
        </div>

        {/* Cargo Container (Sliding Carousel) */}
        <div className="truck-cargo-overlay">
          <div className="hero-sliding-banner">
            <div 
              className="hero-slider-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="hero-slide-item" style={{ backgroundImage: "url('/hero-left.jpg')" }}></div>
              <div className="hero-slide-item" style={{ backgroundImage: "url('/hero-right.jpg')" }}></div>
            </div>
          </div>
        </div>

        {/* Truck Wheels (SART Transport Services Grid) */}
        <div className="truck-wheels-overlay">
          <ServicesGrid />
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

