const fs = require('fs');
const content = fs.readFileSync('src/components/tabs/BookingsTab.tsx', 'utf-8');

// We want to extract the state variables and functions that BookingsTab uses for the booking details view.
// They start around `const [activeTab` and end before `if (!selectedVehicleType) {`
const stateMatch = content.match(/const \[activeTab[\s\S]*?(?=if \(!selectedVehicleType\) {)/);
const stateCode = stateMatch ? stateMatch[0] : '';

// The JSX for the booking view starts around `<div className="bookings-tab-container">`
// and ends before the `</section>` of BookingsTab
const jsxMatch = content.match(/<div className="bookings-tab-container">[\s\S]*?(?=<\/section>)/);
const jsxCode = jsxMatch ? jsxMatch[0] : '';

// Function to generate the component code
const createComponent = (name) => {
  return `import React, { useState } from 'react';
import jsPDF from 'jspdf';
import TrackingRoute from '../tracking';
import TicketConfirmation from '../Ticket';
import { Booking, MOCK_BOOKINGS, FLEET_ITEMS } from '../../data/mockBookings';
import '../tabs/BookingsTab.css'; // Reuse CSS

export default function ${name}({ selectedVehicleType, handleBackToFleet }: { selectedVehicleType: string, handleBackToFleet: () => void }) {
${stateCode}
  return (
    ${jsxCode}
  );
}
`;
};

fs.writeFileSync('src/components/booking-pages/road.tsx', createComponent('RoadBooking'));
fs.writeFileSync('src/components/booking-pages/sea.tsx', createComponent('SeaBooking'));
fs.writeFileSync('src/components/booking-pages/air.tsx', createComponent('AirBooking'));
fs.writeFileSync('src/components/booking-pages/train.tsx', createComponent('TrainBooking'));
