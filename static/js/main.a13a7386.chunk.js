(this.webpackJsonpmemoryscape=this.webpackJsonpmemoryscape||[]).push([[0],{142:function(e){e.exports=JSON.parse('{"app.menu.map":"Mappa","app.menu.archive":"Archivio","app.menu.about":"Il progetto","app.search.filters":"Filtri","app.search.all":"Tutto","app.pagination.page":"Pagina {pageNo}","app.pagination.recap":"Clip {start} - {end} di {tot}","app.filterModal.year":"Anno","app.filterModal.places":"Luoghi","app.themes":"Temi","app.filterModal.clear":"Svuota","app.filterModal.apply":"Applica","app.clip.author":"Autore","app.clip.place":"Luogo","app.clip.year":"Anno","app.clip.format":"Formato","app.clip.map":"Mappa","app.clip.inv":"Inventario","app.clip.same_place":"Altre clip girate a {place}","app.clip.back2archive":"Torna all\'archivio","app.for":"per","app.autocomplete.type":"Comincia a digitare per cercare un luogo"}')},143:function(e){e.exports=JSON.parse('{"app.menu.map":"Map","app.menu.archive":"Archive","app.menu.about":"Informazioni","app.search.filters":"Filters","app.search.all":"All","app.pagination.page":"Page {pageNo}","app.pagination.recap":"Clips {start} - {end} of {tot}","app.filterModal.year":"Year","app.filterModal.places":"Places","app.themes":"Themes","app.filterModal.clear":"Clear","app.filterModal.apply":"Apply","app.clip.author":"Author","app.clip.place":"Place","app.clip.year":"Year","app.clip.format":"Format","app.clip.map":"Map","app.clip.inv":"Inventory","app.clip.same_place":"Other clips filmed in {place}","app.clip.back2archive":"Back to the archive","app.for":"for","app.autocomplete.type":"Start typing to find a place"}')},144:function(e,a,t){e.exports=t.p+"static/media/home-background-er.69f0cdef.jpg"},145:function(e,a,t){e.exports=t.p+"static/media/home-background-italia.df376d2d.jpg"},175:function(e,a,t){e.exports=t(212)},203:function(e,a,t){},211:function(e,a,t){},212:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(14),r=t.n(o),l=t(10),c=t(32),m=t(53),s=t(275),u=t(276),p=t(280),d=t(162),g=t(119),f=t.n(g),h=t(120),E=t.n(h),b=t(121),v=t.n(b),y=t(122),C=t.n(y),O=t(123),k=t.n(O),x=t(124),j=t.n(x),z=t(125),S=t.n(z),I=t(126),T=t.n(I),M=t(127),N=t.n(M),B=t(128),w=t.n(B),A=t(129),P=t.n(A),_=t(130),L=t.n(_),D=t(131),R=t.n(D),F=t(132),G=t.n(F),V=t(133),H=t.n(V),U=t(134),W=t.n(U),q=t(135),K=t.n(q),Q=t(136),J=t.n(Q),Y=t(137),X=t.n(Y),$=t(138),Z=t.n($),ee={red:{id:"red",name:"Red",import:E.a},pink:{id:"pink",name:"Pink",import:v.a},purple:{id:"purple",name:"Purple",import:C.a},deepPurple:{id:"deep-purple",name:"Deep Purple",import:k.a},indigo:{id:"indigo",name:"Indigo",import:j.a},blue:{id:"blue",name:"Blue",import:S.a},lightBlue:{id:"light-blue",name:"Light Blue",import:T.a},cyan:{id:"cyan",name:"Cyan",import:N.a},teal:{id:"teal",name:"Teal",import:w.a},green:{id:"green",name:"Green",import:P.a},lightGreen:{id:"light-green",name:"Light Green",import:L.a},lime:{id:"lime",name:"Lime",import:R.a},yellow:{id:"yellow",name:"Yellow",import:G.a},amber:{id:"amber",name:"Amber",import:H.a},orange:{id:"orange",name:"Orange",import:W.a},deepOrange:{id:"deep-orange",name:"Deep Orange",import:K.a},brown:{id:"brown",name:"Brown",import:J.a},gray:{id:"gray",name:"Gray",import:X.a},blueGray:{id:"blue-gray",name:"Blue Gray",import:Z.a}},ae={light:{id:"light",name:"Light"},dark:{id:"dark",name:"Dark"}},te=function(e){return e?(e=f.a.camelCase(e),ee[e]):null},ne=function(e){return e?ae[e]:null},ie=te("blue"),oe=te("red"),re=ne("light"),le=Object(d.a)({palette:{primary:ie.import,secondary:oe.import,type:re.id},primaryColor:ie,secondaryColor:oe,type:re,typography:{fontFamily:"Poppins"},overrides:{MuiCssBaseline:{"@global":{"@font-face":"Poppins"}}}}),ce={};ce.colors=ee,ce.types=ae,ce.defaultPrimaryColor=ie,ce.defaultSecondaryColor=oe,ce.defaultType=re,ce.defaultTheme=le,ce.isDefaultTheme=function(e){return!!e&&(e.primaryColor.id===ie.id&&e.secondaryColor.id===oe.id&&e.type.id===re.id)},ce.createTheme=function(e){if(!e)return null;var a=e,t=a.primaryColor,n=a.secondaryColor,i=a.type;return t&&n&&i?(t=te(t),n=te(n),i=ne(i),t&&n&&i?e=Object(d.a)({palette:{primary:t.import,secondary:n.import,type:i.id},primaryColor:t,secondaryColor:n,type:i}):null):null};var me=ce,se=t(142),ue=t(143),pe=t(16),de=t(217),ge=t(256),fe=t(257),he=t(278),Ee=t(215),be=t(144),ve=t.n(be),ye=t(145),Ce=t.n(ye),Oe={er:{app:"er",col:"#7a1dcf",title:{main:"memoryscapes 01",sub:"lungo la via emilia"}},italia:{app:"italia",col:"#245344",title:{main:"memoryscapes 02",sub:"cartoline italiane"}}}[window.location.href.includes("ms-emilia-romagna.homemovies.it")?"er":"italia"],ke=Oe.app,xe=Oe.col,je=Oe.title,ze=Object(de.a)((function(e){return{homeContainer:{backgroundImage:"url(".concat("er"===ke?ve.a:Ce.a,")"),backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover",maxWidth:"100%"},boxContainer:{padding:e.spacing(3,2),height:200,display:"flex",flexDirection:"column",justifyContent:"center"},textBox:{textAlign:"center",color:"#fff",marginTop:"auto",paddingTop:"9em"},mainTitle:Object(pe.a)({fontSize:"3.2em",marginBlockStart:"0"},e.breakpoints.down("xs"),{fontSize:"2.2em"}),languageContainer:{marginTop:"auto",marginBottom:"6em",textAlign:"center"},buttomLang:{color:"#fff",fontWeight:"900"}}}));function Se(e){var a=e.changeLang,t=ze(),n=Object(m.f)();return i.a.createElement("div",{className:t.homeContainer},i.a.createElement(ge.a,{fixed:!0},i.a.createElement(fe.a,{className:t.boxContainer,component:"div",style:{height:"100vh"}},i.a.createElement(he.a,{className:t.textBox},i.a.createElement("h5",null,"HOME MOVIES DIGITAL ARCHIVES"),i.a.createElement("h2",{className:t.mainTitle},je.main,i.a.createElement("br",null),je.sub)),i.a.createElement(he.a,{className:t.languageContainer},i.a.createElement(Ee.a,{className:t.buttomLang,onClick:function(){return a(e="it"),void n.push("/".concat(e,"/search/"));var e}},"Vai all'archivio")))))}var Ie=t(282),Te=t(286),Me=t(283),Ne=t(258),Be=t(261),we=t(259),Ae=t(148),Pe=t.n(Ae),_e=t(68),Le=t.n(_e),De=t(163),Re=t(285),Fe=t(262),Ge=Object(de.a)((function(e){var a;return{appBar:{backgroundColor:"transparent",boxShadow:"none"},fabButton:{position:"absolute",right:"1rem",top:"1rem",background:"transparent",color:"#fff","&:hover":{background:"".concat(xe," !important"),color:"#fff"}},iconMenu:{fontSize:"2.5rem"},popoverPaper:Object(pe.a)({width:"100%",height:"100vh",maxHeight:"100vh",maxWidth:"unset",top:"0 !important",backgroundColor:"#000000f2",display:"flex",flexDirection:"column",justifyContent:"center",left:"0 !important"},e.breakpoints.down(800),{textAlign:"center"}),menuContent:(a={maxHeight:"100vh",display:"flex",flexDirection:"row"},Object(pe.a)(a,e.breakpoints.down(800),{flexDirection:"column"}),Object(pe.a)(a,"justifyContent","center"),Object(pe.a)(a,"position","initial"),Object(pe.a)(a,"& div",Object(pe.a)({marginRight:"3em"},e.breakpoints.down(800),{margin:"auto"})),a),menuItem:{color:"#fff",fontSize:"3.4em",fontWeight:"700","&:hover":{color:xe}},colorWhite:{color:"#fff"},contactParagraph:{color:"#7b7878",fontSize:"1em",lineHeight:"1.8em"},titleMenu:{letterSpacing:"0.1em"},menuLink:{textDecoration:"none",display:"block","&:hover":{textDecoration:"none"}},closeMenuContainer:{position:"absolute",marginRight:"0.8em !important",top:"0",right:"0","& button":{color:"#fff",fontSize:"2.5rem"}}}}));function Ve(e){var a=Ge(),t=Object(n.useState)(null),o=Object(l.a)(t,2),r=o[0],c=o[1],s=Object(m.f)(),u=e.lang,p=function(){c(null)},d=function(e){s.push(e)};return i.a.createElement(Ne.a,{color:"primary",position:"fixed",className:a.appBar},i.a.createElement(we.a,{onClick:function(e){c(e.currentTarget)},className:a.fabButton},i.a.createElement(Pe.a,{className:a.iconMenu})),i.a.createElement(De.a,{PopoverClasses:{paper:a.popoverPaper},classes:{list:a.menuContent},id:"main-menu",anchorEl:r,open:Boolean(r),onClose:p,keepMounted:!0},i.a.createElement("div",{className:a.closeMenuContainer},i.a.createElement(Be.a,{onClick:p},i.a.createElement(Le.a,{className:a.iconMenu}))),i.a.createElement("div",null,i.a.createElement(Re.a,{onClick:function(){return d("/")},className:a.menuItem},"Home"),i.a.createElement(Re.a,{onClick:function(){return d("/".concat(u,"/map"))},className:a.menuItem},i.a.createElement(Fe.a,{id:"app.menu.map"}))),i.a.createElement("div",null,i.a.createElement(Re.a,{onClick:function(){return d("/".concat(u,"/search/"))},className:a.menuItem},i.a.createElement(Fe.a,{id:"app.menu.archive"})),i.a.createElement(Re.a,{onClick:function(){return d("/".concat(u,"/about"))},className:a.menuItem},i.a.createElement(Fe.a,{id:"app.menu.about"}))),i.a.createElement("div",{className:a.colorWhite},i.a.createElement("h5",{className:a.titleMenu},"HOME MOVIES DIGITAL ARCHIVES"),i.a.createElement("p",{className:a.contactParagraph},"Home Movies",i.a.createElement("br",null),"Via Sant\u2019Isaia, 18 - 40123 Bologna, IT",i.a.createElement("br",null),"Call - (+39) 051 3397243",i.a.createElement("br",null),"Email -",i.a.createElement("span",{className:a.colorWhite},"info@homemovies.it")))))}var He=t(47),Ue=t(59),We=t(149),qe=t.n(We),Ke=function(e){return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,(function(e,a){return String.fromCharCode("0x"+a)})))},Qe=function(){function e(){Object(He.a)(this,e)}return Object(Ue.a)(e,null,[{key:"_getData",value:function(e,a,t,n){var i="https://db-dev.bradypus.net";"localhost"===window.location.hostname&&(i="http://db.localhost"),i+="/api/".concat(2===n?"v2/":"","hm/"),qe()({method:"post",url:i+e,params:a,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){if(e.data.type&&"error"===e.data.type)return console.log("API error:"),console.log(e.data.text),!1;t(e.data)})).catch((function(e){e instanceof Error?console.log(e.message):console.log(e.data)}))}},{key:"getOne",value:function(e,a){this._getData("",{tb:"ms",verb:"read",id:e},(function(e){a(e)}),2)}},{key:"getAll",value:function(e,a){var t=e?"":" ORDER BY random()";this._getData("ms",{verb:"search",type:"encoded",q_encoded:Ke("app LIKE  '%".concat(ke,"%'").concat(t)),page:e},(function(e){a(e)}))}},{key:"getUniqueVal",value:function(e,a,t,n){this._getData("",{verb:"getUniqueVal",tb:"ms",fld:e,s:a,w:t},(function(e){n(e)}),2)}},{key:"getVocabulary",value:function(e,a){this._getData("",{verb:"getVocabulary",voc:e},(function(e){a(e)}),2)}},{key:"getDecade",value:function(e,a,t){var n=[20,30,40,50,60,70,80,90];if(!n.includes(e))return console.log("Invalid parameter decade: ".concat(e,": only one of ").concat(n.join(",")," is allowed")),!1;var i=parseInt("19".concat(e)),o=i+10,r={verb:"search",type:"encoded",q_encoded:Ke("(app LIKE  '%".concat(ke,"%') AND annoda < ").concat(o," AND annoa >= ").concat(i)),page:a};this._getData("ms",r,(function(e){t(e)}))}},{key:"getByPlacesAndThemse",value:function(e,a,t,n){e||a||n(!1);var i=["(app LIKE '%".concat(ke,"%')")];e&&e.split(",").forEach((function(e,a){i.push(' luogo = "'.concat(e,'" '))})),a&&a.split(",").forEach((function(e,a){i.push(' temi LIKE "%'.concat(e,'%" '))})),this._getData("ms",{verb:"search",type:"encoded",q_encoded:Ke(i.join(" AND ")),page:t},(function(e){n(e)}))}},{key:"getByAuthor",value:function(e,a,t){this._getData("ms",{verb:"search",type:"encoded",q_encoded:Ke("(app LIKE  '%".concat(ke,"%') AND aut LIKE '%").concat(e,"%'")),page:a},(function(e){t(e)}))}},{key:"getMsGeoJson",value:function(e,a){var t={join:"JOIN hm__geodata as g ON g.table_link = 'hm__ms' AND g.id_link = hm__ms.id ","fields[g.geometry]":"Geometry","fields[hm__ms.id]":"Id","fields[hm__ms.vimeoimg]":"Immagine","fields[hm__ms.tit]":"Titolo","fields[hm__ms.aut]":"Autore","fields[hm__ms.annoda]":"Anno da","fields[hm__ms.annoa]":"Anno a",group:"hm__ms.id",limit_start:"0",limit_end:"500",q_encoded:Ke(e?"("+e.replace(/`id`/gi,"`hm__ms`.`id`")+") AND app LIKE '%".concat(ke,"%'"):"app LIKE '%".concat(ke,"%'"))};this._getData("ms?verb=search&geojson=true&type=encoded",t,(function(e){a(e)}))}}]),e}(),Je=t(21),Ye=t.n(Je),Xe=(t(203),t(38)),$e=t.n(Xe);function Ze(e){var a=$e.a.parse(e.location.search,{ignoreQueryPrefix:!0}),t=e.lang||e.match.params.lang,o=!1,r=13;e.center?o=e.center:a.center&&(o=a.center.split(",").reverse(),r=16);var c=o||[44.4943823,11.3418609],m=Object(n.useState)(),s=Object(l.a)(m,2),u=s[0],p=s[1],d=Object(n.useState)(i.a.createRef()),g=Object(l.a)(d,1)[0];return Object(n.useEffect)((function(){Qe.getMsGeoJson("1",(function(e){p(e)}))}),[]),i.a.createElement("div",{className:"mapContainer"},i.a.createElement(Ve,{lang:t}),i.a.createElement(Ie.a,{center:c,zoom:r,style:{width:"100%",height:"100%"},ref:g},i.a.createElement(Te.a,{url:"https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",opacity:.9,attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),u&&i.a.createElement(Me.a,{data:u,pointToLayer:function(e,a){return function(e,a){return new Ye.a.CircleMarker(a,{radius:6,weight:1,color:xe,fillOpacity:.7})}(0,a)},onEachFeature:function(e,a){return function(e,a,t){var n=e.properties,i="<h3>".concat(n.tit,'</h3>\n  <img src="').concat(n.vimeoimg,'"  alt="').concat(n.tit,'" />\n  <p>').concat(n.aut,"\n  ").concat(n.annoda?"<br /><strong>".concat(n.annoda,"</strong>"):"",'</p>\n  <p class="button"><a style="background-color: ').concat(xe,'" href="/').concat(t,"/clip/").concat(n.id,'">Apri</a></p>\n  ');a.bindPopup(i)}(e,a,t)},onAdd:function(e){if(!o){var a=e.target.getBounds();g.current.leafletElement.fitBounds(a)}}})))}var ea=t(263),aa=t(82),ta=t.n(aa),na=Object(de.a)((function(e){return{homeContainer:{backgroundImage:"url(".concat(ta.a,")"),backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover",maxWidth:"100%",height:"100vh",width:"100vw",position:"fixed",overflow:"scroll"}}}));function ia(e){var a=na(),t=e.lang;return i.a.createElement("div",{className:a.homeContainer},i.a.createElement(Ve,{lang:t}),i.a.createElement(ge.a,{fixed:!0},e.children))}var oa=t(268),ra=t(269),la=t(270),ca=t(83),ma=t.n(ca),sa=t(267),ua=t(84),pa=t.n(ua),da=t(154),ga=t.n(da),fa=t(265),ha=t(266),Ea=t(264),ba=t(151),va=t.n(ba),ya=t(152),Ca=t.n(ya),Oa=t(153),ka=t.n(Oa);function xa(e){var a=e.qs,t=[];return a.themes&&(t=t.concat(a.themes.split(","))),a.author&&(t=t.concat(a.author.split(","))),a.places&&(t=t.concat(a.places.split(","))),0===t.length?null:i.a.createElement(he.a,{ml:1,component:"span"},i.a.createElement(Fe.a,{id:"app.for"})," ",i.a.createElement("em",null,t.join(", ")))}var ja=Object(de.a)((function(e){return{button:{backgroundColor:xe,"&:not(:last-child)":{borderRight:"1px solid #fff"},"&:hover":{backgroundColor:xe}}}}));function za(e){var a=ja(),t=Object(m.f)(),n=function(e){return t.push(e)},o=e.qs,r=e.head,l=parseInt(r.total_rows),c=30*parseInt(r.page)-30+1,s=c+parseInt(r.no_records_shown)-1,u=parseInt(r.page),p=parseInt(r.total_pages),d=!1;if(u-1>0){var g=Object.assign({},o);g.page=u-1,d="./?".concat($e.a.stringify(g))}var f=!1;if(u+1<=p){var h=Object.assign({},o);h.page=u+1,f="./?".concat($e.a.stringify(h))}var E=!1;if(u-1>1){var b=Object.assign({},o);b.page=1,E="./?".concat($e.a.stringify(b))}var v=!1;if(u+2<=p){var y=Object.assign({},o);y.page=p,v="./?".concat($e.a.stringify(y))}return i.a.createElement(he.a,{p:1,my:2,style:{background:"rgba(255, 255, 255, .5)"}},i.a.createElement(ea.a,{justify:"space-between",container:!0,alignItems:"center"},i.a.createElement(ea.a,{item:!0},i.a.createElement(Fe.a,{id:"app.pagination.recap",values:{start:c,end:s,tot:l}}),i.a.createElement(xa,{qs:o})),i.a.createElement(ea.a,{item:!0},i.a.createElement(Ea.a,{size:"small","aria-label":"small outlined button group",color:"secondary",variant:"contained",style:{background:"#fff"}},E&&i.a.createElement(Ee.a,{className:a.button,onClick:function(){return n(E)}},i.a.createElement(va.a,null)),d&&i.a.createElement(Ee.a,{className:a.button,onClick:function(){return n(d)}},i.a.createElement(Ca.a,null)),(E||d||f||v)&&i.a.createElement(Ee.a,{className:a.button,disabled:!0},i.a.createElement(Fe.a,{id:"app.pagination.page",values:{pageNo:u}})," "),f&&i.a.createElement(Ee.a,{className:a.button,onClick:function(){return n(f)}},i.a.createElement(ma.a,null)),v&&i.a.createElement(Ee.a,{className:a.button,onClick:function(){return n(v)}},i.a.createElement(ka.a,null))))))}var Sa=Object(fa.a)({GridListTitle:{cursor:"pointer"},GridListTileBar:{background:"".concat(xe,"7f"),height:"100px"},GridListTileBarTitle:{textTransform:"uppercase",fontWeight:"900",fontSize:".9rem"},GridListTileBarSubtitle:{lineHeight:1.5},IconButton:{color:"rgba(255, 255, 255, 0.8)"}});function Ia(e){var a=Object(n.useState)(!1),t=Object(l.a)(a,2),o=t[0],r=t[1],c=Object(n.useState)(1),s=Object(l.a)(c,2),u=s[0],p=s[1],d=Sa(),g=Object(m.f)(),f=e.qs,h=e.suppressEmpty,E=e.title,b=e.exclude,v=Object(ha.a)("(min-width:960px)")?3:1;return Object(n.useEffect)((function(){p(.3),f.decade?Qe.getDecade(parseInt(f.decade),f.page,(function(e){r(e),p(1)})):f.places||f.themes?Qe.getByPlacesAndThemse(f.places,f.themes,f.page,(function(e){r(e),p(1)})):f.author?Qe.getByAuthor(f.author,f.page,(function(e){r(e),p(1)})):Qe.getAll(f.page,(function(e){r(e),p(1)}))}),[f]),o?0===o.head.total_rows||1===o.head.total_rows&&b?h?null:i.a.createElement(ge.a,null,i.a.createElement("p",{style:{color:"#fff",fontSize:"2rem"}},"Nessun risultato trovato!")):i.a.createElement(he.a,{container:"div",style:{opacity:u}},E&&i.a.createElement("h2",null,E),!h&&i.a.createElement(za,{head:o.head,qs:f}),i.a.createElement(oa.a,{cellHeight:280,cols:v,spacing:40},o.records.map((function(e,a){return b&&b===e.id?null:i.a.createElement(ra.a,{key:a,className:d.GridListTitle,onClick:function(){g.push("../clip/".concat(e.id)),window.scrollTo(0,0),document.getElementsByClassName("MuiGrid-root").length>0&&document.getElementsByClassName("MuiGrid-root")[0].scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}},i.a.createElement("img",{src:e.vimeoimg,alt:e.tit}),i.a.createElement(la.a,{classes:{root:d.GridListTileBar,title:d.GridListTileBarTitle,subtitle:d.GridListTileBarSubtitle},title:i.a.createElement("span",null,e.tit," ",i.a.createElement(he.a,{component:"span",mx:2}," | ")," ",i.a.createElement("strong",null,e.annoda,e.annoda!==e.annoa?"-".concat(e.annoa):"")),subtitle:i.a.createElement("span",null,i.a.createElement(pa.a,{fontSize:"small"})," ",e.luogo,i.a.createElement("br",null),i.a.createElement(ga.a,{fontSize:"small"})," ",e.temi),actionIcon:i.a.createElement(Be.a,{onClick:function(){g.push("../clip/".concat(e.id)),window.scrollTo(0,0)},"aria-label":"info about ".concat(e.tit),classes:{root:d.IconButton}},i.a.createElement(ma.a,null))}))})))):i.a.createElement(sa.a,null)}var Ta=t(271),Ma=t(284),Na=t(272),Ba=t(273),wa=t(216),Aa=t(274),Pa=t(155),_a=t.n(Pa),La=Object(n.createContext)({});function Da(e,a){return e.includes(a)?(e.pop(),e):(e.pop(),e.push(a),e)}function Ra(e){return/^(19|20)\d{2}$/.test(e)}function Fa(e){var a=e.children,t=Object(n.useState)([]),o=Object(l.a)(t,2),r=o[0],c=o[1],m=Object(n.useState)([]),s=Object(l.a)(m,2),u=s[0],p=s[1],d=Object(n.useState)(void 0),g=Object(l.a)(d,2),f=g[0],h=g[1],E=Object(n.useState)(void 0),b=Object(l.a)(E,2),v=b[0],y=b[1],C=function(){return u.length>0?"places=".concat(u.map((function(e){return e}))):""},O=function(){return f?"year_start=".concat(f):""},k=function(){return v?"year_end=".concat(v):""};return i.a.createElement(La.Provider,{value:{themeList:r,toggleThemes:function(e){return c(Da(r,e))},isThemeSelected:function(e){return r.includes(e)},setThemeList:c,getQueryFilters:function(){var e=r.length>0?"themes=".concat(r.map((function(e){return e}))):" ";return e+=e&&u?"&".concat(C()):C(),e+=e&&f?"&".concat(O()):O(),(e+=e&&v?"&".concat(k()):k())?"?".concat(e):e},togglePlaces:function(e){return p(Da(u,e))},placesList:u,isPlaceSelected:function(e){return u.includes(e)},initFilters:function(e){switch(e){case"theme":r.pop();break;case"places":p([]);break;default:c(),p()}},addYearFromToQuery:function(e){Ra(e)&&h(e)},addYearToToQuery:function(e){Ra(e)&&y(e)},yearFrom:f,yearTo:v}},a)}Fa.defaultProps={children:null};var Ga=La,Va=Object(de.a)((function(){return{fabTheme:{borderRadius:"0 !important",padding:"0.5em",margin:"0.2em",fontSize:"0.7rem",textTransform:"capitalize","&:hover":{backgroundColor:xe,color:"#fff"}},selected:{backgroundColor:xe,color:"#fff","&:hover":{}}}}));function Ha(e){var a=Object(n.useContext)(Ga).toggleThemes,t=e.themeValue,o=e.selected,r=e.applyFilter,c=Object(n.useState)(o),m=Object(l.a)(c,2),s=m[0],u=m[1],p=Va();return i.a.createElement(we.a,{className:s?_a()([p.fabTheme,p.selected]):p.fabTheme,variant:"extended",size:"small",onClick:function(){return u(!s),a(t),void r()}},t)}function Ua(e){var a=Object(n.useContext)(Ga),t=a.isThemeSelected,o=a.placesList,r=e.applyFilter,c=Object(n.useState)(null),m=Object(l.a)(c,2),s=m[0],u=m[1];return Object(n.useEffect)((function(){Qe.getUniqueVal("temi",!1,"app|LIKE|%".concat(ke,"%").concat(o[0]?"||and|luogo|=|".concat(o[0]):""),(function(e){u(e.sort())}))}),[o]),i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,i.a.createElement(Fe.a,{id:"app.themes"})),s&&s.map((function(e,a){return i.a.createElement(Ha,{key:a,themeValue:e.trim(),selected:t(e.trim()),applyFilter:r})})))}Ha.defaultProps={themeValue:null,selected:!1,applyFilter:null},Ua.defaultProps={applyFilter:null};var Wa=Object(de.a)((function(e){return{dialogContainer:{"& .MuiDialog-paperFullScreen":{backgroundColor:"#000000f2"}},filterBtn:{backgroundColor:"#fff",padding:".4em 2em",fontSize:"1em",borderRadius:"2px",color:"#000",fontWeight:"600","&:hover":{backgroundColor:"#e0e0e0"}},appBar:{position:"relative",backgroundColor:"transparent",boxShadow:"none",display:"flex",flexDirection:"row-reverse"},iconMenu:{fontSize:"2.5rem"},dialogContent:{"& h2":{fontSize:"3.2em",marginBottom:"0.2em",marginTop:"0"}},paper:Object(pe.a)({backgroundColor:"transparent",color:"#fff",textAlign:"left"},e.breakpoints.down(960),{textAlign:"center"}),footerContainer:{padding:"0"},clearIcon:{fontSize:"2.3rem",marginRight:"0.2em"},clearBtn:{color:"#989898",fontWeight:"bold",fontSize:"1.2em"},applyBtn:{backgroundColor:xe,color:"#fff",padding:"0.4em 3em",fontSize:"1.6em",borderRadius:"0","&:hover":{backgroundColor:"#530e92"}}}})),qa=i.a.forwardRef((function(e,a){return i.a.createElement(Ta.a,Object.assign({direction:"up",ref:a},e))}));function Ka(){var e=Object(n.useContext)(Ga),a=e.getQueryFilters,t=e.initFilters,o=Wa(),r=Object(n.useState)(!1),c=Object(l.a)(r,2),s=c[0],u=c[1],p=Object(m.f)(),d=function(){u(!1)},g=function(){p.push(a()),d()};return i.a.createElement("div",null,i.a.createElement(Ee.a,{color:"primary",className:o.filterBtn,onClick:function(){u(!0)}},i.a.createElement(Fe.a,{id:"app.themes"})),i.a.createElement(Ma.a,{className:o.dialogContainer,fullScreen:!0,open:s,onClose:d,TransitionComponent:qa},i.a.createElement(Ne.a,{className:o.appBar},i.a.createElement(Na.a,null,i.a.createElement(Be.a,{edge:"start",color:"inherit",onClick:d,"aria-label":"close"},i.a.createElement(Le.a,{className:o.iconMenu})))),i.a.createElement(Ba.a,{className:o.dialogContent},i.a.createElement(ea.a,{container:!0,spacing:3},i.a.createElement(ea.a,{item:!0,xs:12},i.a.createElement(wa.a,{className:o.paper},i.a.createElement(Ua,{applyFilter:g}))))),i.a.createElement(Aa.a,{className:o.footerContainer},i.a.createElement(Ee.a,{onClick:function(){t("theme"),g()},className:o.clearBtn},i.a.createElement(Le.a,{className:o.clearIcon}),i.a.createElement(Fe.a,{id:"app.filterModal.clear"})))))}var Qa=t(156),Ja=t(277),Ya=t(279),Xa=Object(de.a)((function(e){return{autoComplete:{border:"none",borderBottom:"1px solid #fff",color:"#fff !important",backgroundColor:"rgba(0,0,0,.3)",padding:"0 .5rem","& .MuiAutocomplete-input, & .MuiAutocomplete-popupIndicator, & .MuiAutocomplete-clearIndicator, & .MuiFormLabel-root, & .MuiFormLabel-root.Mui-focused":{color:"#fff !important"}}}}));function $a(){var e=Object(n.useState)(!1),a=Object(l.a)(e,2),t=a[0],o=a[1],r=Object(n.useState)(!1),c=Object(l.a)(r,2),s=c[0],u=c[1],p=Object(n.useState)([]),d=Object(l.a)(p,2),g=d[0],f=d[1],h=Xa(),E=Object(n.useContext)(Ga),b=E.togglePlaces,v=E.getQueryFilters,y=E.initFilters,C=Object(m.f)(),O=function(e){""===e?y("places"):b(e),C.push(v())};return i.a.createElement(Ya.a,{id:"place",className:h.autoComplete,open:t,noOptionsText:i.a.createElement(Fe.a,{id:"app.autocomplete.type"}),onOpen:function(){o(!0)},onClose:function(){o(!1)},onChange:function(e,a){O(a)},options:g,loading:s,renderInput:function(e){return i.a.createElement(Fe.a,{id:"app.filterModal.places"},(function(a){return i.a.createElement(Ja.a,Object.assign({},e,{label:a,fullWidth:!0,onChange:function(e){var a;a=e.target.value,u(!0),Qe.getUniqueVal("luogo",a,"app|LIKE|%".concat(ke,"%"),(function(e){f(e.sort()),u(!1)}))},variant:"standard",InputProps:Object(Qa.a)({},e.InputProps,{endAdornment:i.a.createElement(i.a.Fragment,null,s?i.a.createElement(sa.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment)})}))}))}})}var Za=Object(de.a)((function(e){return{boxContainer:{height:200,display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"4rem"},textBox:Object(pe.a)({color:"#fff",marginTop:"1em",paddingTop:"1em"},e.breakpoints.down("xs"),{marginTop:"2.5em"}),mainTitle:Object(pe.a)({fontSize:"2em",marginBlockStart:"0"},e.breakpoints.down("xs"),{fontSize:"1.5em"}),yearButton:Object(pe.a)({color:"#fff",fontWeight:"900","&.active":{backgroundColor:xe}},e.breakpoints.down("xs"),{fontSize:".7em"}),filterContainer:{textAlign:"right",marginTop:"1em",marginBottom:"1em"}}}));function et(e){var a=Za(),t=Object(m.f)(),n=$e.a.parse(e.location.search,{ignoreQueryPrefix:!0}),o=e.lang||e.match.params.lang,r=function(e){t.push(e)};return i.a.createElement(ia,{lang:o},i.a.createElement(fe.a,{className:a.boxContainer,component:"div"},i.a.createElement(he.a,{className:a.textBox},i.a.createElement(Ee.a,{href:"https://homemovies.it/digital-archives/ ",target:"_blank",style:{color:"#fff",fontWeight:"bold",paddingLeft:0}},"HOME MOVIES DIGITAL ARCHIVES"),i.a.createElement("h1",{className:a.mainTitle},je.main,i.a.createElement("br",null),je.sub)),i.a.createElement(he.a,null,i.a.createElement(ea.a,{container:!0,justify:"space-between",alignItems:"center"},i.a.createElement(Fa,null,i.a.createElement(ea.a,{item:!0,xs:12,md:7},i.a.createElement(he.a,{component:"div"},i.a.createElement(Ee.a,{classes:{root:a.yearButton},className:n.decade?"":"active",onClick:function(){return r("./")}},i.a.createElement(Fe.a,{id:"app.search.all"})),[30,40,50,60,70,80].map((function(e,t){return i.a.createElement(Ee.a,{classes:{root:a.yearButton},className:Number(n.decade)===e?"active":"",key:t,onClick:function(){return r("./?decade=".concat(e))}},"'",e)})))),i.a.createElement(ea.a,{item:!0,className:a.filterContainer,xs:8,md:3},i.a.createElement($a,null)),i.a.createElement(ea.a,{item:!0,className:a.filterContainer,xs:4,md:2},i.a.createElement(Ka,null)))))),i.a.createElement(Ia,{qs:n}))}var at=t(160),tt=t(159),nt=t.n(tt),it=Object(de.a)((function(){return{fabTheme:{borderRadius:"0 !important",padding:"0.5em",margin:"0.2em",fontSize:"0.7rem",textTransform:"capitalize",height:"2.2rem","&:hover":{backgroundColor:xe,color:"#fff"}},button:{color:"#fff",textTransform:"none",textAlign:"left",padding:0,textDecoration:"none","&:hover":{fontWeight:"bold"}},videoWrapper:{height:0,overflow:"hidden",paddingBottom:"75%",paddingTop:"30px",position:"relative"},iframe:{height:"100%",left:0,position:"absolute",top:0,width:"100%"}}}));function ot(e){var a=it(),t=Object(n.useState)(),o=Object(l.a)(t,2),r=o[0],c=o[1],s=Object(m.f)(),u=e.id;if(Object(n.useEffect)((function(){Qe.getOne(parseInt(u),(function(e){c(e)}))}),[u]),!r)return i.a.createElement(sa.a,null);var p=r.core,d=r.geodata[0];return i.a.createElement(he.a,{style:{color:"#fff"}},i.a.createElement(nt.a,null,i.a.createElement("meta",{property:"og:title",content:"Memoryscapes: ".concat(p.tit.val)}),i.a.createElement("meta",{property:"og:description",content:"Memoryscapes: la prima piattaforma online sul cinema privato in Italia"}),i.a.createElement("meta",{property:"og:image",content:p.vimeoimg.val}),i.a.createElement("meta",{property:"og:url",content:window.location}),i.a.createElement("title",null,"Memoryscapes: ",p.tit.val)),i.a.createElement(ea.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(ea.a,{item:!0,xs:12,md:6,style:{textAlign:"center"}},i.a.createElement("h1",null,p.tit.val),i.a.createElement("div",{className:a.videoWrapper},i.a.createElement(at.a,{video:"https://vimeo.com/".concat(p.vimeo.val),responsive:!0})))),i.a.createElement(ea.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(ea.a,{item:!0,xs:6,md:2},i.a.createElement(he.a,{my:5},i.a.createElement("h3",null,i.a.createElement(Fe.a,{id:"app.clip.author"})),i.a.createElement(Ee.a,{className:a.button,onClick:function(){s.push("../search/?author=".concat(p.aut.val))}},p.aut.val),i.a.createElement("h3",null,i.a.createElement(Fe.a,{id:"app.clip.place"})),i.a.createElement(Ee.a,{className:a.button,onClick:function(){s.push("../search/?places=".concat(p.luogo.val))}},p.luogo.val),i.a.createElement("h3",null,i.a.createElement(Fe.a,{id:"app.clip.inv"})),p.inv.val)),i.a.createElement(ea.a,{item:!0,xs:6,md:2},i.a.createElement(he.a,{my:5},i.a.createElement("h3",null,i.a.createElement(Fe.a,{id:"app.clip.format"})),p.formato.val,i.a.createElement("h3",null,i.a.createElement(Fe.a,{id:"app.clip.year"})),p.annoda.val,p.annoda.val!==p.annoa.val?"-".concat(p.annoa.val):"",d&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,i.a.createElement(Fe.a,{id:"app.clip.map"})),i.a.createElement(Ee.a,{className:a.button,onClick:function(){var e;s.push("../map/?center=".concat((e=d.geometry,(e=(e=(e=e.trim()).replace("POINT(","")).replace(")","")).split(" ").map((function(e){return Math.round(1e3*parseFloat(e))/1e3}))).join(",")))}},i.a.createElement(pa.a,{fontSize:"small"})," ")))),i.a.createElement(ea.a,{item:!0,xs:12,md:2},i.a.createElement(he.a,{my:5},p.descr.val))),i.a.createElement(ea.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(ea.a,{item:!0,xs:8,style:{textAlign:"center"}},i.a.createElement("h3",null,i.a.createElement(Fe.a,{id:"app.themes"})),p.temi.val.split(";").map((function(e,t){return i.a.createElement(we.a,{key:t,variant:"extended",className:a.fabTheme,onClick:function(){return s.push("../search/?themes=".concat(e.trim()))}},e.trim())})))),i.a.createElement(he.a,{my:5,py:3,borderTop:1,borderColor:"grey.500",textAlign:"center"},i.a.createElement(Ee.a,{className:a.button,onClick:function(){s.push("../search/")}},i.a.createElement(Fe.a,{id:"app.clip.back2archive"}))),i.a.createElement(Ia,{qs:{places:p.luogo.val},exclude:p.id.val,suppressEmpty:!0,title:i.a.createElement(Fe.a,{id:"app.clip.same_place",values:{place:p.luogo.val}})}))}function rt(e){var a=e.match.params.id,t=e.match.params.lang;return i.a.createElement(ia,{lang:t},i.a.createElement(he.a,{pt:"5rem"},i.a.createElement(ot,{id:a})))}t(211);function lt(e){var a=e.lang;return i.a.createElement("div",{className:"blackBg"},i.a.createElement(Ve,{lang:a}),i.a.createElement(ge.a,{className:"mw-700"},e.children))}function ct(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,i.a.createElement("strong",null,"percorsi tematici, geografici e cronologici nel cinema privato")),i.a.createElement("p",null,i.a.createElement("em",null,"lungo la via emilia")," \xe8 la prima uscita di memoryscapes, il progetto di Home Movies per l\u2019accesso on line al patrimonio audiovisivo privato del secolo scorso."),i.a.createElement("p",null,i.a.createElement("em",null,"lungo la via emilia")," propone una fruizione esperienziale e narrativa dei contenuti d\u2019archivio per mezzo di chiavi d\u2019accesso ai temi presenti nelle pellicole, alla geografia dei luoghi filmati, alla cronologia e agli autori/autrici. Un viaggio nel tempo e nello spazio, dagli Appennini al Po, dalle citt\xe0 alla pianura e al mare. Ogni singola clip costituisce una microstoria e allo stesso tempo diviene una singola tessera di un mosaico di storie virtualmente infinito e componibile liberamente. Buona navigazione!"),i.a.createElement("p",null,i.a.createElement("em",null,"lungo la via emilia")," \xe8 frutto di un lungo lavoro di ricerca, selezione, descrizione, digitalizzazione ed edizione video di pellicole Super8, 8mm, 16mm e 9,5mm girate tra gli anni \u201830 e gli anni \u201880 del XX secolo."),i.a.createElement("p",null,"Per commenti e suggerimenti scrivi a: ",i.a.createElement("a",{href:"mailto: info@homemovies.it"},"info@homemovies.it")),i.a.createElement("h3",null,"Credits"),i.a.createElement("p",null,"Un progetto di Home Movies"),i.a.createElement("p",null,i.a.createElement("strong",null,"Comitato scientifico"),": Marco Bertozzi (IUAV), Luisa Cigognetti (Istituto Storico Parri), Michele Guerra (Universit\xe0 di Parma), Giacomo Manzoli (Universit\xe0 di Bologna), Rick Prelinger (University of California Santa Cruz)."),i.a.createElement("h4",null,"Team del progetto"),i.a.createElement("ul",{style:{listStyle:"none"}},i.a.createElement("li",null,"Direzione: Paolo Simoni"),i.a.createElement("li",null,"Architettura e gestione dei contenuti: Ilaria Ferretti"),i.a.createElement("li",null,"Producer: Giulia Simi"),i.a.createElement("li",null,"Ricerche, descrizioni ed editing: Ilaria Ferretti, Chiara Petrucci, Silvia Savorelli, Paolo Simoni"),i.a.createElement("li",null,"Restauro e digitalizzazione pellicole: Mirco Santi, Giuseppe Fara"),i.a.createElement("li",null,"Post-produzione video: Michele Manzolini, Davide Bianchi, Tommaso Querin"),i.a.createElement("li",null,"Realizzazione db e web: Bradypus"),i.a.createElement("li",null,"Grafica: Giulia Ripa")),i.a.createElement("h4",null,"Partner istituzionali"),i.a.createElement("p",null,"Istituto Storico Parri e Kin\xe8 societ\xe0 cooperativa"),i.a.createElement("p",null,"Il progetto \xe8 realizzato con il contributo di Regione Emilia-Romagna e MiBACT"),i.a.createElement("p",null,"Gli archivi audiovisivi da cui sono tratte le clip sono stati raccolti, digitalizzati, catalogati assieme a: Associazione Home Movies Emilia Romagna nel quadro di un\u2019attivit\xe0 sostenuta da Comune di Reggio Emilia. Reggiani per esempio), Universit\xe0 di Modena e Reggio Emilia, Biblioteca Panizzi, Associazione Sguardi in Camera di Ravenna e Cineteca di Rimini."))}function mt(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,i.a.createElement("strong",null,"percorsi tematici, geografici e cronologici nel cinema privato")),i.a.createElement("p",null,i.a.createElement("em",null,"cartoline italiane")," \xe8 la seconda serie di memoryscapes, il progetto di Home Movies per l\u2019accesso on line al patrimonio audiovisivo privato del secolo scorso."),i.a.createElement("p",null,i.a.createElement("em",null,"cartoline italiane")," propone una fruizione esperienziale e narrativa dei contenuti d\u2019archivio per mezzo di chiavi d\u2019accesso ai temi presenti nelle pellicole, alla geografia dei luoghi filmati, alla cronologia e agli autori/autrici. Un percorso del Bel Paese nelle immagini degli italiani che ne hanno filmato i paesaggi, le citt\xe0 e i borghi a futura memoria. Ogni singola clip costituisce una microstoria e allo stesso tempo diviene un singolo tassello di un mosaico di storie virtualmente infinito e componibile liberamente. Buona navigazione!"),i.a.createElement("p",null,i.a.createElement("em",null,"memoryscapes")," \xe8 frutto di un lungo lavoro di ricerca, selezione, descrizione, digitalizzazione ed edizione video di pellicole Super8, 8mm, 16mm e 9,5mm girate tra gli anni \u201820 e gli anni \u201880 del XX secolo."),i.a.createElement("p",null,"Per commenti e suggerimenti scrivi a: ",i.a.createElement("a",{href:"mailto: info@homemovies.it"},"info@homemovies.it")),i.a.createElement("h3",null,"Credits"),i.a.createElement("p",null,"Un progetto di Home Movies"),i.a.createElement("p",null,i.a.createElement("strong",null,"Comitato scientifico"),": Marco Bertozzi (IUAV), Luisa Cigognetti (Istituto Storico Parri), Michele Guerra (Universit\xe0 di Parma), Giacomo Manzoli (Universit\xe0 di Bologna), Rick Prelinger (University of California Santa Cruz)."),i.a.createElement("h4",null,"Team del progetto"),i.a.createElement("ul",{style:{listStyle:"none"}},i.a.createElement("li",null,"Direzione: Paolo Simoni"),i.a.createElement("li",null,"Architettura e gestione dei contenuti: Ilaria Ferretti"),i.a.createElement("li",null,"Producer: Giulia Simi"),i.a.createElement("li",null,"Ricerche, descrizioni ed editing cartoline italiane: Davide Bianchi, Ilaria Ferretti, Michele Manzolini, Mirco Santi, Paolo Simoni"),i.a.createElement("li",null,"Restauro e digitalizzazione pellicole: Mirco Santi, Giuseppe Fara"),i.a.createElement("li",null,"Post-produzione video: Michele Manzolini, Davide Bianchi, Tommaso Querin"),i.a.createElement("li",null,"Realizzazione db e web: Bradypus"),i.a.createElement("li",null,"Grafica: Giulia Ripa")),i.a.createElement("h4",null,"Partner istituzionali"),i.a.createElement("p",null,"Istituto Storico Parri e Kin\xe8 societ\xe0 cooperativa"),i.a.createElement("p",null,"Il progetto \xe8 realizzato con il contributo di Regione Emilia-Romagna e MiBACT"))}var st=Object(de.a)((function(e){return{boxContainer:{padding:e.spacing(3,2),display:"flex",flexDirection:"column",justifyContent:"center"},textBox:{textAlign:"center",color:"#fff"},mainTitle:{fontSize:"3.2em",letterSpacing:"0.1em",marginBlockStart:"0"}}}));function ut(e){var a=st(),t=e.lang||e.match.params.lang;return i.a.createElement(lt,{lang:t},i.a.createElement(fe.a,{className:a.boxContainer,component:"div"},i.a.createElement(he.a,{className:a.textBox},i.a.createElement("h5",null,"HOME MOVIES DIGITAL ARCHIVES"),i.a.createElement("h2",{className:a.mainTitle},je.main,i.a.createElement("br",null)," ",je.sub),"er"===ke?i.a.createElement(ct,null):i.a.createElement(mt,null))))}var pt=t(95);window.location.href.match(/homemovies\.it/g)&&(pt.a.initialize("UA-151640045-2"),pt.a.pageview(window.location.pathname+window.location.search));var dt={it:se,en:ue};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement((function(){var e=Object(n.useState)(me.defaultTheme),a=Object(l.a)(e,1)[0],t=Object(n.useState)("it"),o=Object(l.a)(t,2),r=o[0],d=o[1];return i.a.createElement(p.a,{locale:r,messages:dt[r]},i.a.createElement(s.a,{theme:a},i.a.createElement(u.a,null),i.a.createElement(c.a,null,i.a.createElement(m.c,null,i.a.createElement(m.a,{exact:!0,path:"/",component:function(){return i.a.createElement(Se,{changeLang:d})}}),i.a.createElement(m.a,{exact:!0,path:"/:lang(en|it)/map/",component:Ze}),i.a.createElement(m.a,{exact:!0,path:"/:lang(en|it)/search/",component:et}),i.a.createElement(m.a,{exact:!0,path:"/:lang(en|it)/clip/:id",component:rt}),i.a.createElement(m.a,{exact:!0,path:"/:lang(en|it)/about",component:ut})))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},82:function(e,a,t){e.exports=t.p+"static/media/internal-background-er.a7496dd4.jpg"}},[[175,1,2]]]);
//# sourceMappingURL=main.a13a7386.chunk.js.map