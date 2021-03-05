import L from 'leaflet';

export const VenueLocationIcon = L.icon({
  iconUrl: require('../images/icon-location.svg'),
  iconRetinaUrl: require('../images/icon-location.svg'),
  // iconAnchor: null,
  // shadowUrl: null,
  // shadowSize: null,
  // shadowAnchor: null,
  iconSize: [35, 35],
  className: 'leaflet-venue-icon'
});
