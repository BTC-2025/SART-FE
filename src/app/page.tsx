'use client';
import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import SubNavbar from '@/components/SubNavbar';
import RideBookingModal from '@/components/RideBookingModal';
import CarrierBookingModal from '@/components/CarrierBookingModal';
import RentalBookingModal from '@/components/RentalBookingModal';
import UniversalModals from '@/components/modals/UniversalModals';
import HomeTab from '@/components/tabs/HomeTab';
import StoreTab from '@/components/tabs/StoreTab';
import ProfileTab from '@/components/tabs/ProfileTab';
import WalletTab from '@/components/tabs/WalletTab';
import BookingsTab from '@/components/tabs/BookingsTab';
import CitySelectorModal from '@/components/modals/CitySelectorModal';
import BookingsRegistryModal from '@/components/BookingsRegistryModal';
import DriversBookingModal from '@/components/DriversBookingModal';
import CommunityModal from '@/components/CommunityModal';
import MechanicModal from '@/components/MechanicModal';

export default function Home() {
  const { activeTab, setActiveTab } = useSartStore();
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [isBookingsModalOpen, setIsBookingsModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = (e: any) => {
      if (e.detail === 'modal-city-selector') {
        setIsCityModalOpen(true);
      } else if (e.detail === 'modal-bookings-registry') {
        setIsBookingsModalOpen(true);
      }
    };
    
    window.addEventListener('openReactModal', handleOpenModal);
    
    return () => {
      window.removeEventListener('openReactModal', handleOpenModal);
    };
  }, []);

  return (
    <div className="web-app-layout">
      <Navbar />
      
      <main className="web-main-content">
        <HomeTab />
        <StoreTab />
        <BookingsTab />
        <WalletTab />
        <ProfileTab />
        
        {/* Service Sub-Pages (Rendered as Tabs) */}
        <div className={`tab-screen ${['ride', 'carrier', 'rental', 'drivers', 'community', 'mechanic', 'parking'].includes(activeTab) ? 'active' : ''}`} id="tab-service-pages">
          <RideBookingModal isOpen={activeTab === 'ride'} onClose={() => setActiveTab('home')} />
          <CarrierBookingModal isOpen={activeTab === 'carrier'} onClose={() => setActiveTab('home')} />
          <RentalBookingModal isOpen={activeTab === 'rental'} onClose={() => setActiveTab('home')} />
          <DriversBookingModal isOpen={activeTab === 'drivers'} onClose={() => setActiveTab('home')} />
          <CommunityModal isOpen={activeTab === 'community'} onClose={() => setActiveTab('home')} />
          <MechanicModal isOpen={activeTab === 'mechanic'} onClose={() => setActiveTab('home')} />
          {/* Parking doesn't have a modal yet, so we could show a placeholder if needed */}
          {activeTab === 'parking' && (
             <div style={{ padding: '40px', textAlign: 'center', background: '#fff', borderRadius: '16px', margin: '20px' }}>
               <h2>Parking Services</h2>
               <p>Coming Soon</p>
               <button onClick={() => setActiveTab('home')} style={{ marginTop: '20px', padding: '10px 20px', background: '#0ea5e9', color: '#fff', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>Back to Home</button>
             </div>
          )}
        </div>

        {/* Legacy Universal Modals */}
        <UniversalModals />
      </main>

      <Script src="/app.js" strategy="lazyOnload" />
      <CitySelectorModal isOpen={isCityModalOpen} onClose={() => setIsCityModalOpen(false)} />
      <BookingsRegistryModal isOpen={isBookingsModalOpen} onClose={() => setIsBookingsModalOpen(false)} />
    </div>
  );
}
