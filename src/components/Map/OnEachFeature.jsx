// tODO: uare history per il bottone? come?
export default  (feature, layer, lang) => {
  const props = feature.properties;
  let html = `<h3>${props.tit}</h3>
  <img src="https://img.youtube.com/vi/${props.videoid}/0.jpg" alt={row.tit} alt="${props.tit}" />
  <p>${props.aut}
  ${props.anno ? `<br /><strong>${props.anno}</strong>` : ''}</p>
  <p class="button"><a href="/${lang}/clip/${props.id}">Apri</a></p>
  `;
  
  layer.bindPopup(html);
}