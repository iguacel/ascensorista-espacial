(this["webpackJsonpascensorista-espacial"]=this["webpackJsonpascensorista-espacial"]||[]).push([[4],{68:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(13),i=a(1),o=a(0),r=a.n(o),c=a(36),l=a(37),s=a(69),d=a(66),m=function(e){var t=e.onEnter,a=e.data,n=e.windowHeight;return r.a.createElement("div",{className:"final",style:{position:"relative",width:"100%",height:"".concat(n,"px"),maxWidth:"900px",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center",background:"url(./img/1/bg/".concat(a.index,".png)"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",border:"1px solid pink"}},r.a.createElement(d.a,{onPositionChange:function(){return a&&a.index&&a.index},onEnter:function(){return t(a.index)},topOffset:"50%"}),r.a.createElement("div",{className:"final",style:{position:"relative",width:"100%",height:"".concat(n,"px"),maxWidth:"900px",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center",background:"url(./img/1/fg/".concat(a.index,".png)"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",border:"1px solid pink",zIndex:3}},r.a.createElement(d.a,{onPositionChange:function(){return a&&a.index&&a.index},onEnter:function(){return t(a.index)},topOffset:"50%"})))},p=void 0!==window.safari;var u=function(e){var t=e.data,a=e.windowHeight;return r.a.createElement("div",{style:{width:"100%",height:"".concat(a,"px"),maxWidth:"900px",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center",position:p?"-webkit-sticky":"sticky",top:0,zIndex:2}},r.a.createElement("div",{className:"ascensor floating",style:{position:"relative"}},r.a.createElement("h4",{className:"skewed"},r.a.createElement("span",null,4-t.index)),r.a.createElement("img",{src:"./img/1/ascensor/".concat(t.index,".png"),alt:"",style:{width:"100%"}})))},g=a(15),x=a(35);var h=function(e){var t=e.bounds,a=e.index,n=e.data,i=a>0&&a<n[n.length-1].index,o=Object(g.b)({opacity:i?1:0,config:{mass:5,tension:500,friction:80}}).opacity;return r.a.createElement(g.a.div,{className:"altura",style:{position:"fixed",top:"90px",width:"100%",zIndex:4,opacity:o}},r.a.createElement("div",{style:{width:"200px",textAlign:"center",margin:"0 auto",color:"white",background:"var(--foreground-color)",padding:"1em",border:"1px solid white",display:"flex",fontSize:"0.9em"}},r.a.createElement("h6",{style:{opacity:.6}},"Altura: "),r.a.createElement("h6",{style:{fontWeight:400,fontFeatureSettings:'"tnum"',fontVariantNumeric:"tabular-nums",width:"190px",letterSpacing:"0.09em"}},Math.floor(Object(x.b)(t.height-Math.abs(t.top),0,t.height,0,35e4)).toLocaleString()," "),r.a.createElement("h6",{style:{opacity:.6}},"km.")))},f=[{index:0,texto:"...Primer texto"},{index:1,texto:"Segundo texto"},{index:2,texto:"Tercer texto"},{index:3,texto:"Cuarto texto"}];a(68),t.default=function(){var e=Object(o.useState)(0),t=Object(i.a)(e,2),a=t[0],d=t[1],p=Object(c.a)({scroll:!0,polyfill:l.a}),g=Object(i.a)(p,2),x=g[0],E=g[1],b=Object(s.useWindowSize)(),y=Object(i.a)(b,2),v=(y[0],y[1]);console.log(v);var w=function(e){d(e)};return console.log(E),r.a.createElement("div",null,r.a.createElement("div",{className:"comic"},r.a.createElement("div",{className:"comic",ref:x,style:Object(n.a)({background:"black"},"background","linear-gradient(to bottom, #000000 0%,#24146b 68%,#84c9d6 87%,#f4d0a6 100%)")},r.a.createElement(h,{index:a,bounds:E,data:f}),r.a.createElement("div",{style:{maxWidth:"900px",margin:"0 auto",paddingTop:"80px",color:"white",position:"relative"}},r.a.createElement("div",{style:{color:"white",maxWidth:"450px",margin:"0 auto",padding:"0 1em 0 1em"}},r.a.createElement("h1",{className:"h2",style:{textAlign:"center",lineHeight:"1.2em"}},"El ascensorista espacial"),r.a.createElement("p",null,"Los viajes espaciales llegaron a C\xe1diz el 16 de julio de 2049."),r.a.createElement("p",{style:{marginTop:"-0.5em"}},"Ese d\xeda me convert\xed en el primer ascensorista espacial de la ciudad.")),r.a.createElement("img",{src:"./img/1/luna.png",alt:"Luna",style:{width:"100%",margin:"1em 0 0 0"}})),r.a.createElement("div",{style:{color:"white",maxWidth:"450px",margin:"0 auto",padding:"2em 1em 2em 1em"}},r.a.createElement("p",null,"Durante estos a\xf1os he visto de todo...")),r.a.createElement(u,{data:f[a],windowHeight:v}),r.a.createElement("div",{className:"bg",style:{marginTop:"-".concat(v,"px")}},f.map((function(e){return r.a.createElement(o.Fragment,{key:"n".concat(e.index)},r.a.createElement(m,{onEnter:w,data:e,windowHeight:v}))})))),r.a.createElement("div",{className:"final",style:{color:"white",position:"relative",background:"RGBA(243, 208, 166, 1.00)"}},r.a.createElement("div",{className:"texto",style:{maxWidth:"900px",margin:"0 auto",padding:"2em 0 8em 0",textAlign:"center",color:"var(--foreground-color)"}},r.a.createElement("h3",null,"Estaci\xf3n Caleta"),r.a.createElement("p",null,"Final del trayecto")))))}}}]);
//# sourceMappingURL=4.160c917e.chunk.js.map