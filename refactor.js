const fs = require('fs');
let content = fs.readFileSync('src/components/tabs/BookingsTab.tsx', 'utf-8');

// 1. Remove the mock data block
content = content.replace(/export interface Booking [\s\S]*?(?=export default function BookingsTab)/, '');

// 2. Add the imports at the top
content = content.replace("import TicketConfirmation from '../Ticket';", `import TicketConfirmation from '../Ticket';
import RoadBooking from '../booking-pages/road';
import SeaBooking from '../booking-pages/sea';
import AirBooking from '../booking-pages/air';
import TrainBooking from '../booking-pages/train';
import { Booking, MOCK_BOOKINGS, FLEET_CATEGORIES, FLEET_ITEMS } from '../../data/mockBookings';
`);

// 3. Remove the internal state and handlers (from `const [activeTab` to `if (!selectedVehicleType) {`)
// Wait, I will just write a regex that safely removes them.
const stateMatch = content.match(/const \[activeTab[\s\S]*?(?=if \(!selectedVehicleType\) {)/);
if (stateMatch) {
  content = content.replace(stateMatch[0], '');
}

// 4. Update the return block
// Before:
//   return (
//     <section className={`tab-screen ${globalActiveTab === 'booking' ? 'active' : ''}`} id="tab-booking">
//       {showTicketModalFor && ( ... )}
//       <div className="bookings-tab-container">
//        ...
//     </section>
//   );
// Now we replace everything after `if (!selectedVehicleType) { ... }` up to the end of the file.

const renderLogic = `
  const getCategory = (id: string) => {
    if (['bike', 'auto', 'car', 'suv', 'bus'].includes(id)) return 'Road';
    if (['boat', 'ship'].includes(id)) return 'Sea';
    if (['aeroplane', 'helicopter'].includes(id)) return 'Air';
    if (['train'].includes(id)) return 'Train';
    return '';
  };

  const category = getCategory(selectedVehicleType);

  return (
    <section className={\`tab-screen \${globalActiveTab === 'booking' ? 'active' : ''}\`} id="tab-booking">
      {category === 'Road' && <RoadBooking selectedVehicleType={selectedVehicleType} handleBackToFleet={handleBackToFleet} />}
      {category === 'Sea' && <SeaBooking selectedVehicleType={selectedVehicleType} handleBackToFleet={handleBackToFleet} />}
      {category === 'Air' && <AirBooking selectedVehicleType={selectedVehicleType} handleBackToFleet={handleBackToFleet} />}
      {category === 'Train' && <TrainBooking selectedVehicleType={selectedVehicleType} handleBackToFleet={handleBackToFleet} />}
    </section>
  );
}
`;

const jsxMatch = content.match(/return \(\s*<section className={`tab-screen[\s\S]*?<\/section>\s*\);\s*}\s*$/);
if (jsxMatch) {
  content = content.replace(jsxMatch[0], renderLogic);
} else {
  // If the regex didn't match perfectly, just do a more relaxed replacement
  const endMatch = content.match(/return \([\s\S]*$/);
  if (endMatch) content = content.replace(endMatch[0], renderLogic);
}

fs.writeFileSync('src/components/tabs/BookingsTab.tsx', content);
