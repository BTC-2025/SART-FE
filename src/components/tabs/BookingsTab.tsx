import React, { useState, useEffect } from 'react';
import './BookingsTab.css';
import { useSartStore } from '@/store/useSartStore';
import jsPDF from 'jspdf';

interface Booking {
  id: string;
  title: string;
  number: string;
  type: string;
  image: string;
  source: string;
  sourceCode: string;
  sourceTime: string;
  sourceDate: string;
  sourcePlatform?: string;
  destination: string;
  destinationCode: string;
  destinationTime: string;
  destinationDate: string;
  destinationPlatform?: string;
  duration: string;
  bookingId: string;
  pnr?: string;
  passengerName: string;
  seatStatus: string;
  statusBadge: string;
  statusText: string;
  isActive: boolean;
  isCancelled?: boolean;
  txnId?: string;
  txnDate?: string;
  refundId?: string;
  transactionAmount?: number;
  refundAmount?: number;
  cancellationFee?: number;
  bankName?: string;
}

const MOCK_BOOKINGS: Booking[] = [
  // --- PAST BOOKINGS (isActive: false, isCancelled: false) ---
  {
    id: 'bk-001',
    title: 'SIMHAPURI SF EX',
    number: '12709',
    type: 'train',
    image: 'https://img.icons8.com/fluency/96/train.png',
    source: 'Nellore',
    sourceCode: 'NLR',
    sourceTime: '19:00',
    sourceDate: 'Sun, 15 Mar 26',
    sourcePlatform: 'PF2',
    destination: 'Secunderabad Jn',
    destinationCode: 'SC',
    destinationTime: '05:45',
    destinationDate: 'Mon, 16 Mar 26',
    destinationPlatform: 'PF9',
    duration: '10h 45m',
    bookingId: 'NR7616577733376141',
    pnr: '4646850222',
    passengerName: 'P Vasanth',
    seatStatus: 'RAC/S3/55',
    statusBadge: 'RAC',
    statusText: 'Hope you had a nice journey !!',
    isActive: false,
    isCancelled: false
  },
  {
    id: 'bk-005',
    title: 'Luxury Sedan Taxi',
    number: 'CAB 99',
    type: 'car',
    image: 'https://img.icons8.com/fluency/96/car.png',
    source: 'Airport T1',
    sourceCode: 'APT',
    sourceTime: '11:00',
    sourceDate: 'Sun, 08 Mar 26',
    destination: 'Banjara Hills',
    destinationCode: 'BJH',
    destinationTime: '12:00',
    destinationDate: 'Sun, 08 Mar 26',
    duration: '1h',
    bookingId: 'CB555666777',
    passengerName: 'P Vasanth',
    seatStatus: 'Completed',
    statusBadge: 'CMP',
    statusText: 'Hope you had a nice journey !!',
    isActive: false,
    isCancelled: false
  },
  // --- UPCOMING BOOKINGS (isActive: true, isCancelled: false) ---
  {
    id: 'bk-002',
    title: 'City Auto Rickshaw',
    number: 'AP16 1234',
    type: 'auto',
    image: 'https://img.icons8.com/fluency/96/auto-rickshaw.png',
    source: 'Ameerpet',
    sourceCode: 'AMT',
    sourceTime: '09:00',
    sourceDate: 'Mon, 16 Nov 26',
    destination: 'Hitech City',
    destinationCode: 'HTC',
    destinationTime: '09:45',
    destinationDate: 'Mon, 16 Nov 26',
    duration: '45m',
    bookingId: 'AU123456789',
    passengerName: 'P Vasanth',
    seatStatus: 'Confirmed',
    statusBadge: 'CNF',
    statusText: 'Your ride is approaching.',
    isActive: true,
    isCancelled: false
  },
  {
    id: 'bk-003',
    title: 'Royal Enfield Classic',
    number: 'RE 350',
    type: 'bike',
    image: 'https://img.icons8.com/fluency/96/motorcycle.png',
    source: 'Rental Hub East',
    sourceCode: 'RHE',
    sourceTime: '10:00',
    sourceDate: 'Tue, 17 Nov 26',
    destination: 'Rental Hub East',
    destinationCode: 'RHE',
    destinationTime: '10:00',
    destinationDate: 'Wed, 18 Nov 26',
    duration: '24h',
    bookingId: 'BK987654321',
    passengerName: 'P Vasanth',
    seatStatus: 'Booked',
    statusBadge: 'CNF',
    statusText: 'Vehicle is ready for pickup.',
    isActive: true,
    isCancelled: false
  },
  {
    id: 'bk-004',
    title: 'Coastal Cruise',
    number: 'CRZ 001',
    type: 'ship',
    image: 'https://img.icons8.com/fluency/96/cruise-ship.png',
    source: 'Vizag Port',
    sourceCode: 'VZG',
    sourceTime: '16:00',
    sourceDate: 'Fri, 20 Nov 26',
    destination: 'Chennai Port',
    destinationCode: 'MAA',
    destinationTime: '08:00',
    destinationDate: 'Sat, 21 Nov 26',
    duration: '16h',
    bookingId: 'SH112233445',
    passengerName: 'P Vasanth',
    seatStatus: 'Cabin 4B',
    statusBadge: 'CNF',
    statusText: 'Boarding passes generated.',
    isActive: true,
    isCancelled: false
  },
  // --- CANCELLED BOOKINGS (isActive: false, isCancelled: true) ---
  {
    id: 'bk-006',
    title: 'KUMBHA EXPRESS',
    number: '12369',
    type: 'train',
    image: 'https://img.icons8.com/fluency/96/train.png',
    source: 'HOWRAH JN',
    sourceCode: 'HWH',
    sourceTime: '13:00',
    sourceDate: 'Mon, 23 Oct 23',
    destination: 'DEHRADUN',
    destinationCode: 'DDN',
    destinationTime: '18:05',
    destinationDate: 'Tue, 24 Oct 23',
    duration: '29h 05m',
    bookingId: 'NR6521580616',
    pnr: '6521580616',
    passengerName: 'P Vasanth',
    seatStatus: 'Cancelled',
    statusBadge: 'CAN',
    statusText: 'Booking Cancelled',
    isActive: false,
    isCancelled: true,
    txnId: '100004261105575',
    txnDate: 'SUN, 25 JUN',
    refundId: '100000807194418',
    transactionAmount: 1368.40,
    refundAmount: 1230.00,
    cancellationFee: 138.40,
    bankName: 'Credit & Debit cards / UPI (Powered by IRCTC iPay)'
  },
  {
    id: 'bk-007',
    title: 'Indigo Airlines',
    number: '6E-452',
    type: 'aeroplane',
    image: 'https://img.icons8.com/fluency/96/airplane-take-off.png',
    source: 'Mumbai',
    sourceCode: 'BOM',
    sourceTime: '14:30',
    sourceDate: 'Wed, 01 Nov 26',
    destination: 'Delhi',
    destinationCode: 'DEL',
    destinationTime: '16:45',
    destinationDate: 'Wed, 01 Nov 26',
    duration: '2h 15m',
    bookingId: 'FL883920192',
    pnr: 'XJ89KL',
    passengerName: 'P Vasanth',
    seatStatus: 'Cancelled',
    statusBadge: 'CAN',
    statusText: 'Flight Cancelled',
    isActive: false,
    isCancelled: true,
    txnId: 'FLTXN9002881',
    txnDate: 'MON, 15 OCT',
    refundId: 'REF9002881',
    transactionAmount: 5400.00,
    refundAmount: 4900.00,
    cancellationFee: 500.00,
    bankName: 'NetBanking (HDFC Bank)'
  },
  {
    id: 'bk-008',
    title: 'Orange Travels AC Sleeper',
    number: 'AP09 8899',
    type: 'bus',
    image: 'https://img.icons8.com/fluency/96/bus.png',
    source: 'Hyderabad',
    sourceCode: 'HYD',
    sourceTime: '22:00',
    sourceDate: 'Fri, 10 Nov 26',
    destination: 'Bangalore',
    destinationCode: 'BLR',
    destinationTime: '06:30',
    destinationDate: 'Sat, 11 Nov 26',
    duration: '8h 30m',
    bookingId: 'BS33459981',
    pnr: 'B-899120',
    passengerName: 'P Vasanth',
    seatStatus: 'Cancelled',
    statusBadge: 'CAN',
    statusText: 'Bus Booking Cancelled',
    isActive: false,
    isCancelled: true,
    txnId: 'BSTXN776655',
    txnDate: 'THU, 02 NOV',
    refundId: 'REF776655',
    transactionAmount: 1800.00,
    refundAmount: 1650.00,
    cancellationFee: 150.00,
    bankName: 'UPI (Google Pay)'
  },
  {
    id: 'bk-009',
    title: 'Outstation SUV Rentals',
    number: 'TS07 EZ 1122',
    type: 'car',
    image: 'https://img.icons8.com/fluency/96/car.png',
    source: 'Home',
    sourceCode: 'HYD',
    sourceTime: '08:00',
    sourceDate: 'Sun, 12 Nov 26',
    destination: 'Vijayawada',
    destinationCode: 'VZA',
    destinationTime: '14:00',
    destinationDate: 'Sun, 12 Nov 26',
    duration: '6h 00m',
    bookingId: 'CR44556677',
    passengerName: 'P Vasanth',
    seatStatus: 'Cancelled',
    statusBadge: 'CAN',
    statusText: 'Cab Cancelled',
    isActive: false,
    isCancelled: true,
    txnId: 'CRTXN998877',
    txnDate: 'TUE, 07 NOV',
    refundId: 'REF998877',
    transactionAmount: 3500.00,
    refundAmount: 3000.00,
    cancellationFee: 500.00,
    bankName: 'Credit Card (SBI)'
  },
  {
    id: 'bk-010',
    title: 'Andaman Ferry Express',
    number: 'AF-102',
    type: 'ship',
    image: 'https://img.icons8.com/fluency/96/cruise-ship.png',
    source: 'Port Blair',
    sourceCode: 'IXZ',
    sourceTime: '07:30',
    sourceDate: 'Mon, 13 Nov 26',
    destination: 'Havelock',
    destinationCode: 'HVK',
    destinationTime: '09:00',
    destinationDate: 'Mon, 13 Nov 26',
    duration: '1h 30m',
    bookingId: 'SH88776655',
    passengerName: 'P Vasanth',
    seatStatus: 'Cancelled',
    statusBadge: 'CAN',
    statusText: 'Ferry Cancelled',
    isActive: false,
    isCancelled: true,
    txnId: 'SHTXN112233',
    txnDate: 'WED, 08 NOV',
    refundId: 'REF112233',
    transactionAmount: 1200.00,
    refundAmount: 1000.00,
    cancellationFee: 200.00,
    bankName: 'UPI (PhonePe)'
  },
  {
    id: 'bk-011',
    title: 'Activa 6G Rental',
    number: 'TS08 BC 9900',
    type: 'bike',
    image: 'https://img.icons8.com/fluency/96/motorcycle.png',
    source: 'Secunderabad Hub',
    sourceCode: 'SC',
    sourceTime: '09:00',
    sourceDate: 'Wed, 15 Nov 26',
    destination: 'Secunderabad Hub',
    destinationCode: 'SC',
    destinationTime: '09:00',
    destinationDate: 'Thu, 16 Nov 26',
    duration: '24h',
    bookingId: 'BK11223344',
    passengerName: 'P Vasanth',
    seatStatus: 'Cancelled',
    statusBadge: 'CAN',
    statusText: 'Rental Cancelled',
    isActive: false,
    isCancelled: true,
    txnId: 'BKTXN445566',
    txnDate: 'FRI, 10 NOV',
    refundId: 'REF445566',
    transactionAmount: 400.00,
    refundAmount: 350.00,
    cancellationFee: 50.00,
    bankName: 'Wallet (Paytm)'
  },
  {
    id: 'bk-012',
    title: 'SART Logistics Parcel',
    number: 'AWB 9988776655',
    type: 'parcel',
    image: 'https://img.icons8.com/fluency/96/box.png',
    source: 'Hyderabad Hub',
    sourceCode: 'HYD',
    sourceTime: '18:00',
    sourceDate: 'Mon, 20 Nov 26',
    destination: 'Delhi Hub',
    destinationCode: 'DEL',
    destinationTime: '18:00',
    destinationDate: 'Wed, 22 Nov 26',
    duration: '48h',
    bookingId: 'PRC55667788',
    pnr: 'AWB998877',
    passengerName: 'P Vasanth (Sender)',
    seatStatus: 'Cancelled',
    statusBadge: 'CAN',
    statusText: 'Parcel Cancelled',
    isActive: false,
    isCancelled: true,
    txnId: 'PRCTXN223344',
    txnDate: 'SAT, 18 NOV',
    refundId: 'REF223344',
    transactionAmount: 850.00,
    refundAmount: 850.00,
    cancellationFee: 0.00,
    bankName: 'UPI (Amazon Pay)'
  }
];

