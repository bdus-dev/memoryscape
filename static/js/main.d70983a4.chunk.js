(this.webpackJsonpmemoryscape=this.webpackJsonpmemoryscape||[]).push([[0],{122:function(e){e.exports=JSON.parse('{"app.menu.map":"Mappa","app.menu.archive":"Archivio","app.menu.about":"Il progetto","app.search.filters":"Filtri","app.search.all":"Tutto","app.pagination.page":"Pagina {pageNo}","app.pagination.recap":"Clip {start} - {end} di {tot}","app.filterModal.year":"Anno","app.filterModal.places":"Luoghi","app.themes":"Temi","app.filterModal.clear":"Svuota","app.filterModal.apply":"Applica","app.clip.author":"Autore","app.clip.place":"Luogo","app.clip.year":"Anno","app.clip.format":"Formato","app.clip.map":"Mappa","app.clip.inv":"Inventario","app.clip.same_place":"Altre clip girate a {place}","app.clip.back2archive":"Torna all\'archivio","app.for":"per","app.autocomplete.type":"Comincia a digitare per cercare un luogo"}')},123:function(e){e.exports=JSON.parse('{"app.menu.map":"Map","app.menu.archive":"Archive","app.menu.about":"Informazioni","app.search.filters":"Filters","app.search.all":"All","app.pagination.page":"Page {pageNo}","app.pagination.recap":"Clips {start} - {end} of {tot}","app.filterModal.year":"Year","app.filterModal.places":"Places","app.themes":"Themes","app.filterModal.clear":"Clear","app.filterModal.apply":"Apply","app.clip.author":"Author","app.clip.place":"Place","app.clip.year":"Year","app.clip.format":"Format","app.clip.map":"Map","app.clip.inv":"Inventory","app.clip.same_place":"Other clips filmed in {place}","app.clip.back2archive":"Back to the archive","app.for":"for","app.autocomplete.type":"Start typing to find a place"}')},124:function(e,a,t){e.exports=t.p+"static/media/home-background-er.69f0cdef.jpg"},125:function(e,a,t){e.exports=t.p+"static/media/home-background-italia.df376d2d.jpg"},156:function(e,a,t){e.exports=t(202)},184:function(e,a,t){},201:function(e,a,t){},202:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(13),r=t.n(o),l=t(11),c=t(30),m=t(48),s=t(267),p=t(268),u=t(10),d=t(146),g=t(102),f=t.n(g),h=t(103),E=t.n(h),b=t(104),v=t.n(b),y=t(105),C=t.n(y),O=t(106),j=t.n(O),k=t(107),x=t.n(k),z=t(108),S=t.n(z),I=t(109),T=t.n(I),N=t(110),M=t.n(N),B=t(111),w=t.n(B),A=t(112),P=t.n(A),_=t(113),D=t.n(_),L=t(114),R=t.n(L),F=t(115),G=t.n(F),V=t(116),H=t.n(V),U=t(117),W=t.n(U),q=t(118),K=t.n(q),Q=t(119),J=t.n(Q),Y=t(120),X=t.n(Y),$=t(121),Z=t.n($),ee={red:{id:"red",name:"Red",import:E.a},pink:{id:"pink",name:"Pink",import:v.a},purple:{id:"purple",name:"Purple",import:C.a},deepPurple:{id:"deep-purple",name:"Deep Purple",import:j.a},indigo:{id:"indigo",name:"Indigo",import:x.a},blue:{id:"blue",name:"Blue",import:S.a},lightBlue:{id:"light-blue",name:"Light Blue",import:T.a},cyan:{id:"cyan",name:"Cyan",import:M.a},teal:{id:"teal",name:"Teal",import:w.a},green:{id:"green",name:"Green",import:P.a},lightGreen:{id:"light-green",name:"Light Green",import:D.a},lime:{id:"lime",name:"Lime",import:R.a},yellow:{id:"yellow",name:"Yellow",import:G.a},amber:{id:"amber",name:"Amber",import:H.a},orange:{id:"orange",name:"Orange",import:W.a},deepOrange:{id:"deep-orange",name:"Deep Orange",import:K.a},brown:{id:"brown",name:"Brown",import:J.a},gray:{id:"gray",name:"Gray",import:X.a},blueGray:{id:"blue-gray",name:"Blue Gray",import:Z.a}},ae={light:{id:"light",name:"Light"},dark:{id:"dark",name:"Dark"}},te=function(e){return e?(e=f.a.camelCase(e),ee[e]):null},ne=function(e){return e?ae[e]:null},ie=te("blue"),oe=te("red"),re=ne("light"),le=Object(d.a)({palette:{primary:ie.import,secondary:oe.import,type:re.id},primaryColor:ie,secondaryColor:oe,type:re,typography:{fontFamily:"Poppins"},overrides:{MuiCssBaseline:{"@global":{"@font-face":"Poppins"}}}}),ce={};ce.colors=ee,ce.types=ae,ce.defaultPrimaryColor=ie,ce.defaultSecondaryColor=oe,ce.defaultType=re,ce.defaultTheme=le,ce.isDefaultTheme=function(e){return!!e&&(e.primaryColor.id===ie.id&&e.secondaryColor.id===oe.id&&e.type.id===re.id)},ce.createTheme=function(e){if(!e)return null;var a=e,t=a.primaryColor,n=a.secondaryColor,i=a.type;return t&&n&&i?(t=te(t),n=te(n),i=ne(i),t&&n&&i?e=Object(d.a)({palette:{primary:t.import,secondary:n.import,type:i.id},primaryColor:t,secondaryColor:n,type:i}):null):null};var me=ce,se=t(122),pe=t(123),ue=t(15),de=t(206),ge=t(249),fe=t(250),he=t(270),Ee=t(204),be=t(124),ve=t.n(be),ye=t(125),Ce=t.n(ye),Oe={er:{app:"er",col:"#7a1dcf",title:{main:"memoryscapes 01",sub:"lungo la via emilia"}},italia:{app:"italia",col:"#245344",title:{main:"memoryscapes 02",sub:"cartoline italiane"}}}[window.location.href.includes("ms-emilia-romagna.homemovies.it")?"er":"italia"],je=Oe.app,ke=Oe.col,xe=Oe.title,ze=Object(de.a)((function(e){return{homeContainer:{backgroundImage:"url(".concat("er"===je?ve.a:Ce.a,")"),backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover",maxWidth:"100%"},boxContainer:{padding:e.spacing(3,2),height:200,display:"flex",flexDirection:"column",justifyContent:"center"},textBox:{textAlign:"center",color:"#fff",marginTop:"auto",paddingTop:"9em"},mainTitle:Object(ue.a)({fontSize:"3.2em",marginBlockStart:"0"},e.breakpoints.down("xs"),{fontSize:"2.2em"}),languageContainer:{marginTop:"auto",marginBottom:"6em",textAlign:"center"},buttomLang:{color:"#fff",fontWeight:"900"}}}));function Se(e){var a=e.changeLang,t=ze(),n=Object(m.f)();return i.a.createElement("div",{className:t.homeContainer},i.a.createElement(ge.a,{fixed:!0},i.a.createElement(fe.a,{className:t.boxContainer,component:"div",style:{height:"100vh"}},i.a.createElement(he.a,{className:t.textBox},i.a.createElement("h5",null,"HOME MOVIES DIGITAL ARCHIVES"),i.a.createElement("h2",{className:t.mainTitle},xe.main,i.a.createElement("br",null),xe.sub)),i.a.createElement(he.a,{className:t.languageContainer},i.a.createElement(Ee.a,{className:t.buttomLang,onClick:function(){return a(e="it"),void n.push("/".concat(e,"/search/"));var e}},"Vai all'archivio")))))}var Ie=t(273),Te=t(277),Ne=t(274),Me=t(251),Be=t(254),we=t(252),Ae=t(130),Pe=t.n(Ae),_e=t(57),De=t.n(_e),Le=t(147),Re=t(276),Fe=Object(de.a)((function(e){var a;return{appBar:{backgroundColor:"transparent",boxShadow:"none"},fabButton:{position:"absolute",right:"1rem",top:"1rem",background:"transparent",color:"#fff","&:hover":{background:"".concat(ke," !important"),color:"#fff"}},iconMenu:{fontSize:"2.5rem"},popoverPaper:Object(ue.a)({width:"100%",height:"100vh",maxHeight:"100vh",maxWidth:"unset",top:"0 !important",backgroundColor:"#000000f2",display:"flex",flexDirection:"column",justifyContent:"center",left:"0 !important"},e.breakpoints.down(800),{textAlign:"center"}),menuContent:(a={maxHeight:"100vh",display:"flex",flexDirection:"row"},Object(ue.a)(a,e.breakpoints.down(800),{flexDirection:"column"}),Object(ue.a)(a,"justifyContent","center"),Object(ue.a)(a,"position","initial"),Object(ue.a)(a,"& div",Object(ue.a)({marginRight:"3em"},e.breakpoints.down(800),{margin:"auto"})),a),menuItem:{color:"#fff",fontSize:"3.4em",fontWeight:"700","&:hover":{color:ke}},colorWhite:{color:"#fff"},contactParagraph:{color:"#7b7878",fontSize:"1em",lineHeight:"1.8em"},titleMenu:{letterSpacing:"0.1em"},menuLink:{textDecoration:"none",display:"block","&:hover":{textDecoration:"none"}},closeMenuContainer:{position:"absolute",marginRight:"0.8em !important",top:"0",right:"0","& button":{color:"#fff",fontSize:"2.5rem"}}}}));function Ge(e){var a=Fe(),t=Object(n.useState)(null),o=Object(l.a)(t,2),r=o[0],c=o[1],s=Object(m.f)(),p=e.lang,d=function(){c(null)},g=function(e){s.push(e)};return i.a.createElement(Me.a,{color:"primary",position:"fixed",className:a.appBar},i.a.createElement(we.a,{onClick:function(e){c(e.currentTarget)},className:a.fabButton},i.a.createElement(Pe.a,{className:a.iconMenu})),i.a.createElement(Le.a,{PopoverClasses:{paper:a.popoverPaper},classes:{list:a.menuContent},id:"main-menu",anchorEl:r,open:Boolean(r),onClose:d,keepMounted:!0},i.a.createElement("div",{className:a.closeMenuContainer},i.a.createElement(Be.a,{onClick:d},i.a.createElement(De.a,{className:a.iconMenu}))),i.a.createElement("div",null,i.a.createElement(Re.a,{onClick:function(){return g("/")},className:a.menuItem},"Home"),i.a.createElement(Re.a,{onClick:function(){return g("/".concat(p,"/map"))},className:a.menuItem},i.a.createElement(u.a,{id:"app.menu.map"}))),i.a.createElement("div",null,i.a.createElement(Re.a,{onClick:function(){return g("/".concat(p,"/search/"))},className:a.menuItem},i.a.createElement(u.a,{id:"app.menu.archive"})),i.a.createElement(Re.a,{onClick:function(){return g("/".concat(p,"/about"))},className:a.menuItem},i.a.createElement(u.a,{id:"app.menu.about"}))),i.a.createElement("div",{className:a.colorWhite},i.a.createElement("h5",{className:a.titleMenu},"HOME MOVIES DIGITAL ARCHIVES"),i.a.createElement("p",{className:a.contactParagraph},"Home Movies",i.a.createElement("br",null),"Via Sant\u2019Isaia, 18 - 40123 Bologna, IT",i.a.createElement("br",null),"Call - (+39) 051 3397243",i.a.createElement("br",null),"Email -",i.a.createElement("span",{className:a.colorWhite},"info@homemovies.it")))))}var Ve=t(31),He=t(32),Ue=t(131),We=t.n(Ue),qe=function(e){return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,(function(e,a){return String.fromCharCode("0x"+a)})))},Ke=function(){function e(){Object(Ve.a)(this,e)}return Object(He.a)(e,null,[{key:"_getData",value:function(e,a,t,n){var i="https://db-dev.bradypus.net";"localhost"===window.location.hostname&&(i="http://db.localhost"),i+="/api/".concat(2===n?"v2/":"","hm/"),We()({method:"post",url:i+e,params:a,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){if(e.data.type&&"error"===e.data.type)return console.log("API error:"),console.log(e.data.text),!1;t(e.data)})).catch((function(e){e instanceof Error?console.log(e.message):console.log(e.data)}))}},{key:"getOne",value:function(e,a){this._getData("",{tb:"ms",verb:"read",id:e},(function(e){a(e)}),2)}},{key:"getAll",value:function(e,a){var t=e?"":" ORDER BY random()";this._getData("ms",{verb:"search",type:"encoded",q_encoded:qe("app LIKE  '%".concat(je,"%'").concat(t)),page:e},(function(e){a(e)}))}},{key:"getUniqueVal",value:function(e,a,t,n){this._getData("",{verb:"getUniqueVal",tb:"ms",fld:e,s:a,w:t},(function(e){n(e)}),2)}},{key:"getVocabulary",value:function(e,a){this._getData("",{verb:"getVocabulary",voc:e},(function(e){a(e)}),2)}},{key:"getDecade",value:function(e,a,t){var n=[20,30,40,50,60,70,80,90];if(!n.includes(e))return console.log("Invalid parameter decade: ".concat(e,": only one of ").concat(n.join(",")," is allowed")),!1;var i=parseInt("19".concat(e)),o=i+10,r={verb:"search",type:"encoded",q_encoded:qe("(app LIKE  '%".concat(je,"%') AND annoda < ").concat(o," AND annoa >= ").concat(i)),page:a};this._getData("ms",r,(function(e){t(e)}))}},{key:"getByPlacesAndThemse",value:function(e,a,t,n){e||a||n(!1);var i=["(app LIKE '%".concat(je,"%')")];e&&e.split(",").forEach((function(e,a){i.push(' luogo = "'.concat(e,'" '))})),a&&a.split(",").forEach((function(e,a){i.push(' temi LIKE "%'.concat(e,'%" '))})),this._getData("ms",{verb:"search",type:"encoded",q_encoded:qe(i.join(" AND ")),page:t},(function(e){n(e)}))}},{key:"getByAuthor",value:function(e,a,t){this._getData("ms",{verb:"search",type:"encoded",q_encoded:qe("(app LIKE  '%".concat(je,"%') AND aut LIKE '%").concat(e,"%'")),page:a},(function(e){t(e)}))}},{key:"getMsGeoJson",value:function(e,a){var t={join:"JOIN hm__geodata as g ON g.table_link = 'hm__ms' AND g.id_link = hm__ms.id ","fields[g.geometry]":"Geometry","fields[hm__ms.id]":"Id","fields[hm__ms.videoid]":"ID Video","fields[hm__ms.tit]":"Titolo","fields[hm__ms.aut]":"Autore","fields[hm__ms.annoda]":"Anno da","fields[hm__ms.annoa]":"Anno a",group:"hm__ms.id",limit_start:"0",limit_end:"500",q_encoded:qe(e?"("+e.replace(/`id`/gi,"`hm__ms`.`id`")+") AND app LIKE '%".concat(je,"%'"):"app LIKE '%".concat(je,"%'"))};this._getData("ms?verb=search&geojson=true&type=encoded",t,(function(e){a(e)}))}}]),e}(),Qe=t(20),Je=t.n(Qe),Ye=(t(184),t(40)),Xe=t.n(Ye);function $e(e){var a=Xe.a.parse(e.location.search,{ignoreQueryPrefix:!0}),t=e.lang||e.match.params.lang,o=!1,r=13;e.center?o=e.center:a.center&&(o=a.center.split(",").reverse(),r=16);var c=o||[44.4943823,11.3418609],m=Object(n.useState)(),s=Object(l.a)(m,2),p=s[0],u=s[1],d=Object(n.useState)(i.a.createRef()),g=Object(l.a)(d,1)[0];return Object(n.useEffect)((function(){Ke.getMsGeoJson("1",(function(e){u(e)}))}),[]),i.a.createElement("div",{className:"mapContainer"},i.a.createElement(Ge,{lang:t}),i.a.createElement(Ie.a,{center:c,zoom:r,style:{width:"100%",height:"100%"},ref:g},i.a.createElement(Te.a,{url:"https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),p&&i.a.createElement(Ne.a,{data:p,pointToLayer:function(e,a){return function(e,a){return new Je.a.CircleMarker(a,{radius:6,weight:1,color:ke,fillOpacity:.7})}(0,a)},onEachFeature:function(e,a){return function(e,a,t){var n=e.properties,i="<h3>".concat(n.tit,'</h3>\n  <img src="https://img.youtube.com/vi/').concat(n.videoid,'/0.jpg" alt={row.tit} alt="').concat(n.tit,'" />\n  <p>').concat(n.aut,"\n  ").concat(n.annoda?"<br /><strong>".concat(n.annoda,"</strong>"):"",'</p>\n  <p class="button"><a style="background-color: ').concat(ke,'" href="/').concat(t,"/clip/").concat(n.id,'">Apri</a></p>\n  ');a.bindPopup(i)}(e,a,t)},onAdd:function(e){if(!o){var a=e.target.getBounds();g.current.leafletElement.fitBounds(a)}}})))}var Ze=t(255),ea=t(65),aa=t.n(ea),ta=Object(de.a)((function(e){return{homeContainer:{backgroundImage:"url(".concat(aa.a,")"),backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover",maxWidth:"100%",height:"100vh",width:"100vw",position:"fixed",overflow:"scroll"}}}));function na(e){var a=ta(),t=e.lang;return i.a.createElement("div",{className:a.homeContainer},i.a.createElement(Ge,{lang:t}),i.a.createElement(ge.a,{fixed:!0},e.children))}var ia=t(260),oa=t(261),ra=t(262),la=t(66),ca=t.n(la),ma=t(259),sa=t(67),pa=t.n(sa),ua=t(137),da=t.n(ua),ga=t(257),fa=t(258),ha=t(256),Ea=t(134),ba=t.n(Ea),va=t(135),ya=t.n(va),Ca=t(136),Oa=t.n(Ca);function ja(e){var a=e.qs,t=[];return a.themes&&(t=t.concat(a.themes.split(","))),a.author&&(t=t.concat(a.author.split(","))),a.places&&(t=t.concat(a.places.split(","))),0===t.length?null:i.a.createElement(he.a,{ml:1,component:"span"},i.a.createElement(u.a,{id:"app.for"})," ",i.a.createElement("em",null,t.join(", ")))}var ka=Object(de.a)((function(e){return{button:{backgroundColor:ke,"&:not(:last-child)":{borderRight:"1px solid #fff"},"&:hover":{backgroundColor:ke}}}}));function xa(e){var a=ka(),t=Object(m.f)(),n=function(e){return t.push(e)},o=e.qs,r=e.head,l=parseInt(r.total_rows),c=30*parseInt(r.page)-30+1,s=c+parseInt(r.no_records_shown)-1,p=parseInt(r.page),d=parseInt(r.total_pages),g=!1;if(p-1>0){var f=Object.assign({},o);f.page=p-1,g="./?".concat(Xe.a.stringify(f))}var h=!1;if(p+1<=d){var E=Object.assign({},o);E.page=p+1,h="./?".concat(Xe.a.stringify(E))}var b=!1;if(p-1>1){var v=Object.assign({},o);v.page=1,b="./?".concat(Xe.a.stringify(v))}var y=!1;if(p+2<=d){var C=Object.assign({},o);C.page=d,y="./?".concat(Xe.a.stringify(C))}return i.a.createElement(he.a,{p:1,my:2,style:{background:"rgba(255, 255, 255, .5)"}},i.a.createElement(Ze.a,{justify:"space-between",container:!0,alignItems:"center"},i.a.createElement(Ze.a,{item:!0},i.a.createElement(u.a,{id:"app.pagination.recap",values:{start:c,end:s,tot:l}}),i.a.createElement(ja,{qs:o})),i.a.createElement(Ze.a,{item:!0},i.a.createElement(ha.a,{size:"small","aria-label":"small outlined button group",color:"secondary",variant:"contained",style:{background:"#fff"}},b&&i.a.createElement(Ee.a,{className:a.button,onClick:function(){return n(b)}},i.a.createElement(ba.a,null)),g&&i.a.createElement(Ee.a,{className:a.button,onClick:function(){return n(g)}},i.a.createElement(ya.a,null)),(b||g||h||y)&&i.a.createElement(Ee.a,{className:a.button,disabled:!0},i.a.createElement(u.a,{id:"app.pagination.page",values:{pageNo:p}})," "),h&&i.a.createElement(Ee.a,{className:a.button,onClick:function(){return n(h)}},i.a.createElement(ca.a,null)),y&&i.a.createElement(Ee.a,{className:a.button,onClick:function(){return n(y)}},i.a.createElement(Oa.a,null))))))}var za=Object(ga.a)({GridListTitle:{cursor:"pointer"},GridListTileBar:{background:"".concat(ke,"7f"),height:"100px"},GridListTileBarTitle:{textTransform:"uppercase",fontWeight:"900",fontSize:".9rem"},GridListTileBarSubtitle:{lineHeight:1.5},IconButton:{color:"rgba(255, 255, 255, 0.8)"}});function Sa(e){var a=Object(n.useState)(!1),t=Object(l.a)(a,2),o=t[0],r=t[1],c=Object(n.useState)(1),s=Object(l.a)(c,2),p=s[0],u=s[1],d=za(),g=Object(m.f)(),f=e.qs,h=e.suppressEmpty,E=e.title,b=e.exclude,v=Object(fa.a)("(min-width:960px)")?3:1;return Object(n.useEffect)((function(){u(.3),f.decade?Ke.getDecade(parseInt(f.decade),f.page,(function(e){r(e),u(1)})):f.places||f.themes?Ke.getByPlacesAndThemse(f.places,f.themes,f.page,(function(e){r(e),u(1)})):f.author?Ke.getByAuthor(f.author,f.page,(function(e){r(e),u(1)})):Ke.getAll(f.page,(function(e){r(e),u(1)}))}),[f]),o?0===o.head.total_rows||1===o.head.total_rows&&b?h?null:i.a.createElement(ge.a,null,i.a.createElement("p",{style:{color:"#fff",fontSize:"2rem"}},"Nessun risultato trovato!")):i.a.createElement(he.a,{container:"div",style:{opacity:p}},E&&i.a.createElement("h2",null,E),!h&&i.a.createElement(xa,{head:o.head,qs:f}),i.a.createElement(ia.a,{cellHeight:280,cols:v,spacing:40},o.records.map((function(e,a){return b&&b===e.id?null:i.a.createElement(oa.a,{key:a,className:d.GridListTitle,onClick:function(){g.push("../clip/".concat(e.id)),window.scrollTo(0,0)}},i.a.createElement("img",{src:"https://img.youtube.com/vi/".concat(e.videoid,"/0.jpg"),alt:e.tit}),i.a.createElement(ra.a,{classes:{root:d.GridListTileBar,title:d.GridListTileBarTitle,subtitle:d.GridListTileBarSubtitle},title:i.a.createElement("span",null,e.tit," ",i.a.createElement(he.a,{component:"span",mx:2}," | ")," ",i.a.createElement("strong",null,e.annoda,e.annoda!==e.annoa?"-".concat(e.annoa):"")),subtitle:i.a.createElement("span",null,i.a.createElement(pa.a,{fontSize:"small"})," ",e.luogo,i.a.createElement("br",null),i.a.createElement(da.a,{fontSize:"small"})," ",e.temi),actionIcon:i.a.createElement(Be.a,{onClick:function(){g.push("../clip/".concat(e.id)),window.scrollTo(0,0)},"aria-label":"info about ".concat(e.tit),classes:{root:d.IconButton}},i.a.createElement(ca.a,null))}))})))):i.a.createElement(ma.a,null)}var Ia=t(263),Ta=t(275),Na=t(264),Ma=t(265),Ba=t(205),wa=t(266),Aa=t(138),Pa=t.n(Aa),_a=Object(n.createContext)({});function Da(e,a){return e.includes(a)?(e.pop(),e):(e.pop(),e.push(a),e)}function La(e){return/^(19|20)\d{2}$/.test(e)}function Ra(e){var a=e.children,t=Object(n.useState)([]),o=Object(l.a)(t,2),r=o[0],c=o[1],m=Object(n.useState)([]),s=Object(l.a)(m,2),p=s[0],u=s[1],d=Object(n.useState)(void 0),g=Object(l.a)(d,2),f=g[0],h=g[1],E=Object(n.useState)(void 0),b=Object(l.a)(E,2),v=b[0],y=b[1],C=function(){return p.length>0?"places=".concat(p.map((function(e){return e}))):""},O=function(){return f?"year_start=".concat(f):""},j=function(){return v?"year_end=".concat(v):""};return i.a.createElement(_a.Provider,{value:{themeList:r,toggleThemes:function(e){return c(Da(r,e))},isThemeSelected:function(e){return r.includes(e)},setThemeList:c,getQueryFilters:function(){var e=r.length>0?"themes=".concat(r.map((function(e){return e}))):" ";return e+=e&&p?"&".concat(C()):C(),e+=e&&f?"&".concat(O()):O(),(e+=e&&v?"&".concat(j()):j())?"?".concat(e):e},togglePlaces:function(e){return u(Da(p,e))},placesList:p,isPlaceSelected:function(e){return p.includes(e)},initFilters:function(e){switch(e){case"theme":r.pop();break;case"places":u([]);break;default:c(),u()}},addYearFromToQuery:function(e){La(e)&&h(e)},addYearToToQuery:function(e){La(e)&&y(e)},yearFrom:f,yearTo:v}},a)}Ra.defaultProps={children:null};var Fa=_a,Ga=Object(de.a)((function(){return{fabTheme:{borderRadius:"0 !important",padding:"0.5em",margin:"0.2em",fontSize:"0.7rem",textTransform:"capitalize","&:hover":{backgroundColor:ke,color:"#fff"}},selected:{backgroundColor:ke,color:"#fff","&:hover":{}}}}));function Va(e){var a=Object(n.useContext)(Fa).toggleThemes,t=e.themeValue,o=e.selected,r=e.applyFilter,c=Object(n.useState)(o),m=Object(l.a)(c,2),s=m[0],p=m[1],u=Ga();return i.a.createElement(we.a,{className:s?Pa()([u.fabTheme,u.selected]):u.fabTheme,variant:"extended",size:"small",onClick:function(){return p(!s),a(t),void r()}},t)}function Ha(e){var a=Object(n.useContext)(Fa),t=a.isThemeSelected,o=a.placesList,r=e.applyFilter,c=Object(n.useState)(null),m=Object(l.a)(c,2),s=m[0],p=m[1];return Object(n.useEffect)((function(){Ke.getUniqueVal("temi",!1,"app|LIKE|%".concat(je,"%").concat(o[0]?"||and|luogo|=|".concat(o[0]):""),(function(e){p(e.sort())}))}),[o]),i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,i.a.createElement(u.a,{id:"app.themes"})),s&&s.map((function(e,a){return i.a.createElement(Va,{key:a,themeValue:e.trim(),selected:t(e.trim()),applyFilter:r})})))}Va.defaultProps={themeValue:null,selected:!1,applyFilter:null},Ha.defaultProps={applyFilter:null};var Ua=Object(de.a)((function(e){return{dialogContainer:{"& .MuiDialog-paperFullScreen":{backgroundColor:"#000000f2"}},filterBtn:{backgroundColor:"#fff",padding:".4em 2em",fontSize:"1em",borderRadius:"2px",color:"#000",fontWeight:"600","&:hover":{backgroundColor:"#e0e0e0"}},appBar:{position:"relative",backgroundColor:"transparent",boxShadow:"none",display:"flex",flexDirection:"row-reverse"},iconMenu:{fontSize:"2.5rem"},dialogContent:{"& h2":{fontSize:"3.2em",marginBottom:"0.2em",marginTop:"0"}},paper:Object(ue.a)({backgroundColor:"transparent",color:"#fff",textAlign:"left"},e.breakpoints.down(960),{textAlign:"center"}),footerContainer:{padding:"0"},clearIcon:{fontSize:"2.3rem",marginRight:"0.2em"},clearBtn:{color:"#989898",fontWeight:"bold",fontSize:"1.2em"},applyBtn:{backgroundColor:ke,color:"#fff",padding:"0.4em 3em",fontSize:"1.6em",borderRadius:"0","&:hover":{backgroundColor:"#530e92"}}}})),Wa=i.a.forwardRef((function(e,a){return i.a.createElement(Ia.a,Object.assign({direction:"up",ref:a},e))}));function qa(){var e=Object(n.useContext)(Fa),a=e.getQueryFilters,t=e.initFilters,o=Ua(),r=Object(n.useState)(!1),c=Object(l.a)(r,2),s=c[0],p=c[1],d=Object(m.f)(),g=function(){p(!1)},f=function(){d.push(a()),g()};return i.a.createElement("div",null,i.a.createElement(Ee.a,{color:"primary",className:o.filterBtn,onClick:function(){p(!0)}},i.a.createElement(u.a,{id:"app.themes"})),i.a.createElement(Ta.a,{className:o.dialogContainer,fullScreen:!0,open:s,onClose:g,TransitionComponent:Wa},i.a.createElement(Me.a,{className:o.appBar},i.a.createElement(Na.a,null,i.a.createElement(Be.a,{edge:"start",color:"inherit",onClick:g,"aria-label":"close"},i.a.createElement(De.a,{className:o.iconMenu})))),i.a.createElement(Ma.a,{className:o.dialogContent},i.a.createElement(Ze.a,{container:!0,spacing:3},i.a.createElement(Ze.a,{item:!0,xs:12},i.a.createElement(Ba.a,{className:o.paper},i.a.createElement(Ha,{applyFilter:f}))))),i.a.createElement(wa.a,{className:o.footerContainer},i.a.createElement(Ee.a,{onClick:function(){t("theme"),f()},className:o.clearBtn},i.a.createElement(De.a,{className:o.clearIcon}),i.a.createElement(u.a,{id:"app.filterModal.clear"})))))}var Ka=t(139),Qa=t(269),Ja=t(271),Ya=Object(de.a)((function(e){return{autoComplete:{border:"none",borderBottom:"1px solid #fff",color:"#fff !important",backgroundColor:"rgba(0,0,0,.3)",padding:"0 .5rem","& .MuiAutocomplete-input, & .MuiAutocomplete-popupIndicator, & .MuiAutocomplete-clearIndicator, & .MuiFormLabel-root, & .MuiFormLabel-root.Mui-focused":{color:"#fff !important"}}}}));function Xa(){var e=Object(n.useState)(!1),a=Object(l.a)(e,2),t=a[0],o=a[1],r=Object(n.useState)(!1),c=Object(l.a)(r,2),s=c[0],p=c[1],d=Object(n.useState)([]),g=Object(l.a)(d,2),f=g[0],h=g[1],E=Ya(),b=Object(n.useContext)(Fa),v=b.togglePlaces,y=b.getQueryFilters,C=b.initFilters,O=Object(m.f)(),j=function(e){""===e?C("places"):v(e),O.push(y())};return i.a.createElement(Ja.a,{id:"place",className:E.autoComplete,open:t,noOptionsText:i.a.createElement(u.b,{id:"app.autocomplete.type"}),onOpen:function(){o(!0)},onClose:function(){o(!1)},onChange:function(e,a){j(a)},options:f,loading:s,renderInput:function(e){return i.a.createElement(u.b,{id:"app.filterModal.places"},(function(a){return i.a.createElement(Qa.a,Object.assign({},e,{label:a,fullWidth:!0,onChange:function(e){var a;a=e.target.value,p(!0),Ke.getUniqueVal("luogo",a,"app|LIKE|%".concat(je,"%"),(function(e){h(e.sort()),p(!1)}))},variant:"standard",InputProps:Object(Ka.a)({},e.InputProps,{endAdornment:i.a.createElement(i.a.Fragment,null,s?i.a.createElement(ma.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment)})}))}))}})}var $a=Object(de.a)((function(e){return{boxContainer:{height:200,display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"4rem"},textBox:Object(ue.a)({color:"#fff",marginTop:"1em",paddingTop:"1em"},e.breakpoints.down("xs"),{marginTop:"2.5em"}),mainTitle:Object(ue.a)({fontSize:"2em",marginBlockStart:"0"},e.breakpoints.down("xs"),{fontSize:"1.5em"}),yearButton:Object(ue.a)({color:"#fff",fontWeight:"900","&.active":{backgroundColor:ke}},e.breakpoints.down("xs"),{fontSize:".7em"}),filterContainer:{textAlign:"right",marginTop:"1em",marginBottom:"1em"}}}));function Za(e){var a=$a(),t=Object(m.f)(),n=Xe.a.parse(e.location.search,{ignoreQueryPrefix:!0}),o=e.lang||e.match.params.lang,r=function(e){t.push(e)};return i.a.createElement(na,{lang:o},i.a.createElement(fe.a,{className:a.boxContainer,component:"div"},i.a.createElement(he.a,{className:a.textBox},i.a.createElement(Ee.a,{href:"https://homemovies.it/digital-archives/ ",target:"_blank",style:{color:"#fff",fontWeight:"bold",paddingLeft:0}},"HOME MOVIES DIGITAL ARCHIVES"),i.a.createElement("h1",{className:a.mainTitle},xe.main,i.a.createElement("br",null),xe.sub)),i.a.createElement(he.a,null,i.a.createElement(Ze.a,{container:!0,justify:"space-between",alignItems:"center"},i.a.createElement(Ra,null,i.a.createElement(Ze.a,{item:!0,xs:12,md:7},i.a.createElement(he.a,{component:"div"},i.a.createElement(Ee.a,{classes:{root:a.yearButton},className:n.decade?"":"active",onClick:function(){return r("./")}},i.a.createElement(u.a,{id:"app.search.all"})),[30,40,50,60,70,80].map((function(e,t){return i.a.createElement(Ee.a,{classes:{root:a.yearButton},className:Number(n.decade)===e?"active":"",key:t,onClick:function(){return r("./?decade=".concat(e))}},"'",e)})))),i.a.createElement(Ze.a,{item:!0,className:a.filterContainer,xs:8,md:3},i.a.createElement(Xa,null)),i.a.createElement(Ze.a,{item:!0,className:a.filterContainer,xs:4,md:2},i.a.createElement(qa,null)))))),i.a.createElement(Sa,{qs:n}))}var et=t(142),at=t(145),tt=t.n(at),nt=Object(de.a)((function(){return{fabTheme:{borderRadius:"0 !important",padding:"0.5em",margin:"0.2em",fontSize:"0.7rem",textTransform:"capitalize",height:"2.2rem","&:hover":{backgroundColor:ke,color:"#fff"}},button:{color:"#fff",textTransform:"none",textAlign:"left",padding:0,textDecoration:"none","&:hover":{fontWeight:"bold"}},videoWrapper:{height:0,overflow:"hidden",paddingBottom:"75%",paddingTop:"30px",position:"relative"},iframe:{height:"100%",left:0,position:"absolute",top:0,width:"100%"}}}));function it(e){var a=nt(),t=Object(n.useState)(),o=Object(l.a)(t,2),r=o[0],c=o[1],s=Object(m.f)(),p=e.id;if(Object(n.useEffect)((function(){Ke.getOne(parseInt(p),(function(e){c(e)}))}),[p]),!r)return i.a.createElement(ma.a,null);var d=r.core,g=r.geodata[0];return i.a.createElement(he.a,{style:{color:"#fff"}},i.a.createElement(tt.a,null,i.a.createElement("meta",{property:"og:title",content:"Memoryscapes: ".concat(d.tit.val)}),i.a.createElement("meta",{property:"og:description",content:"Memoryscapes: la prima piattaforma online sul cinema privato in Italia"}),i.a.createElement("meta",{property:"og:image",content:"https://img.youtube.com/vi/".concat(d.videoid.val,"/0.jpg")}),i.a.createElement("meta",{property:"og:url",content:window.location}),i.a.createElement("title",null,"Memoryscapes: ",d.tit.val)),i.a.createElement(Ze.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(Ze.a,{item:!0,xs:12,md:6,style:{textAlign:"center"}},i.a.createElement("h1",null,d.tit.val),i.a.createElement("div",{className:a.videoWrapper},i.a.createElement(et.a,{opts:{playerVars:{rel:0}},videoId:d.videoid.val,className:a.iframe,onEnd:function(e){e.target.seekTo(0),e.target.stopVideo()}})))),i.a.createElement(Ze.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(Ze.a,{item:!0,xs:6,md:2},i.a.createElement(he.a,{my:5},i.a.createElement("h3",null,i.a.createElement(u.a,{id:"app.clip.author"})),i.a.createElement(Ee.a,{className:a.button,onClick:function(){s.push("../search/?author=".concat(d.aut.val))}},d.aut.val),i.a.createElement("h3",null,i.a.createElement(u.a,{id:"app.clip.place"})),i.a.createElement(Ee.a,{className:a.button,onClick:function(){s.push("../search/?places=".concat(d.luogo.val))}},d.luogo.val),i.a.createElement("h3",null,i.a.createElement(u.a,{id:"app.clip.inv"})),d.inv.val)),i.a.createElement(Ze.a,{item:!0,xs:6,md:2},i.a.createElement(he.a,{my:5},i.a.createElement("h3",null,i.a.createElement(u.a,{id:"app.clip.format"})),d.formato.val,i.a.createElement("h3",null,i.a.createElement(u.a,{id:"app.clip.year"})),d.annoda.val,d.annoda.val!==d.annoa.val?"-".concat(d.annoa.val):"",g&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,i.a.createElement(u.a,{id:"app.clip.map"})),i.a.createElement(Ee.a,{className:a.button,onClick:function(){var e;s.push("../map/?center=".concat((e=g.geometry,(e=(e=(e=e.trim()).replace("POINT(","")).replace(")","")).split(" ").map((function(e){return Math.round(1e3*parseFloat(e))/1e3}))).join(",")))}},i.a.createElement(pa.a,{fontSize:"small"})," ")))),i.a.createElement(Ze.a,{item:!0,xs:12,md:2},i.a.createElement(he.a,{my:5},d.descr.val))),i.a.createElement(Ze.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(Ze.a,{item:!0,xs:8,style:{textAlign:"center"}},i.a.createElement("h3",null,i.a.createElement(u.a,{id:"app.themes"})),d.temi.val.split(";").map((function(e,t){return i.a.createElement(we.a,{key:t,variant:"extended",className:a.fabTheme,onClick:function(){return s.push("../search/?themes=".concat(e.trim()))}},e.trim())})))),i.a.createElement(he.a,{my:5,py:3,borderTop:1,borderColor:"grey.500",textAlign:"center"},i.a.createElement(Ee.a,{className:a.button,onClick:function(){s.push("../search/")}},i.a.createElement(u.a,{id:"app.clip.back2archive"}))),i.a.createElement(Sa,{qs:{places:d.luogo.val},exclude:d.id.val,suppressEmpty:!0,title:i.a.createElement(u.a,{id:"app.clip.same_place",values:{place:d.luogo.val}})}))}function ot(e){var a=e.match.params.id,t=e.match.params.lang;return i.a.createElement(na,{lang:t},i.a.createElement(he.a,{pt:"5rem"},i.a.createElement(it,{id:a})))}t(201);function rt(e){var a=e.lang;return i.a.createElement("div",{className:"blackBg"},i.a.createElement(Ge,{lang:a}),i.a.createElement(ge.a,{className:"mw-700"},e.children))}function lt(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,i.a.createElement("strong",null,"percorsi tematici, geografici e cronologici nel cinema privato")),i.a.createElement("p",null,i.a.createElement("em",null,"lungo la via emilia")," \xe8 la prima uscita di memoryscapes, il progetto di Home Movies per l\u2019accesso on line al patrimonio audiovisivo privato del secolo scorso."),i.a.createElement("p",null,i.a.createElement("em",null,"lungo la via emilia")," propone una fruizione esperienziale e narrativa dei contenuti d\u2019archivio per mezzo di chiavi d\u2019accesso ai temi presenti nelle pellicole, alla geografia dei luoghi filmati, alla cronologia e agli autori/autrici. Un viaggio nel tempo e nello spazio, dagli Appennini al Po, dalle citt\xe0 alla pianura e al mare. Ogni singola clip costituisce una microstoria e allo stesso tempo diviene una singola tessera di un mosaico di storie virtualmente infinito e componibile liberamente. Buona navigazione!"),i.a.createElement("p",null,i.a.createElement("em",null,"lungo la via emilia")," \xe8 frutto di un lungo lavoro di ricerca, selezione, descrizione, digitalizzazione ed edizione video di pellicole Super8, 8mm, 16mm e 9,5mm girate tra gli anni \u201830 e gli anni \u201880 del XX secolo."),i.a.createElement("p",null,"Per commenti e suggerimenti scrivi a: ",i.a.createElement("a",{href:"mailto: info@homemovies.it"},"info@homemovies.it")),i.a.createElement("h3",null,"Credits"),i.a.createElement("p",null,"Un progetto di Home Movies"),i.a.createElement("p",null,i.a.createElement("strong",null,"Comitato scientifico"),": Marco Bertozzi (IUAV), Luisa Cigognetti (Istituto Storico Parri), Michele Guerra (Universit\xe0 di Parma), Giacomo Manzoli (Universit\xe0 di Bologna), Rick Prelinger (University of California Santa Cruz)."),i.a.createElement("h4",null,"Team del progetto"),i.a.createElement("ul",{style:{listStyle:"none"}},i.a.createElement("li",null,"Direzione: Paolo Simoni"),i.a.createElement("li",null,"Architettura e gestione dei contenuti: Ilaria Ferretti"),i.a.createElement("li",null,"Producer: Giulia Simi"),i.a.createElement("li",null,"Ricerche, descrizioni ed editing: Ilaria Ferretti, Chiara Petrucci, Silvia Savorelli, Paolo Simoni"),i.a.createElement("li",null,"Restauro e digitalizzazione pellicole: Mirco Santi, Giuseppe Fara"),i.a.createElement("li",null,"Post-produzione video: Michele Manzolini, Davide Bianchi, Tommaso Querin"),i.a.createElement("li",null,"Realizzazione db e web: Bradypus"),i.a.createElement("li",null,"Grafica: Giulia Ripa")),i.a.createElement("h4",null,"Partner istituzionali"),i.a.createElement("p",null,"Istituto Storico Parri e Kin\xe8 societ\xe0 cooperativa"),i.a.createElement("p",null,"Il progetto \xe8 realizzato con il contributo di Regione Emilia-Romagna e MiBACT"),i.a.createElement("p",null,"Gli archivi audiovisivi da cui sono tratte le clip sono stati raccolti, digitalizzati, catalogati assieme a: Associazione Home Movies Emilia Romagna nel quadro di un\u2019attivit\xe0 sostenuta da Comune di Reggio Emilia. Reggiani per esempio), Universit\xe0 di Modena e Reggio Emilia, Biblioteca Panizzi, Associazione Sguardi in Camera di Ravenna e Cineteca di Rimini."))}function ct(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,i.a.createElement("strong",null,"percorsi tematici, geografici e cronologici nel cinema privato")),i.a.createElement("p",null,i.a.createElement("em",null,"cartoline italiane")," \xe8 la seconda serie di memoryscapes, il progetto di Home Movies per l\u2019accesso on line al patrimonio audiovisivo privato del secolo scorso."),i.a.createElement("p",null,i.a.createElement("em",null,"cartoline italiane")," propone una fruizione esperienziale e narrativa dei contenuti d\u2019archivio per mezzo di chiavi d\u2019accesso ai temi presenti nelle pellicole, alla geografia dei luoghi filmati, alla cronologia e agli autori/autrici. Un percorso del Bel Paese nelle immagini degli italiani che ne hanno filmato i paesaggi, le citt\xe0 e i borghi a futura memoria. Ogni singola clip costituisce una microstoria e allo stesso tempo diviene un singolo tassello di un mosaico di storie virtualmente infinito e componibile liberamente. Buona navigazione!"),i.a.createElement("p",null,i.a.createElement("em",null,"memoryscapes")," \xe8 frutto di un lungo lavoro di ricerca, selezione, descrizione, digitalizzazione ed edizione video di pellicole Super8, 8mm, 16mm e 9,5mm girate tra gli anni \u201820 e gli anni \u201880 del XX secolo."),i.a.createElement("p",null,"Per commenti e suggerimenti scrivi a: ",i.a.createElement("a",{href:"mailto: info@homemovies.it"},"info@homemovies.it")),i.a.createElement("h3",null,"Credits"),i.a.createElement("p",null,"Un progetto di Home Movies"),i.a.createElement("p",null,i.a.createElement("strong",null,"Comitato scientifico"),": Marco Bertozzi (IUAV), Luisa Cigognetti (Istituto Storico Parri), Michele Guerra (Universit\xe0 di Parma), Giacomo Manzoli (Universit\xe0 di Bologna), Rick Prelinger (University of California Santa Cruz)."),i.a.createElement("h4",null,"Team del progetto"),i.a.createElement("ul",{style:{listStyle:"none"}},i.a.createElement("li",null,"Direzione: Paolo Simoni"),i.a.createElement("li",null,"Architettura e gestione dei contenuti: Ilaria Ferretti"),i.a.createElement("li",null,"Producer: Giulia Simi"),i.a.createElement("li",null,"Ricerche, descrizioni ed editing cartoline italiane: Davide Bianchi, Ilaria Ferretti, Michele Manzolini, Mirco Santi, Paolo Simoni"),i.a.createElement("li",null,"Restauro e digitalizzazione pellicole: Mirco Santi, Giuseppe Fara"),i.a.createElement("li",null,"Post-produzione video: Michele Manzolini, Davide Bianchi, Tommaso Querin"),i.a.createElement("li",null,"Realizzazione db e web: Bradypus"),i.a.createElement("li",null,"Grafica: Giulia Ripa")),i.a.createElement("h4",null,"Partner istituzionali"),i.a.createElement("p",null,"Istituto Storico Parri e Kin\xe8 societ\xe0 cooperativa"),i.a.createElement("p",null,"Il progetto \xe8 realizzato con il contributo di Regione Emilia-Romagna e MiBACT"))}var mt=Object(de.a)((function(e){return{boxContainer:{padding:e.spacing(3,2),display:"flex",flexDirection:"column",justifyContent:"center"},textBox:{textAlign:"center",color:"#fff"},mainTitle:{fontSize:"3.2em",letterSpacing:"0.1em",marginBlockStart:"0"}}}));function st(e){var a=mt(),t=e.lang||e.match.params.lang;return i.a.createElement(rt,{lang:t},i.a.createElement(fe.a,{className:a.boxContainer,component:"div"},i.a.createElement(he.a,{className:a.textBox},i.a.createElement("h5",null,"HOME MOVIES DIGITAL ARCHIVES"),i.a.createElement("h2",{className:a.mainTitle},xe.main,i.a.createElement("br",null)," ",xe.sub),"er"===je?i.a.createElement(lt,null):i.a.createElement(ct,null))))}var pt=t(80);window.location.href.match(/homemovies\.it/g)&&(pt.a.initialize("UA-151640045-2"),pt.a.pageview(window.location.pathname+window.location.search));var ut={it:se,en:pe};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement((function(){var e=Object(n.useState)(me.defaultTheme),a=Object(l.a)(e,1)[0],t=Object(n.useState)("it"),o=Object(l.a)(t,2),r=o[0],d=o[1];return i.a.createElement(u.c,{locale:r,messages:ut[r]},i.a.createElement(s.a,{theme:a},i.a.createElement(p.a,null),i.a.createElement(c.a,null,i.a.createElement(m.c,null,i.a.createElement(m.a,{exact:!0,path:"/",component:function(){return i.a.createElement(Se,{changeLang:d})}}),i.a.createElement(m.a,{exact:!0,path:"/:lang(en|it)/map/",component:$e}),i.a.createElement(m.a,{exact:!0,path:"/:lang(en|it)/search/",component:Za}),i.a.createElement(m.a,{exact:!0,path:"/:lang(en|it)/clip/:id",component:ot}),i.a.createElement(m.a,{exact:!0,path:"/:lang(en|it)/about",component:st})))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},65:function(e,a,t){e.exports=t.p+"static/media/internal-background-er.a7496dd4.jpg"}},[[156,1,2]]]);
//# sourceMappingURL=main.d70983a4.chunk.js.map