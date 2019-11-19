import React, { useState, useEffect} from 'react';

import { Map, TileLayer, GeoJSON } from 'react-leaflet'

import Bar from '../Bar/Bar';

import Database from '../../services/Database';
import onEachFeature from './OnEachFeature';
import pointToLayer from './PointToLayer';
import './Map.css';

import qs from 'qs';



export default function Mappa(props) {

  const position = [44.4943823,11.3418609]

  const [geoJson, setGeoJson] = useState();
  
  const [mapRef] = useState(React.createRef());

  const qstring = qs.parse(props.location.search, {ignoreQueryPrefix: true});



  useEffect( () => {
      Database.getMsGeoJson('1', result => {
        setGeoJson(result);
      });
  }, []);


  return (
    <div className="mapContainer">
      <Bar />

      <Map center={position} zoom={13} style={{ width: '100%', height: '100%'}}
          ref={mapRef}>
        <TileLayer
          // url="https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png"
          // url="https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png"
          url={qstring.rockandroll ? "https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png" : "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"}
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        
        {geoJson && <GeoJSON
              data={geoJson}
              pointToLayer={ (t, i) => pointToLayer(t, i) }
              onEachFeature={ (feature, layer) => onEachFeature(feature, layer) }
              onAdd={ (a)=>{
                const bounds = a.target.getBounds();
                mapRef.current.leafletElement.fitBounds(bounds);
              }}
              />}
      </Map>
    </div>
  );
}