export default function BookingsTab() {
  const [activeTab, setActiveTab] = useState<'active' | 'past' | 'cancelled'>('active');
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const { activeTab: globalActiveTab, setActiveTab: setGlobalActiveTab } = useSartStore();

  const navigateToTab = (tab: 'active' | 'past' | 'cancelled') => {
    setActiveTab(tab);
    setGlobalActiveTab('booking');
  };

  const navigateToDetails = (booking: Booking) => {
    setSelectedBooking(booking);
  };
  
  const navigateBack = () => {
    setSelectedBooking(null);
  };

  const handleDownloadTicket = (booking: Booking, e: React.MouseEvent) => {
    e.stopPropagation();
    
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(22);
    doc.setTextColor(139, 92, 246); // Violet
    doc.text('SART Transport Ticket', 105, 20, { align: 'center' });
    
    // Title
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(booking.title, 20, 40);
    
    // Booking IDs
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text(`Booking ID: ${booking.bookingId}`, 20, 50);
    if (booking.pnr) doc.text(`PNR: ${booking.pnr}`, 20, 60);
    
    doc.setLineWidth(0.5);
    doc.line(20, 70, 190, 70);
    
    // Journey
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text('Journey Details', 20, 85);
    
    doc.setFontSize(12);
    doc.text(`From: ${booking.source} (${booking.sourceCode})`, 20, 95);
    doc.text(`Departure: ${booking.sourceDate} at ${booking.sourceTime}`, 20, 105);
    
    doc.text(`To: ${booking.destination} (${booking.destinationCode})`, 105, 95);
    doc.text(`Arrival: ${booking.destinationDate} at ${booking.destinationTime}`, 105, 105);
    
    doc.text(`Duration: ${booking.duration}`, 20, 115);
    
    doc.line(20, 125, 190, 125);
    
    // Passenger
    doc.setFontSize(14);
    doc.text('Passenger Information', 20, 140);
    doc.setFontSize(12);
    doc.text(`Name: ${booking.passengerName}`, 20, 150);
    doc.text(`Seat / Status: ${booking.seatStatus} (${booking.statusBadge})`, 20, 160);
    
    doc.line(20, 170, 190, 170);
    
    // Footer
    doc.setFontSize(10);
    doc.text('Thank you for choosing SART.', 105, 190, { align: 'center' });
    
    doc.save(`SART_Ticket_${booking.bookingId}.pdf`);
  };

  const filteredBookings = MOCK_BOOKINGS.filter(b => {
    if (activeTab === 'active') return b.isActive && !b.isCancelled;
    if (activeTab === 'past') return !b.isActive && !b.isCancelled;
    if (activeTab === 'cancelled') return b.isCancelled;
    return false;
  });

  if (selectedBooking) {
    if (selectedBooking.isCancelled) {
      return (
        <section className={`tab-screen ${globalActiveTab === 'booking' ? 'active' : ''}`} id="tab-booking">
          <div className="bookings-details-container cancelled-theme">
            <div className="details-header">
              <button className="back-btn" onClick={navigateBack}>
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <h2 className="cancelled-page-title">Cancellation Details</h2>
            </div>
            
            <div className="cancellation-card">
              <div className="cancellation-header-row">
                <div className="cancellation-train-info">
                  <div className="icon-wrapper">
                    <img src={selectedBooking.image} alt={selectedBooking.type} />
                  </div>
                  <div>
                    <h3 className="cancel-title">{selectedBooking.title}</h3>
                    <p className="cancel-subtitle">({selectedBooking.number})</p>
                  </div>
                </div>
                <div className="cancellation-txn-info">
                  <p>Txn ID: {selectedBooking.txnId}</p>
                  <p>Txn date: {selectedBooking.txnDate}</p>
                </div>
              </div>

              <div className="cancellation-route-row">
                <p>{selectedBooking.source}({selectedBooking.sourceCode}) <i className="fa-solid fa-arrow-right-long"></i> {selectedBooking.destination}({selectedBooking.destinationCode})</p>
                <p className="cancel-date">{selectedBooking.sourceDate}</p>
              </div>
              
              <div className="cancel-status-banner">
                <span>TRANSACTION STATUS: <strong className="text-red">CANCELLED</strong></span>
              </div>
            </div>

            <div className="cancellation-refund-details">
              <div className="refund-row strong">
                <span>PNR No.:</span>
                <span>{selectedBooking.pnr}</span>
              </div>
              <div className="refund-row">
                <span>Cancellation/Refund ID:</span>
                <span>{selectedBooking.refundId}</span>
              </div>
              <div className="refund-row">
                <span>Transaction Amount:</span>
                <span>₹ {selectedBooking.transactionAmount?.toFixed(1)}</span>
              </div>
              <div className="refund-row">
                <span>Travel Insurance Refund Amount:</span>
                <span>₹ 0.0</span>
              </div>
              <div className="refund-row strong">
                <span>Total Refund Amount:</span>
                <span>₹ {selectedBooking.refundAmount?.toFixed(1)}</span>
              </div>
              
              <div className="refund-bank-info">
                <p><strong>Bank Name:</strong> {selectedBooking.bankName}</p>
                <p className="refund-remark">Remark: Refund amount has been sent to your Wallet/ Bank/ Travel Agent's A/c</p>
              </div>
            </div>

            <div className="cancellation-fee-breakdown">
              <div className="fee-row">
                <span>Ticket Charges</span>
                <span>₹ {(selectedBooking.transactionAmount! + 100).toFixed(1)}</span>
              </div>
              <div className="fee-row">
                <span>IRCTC Convenience Fee (incl. of GST)</span>
                <span>₹ 35.4</span>
              </div>
              
              <div className="fee-divider"></div>
              
              <div className="fee-row strong-fee">
                <span>Cancellation Fee</span>
                <span>-₹ {selectedBooking.cancellationFee?.toFixed(1)}</span>
              </div>
              <div className="fee-row sub-fee">
                <span>Ticket Cancellation Charges</span>
                <span>-₹ {selectedBooking.cancellationFee?.toFixed(1)}</span>
              </div>
              
              <div className="fee-divider"></div>
              
              <div className="fee-row final-refund">
                <span>Your Refund</span>
                <span>₹ {selectedBooking.refundAmount?.toFixed(0)}</span>
              </div>
            </div>
            
          </div>
        </section>
      );
    }

    return (
      <section className={`tab-screen ${globalActiveTab === 'booking' ? 'active' : ''}`} id="tab-booking">
        <div className="bookings-details-container">
          <div className="details-header">
            <button className="back-btn" onClick={navigateBack}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <div className="header-status">
              <i className="fa-solid fa-thumbs-up"></i>
              <h3>{selectedBooking.statusText}</h3>
              {selectedBooking.pnr && <p>IRCTC PNR {selectedBooking.pnr} <i className="fa-regular fa-copy"></i></p>}
              <p>BOOKING ID {selectedBooking.bookingId} <i className="fa-regular fa-copy"></i></p>
            </div>
          </div>
          
          <div className="details-card">
            <div className="details-card-title">
              <h2>{selectedBooking.title} <span>#{selectedBooking.number}</span></h2>
            </div>
            
            <div className="details-route">
              <div className="route-point">
                <h4>{selectedBooking.source}</h4>
                <p>{selectedBooking.sourceCode} {selectedBooking.sourcePlatform && <span className="platform">{selectedBooking.sourcePlatform}</span>}</p>
                <span className="time-date">{selectedBooking.sourceTime}, {selectedBooking.sourceDate.split(', ')[1]}</span>
              </div>
              <div className="route-duration">
                <span className="line"></span>
                <span>{selectedBooking.duration}</span>
                <span className="line"></span>
              </div>
              <div className="route-point right">
                <h4>{selectedBooking.destination}</h4>
                <p>{selectedBooking.destinationPlatform && <span className="platform">{selectedBooking.destinationPlatform}</span>} {selectedBooking.destinationCode}</p>
                <span className="time-date">{selectedBooking.destinationTime}, {selectedBooking.destinationDate.split(', ')[1]}</span>
              </div>
            </div>
            
            <button className="need-help-btn">NEED HELP</button>
          </div>

          <div className="passenger-card">
            <div className="passenger-card-header">
              <h3>{selectedBooking.pnr ? `PNR ${selectedBooking.pnr}` : 'Booking Details'}</h3>
              <span className="chart-status">Chart Prepared</span>
            </div>
            <div className="passenger-card-sub">
              Sleeper • 1 Adult(s)
            </div>
            <div className="passenger-list">
              <p className="passenger-label">Passenger Name</p>
              <div className="passenger-row">
                <h4>{selectedBooking.passengerName}</h4>
                <div className="seat-info">
                  <strong>{selectedBooking.seatStatus}</strong>
                  <span className={`badge ${selectedBooking.statusBadge.toLowerCase()}`}>{selectedBooking.statusBadge}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`tab-screen ${globalActiveTab === 'booking' ? 'active' : ''}`} id="tab-booking">
      <div className="bookings-tab-container">
        
        <div className="bookings-tabs-nav">
          <button 
            className={`booking-tab-btn ${activeTab === 'active' ? 'active' : ''}`}
            onClick={() => navigateToTab('active')}
          >
            Upcoming
          </button>
          <button 
            className={`booking-tab-btn ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => navigateToTab('past')}
          >
            Past Bookings
          </button>
          <button 
            className={`booking-tab-btn ${activeTab === 'cancelled' ? 'active' : ''}`}
            onClick={() => navigateToTab('cancelled')}
          >
            Cancellations
          </button>
        </div>

        <div className="irctc-bookings-list">
          {filteredBookings.length > 0 ? (
            filteredBookings.map(booking => (
              <div key={booking.id} className="irctc-card">
                <div className="irctc-card-top">
                  <div className="train-info">
                    <div className="icon-wrapper">
                      <img src={booking.image} alt={booking.type} />
                    </div>
                    <div>
                      <p className="train-no">{booking.number}</p>
                      <p className="train-name">{booking.title}</p>
                    </div>
                  </div>
                  <div className="status-indicator">
                    {booking.isCancelled ? <span className="text-red font-bold">CANCELLED</span> : 'P'}
                  </div>
                </div>
                
                <div className="irctc-route">
                  <div className="route-left">
                    <h4>{booking.source} ({booking.sourceCode})</h4>
                    <p className="time">{booking.sourceTime}</p>
                    <p className="date">{booking.sourceDate}</p>
                  </div>
                  <div className="route-arrow">
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </div>
                  <div className="route-right">
                    <h4>{booking.destination} ({booking.destinationCode})</h4>
                    <p className="time">{booking.destinationTime}</p>
                    <p className="date">{booking.destinationDate}</p>
                  </div>
                </div>

                <div className="irctc-footer">
                  <p className="booking-id-text">Booking ID {booking.bookingId}</p>
                  <div className="irctc-actions">
                    {!booking.isCancelled && (
                      <button className="btn-outline" onClick={(e) => handleDownloadTicket(booking, e)}>
                        Download Ticket
                      </button>
                    )}
                    <button className={`btn-solid ${booking.isCancelled ? 'btn-red' : ''}`} onClick={() => navigateToDetails(booking)}>
                      {booking.isCancelled ? 'Refund Details' : 'View Details'}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-bookings">
              <p>No {activeTab} bookings found.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
