(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[321],{534:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apps/angle",function(){return r(7355)}])},9291:function(e,n,r){"use strict";r.d(n,{A:function(){return d}});var t=r(5893),a=r(8527),l=r(949),i=r(5113),o=r(8485),s=r(1664),c=function(e){var n=e.children,r=e.href;return(0,t.jsx)(s.default,{href:r,passHref:!0,children:(0,t.jsx)(a.rU,{children:n})})};var u=function(e){e=null!==e?e:function(e){throw e}(new TypeError("Cannot destructure undefined"));var n=(0,l.If)(),r=n.colorMode,s=n.toggleColorMode;return(0,t.jsxs)(a.kC,{as:"header",p:"2",h:"14",children:[(0,t.jsx)(a.xu,{children:(0,t.jsx)(a.xv,{fontSize:"2xl",children:(0,t.jsx)(c,{href:"/",children:"rizzzse apps"})})}),(0,t.jsx)(a.LZ,{}),(0,t.jsx)(a.xu,{children:(0,t.jsx)(i.hU,{"aria-label":"dark mode",onClick:s,icon:{light:(0,t.jsx)(o.kL,{}),dark:(0,t.jsx)(o.NW,{})}[r]})})]})},d=function(e){var n=e.children;return(0,t.jsxs)(a.kC,{flexFlow:"column",p:"8",minH:"100vh",children:[(0,t.jsx)(u,{}),(0,t.jsx)(a.iz,{}),(0,t.jsx)(a.W2,{as:"main",maxW:"container.xl",children:n})]})}},7355:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return ge}});var t=r(5893),a=r(7375),l=r(2846),i=r(5031),o=r(6450),s=r(7294),c=r(894);function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function d(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}var p=["id","isRequired","isInvalid","isDisabled","isReadOnly"],f=["getRootProps","htmlProps"],m=(0,o.kr)({strict:!1,name:"FormControlContext"}),v=m[0],h=m[1];var g=(0,l.Gp)((function(e,n){var r=(0,l.jC)("Form",e),t=function(e){var n=e.id,r=e.isRequired,t=e.isInvalid,l=e.isDisabled,c=e.isReadOnly,f=d(e,p),m=(0,a.Me)(),v=n||"field-"+m,h=v+"-label",g=v+"-feedback",y=v+"-helptext",b=s.useState(!1),x=b[0],N=b[1],E=s.useState(!1),I=E[0],_=E[1],j=(0,a.kt)(),k=j[0],O=j[1],R=s.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),u({id:y},e,{ref:(0,o.lq)(n,(function(e){e&&_(!0)}))})}),[y]),w=s.useCallback((function(e,n){var r,a;return void 0===e&&(e={}),void 0===n&&(n=null),u({},e,{ref:n,"data-focus":(0,i.PB)(k),"data-disabled":(0,i.PB)(l),"data-invalid":(0,i.PB)(t),"data-readonly":(0,i.PB)(c),id:null!=(r=e.id)?r:h,htmlFor:null!=(a=e.htmlFor)?a:v})}),[v,l,k,t,c,h]),C=s.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),u({id:g},e,{ref:(0,o.lq)(n,(function(e){e&&N(!0)})),"aria-live":"polite"})}),[g]),P=s.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),u({},e,f,{ref:n,role:"group"})}),[f]),T=s.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),u({},e,{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!t,isReadOnly:!!c,isDisabled:!!l,isFocused:!!k,onFocus:O.on,onBlur:O.off,hasFeedbackText:x,setHasFeedbackText:N,hasHelpText:I,setHasHelpText:_,id:v,labelId:h,feedbackId:g,helpTextId:y,htmlProps:f,getHelpTextProps:R,getErrorMessageProps:C,getRootProps:P,getLabelProps:w,getRequiredIndicatorProps:T}}((0,l.Lr)(e)),c=t.getRootProps;t.htmlProps;var m=d(t,f),h=(0,i.cx)("chakra-form-control",e.className),g=s.useMemo((function(){return m}),[m]);return s.createElement(v,{value:g},s.createElement(l.Fo,{value:r},s.createElement(l.m$.div,u({},c({},n),{className:h,__css:r.container}))))}));i.Ts&&(g.displayName="FormControl");var y=(0,l.Gp)((function(e,n){var r=h(),t=(0,l.yK)(),a=(0,i.cx)("chakra-form__helper-text",e.className);return s.createElement(l.m$.div,u({},null==r?void 0:r.getHelpTextProps(e,n),{__css:t.helperText,className:a}))}));i.Ts&&(y.displayName="FormHelperText");var b=["isDisabled","isInvalid","isReadOnly","isRequired"],x=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function N(e){var n=function(e){var n,r,t,a=h(),l=e.id,o=e.disabled,s=e.readOnly,c=e.required,p=e.isRequired,f=e.isInvalid,m=e.isReadOnly,v=e.isDisabled,g=e.onFocus,y=e.onBlur,b=d(e,x),N=e["aria-describedby"]?[e["aria-describedby"]]:[];null!=a&&a.hasFeedbackText&&null!=a&&a.isInvalid&&N.push(a.feedbackId);null!=a&&a.hasHelpText&&N.push(a.helpTextId);return u({},b,{"aria-describedby":N.join(" ")||void 0,id:null!=l?l:null==a?void 0:a.id,isDisabled:null!=(n=null!=o?o:v)?n:null==a?void 0:a.isDisabled,isReadOnly:null!=(r=null!=s?s:m)?r:null==a?void 0:a.isReadOnly,isRequired:null!=(t=null!=c?c:p)?t:null==a?void 0:a.isRequired,isInvalid:null!=f?f:null==a?void 0:a.isInvalid,onFocus:(0,i.v0)(null==a?void 0:a.onFocus,g),onBlur:(0,i.v0)(null==a?void 0:a.onBlur,y)})}(e),r=n.isDisabled,t=n.isInvalid,a=n.isReadOnly,l=n.isRequired;return u({},d(n,b),{disabled:r,readOnly:a,required:l,"aria-invalid":(0,i.Qm)(t),"aria-required":(0,i.Qm)(l),"aria-readonly":(0,i.Qm)(a)})}var E=(0,l.Gp)((function(e,n){var r=(0,l.jC)("FormError",e),t=(0,l.Lr)(e),a=h();return null!=a&&a.isInvalid?s.createElement(l.Fo,{value:r},s.createElement(l.m$.div,u({},null==a?void 0:a.getErrorMessageProps(t,n),{className:(0,i.cx)("chakra-form__error-message",e.className),__css:u({display:"flex",alignItems:"center"},r.text)}))):null}));i.Ts&&(E.displayName="FormErrorMessage");var I=(0,l.Gp)((function(e,n){var r=(0,l.yK)(),t=h();if(null==t||!t.isInvalid)return null;var a=(0,i.cx)("chakra-form__error-icon",e.className);return s.createElement(c.ZP,u({ref:n,"aria-hidden":!0},e,{__css:r.icon,className:a}),s.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}));i.Ts&&(I.displayName="FormErrorIcon");var _=["className","children","requiredIndicator"],j=(0,l.Gp)((function(e,n){var r,t=(0,l.mq)("FormLabel",e),a=(0,l.Lr)(e);a.className;var o=a.children,c=a.requiredIndicator,p=void 0===c?s.createElement(k,null):c,f=d(a,_),m=h(),v=null!=(r=null==m?void 0:m.getLabelProps(f,n))?r:u({ref:n},f);return s.createElement(l.m$.label,u({},v,{className:(0,i.cx)("chakra-form__label",a.className),__css:u({display:"block",textAlign:"start"},t)}),o,null!=m&&m.isRequired?p:null)}));i.Ts&&(j.displayName="FormLabel");var k=(0,l.Gp)((function(e,n){var r=h(),t=(0,l.yK)();if(null==r||!r.isRequired)return null;var a=(0,i.cx)("chakra-form__required-indicator",e.className);return s.createElement(l.m$.span,u({},null==r?void 0:r.getRequiredIndicatorProps(e,n),{__css:t.requiredIndicator,className:a}))}));function O(){return(O=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}i.Ts&&(k.displayName="RequiredIndicator");var R=(0,l.Gp)((function(e,n){var r=(0,l.jC)("Input",e),t=N((0,l.Lr)(e)),a=(0,i.cx)("chakra-input",e.className);return s.createElement(l.m$.input,O({},t,{__css:r.field,ref:n,className:a}))}));function w(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}i.Ts&&(R.displayName="Input"),R.id="Input";var C=["placement"],P={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},T=(0,l.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),S=(0,l.Gp)((function(e,n){var r,t=e.placement,a=void 0===t?"left":t,i=w(e,C),o=null!=(r=P[a])?r:{},c=(0,l.yK)();return s.createElement(T,O({ref:n},i,{__css:O({},c.addon,o)}))}));i.Ts&&(S.displayName="InputAddon");var F=(0,l.Gp)((function(e,n){return s.createElement(S,O({ref:n,placement:"left"},e,{className:(0,i.cx)("chakra-input__left-addon",e.className)}))}));i.Ts&&(F.displayName="InputLeftAddon"),F.id="InputLeftAddon";var M=(0,l.Gp)((function(e,n){return s.createElement(S,O({ref:n,placement:"right"},e,{className:(0,i.cx)("chakra-input__right-addon",e.className)}))}));i.Ts&&(M.displayName="InputRightAddon"),M.id="InputRightAddon";var q=["children","className"],L=(0,l.Gp)((function(e,n){var r=(0,l.jC)("Input",e),t=(0,l.Lr)(e),a=t.children,c=t.className,u=w(t,q),d=(0,i.cx)("chakra-input__group",c),p={},f=(0,o.WR)(a),m=r.field;f.forEach((function(e){if(r){var n,t;if(m&&"InputLeftElement"===e.type.id)p.paddingStart=null!=(n=m.height)?n:m.h;if(m&&"InputRightElement"===e.type.id)p.paddingEnd=null!=(t=m.height)?t:m.h;"InputRightAddon"===e.type.id&&(p.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(p.borderStartRadius=0)}}));var v=f.map((function(n){var r,t,a=(0,i.YU)({size:(null==(r=n.props)?void 0:r.size)||e.size,variant:(null==(t=n.props)?void 0:t.variant)||e.variant});return"Input"!==n.type.id?s.cloneElement(n,a):s.cloneElement(n,Object.assign(a,p,n.props))}));return s.createElement(l.m$.div,O({className:d,ref:n,__css:{width:"100%",display:"flex",position:"relative"}},u),s.createElement(l.Fo,{value:r},v))}));i.Ts&&(L.displayName="InputGroup");var G=["placement"],H=["className"],z=["className"],A=(0,l.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),D=(0,l.Gp)((function(e,n){var r,t,a,i=e.placement,o=void 0===i?"left":i,c=w(e,G),u=(0,l.yK)().field,d=((a={})["left"===o?"insetStart":"insetEnd"]="0",a.width=null!=(r=null==u?void 0:u.height)?r:null==u?void 0:u.h,a.height=null!=(t=null==u?void 0:u.height)?t:null==u?void 0:u.h,a.fontSize=null==u?void 0:u.fontSize,a);return s.createElement(A,O({ref:n,__css:d},c))}));D.id="InputElement",i.Ts&&(D.displayName="InputElement");var $=(0,l.Gp)((function(e,n){var r=e.className,t=w(e,H),a=(0,i.cx)("chakra-input__left-element",r);return s.createElement(D,O({ref:n,placement:"left",className:a},t))}));$.id="InputLeftElement",i.Ts&&($.displayName="InputLeftElement");var B=(0,l.Gp)((function(e,n){var r=e.className,t=w(e,z),a=(0,i.cx)("chakra-input__right-element",r);return s.createElement(D,O({ref:n,placement:"right",className:a},t))}));B.id="InputRightElement",i.Ts&&(B.displayName="InputRightElement");var W=r(4244),U=r(8554),K=r.n(U);function Z(){return(Z=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function Q(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}var X=["children","placeholder","className"],Y=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize","isFullWidth"],V=["children"],J=(0,l.Gp)((function(e,n){var r=e.children,t=e.placeholder,a=e.className,o=Q(e,X);return s.createElement(l.m$.select,Z({},o,{ref:n,className:(0,i.cx)("chakra-select",a)}),t&&s.createElement("option",{value:""},t),r)}));i.Ts&&(J.displayName="SelectField");var ee=(0,l.Gp)((function(e,n){var r=(0,l.jC)("Select",e),t=(0,l.Lr)(e),a=t.rootProps,o=t.placeholder,c=t.icon,u=t.color,d=t.height,p=t.h,f=t.minH,m=t.minHeight,v=t.iconColor,h=t.iconSize;t.isFullWidth;var g=Q(t,Y),y=(0,i.Vl)(g,W.oE),b=y[0],x=N(y[1]),E={width:"100%",height:"fit-content",position:"relative",color:u},I=K()({paddingEnd:"2rem"},r.field,{_focus:{zIndex:"unset"}});return s.createElement(l.m$.div,Z({className:"chakra-select__wrapper",__css:E},b,a),s.createElement(J,Z({ref:n,height:null!=p?p:d,minH:null!=f?f:m,placeholder:o},x,{__css:I}),e.children),s.createElement(te,Z({"data-disabled":(0,i.PB)(x.disabled)},(v||u)&&{color:v||u},{__css:r.icon},h&&{fontSize:h}),c))}));i.Ts&&(ee.displayName="Select");var ne=function(e){return s.createElement("svg",Z({viewBox:"0 0 24 24"},e),s.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))},re=(0,l.m$)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),te=function(e){var n=e.children,r=void 0===n?s.createElement(ne,null):n,t=Q(e,V),a=s.cloneElement(r,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return s.createElement(re,Z({},t,{className:"chakra-select__icon-wrapper"}),s.isValidElement(r)?a:null)};i.Ts&&(te.displayName="SelectIcon");var ae=r(949),le=r(8527),ie=r(9008),oe=r(9291);function se(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function ce(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var ue=function(e){var n=e.onDrag,r=e.children,a=ce(e,["onDrag","children"]),l=(0,s.useRef)(null),i=(0,s.useRef)(NaN),o=(0,s.useMemo)((function(){return{onMouseDown:function(e){e.stopPropagation(),i.current=e.timeStamp,l.current&&n(e.nativeEvent,l.current)},onMouseMove:function(e){Number.isNaN(i.current)||(e.stopPropagation(),e.timeStamp-i.current>16&&(i.current=e.timeStamp,l.current&&n(e,l.current)))},onMouseUp:function(e){Number.isNaN(i.current)||(e.stopPropagation(),i.current=NaN,l.current&&n(e,l.current))}}}),[n]);return(0,s.useEffect)((function(){var e="mousemove",n="mouseup";return window.addEventListener(e,o.onMouseMove),window.addEventListener(n,o.onMouseUp),function(){window.removeEventListener(e,o.onMouseMove),window.removeEventListener(n,o.onMouseUp)}}),[o]),(0,t.jsx)(le.xu,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){se(e,n,r[n])}))}return e}({ref:l,cursor:"pointer"},a,{onMouseDown:o.onMouseDown,children:r}))},de=2*Math.PI,pe={rad:1,deg:de/360,turn:de},fe=Object.keys(pe),me=function(e){var n=e.angle,r=e.onChange,a=e.mainColor,l=e.subColor,i=(0,s.useCallback)((function(e,n){var t=function(e,n){var r=n.getBoundingClientRect();return Math.atan2(e.clientY-r.top-r.height/2,e.clientX-r.left-r.width/2)}(e,n);r(t+de/4)}),[r]),o="conic-gradient(".concat(a," 0 ").concat(n,"rad,").concat(l," ").concat(n,"rad)");return(0,t.jsx)(ue,{style:{background:o},borderRadius:"full",onDrag:i})},ve=function(e,n){return(e/pe[n]).toFixed(8).replace(/\.?0+$/,"")},he=function(e,n){var r=e.unit,t=e.angle;switch(n.type){case"UNIT":return{unit:n.payload,angle:t,isInvalid:!1,string:ve(t,n.payload)};case"ANGLE":return{unit:r,angle:n.payload,isInvalid:!1,string:ve(n.payload,r)};case"STRING":var a=Number.isNaN(parseFloat(n.payload));return{unit:r,angle:a?t:parseFloat(n.payload)*pe[r],isInvalid:a,string:n.payload}}};function ge(){var e=(0,s.useReducer)(he,{unit:"rad",angle:1,isInvalid:!1,string:"1"}),n=e[0],r=e[1],a=(0,s.useCallback)((function(e){r({type:"STRING",payload:e.target.value})}),[]),l=(0,s.useCallback)((function(e){r({type:"UNIT",payload:e.target.value})}),[]),i=(0,s.useCallback)((function(e){r({type:"ANGLE",payload:e})}),[]),o=(0,ae.ff)("#aaa","#444");return(0,t.jsxs)(oe.A,{children:[(0,t.jsx)(ie.default,{children:(0,t.jsx)("title",{children:"angle"})}),(0,t.jsxs)(le.Kq,{align:"center",justify:"center",direction:["column","row"],spacing:[8,16],my:"16",children:[(0,t.jsx)(le.oM,{ratio:1,flex:"1",minW:"48",minH:"48",maxW:"80",maxH:"80",children:(0,t.jsx)(me,{angle:n.angle,onChange:i,mainColor:"#df6c20",subColor:o})}),(0,t.jsxs)(L,{minW:"10em",maxW:"16em",variant:"flushed",children:[(0,t.jsx)(R,{value:n.string,onChange:a,pr:"5em",isInvalid:n.isInvalid}),(0,t.jsx)(B,{w:"5em",pl:"2",children:(0,t.jsx)(ee,{variant:"unstyled",value:n.unit,onChange:l,children:fe.map((function(e){return(0,t.jsx)("option",{children:e},e)}))})})]})]})]})}}},function(e){e.O(0,[969,774,888,179],(function(){return n=534,e(e.s=n);var n}));var n=e.O();_N_E=n}]);