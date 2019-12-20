// TODO: usare history per il bottone? come?
import {col} from '../../cfg';

export default  (feature, layer, lang) => {
  const props = feature.properties;
  let html = `<h3>${props.tit}</h3>
  <img src="https://img.youtube.com/vi/${props.videoid}/0.jpg" alt={row.tit} alt="${props.tit}" />
  <p>${props.aut}
  ${props.annoda ? `<br /><strong>${props.annoda}</strong>` : ''}</p>
  <p class="button"><a style="background-color: ${col}" href="/${lang}/clip/${props.id}">Apri</a></p>
  `;
  
  layer.bindPopup(html);
}