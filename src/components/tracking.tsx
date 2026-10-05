import React from 'react';
import { Booking } from './tabs/BookingsTab';
import './tracking.css';

interface TrackingProps {
  trackingResult: Booking;
}

export default function TrackingRoute({ trackingResult }: TrackingProps) {
  const isTrain = trackingResult.type === 'train';
  const isBus = trackingResult.type === 'bus';
  const isFlight = trackingResult.type === 'aeroplane';
  const isShip = trackingResult.type === 'ship';
  const isCar = trackingResult.type === 'car' || trackingResult.type === 'auto' || trackingResult.type === 'bike';

  const getVehicleIcon = () => {
    if (isTrain) return 'fa-train';
    if (isBus) return 'fa-bus';
    if (isFlight) return 'fa-plane';
    if (isShip) return 'fa-ship';
    if (isCar) return 'fa-car';
    return 'fa-location-dot';
  };

  // If there are no explicitly defined stops, create a 2-stop default journey for the visual
  const stops = trackingResult.stops && trackingResult.stops.length > 0 ? trackingResult.stops : [
    { name: trackingResult.source, time: trackingResult.sourceTime, status: 'past', km: '0 km' },
    { name: trackingResult.destination, time: trackingResult.destinationTime, status: trackingResult.isActive ? 'future' : 'past', km: '---' }
  ];

  // Calculate the position of the marker based on active status
  // 0% is start, 100% is end. If it's cancelled, we don't show the marker in transit.
  let markerPosition = "0%";
  let activeLineHeight = "0%";
  
  if (trackingResult.isCancelled) {
    markerPosition = "-10%"; // hide it or keep it at top
    activeLineHeight = "0%";
  } else if (!trackingResult.isActive) {
    // Journey completed
    markerPosition = "100%";
    activeLineHeight = "100%";
  } else {
    // Journey active, let's just place it at 50% for visual purposes
    markerPosition = "50%";
    activeLineHeight = "50%";
  }

  return (
    <div className="live-tracking-dark">
      <div className="live-tracking-header">
        <h3 className="live-tracking-title">
          <i className="fa-solid fa-arrow-left" style={{ marginRight: 12, cursor: 'pointer' }}></i>
          {trackingResult.number} - {trackingResult.title}
        </h3>
        <i className="fa-solid fa-ellipsis-vertical" style={{ cursor: 'pointer' }}></i>
      </div>

      <div className="live-tracking-tabs">
        <span>Today <i className="fa-solid fa-caret-down"></i></span>
        <span><i className="fa-regular fa-clock"></i> Alarm</span>
        <span><i className={`fa-solid ${getVehicleIcon()}`}></i> Details</span>
        <span><i className="fa-solid fa-share-nodes"></i> Share</span>
      </div>

      <div className="live-tracking-columns">
        <div className="col-arrival">Arrival</div>
        <div className="col-station">Day 1 - {trackingResult.sourceDate || 'Today'}</div>
        <div className="col-departure">Departure</div>
      </div>

      <div className="live-timeline-container">
        <div className="live-timeline-line"></div>
        <div className="live-timeline-line active" style={{ height: activeLineHeight }}></div>
        
        {trackingResult.isActive && !trackingResult.isCancelled && (
          <div className="live-vehicle-marker" style={{ top: markerPosition }}>
            <i className={`fa-solid ${getVehicleIcon()}`}></i>
          </div>
        )}

        {stops.map((stop, idx) => {
          const isPassed = stop.status === 'past' || (!trackingResult.isActive && !trackingResult.isCancelled);
          return (
            <div key={idx} className="live-stop-row">
              <div className="live-stop-time arrival">
                <strong>{idx === 0 ? '---' : stop.time}</strong>
                <span>{idx === 0 ? '' : '---'}</span>
              </div>
              
              <div className="live-stop-center">
                <div className={`live-dot ${isPassed ? 'passed' : ''}`}></div>
                <div className="live-station-info">
                  <h4>{stop.name}</h4>
                  <p>{(stop as any).km || (idx * 15) + ' km'}</p>
                  
                  {idx === 0 && trackingResult.sourcePlatform && (
                    <span className="live-platform-badge">
                      {isFlight ? 'Gate' : isBus ? 'Bay' : isShip ? 'Pier' : 'Platform'} {trackingResult.sourcePlatform} <i className="fa-solid fa-pen"></i>
                    </span>
                  )}
                  {idx === stops.length - 1 && trackingResult.destinationPlatform && (
                    <span className="live-platform-badge">
                      {isFlight ? 'Gate' : isBus ? 'Bay' : isShip ? 'Pier' : 'Platform'} {trackingResult.destinationPlatform} <i className="fa-solid fa-pen"></i>
                    </span>
                  )}
                </div>
              </div>

              <div className="live-stop-time departure">
                <strong>{idx === stops.length - 1 ? '---' : stop.time}</strong>
                <span>{idx === stops.length - 1 ? '' : '---'}</span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="live-status-footer">
        <div className="live-status-text">
          {trackingResult.isCancelled ? (
            <h4 style={{color: '#ef4444'}}>Journey Cancelled</h4>
          ) : !trackingResult.isActive ? (
            <h4 style={{color: '#10b981'}}>Arrived at {trackingResult.destination}</h4>
          ) : (
            <h4>Arriving {stops[Math.floor(stops.length / 2)]?.name || 'Next Stop'}</h4>
          )}
          <p>Updated few seconds ago</p>
        </div>
        <button className="live-refresh-btn">
          <i className="fa-solid fa-rotate-right"></i>
        </button>
      </div>
    </div>
  );
}
