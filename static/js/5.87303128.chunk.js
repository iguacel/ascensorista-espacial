(this["webpackJsonpascensorista-espacial"]=this["webpackJsonpascensorista-espacial"]||[]).push([[5],{71:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a(0),o=a.n(i),r=a(72),c=a(66),l=function(e){var t=e.onEnter,a=e.data,n=e.windowHeight;return o.a.createElement("div",{style:{position:"relative",width:"100%",height:"".concat(n,"px"),maxWidth:"900px",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement(c.a,{onPositionChange:function(){return a&&a.index&&a.index},onEnter:function(){return t(a.index)},topOffset:"50%"}),o.a.createElement("div",{style:{position:"relative",width:"100%",height:"".concat(n,"px"),maxWidth:"600px",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center",zIndex:"2"}},o.a.createElement("div",{style:{position:"absolute",top:0,right:0,width:"100%",height:"".concat(n,"px"),display:"flex",justifyContent:"center",alignItems:"center",zIndex:"2"}},o.a.createElement("img",{src:"./img/1/fg/".concat(a.index,".png"),alt:"",style:{width:"100%",top:"0",left:"0"}})),o.a.createElement("div",{style:{position:"absolute",top:0,right:0,width:"100%",height:"".concat(n,"px"),display:"flex",justifyContent:"center",alignItems:"center",zIndex:"2"}},o.a.createElement("p",{className:"floating",style:{zIndex:3,margin:"270px 60px 0 60px",background:"RGBA(255, 255, 255, 0.90)",padding:"1em",border:"1px solid var(--foreground-color)",textAlign:"center",maxWidth:"250px"}},a.texto))))},s=void 0!==window.safari;var d=function(e){var t=e.data,a=e.index,n=e.windowHeight;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{display:"none"}},o.a.createElement("img",{src:"./img/1/ascensor/0.png"}),o.a.createElement("img",{src:"./img/1/ascensor/1.png"}),o.a.createElement("img",{src:"./img/1/ascensor/2.png"}),o.a.createElement("img",{src:"./img/1/ascensor/3.png"}),o.a.createElement("img",{src:"./img/1/ascensor/4.png"})),o.a.createElement("div",{style:{height:"".concat(n,"px"),width:"100%",maxWidth:"600px",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center",position:s?"-webkit-sticky":"sticky",top:0,zIndex:2}},o.a.createElement("div",{className:"ascensor",style:{position:"relative"}},o.a.createElement("img",{src:"./img/1/ascensor/".concat(t[a].index,".png"),alt:"",style:{width:"100%"}}))))},m=a(16),p=a(68),g=a(81),h=a(28),x=a(22);var u=function(e){var t=e.bounds,a=e.index,n=e.data,i=a>0&&a<n[n.length-1].index,r=Object(h.b)({opacity:i?1:0,config:{mass:5,tension:500,friction:80}}).opacity;return o.a.createElement(h.a.div,{className:"altura",style:{position:"fixed",top:"90px",width:"100%",zIndex:4,opacity:r}},o.a.createElement("div",{style:{width:"200px",textAlign:"center",margin:"0 auto",color:"white",background:"var(--foreground-color)",padding:"1em",border:"1px solid white",display:"flex",fontSize:"0.9em"}},o.a.createElement("h6",{style:{opacity:.6}},"Altura: "),o.a.createElement("h6",{style:{fontWeight:400,fontFeatureSettings:'"tnum"',fontVariantNumeric:"tabular-nums",width:"190px",letterSpacing:"0.09em"}},Math.floor(Object(x.b)(t.height-Math.abs(t.top),0,t.height,0,35e4)).toLocaleString()," "),o.a.createElement("h6",{style:{opacity:.6}},"km.")))};var y=function(e){var t=e.bounds,a=e.windowHeight,n=Object(i.useMemo)((function(){return function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return new Array(a).fill().map((function(a,n){return o.a.createElement("circle",{className:"flicker",key:"star".concat(n),cx:Object(x.c)(0,e),cy:Object(x.c)(0,t),r:Object(x.c)(2,4),style:{animationDelay:"".concat(Object(x.c)(0,1200),"ms"),animationDuration:"".concat(Object(x.c)(1,20),"s")}})}))}(t.width,2e3,Math.floor(t.width/4))}),[t.width,a]),r=t.height/6.33,c="#D9DADA",l="#9F9F9E";return o.a.createElement("div",{className:"svg",style:{width:"100%",height:"100%"}},o.a.createElement("svg",{style:{overflow:"visible"},viewBox:"0 0 ".concat(t.width," ").concat(t.height)},n,o.a.createElement("linearGradient",{id:"OrangeRed",x1:0,y1:0,x2:0,y2:1,gradientTransform:"rotate(25)"},o.a.createElement("stop",{offset:"0%",stopColor:"#FCE38A",stopOpacity:1}),o.a.createElement("stop",{offset:"100%",stopColor:"#F38181",stopOpacity:1})),o.a.createElement("circle",{cx:t.width-160,cy:280,r:"20",fill:"RGBA(189, 193, 199, 1)"}),o.a.createElement("circle",{cx:t.width/2+200,cy:t.height-1e3,r:"60",fill:"url(#OrangeRed)",filter:"url(#blurSun)",style:{opacity:1}}),o.a.createElement("line",{x1:t.width/2+140+5,y1:r,x2:t.width/2+140+5,y2:t.height-300,style:{strokeWidth:12},stroke:l}),o.a.createElement("line",{x1:t.width/2-140+5,y1:r,x2:t.width/2-140+5,y2:t.height-300,style:{strokeWidth:12},stroke:l}),o.a.createElement("line",{x1:t.width/2+140,y1:r,x2:t.width/2+140,y2:t.height-300,style:{strokeWidth:12},stroke:c}),o.a.createElement("line",{x1:t.width/2-140,y1:r,x2:t.width/2-140,y2:t.height-300,style:{strokeWidth:12},stroke:c}),o.a.createElement("line",{x1:0,y1:r,x2:t.width,y2:r,style:{strokeWidth:12},stroke:c})))},f=function(e){var t=e.index,a=e.data,i=e.windowHeight,r=Object(p.a)({scroll:!0,polyfill:g.a}),c=Object(n.a)(r,2),l=c[0],s=c[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{ref:l,style:{position:"absolute",width:"100%",height:"100%",overflow:"hidden"}},o.a.createElement("div",{className:"star comet"}),o.a.createElement("img",{style:Object(m.a)({position:"absolute",top:"".concat(1.3*i,"px"),left:"".concat(s.width/2-350,"px"),zIndex:0,transform:"translate(0, ".concat(s.top/2,"px)"),transformOrigin:"50% 50%"},"zIndex",2),src:"./img/1/fondos/dog.png",width:"280px",height:"280px",alt:""}),o.a.createElement("img",{style:Object(m.a)({position:"absolute",top:"".concat(2.4*i,"px"),left:"".concat(s.width/2-20,"px"),bottom:0,zIndex:0,transform:"translate(0, ".concat(s.top/2,"px)"),transformOrigin:"50% 50%"},"zIndex",0),src:"./img/1/fondos/satellite.png",width:"330px",height:"330px",alt:""}),o.a.createElement("img",{style:Object(m.a)({position:"absolute",top:"".concat(3.4*i,"px"),left:"".concat(s.width/3-20,"px"),bottom:0,zIndex:0,transform:"translate(0, ".concat(s.top/2,"px)"),transformOrigin:"50% 50%"},"zIndex",0),src:"./img/1/fondos/nube.png",width:"700px",height:"200px",alt:""}),o.a.createElement("img",{style:Object(m.a)({position:"absolute",top:"".concat(4.4*i,"px"),left:"".concat(s.width/3-20,"px"),bottom:0,zIndex:0,transform:"translate(0, ".concat(s.top/2,"px)"),transformOrigin:"50% 50%"},"zIndex",0),src:"./img/1/fondos/nube1.png",width:"600px",height:"124px",alt:""}),o.a.createElement("img",{style:Object(m.a)({position:"absolute",top:"".concat(5.2*i,"px"),left:"".concat(s.width/3-160,"px"),bottom:0,zIndex:0,transform:"translate(0, ".concat(s.top/2,"px)"),transformOrigin:"50% 50%"},"zIndex",0),src:"./img/1/fondos/nube4.png",width:"201px",height:"85px",alt:""}),o.a.createElement(u,{index:t,bounds:s,data:a}),o.a.createElement("div",{style:{position:"absolute",top:0,right:0,width:"".concat(s.width,"px"),height:"".concat(s.height,"px")}},o.a.createElement(y,{bounds:s,windowHeight:i}))))},E=[{index:0,texto:"En mi ascensor sube toda clase de gente"},{index:1,texto:"Los que van de vacaciones"},{index:2,texto:"Los que van a celebrar una despedida de soltero"},{index:3,texto:"Los que viajan por trabajo"},{index:4,texto:"y sobre todo los nost\xe1lgicos"}];a(71),t.default=function(){var e=Object(i.useState)(0),t=Object(n.a)(e,2),a=t[0],c=t[1],s=Object(r.useWindowHeight)(),m=function(e){c(e)};return o.a.createElement("div",null,o.a.createElement("div",{className:"comic"},o.a.createElement("div",{className:"comic",style:{background:"linear-gradient(to bottom, #03061A 0%, RGBA(64, 81, 167, 1.00) 68%, #84c9d6 87%,#f4d0a6 100%)"}},o.a.createElement("div",{style:{maxWidth:"900px",margin:"0 auto",paddingTop:"80px",color:"white",position:"relative"}},o.a.createElement("div",{style:{color:"white",maxWidth:"450px",margin:"0 auto",padding:"0 1em 0 1em"}},o.a.createElement("h1",{className:"h2",style:{textAlign:"center",lineHeight:"1.2em"}},"El ascensorista espacial"),o.a.createElement("p",null,"Los viajes espaciales llegaron a C\xe1diz el 16 de julio de 2049."),o.a.createElement("p",{style:{marginTop:"-0.5em"}},"Ese d\xeda me convert\xed en el primer ascensorista espacial de la ciudad."))),o.a.createElement(d,{data:E,index:a,windowHeight:s}),o.a.createElement("div",{className:"parallax",style:{position:"relative"}},o.a.createElement(f,{index:a,data:E,windowHeight:s}),o.a.createElement("div",{className:"bg",style:{marginTop:"-".concat(s,"px")}},E.map((function(e){return o.a.createElement(i.Fragment,{key:"n".concat(e.index)},o.a.createElement(l,{onEnter:m,data:e,windowHeight:s}))}))))),o.a.createElement("div",{className:"suelo",style:{background:"linear-gradient(to bottom, #A0A9A4 0%, #B0A89E 100%)",marginTop:"-220px",height:"290px"}})))}}}]);
//# sourceMappingURL=5.87303128.chunk.js.map