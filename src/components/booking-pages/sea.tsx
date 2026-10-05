import React from 'react';
import '../tabs/BookingsTab.css';

export default function SeaBooking({ selectedVehicleType, handleBackToFleet }: { selectedVehicleType: string, handleBackToFleet: () => void }) {
  return (
    <div className="bookings-tab-container fleet-selection-container" style={{ minHeight: '80vh', padding: '20px' }}>
      <div className="bookings-top-actions" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
        <button 
          onClick={handleBackToFleet}
          style={{ padding: '10px 20px', backgroundColor: 'black', color: 'white', borderRadius: '8px', cursor: 'pointer', border: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <i className="fa-solid fa-arrow-left"></i> Back to Fleet
        </button>
        <h2 style={{ margin: 0, textTransform: 'capitalize' }}>{selectedVehicleType} Booking</h2>
      </div>

      <div className="booking-interface-placeholder" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* We will build the Google Maps direction UI here */}
        <div style={{ padding: '40px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '2px dashed #cbd5e1', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '10px' }}>New SeaBooking Interface</h3>
          <p style={{ color: '#64748b' }}>Ready to integrate Google Maps location and directions for {selectedVehicleType}.</p>
        </div>
      </div>
    </div>
  );
}
