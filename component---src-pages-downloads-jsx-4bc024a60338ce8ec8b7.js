(self.webpackChunkgatsby_starter_advanced=self.webpackChunkgatsby_starter_advanced||[]).push([[638],{7682:function(e,t,r){"use strict";var n=r(7462),a=r(3366),l=r(4572),s=r(7294),c=r(5900),i=r.n(c),o=r(3033),m=r(8663),u=["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:p(p({},m.Z.defaultProps),{},{unmountOnExit:!0})};function b(e){var t=e.className,r=e.closeClassName,l=e.closeAriaLabel,c=e.cssModule,d=e.tag,f=e.color,b=e.isOpen,E=e.toggle,h=e.children,g=e.transition,v=e.fade,w=e.innerRef,y=(0,a.Z)(e,u),O=(0,o.mx)(i()(t,"alert","alert-"+f,{"alert-dismissible":E}),c),x=(0,o.mx)(i()("close",r),c),P=p(p(p({},m.Z.defaultProps),g),{},{baseClass:v?g.baseClass:"",timeout:v?g.timeout:0});return s.createElement(m.Z,(0,n.Z)({},y,P,{tag:d,className:O,in:b,role:"alert",innerRef:w}),E?s.createElement("button",{type:"button",className:x,"aria-label":l,onClick:E},s.createElement("span",{"aria-hidden":"true"},"×")):null,h)}b.defaultProps=f,t.Z=b},8663:function(e,t,r){"use strict";var n=r(7462),a=r(3366),l=r(4572),s=r(7294),c=r(5900),i=r.n(c),o=r(5999),m=r(3033),u=["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=p(p({},o.Transition.defaultProps),{},{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:m.wF.Fade,appear:!0,enter:!0,exit:!0,in:!0});function b(e){var t=e.tag,r=e.baseClass,l=e.baseClassActive,c=e.className,d=e.cssModule,p=e.children,f=e.innerRef,b=(0,a.Z)(e,u),E=(0,m.ei)(b,m.rb),h=(0,m.CE)(b,m.rb);return s.createElement(o.Transition,E,(function(e){var a="entered"===e,o=(0,m.mx)(i()(c,r,a&&l),d);return s.createElement(t,(0,n.Z)({className:o},h,{ref:f}),p)}))}b.defaultProps=f,t.Z=b},6995:function(e,t,r){"use strict";var n=r(7462),a=r(3366),l=r(7326),s=r(1721),c=r(7294),i=r(5900),o=r.n(i),m=r(3033),u=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],d=function(e){function t(t){var r;return(r=e.call(this,t)||this).getRef=r.getRef.bind((0,l.Z)(r)),r.focus=r.focus.bind((0,l.Z)(r)),r}(0,s.Z)(t,e);var r=t.prototype;return r.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},r.focus=function(){this.ref&&this.ref.focus()},r.render=function(){var e=this.props,t=e.className,r=e.cssModule,l=e.type,s=e.bsSize,i=e.valid,d=e.invalid,p=e.tag,f=e.addon,b=e.plaintext,E=e.innerRef,h=(0,a.Z)(e,u),g=["radio","checkbox"].indexOf(l)>-1,v=new RegExp("\\D","g"),w=p||("select"===l||"textarea"===l?l:"input"),y="form-control";b?(y+="-plaintext",w=p||"input"):"file"===l?y+="-file":"range"===l?y+="-range":g&&(y=f?null:"form-check-input"),h.size&&v.test(h.size)&&((0,m.O4)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=h.size,delete h.size);var O=(0,m.mx)(o()(t,d&&"is-invalid",i&&"is-valid",!!s&&"form-control-"+s,y),r);return("input"===w||p&&"function"==typeof p)&&(h.type=l),h.children&&!b&&"select"!==l&&"string"==typeof w&&"select"!==w&&((0,m.O4)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.createElement(w,(0,n.Z)({},h,{ref:E,className:O,"aria-invalid":d}))},t}(c.Component);d.defaultProps={type:"text"},t.Z=d},8594:function(e,t,r){var n,a,l;l=function(){function e(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var r=e.shift();e[0]=r+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var a=e[n];if("string"!=typeof a)throw new TypeError("Url must be a string. Received "+a);""!==a&&(n>0&&(a=a.replace(/^[\/]+/,"")),a=n<e.length-1?a.replace(/[\/]+$/,""):a.replace(/[\/]+$/,"/"),t.push(a))}var l=t.join("/"),s=(l=l.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return l=s.shift()+(s.length>0?"?":"")+s.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=l():void 0===(a="function"==typeof(n=l)?n.call(t,r,t,e):n)||(e.exports=a)},1711:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7294),a=r(8594),l=r.n(a),s=r(1082);const c=()=>(0,s.useStaticQuery)("1865044719").site.siteMetadata;var i=e=>{let{title:t,description:r,pathname:a,children:s}=e;const{title:i,description:o,siteUrl:m,image:u,twitterUsername:d}=c(),p={title:t||i,description:r||o,url:l()(m,a||""),image:l()(m,u),twitterUsername:d};return n.createElement(n.Fragment,null,n.createElement("title",null,p.title),n.createElement("meta",{name:"description",content:p.description}),n.createElement("meta",{property:"og:url",content:p.url}),n.createElement("meta",{property:"og:title",content:p.title}),n.createElement("meta",{property:"og:description",content:p.description}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:creator",content:p.twitterUsername}),n.createElement("meta",{name:"twitter:title",content:p.title}),n.createElement("meta",{name:"twitter:description",content:p.description}),n.createElement("meta",{name:"twitter:image",content:p.image}),n.createElement("meta",{name:"twitter.url",content:p.url}),s)}},7491:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return N},default:function(){return P}});var n=r(7294),a=r(7784),l=r(6667),s=r(7798),c=r(6995),i=r(7682),o=r(9659),m=r(7462),u=r(3366),d=r(5900),p=r.n(d),f=r(3033),b=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"],E=function(e){var t=e.className,r=e.cssModule,a=e.size,l=e.bordered,s=e.borderless,c=e.striped,i=e.dark,o=e.hover,d=e.responsive,E=e.tag,h=e.responsiveTag,g=e.innerRef,v=(0,u.Z)(e,b),w=(0,f.mx)(p()(t,"table",!!a&&"table-"+a,!!l&&"table-bordered",!!s&&"table-borderless",!!c&&"table-striped",!!i&&"table-dark",!!o&&"table-hover"),r),y=n.createElement(E,(0,m.Z)({},v,{ref:g,className:w}));if(d){var O=(0,f.mx)(!0===d?"table-responsive":"table-responsive-"+d,r);return n.createElement(h,{className:O},y)}return y};E.defaultProps={tag:"table",responsiveTag:"div"};var h=E,g=r(1046),v=r(3201);var w=()=>{let e,t;"undefined"!=typeof window&&(e=window.navigator.platform,t=window.location);const{0:r,1:a}=(0,n.useState)(""),{0:m,1:u}=(0,n.useState)(!1),{0:d,1:p}=(0,n.useState)("");(0,n.useEffect)((()=>{const t=e;["Win32","Linux x86_64","MacIntel"].includes(t)?a(t):a("Win32")}),[]);return n.createElement("div",null,n.createElement("h2",{className:"text-center my-4"},"Download Terasology Launcher"),n.createElement("div",{className:"download-underline"}),n.createElement("div",{className:"m-5"},n.createElement(l.Z,{className:"justify-content-center"},n.createElement(s.Z,{lg:"2",md:"3",sm:"4",xs:"4"},n.createElement("h5",{className:"my-3 "},"Platform: ")),n.createElement(s.Z,{lg:"7",md:"6",sm:"8",xs:"8",className:"download-dropdown"},n.createElement(c.Z,{type:"select",name:"select",id:"exampleSelect",style:{height:"40px",fontSize:"15px"},onChange:e=>{const t=e.target.value;a(t)}},n.createElement("option",{value:"Win32",selected:"Win32"===e?"selected":""},"Windows (64-bit)"),n.createElement("option",{value:"Linux x86_64",selected:"Linux x86_64"===e?"selected":""},"Linux (64-bit)"),n.createElement("option",{value:"MacIntel",selected:"MacIntel"===e?"selected":""},"macOS")),n.createElement(i.Z,{className:"my-2 alert-box",color:"danger",isOpen:m,toggle:()=>u(!1)},n.createElement("span",{className:"alert-box"},`Problem fetching download link.(Error Code: ${d})`))),n.createElement(s.Z,{lg:"3",md:"9"},n.createElement("div",{className:"text-center font-weight-bold btn-primary download-btn"},n.createElement(o.Z,{className:"text-white",onClick:()=>(async()=>{const e=await fetch("https://api.github.com/repos/MovingBlocks/TerasologyLauncher/releases/latest");if(e.ok){const n=await e.json();let a;"Win32"===r?(a=n.assets&&n.assets[3].browser_download_url,t.href=a):"Linux x86_64"===r?(a=n.assets&&n.assets[0].browser_download_url,t.href=a):"MacIntel"===r&&(a=n.assets&&n.assets[1].browser_download_url,t.href=a)}else u(!0),p(e.status)})()},n.createElement(g.Pd.Provider,{value:{size:"1em",className:"download"}},n.createElement(v.aBF,null)),"Download"))))),n.createElement("div",{className:"download-underline"}),n.createElement("div",{className:"my-5 "},n.createElement("h2",{className:" m-3 download-system-requirement"},"System Requirements"),n.createElement("div",{className:"my-5"},n.createElement(h,{className:"download-table my-4",borderless:!0},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null),n.createElement("th",null,"Minimum Requirements"),n.createElement("th",null,"Recommended Requirements"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",{scope:"row"},"System (OS)"),n.createElement("td",null,"Windows, MacOS, Linux (64 bit)"),n.createElement("td",null)),n.createElement("tr",null,n.createElement("th",{scope:"row"},"Processor (CPU)"),n.createElement("td",null,"dual-core CPU"),n.createElement("td",null,"quad-core CPU")),n.createElement("tr",null,n.createElement("th",{scope:"row"},"Memory (RAM)"),n.createElement("td",null,"2 GB"),n.createElement("td",null,"8 GB")),n.createElement("tr",null,n.createElement("th",{scope:"row"},"Graphics (GPU)"),n.createElement("td",null,"Intel HD Graphics (Gen 5)",n.createElement("br",null),"GeForce 6xxx series or",n.createElement("br",null),"Radeon HD 2000 series",n.createElement("br",null),"with OpenGL 2.1*"),n.createElement("td",null,"GeForce 8xxx series (or higher) or",n.createElement("br",null),"Radeon HD 2000 series (or higher)",n.createElement("br",null),"with OpenGL 3.x")),n.createElement("tr",null,n.createElement("th",{scope:"row"},"Storage (HDD)"),n.createElement("td",null,"1 GB"),n.createElement("td",null)))))))},y=r(4479),O=r.n(y),x=r(1711);var P=()=>n.createElement(a.Z,null,n.createElement(w,null));const N=()=>n.createElement(x.Z,{title:`Download | ${O().siteTitle}`})}}]);
//# sourceMappingURL=component---src-pages-downloads-jsx-4bc024a60338ce8ec8b7.js.map