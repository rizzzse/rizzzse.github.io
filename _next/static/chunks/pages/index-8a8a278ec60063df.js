(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(r,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2259)}])},9291:function(r,e,n){"use strict";n.d(e,{A:function(){return u}});var a=n(5893),t=n(8527),i=n(949),l=n(5113),o=n(8485),c=n(1664),s=function(r){var e=r.children,n=r.href;return(0,a.jsx)(c.default,{href:n,passHref:!0,children:(0,a.jsx)(t.rU,{children:e})})};var d=function(r){r=null!==r?r:function(r){throw r}(new TypeError("Cannot destructure undefined"));var e=(0,i.If)(),n=e.colorMode,c=e.toggleColorMode;return(0,a.jsxs)(t.kC,{as:"header",p:"2",h:"14",children:[(0,a.jsx)(t.xu,{children:(0,a.jsx)(t.xv,{fontSize:"2xl",children:(0,a.jsx)(s,{href:"/",children:"rizzzse apps"})})}),(0,a.jsx)(t.LZ,{}),(0,a.jsx)(t.xu,{children:(0,a.jsx)(l.hU,{"aria-label":"dark mode",onClick:c,icon:{light:(0,a.jsx)(o.kL,{}),dark:(0,a.jsx)(o.NW,{})}[n]})})]})},u=function(r){var e=r.children;return(0,a.jsxs)(t.kC,{flexFlow:"column",p:"8",minH:"100vh",children:[(0,a.jsx)(d,{}),(0,a.jsx)(t.iz,{}),(0,a.jsx)(t.W2,{as:"main",maxW:"container.xl",children:e})]})}},2259:function(r,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return F},default:function(){return S}});var a=n(5893),t=n(2846),i=n(5031),l=n(7294),o=n(7375);function c(){return(c=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])}return r}).apply(this,arguments)}function s(r,e){if(null==r)return{};var n,a,t={},i=Object.keys(r);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(t[n]=r[n]);return t}function d(r){var e=r.loading,n=r.src,a=r.srcSet,t=r.onLoad,i=r.onError,c=r.crossOrigin,s=r.sizes,d=r.ignoreFallback,u=(0,l.useState)("pending"),f=u[0],m=u[1];(0,l.useEffect)((function(){m(n?"loading":"pending")}),[n]);var h=(0,l.useRef)(),g=(0,l.useCallback)((function(){if(n){v();var r=new Image;r.src=n,c&&(r.crossOrigin=c),a&&(r.srcset=a),s&&(r.sizes=s),e&&(r.loading=e),r.onload=function(r){v(),m("loaded"),null==t||t(r)},r.onerror=function(r){v(),m("failed"),null==i||i(r)},h.current=r}}),[n,c,a,s,t,i,e]),v=function(){h.current&&(h.current.onload=null,h.current.onerror=null,h.current=null)};return(0,o.Gw)((function(){if(!d)return"loading"===f&&g(),function(){v()}}),[f,g,d]),d?"loaded":f}var u=["htmlWidth","htmlHeight","alt"],f=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],m=l.forwardRef((function(r,e){var n=r.htmlWidth,a=r.htmlHeight,t=r.alt,i=s(r,u);return l.createElement("img",c({width:n,height:a,ref:e,alt:t},i))})),h=(0,t.Gp)((function(r,e){var n=r.fallbackSrc,a=r.fallback,o=r.src,u=r.srcSet,h=r.align,g=r.fit,v=r.loading,b=r.ignoreFallback,p=r.crossOrigin,x=s(r,f),_=null!=v||b||void 0===n&&void 0===a,k=d(c({},r,{ignoreFallback:_})),E=c({ref:e,objectFit:g,objectPosition:h},_?x:(0,i.CE)(x,["onError","onLoad"]));return"loaded"!==k?a||l.createElement(t.m$.img,c({as:m,className:"chakra-image__placeholder",src:n},E)):l.createElement(t.m$.img,c({as:m,src:o,srcSet:u,crossOrigin:p,loading:v,className:"chakra-image"},E))}));i.Ts&&(h.displayName="Image");var g=n(6450);function v(r,e){if(null==r)return{};var n,a,t={},i=Object.keys(r);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(t[n]=r[n]);return t}function b(){return(b=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])}return r}).apply(this,arguments)}var p=["name","getInitials"],x=["src","name","showBorder","borderRadius","onError","getInitials","icon","iconLabel","loading","children","borderColor","ignoreFallback"],_=(0,t.Gp)((function(r,e){var n=b({position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",insetEnd:"0",bottom:"0"},(0,t.yK)().badge);return l.createElement(t.m$.div,b({ref:e},r,{className:(0,i.cx)("chakra-avatar__badge",r.className),__css:n}))}));function k(r){var e=r.split(" "),n=e[0],a=e[1];return n&&a?""+n.charAt(0)+a.charAt(0):n.charAt(0)}i.Ts&&(_.displayName="AvatarBadge");var E=function(r){var e=r.name,n=r.getInitials,a=v(r,p),i=(0,t.yK)();return l.createElement(t.m$.div,b({role:"img","aria-label":e},a,{__css:i.label}),e?null==n?void 0:n(e):null)},j=function(r){return l.createElement(t.m$.svg,b({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},r),l.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),l.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"}))},C={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},N=(0,t.Gp)((function(r,e){var n=(0,t.jC)("Avatar",r),a=(0,t.Lr)(r),o=a.src,c=a.name,s=a.showBorder,d=a.borderRadius,u=void 0===d?"full":d,f=a.onError,m=a.getInitials,h=void 0===m?k:m,g=a.icon,p=void 0===g?l.createElement(j,null):g,_=a.iconLabel,E=void 0===_?" avatar":_,N=a.loading,y=a.children,z=a.borderColor,O=a.ignoreFallback,I=v(a,x),L=b({borderRadius:u,borderWidth:s?"2px":void 0},C,n.container);return z&&(L.borderColor=z),l.createElement(t.m$.span,b({ref:e},I,{className:(0,i.cx)("chakra-avatar",r.className),__css:L}),l.createElement(t.Fo,{value:n},l.createElement(w,{src:o,loading:N,onError:f,getInitials:h,name:c,borderRadius:u,icon:p,iconLabel:E,ignoreFallback:O}),y))}));i.Ts&&(N.displayName="Avatar");var w=function(r){var e=r.src,n=r.onError,a=r.getInitials,i=r.name,o=r.borderRadius,c=r.loading,s=r.iconLabel,u=r.icon,f=void 0===u?l.createElement(j,null):u,m=d({src:e,onError:n,ignoreFallback:r.ignoreFallback});return!e||!("loaded"===m)?i?l.createElement(E,{className:"chakra-avatar__initials",getInitials:a,name:i}):l.cloneElement(f,{role:"img","aria-label":s}):l.createElement(t.m$.img,{src:e,alt:i,className:"chakra-avatar__img",loading:c,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:o}})};i.Ts&&(w.displayName="AvatarImage");var y=["children","borderColor","max","spacing","borderRadius"],z=(0,t.Gp)((function(r,e){var n=(0,t.jC)("Avatar",r),a=(0,t.Lr)(r),o=a.children,c=a.borderColor,s=a.max,d=a.spacing,u=void 0===d?"-0.75rem":d,f=a.borderRadius,m=void 0===f?"full":f,h=v(a,y),p=(0,g.WR)(o),x=s?p.slice(0,s):p,_=null!=s&&p.length-s,k=x.reverse().map((function(e,n){var a,t={marginEnd:0===n?0:u,size:r.size,borderColor:null!=(a=e.props.borderColor)?a:c,showBorder:!0};return l.cloneElement(e,(0,i.YU)(t))})),E=b({borderRadius:m,marginStart:u},C,n.excessLabel);return l.createElement(t.m$.div,b({ref:e,role:"group",__css:{display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row-reverse"}},h,{className:(0,i.cx)("chakra-avatar__group",r.className)}),_>0&&l.createElement(t.m$.span,{className:"chakra-avatar__excess",__css:E},"+"+_),k)}));i.Ts&&(z.displayName="AvatarGroup");var O=n(8527),I=n(9008),L=n(9291),F=!0;function S(r){var e=r.icon;return(0,a.jsxs)(L.A,{children:[(0,a.jsx)(I.default,{children:(0,a.jsx)("title",{children:"rizzzse"})}),(0,a.jsxs)(O.M5,{my:"16",children:[(0,a.jsx)(N,{size:"2xl",name:"rizzzse",src:e,showBorder:!0}),(0,a.jsx)(O.xv,{fontSize:"4xl",m:"8",children:"rizzzse"})]})]})}}},function(r){r.O(0,[969,774,888,179],(function(){return e=5301,r(r.s=e);var e}));var e=r.O();_N_E=e}]);