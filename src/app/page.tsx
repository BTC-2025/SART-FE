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
import CitySelectorModal from '@/components/modals/CitySelectorModal';

export default function Home() {
  const [isRideModalOpen, setIsRideModalOpen] = useState(false);
  const [isCarrierModalOpen, setIsCarrierModalOpen] = useState(false);
  const [isRentalModalOpen, setIsRentalModalOpen] = useState(false);
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = (e: any) => {
      if (e.detail === 'modal-ride') {
        setIsRideModalOpen(true);
      } else if (e.detail === 'modal-carrier') {
        setIsCarrierModalOpen(true);
      } else if (e.detail === 'modal-rental') {
        setIsRentalModalOpen(true);
      } else if (e.detail === 'modal-city-selector') {
        setIsCityModalOpen(true);
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
      <SubNavbar />
      
      <main className="web-main-content">
        <HomeTab />
        <StoreTab />
        <WalletTab />
        <ProfileTab />
        
        {/* Legacy Universal Modals */}
        <UniversalModals />
      </main>

      <Script src="/app.js" strategy="lazyOnload" />
      <RideBookingModal isOpen={isRideModalOpen} onClose={() => setIsRideModalOpen(false)} />
      <CarrierBookingModal isOpen={isCarrierModalOpen} onClose={() => setIsCarrierModalOpen(false)} />
      <RentalBookingModal isOpen={isRentalModalOpen} onClose={() => setIsRentalModalOpen(false)} />
      <CitySelectorModal isOpen={isCityModalOpen} onClose={() => setIsCityModalOpen(false)} />
    </div>
  );
}
