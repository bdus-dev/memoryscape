
export default  (feature, layer) => {
  const props = feature.properties;
  let html = `<h3>${props.tit}</h3>
  <img src="https://img.youtube.com/vi/${props.videoid}/0.jpg" alt={row.tit} alt="${props.tit}" />
  <p>${props.aut}
  ${props.anno ? `<br /><strong>${props.anno}</strong>` : ''}</p>
  <p class="button"><a href="/clip/${props.id}">Apri</a></p>
  `;
  
  layer.bindPopup(html
    
    // `<hr><strong>${info.name}</strong><br>
    // <a href="${info.info}" title="More information">${info.info}</a>`
    );
}