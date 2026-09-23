'use client';

import React, { useState, useEffect } from 'react';
import ServicesGrid from '@/components/ServicesGrid';
import QuickBookingForm from '@/components/QuickBookingForm';
import MapEngine from '@/components/MapEngine';
import NewsFeed from '@/components/NewsFeed';
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
      
      {/* Full Width Sliding Banner */}
      <div className="hero-sliding-banner">
        <div 
          className="hero-slider-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* Slide 1: Cargo / Logistics Image */}
          <div 
            className="hero-slide-item" 
            style={{ backgroundImage: "url('/hero-left.jpg')" }}
          >
          </div>

          {/* Slide 2: Rides / Personal Image */}
          <div 
            className="hero-slide-item" 
            style={{ backgroundImage: "url('/hero-right.jpg')" }}
          >
          </div>
        </div>
      </div>

      {/* SART Transport Services Grid Component (Spinning Tires) */}
      <ServicesGrid />

      {/* Yellow Quick Booking Form */}
      <QuickBookingForm />

      <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '24px' }}>
        <MapEngine />
        <NewsFeed />
      </div>

    </section>
  );
}
