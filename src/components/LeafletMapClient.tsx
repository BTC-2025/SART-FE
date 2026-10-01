// @ts-nocheck
'use client';

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon in Next.js (though we'll use custom divIcons)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface LeafletMapClientProps {
  vehicleIconClass: string;
}

export default function LeafletMapClient({ vehicleIconClass }: LeafletMapClientProps) {
  const pickupCoords: [number, number] = [12.9716, 77.5946];
  const dropCoords: [number, number] = [13.1989, 77.7068]; // BIAL Airport
  const currentVehicleCoords: [number, number] = [13.0850, 77.6500]; // Somewhere in between

  const routePath: [number, number][] = [
    pickupCoords,
    [13.0016, 77.6246],
    [13.0516, 77.6346],
    currentVehicleCoords,
    [13.1216, 77.6846],
    dropCoords
  ];

  // Custom Icon for Vehicle
  const vehicleIcon = L.divIcon({
    className: 'custom-vehicle-marker',
    html: `<div style="width: 36px; height: 36px; border-radius: 50%; background: #3b82f6; border: 3px solid #fff; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 16px; box-shadow: 0 4px 8px rgba(0,0,0,0.3);"><i class="fa-solid ${vehicleIconClass}"></i></div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18]
  });

  // Custom Icon for Pickup
  const pickupIcon = L.divIcon({
    className: 'custom-pickup-marker',
    html: `<div style="width: 16px; height: 16px; border-radius: 50%; background: #10b981; border: 3px solid #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8]
  });

  // Custom Icon for Drop
  const dropIcon = L.divIcon({
    className: 'custom-drop-marker',
    html: `<div style="width: 16px; height: 16px; border-radius: 50%; background: #ef4444; border: 3px solid #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8]
  });

  return (
    <MapContainer 
      center={[13.0852, 77.6506]} 
      zoom={11} 
      style={{ height: '100%', width: '100%', zIndex: 1 }}
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      
      {/* Route Line */}
      <Polyline positions={routePath} color="#111827" weight={4} dashArray="10, 10" />

      {/* Markers */}
      <Marker position={pickupCoords} icon={pickupIcon} />
      <Marker position={dropCoords} icon={dropIcon} />
      <Marker position={currentVehicleCoords} icon={vehicleIcon} />
    </MapContainer>
  );
}
