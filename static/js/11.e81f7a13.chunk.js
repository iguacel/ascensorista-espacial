(this["webpackJsonpascensorista-espacial"]=this["webpackJsonpascensorista-espacial"]||[]).push([[11],{64:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function(e){var t=e.src,a=e.width,n=void 0===a?16:a,o=e.height,c=void 0===o?16:o,r="".concat(t);return i.a.createElement("div",{className:"titulo}",style:{paddingTop:"calc(".concat(c," / ").concat(n," * 100%)"),margin:"var(--baseline) 0 var(--baseline) 0",backgroundImage:"url(".concat(r,")"),backgroundSize:"cover",backgroundPosition:"center"}})}},89:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a(0),o=a.n(i),c=a(68),r=a(64),l=a(67),s=function(e){var t=e.onEnter,a=e.data,n=e.windowHeight;return o.a.createElement("div",{style:{position:"relative",width:"100%",height:"".concat(n,"px"),maxWidth:"900px",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement(l.a,{onPositionChange:function(){return a&&a.index&&a.index},onEnter:function(){return t(a.index)},topOffset:"50%"}),o.a.createElement("div",{style:{position:"relative",width:"100%",height:"".concat(n,"px"),maxWidth:"600px",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center",zIndex:"2"}},o.a.createElement("div",{style:{position:"absolute",top:0,right:0,width:"100%",height:"".concat(n,"px"),display:"flex",justifyContent:"center",alignItems:"center",zIndex:"2"}},o.a.createElement("img",{src:"./img/1/fg/".concat(a.index,".png"),alt:"",style:{width:"100%",top:"0",left:"0"}})),o.a.createElement("div",{style:{position:"absolute",top:0,right:0,width:"100%",height:"".concat(n,"px"),display:"flex",justifyContent:"center",alignItems:"center",zIndex:"2"}},a.texto&&o.a.createElement("p",{className:"floating",style:{zIndex:3,margin:"270px 60px 0 60px",background:"RGBA(255, 255, 255, 0.90)",padding:"1em",border:"1px solid var(--foreground-color)",textAlign:"center",maxWidth:"250px"}},a.texto))))},d=void 0!==window.safari;var m=function(e){var t=e.data,a=e.index,n=e.windowHeight;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{display:"none"}},o.a.createElement("img",{src:"./img/8/ascensor/0.png",alt:""}),o.a.createElement("img",{src:"./img/8/ascensor/1.png",alt:""}),o.a.createElement("img",{src:"./img/8/ascensor/2.png",alt:""}),o.a.createElement("img",{src:"./img/8/ascensor/3.png",alt:""}),o.a.createElement("img",{src:"./img/8/ascensor/4.png",alt:""})),o.a.createElement("div",{style:{height:"".concat(n,"px"),width:"100%",maxWidth:"600px",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center",position:d?"-webkit-sticky":"sticky",top:0,zIndex:2}},o.a.createElement("div",{className:"ascensor",style:{position:"relative"}},o.a.createElement("img",{src:"./img/8/ascensor/".concat(t[a].index,".png"),alt:"",style:{width:"100%"}}))))},g=a(65),h=a(66),p=a(22);var x=function(e){var t=e.bounds,a=(e.windowHeight,Object(i.useMemo)((function(){return function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return new Array(a).fill().map((function(a,n){return o.a.createElement("circle",{className:"flicker",key:"star".concat(n),cx:Object(p.c)(0,e),cy:Object(p.c)(0,t),r:Object(p.c)(2,4),style:{animationDelay:"".concat(Object(p.c)(0,1200),"ms"),animationDuration:"".concat(Object(p.c)(1,20),"s")}})}))}(t.width,2e3,Math.floor(t.width/4))}),[t.width])),n=t.height/6.33,c="#D9DADA",r="#9F9F9E";return o.a.createElement("div",{className:"svg",style:{width:"100%",height:"100%"}},o.a.createElement("svg",{style:{overflow:"visible"},viewBox:"0 0 ".concat(t.width," ").concat(t.height)},a,o.a.createElement("circle",{cx:t.width-160,cy:280,r:"20",fill:"RGBA(189, 193, 199, 1)"}),o.a.createElement("circle",{cx:t.width/2+200,cy:t.height-1e3,r:"60",fill:"url(#OrangeRed)",filter:"url(#blurSun)",style:{opacity:1}}),o.a.createElement("line",{x1:t.width/2+140+5,y1:n,x2:t.width/2+140+5,y2:t.height-300,style:{strokeWidth:12},stroke:r}),o.a.createElement("line",{x1:t.width/2-140+5,y1:n,x2:t.width/2-140+5,y2:t.height-300,style:{strokeWidth:12},stroke:r}),o.a.createElement("line",{x1:t.width/2+140,y1:n,x2:t.width/2+140,y2:t.height-300,style:{strokeWidth:12},stroke:c}),o.a.createElement("line",{x1:t.width/2-140,y1:n,x2:t.width/2-140,y2:t.height-300,style:{strokeWidth:12},stroke:c}),o.a.createElement("line",{x1:0,y1:n,x2:t.width,y2:n,style:{strokeWidth:12},stroke:c})))},u=function(e){e.index,e.data;var t=e.windowHeight,a=Object(g.a)({scroll:!0,polyfill:h.a}),i=Object(n.a)(a,2),c=i[0],r=i[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{ref:c,style:{position:"absolute",width:"100%",height:"100%",overflow:"hidden"}},o.a.createElement("div",{className:"star comet"}),o.a.createElement("img",{style:{position:"absolute",top:"".concat(2.4*t,"px"),left:"".concat(r.width/2-20,"px"),bottom:0,zIndex:0,transform:"translate(0, ".concat(r.top/2,"px)"),transformOrigin:"50% 50%"},src:"./img/comun/fondos/satellite.png",width:"260px",height:"260px",alt:""}),o.a.createElement("img",{style:{position:"absolute",top:"".concat(5.4*t,"px"),left:"".concat(r.width/3-260,"px"),bottom:0,zIndex:0,transform:"translate(0, ".concat(r.top/2,"px)"),transformOrigin:"50% 50%"},src:"./img/comun/fondos/nube.png",width:"700px",height:"200px",alt:""}),o.a.createElement("img",{style:{position:"absolute",top:"".concat(4.4*t,"px"),left:"".concat(r.width/3-20,"px"),bottom:0,zIndex:0,transform:"translate(0, ".concat(r.top/2,"px)"),transformOrigin:"50% 50%"},src:"./img/comun/fondos/nube1.png",width:"600px",height:"124px",alt:""}),o.a.createElement("img",{style:{position:"absolute",top:"".concat(3.2*t,"px"),left:"".concat(r.width/3-160,"px"),bottom:0,zIndex:0,transform:"translate(0, ".concat(r.top/2,"px)"),transformOrigin:"50% 50%"},src:"./img/comun/fondos/nube4.png",width:"201px",height:"85px",alt:""}),o.a.createElement("div",{style:{position:"absolute",top:0,right:0,width:"".concat(r.width,"px"),height:"".concat(r.height,"px")}},o.a.createElement(x,{bounds:r,windowHeight:t}))))},y=[{index:0,texto:""},{index:1,texto:""},{index:2,texto:""},{index:3,texto:""},{index:4,texto:"L\xe1stima que esto no est\xe9 mejor ventilado"}];a(89),t.default=function(){var e=Object(i.useState)(0),t=Object(n.a)(e,2),a=t[0],l=t[1],d=Object(c.useWindowHeight)(),g=function(e){l(e)};return o.a.createElement("div",null,o.a.createElement("div",{className:"comic"},o.a.createElement("div",{className:"comic",style:{background:"linear-gradient(to bottom, #03061A 0%, RGBA(64, 81, 167, 1.00) 68%, #84c9d6 87%,#f4d0a6 100%)"}},o.a.createElement("div",{style:{maxWidth:"900px",margin:"0 auto",paddingTop:"20px",color:"white",position:"relative"}},o.a.createElement("div",{style:{color:"white",maxWidth:"600px",margin:"0 auto",padding:"0 1em 0 1em"}},o.a.createElement(r.a,{src:"./img/comun/titulo.png"}),o.a.createElement("h1",{className:"h1",style:{display:"none",textAlign:"center",lineHeight:"1.2em"}},"El ascensorista espacial"))),o.a.createElement(m,{data:y,index:a,windowHeight:d}),o.a.createElement("div",{className:"parallax",style:{position:"relative"}},o.a.createElement(u,{index:a,data:y,windowHeight:d}),o.a.createElement("div",{className:"bg",style:{marginTop:"-".concat(d,"px")}},y.map((function(e){return o.a.createElement(i.Fragment,{key:"n".concat(e.index)},o.a.createElement(s,{onEnter:g,data:e,windowHeight:d}))}))))),o.a.createElement("div",{className:"suelo",style:{background:"linear-gradient(to bottom, #A0A9A4 0%, #B0A89E 100%)",marginTop:"-220px",height:"290px"}})))}}}]);
//# sourceMappingURL=11.e81f7a13.chunk.js.map