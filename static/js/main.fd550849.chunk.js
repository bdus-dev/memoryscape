(this.webpackJsonpmemoryscape=this.webpackJsonpmemoryscape||[]).push([[0],{117:function(e){e.exports=JSON.parse('{"app.menu.map":"Mappa","app.menu.archive":"Archivio","app.menu.about":"Il progetto","app.search.filters":"Filtri","app.search.all":"Tutto","app.pagination.page":"Pagina {pageNo}","app.pagination.recap":"Clip {start} - {end} di {tot}","app.filterModal.year":"Anno","app.filterModal.places":"Luoghi","app.themes":"Temi","app.filterModal.clear":"Svuota","app.filterModal.apply":"Applica","app.clip.author":"Autore","app.clip.place":"Luogo","app.clip.year":"Anno","app.clip.format":"Formato","app.clip.map":"Mappa","app.clip.inv":"Inventario","app.clip.same_place":"Altre clip girate a {place}","app.clip.back2archive":"Torna all\'archivio","app.for":"per"}')},118:function(e){e.exports=JSON.parse('{"app.menu.map":"Map","app.menu.archive":"Archive","app.menu.about":"Informazioni","app.search.filters":"Filters","app.search.all":"All","app.pagination.page":"Page {pageNo}","app.pagination.recap":"Clips {start} - {end} of {tot}","app.filterModal.year":"Year","app.filterModal.places":"Places","app.themes":"Themes","app.filterModal.clear":"Clear","app.filterModal.apply":"Apply","app.clip.author":"Author","app.clip.place":"Place","app.clip.year":"Year","app.clip.format":"Format","app.clip.map":"Map","app.clip.inv":"Inventory","app.clip.same_place":"Other clips filmed in {place}","app.clip.back2archive":"Torna all\'archivio","app.for":"for"}')},119:function(e,a,t){e.exports=t.p+"static/media/home-background.69f0cdef.jpg"},127:function(e,a,t){e.exports=t.p+"static/media/internal-background.a7496dd4.jpg"},128:function(e,a,t){e.exports=t.p+"static/media/video-bg.4dac2e53.mp4"},147:function(e,a,t){e.exports=t(193)},174:function(e,a,t){},192:function(e,a,t){},193:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(11),o=t.n(i),l=t(10),c=t(31),m=t(41),s=t(244),u=t(245),p=t(247),d=t(138),f=t(97),g=t.n(f),h=t(98),v=t.n(h),E=t(99),b=t.n(E),y=t(100),C=t.n(y),k=t(101),x=t.n(k),O=t(102),j=t.n(O),S=t(103),T=t.n(S),N=t(104),z=t.n(N),I=t(105),_=t.n(I),w=t(106),B=t.n(w),A=t(107),M=t.n(A),P=t(108),D=t.n(P),R=t(109),L=t.n(R),G=t(110),V=t.n(G),F=t(111),H=t.n(F),W=t(112),q=t.n(W),U=t(113),J=t.n(U),Q=t(114),Y=t.n(Q),K=t(115),X=t.n(K),$=t(116),Z=t.n($),ee={red:{id:"red",name:"Red",import:v.a},pink:{id:"pink",name:"Pink",import:b.a},purple:{id:"purple",name:"Purple",import:C.a},deepPurple:{id:"deep-purple",name:"Deep Purple",import:x.a},indigo:{id:"indigo",name:"Indigo",import:j.a},blue:{id:"blue",name:"Blue",import:T.a},lightBlue:{id:"light-blue",name:"Light Blue",import:z.a},cyan:{id:"cyan",name:"Cyan",import:_.a},teal:{id:"teal",name:"Teal",import:B.a},green:{id:"green",name:"Green",import:M.a},lightGreen:{id:"light-green",name:"Light Green",import:D.a},lime:{id:"lime",name:"Lime",import:L.a},yellow:{id:"yellow",name:"Yellow",import:V.a},amber:{id:"amber",name:"Amber",import:H.a},orange:{id:"orange",name:"Orange",import:q.a},deepOrange:{id:"deep-orange",name:"Deep Orange",import:J.a},brown:{id:"brown",name:"Brown",import:Y.a},gray:{id:"gray",name:"Gray",import:X.a},blueGray:{id:"blue-gray",name:"Blue Gray",import:Z.a}},ae={light:{id:"light",name:"Light"},dark:{id:"dark",name:"Dark"}},te=function(e){return e?(e=g.a.camelCase(e),ee[e]):null},ne=function(e){return e?ae[e]:null},re=te("blue"),ie=te("red"),oe=ne("light"),le=Object(d.a)({palette:{primary:re.import,secondary:ie.import,type:oe.id},primaryColor:re,secondaryColor:ie,type:oe,typography:{fontFamily:"Poppins"},overrides:{MuiCssBaseline:{"@global":{"@font-face":"Poppins"}}}}),ce={};ce.colors=ee,ce.types=ae,ce.defaultPrimaryColor=re,ce.defaultSecondaryColor=ie,ce.defaultType=oe,ce.defaultTheme=le,ce.isDefaultTheme=function(e){return!!e&&(e.primaryColor.id===re.id&&e.secondaryColor.id===ie.id&&e.type.id===oe.id)},ce.createTheme=function(e){if(!e)return null;var a=e,t=a.primaryColor,n=a.secondaryColor,r=a.type;return t&&n&&r?(t=te(t),n=te(n),r=ne(r),t&&n&&r?e=Object(d.a)({palette:{primary:t.import,secondary:n.import,type:r.id},primaryColor:t,secondaryColor:n,type:r}):null):null};var me=ce,se=t(117),ue=t(118),pe=t(198),de=t(228),fe=t(229),ge=t(246),he=t(196),ve=t(119),Ee=t.n(ve),be=Object(pe.a)((function(e){return{homeContainer:{backgroundImage:"url(".concat(Ee.a,")"),backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover",maxWidth:"100%"},boxContainer:{padding:e.spacing(3,2),height:200,display:"flex",flexDirection:"column",justifyContent:"center"},textBox:{textAlign:"center",color:"#fff",marginTop:"auto",paddingTop:"9em"},mainTitle:{fontSize:"3.2em",marginBlockStart:"0"},languageContainer:{marginTop:"auto",marginBottom:"6em",textAlign:"center"},buttomLang:{color:"#fff",fontWeight:"900"}}}));function ye(e){var a=e.changeLang,t=be(),n=Object(m.f)();return r.a.createElement("div",{className:t.homeContainer},r.a.createElement(de.a,{fixed:!0},r.a.createElement(fe.a,{className:t.boxContainer,component:"div",style:{height:"100vh"}},r.a.createElement(ge.a,{className:t.textBox},r.a.createElement("h5",null,"HOME MOVIES DIGITAL ARCHIVE"),r.a.createElement("h2",{className:t.mainTitle},"memoryscapes 01",r.a.createElement("br",null),"lungo la via emilia")),r.a.createElement(ge.a,{className:t.languageContainer},r.a.createElement(he.a,{className:t.buttomLang,onClick:function(){return a(e="it"),void n.push("/".concat(e,"/search/"));var e}},"Vai all'archivio")))))}var Ce=t(251),ke=t(255),xe=t(252),Oe=t(27),je=t(230),Se=t(231),Te=t(232),Ne=t(124),ze=t.n(Ne),Ie=t(57),_e=t.n(Ie),we=t(250),Be=t(254),Ae=t(248),Me=Object(pe.a)((function(e){var a;return{appBar:{backgroundColor:"transparent",boxShadow:"none"},mainToolBar:{flexDirection:"row-reverse"},iconMenu:{fontSize:"2.5rem"},popoverPaper:Object(Oe.a)({width:"100%",height:"100vh",maxHeight:"100vh",maxWidth:"unset",top:"0 !important",backgroundColor:"#000000f2",display:"flex",flexDirection:"column",justifyContent:"center",left:"0 !important"},e.breakpoints.down(800),{textAlign:"center"}),menuContent:(a={maxHeight:"100vh",display:"flex",flexDirection:"row"},Object(Oe.a)(a,e.breakpoints.down(800),{flexDirection:"column"}),Object(Oe.a)(a,"justifyContent","center"),Object(Oe.a)(a,"position","initial"),Object(Oe.a)(a,"& div",Object(Oe.a)({marginRight:"3em"},e.breakpoints.down(800),{margin:"auto"})),a),menuItem:{color:"#fff",fontSize:"3.4em",fontWeight:"700","&:hover":{color:"#7a1dcf"}},colorWhite:{color:"#fff"},contactParagraph:{color:"#7b7878",fontSize:"1em",lineHeight:"1.8em"},titleMenu:{letterSpacing:"0.1em"},menuLink:{textDecoration:"none",display:"block","&:hover":{textDecoration:"none"}},closeMenuContainer:{position:"absolute",marginRight:"0.8em !important",top:"0",right:"0","& button":{color:"#fff",fontSize:"2.5rem"}}}}));function Pe(e){var a=Me(),t=Object(n.useState)(null),i=Object(l.a)(t,2),o=i[0],c=i[1],s=Object(m.f)(),u=e.lang,p=function(){c(null)},d=function(e){s.push(e)};return r.a.createElement(je.a,{color:"primary",position:"fixed",className:a.appBar},r.a.createElement(Se.a,{variant:"regular",className:a.mainToolBar},r.a.createElement(Te.a,{edge:"end",color:"inherit","aria-label":"menu",onClick:function(e){c(e.currentTarget)}},r.a.createElement(ze.a,{className:a.iconMenu})),r.a.createElement(we.a,{PopoverClasses:{paper:a.popoverPaper},classes:{list:a.menuContent},id:"main-menu",anchorEl:o,open:Boolean(o),onClose:p,keepMounted:!0},r.a.createElement("div",{className:a.closeMenuContainer},r.a.createElement(Te.a,{onClick:p},r.a.createElement(_e.a,{className:a.iconMenu}))),r.a.createElement("div",null,r.a.createElement(Be.a,{onClick:function(){return d("/")},className:a.menuItem},"Home"),r.a.createElement(Be.a,{onClick:function(){return d("/".concat(u,"/map"))},className:a.menuItem},r.a.createElement(Ae.a,{id:"app.menu.map"}))),r.a.createElement("div",null,r.a.createElement(Be.a,{onClick:function(){return d("/".concat(u,"/search/"))},className:a.menuItem},r.a.createElement(Ae.a,{id:"app.menu.archive"})),r.a.createElement(Be.a,{onClick:function(){return d("/".concat(u,"/about"))},className:a.menuItem},r.a.createElement(Ae.a,{id:"app.menu.about"}))),r.a.createElement("div",{className:a.colorWhite},r.a.createElement("h5",{className:a.titleMenu},"HOME MOVIES DIGITAL ARCHIVE"),r.a.createElement("p",{className:a.contactParagraph},"Home Movies",r.a.createElement("br",null),"Via Sant\u2019Isaia, 18 - 40123 Bologna, IT",r.a.createElement("br",null),"Call - (+39) 051 3397243",r.a.createElement("br",null),"Email -",r.a.createElement("span",{className:a.colorWhite},"info@homemovies.it"))))))}var De=t(37),Re=t(38),Le=t(125),Ge=t.n(Le),Ve=function(){function e(){Object(De.a)(this,e)}return Object(Re.a)(e,null,[{key:"_getData",value:function(e,a,t,n){var r="https://db-dev.bradypus.net";"localhost"===window.location.hostname&&(r="http://db.localhost"),r+="/api/".concat(2===n?"v2/":"","hm/"),Ge()({method:"post",url:r+e,params:a,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){if(e.data.type&&"error"===e.data.type)return console.log("API error:"),console.log(e.data.text),!1;t(e.data)})).catch((function(e){e instanceof Error?console.log(e.message):console.log(e.data)}))}},{key:"inspect",value:function(e){this._getData("",{tb:"ms",verb:"inspect"},(function(a){e(a)}),2)}},{key:"getOne",value:function(e,a){this._getData("",{tb:"ms",verb:"read",id:e},(function(e){a(e)}),2)}},{key:"getStr",value:function(e,a,t){this._getData("ms",{verb:"search",type:"fast",string:e,page:a},(function(e){t(e)}))}},{key:"getAll",value:function(e,a){this._getData("ms",{verb:"search",type:"all",page:e},(function(e){a(e)}))}},{key:"getSimple",value:function(e,a,t,n,r){var i={verb:"search",type:"advanced",page:n,"adv[a0][fld]":e,"adv[a0][operator]":t?"=":"LIKE","adv[a0][value]":a};this._getData("ms",i,(function(e){r(e)}))}},{key:"getAdv",value:function(e,a,t){var n={verb:"search",type:"advanced",page:a};Object.entries(e).forEach((function(e){var a=Object(l.a)(e,2),t=a[0],r=a[1];n["adv[".concat(t,"][fld]")]=r.f,n["adv[".concat(t,"][value]")]=r.v,n["adv[".concat(t,"][operator]")]=r.o,n["adv[".concat(t,"][connector]")]=r.c})),this._getData("ms",n,(function(e){t(e)}))}},{key:"getUniqueVal",value:function(e,a){this._getData("",{verb:"getUniqueVal",tb:"ms",fld:e},(function(e){a(e)}),2)}},{key:"getVocabulary",value:function(e,a){this._getData("",{verb:"getVocabulary",voc:e},(function(e){a(e)}),2)}},{key:"getByEncodedSql",value:function(e,a,t){this._getData("ms",{verb:"search",type:"encoded",q_encoded:e,page:a},(function(e){t(e)}))}},{key:"getDecade",value:function(e,a,t){var n=[20,30,40,50,60,70,80,90];if(!n.includes(e))return console.log("Invalid parameter decade: ".concat(e,": only one of ").concat(n.join(",")," is allowed")),!1;var r=parseInt("19".concat(e)),i={verb:"search",type:"advanced",page:a,"adv[a][fld]":"hm__ms:annoda","adv[a][value]":r+10,"adv[a][operator]":"<","adv[b][fld]":"hm__ms:annoa","adv[b][value]":r,"adv[b][operator]":">=","adv[b][connector]":"AND"};this._getData("ms",i,(function(e){t(e)}))}},{key:"getByPlacesAndThemse",value:function(e,a,t,n){e||a||n(!1);var r={};e&&e.split(",").forEach((function(e,a){r["p".concat(a)]={f:"hm__ms:luogo",v:e,o:"LIKE",c:"AND"}})),a&&a.split(",").forEach((function(e,a){r["t".concat(a)]={f:"hm__ms:temi",v:e,o:"LIKE",c:"AND"}})),this.getAdv(r,t,(function(e){n(e)}))}},{key:"getByAuthor",value:function(a,t,n){e.getSimple("hm__ms:aut",a,!0,t,(function(e){n(e)}))}},{key:"getMsGeoJson",value:function(e,a){var t={join:"JOIN hm__geodata as g ON g.table_link = 'hm__ms' AND g.id_link = hm__ms.id ","fields[g.geometry]":"Geometry","fields[hm__ms.id]":"Id","fields[hm__ms.videoid]":"ID Video","fields[hm__ms.tit]":"Titolo","fields[hm__ms.aut]":"Autore","fields[hm__ms.annoda]":"Anno da","fields[hm__ms.annoa]":"Anno a",group:"hm__ms.id",limit_start:"0",limit_end:"500",q_encoded:btoa(e?e.replace(/`id`/gi,"`hm__ms`.`id`"):" 1")};this._getData("ms?verb=search&geojson=true&type=encoded",t,(function(e){a(e)}))}}]),e}(),Fe=function(e,a,t){var n=e.properties,r="<h3>".concat(n.tit,'</h3>\n  <img src="https://img.youtube.com/vi/').concat(n.videoid,'/0.jpg" alt={row.tit} alt="').concat(n.tit,'" />\n  <p>').concat(n.aut,"\n  ").concat(n.annoda?"<br /><strong>".concat(n.annoda,"</strong>"):"",'</p>\n  <p class="button"><a href="/').concat(t,"/clip/").concat(n.id,'">Apri</a></p>\n  ');a.bindPopup(r)},He=t(17),We=t.n(He),qe=function(e,a){return new We.a.CircleMarker(a,{radius:6,weight:1,color:"rgb(123,30,207)",fillOpacity:.7})},Ue=(t(174),t(33)),Je=t.n(Ue);function Qe(e){var a=Je.a.parse(e.location.search,{ignoreQueryPrefix:!0}),t=e.lang||e.match.params.lang,i=!1;e.center?i=e.center:a.center&&(i=a.center.split(",").reverse());var o=i||[44.4943823,11.3418609],c=Object(n.useState)(),m=Object(l.a)(c,2),s=m[0],u=m[1],p=Object(n.useState)(r.a.createRef()),d=Object(l.a)(p,1)[0];return Object(n.useEffect)((function(){Ve.getMsGeoJson("1",(function(e){u(e)}))}),[]),r.a.createElement("div",{className:"mapContainer"},r.a.createElement(Pe,{lang:t}),r.a.createElement(Ce.a,{center:o,zoom:13,style:{width:"100%",height:"100%"},ref:d},r.a.createElement(ke.a,{url:a.rockandroll?"https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png":"https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),s&&r.a.createElement(xe.a,{data:s,pointToLayer:function(e,a){return qe(e,a)},onEachFeature:function(e,a){return Fe(e,a,t)},onAdd:function(e){if(!i){var a=e.target.getBounds();d.current.leafletElement.fitBounds(a)}}})))}var Ye=t(233),Ke=t(126),Xe=t(127),$e=t.n(Xe),Ze=t(128),ea=t.n(Ze),aa=Object(pe.a)((function(e){return{homeContainer:{backgroundImage:"url(".concat($e.a,")"),backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover",maxWidth:"100%",height:"100vh",width:"100vw",position:"fixed",overflow:"scroll"},video:{background:"#000000",position:"fixed",right:0,bottom:0,zIndex:-1,minWidth:"100%",minHeight:"100%"}}}));function ta(e){var a=aa(),t=e.lang;return Ke.isMobile?r.a.createElement("div",{className:a.homeContainer},r.a.createElement(Pe,{lang:t}),r.a.createElement(de.a,{fixed:!0},e.children)):r.a.createElement("div",{className:a.darkBg},r.a.createElement("video",{autoPlay:!0,loop:!0,className:a.video},r.a.createElement("source",{src:ea.a,type:"video/mp4"})),r.a.createElement(Pe,{lang:t}),r.a.createElement(de.a,{fixed:!0},e.children))}var na=t(237),ra=t(238),ia=t(239),oa=t(67),la=t.n(oa),ca=t(236),ma=t(68),sa=t.n(ma),ua=t(133),pa=t.n(ua),da=t(132),fa=t(235),ga=t(234),ha=t(129),va=t.n(ha),Ea=t(130),ba=t.n(Ea),ya=t(131),Ca=t.n(ya);function ka(e){var a=e.qs,t=[];return a.themes&&(t=t.concat(a.themes.split(","))),a.author&&(t=t.concat(a.author.split(","))),a.places&&(t=t.concat(a.places.split(","))),0===t.length?null:r.a.createElement(ge.a,{ml:1,component:"span"},r.a.createElement(Ae.a,{id:"app.for"})," ",r.a.createElement("em",null,t.join(", ")))}var xa=Object(pe.a)((function(e){return{button:{backgroundColor:"#7a1dcf","&:not(:last-child)":{borderRight:"1px solid #fff"},"&:hover":{backgroundColor:"#7a1dcf"}}}}));function Oa(e){var a=xa(),t=Object(m.f)(),n=function(e){return t.push(e)},i=e.qs,o=e.head,l=parseInt(o.total_rows),c=30*parseInt(o.page)-30+1,s=c+parseInt(o.no_records_shown)-1,u=parseInt(o.page),p=parseInt(o.total_pages),d=!1;if(u-1>0){var f=Object.assign({},i);f.page=u-1,d="./?".concat(Je.a.stringify(f))}var g=!1;if(u+1<=p){var h=Object.assign({},i);h.page=u+1,g="./?".concat(Je.a.stringify(h))}var v=!1;if(u-1>1){var E=Object.assign({},i);E.page=1,v="./?".concat(Je.a.stringify(E))}var b=!1;if(u+2<=p){var y=Object.assign({},i);y.page=p,b="./?".concat(Je.a.stringify(y))}return r.a.createElement(ge.a,{p:1,my:2,style:{background:"rgba(255, 255, 255, .5)"}},r.a.createElement(Ye.a,{justify:"space-between",container:!0,alignItems:"center"},r.a.createElement(Ye.a,{item:!0},r.a.createElement(Ae.a,{id:"app.pagination.recap",values:{start:c,end:s,tot:l}}),r.a.createElement(ka,{qs:i})),r.a.createElement(Ye.a,{item:!0},r.a.createElement(ga.a,{size:"small","aria-label":"small outlined button group",color:"secondary",variant:"contained",style:{background:"#fff"}},v&&r.a.createElement(he.a,{className:a.button,onClick:function(){return n(v)}},r.a.createElement(va.a,null)),d&&r.a.createElement(he.a,{className:a.button,onClick:function(){return n(d)}},r.a.createElement(ba.a,null)),(v||d||g||b)&&r.a.createElement(he.a,{className:a.button,disabled:!0},r.a.createElement(Ae.a,{id:"app.pagination.page",values:{pageNo:u}})," "),g&&r.a.createElement(he.a,{className:a.button,onClick:function(){return n(g)}},r.a.createElement(la.a,null)),b&&r.a.createElement(he.a,{className:a.button,onClick:function(){return n(b)}},r.a.createElement(Ca.a,null))))))}var ja=Object(da.a)({GridListTitle:{cursor:"pointer"},GridListTileBar:{background:"rgba(123,30,207, .5)",height:"100px"},GridListTileBarTitle:{textTransform:"uppercase",fontWeight:"900",fontSize:".9rem"},GridListTileBarSubtitle:{lineHeight:1.5},IconButton:{color:"rgba(255, 255, 255, 0.8)"}});function Sa(e){var a=Object(n.useState)(),t=Object(l.a)(a,2),i=t[0],o=t[1],c=ja(),s=Object(m.f)(),u=e.qs,p=e.suppressEmpty,d=e.title,f=e.exclude,g=Object(fa.a)("(min-width:960px)")?3:1;return Object(n.useEffect)((function(){u.decade?Ve.getDecade(parseInt(u.decade),u.page,(function(e){o(e)})):u.places||u.themes?Ve.getByPlacesAndThemse(u.places,u.themes,u.page,(function(e){o(e)})):u.author?Ve.getByAuthor(u.author,u.page,(function(e){o(e)})):Ve.getAll(u.page,(function(e){o(e)}))}),[u]),i?0===i.head.total_rows?p?null:r.a.createElement(de.a,null,r.a.createElement("p",{style:{color:"#fff",fontSize:"2rem"}},"Nessun risultato trovato!")):r.a.createElement(ge.a,{container:"div"},d&&r.a.createElement("h2",null,d),!p&&r.a.createElement(Oa,{head:i.head,qs:u}),r.a.createElement(na.a,{cellHeight:280,cols:g,spacing:40},i.records.map((function(e,a){return f&&f===e.id?null:r.a.createElement(ra.a,{key:a,className:c.GridListTitle,onClick:function(){s.push("../clip/".concat(e.id)),window.scrollTo(0,0)}},r.a.createElement("img",{src:"https://img.youtube.com/vi/".concat(e.videoid,"/0.jpg"),alt:e.tit}),r.a.createElement(ia.a,{classes:{root:c.GridListTileBar,title:c.GridListTileBarTitle,subtitle:c.GridListTileBarSubtitle},title:r.a.createElement("span",null,e.tit," ",r.a.createElement(ge.a,{component:"span",mx:2}," | ")," ",r.a.createElement("strong",null,e.annoda,e.annoda!==e.annoa?"-".concat(e.annoa):"")),subtitle:r.a.createElement("span",null,r.a.createElement(sa.a,{fontSize:"small"})," ",e.luogo,r.a.createElement("br",null),r.a.createElement(pa.a,{fontSize:"small"})," ",e.temi),actionIcon:r.a.createElement(Te.a,{onClick:function(){s.push("../clip/".concat(e.id)),window.scrollTo(0,0)},"aria-label":"info about ".concat(e.tit),classes:{root:c.IconButton}},r.a.createElement(la.a,null))}))})))):r.a.createElement(ca.a,null)}var Ta=t(241),Na=t(253),za=t(242),Ia=t(197),_a=t(243),wa=t(134),Ba=t.n(wa),Aa=t(240),Ma=Object(n.createContext)({});function Pa(e,a){return e.includes(a)?e.filter((function(e){return e!==a})):(e.push(a),e)}function Da(e){return/^(19|20)\d{2}$/.test(e)}function Ra(e){var a=e.children,t=Object(n.useState)([]),i=Object(l.a)(t,2),o=i[0],c=i[1],m=Object(n.useState)([]),s=Object(l.a)(m,2),u=s[0],p=s[1],d=Object(n.useState)(void 0),f=Object(l.a)(d,2),g=f[0],h=f[1],v=Object(n.useState)(void 0),E=Object(l.a)(v,2),b=E[0],y=E[1],C=function(){return u.length>0?"places=".concat(u.map((function(e){return e}))):""},k=function(){return g?"year_start=".concat(g):""},x=function(){return b?"year_end=".concat(b):""};return r.a.createElement(Ma.Provider,{value:{themeList:o,toggleThemes:function(e){return c(Pa(o,e))},isThemeSelected:function(e){return o.includes(e)},getQueryFilters:function(){var e=o.length>0?"themes=".concat(o.map((function(e){return e}))):"";return e+=e&&u?"&".concat(C()):C(),e+=e&&g?"&".concat(k()):k(),(e+=e&&b?"&".concat(x()):x())?"?".concat(e):e},togglePlaces:function(e){return p(Pa(u,e))},isPlaceSelected:function(e){return u.includes(e)},initFilters:function(){c([]),p([])},addYearFromToQuery:function(e){Da(e)&&h(e)},addYearToToQuery:function(e){Da(e)&&y(e)},yearFrom:g,yearTo:b}},a)}Ra.defaultProps={children:null};var La=Ma,Ga=Object(pe.a)((function(){return{fabTheme:{borderRadius:"0 !important",padding:"0.5em",margin:"0.2em",fontSize:"0.7rem",textTransform:"capitalize","&:hover":{backgroundColor:"#7a1dcf",color:"#fff"}},selected:{backgroundColor:"#7a1dcf",color:"#fff","&:hover":{}}}}));function Va(e){var a=Object(n.useContext)(La).toggleThemes,t=e.themeValue,i=e.selected,o=Object(n.useState)(i),c=Object(l.a)(o,2),m=c[0],s=c[1],u=Ga();return r.a.createElement(Aa.a,{className:m?Ba()([u.fabTheme,u.selected]):u.fabTheme,variant:"extended",size:"small",onClick:function(){return s(!m),void a(t)}},t)}function Fa(){var e=Object(n.useContext)(La).isThemeSelected,a=Object(n.useState)(null),t=Object(l.a)(a,2),i=t[0],o=t[1];return Object(n.useEffect)((function(){Ve.getVocabulary("temi-ms",(function(e){o(e.sort())}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,r.a.createElement(Ae.a,{id:"app.themes"})),i&&i.map((function(a,t){return r.a.createElement(Va,{key:t,themeValue:a.trim(),selected:e(a.trim())})})))}Va.defaultProps={themeValue:null,selected:!1};var Ha=Object(pe.a)((function(e){return{dialogContainer:{"& .MuiDialog-paperFullScreen":{backgroundColor:"#000000f2"}},filterBtn:{backgroundColor:"#fff",padding:".4em 2em",fontSize:"1em",borderRadius:"2px",color:"#000",fontWeight:"600","&:hover":{backgroundColor:"#e0e0e0"}},appBar:{position:"relative",backgroundColor:"transparent",boxShadow:"none",display:"flex",flexDirection:"row-reverse"},iconMenu:{fontSize:"2.5rem"},dialogContent:{"& h2":{fontSize:"3.2em",marginBottom:"0.2em",marginTop:"0"}},paper:Object(Oe.a)({backgroundColor:"transparent",color:"#fff",textAlign:"left"},e.breakpoints.down(960),{textAlign:"center"}),footerContainer:{padding:"0"},clearIcon:{fontSize:"2.3rem",marginRight:"0.2em"},clearBtn:{color:"#989898",fontWeight:"bold",fontSize:"1.2em"},applyBtn:{backgroundColor:"#7a1dcf",color:"#fff",padding:"0.4em 3em",fontSize:"1.6em",borderRadius:"0","&:hover":{backgroundColor:"#530e92"}}}})),Wa=r.a.forwardRef((function(e,a){return r.a.createElement(Ta.a,Object.assign({direction:"up",ref:a},e))}));function qa(){var e=Object(n.useContext)(La),a=e.getQueryFilters,t=e.initFilters,i=Ha(),o=Object(n.useState)(!1),c=Object(l.a)(o,2),s=c[0],u=c[1],p=Object(m.f)(),d=function(){u(!1)};return r.a.createElement("div",null,r.a.createElement(he.a,{color:"primary",className:i.filterBtn,onClick:function(){u(!0)}},r.a.createElement(Ae.a,{id:"app.themes"})),r.a.createElement(Na.a,{className:i.dialogContainer,fullScreen:!0,open:s,onClose:d,TransitionComponent:Wa},r.a.createElement(je.a,{className:i.appBar},r.a.createElement(Se.a,null,r.a.createElement(Te.a,{edge:"start",color:"inherit",onClick:d,"aria-label":"close"},r.a.createElement(_e.a,{className:i.iconMenu})))),r.a.createElement(za.a,{className:i.dialogContent},r.a.createElement(Ye.a,{container:!0,spacing:3},r.a.createElement(Ye.a,{item:!0,xs:12},r.a.createElement(Ia.a,{className:i.paper},r.a.createElement(Fa,null))))),r.a.createElement(_a.a,{className:i.footerContainer},r.a.createElement(he.a,{onClick:function(){t(),p.push(window.location.pathname),d()},className:i.clearBtn},r.a.createElement(_e.a,{className:i.clearIcon}),r.a.createElement(Ae.a,{id:"app.filterModal.clear"})),r.a.createElement(he.a,{className:i.applyBtn,onClick:function(){p.push(a()),d()},autoFocus:!0},r.a.createElement(Ae.a,{id:"app.filterModal.apply"})))))}var Ua=Object(pe.a)((function(e){return{boxContainer:{height:200,display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"3rem"},textBox:{color:"#fff",marginTop:"1em",paddingTop:"1em"},mainTitle:{fontSize:"2em",marginBlockStart:"0"},yearButton:{color:"#fff",fontWeight:"900","&.active":{backgroundColor:"#7a1dcf"}},filterContainer:{textAlign:"right"}}}));function Ja(e){var a=Ua(),t=Object(m.f)(),n=Je.a.parse(e.location.search,{ignoreQueryPrefix:!0}),i=e.lang||e.match.params.lang,o=function(e){t.push(e)};return r.a.createElement(ta,{lang:i},r.a.createElement(fe.a,{className:a.boxContainer,component:"div"},r.a.createElement(ge.a,{className:a.textBox},r.a.createElement("h5",null,"HOME MOVIES DIGITAL ARCHIVES"),r.a.createElement("h1",{className:a.mainTitle},"memoryscapes 01",r.a.createElement("br",null),"lungo la via emilia")),r.a.createElement(ge.a,null,r.a.createElement(Ye.a,{justify:"space-between",container:!0,alignItems:"center"},r.a.createElement(Ye.a,{item:!0,xs:9},r.a.createElement(ge.a,{component:"div"},r.a.createElement(he.a,{classes:{root:a.yearButton},className:n.decade?"":"active",onClick:function(){return o("./")}},r.a.createElement(Ae.a,{id:"app.search.all"})),[30,40,50,60,70,80].map((function(e,t){return r.a.createElement(he.a,{classes:{root:a.yearButton},className:Number(n.decade)===e?"active":"",key:t,onClick:function(){return o("./?decade=".concat(e))}},"'",e)})))),r.a.createElement(Ye.a,{item:!0,className:a.filterContainer,xs:3},r.a.createElement(Ra,null,r.a.createElement(qa,null)))))),r.a.createElement(Sa,{qs:n}))}var Qa=t(135),Ya=t(137),Ka=t.n(Ya),Xa=Object(pe.a)((function(){return{fabTheme:{borderRadius:"0 !important",padding:"0.5em",margin:"0.2em",fontSize:"0.7rem",textTransform:"capitalize",height:"2.2rem","&:hover":{backgroundColor:"#7a1dcf",color:"#fff"}},button:{color:"#fff",textTransform:"none",textAlign:"left",padding:0,textDecoration:"none","&:hover":{fontWeight:"bold"}},videoWrapper:{height:0,overflow:"hidden",paddingBottom:"75%",paddingTop:"30px",position:"relative"},iframe:{height:"100%",left:0,position:"absolute",top:0,width:"100%"}}})),$a=function(e){return(e=(e=(e=e.trim()).replace("POINT(","")).replace(")","")).split(" ").map((function(e){return Math.round(1e3*parseFloat(e))/1e3}))};function Za(e){var a=Xa(),t=Object(n.useState)(),i=Object(l.a)(t,2),o=i[0],c=i[1],s=Object(m.f)(),u=e.id;if(Object(n.useEffect)((function(){Ve.getOne(parseInt(u),(function(e){c(e)}))}),[u]),!o)return r.a.createElement(ca.a,null);var p=o.core,d=o.geodata[0];return r.a.createElement(ge.a,{style:{color:"#fff"}},r.a.createElement(Ka.a,null,r.a.createElement("meta",{property:"og:title",content:"Memoryscapes: ".concat(p.tit.val)}),r.a.createElement("meta",{property:"og:description",content:"Memoryscapes: la prima piattaforma online sul cinema privato in Italia"}),r.a.createElement("meta",{property:"og:image",content:"https://img.youtube.com/vi/".concat(p.videoid.val,"/0.jpg")}),r.a.createElement("meta",{property:"og:url",content:window.location}),r.a.createElement("title",null,"Memoryscapes: ",p.tit.val)),r.a.createElement(Ye.a,{container:!0,spacing:1,justify:"center"},r.a.createElement(Ye.a,{item:!0,xs:12,md:6,style:{textAlign:"center"}},r.a.createElement("h1",null,p.tit.val),r.a.createElement("div",{className:a.videoWrapper},r.a.createElement(Qa.a,{videoId:p.videoid.val,className:a.iframe,onEnd:function(e){e.target.seekTo(0),e.target.stopVideo()}})))),r.a.createElement(Ye.a,{container:!0,spacing:1,justify:"center"},r.a.createElement(Ye.a,{item:!0,xs:6,md:2},r.a.createElement(ge.a,{my:5},r.a.createElement("h3",null,r.a.createElement(Ae.a,{id:"app.clip.author"})),r.a.createElement(he.a,{className:a.button,onClick:function(){s.push("../search/?author=".concat(p.aut.val))}},p.aut.val),r.a.createElement("h3",null,r.a.createElement(Ae.a,{id:"app.clip.place"})),r.a.createElement(he.a,{className:a.button,onClick:function(){s.push("../search/?places=".concat(p.luogo.val))}},p.luogo.val),r.a.createElement("h3",null,r.a.createElement(Ae.a,{id:"app.clip.inv"})),p.inv.val)),r.a.createElement(Ye.a,{item:!0,xs:6,md:2},r.a.createElement(ge.a,{my:5},r.a.createElement("h3",null,r.a.createElement(Ae.a,{id:"app.clip.format"})),p.formato.val,r.a.createElement("h3",null,r.a.createElement(Ae.a,{id:"app.clip.year"})),p.annoda.val,p.annoda.val!==p.annoa.val?"-".concat(p.annoa.val):"",d&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,r.a.createElement(Ae.a,{id:"app.clip.map"})),r.a.createElement(he.a,{className:a.button,onClick:function(){s.push("../map/?center=".concat($a(d.geometry).join(",")))}},r.a.createElement(sa.a,{fontSize:"small"})," ")))),r.a.createElement(Ye.a,{item:!0,xs:12,md:2},r.a.createElement(ge.a,{my:5},p.descr.val))),r.a.createElement(Ye.a,{container:!0,spacing:1,justify:"center"},r.a.createElement(Ye.a,{item:!0,xs:8,style:{textAlign:"center"}},r.a.createElement("h3",null,r.a.createElement(Ae.a,{id:"app.themes"})),p.temi.val.split(";").map((function(e,t){return r.a.createElement(Aa.a,{key:t,variant:"extended",className:a.fabTheme,onClick:function(){return s.push("../search/?themes=".concat(e.trim()))}},e.trim())})))),r.a.createElement(ge.a,{my:5,py:3,borderTop:1,borderColor:"grey.500",textAlign:"center"},r.a.createElement(he.a,{className:a.button,onClick:function(){s.push("../search/")}},r.a.createElement(Ae.a,{id:"app.clip.back2archive"}))),r.a.createElement(Sa,{qs:{place:p.luogo.val},exclude:p.id.val,suppressEmpty:!0,title:r.a.createElement(Ae.a,{id:"app.clip.same_place",values:{place:p.luogo.val}})}))}function et(e){var a=e.match.params.id,t=e.match.params.lang;return r.a.createElement(ta,{lang:t},r.a.createElement(ge.a,{pt:"5rem"},r.a.createElement(Za,{id:a})))}t(192);function at(e){var a=e.lang;return r.a.createElement("div",{className:"blackBg"},r.a.createElement(Pe,{lang:a}),r.a.createElement(de.a,{className:"mw-700"},e.children))}var tt=Object(pe.a)((function(e){return{boxContainer:{padding:e.spacing(3,2),display:"flex",flexDirection:"column",justifyContent:"center"},textBox:{textAlign:"center",color:"#fff"},mainTitle:{fontSize:"3.2em",letterSpacing:"0.1em",marginBlockStart:"0"}}}));function nt(e){var a=tt(),t=e.lang||e.match.params.lang;return r.a.createElement(at,{lang:t},r.a.createElement(fe.a,{className:a.boxContainer,component:"div"},r.a.createElement(ge.a,{className:a.textBox},r.a.createElement("h5",null,"HOME MOVIES DIGITAL ARCHIVE"),r.a.createElement("h2",{className:a.mainTitle},"memoryscapes 01",r.a.createElement("br",null)," lungo la via emilia"),r.a.createElement("p",null,r.a.createElement("strong",null,"percorsi tematici, geografici e cronologici nel cinema privato")),r.a.createElement("p",null,r.a.createElement("em",null,"lungo la via emilia")," \xe8 la prima uscita di memoryscapes, il progetto di Home Movies per l\u2019accesso on line al patrimonio audiovisivo privato del secolo scorso."),r.a.createElement("p",null,r.a.createElement("em",null,"lungo la via emilia")," propone una fruizione esperienziale e narrativa dei contenuti d\u2019archivio per mezzo di chiavi d\u2019accesso ai temi presenti nelle pellicole, alla geografia dei luoghi filmati, alla cronologia e agli autori/autrici. Un viaggio nel tempo e nello spazio, dagli Appennini al Po, dalle citt\xe0 alla pianura e al mare. Ogni singola clip costituisce una microstoria e allo stesso tempo diviene una singola tessera di un mosaico di storie virtualmente infinito e componibile liberamente. Buona navigazione!"),r.a.createElement("p",null,r.a.createElement("em",null,"lungo la via emilia")," \xe8 frutto di un lungo lavoro di ricerca, selezione, descrizione, digitalizzazione ed edizione video di pellicole Super8, 8mm, 16mm e 9,5mm girate tra gli anni \u201830 e gli anni \u201880 del XX secolo."),r.a.createElement("p",null,"Per commenti e suggerimenti scrivi a: ",r.a.createElement("a",{href:"mailto: info@homemovies.it"},"info@homemovies.it")),r.a.createElement("h3",null,"Credits"),r.a.createElement("p",null,"Un progetto di Home Movies"),r.a.createElement("p",null,r.a.createElement("strong",null,"Comitato scientifico"),": Marco Bertozzi (IUAV), Luisa Cigognetti (Istituto Storico Parri), Michele Guerra (Universit\xe0 di Parma), Giacomo Manzoli (Universit\xe0 di Bologna), Rick Prelinger (University of California Santa Cruz)."),r.a.createElement("h4",null,"Team del progetto"),r.a.createElement("ul",{style:{listStyle:"none"}},r.a.createElement("li",null,"Direzione: Paolo Simoni"),r.a.createElement("li",null,"Architettura e gestione dei contenuti: Ilaria Ferretti"),r.a.createElement("li",null,"Producer: Giulia Simi"),r.a.createElement("li",null,"Ricerche, descrizioni ed editing: Ilaria Ferretti, Chiara Petrucci, Silvia Savorelli, Paolo Simoni"),r.a.createElement("li",null,"Restauro e digitalizzazione pellicole: Mirco Santi, Giuseppe Fara"),r.a.createElement("li",null,"Post-produzione video: Michele Manzolini, Davide Bianchi, Tommaso Querin"),r.a.createElement("li",null,"Realizzazione db e web: Bradypus"),r.a.createElement("li",null,"Grafica: Giulia Ripa")),r.a.createElement("h4",null,"Partner istituzionali"),r.a.createElement("p",null,"Istituto Storico Parri e Kin\xe8 societ\xe0 cooperativa"),r.a.createElement("p",null,"Il progetto \xe8 realizzato con il contributo di Regione Emilia-Romagna e MiBACT"),r.a.createElement("p",null,"Gli archivi audiovisivi da cui sono tratte le clip sono stati raccolti, digitalizzati, catalogati assieme a: Associazione Home Movies Emilia Romagna nel quadro di un\u2019attivit\xe0 sostenuta da Comune di Reggio Emilia. Reggiani per esempio), Universit\xe0 di Modena e Reggio Emilia, Biblioteca Panizzi, Associazione Sguardi in Camera di Ravenna e Cineteca di Rimini."))))}function rt(){var e=Object(n.useState)(),a=Object(l.a)(e,2),t=a[0],i=a[1],o=Object(n.useState)(),c=Object(l.a)(o,2),m=c[0],s=c[1];if(Object(n.useEffect)((function(){Ve.getVocabulary("temi-ms",(function(e){i(e),Ve._getData("ms?verb=search&type=encoded",{"fields[temi]":"Temi",limit_start:"0",limit_end:"1500",q_encoded:btoa(" temi is not null AND temi != ''")},(function(e){s(e)}))}))}),[]),!t||!m)return r.a.createElement("p",null,"Hold on... Fetching the data from the database...");var u=[];m.records.forEach((function(e){e.temi.split(";").forEach((function(e){e=e.trim(),u.includes(e)||u.push(e)}))}));var p=t.map((function(e){return!u.includes(e)&&e})).filter(Boolean);return r.a.createElement(de.a,null,r.a.createElement("p",null,"Valori del menu temi-ms non usati"),r.a.createElement("ol",null,p.map((function(e,a){return r.a.createElement("li",{key:a},e)}))))}var it=t(77);window.location.href.match(/ms-emilia-romagna\.homemovies\.it/g)&&(it.a.initialize("UA-151640045-2"),it.a.pageview(window.location.pathname+window.location.search));var ot={it:se,en:ue};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(){var e=Object(n.useState)(me.defaultTheme),a=Object(l.a)(e,1)[0],t=Object(n.useState)("it"),i=Object(l.a)(t,2),o=i[0],d=i[1];return r.a.createElement(p.a,{locale:o,messages:ot[o]},r.a.createElement(s.a,{theme:a},r.a.createElement(u.a,null),r.a.createElement(c.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:function(){return r.a.createElement(ye,{changeLang:d})}}),r.a.createElement(m.a,{exact:!0,path:"/:lang(en|it)/map/",component:Qe}),r.a.createElement(m.a,{exact:!0,path:"/:lang(en|it)/search/",component:Ja}),r.a.createElement(m.a,{exact:!0,path:"/:lang(en|it)/clip/:id",component:et}),r.a.createElement(m.a,{exact:!0,path:"/:lang(en|it)/about",component:nt}),r.a.createElement(m.a,{exact:!0,path:"/unused",component:rt})))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[147,1,2]]]);
//# sourceMappingURL=main.fd550849.chunk.js.map