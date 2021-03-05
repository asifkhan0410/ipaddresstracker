import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {Marker} from 'react-leaflet';
import {VenueLocationIcon} from './VenueLocationIcon';

export default function MapView({coordinates}) {
    return (
        <div>
        <MapContainer center={coordinates} zoom={5}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={coordinates} icon={VenueLocationIcon} ></Marker>
        </MapContainer>
        </div>
    )
}
