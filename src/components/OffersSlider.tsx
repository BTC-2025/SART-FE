import React, { useState, useRef } from 'react';
import './OffersSlider.css';

const OFFERS = [
  { id: 1, title: "Short Trip Offer", discount: "5% OFF", desc: "Use code STMB5 and get 5% off upto ₹500", code: "STMB5" },
  { id: 2, title: "Special 5 Day offer", discount: "10% OFF", desc: "Use code STMB10 and get 10% off upto ₹1000", code: "STMB10" },
  { id: 3, title: "Long Trip Offer", discount: "15% OFF", desc: "Use code STMB15 and get 15% off upto ₹2000", code: "STMB15" },
  { id: 4, title: "New User Offer", discount: "20% OFF", desc: "Use code NEW20 and get 20% off upto ₹500", code: "NEW20" },
  { id: 5, title: "Weekend Getaway", discount: "12% OFF", desc: "Use code WKND12 and get 12% off upto ₹1500", code: "WKND12" }
];

export default function OffersSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (currentIndex < OFFERS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="offers-container">
      <div className="offers-header">
        <h2>Offers</h2>
        <div className="offers-nav">
          <button className="offers-nav-btn" onClick={handlePrev} disabled={currentIndex === 0}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="offers-nav-btn" onClick={handleNext} disabled={currentIndex >= OFFERS.length - 3}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="offers-slider-wrapper">
        <div 
          className="offers-slider-track" 
          ref={trackRef}
          style={{ transform: `translateX(calc(-${currentIndex * 33.333}% - ${currentIndex * 5.3}px))` }} // ~16px gap math
        >
          {OFFERS.map((offer) => (
            <div key={offer.id} className="offer-card">
              <div className="offer-card-top">
                <div className="offer-title-row">
                  <h3 className="offer-title">{offer.title}</h3>
                  <span className="offer-discount">{offer.discount}</span>
                </div>
                <p className="offer-desc">{offer.desc}</p>
              </div>
              
              <div className="offer-card-bottom" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23199c95' fill-opacity='1' d='M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,213.3C960,224,1056,224,1152,213.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom',
                backgroundRepeat: 'no-repeat'
              }}>
                <span className="offer-code">{offer.code}</span>
                <span className="offer-tnc">T&C</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
