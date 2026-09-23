'use client';

import React from 'react';
import './QuickBookingForm.css';

export default function QuickBookingForm() {
  return (
    <div className="quick-booking-container">
      <h2 className="quick-booking-title">Choose Your Ride</h2>
      
      <div className="quick-booking-form">
        {/* Pickup Field */}
        <div className="qb-field">
          <label>PICKUP</label>
          <div className="qb-input-wrap">
            <input type="text" placeholder="Enter Pickup Location" />
            <i className="fa-solid fa-location-crosshairs target-icon"></i>
          </div>
        </div>

        {/* Drop Field */}
        <div className="qb-field">
          <label>DROP</label>
          <div className="qb-input-wrap">
            <input type="text" placeholder="Enter Drop Location" />
          </div>
        </div>

        {/* When Field */}
        <div className="qb-field">
          <label>WHEN</label>
          <div className="qb-input-wrap">
            <input type="datetime-local" />
          </div>
        </div>

        {/* Choose Ride Field */}
        <div className="qb-field">
          <label>RIDE TYPE</label>
          <div className="qb-input-wrap">
            <select>
              <optgroup label="Road - Micro-Mobility">
                <option value="bike">Bike / Moto</option>
                <option value="escooter">Electric Scooter</option>
                <option value="auto">Auto-Rickshaw</option>
                <option value="erickshaw">E-Rickshaw</option>
              </optgroup>
              <optgroup label="Road - Cabs & Sedans">
                <option value="micro">Micro Hatchback</option>
                <option value="sedan">Standard Sedan</option>
                <option value="exec">Executive Sedan</option>
                <option value="luxury">Luxury Sedan</option>
              </optgroup>
              <optgroup label="Road - SUVs & Minivans">
                <option value="csuv">Compact SUV</option>
                <option value="psuv">Premium SUV</option>
                <option value="lsuv">Large SUV / XL</option>
                <option value="minivan">Minivan / Maxi-Cab</option>
              </optgroup>
              <optgroup label="Road - Cargo & Logistics">
                <option value="delivery">Delivery Bike</option>
                <option value="minitruck">Mini-Truck</option>
                <option value="pickup">Pickup Truck</option>
                <option value="heavytruck">Heavy Truck</option>
              </optgroup>
              <optgroup label="Air & Sea">
                <option value="helicopter">Helicopter</option>
                <option value="privatejet">Private Jet</option>
                <option value="motorboat">Motorboat</option>
                <option value="yacht">Luxury Yacht</option>
              </optgroup>
            </select>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="qb-action">
        <button className="qb-confirm-btn">CONFIRM BOOKING</button>
      </div>
    </div>
  );
}
