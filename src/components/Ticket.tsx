import React, { useState } from 'react';
import { Booking } from '../data/mockBookings';
import './Ticket.css';

interface TicketProps {
  booking: Booking;
  onClose: () => void;
}

export default function TicketConfirmation({ booking, onClose }: TicketProps) {
  const isTrain = booking.type === 'train';
  const isFlight = booking.type === 'aeroplane' || booking.type === 'helicopter';
  const isWater = booking.type === 'ship' || booking.type === 'boat' || booking.type === 'cruise';
  const isRoad = booking.type === 'bus' || booking.type === 'car' || booking.type === 'auto' || booking.type === 'bike';

  const themeClass = isFlight ? 'flight-theme' : isWater ? 'water-theme' : isRoad ? 'road-theme' : 'train-theme';

  const [currentClass, setCurrentClass] = useState(booking.seatStatus || (isFlight ? 'Economy' : 'Standard'));
  const [upgraded, setUpgraded] = useState(false);

  const handleUpgrade = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentClass(e.target.value);
    setUpgraded(true);
  };

  return (
    <div className="ticket-overlay">
      <div className="ticket-modal">
        <div className="ticket-actions">
          <button className="close-ticket" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
        </div>

        {/* Realistic Ticket Visual */}
        <div className={`realistic-ticket ${themeClass}`}>
          <div className="ticket-left">
            <div className="ticket-header">
              <h3>
                <i className={`fa-solid ${isFlight ? 'fa-plane' : isWater ? 'fa-ship' : isRoad ? 'fa-car' : 'fa-train'}`}></i> 
                {' '}{booking.title}
              </h3>
            </div>
            
            <div className="ticket-body">
              <div className="ticket-row">
                <div className="ticket-field">
                  <span>PASSENGER NAME</span>
                  <strong>{booking.passengerName}</strong>
                </div>
                <div className="ticket-field">
                  <span>DATE</span>
                  <strong>{booking.sourceDate}</strong>
                </div>
                <div className="ticket-field">
                  <span>TIME</span>
                  <strong>{booking.sourceTime}</strong>
                </div>
              </div>

              <div className="ticket-row route-row">
                <div className="ticket-field">
                  <span>FROM</span>
                  <strong>{booking.source} ({booking.sourceCode})</strong>
                </div>
                <div className="ticket-field text-right">
                  <span>TO</span>
                  <strong>{booking.destination} ({booking.destinationCode})</strong>
                </div>
              </div>

              <div className="ticket-row highlight-row">
                <div className="ticket-field highlight">
                  <span>{isFlight ? 'FLIGHT' : isWater ? 'CRUISE' : isRoad ? 'VEHICLE' : 'TRAIN'}</span>
                  <strong>{booking.number}</strong>
                </div>
                <div className="ticket-field highlight">
                  <span>{isFlight ? 'GATE' : isWater ? 'PIER' : isRoad ? 'BAY/SPOT' : 'PLATFORM'}</span>
                  <strong>{booking.sourcePlatform || 'TBA'}</strong>
                </div>
                <div className="ticket-field highlight">
                  <span>SEAT</span>
                  <strong>24A</strong>
                </div>
                <div className="ticket-field highlight">
                  <span>CLASS</span>
                  <strong>{currentClass}</strong>
                </div>
              </div>

              <div className="ticket-footer">
                <p><i className="fa-solid fa-circle-exclamation"></i> IMPORTANT NOTE: You should be at the boarding point 45 mins before.</p>
              </div>
            </div>
          </div>
          
          <div className="ticket-right">
            <div className="ticket-right-header">
              <h3>BOARDING PASS</h3>
            </div>
            <div className="ticket-right-body">
              <div className="ticket-field">
                <span>PASSENGER</span>
                <strong>{booking.passengerName}</strong>
              </div>
              <div className="ticket-route-sm">
                <p><i className="fa-solid fa-plane-departure"></i> FROM <strong>{booking.sourceCode}</strong></p>
                <p><i className="fa-solid fa-plane-arrival"></i> TO <strong>{booking.destinationCode}</strong></p>
              </div>
              <div className="big-route">
                {booking.sourceCode} <i className="fa-solid fa-arrow-right"></i> {booking.destinationCode}
              </div>
            </div>
          </div>
        </div>

        {/* Upgrade Section */}
        {(isFlight || isTrain) && (
          <div className="upgrade-section">
            <h4><i className="fa-solid fa-arrow-up-right-dots"></i> Upgrade Your Class</h4>
            <p>Select an available class below to instantly upgrade your ticket before chart preparation.</p>
            
            <div className="upgrade-control">
              <select value={currentClass} onChange={handleUpgrade}>
                {isTrain ? (
                  <>
                    <option value="Sleeper">Sleeper (Current)</option>
                    <option value="AC 3 Tier">AC 3 Tier (+₹500)</option>
                    <option value="AC 2 Tier">AC 2 Tier (+₹1000)</option>
                    <option value="AC 1st Class">AC 1st Class (+₹2000)</option>
                  </>
                ) : (
                  <>
                    <option value="Economy">Economy (Current)</option>
                    <option value="Premium Economy">Premium Economy (+$50)</option>
                    <option value="Business Class">Business Class (+$200)</option>
                    <option value="First Class">First Class (+$500)</option>
                  </>
                )}
              </select>
              {upgraded && <span className="upgrade-success"><i className="fa-solid fa-check"></i> Upgraded successfully!</span>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
