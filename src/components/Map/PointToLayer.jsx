import L from 'leaflet';
import {col} from '../../cfg';

export default  (t, i) => {
  return new L.CircleMarker(i, {
    radius: 6,
    weight: 1,
    color: col,
    fillOpacity: .7
  });
}