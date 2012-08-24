/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-printshiv-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
window.Modernizr=function(e,t,n){function r(e){g.cssText=e}function i(e,t){return r(E.join(e+";")+(t||""))}function s(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function u(e,t){for(var r in e)if(g[e[r]]!==n)return t=="pfx"?e[r]:!0;return!1}function a(e,t,r){for(var i in e){var o=t[e[i]];if(o!==n)return r===!1?e[i]:s(o,"function")?o.bind(r||t):o}return!1}function f(e,t,n){var r=e.charAt(0).toUpperCase()+e.substr(1),i=(e+" "+x.join(r+" ")+r).split(" ");return s(t,"string")||s(t,"undefined")?u(i,t):(i=(e+" "+T.join(r+" ")+r).split(" "),a(i,t,n))}function l(){h.input=function(n){for(var r=0,i=n.length;r<i;r++)L[n[r]]=n[r]in y;return L.list&&(L.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),L}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),h.inputtypes=function(e){for(var r=0,i,s,o,u=e.length;r<u;r++)y.setAttribute("type",s=e[r]),i=y.type!=="text",i&&(y.value=b,y.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(s)&&y.style.WebkitAppearance!==n?(d.appendChild(y),o=t.defaultView,i=o.getComputedStyle&&o.getComputedStyle(y,null).WebkitAppearance!=="textfield"&&y.offsetHeight!==0,d.removeChild(y)):/^(search|tel)$/.test(s)||(/^(url|email)$/.test(s)?i=y.checkValidity&&y.checkValidity()===!1:/^color$/.test(s)?(d.appendChild(y),d.offsetWidth,i=y.value!=b,d.removeChild(y)):i=y.value!=b)),k[e[r]]=!!i;return k}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var c="2.5.3",h={},p=!0,d=t.documentElement,v="modernizr",m=t.createElement(v),g=m.style,y=t.createElement("input"),b=":)",w={}.toString,E=" -webkit- -moz- -o- -ms- ".split(" "),S="Webkit Moz O ms",x=S.split(" "),T=S.toLowerCase().split(" "),N={svg:"http://www.w3.org/2000/svg"},C={},k={},L={},A=[],O=A.slice,M,_=function(e,n,r,i){var s,o,u,a=t.createElement("div"),f=t.body,l=f?f:t.createElement("body");if(parseInt(r,10))while(r--)u=t.createElement("div"),u.id=i?i[r]:v+(r+1),a.appendChild(u);return s=["&#173;","<style>",e,"</style>"].join(""),a.id=v,l.innerHTML+=s,l.appendChild(a),f||(l.style.background="",d.appendChild(l)),o=n(a,e),f?a.parentNode.removeChild(a):l.parentNode.removeChild(l),!!o},D=function(){function e(e,i){i=i||t.createElement(r[e]||"div"),e="on"+e;var o=e in i;return o||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(e,""),o=s(i[e],"function"),s(i[e],"undefined")||(i[e]=n),i.removeAttribute(e))),i=null,o}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),P={}.hasOwnProperty,H;!s(P,"undefined")&&!s(P.call,"undefined")?H=function(e,t){return P.call(e,t)}:H=function(e,t){return t in e&&s(e.constructor.prototype[t],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if(typeof t!="function")throw new TypeError;var n=O.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var s=new i,o=t.apply(s,n.concat(O.call(arguments)));return Object(o)===o?o:s}return t.apply(e,n.concat(O.call(arguments)))};return r});var B=function(n,r){var i=n.join(""),s=r.length;_(i,function(n,r){var i=t.styleSheets[t.styleSheets.length-1],o=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"",u=n.childNodes,a={};while(s--)a[u[s].id]=u[s];h.touch="ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch||(a.touch&&a.touch.offsetTop)===9,h.csstransforms3d=(a.csstransforms3d&&a.csstransforms3d.offsetLeft)===9&&a.csstransforms3d.offsetHeight===3,h.generatedcontent=(a.generatedcontent&&a.generatedcontent.offsetHeight)>=1,h.fontface=/src/i.test(o)&&o.indexOf(r.split(" ")[0])===0},s,r)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",E.join("touch-enabled),("),v,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",E.join("transform-3d),("),v,")","{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join(""),['#generatedcontent:after{content:"',b,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]);C.flexbox=function(){return f("flexOrder")},C.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},C.canvastext=function(){return!!h.canvas&&!!s(t.createElement("canvas").getContext("2d").fillText,"function")},C.webgl=function(){try{var r=t.createElement("canvas"),i;i=!(!e.WebGLRenderingContext||!r.getContext("experimental-webgl")&&!r.getContext("webgl")),r=n}catch(s){i=!1}return i},C.touch=function(){return h.touch},C.geolocation=function(){return!!navigator.geolocation},C.postmessage=function(){return!!e.postMessage},C.websqldatabase=function(){return!!e.openDatabase},C.indexedDB=function(){return!!f("indexedDB",e)},C.hashchange=function(){return D("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},C.history=function(){return!!e.history&&!!history.pushState},C.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},C.websockets=function(){for(var t=-1,n=x.length;++t<n;)if(e[x[t]+"WebSocket"])return!0;return"WebSocket"in e},C.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),o(g.backgroundColor,"rgba")},C.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),o(g.backgroundColor,"rgba")||o(g.backgroundColor,"hsla")},C.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(g.background)},C.backgroundsize=function(){return f("backgroundSize")},C.borderimage=function(){return f("borderImage")},C.borderradius=function(){return f("borderRadius")},C.boxshadow=function(){return f("boxShadow")},C.textshadow=function(){return t.createElement("div").style.textShadow===""},C.opacity=function(){return i("opacity:.55"),/^0.55$/.test(g.opacity)},C.cssanimations=function(){return f("animationName")},C.csscolumns=function(){return f("columnCount")},C.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+E.join(n+e)).slice(0,-e.length)),o(g.backgroundImage,"gradient")},C.cssreflections=function(){return f("boxReflect")},C.csstransforms=function(){return!!f("transform")},C.csstransforms3d=function(){var e=!!f("perspective");return e&&"webkitPerspective"in d.style&&(e=h.csstransforms3d),e},C.csstransitions=function(){return f("transition")},C.fontface=function(){return h.fontface},C.generatedcontent=function(){return h.generatedcontent},C.video=function(){var e=t.createElement("video"),n=!1;try{if(n=!!e.canPlayType)n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(r){}return n},C.audio=function(){var e=t.createElement("audio"),n=!1;try{if(n=!!e.canPlayType)n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(r){}return n},C.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},C.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},C.webworkers=function(){return!!e.Worker},C.applicationcache=function(){return!!e.applicationCache},C.svg=function(){return!!t.createElementNS&&!!t.createElementNS(N.svg,"svg").createSVGRect},C.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==N.svg},C.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(w.call(t.createElementNS(N.svg,"animate")))},C.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(w.call(t.createElementNS(N.svg,"clipPath")))};for(var j in C)H(C,j)&&(M=j.toLowerCase(),h[M]=C[j](),A.push((h[M]?"":"no-")+M));return h.input||l(),r(""),m=y=null,h._version=c,h._prefixes=E,h._domPrefixes=T,h._cssomPrefixes=x,h.hasEvent=D,h.testProp=function(e){return u([e])},h.testAllProps=f,h.testStyles=_,d.className=d.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+A.join(" "):""),h}(this,this.document),function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=v.elements;return typeof e=="string"?e.split(" "):e}function i(e){var t={},n=e.createElement,i=e.createDocumentFragment,s=i();e.createElement=function(e){var r=(t[e]||(t[e]=n(e))).cloneNode();return v.shivMethods&&r.canHaveChildren&&!h.test(e)?s.appendChild(r):r},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t[e]=n(e),s.createElement(e),'c("'+e+'")'})+");return n}")(v,s)}function s(e){var t;return e.documentShived?e:(v.shivCSS&&!p&&(t=!!n(e,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),d||(t=!i(e)),t&&(e.documentShived=t),e)}function o(e){var t,n=e.getElementsByTagName("*"),i=n.length,s=RegExp("^(?:"+r().join("|")+")$","i"),o=[];while(i--)t=n[i],s.test(t.nodeName)&&o.push(t.applyElement(u(t)));return o}function u(e){var t,n=e.attributes,r=n.length,i=e.ownerDocument.createElement(g+":"+e.nodeName);while(r--)t=n[r],t.specified&&i.setAttribute(t.nodeName,t.nodeValue);return i.style.cssText=e.style.cssText,i}function a(e){var t,n=e.split("{"),i=n.length,s=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),o="$1"+g+"\\:$2";while(i--)t=n[i]=n[i].split("}"),t[t.length-1]=t[t.length-1].replace(s,o),n[i]=t.join("}");return n.join("{")}function f(e){var t=e.length;while(t--)e[t].removeNode()}function l(e){var t,r,i=e.namespaces,s=e.parentWindow;return!y||e.printShived?e:(typeof i[g]=="undefined"&&i.add(g),s.attachEvent("onbeforeprint",function(){var i,s,u,f=e.styleSheets,l=[],c=f.length,h=Array(c);while(c--)h[c]=f[c];while(u=h.pop())if(!u.disabled&&m.test(u.media)){for(i=u.imports,c=0,s=i.length;c<s;c++)h.push(i[c]);try{l.push(u.cssText)}catch(p){}}l=a(l.reverse().join("")),r=o(e),t=n(e,l)}),s.attachEvent("onafterprint",function(){f(r),t.removeNode(!0)}),e.printShived=!0,e)}var c=e.html5||{},h=/^<|^(?:button|form|map|select|textarea)$/i,p,d;(function(){var e=t.createElement("a");e.innerHTML="<xyz></xyz>",p="hidden"in e,d=e.childNodes.length==1||function(){try{t.createElement("a")}catch(e){return!0}var n=t.createDocumentFragment();return typeof n.cloneNode=="undefined"||typeof n.createDocumentFragment=="undefined"||typeof n.createElement=="undefined"}()})();var v={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:s};e.html5=v,s(t);var m=/^$|\b(?:all|print)\b/,g="html5shiv",y=!d&&function(){var n=t.documentElement;return typeof t.namespaces!="undefined"&&typeof t.parentWindow!="undefined"&&typeof n.applyElement!="undefined"&&typeof n.removeNode!="undefined"&&typeof e.attachEvent!="undefined"}();v.type+=" print",v.shivPrint=l,l(t)}(this,document),function(e,t,n){function r(e){return d.call(e)=="[object Function]"}function i(e){return typeof e=="string"}function s(){}function o(e){return!e||e=="loaded"||e=="complete"||e=="uninitialized"}function u(){var e=v.shift();m=1,e?e.t?h(function(){(e.t=="c"?k.injectCss:k.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),u()):m=0}function a(e,n,r,i,s,a,f){function l(t){if(!d&&o(c.readyState)&&(w.r=d=1,!m&&u(),c.onload=c.onreadystatechange=null,t)){e!="img"&&h(function(){b.removeChild(c)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var f=f||k.errorTimeout,c={},d=0,g=0,w={t:r,s:n,e:s,a:a,x:f};T[n]===1&&(g=1,T[n]=[],c=t.createElement(e)),e=="object"?c.data=n:(c.src=n,c.type=e),c.width=c.height="0",c.onerror=c.onload=c.onreadystatechange=function(){l.call(this,g)},v.splice(i,0,w),e!="img"&&(g||T[n]===2?(b.insertBefore(c,y?null:p),h(l,f)):T[n].push(c))}function f(e,t,n,r,s){return m=0,t=t||"j",i(e)?a(t=="c"?E:w,e,t,this.i++,n,r,s):(v.splice(this.i++,0,e),v.length==1&&u()),this}function l(){var e=k;return e.loader={load:f,i:0},e}var c=t.documentElement,h=e.setTimeout,p=t.getElementsByTagName("script")[0],d={}.toString,v=[],m=0,g="MozAppearance"in c.style,y=g&&!!t.createRange().compareNode,b=y?c:p.parentNode,c=e.opera&&d.call(e.opera)=="[object Opera]",c=!!t.attachEvent&&!c,w=g?"object":c?"script":"img",E=c?"script":w,S=Array.isArray||function(e){return d.call(e)=="[object Array]"},x=[],T={},N={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},C,k;k=function(e){function t(e){var e=e.split("!"),t=x.length,n=e.pop(),r=e.length,n={url:n,origUrl:n,prefixes:e},i,s,o;for(s=0;s<r;s++)o=e[s].split("="),(i=N[o.shift()])&&(n=i(n,o));for(s=0;s<t;s++)n=x[s](n);return n}function o(e,i,s,o,a){var f=t(e),c=f.autoCallback;f.url.split(".").pop().split("?").shift(),f.bypass||(i&&(i=r(i)?i:i[e]||i[o]||i[e.split("/").pop().split("?")[0]]||u),f.instead?f.instead(e,i,s,o,a):(T[f.url]?f.noexec=!0:T[f.url]=1,s.load(f.url,f.forceCSS||!f.forceJS&&"css"==f.url.split(".").pop().split("?").shift()?"c":n,f.noexec,f.attrs,f.timeout),(r(i)||r(c))&&s.load(function(){l(),i&&i(f.origUrl,a,o),c&&c(f.origUrl,a,o),T[f.url]=2})))}function a(e,t){function n(e,n){if(e){if(i(e))n||(f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}),o(e,f,t,0,u);else if(Object(e)===e)for(p in h=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(p)&&(!n&&!--h&&(r(f)?f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}:f[p]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),c()}}(l[p])),o(e[p],f,t,p,u))}else!n&&c()}var u=!!e.test,a=e.load||e.both,f=e.callback||s,l=f,c=e.complete||s,h,p;n(u?e.yep:e.nope,!!a),a&&n(a)}var f,c,h=this.yepnope.loader;if(i(e))o(e,0,h,0);else if(S(e))for(f=0;f<e.length;f++)c=e[f],i(c)?o(c,0,h,0):S(c)?k(c):Object(c)===c&&a(c,h);else Object(e)===e&&a(e,h)},k.addPrefix=function(e,t){N[e]=t},k.addFilter=function(e){x.push(e)},k.errorTimeout=1e4,t.readyState==null&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",C=function(){t.removeEventListener("DOMContentLoaded",C,0),t.readyState="complete"},0)),e.yepnope=l(),e.yepnope.executeStack=u,e.yepnope.injectJs=function(e,n,r,i,a,f){var l=t.createElement("script"),c,d,i=i||k.errorTimeout;l.src=e;for(d in r)l.setAttribute(d,r[d]);n=f?u:n||s,l.onreadystatechange=l.onload=function(){!c&&o(l.readyState)&&(c=1,n(),l.onload=l.onreadystatechange=null)},h(function(){c||(c=1,n(1))},i),a?l.onload():p.parentNode.insertBefore(l,p)},e.yepnope.injectCss=function(e,n,r,i,o,a){var i=t.createElement("link"),f,n=a?u:n||s;i.href=e,i.rel="stylesheet",i.type="text/css";for(f in r)i.setAttribute(f,r[f]);o||(p.parentNode.insertBefore(i,p),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};