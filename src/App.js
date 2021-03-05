import React, {useEffect, useState } from 'react'
import './App.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {Marker} from 'react-leaflet';
import {VenueLocationIcon} from './components/VenueLocationIcon';

function App() {
  const [ip, setIp] = useState('');
  const [address, setAddress] = useState();
  const [lat, setLat] =useState('');
  const [lng, setLng] =useState('');
  const coordinates = [lat,lng]
  
  useEffect(() => {
     fetch(`https://geo.ipify.org/api/v1?apiKey=at_OePuO3dGE6fMS6fksNAPi4hSXSCZe`).then(res => res.json()).then(data => {
      setAddress(data);
      setLat(data.location.lat);
      setLng(data.location.lng);
    })
  }, [])


  async function searchIp(){
    await fetch(`https://geo.ipify.org/api/v1?apiKey=at_OePuO3dGE6fMS6fksNAPi4hSXSCZe&ipAddress=${ip}`).then(res => res.json()).then(data => {
      setAddress(data);
      setLat(data.location.lat);
      setLng(data.location.lng);
    })
  }
  console.log(address)

  return (
    <div className="App">
      <h1>IP Address Tracker</h1>
      <input type="text" value={ip} placeholder="Search for any IP address or domain" onChange={(e) => setIp(e.target.value)}/>
      <button onClick={searchIp}><svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/></svg></button>
      <div className = "address">
        <div className="addressbody"><span>IP ADDRESS</span><h2>{address? address.ip : '' }</h2></div>
        <div className="addressbody"><span>LOCATION</span><h2>{address? address.location.city : ''}, {address? address.location.country : ''} {address?  address.location.postalCode : ''}</h2></div>
        <div className="addressbody"><span>TIMEZONE </span><h2> UTC {address? address.location.timezone : ''}</h2></div>
        <div className="addressbody last"><span>ISP </span><h2>{address? address.isp : ''}</h2></div>
      </div>
      <MapContainer center={coordinates} zoom={5}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={coordinates} icon={VenueLocationIcon} ></Marker>
      </MapContainer>
    </div>
  );
}

export default App;
