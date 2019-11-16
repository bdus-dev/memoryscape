import L from 'leaflet';

export default  (t, i) => {
  return new L.CircleMarker(i, {
    radius: 6,
    weight: 1,
    color: 'rgb(123,30,207)', //#7b1ecf
    fillOpacity: .7
  });
}