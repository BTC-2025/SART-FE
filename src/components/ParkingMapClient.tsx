'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface ParkingMapClientProps {
  vehicleIconClass: string;
}

export default function ParkingMapClient({ vehicleIconClass }: ParkingMapClientProps) {
  const centerCoords: [number, number] = [12.9716, 77.5946];

  // Custom Icon for Parking Spots
  const createParkingIcon = (price: string, color: string) => L.divIcon({
    className: 'custom-parking-marker',
    html: `<div style="display:flex; flex-direction:column; align-items:center; transform: translate(-50%, -100%); width: max-content;">
            <div style="background: ${color}; color: #fff; padding: 4px 8px; border-radius: 8px; font-weight: 700; font-size: 12px; margin-bottom: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">${price}</div>
            <i class="fa-solid fa-location-dot" style="color: ${color}; font-size: 24px; text-shadow: 0 2px 4px rgba(0,0,0,0.2);"></i>
          </div>`,
    iconSize: [40, 60],
    iconAnchor: [0, 0]
  });

  return (
    <MapContainer 
      center={centerCoords} 
      zoom={14} 
      style={{ height: '100%', width: '100%', borderRadius: '12px' }}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
      />
      
      <Marker position={[12.9716, 77.5946]} icon={createParkingIcon('₹50/hr', '#f59e0b')}>
         <Popup>Premium Slot<br/>Available</Popup>
      </Marker>

      <Marker position={[12.9750, 77.5900]} icon={createParkingIcon('₹40/hr', '#10b981')}>
         <Popup>Standard Slot<br/>Available</Popup>
      </Marker>
      
      <Marker position={[12.9680, 77.6000]} icon={createParkingIcon('₹80/hr', '#3b82f6')}>
         <Popup>Covered Parking<br/>Available</Popup>
      </Marker>
    </MapContainer>
  );
}
