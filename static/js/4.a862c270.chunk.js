(this["webpackJsonpascensorista-espacial"]=this["webpackJsonpascensorista-espacial"]||[]).push([[4],{73:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(68),i=a(0),o=a.n(i),r=a(37),c=a(39),l=a(70),s=a(69),d=function(e){var t=e.onEnter,a=e.data,n=e.windowHeight;return o.a.createElement("div",{className:"final",style:{position:"relative",width:"100%",height:"".concat(n,"px"),maxWidth:"900px",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center",background:"url(./img/1/bg/".concat(a.index,".png)"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",border:"1px solid pink"}},o.a.createElement(s.a,{onPositionChange:function(){return a&&a.index&&a.index},onEnter:function(){return t(a.index)},topOffset:"50%"}),o.a.createElement("div",{className:"final",style:{position:"relative",width:"100%",height:"".concat(n,"px"),maxWidth:"900px",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center",background:"url(./img/1/fg/".concat(a.index,".png)"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",border:"1px solid pink",zIndex:3}},o.a.createElement(s.a,{onPositionChange:function(){return a&&a.index&&a.index},onEnter:function(){return t(a.index)},topOffset:"50%"})))},m=void 0!==window.safari;var p=function(e){var t=e.data,a=e.windowHeight;return o.a.createElement("div",{style:{width:"100%",height:"".concat(a,"px"),maxWidth:"900px",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center",position:m?"-webkit-sticky":"sticky",top:0,zIndex:2}},o.a.createElement("div",{className:"ascensor floating",style:{position:"relative"}},o.a.createElement("h4",{className:"skewed"},o.a.createElement("span",null,4-t.index)),o.a.createElement("img",{src:"./img/1/ascensor/".concat(t.index,".png"),alt:"",style:{width:"100%"}})))},u=a(17),g=a(36);var x=function(e){var t=e.bounds,a=e.index,n=e.data,i=a>0&&a<n[n.length-1].index,r=Object(u.b)({opacity:i?1:0,config:{mass:5,tension:500,friction:80}}).opacity;return o.a.createElement(u.a.div,{className:"altura",style:{position:"fixed",top:"90px",width:"100%",zIndex:4,opacity:r}},o.a.createElement("div",{style:{width:"200px",textAlign:"center",margin:"0 auto",color:"white",background:"var(--foreground-color)",padding:"1em",border:"1px solid white",display:"flex",fontSize:"0.9em"}},o.a.createElement("h6",{style:{opacity:.6}},"Altura: "),o.a.createElement("h6",{style:{fontWeight:400,fontFeatureSettings:'"tnum"',fontVariantNumeric:"tabular-nums",width:"190px",letterSpacing:"0.09em"}},Math.floor(Object(g.b)(t.height-Math.abs(t.top),0,t.height,0,35e4)).toLocaleString()," "),o.a.createElement("h6",{style:{opacity:.6}},"km.")))},h=[{index:0,texto:"...Primer texto"},{index:1,texto:"Segundo texto"},{index:2,texto:"Tercer texto"},{index:3,texto:"Cuarto texto"}];a(73),t.default=function(){var e=Object(i.useState)(0),t=Object(n.a)(e,2),a=t[0],s=t[1],m=Object(r.a)({scroll:!0,polyfill:c.a}),u=Object(n.a)(m,2),g=u[0],f=u[1],E=Object(l.useWindowSize)(),y=Object(n.a)(E,2),v=(y[0],y[1]);console.log(v);var b=function(e){s(e)};return console.log(f),o.a.createElement("div",null,o.a.createElement("div",{className:"comic"},o.a.createElement("div",{className:"comic",ref:g,style:{background:"linear-gradient(to bottom, #000000 0%,#24146b 68%,#84c9d6 87%,#f4d0a6 100%)"}},o.a.createElement(x,{index:a,bounds:f,data:h}),o.a.createElement("div",{style:{maxWidth:"900px",margin:"0 auto",paddingTop:"80px",color:"white",position:"relative"}},o.a.createElement("div",{style:{color:"white",maxWidth:"450px",margin:"0 auto",padding:"0 1em 0 1em"}},o.a.createElement("h1",{className:"h2",style:{textAlign:"center",lineHeight:"1.2em"}},"El ascensorista espacial"),o.a.createElement("p",null,"Los viajes espaciales llegaron a C\xe1diz el 16 de julio de 2049."),o.a.createElement("p",{style:{marginTop:"-0.5em"}},"Ese d\xeda me convert\xed en el primer ascensorista espacial de la ciudad.")),o.a.createElement("img",{src:"./img/2/luna.png",alt:"Luna",style:{width:"100%",margin:"1em 0 0 0"}})),o.a.createElement("div",{style:{color:"white",maxWidth:"450px",margin:"0 auto",padding:"2em 1em 2em 1em"}},o.a.createElement("p",null,"Durante estos a\xf1os he visto de todo...")),o.a.createElement(p,{data:h[a],windowHeight:v}),o.a.createElement("div",{className:"bg",style:{marginTop:"-".concat(v,"px")}},h.map((function(e){return o.a.createElement(i.Fragment,{key:"n".concat(e.index)},o.a.createElement(d,{onEnter:b,data:e,windowHeight:v}))})))),o.a.createElement("div",{className:"final",style:{color:"white",position:"relative",background:"RGBA(243, 208, 166, 1.00)"}},o.a.createElement("div",{className:"texto",style:{maxWidth:"900px",margin:"0 auto",padding:"2em 0 8em 0",textAlign:"center",color:"var(--foreground-color)"}},o.a.createElement("h3",null,"Estaci\xf3n Caleta"),o.a.createElement("p",null,"Final del trayecto")))))}}}]);
//# sourceMappingURL=4.a862c270.chunk.js.map