(this["webpackJsonpascensorista-espacial"]=this["webpackJsonpascensorista-espacial"]||[]).push([[4],{68:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,i=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(c){i=!0,r=c}finally{try{n||null==l.return||l.return()}finally{if(i)throw r}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return i}))},82:function(e,t,a){},88:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.r(t);var i=a(68),r=a(0),o=a.n(r),l=a(70),c=a(69),s=function(e){var t=e.onEnter,a=e.data,n=e.windowHeight;return o.a.createElement("div",{style:{position:"relative",width:"100%",height:"".concat(n,"px"),maxWidth:"900px",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid green",backgroundSize:"cover",backgroundPosition:"center"}},o.a.createElement(c.a,{onPositionChange:function(){return a&&a.index&&a.index},onEnter:function(){return t(a.index)},topOffset:"50%"}),o.a.createElement("div",{style:{position:"relative",width:"100%",height:"".concat(n,"px"),maxWidth:"600px",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid red",zIndex:"2"}},o.a.createElement("div",{style:{position:"absolute",top:0,right:0,width:"100%",height:"".concat(n,"px"),display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid red",zIndex:"2"}},o.a.createElement("img",{src:"./img/2/fg/".concat(a.index,".png"),alt:"",style:{width:"100%",top:"0",left:"0"}})),o.a.createElement("div",{style:{position:"absolute",top:0,right:0,width:"100%",height:"".concat(n,"px"),display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid red",zIndex:"2"}},o.a.createElement("p",{style:{zIndex:3,margin:"0 60px 0 60px",background:"RGBA(255, 255, 255, 0.90)",padding:"1em",border:"1px solid var(--foreground-color)"}},a.texto))))},d=void 0!==window.safari;var m=function(e){var t=e.data,a=e.windowHeight;return o.a.createElement("div",{style:{height:"".concat(a,"px"),width:"100%",maxWidth:"600px",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center",position:d?"-webkit-sticky":"sticky",top:0,zIndex:2,border:"1px solid gold"}},o.a.createElement("div",{className:"ascensor",style:{position:"relative"}},o.a.createElement("img",{src:"./img/2/ascensor/".concat(t.index,".png"),alt:"",style:{width:"100%"}})))},p=a(37),u=a(39),g=a(17),x=a(36);var h=function(e){var t=e.bounds,a=e.index,n=e.data,i=a>0&&a<n[n.length-1].index,r=Object(g.b)({opacity:i?1:0,config:{mass:5,tension:500,friction:80}}).opacity;return o.a.createElement(g.a.div,{className:"altura",style:{position:"fixed",top:"90px",width:"100%",zIndex:4,opacity:r}},o.a.createElement("div",{style:{width:"200px",textAlign:"center",margin:"0 auto",color:"white",background:"var(--foreground-color)",padding:"1em",border:"1px solid white",display:"flex",fontSize:"0.9em"}},o.a.createElement("h6",{style:{opacity:.6}},"Altura: "),o.a.createElement("h6",{style:{fontWeight:400,fontFeatureSettings:'"tnum"',fontVariantNumeric:"tabular-nums",width:"190px",letterSpacing:"0.09em"}},Math.floor(Object(x.b)(t.height-Math.abs(t.top),0,t.height,0,35e4)).toLocaleString()," "),o.a.createElement("h6",{style:{opacity:.6}},"km.")))},f=function(e){var t=e.index,a=e.data,r=(e.windowHeight,Object(p.a)({scroll:!0,polyfill:u.a})),l=Object(i.a)(r,2),c=l[0],s=l[1];return console.log(s),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{ref:c,style:{position:"absolute",border:"10px solid pink",width:"100%",height:"100%"}},o.a.createElement(g.a.img,{style:{position:"absolute",top:"200px",left:"20px",zIndex:0,transform:"translate(0, ".concat(s.top/2,"px)")},src:"./img/2/fondos/satellite4.svg",width:"10%",alt:""}),o.a.createElement(g.a.img,{style:n({position:"absolute",top:0,right:"20px",bottom:0,zIndex:0,transform:"translate(0, ".concat(s.top/5,"px)")},"zIndex",3),src:"./img/2/fondos/satellite4.svg",width:"20%",alt:""}),o.a.createElement(h,{index:t,bounds:s,data:a})))},y=[{index:0,texto:"...Primer texto"},{index:1,texto:"Segundo texto"},{index:2,texto:"Tercer texto"},{index:3,texto:"Cuarto texto"}];a(82),t.default=function(){var e=Object(r.useState)(0),t=Object(i.a)(e,2),a=t[0],c=t[1],d=Object(l.useWindowHeight)(),p=function(e){c(e)};return o.a.createElement("div",null,o.a.createElement("div",{className:"comic"},o.a.createElement("div",{className:"comic",style:n({background:"black"},"background","linear-gradient(to bottom, RGBA(37, 50, 55, 1.00) 0%,RGBA(64, 81, 167, 1.00) 68%,#84c9d6 87%,#f4d0a6 100%)")},o.a.createElement("div",{style:{maxWidth:"900px",margin:"0 auto",paddingTop:"80px",color:"white",position:"relative"}},o.a.createElement("div",{style:{color:"white",maxWidth:"450px",margin:"0 auto",padding:"0 1em 0 1em"}},o.a.createElement("h1",{className:"h2",style:{textAlign:"center",lineHeight:"1.2em"}},"El ascensorista espacial"),o.a.createElement("p",null,"Los viajes espaciales llegaron a C\xe1diz el 16 de julio de 2049."),o.a.createElement("p",{style:{marginTop:"-0.5em"}},"Ese d\xeda me convert\xed en el primer ascensorista espacial de la ciudad.")),o.a.createElement("img",{src:"./img/1/luna.png",alt:"Luna",style:{width:"100%",margin:"1em 0 0 0"}})),o.a.createElement("div",{style:{color:"white",maxWidth:"450px",margin:"0 auto",padding:"2em 1em 2em 1em"}},o.a.createElement("p",null,"Durante estos a\xf1os he visto de todo...")),o.a.createElement(m,{data:y[a],windowHeight:d}),o.a.createElement("div",{className:"parallax",style:{position:"relative"}},o.a.createElement(f,{index:a,data:y}),o.a.createElement("div",{className:"bg",style:{marginTop:"-".concat(d,"px")}},y.map((function(e){return o.a.createElement(r.Fragment,{key:"n".concat(e.index)},o.a.createElement(s,{onEnter:p,data:e,windowHeight:d}))}))))),o.a.createElement("div",{className:"final",style:{color:"white",position:"relative",background:"RGBA(243, 208, 166, 1.00)"}},o.a.createElement("div",{className:"texto",style:{maxWidth:"900px",margin:"0 auto",padding:"2em 0 8em 0",textAlign:"center",color:"var(--foreground-color)"}},o.a.createElement("h3",null,"Estaci\xf3n Caleta"),o.a.createElement("p",null,"Final del trayecto")))))}}}]);
//# sourceMappingURL=4.d7cedb6d.chunk.js.map