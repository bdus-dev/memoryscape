(this.webpackJsonpmemoryscape=this.webpackJsonpmemoryscape||[]).push([[0],{123:function(e){e.exports=JSON.parse('{"app.menu.map":"Mappa","app.menu.archive":"Archivio","app.menu.about":"Il progetto","app.search.filters":"Filtri","app.search.all":"Tutto","app.pagination.page":"Pagina {pageNo}","app.pagination.recap":"Clip {start} - {end} di {tot}","app.filterModal.year":"Anno","app.filterModal.places":"Luoghi","app.themes":"Temi","app.filterModal.clear":"Svuota","app.filterModal.apply":"Applica","app.clip.author":"Autore","app.clip.place":"Luogo","app.clip.year":"Anno","app.clip.format":"Formato","app.clip.map":"Mappa","app.clip.inv":"Inventario","app.clip.same_place":"Altre clip girate a {place}","app.clip.back2archive":"Torna all\'archivio","app.for":"per"}')},124:function(e){e.exports=JSON.parse('{"app.menu.map":"Map","app.menu.archive":"Archive","app.menu.about":"Informazioni","app.search.filters":"Filters","app.search.all":"All","app.pagination.page":"Page {pageNo}","app.pagination.recap":"Clips {start} - {end} of {tot}","app.filterModal.year":"Year","app.filterModal.places":"Places","app.themes":"Themes","app.filterModal.clear":"Clear","app.filterModal.apply":"Apply","app.clip.author":"Author","app.clip.place":"Place","app.clip.year":"Year","app.clip.format":"Format","app.clip.map":"Map","app.clip.inv":"Inventory","app.clip.same_place":"Other clips filmed in {place}","app.clip.back2archive":"Torna all\'archivio","app.for":"for"}')},125:function(e,a,t){e.exports=t.p+"static/media/home-background-er.69f0cdef.jpg"},126:function(e,a,t){e.exports=t.p+"static/media/home-background-italia.df376d2d.jpg"},155:function(e,a,t){e.exports=t(202)},183:function(e,a,t){},201:function(e,a,t){},202:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(8),r=t.n(o),l=t(10),c=t(33),m=t(43),s=t(252),u=t(253),p=t(255),d=t(146),g=t(103),f=t.n(g),h=t(104),E=t.n(h),v=t(105),b=t.n(v),y=t(106),C=t.n(y),k=t(107),x=t.n(k),z=t(108),O=t.n(z),j=t(109),S=t.n(j),I=t(110),T=t.n(I),N=t(111),B=t.n(N),M=t(112),w=t.n(M),A=t(113),P=t.n(A),_=t(114),R=t.n(_),D=t(115),L=t.n(D),G=t(116),F=t.n(G),H=t(117),V=t.n(H),W=t(118),U=t.n(W),q=t(119),K=t.n(q),Q=t(120),J=t.n(Q),Y=t(121),X=t.n(Y),$=t(122),Z=t.n($),ee={red:{id:"red",name:"Red",import:E.a},pink:{id:"pink",name:"Pink",import:b.a},purple:{id:"purple",name:"Purple",import:C.a},deepPurple:{id:"deep-purple",name:"Deep Purple",import:x.a},indigo:{id:"indigo",name:"Indigo",import:O.a},blue:{id:"blue",name:"Blue",import:S.a},lightBlue:{id:"light-blue",name:"Light Blue",import:T.a},cyan:{id:"cyan",name:"Cyan",import:B.a},teal:{id:"teal",name:"Teal",import:w.a},green:{id:"green",name:"Green",import:P.a},lightGreen:{id:"light-green",name:"Light Green",import:R.a},lime:{id:"lime",name:"Lime",import:L.a},yellow:{id:"yellow",name:"Yellow",import:F.a},amber:{id:"amber",name:"Amber",import:V.a},orange:{id:"orange",name:"Orange",import:U.a},deepOrange:{id:"deep-orange",name:"Deep Orange",import:K.a},brown:{id:"brown",name:"Brown",import:J.a},gray:{id:"gray",name:"Gray",import:X.a},blueGray:{id:"blue-gray",name:"Blue Gray",import:Z.a}},ae={light:{id:"light",name:"Light"},dark:{id:"dark",name:"Dark"}},te=function(e){return e?(e=f.a.camelCase(e),ee[e]):null},ne=function(e){return e?ae[e]:null},ie=te("blue"),oe=te("red"),re=ne("light"),le=Object(d.a)({palette:{primary:ie.import,secondary:oe.import,type:re.id},primaryColor:ie,secondaryColor:oe,type:re,typography:{fontFamily:"Poppins"},overrides:{MuiCssBaseline:{"@global":{"@font-face":"Poppins"}}}}),ce={};ce.colors=ee,ce.types=ae,ce.defaultPrimaryColor=ie,ce.defaultSecondaryColor=oe,ce.defaultType=re,ce.defaultTheme=le,ce.isDefaultTheme=function(e){return!!e&&(e.primaryColor.id===ie.id&&e.secondaryColor.id===oe.id&&e.type.id===re.id)},ce.createTheme=function(e){if(!e)return null;var a=e,t=a.primaryColor,n=a.secondaryColor,i=a.type;return t&&n&&i?(t=te(t),n=te(n),i=ne(i),t&&n&&i?e=Object(d.a)({palette:{primary:t.import,secondary:n.import,type:i.id},primaryColor:t,secondaryColor:n,type:i}):null):null};var me=ce,se=t(123),ue=t(124),pe=t(207),de=t(236),ge=t(237),fe=t(254),he=t(205),Ee=t(125),ve=t.n(Ee),be=t(126),ye=t.n(be),Ce={er:{app:"er",col:"#7a1dcf",title:{main:"memoryscapes 01",sub:"lungo la via emilia"}},italia:{app:"italia",col:"#245344",title:{main:"memoryscapes 02",sub:"cartoline italiane"}}}[window.location.href.includes("ms-emilia-romagna.homemovies.it")?"er":"italia"],ke=Ce.app,xe=Ce.col,ze=Ce.title,Oe=Object(pe.a)((function(e){return{homeContainer:{backgroundImage:"url(".concat("er"===ke?ve.a:ye.a,")"),backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover",maxWidth:"100%"},boxContainer:{padding:e.spacing(3,2),height:200,display:"flex",flexDirection:"column",justifyContent:"center"},textBox:{textAlign:"center",color:"#fff",marginTop:"auto",paddingTop:"9em"},mainTitle:{fontSize:"3.2em",marginBlockStart:"0"},languageContainer:{marginTop:"auto",marginBottom:"6em",textAlign:"center"},buttomLang:{color:"#fff",fontWeight:"900"}}}));function je(e){var a=e.changeLang,t=Oe(),n=Object(m.f)();return i.a.createElement("div",{className:t.homeContainer},i.a.createElement(de.a,{fixed:!0},i.a.createElement(ge.a,{className:t.boxContainer,component:"div",style:{height:"100vh"}},i.a.createElement(fe.a,{className:t.textBox},i.a.createElement("h5",null,"HOME MOVIES DIGITAL ARCHIVE"),i.a.createElement("h2",{className:t.mainTitle},ze.main,i.a.createElement("br",null),ze.sub)),i.a.createElement(fe.a,{className:t.languageContainer},i.a.createElement(he.a,{className:t.buttomLang,onClick:function(){return a(e="it"),void n.push("/".concat(e,"/search/"));var e}},"Vai all'archivio")))))}var Se=t(259),Ie=t(263),Te=t(260),Ne=t(29),Be=t(238),Me=t(240),we=t(239),Ae=t(131),Pe=t.n(Ae),_e=t(60),Re=t.n(_e),De=t(258),Le=t(262),Ge=t(257),Fe=Object(pe.a)((function(e){var a;return{appBar:{backgroundColor:"transparent",boxShadow:"none"},fabButton:{position:"absolute",right:"1rem",top:"1rem",background:"transparent",color:"#fff","&:hover":{background:"".concat(xe," !important"),color:"#fff"}},iconMenu:{fontSize:"2.5rem"},popoverPaper:Object(Ne.a)({width:"100%",height:"100vh",maxHeight:"100vh",maxWidth:"unset",top:"0 !important",backgroundColor:"#000000f2",display:"flex",flexDirection:"column",justifyContent:"center",left:"0 !important"},e.breakpoints.down(800),{textAlign:"center"}),menuContent:(a={maxHeight:"100vh",display:"flex",flexDirection:"row"},Object(Ne.a)(a,e.breakpoints.down(800),{flexDirection:"column"}),Object(Ne.a)(a,"justifyContent","center"),Object(Ne.a)(a,"position","initial"),Object(Ne.a)(a,"& div",Object(Ne.a)({marginRight:"3em"},e.breakpoints.down(800),{margin:"auto"})),a),menuItem:{color:"#fff",fontSize:"3.4em",fontWeight:"700","&:hover":{color:xe}},colorWhite:{color:"#fff"},contactParagraph:{color:"#7b7878",fontSize:"1em",lineHeight:"1.8em"},titleMenu:{letterSpacing:"0.1em"},menuLink:{textDecoration:"none",display:"block","&:hover":{textDecoration:"none"}},closeMenuContainer:{position:"absolute",marginRight:"0.8em !important",top:"0",right:"0","& button":{color:"#fff",fontSize:"2.5rem"}}}}));function He(e){var a=Fe(),t=Object(n.useState)(null),o=Object(l.a)(t,2),r=o[0],c=o[1],s=Object(m.f)(),u=e.lang,p=function(){c(null)},d=function(e){s.push(e)};return i.a.createElement(Be.a,{color:"primary",position:"fixed",className:a.appBar},i.a.createElement(we.a,{onClick:function(e){c(e.currentTarget)},className:a.fabButton},i.a.createElement(Pe.a,{className:a.iconMenu})),i.a.createElement(De.a,{PopoverClasses:{paper:a.popoverPaper},classes:{list:a.menuContent},id:"main-menu",anchorEl:r,open:Boolean(r),onClose:p,keepMounted:!0},i.a.createElement("div",{className:a.closeMenuContainer},i.a.createElement(Me.a,{onClick:p},i.a.createElement(Re.a,{className:a.iconMenu}))),i.a.createElement("div",null,i.a.createElement(Le.a,{onClick:function(){return d("/")},className:a.menuItem},"Home"),i.a.createElement(Le.a,{onClick:function(){return d("/".concat(u,"/map"))},className:a.menuItem},i.a.createElement(Ge.a,{id:"app.menu.map"}))),i.a.createElement("div",null,i.a.createElement(Le.a,{onClick:function(){return d("/".concat(u,"/search/"))},className:a.menuItem},i.a.createElement(Ge.a,{id:"app.menu.archive"})),i.a.createElement(Le.a,{onClick:function(){return d("/".concat(u,"/about"))},className:a.menuItem},i.a.createElement(Ge.a,{id:"app.menu.about"}))),i.a.createElement("div",{className:a.colorWhite},i.a.createElement("h5",{className:a.titleMenu},"HOME MOVIES DIGITAL ARCHIVE"),i.a.createElement("p",{className:a.contactParagraph},"Home Movies",i.a.createElement("br",null),"Via Sant\u2019Isaia, 18 - 40123 Bologna, IT",i.a.createElement("br",null),"Call - (+39) 051 3397243",i.a.createElement("br",null),"Email -",i.a.createElement("span",{className:a.colorWhite},"info@homemovies.it")))))}var Ve=t(39),We=t(40),Ue=t(132),qe=t.n(Ue),Ke=function(){function e(){Object(Ve.a)(this,e)}return Object(We.a)(e,null,[{key:"_getData",value:function(e,a,t,n){var i="https://db-dev.bradypus.net";"localhost"===window.location.hostname&&(i="http://db.localhost"),i+="/api/".concat(2===n?"v2/":"","hm/"),qe()({method:"post",url:i+e,params:a,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){if(e.data.type&&"error"===e.data.type)return console.log("API error:"),console.log(e.data.text),!1;t(e.data)})).catch((function(e){e instanceof Error?console.log(e.message):console.log(e.data)}))}},{key:"getOne",value:function(e,a){this._getData("",{tb:"ms",verb:"read",id:e},(function(e){a(e)}),2)}},{key:"getAll",value:function(e,a){this._getData("ms",{verb:"search",type:"encoded",q_encoded:btoa("app LIKE  '%".concat(ke,"%'")),page:e},(function(e){a(e)}))}},{key:"getUniqueVal",value:function(e,a,t,n){this._getData("",{verb:"getUniqueVal",tb:"ms",fld:e,s:a,w:t},(function(e){n(e)}),2)}},{key:"getVocabulary",value:function(e,a){this._getData("",{verb:"getVocabulary",voc:e},(function(e){a(e)}),2)}},{key:"getDecade",value:function(e,a,t){var n=[20,30,40,50,60,70,80,90];if(!n.includes(e))return console.log("Invalid parameter decade: ".concat(e,": only one of ").concat(n.join(",")," is allowed")),!1;var i=parseInt("19".concat(e)),o=i+10,r={verb:"search",type:"encoded",q_encoded:btoa("(app LIKE  '%".concat(ke,"%') AND annoda < ").concat(o," AND annoa >= ").concat(i)),page:a};this._getData("ms",r,(function(e){t(e)}))}},{key:"getByPlacesAndThemse",value:function(e,a,t,n){e||a||n(!1);var i=["(app LIKE '%".concat(ke,"%')")];e&&e.split(",").forEach((function(e,a){i.push(' luogo = "'.concat(e,'" '))})),a&&a.split(",").forEach((function(e,a){i.push(' temi LIKE "%'.concat(e,'%" '))})),this._getData("ms",{verb:"search",type:"encoded",q_encoded:btoa(i.join(" AND ")),page:t},(function(e){n(e)}))}},{key:"getByAuthor",value:function(e,a,t){this._getData("ms",{verb:"search",type:"encoded",q_encoded:btoa("(app LIKE  '%".concat(ke,"%') AND aut LIKE '%").concat(e,"%'")),page:a},(function(e){t(e)}))}},{key:"getMsGeoJson",value:function(e,a){var t={join:"JOIN hm__geodata as g ON g.table_link = 'hm__ms' AND g.id_link = hm__ms.id ","fields[g.geometry]":"Geometry","fields[hm__ms.id]":"Id","fields[hm__ms.videoid]":"ID Video","fields[hm__ms.tit]":"Titolo","fields[hm__ms.aut]":"Autore","fields[hm__ms.annoda]":"Anno da","fields[hm__ms.annoa]":"Anno a",group:"hm__ms.id",limit_start:"0",limit_end:"500",q_encoded:btoa(e?"("+e.replace(/`id`/gi,"`hm__ms`.`id`")+") AND app LIKE '%".concat(ke,"%'"):"app LIKE '%".concat(ke,"%'"))};this._getData("ms?verb=search&geojson=true&type=encoded",t,(function(e){a(e)}))}}]),e}(),Qe=function(e,a,t){var n=e.properties,i="<h3>".concat(n.tit,'</h3>\n  <img src="https://img.youtube.com/vi/').concat(n.videoid,'/0.jpg" alt={row.tit} alt="').concat(n.tit,'" />\n  <p>').concat(n.aut,"\n  ").concat(n.annoda?"<br /><strong>".concat(n.annoda,"</strong>"):"",'</p>\n  <p class="button"><a style="background-color: ').concat(xe,'" href="/').concat(t,"/clip/").concat(n.id,'">Apri</a></p>\n  ');a.bindPopup(i)},Je=t(17),Ye=t.n(Je),Xe=function(e,a){return new Ye.a.CircleMarker(a,{radius:6,weight:1,color:xe,fillOpacity:.7})},$e=(t(183),t(34)),Ze=t.n($e);function ea(e){var a=Ze.a.parse(e.location.search,{ignoreQueryPrefix:!0}),t=e.lang||e.match.params.lang,o=!1,r=13;e.center?o=e.center:a.center&&(o=a.center.split(",").reverse(),r=16);var c=o||[44.4943823,11.3418609],m=Object(n.useState)(),s=Object(l.a)(m,2),u=s[0],p=s[1],d=Object(n.useState)(i.a.createRef()),g=Object(l.a)(d,1)[0];return Object(n.useEffect)((function(){Ke.getMsGeoJson("1",(function(e){p(e)}))}),[]),i.a.createElement("div",{className:"mapContainer"},i.a.createElement(He,{lang:t}),i.a.createElement(Se.a,{center:c,zoom:r,style:{width:"100%",height:"100%"},ref:g},i.a.createElement(Ie.a,{url:"https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),u&&i.a.createElement(Te.a,{data:u,pointToLayer:function(e,a){return Xe(e,a)},onEachFeature:function(e,a){return Qe(e,a,t)},onAdd:function(e){if(!o){var a=e.target.getBounds();g.current.leafletElement.fitBounds(a)}}})))}var aa=t(241),ta=t(135),na=t(70),ia=t.n(na),oa=t(71),ra=t.n(oa),la=Object(pe.a)((function(e){return{homeContainer:{backgroundImage:"url(".concat(ia.a,")"),backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover",maxWidth:"100%",height:"100vh",width:"100vw",position:"fixed",overflow:"scroll"},video:{background:"#000000",position:"fixed",right:0,bottom:0,zIndex:-1,minWidth:"100%",minHeight:"100%"}}}));function ca(e){var a=la(),t=e.lang;return ta.isMobile?i.a.createElement("div",{className:a.homeContainer},i.a.createElement(He,{lang:t}),i.a.createElement(de.a,{fixed:!0},e.children)):i.a.createElement("div",{className:a.darkBg},i.a.createElement("video",{autoPlay:!0,loop:!0,className:a.video},i.a.createElement("source",{src:ra.a,type:"video/mp4"})),i.a.createElement(He,{lang:t}),i.a.createElement(de.a,{fixed:!0},e.children))}var ma=t(245),sa=t(246),ua=t(247),pa=t(72),da=t.n(pa),ga=t(244),fa=t(73),ha=t.n(fa),Ea=t(140),va=t.n(Ea),ba=t(139),ya=t(243),Ca=t(242),ka=t(136),xa=t.n(ka),za=t(137),Oa=t.n(za),ja=t(138),Sa=t.n(ja);function Ia(e){var a=e.qs,t=[];return a.themes&&(t=t.concat(a.themes.split(","))),a.author&&(t=t.concat(a.author.split(","))),a.places&&(t=t.concat(a.places.split(","))),0===t.length?null:i.a.createElement(fe.a,{ml:1,component:"span"},i.a.createElement(Ge.a,{id:"app.for"})," ",i.a.createElement("em",null,t.join(", ")))}var Ta=Object(pe.a)((function(e){return{button:{backgroundColor:xe,"&:not(:last-child)":{borderRight:"1px solid #fff"},"&:hover":{backgroundColor:xe}}}}));function Na(e){var a=Ta(),t=Object(m.f)(),n=function(e){return t.push(e)},o=e.qs,r=e.head,l=parseInt(r.total_rows),c=30*parseInt(r.page)-30+1,s=c+parseInt(r.no_records_shown)-1,u=parseInt(r.page),p=parseInt(r.total_pages),d=!1;if(u-1>0){var g=Object.assign({},o);g.page=u-1,d="./?".concat(Ze.a.stringify(g))}var f=!1;if(u+1<=p){var h=Object.assign({},o);h.page=u+1,f="./?".concat(Ze.a.stringify(h))}var E=!1;if(u-1>1){var v=Object.assign({},o);v.page=1,E="./?".concat(Ze.a.stringify(v))}var b=!1;if(u+2<=p){var y=Object.assign({},o);y.page=p,b="./?".concat(Ze.a.stringify(y))}return i.a.createElement(fe.a,{p:1,my:2,style:{background:"rgba(255, 255, 255, .5)"}},i.a.createElement(aa.a,{justify:"space-between",container:!0,alignItems:"center"},i.a.createElement(aa.a,{item:!0},i.a.createElement(Ge.a,{id:"app.pagination.recap",values:{start:c,end:s,tot:l}}),i.a.createElement(Ia,{qs:o})),i.a.createElement(aa.a,{item:!0},i.a.createElement(Ca.a,{size:"small","aria-label":"small outlined button group",color:"secondary",variant:"contained",style:{background:"#fff"}},E&&i.a.createElement(he.a,{className:a.button,onClick:function(){return n(E)}},i.a.createElement(xa.a,null)),d&&i.a.createElement(he.a,{className:a.button,onClick:function(){return n(d)}},i.a.createElement(Oa.a,null)),(E||d||f||b)&&i.a.createElement(he.a,{className:a.button,disabled:!0},i.a.createElement(Ge.a,{id:"app.pagination.page",values:{pageNo:u}})," "),f&&i.a.createElement(he.a,{className:a.button,onClick:function(){return n(f)}},i.a.createElement(da.a,null)),b&&i.a.createElement(he.a,{className:a.button,onClick:function(){return n(b)}},i.a.createElement(Sa.a,null))))))}var Ba=Object(ba.a)({GridListTitle:{cursor:"pointer"},GridListTileBar:{background:"".concat(xe,"7f"),height:"100px"},GridListTileBarTitle:{textTransform:"uppercase",fontWeight:"900",fontSize:".9rem"},GridListTileBarSubtitle:{lineHeight:1.5},IconButton:{color:"rgba(255, 255, 255, 0.8)"}}),Ma=function(e){for(var a=e.records.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e.records[t],e.records[a]];e.records[a]=n[0],e.records[t]=n[1]}return e};function wa(e){var a=Object(n.useState)(!1),t=Object(l.a)(a,2),o=t[0],r=t[1],c=Object(n.useState)(1),s=Object(l.a)(c,2),u=s[0],p=s[1],d=Ba(),g=Object(m.f)(),f=e.qs,h=e.suppressEmpty,E=e.title,v=e.exclude,b=Object(ya.a)("(min-width:960px)")?3:1;return Object(n.useEffect)((function(){p(.3),f.decade?Ke.getDecade(parseInt(f.decade),f.page,(function(e){r(Ma(e)),p(1)})):f.places||f.themes?Ke.getByPlacesAndThemse(f.places,f.themes,f.page,(function(e){r(Ma(e)),p(1)})):f.author?Ke.getByAuthor(f.author,f.page,(function(e){r(Ma(e)),p(1)})):Ke.getAll(f.page,(function(e){r(Ma(e)),p(1)}))}),[f]),o?0===o.head.total_rows?h?null:i.a.createElement(de.a,null,i.a.createElement("p",{style:{color:"#fff",fontSize:"2rem"}},"Nessun risultato trovato!")):i.a.createElement(fe.a,{container:"div",style:{opacity:u}},E&&i.a.createElement("h2",null,E),!h&&i.a.createElement(Na,{head:o.head,qs:f}),i.a.createElement(ma.a,{cellHeight:280,cols:b,spacing:40},o.records.map((function(e,a){return v&&v===e.id?null:i.a.createElement(sa.a,{key:a,className:d.GridListTitle,onClick:function(){g.push("../clip/".concat(e.id)),window.scrollTo(0,0)}},i.a.createElement("img",{src:"https://img.youtube.com/vi/".concat(e.videoid,"/0.jpg"),alt:e.tit}),i.a.createElement(ua.a,{classes:{root:d.GridListTileBar,title:d.GridListTileBarTitle,subtitle:d.GridListTileBarSubtitle},title:i.a.createElement("span",null,e.tit," ",i.a.createElement(fe.a,{component:"span",mx:2}," | ")," ",i.a.createElement("strong",null,e.annoda,e.annoda!==e.annoa?"-".concat(e.annoa):"")),subtitle:i.a.createElement("span",null,i.a.createElement(ha.a,{fontSize:"small"})," ",e.luogo,i.a.createElement("br",null),i.a.createElement(va.a,{fontSize:"small"})," ",e.temi),actionIcon:i.a.createElement(Me.a,{onClick:function(){g.push("../clip/".concat(e.id)),window.scrollTo(0,0)},"aria-label":"info about ".concat(e.tit),classes:{root:d.IconButton}},i.a.createElement(da.a,null))}))})))):i.a.createElement(ga.a,null)}var Aa=t(248),Pa=t(261),_a=t(249),Ra=t(250),Da=t(206),La=t(251),Ga=t(141),Fa=t.n(Ga),Ha=Object(n.createContext)({});function Va(e,a){return e.includes(a)?(e.pop(),e):(e.pop(),e.push(a),e)}function Wa(e){return/^(19|20)\d{2}$/.test(e)}function Ua(e){var a=e.children,t=Object(n.useState)([]),o=Object(l.a)(t,2),r=o[0],c=o[1],m=Object(n.useState)([]),s=Object(l.a)(m,2),u=s[0],p=s[1],d=Object(n.useState)(void 0),g=Object(l.a)(d,2),f=g[0],h=g[1],E=Object(n.useState)(void 0),v=Object(l.a)(E,2),b=v[0],y=v[1],C=function(){return u.length>0?"places=".concat(u.map((function(e){return e}))):""},k=function(){return f?"year_start=".concat(f):""},x=function(){return b?"year_end=".concat(b):""};return i.a.createElement(Ha.Provider,{value:{themeList:r,toggleThemes:function(e){return c(Va(r,e))},isThemeSelected:function(e){return r.includes(e)},getQueryFilters:function(){var e=r.length>0?"themes=".concat(r.map((function(e){return e}))):" ";return e+=e&&u?"&".concat(C()):C(),e+=e&&f?"&".concat(k()):k(),(e+=e&&b?"&".concat(x()):x())?"?".concat(e):e},togglePlaces:function(e){return p(Va(u,e))},isPlaceSelected:function(e){return u.includes(e)},initFilters:function(){c([]),p([])},addYearFromToQuery:function(e){Wa(e)&&h(e)},addYearToToQuery:function(e){Wa(e)&&y(e)},yearFrom:f,yearTo:b}},a)}Ua.defaultProps={children:null};var qa=Ha,Ka=Object(pe.a)((function(){return{fabTheme:{borderRadius:"0 !important",padding:"0.5em",margin:"0.2em",fontSize:"0.7rem",textTransform:"capitalize","&:hover":{backgroundColor:xe,color:"#fff"}},selected:{backgroundColor:xe,color:"#fff","&:hover":{}}}}));function Qa(e){var a=Object(n.useContext)(qa).toggleThemes,t=e.themeValue,o=e.selected,r=e.applyFilter,c=Object(n.useState)(o),m=Object(l.a)(c,2),s=m[0],u=m[1],p=Ka();return i.a.createElement(we.a,{className:s?Fa()([p.fabTheme,p.selected]):p.fabTheme,variant:"extended",size:"small",onClick:function(){return u(!s),a(t),void r()}},t)}function Ja(e){var a=Object(n.useContext)(qa).isThemeSelected,t=e.applyFilter,o=Object(n.useState)(null),r=Object(l.a)(o,2),c=r[0],m=r[1];return Object(n.useEffect)((function(){Ke.getUniqueVal("temi",!1,"app LIKE '%".concat(ke,"%'"),(function(e){m(e.sort())}))}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,i.a.createElement(Ge.a,{id:"app.themes"})),c&&c.map((function(e,n){return i.a.createElement(Qa,{key:n,themeValue:e.trim(),selected:a(e.trim()),applyFilter:t})})))}Qa.defaultProps={themeValue:null,selected:!1,applyFilter:null},Ja.defaultProps={applyFilter:null};var Ya=Object(pe.a)((function(e){return{dialogContainer:{"& .MuiDialog-paperFullScreen":{backgroundColor:"#000000f2"}},filterBtn:{backgroundColor:"#fff",padding:".4em 2em",fontSize:"1em",borderRadius:"2px",color:"#000",fontWeight:"600","&:hover":{backgroundColor:"#e0e0e0"}},appBar:{position:"relative",backgroundColor:"transparent",boxShadow:"none",display:"flex",flexDirection:"row-reverse"},iconMenu:{fontSize:"2.5rem"},dialogContent:{"& h2":{fontSize:"3.2em",marginBottom:"0.2em",marginTop:"0"}},paper:Object(Ne.a)({backgroundColor:"transparent",color:"#fff",textAlign:"left"},e.breakpoints.down(960),{textAlign:"center"}),footerContainer:{padding:"0"},clearIcon:{fontSize:"2.3rem",marginRight:"0.2em"},clearBtn:{color:"#989898",fontWeight:"bold",fontSize:"1.2em"},applyBtn:{backgroundColor:xe,color:"#fff",padding:"0.4em 3em",fontSize:"1.6em",borderRadius:"0","&:hover":{backgroundColor:"#530e92"}}}})),Xa=i.a.forwardRef((function(e,a){return i.a.createElement(Aa.a,Object.assign({direction:"up",ref:a},e))}));function $a(){var e=Object(n.useContext)(qa),a=e.getQueryFilters,t=e.initFilters,o=Ya(),r=Object(n.useState)(!1),c=Object(l.a)(r,2),s=c[0],u=c[1],p=Object(m.f)(),d=function(){u(!1)};return i.a.createElement("div",null,i.a.createElement(he.a,{color:"primary",className:o.filterBtn,onClick:function(){u(!0)}},i.a.createElement(Ge.a,{id:"app.themes"})),i.a.createElement(Pa.a,{className:o.dialogContainer,fullScreen:!0,open:s,onClose:d,TransitionComponent:Xa},i.a.createElement(Be.a,{className:o.appBar},i.a.createElement(_a.a,null,i.a.createElement(Me.a,{edge:"start",color:"inherit",onClick:d,"aria-label":"close"},i.a.createElement(Re.a,{className:o.iconMenu})))),i.a.createElement(Ra.a,{className:o.dialogContent},i.a.createElement(aa.a,{container:!0,spacing:3},i.a.createElement(aa.a,{item:!0,xs:12},i.a.createElement(Da.a,{className:o.paper},i.a.createElement(Ja,{applyFilter:function(){p.push(a()),d()}}))))),i.a.createElement(La.a,{className:o.footerContainer},i.a.createElement(he.a,{onClick:function(){t(),p.push(window.location.pathname),d()},className:o.clearBtn},i.a.createElement(Re.a,{className:o.clearIcon}),i.a.createElement(Ge.a,{id:"app.filterModal.clear"})))))}var Za=Object(pe.a)((function(e){return{boxContainer:{height:200,display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"3rem"},textBox:{color:"#fff",marginTop:"1em",paddingTop:"1em"},mainTitle:{fontSize:"2em",marginBlockStart:"0"},yearButton:{color:"#fff",fontWeight:"900","&.active":{backgroundColor:xe}},filterContainer:{textAlign:"right"}}}));function et(e){var a=Za(),t=Object(m.f)(),n=Ze.a.parse(e.location.search,{ignoreQueryPrefix:!0}),o=e.lang||e.match.params.lang,r=function(e){t.push(e)};return i.a.createElement(ca,{lang:o},i.a.createElement(ge.a,{className:a.boxContainer,component:"div"},i.a.createElement(fe.a,{className:a.textBox},i.a.createElement(he.a,{onClick:function(){return r("/")},style:{color:"#fff",fontWeight:"bold",paddingLeft:0}},"HOME MOVIES DIGITAL ARCHIVES"),i.a.createElement("h1",{className:a.mainTitle},ze.main,i.a.createElement("br",null),ze.sub)),i.a.createElement(fe.a,null,i.a.createElement(aa.a,{justify:"space-between",container:!0,alignItems:"center"},i.a.createElement(aa.a,{item:!0,xs:9},i.a.createElement(fe.a,{component:"div"},i.a.createElement(he.a,{classes:{root:a.yearButton},className:n.decade?"":"active",onClick:function(){return r("./")}},i.a.createElement(Ge.a,{id:"app.search.all"})),[30,40,50,60,70,80].map((function(e,t){return i.a.createElement(he.a,{classes:{root:a.yearButton},className:Number(n.decade)===e?"active":"",key:t,onClick:function(){return r("./?decade=".concat(e))}},"'",e)})))),i.a.createElement(aa.a,{item:!0,className:a.filterContainer,xs:3},i.a.createElement(Ua,null,i.a.createElement($a,null)))))),i.a.createElement(wa,{qs:n}))}var at=t(142),tt=t(145),nt=t.n(tt),it=Object(pe.a)((function(){return{fabTheme:{borderRadius:"0 !important",padding:"0.5em",margin:"0.2em",fontSize:"0.7rem",textTransform:"capitalize",height:"2.2rem","&:hover":{backgroundColor:xe,color:"#fff"}},button:{color:"#fff",textTransform:"none",textAlign:"left",padding:0,textDecoration:"none","&:hover":{fontWeight:"bold"}},videoWrapper:{height:0,overflow:"hidden",paddingBottom:"75%",paddingTop:"30px",position:"relative"},iframe:{height:"100%",left:0,position:"absolute",top:0,width:"100%"}}})),ot=function(e){return(e=(e=(e=e.trim()).replace("POINT(","")).replace(")","")).split(" ").map((function(e){return Math.round(1e3*parseFloat(e))/1e3}))};function rt(e){var a=it(),t=Object(n.useState)(),o=Object(l.a)(t,2),r=o[0],c=o[1],s=Object(m.f)(),u=e.id;if(Object(n.useEffect)((function(){Ke.getOne(parseInt(u),(function(e){c(e)}))}),[u]),!r)return i.a.createElement(ga.a,null);var p=r.core,d=r.geodata[0];return i.a.createElement(fe.a,{style:{color:"#fff"}},i.a.createElement(nt.a,null,i.a.createElement("meta",{property:"og:title",content:"Memoryscapes: ".concat(p.tit.val)}),i.a.createElement("meta",{property:"og:description",content:"Memoryscapes: la prima piattaforma online sul cinema privato in Italia"}),i.a.createElement("meta",{property:"og:image",content:"https://img.youtube.com/vi/".concat(p.videoid.val,"/0.jpg")}),i.a.createElement("meta",{property:"og:url",content:window.location}),i.a.createElement("title",null,"Memoryscapes: ",p.tit.val)),i.a.createElement(aa.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(aa.a,{item:!0,xs:12,md:6,style:{textAlign:"center"}},i.a.createElement("h1",null,p.tit.val),i.a.createElement("div",{className:a.videoWrapper},i.a.createElement(at.a,{videoId:p.videoid.val,className:a.iframe,onEnd:function(e){e.target.seekTo(0),e.target.stopVideo()}})))),i.a.createElement(aa.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(aa.a,{item:!0,xs:6,md:2},i.a.createElement(fe.a,{my:5},i.a.createElement("h3",null,i.a.createElement(Ge.a,{id:"app.clip.author"})),i.a.createElement(he.a,{className:a.button,onClick:function(){s.push("../search/?author=".concat(p.aut.val))}},p.aut.val),i.a.createElement("h3",null,i.a.createElement(Ge.a,{id:"app.clip.place"})),i.a.createElement(he.a,{className:a.button,onClick:function(){s.push("../search/?places=".concat(p.luogo.val))}},p.luogo.val),i.a.createElement("h3",null,i.a.createElement(Ge.a,{id:"app.clip.inv"})),p.inv.val)),i.a.createElement(aa.a,{item:!0,xs:6,md:2},i.a.createElement(fe.a,{my:5},i.a.createElement("h3",null,i.a.createElement(Ge.a,{id:"app.clip.format"})),p.formato.val,i.a.createElement("h3",null,i.a.createElement(Ge.a,{id:"app.clip.year"})),p.annoda.val,p.annoda.val!==p.annoa.val?"-".concat(p.annoa.val):"",d&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,i.a.createElement(Ge.a,{id:"app.clip.map"})),i.a.createElement(he.a,{className:a.button,onClick:function(){s.push("../map/?center=".concat(ot(d.geometry).join(",")))}},i.a.createElement(ha.a,{fontSize:"small"})," ")))),i.a.createElement(aa.a,{item:!0,xs:12,md:2},i.a.createElement(fe.a,{my:5},p.descr.val))),i.a.createElement(aa.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(aa.a,{item:!0,xs:8,style:{textAlign:"center"}},i.a.createElement("h3",null,i.a.createElement(Ge.a,{id:"app.themes"})),p.temi.val.split(";").map((function(e,t){return i.a.createElement(we.a,{key:t,variant:"extended",className:a.fabTheme,onClick:function(){return s.push("../search/?themes=".concat(e.trim()))}},e.trim())})))),i.a.createElement(fe.a,{my:5,py:3,borderTop:1,borderColor:"grey.500",textAlign:"center"},i.a.createElement(he.a,{className:a.button,onClick:function(){s.push("../search/")}},i.a.createElement(Ge.a,{id:"app.clip.back2archive"}))),i.a.createElement(wa,{qs:{places:p.luogo.val},exclude:p.id.val,suppressEmpty:!0,title:i.a.createElement(Ge.a,{id:"app.clip.same_place",values:{place:p.luogo.val}})}))}function lt(e){var a=e.match.params.id,t=e.match.params.lang;return i.a.createElement(ca,{lang:t},i.a.createElement(fe.a,{pt:"5rem"},i.a.createElement(rt,{id:a})))}t(201);function ct(e){var a=e.lang;return i.a.createElement("div",{className:"blackBg"},i.a.createElement(He,{lang:a}),i.a.createElement(de.a,{className:"mw-700"},e.children))}function mt(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,i.a.createElement("strong",null,"percorsi tematici, geografici e cronologici nel cinema privato")),i.a.createElement("p",null,i.a.createElement("em",null,"lungo la via emilia")," \xe8 la prima uscita di memoryscapes, il progetto di Home Movies per l\u2019accesso on line al patrimonio audiovisivo privato del secolo scorso."),i.a.createElement("p",null,i.a.createElement("em",null,"lungo la via emilia")," propone una fruizione esperienziale e narrativa dei contenuti d\u2019archivio per mezzo di chiavi d\u2019accesso ai temi presenti nelle pellicole, alla geografia dei luoghi filmati, alla cronologia e agli autori/autrici. Un viaggio nel tempo e nello spazio, dagli Appennini al Po, dalle citt\xe0 alla pianura e al mare. Ogni singola clip costituisce una microstoria e allo stesso tempo diviene una singola tessera di un mosaico di storie virtualmente infinito e componibile liberamente. Buona navigazione!"),i.a.createElement("p",null,i.a.createElement("em",null,"lungo la via emilia")," \xe8 frutto di un lungo lavoro di ricerca, selezione, descrizione, digitalizzazione ed edizione video di pellicole Super8, 8mm, 16mm e 9,5mm girate tra gli anni \u201830 e gli anni \u201880 del XX secolo."),i.a.createElement("p",null,"Per commenti e suggerimenti scrivi a: ",i.a.createElement("a",{href:"mailto: info@homemovies.it"},"info@homemovies.it")),i.a.createElement("h3",null,"Credits"),i.a.createElement("p",null,"Un progetto di Home Movies"),i.a.createElement("p",null,i.a.createElement("strong",null,"Comitato scientifico"),": Marco Bertozzi (IUAV), Luisa Cigognetti (Istituto Storico Parri), Michele Guerra (Universit\xe0 di Parma), Giacomo Manzoli (Universit\xe0 di Bologna), Rick Prelinger (University of California Santa Cruz)."),i.a.createElement("h4",null,"Team del progetto"),i.a.createElement("ul",{style:{listStyle:"none"}},i.a.createElement("li",null,"Direzione: Paolo Simoni"),i.a.createElement("li",null,"Architettura e gestione dei contenuti: Ilaria Ferretti"),i.a.createElement("li",null,"Producer: Giulia Simi"),i.a.createElement("li",null,"Ricerche, descrizioni ed editing: Ilaria Ferretti, Chiara Petrucci, Silvia Savorelli, Paolo Simoni"),i.a.createElement("li",null,"Restauro e digitalizzazione pellicole: Mirco Santi, Giuseppe Fara"),i.a.createElement("li",null,"Post-produzione video: Michele Manzolini, Davide Bianchi, Tommaso Querin"),i.a.createElement("li",null,"Realizzazione db e web: Bradypus"),i.a.createElement("li",null,"Grafica: Giulia Ripa")),i.a.createElement("h4",null,"Partner istituzionali"),i.a.createElement("p",null,"Istituto Storico Parri e Kin\xe8 societ\xe0 cooperativa"),i.a.createElement("p",null,"Il progetto \xe8 realizzato con il contributo di Regione Emilia-Romagna e MiBACT"),i.a.createElement("p",null,"Gli archivi audiovisivi da cui sono tratte le clip sono stati raccolti, digitalizzati, catalogati assieme a: Associazione Home Movies Emilia Romagna nel quadro di un\u2019attivit\xe0 sostenuta da Comune di Reggio Emilia. Reggiani per esempio), Universit\xe0 di Modena e Reggio Emilia, Biblioteca Panizzi, Associazione Sguardi in Camera di Ravenna e Cineteca di Rimini."))}function st(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"Italia: todo"),i.a.createElement("p",null,i.a.createElement("strong",null,"percorsi tematici, geografici e cronologici nel cinema privato")),i.a.createElement("p",null,i.a.createElement("em",null,"lungo la via emilia")," \xe8 la prima uscita di memoryscapes, il progetto di Home Movies per l\u2019accesso on line al patrimonio audiovisivo privato del secolo scorso."),i.a.createElement("p",null,i.a.createElement("em",null,"lungo la via emilia")," propone una fruizione esperienziale e narrativa dei contenuti d\u2019archivio per mezzo di chiavi d\u2019accesso ai temi presenti nelle pellicole, alla geografia dei luoghi filmati, alla cronologia e agli autori/autrici. Un viaggio nel tempo e nello spazio, dagli Appennini al Po, dalle citt\xe0 alla pianura e al mare. Ogni singola clip costituisce una microstoria e allo stesso tempo diviene una singola tessera di un mosaico di storie virtualmente infinito e componibile liberamente. Buona navigazione!"),i.a.createElement("p",null,i.a.createElement("em",null,"lungo la via emilia")," \xe8 frutto di un lungo lavoro di ricerca, selezione, descrizione, digitalizzazione ed edizione video di pellicole Super8, 8mm, 16mm e 9,5mm girate tra gli anni \u201830 e gli anni \u201880 del XX secolo."),i.a.createElement("p",null,"Per commenti e suggerimenti scrivi a: ",i.a.createElement("a",{href:"mailto: info@homemovies.it"},"info@homemovies.it")),i.a.createElement("h3",null,"Credits"),i.a.createElement("p",null,"Un progetto di Home Movies"),i.a.createElement("p",null,i.a.createElement("strong",null,"Comitato scientifico"),": Marco Bertozzi (IUAV), Luisa Cigognetti (Istituto Storico Parri), Michele Guerra (Universit\xe0 di Parma), Giacomo Manzoli (Universit\xe0 di Bologna), Rick Prelinger (University of California Santa Cruz)."),i.a.createElement("h4",null,"Team del progetto"),i.a.createElement("ul",{style:{listStyle:"none"}},i.a.createElement("li",null,"Direzione: Paolo Simoni"),i.a.createElement("li",null,"Architettura e gestione dei contenuti: Ilaria Ferretti"),i.a.createElement("li",null,"Producer: Giulia Simi"),i.a.createElement("li",null,"Ricerche, descrizioni ed editing: Ilaria Ferretti, Chiara Petrucci, Silvia Savorelli, Paolo Simoni"),i.a.createElement("li",null,"Restauro e digitalizzazione pellicole: Mirco Santi, Giuseppe Fara"),i.a.createElement("li",null,"Post-produzione video: Michele Manzolini, Davide Bianchi, Tommaso Querin"),i.a.createElement("li",null,"Realizzazione db e web: Bradypus"),i.a.createElement("li",null,"Grafica: Giulia Ripa")),i.a.createElement("h4",null,"Partner istituzionali"),i.a.createElement("p",null,"Istituto Storico Parri e Kin\xe8 societ\xe0 cooperativa"),i.a.createElement("p",null,"Il progetto \xe8 realizzato con il contributo di Regione Emilia-Romagna e MiBACT"),i.a.createElement("p",null,"Gli archivi audiovisivi da cui sono tratte le clip sono stati raccolti, digitalizzati, catalogati assieme a: Associazione Home Movies Emilia Romagna nel quadro di un\u2019attivit\xe0 sostenuta da Comune di Reggio Emilia. Reggiani per esempio), Universit\xe0 di Modena e Reggio Emilia, Biblioteca Panizzi, Associazione Sguardi in Camera di Ravenna e Cineteca di Rimini."))}var ut=Object(pe.a)((function(e){return{boxContainer:{padding:e.spacing(3,2),display:"flex",flexDirection:"column",justifyContent:"center"},textBox:{textAlign:"center",color:"#fff"},mainTitle:{fontSize:"3.2em",letterSpacing:"0.1em",marginBlockStart:"0"}}}));function pt(e){var a=ut(),t=e.lang||e.match.params.lang;return i.a.createElement(ct,{lang:t},i.a.createElement(ge.a,{className:a.boxContainer,component:"div"},i.a.createElement(fe.a,{className:a.textBox},i.a.createElement("h5",null,"HOME MOVIES DIGITAL ARCHIVE"),i.a.createElement("h2",{className:a.mainTitle},ze.main,i.a.createElement("br",null)," ",ze.sub),"er"===ke?i.a.createElement(mt,null):i.a.createElement(st,null))))}var dt=t(84);window.location.href.match(/homemovies\.it/g)&&(dt.a.initialize("UA-151640045-2"),dt.a.pageview(window.location.pathname+window.location.search));var gt={it:se,en:ue};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement((function(){var e=Object(n.useState)(me.defaultTheme),a=Object(l.a)(e,1)[0],t=Object(n.useState)("it"),o=Object(l.a)(t,2),r=o[0],d=o[1];return i.a.createElement(p.a,{locale:r,messages:gt[r]},i.a.createElement(s.a,{theme:a},i.a.createElement(u.a,null),i.a.createElement(c.a,null,i.a.createElement(m.c,null,i.a.createElement(m.a,{exact:!0,path:"/",component:function(){return i.a.createElement(je,{changeLang:d})}}),i.a.createElement(m.a,{exact:!0,path:"/:lang(en|it)/map/",component:ea}),i.a.createElement(m.a,{exact:!0,path:"/:lang(en|it)/search/",component:et}),i.a.createElement(m.a,{exact:!0,path:"/:lang(en|it)/clip/:id",component:lt}),i.a.createElement(m.a,{exact:!0,path:"/:lang(en|it)/about",component:pt})))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},70:function(e,a,t){e.exports=t.p+"static/media/internal-background-er.a7496dd4.jpg"},71:function(e,a,t){e.exports=t.p+"static/media/video-bg-er.4dac2e53.mp4"}},[[155,1,2]]]);
//# sourceMappingURL=main.bbe2e548.chunk.js.map