//v57 © 2012 Tynt

Tynt=window.Tynt||[];
if(typeof Tynt.TIL=="undefined"){(function(){var lb=function(){var h=document,n=h.body,t=h.documentElement,P=eval("/*@cc_on!@*/false"),la=function(a,b){for(var c="",e=0;e<b;e++)c+=a;return c},A=la("a",50),C=(Tynt.e||"")+"ic.tynt.com",Fa=(Tynt.e||"")+"de.tynt.com/deb/",v=function(){return(new Date).getTime()},x=function(a){return a.replace(/^\s+|\s+$/g,"")},H=function(a,b){for(var c in a)if(a.hasOwnProperty(c))b[c]=a[c]},q=function(a,b,c){a=h.createElement(a);H(b,a);H(c,a.style);return a},Q=function(){for(var a=
Tynt,b={},c=a.length,e=[],d=0;d<c;d++)if(!b[a[d]]){b[a[d]]=true;e.push(a[d])}return e.join("~")},s,K;if(window.addEventListener){s=function(a,b,c){a.addEventListener(b,c,false)};K=function(a,b,c){a.removeEventListener(b,c,false)}}else{s=function(a,b,c){a.attachEvent("on"+b,c)};K=function(a,b,c){a.detachEvent("on"+b,c)}}var R=function(a,b){var c=location.hostname.split("."),e=2;do{var d=c.slice(c.length-e,c.length).join(".");h.cookie=a+";path=/;domain=."+d+";"+b;e++}while(h.cookie.indexOf(a)==-1&&
e<=c.length);if(h.cookie.indexOf(a)==-1)h.cookie=a+";path=/;"+b},S=function(a){h.readyState=="complete"?a():s(window,"load",function(){setTimeout(function(){if(typeof h.readyState=="undefined"&&!P)h.readyState="complete";a()},10)})},r=function(a,b){var c=[],e=function(d,f){var g="http://"+d.replace("id="+A,"id="+Q());if(g.indexOf(C+"/b/p?")>-1&&typeof Tynt.b=="string")g+="&b="+Tynt.b;var k=new Image(1,1);if(f)k.onerror=f;k.src=g};r=function(d,f){c.push([d,f])};S(function(){r=e;for(var d=0;d<c.length;d++)r(c[d][0],
c[d][1]);c=null});r(a,b)},ma=function(a){a=q("script",{async:"async",src:"http://"+a});var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)},na=function(a){var b=[],c="",e;for(e in a)if(a.hasOwnProperty(e)){b.push(c,e,"=",a[e]);c="&"}return b.join("")},L=function(a){for(var b=0,c=a.length<100?a.length:100,e=0;e<c;e++)b+=a.charCodeAt(e);a=Math.floor(Math.random()*3844);c=Math.abs(v()-12281184E5);return oa(c,7)+oa((b+a)%3844,2)},pa=function(a){if(a<62)return"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(this);
else{var b=Math.floor(a/62);a=a-b*62;return b>=62?pa(b)+"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(a):"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(b)+"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(a)}},oa=function(a,b){var c=pa(a);return la("0",b-c.length)+c},T=function(a){return(a=x(a))?a.split(/\s+/i).length:0},M=x((h.title||location.hostname).toString()).replace(RegExp(location.hash,"g"),""),qa=function(){for(var a=
h.getElementsByTagName("link"),b=0;b<a.length;b++)if(a[b].getAttribute("rel")&&a[b].getAttribute("rel").match("canonical")&&a[b].getAttribute("href")){a=a[b].getAttribute("href");b=location.protocol+"//"+location.host+location.pathname;var c=h.getElementsByTagName("base")[0];if(c)if(c=c.getAttribute("href"))b=c;if(!a.match(/^http/)){if(a.charAt(0)=="/"){c=b.indexOf("/",9);if(c>-1)b=b.slice(0,c)}else{c=b.lastIndexOf("/");if(c>9)b=b.slice(0,c+1);else b+="/"}a=b+a}return a}return""},I=function(a){return a.replace(/^https?:\/\//,
"")},ea=function(a,b){for(var c=b+"=",e=a.split(";"),d=0;d<e.length;d++){for(var f=e[d];f.charAt(0)==" ";)f=f.substring(1,f.length);if(f.indexOf(c)==0)return f.substring(c.length,f.length)}return null},Ga=function(){var a=ea(h.cookie,"tracertraffic"),b=encodeURIComponent(I(qa())),c=h.location.hash;c=/tynt=/.test(c)?c.match(/tynt=?([^?&$#]*)/)[1]:false;var e=C+"/b/p?id="+A+(a?"&et="+a:"")+(c?"&a="+c:"")+"&ts="+v(),d=e+(b?"&cu="+b:""),f=d+(h.referrer?"&r="+encodeURIComponent(I(h.referrer)):"");a=f+
"&t="+encodeURIComponent(M);r(a,function(){r(f,function(){r(d,function(){r(e)})})})},Ha=function(){S(function(){var a=[Fa,"v2?id=",Q(),"&r=",encodeURIComponent(I(h.referrer))].join("");ma(a)})},ra=function(a){var b=a.trace_type;delete a.trace_type;var c=a.g;delete a.g;for(var e=[],d=["id","wc","f","w","h","t","c"],f=0;f<d.length;f++){var g=d[f],k=a[g];k&&e.push([g,encodeURIComponent(k).replace(/\'/g,"%27")]);delete a[g]}for(var j in a)if(a.hasOwnProperty(j))(d=a[j])&&e.push([j,encodeURIComponent(d).replace(/\'/g,
"%27")]);a=[];f=2048-(("http://"+C+"/a/t/x#?").length+(3+c.length)+5);g=e.length;var m=k=0,l=0,p,o,u,w,y=0;for(a[y]={g:c,tp:null};k<g&&a.length<35;){p=e[k][0];j=e[k][1];u=p.length+2;o=f-u-m;if(o>0){d=j.substring(l,l+o);w=d.slice(-2).indexOf("%");if(w>-1){d=j.substring(l,l+o-2+w);m+=w+2}m+=d.length+u;l+=d.length;a[y][p]=d}else m=f;if(m>=f){a[++y]={g:c,p:y};m=0}if(l>=j.length){k++;l=0}}a[0].tp=a.length;r(C+"/b/t/"+b+"?"+na(a[0]));for(c=1;c<a.length;c++)r(C+"/b/x/"+b+"?"+na(a[c]))},U=function(){var a=
[];return function(b){for(var c=a.length-1;c>=0;c--)if(a[c]==b)return false;a.unshift(b);a.length>3&&a.pop();return true}},Ia=U(),Ja=U(),Ka=function(){var a,b=function(){window.removeEventListener("blur",b,false);fa(a);return true};return function(c){a=c.target||c.srcElement;window.removeEventListener("blur",b,false);if(a.nodeName=="IMG"&&a.parentNode.nodeName!="A"){window.addEventListener("blur",b,false);setTimeout(function(){h.removeEventListener("blur",b,false)},1E4)}return true}}(),sa=function(a){fa(a.target||
a.srcElement,true)},V,ta=function(a){a=a.target||a.srcElement;V=a.nodeName=="IMG"?a:null},ga=function(){var a=function(g){return typeof g.pageX=="number"?{x:g.pageX-(t.scrollLeft?t.scrollLeft:n.scrollLeft),y:g.pageY-(t.scrollTop?t.scrollTop:n.scrollTop)}:{x:g.clientX,y:g.clientY}},b=function(g){g=a(g);return g.x<=0||g.y<=0||g.x>=n.clientWidth||g.y>=n.clientHeight},c=function(g){g=a(g);return g.x<=0||g.y<=0||g.x>=t.clientWidth||g.y>=t.clientHeight},e=function(g){return g.target.nodeName=="#document"},
d=function(g){g=a(g);return g.x<=4||g.y<=4||g.x>=t.clientWidth-4||g.y>=t.clientHeight-4},f=function(g){f=navigator.userAgent.match("MSIE")?!h.compatMode||h.compatMode.indexOf("CSS")==-1?b:c:navigator.userAgent.match("Firefox")?e:d;f(g)};return function(g){if(V&&f(g)){fa(V);V=null}return true}}(),La=function(){function a(m,l){if(j(m))r(C+"/b/o?id="+A+(l?"&i=":"&l=")+encodeURIComponent(m)+"&ts="+v())}function b(m){var l=m.target||m.srcElement;if(m.button<2)for(;l&&l!=h;){m=l.href;if(l.nodeName=="A"&&
m&&location.href.split("#")[0]!=m.split("#")[0]&&!/^javascript/i.test(m)){a(m);break}l=l.parentNode}}function c(){k&&a(k,true)}function e(m){if(m){m=m.target||m.srcElement;k=m.src||m.data||"flash";s(window,"blur",c)}}function d(){k=null;K(window,"blur",c)}function f(m){s(m,"mouseover",e);s(m,"mouseout",d)}function g(){k&&a(k,true)}var k,j=U();s(document,"mousedown",b);S(function(){for(var m=h.getElementsByTagName("iframe"),l=m.length-1;l>=0;l--){var p=m[l];if(p.src)f(p);else if(p.name)try{s(frames[p.name].document,
"mousedown",b)}catch(o){}}m=h.getElementsByTagName("object");for(l=m.length-1;l>=0;l--)f(m[l])});s(window,"beforeunload",g);s(window,"unload",g)},ua=function(){return/tracer=test|tracer=no_tracing|disableTracer=/.test(location.href)||/disableTracer=y/.test(h.cookie)},ha;if(Tynt.c)ha=function(){};else{Tynt.c=true;Tynt.m=Tynt.m||[];Tynt.n=Tynt.n||[];ha=function(){var a=true,b,c=function(e,d){var f={id:A,wc:T(d),c:d,f:a?1:0,t:M};H(e,f);a=false;ra(f)};/tynt=nout/.test(location.href)||La();if(window.addEventListener){navigator.userAgent.match("Firefox/2")||
n.addEventListener("copy",sa,false);window.addEventListener("mousedown",ta,false);window.addEventListener("dragleave",ga,false);window.addEventListener("dragexit",ga,false);h.addEventListener("contextmenu",Ka,false)}else{n.attachEvent("oncopy",sa);h.getElementsByTagName("html")[0].attachEvent("ondragleave",ga);n.attachEvent("onmousedown",ta)}if(h.cookie.indexOf("tracertraffic=")!=-1)if(!h.referrer||h.referrer.indexOf(location.host)==-1)R("tracertraffic=0","expires=Thu, 01 Jan 1970 00:00:00 GMT");
Ga();Ha();return function(e,d){if(!h.getElementById("tyntSh")){var f,g,k;if(d)if(!h.selection||!h.selection.createRange){g=getSelection();k=g.rangeCount>0&&g.getRangeAt(0);f=g.toString()}else{g=h.selection.createRange();k=g.duplicate();f=g.text}var j=e.src;if(j&&!f&&Ja(j)){g={trace_type:3,g:L(j),w:e.width,h:e.height};for(k=0;k<Tynt.n.length;k++)Tynt.n[k](g,j);c(g,j)}else if(f&&x(f).length&&e.nodeName!="TEXTAREA"&&e.nodeName!="INPUT"){j=Ia(f);g={trace_type:1};if(j)b=L(f);g.g=b;for(var m=true,l=0;l<
Tynt.m.length;l++)m=m&&Tynt.m[l](g,f,k,j);j&&m&&c(g,f)}}}}}var W=function(a){a=a.charCodeAt(0);return 3584<=a&&a<=3711||11904<=a&&a<=12591||12688<=a&&a<=40959||63744<=a&&a<=64255||65072<=a&&a<=65103||131072<=a&&a<=173791||194560<=a&&a<=195103},va=function(a){a=a.getElementsByTagName("script");for(var b=a.length-1;b>=0;b--){var c=a[b];c.parentNode.removeChild(c)}},J=function(a,b){var c=qa();c=c&&i.c!==false?c:location.href;c=c.replace(/#(i|a)xzz=?(.*)$/g,"");c=c+"#"+("ixzz"+a);if(b)c+="&"+b;return c},
ia=h.defaultView,ja=P?!h.compatMode||h.compatMode.indexOf("CSS")==-1:false,Ma=P?!("XMLHttpRequest"in window):false,X=function(a){X=typeof ia!="undefined"&&typeof ia.getComputedStyle!="undefined"?function(b){return ia.getComputedStyle(b,"")}:function(b){return b.currentStyle};return X(a)},D={};D.t=3;D.p=6;D.w=7;D.f=8;D.i=9;D.l=10;D.g=11;var Na=function(a){a=a.match(/ixzz=?([^?$#]*)/);if(!a)return null;a=a[1].match(/&([^?$]*)/);if(Tynt.k)return Tynt.k.charAt(1);if(!a||!a[1])return null;return a[1]},
wa=function(a){var b=new Date(v()+864E5);R("tracertraffic="+a.toString(),"expires="+b.toUTCString())},Oa=function(){if(Tynt.v)return false;Tynt.v=true;var a=location.href.match(/ixzz=?([^?&$#]*)/),b=(a&&a.length==2?a[1]:null)||Tynt.h;if(b){a=Na(location.href);b=C+"/b/v"+["?g=",b,/\?trace_owner_view/.test(location.href)?"&o=y":"","&id=",A,a?"&s="+a:"","&r=",encodeURIComponent(I(h.referrer)),"&ts=",v()].join("");r(b);wa(D[a]||1);return true}return false},Pa=(Tynt.e||"")+"ic.tynt.com/b/s",F="http://"+
(Tynt.e||"")+"cdn.tynt.com/images/ss/",xa=typeof createImageMeme!=="undefined",G=G||"";G+=["#tyntSh div,#tyntSh span,#tyntSh img,#tyntSh a,div#tyntSh{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;line-height:1;background:0;text-align:left}#tyntSh img,#tyntSh span{display:inline}#tyntSh div,div#tyntSh{display:block}div#tyntSh{z-index:9999999;position:absolute;height:62px;margin:10px;overflow:visible;background:#FFF;border-radius:5px;text-align:center;box-shadow: 0 2px 6px rgba(0,0,0,0.5)}div#tyntShTr{margin:-11px auto 0 auto;width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:11px solid #F1F1F1}img#tyntShTw,img#tyntShP,img#tyntShFb,img#tyntShLi,img#tyntShGp{cursor:pointer;height:28px;width:28px;margin:3px 3px 2px 3px;vertical-align:bottom}div#tyntShPTL,div#tyntShHFL{color:#888;text-decoration:none;margin:0 0 2px 0;background-color:#F1F1F1;padding:2px 4px;border-radius:5px 5px 0 0}div#tyntShHFL{text-align:right;border-radius:0 0 5px 5px;margin:2px 0 0 0}div#tyntShHFL,span#tyntShHFLs,div#tyntShPTL{font:normal 8px Arial}",
"span#tyntShHFLs{cursor:pointer;"+(ja?"text-decoration:underline":"")+"}","span#tyntShHFLs:hover{color:#555;text-decoration:underline}div#tyntShCB{position:absolute;cursor:pointer;width:14px;height:14px;top:0;right:0;background-position:0 -14px;background-repeat:no-repeat}div#tyntShCB:hover{background-position: 0 0}"].join("");var z=function(){var a,b;return function(c,e,d){a=e||a;b=d||b;c=Pa+["?w=",c,"&id=",A,"&g=",a,"&wc=",b,"&r=",encodeURIComponent(I(h.referrer)),"&ts=",v()].join("");r(c)}}(),
N=function(a){return(i.ss||"").indexOf(a)>-1},Y=function(a,b){return b.length>a?b.slice(0,a-1)+"\u2026":b},Qa=function(a,b){var c=J(b,"w");return c=Y(114,a)+" "+c},ya=function(a,b,c){var e,d,f,g,k=function(j,m,l){g=j;f=m;d=T(g);if(!(h.getElementById("tyntSh")||d<8)){z(0,f,d);var p;if(!h.selection||!h.selection.createRange){j=q("span",{},{display:"inline"});m=l.startContainer;var o=l.endContainer,u=l.endOffset;try{var w=h.createRange();w.setStart(o,u);w.setEnd(o,u);w.surroundContents(j);var y,ka,B;
u={top:0,left:0,bottom:0,top:0};var E=j&&j.ownerDocument;if(E){y=E.documentElement;if(typeof j.getBoundingClientRect!=="undefined")u=j.getBoundingClientRect();ka="scrollTo"in E&&E.document?E:E.nodeType===9?E.defaultView||E.parentWindow:false;B={top:u.top,left:u.left,width:u.right-u.left,height:u.bottom-u.top};if(X(j).position!="fixed"){B.top+=ka.pageYOffset||y.scrollTop||0;B.left+=ka.pageXOffset||y.scrollLeft||0}B.top+=y.clientTop||0;B.left+=y.clientLeft||0;p=[B.left,B.top,B.width,B.height]}else p=
null;p[2]=j.offsetHeight;j.parentNode.removeChild(j);w.detach();m.parentNode.normalize();o.parentNode.normalize()}catch(mb){}typeof getSelection().setBaseAndExtent!="undefined"&&getSelection().setBaseAndExtent(l.startContainer,l.startOffset,l.endContainer,l.endOffset)}else{l=h.selection.createRange();w=ja?"offset":"bounding";p=[];p[0]=l[w+"Left"]+(t.scrollLeft||n.scrollLeft);p[1]=l[w+"Top"]+(t.scrollTop||n.scrollTop);p[2]=l.boundingHeight}p=p;e.style.left=p[0]+"px";e.style.top=Math.max(p[1]+p[2],
3)+"px";n.insertBefore(e,n.firstChild);s(n,"mousedown",Z)}};(function(){if(!h.getElementById("tyntShCSS")){var j=q("style",{id:"tyntShCSS",type:"text/css"}),m=h.createTextNode(G);j.styleSheet?j.styleSheet.cssText=m.nodeValue:j.appendChild(m);h.getElementsByTagName("head")[0].appendChild(j)}e=q("div",{id:"tyntSh"},{width:Math.max(80,(i.ss||"").replace("p","").length*34)+"px"});ja||e.appendChild(q("div",{id:"tyntShTr"}));j=q("div",{id:"tyntShPTL",innerHTML:"Powered by Tynt"});e.appendChild(j);j=q("div",
{id:"tyntShHFL"});j.appendChild(q("span",{id:"tyntShHFLs",innerHTML:"Don't show again",onclick:Ra}));m=q("div",{id:"tyntShCB",title:"close",onclick:Sa},{backgroundImage:"url("+(F+"x.png")+")"});if(N("t")){var l=q("img",{src:F+"t.png",title:"tweet this",id:"tyntShTw",onclick:function(){window.open("http://twitter.com/home?status="+encodeURIComponent(Qa(g,f)),"tweet","width=723,height=251");z(3,f,d)}});e.appendChild(l)}if(N("f")){l=q("img",{src:F+"fb.png",title:"share on Facebook",id:"tyntShFb",onclick:function(){var p=
"http://www.facebook.com/dialog/feed?app_id=158472647611546"+["&link=",encodeURIComponent(J(f,"f")),"&description=",encodeURIComponent(Y(140,g)),"&redirect_uri=",encodeURIComponent("http://cdn.tynt.com/close.html")].join("");window.open(p,"fbshare","width=985,height=450");z(4,f,d)}});e.appendChild(l)}if(N("l")){l=q("img",{src:F+"li.png",title:"share on LinkedIn",id:"tyntShLi",onclick:function(){var p=["http://www.linkedin.com/shareArticle?mini=true&url=",encodeURIComponent(J(f,"l")),"&title=",M,"&summary=",
encodeURIComponent(Y(255,g))].join("");window.open(p,"lishare","width=520,height=450");z(8,f,d)}});e.appendChild(l)}if(N("g")){l=q("img",{src:F+"gp.png",title:"share on Google+",id:"tyntShGp",onclick:function(){var p=["https://plus.google.com/share?url=",encodeURIComponent(J(f,"g"))].join("");console.log(p);window.open(p,"gpshare","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");z(9,f,d)}});e.appendChild(l)}if(xa){l=q("img",{src:F+"pi.png",title:"pin it",id:"tyntShP",onclick:function(){createImageMeme(g,
f)}});xa&&e.appendChild(l)}e.appendChild(j);e.appendChild(m)})();k(a,b,c);ya=k},Sa=function(){Z();z(2)},Z=function(a){var b=h.getElementById("tyntSh"),c=a?a.target||a.srcElement:{id:""};if(b&&!(c.id.indexOf("tyntSh")>-1)){K(n,"mousedown",Z);n.removeChild(b);a&&z(1)}},Ra=function(){Z();var a=new Date(v()+31536E7);R("TyntSpeedShareHide=true","expires="+a.toUTCString());z(5)},$=function(){return!Ma&&h.cookie.indexOf("TyntSpeedShareHide=true")==-1},Ta=function(a,b,c){(i.ss||"").replace("p","").length&&
setTimeout(function(){$()&&ya(b,a.g,c)},1);return true},za=[{x:970,y:250},{x:300,y:600},{x:300,y:1050},{x:970,y:90},{x:300,y:250},{x:970,y:250},{x:970,y:90},{x:180,y:150},{x:160,y:600},{x:728,y:90},{x:120,y:60},{x:88,y:31}],Aa=[/:\/\/[^\/]*?outbrain\.com/,/:\/\/ads\.yldmgrimg\.net/,/:\/\/[^\/]*?cdn\.adblade\.com/,/:\/\/[^\/]*?googlesyndication\.com/];G=G||"";G+=["div.tyntShIh,.tyntShIh div,.tyntShIh span{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;line-height:1;background:0;text-align:left}.tyntShIh img,.tyntShIh span{display:inline}.tyntShIh div,div.tyntShIh{display:block;outline:0}",
"div.tyntShIh{position:absolute;cursor:default;background:transparent url("+(F+"pi.png")+") no-repeat;width:43px;height:21px;opacity:0;filter:alpha(opacity=0);z-index:9999999;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s}","div.tyntIhHover{opacity:1;filter:alpha(opacity=100);cursor:pointer}"].join("");var Ua=function(a){if(!a.getElementById("tyntShCSS")){var b=a.createElement("style");b.id="tyntShCSS";b.type="text/css";var c=a.createTextNode(G);b.styleSheet?b.styleSheet.cssText=c.nodeValue:
b.appendChild(c);a.getElementsByTagName("head")[0].appendChild(b)}},Wa=function(a,b,c){var e=c.document,d=a.getBoundingClientRect(),f=(d.right+d.left+a.width)/2,g=(d.top+d.bottom+a.height)/2,k;for(k=function(){var j={};for(j.x=f;j.x>d.left;j.x-=20)for(j.y=g;j.y>d.top;j.y-=20)if(e.elementFromPoint(j.x,j.y)===a)return j;return null}();k.y<=g&&e.elementFromPoint(k.x,k.y)===a;)k.y++;for(k.y--;k.x<=f&&e.elementFromPoint(k.x,k.y)===a;)k.x++;k.x--;k=Va(k,c);b.style.left=k.x-45+"px";b.style.top=k.y-22+"px"},
Va=function(a,b){var c=b.document.documentElement;return{x:a.x+((b.pageXOffset||c.scrollLeft||0)+(c.clientLeft||0)),y:a.y+((b.pageYOffset||c.scrollTop||0)+(c.clientTop||0))}},Xa=function(a){var b,c;for(b=0;b<Aa.length;b++)if(Aa[b].test(a.src))return true;for(b=0;b<za.length;b++){c=za[b];if(a.width===c.x&&a.height===c.y)return true}return false},Ya=function(){if(!(ua()||!$()||!N("p"))){var a=function(b){var c=b.document,e=null,d,f=null,g,k,j,m;d=c.createElement("div");d.className="tyntShIh";c.body.appendChild(d);
s(d,"click",function(){if(d.className=="tyntShIh tyntIhHover"&&$()){window.open("http://pinterest.com/pin/create/button/?url="+encodeURIComponent(J(L(f.src),"i"))+"&media="+f.src+"&description="+encodeURIComponent(Y(500,x(f.title||f.alt))));z(7)}});Ua(c);s(c,"mouseover",function(o){if(!o)o=b.event;o=b.event?o.srcElement:o.target;if(o.nodeName==="IMG"&&o.height>=80&&o.width>=80&&o.src.indexOf("data:")!==0&&!Xa(o)&&o.getAttribute("nopin")!=="nopin"&&o.nopin!=="nopin")if(!(o===f&&d.showing)){f!==null&&
f!==o&&l();f=o;f.__tyntPinItShow=true;e!==null&&clearTimeout(e);e=setTimeout(function(){if(f.__tyntPinItShow&&$()){Wa(f,d,b);d.className="tyntShIh tyntIhHover";d.showing=true;f.__tyntPinItRecorded||z(6);f.__tyntPinItRecorded=true}},1E3);s(c,"mousemove",m)}});m=function(o){o=c.elementFromPoint(o.clientX,o.clientY);o!=f&&o!=d&&l()&&K(c,"mousemove",m)};var l=function(){if(d.showing){f.__tyntPinItShow=false;d.showing=false;d.className="tyntShIh";setTimeout(function(){d.style.left="-100px"},600);return true}return false};
g=c.getElementsByTagName("iframe");for(j=g.length-1;j>=0;j--){k=g[j];try{!(k.src&&k.src.indexOf(location.protocol+"//"+location.hostname)!==0)&&k.getAttribute("nopin")!=="nopin"&&k.nopin!=="nopin"&&a(k.contentWindow)}catch(p){window.console&&console.log("Bad iframe access",p,k)}}};a(window)}},Ba={viglink:function(){Tynt.vglnk={api_url:"//vigapi.tynt.com/api",key:"f1f79f31e313bdb2b382c721aac77807",sub_id:""+aa};window.vglnk_self="Tynt.vglnk";(function(a,b){var c=a.createElement(b);c.type="text/javascript";
c.async=true;c.src=("https:"==document.location.protocol?Tynt.vglnk.api_url:"//vig.tynt.com/api")+"/vglnk.js";var e=a.getElementsByTagName(b)[0];e.parentNode.insertBefore(c,e)})(document,"script")},track_selections:function(){var a=U();s(h,"mouseup",function(){var b="";if(!h.selection||!h.selection.createRange)b=getSelection().toString();else{selection=h.selection.createRange();b=selection.text}b=x(b);if(b.length&&a(b)){b={id:A,g:L(b),wc:T(b),c:b.slice(0,2E3),t:M,trace_type:2};ra(b)}})}},i,Za=(Tynt.e||
"")+"id.tynt.com",Ca=(Tynt.e||"")+"ec.tynt.com",$a=(Tynt.e||"")+"sc.tynt.com/script/sc/",ab=["","Attribution","Attribution Share Alike","Attribution No Derivatives","Attribution Non-Commercial","Attribution Non-Commercial Share Alike","Attribution Non-Commercial No Derivatives"],bb=["","http://creativecommons.org/licenses/by/3.0","http://creativecommons.org/licenses/by-sa/3.0","http://creativecommons.org/licenses/by-nd/3.0","http://creativecommons.org/licenses/by-nc/3.0","http://creativecommons.org/licenses/by-nc-sa/3.0",
"http://creativecommons.org/licenses/by-nc-nd/3.0"],cb=/Mobile|iP(hone|od|ad)|Android|BlackBerry|Tablet|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/,ba=null,db=function(a){r(C+"/b/a?g="+a+"&id="+A+"&r="+encodeURIComponent(I(h.referrer))+"&ts="+v(),function(){})},Da=function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},eb=function(){var a;ba=false;if(typeof window.getSelection==="function")if(typeof document.createRange===
"function"){var b=window.getSelection();if(!(typeof b.addRange!=="function"||typeof b.removeAllRanges!=="function"||typeof b.rangeCount!=="number")){var c=[];for(a=0;a<b.rangeCount;a++)c.push(b.getRangeAt(a));a=document.body.appendChild(document.createElement("div"));a.contentEditable="false";var e=a.appendChild(document.createTextNode("\u00a0\u00a0\u00a0")),d=document.createRange(),f=d.cloneRange();d.setStart(e,0);f.setEnd(e,3);f.setStart(e,2);b.removeAllRanges();b.addRange(d);b.addRange(f);ba=b.rangeCount==
2;document.body.removeChild(a);b.removeAllRanges();d.detach();f.detach();for(a=0;a<c.length;a++)b.addRange(c[a])}}},O=false,fb=function(a){var b;ba===null&&eb();if(O)return false;O=true;var c="";if(i.a){a=J(a);c+=i.ap+" ";if(i.st)c=c+'<a style="color: #003399;" href="'+a+'">'+Da(M)+"</a> ";if(i.su)c=c+'<a style="color: #003399;" href="'+a+'">'+Da(a)+"</a>";if(i.as.length>0)c=c+"\n<br>"+i.as+" ";if(i.cc>0)c=c+'\n<br>Under Creative Commons License: <a style="color: #003399;" href="'+bb[i.cc]+'">'+ab[i.cc]+
"</a>";if(i.w||i.f){c+="\n<br>Follow us: ";if(i.w)c=c+'<a href="http://'+Ca+"/b/rw?id="+Q()+"&u="+i.w+'" target="_blank">@'+i.w+" on Twitter</a>";if(i.w&&i.f)c+=" | ";if(i.f)c=c+'<a href="http://'+Ca+"/b/rf?id="+Q()+"&u="+i.f+'" target="_blank">'+i.f+" on Facebook</a>"}}if(i.el){if(c.length>0)c+="\n<br>";c+=i.el}var e,d;e=q("div",{},{overflow:"hidden",color:"#000000",backgroundColor:"#FFFFFF",textAlign:"left",textDecoration:"none",border:"none"});if(h.selection&&h.selection.createRange){var f=t.scrollLeft||
n.scrollLeft,g=t.scrollTop||n.scrollTop;d=q("div",{},{overflow:"hidden",position:"absolute",left:f+20+"px",top:g+20+"px",width:"1px",height:"1px"});n.insertBefore(d,n.firstChild);var k=h.selection.createRange();e.innerHTML=i.t?c+"<br><br>"+k.htmlText:k.htmlText+"<br><br>"+c;va(e);d.appendChild(h.createElement("br"));d.appendChild(e);c=n.createTextRange();c.moveToElementText(e);c.select();setTimeout(function(){n.removeChild(d);if(k.text!=""){k.select();t.scrollLeft=f;n.scrollLeft=f;t.scrollTop=g;n.scrollTop=
g}O=false},0)}else if(ba){b=getSelection();d=q("div",{},{height:0,position:"absolute",top:"-1000px"});d.innerHTML="<br>";if(i.t){n.insertBefore(d,n.firstChild);e.innerHTML=c+"<br><br>"}else{n.appendChild(d);e.innerHTML="<br>"+c+"<br>"}d.appendChild(e);c=h.createRange();c.selectNode(e);b.addRange(c);window.setTimeout(function(){d.parentNode.removeChild(d);O=false},0)}else{b=getSelection();var j=b.getRangeAt(0);c=q("span",{innerHTML:c});if(i.t){c.innerHTML+="<br/><br/>";e.appendChild(c);e.appendChild(j.cloneContents())}else{e.appendChild(j.cloneContents());
c.innerHTML="<br/><br/>"+c.innerHTML;e.appendChild(c)}va(e);e.style.width=0.1;e.style.height=0.1;e.style.position="absolute";e.style.top="-1000px";e.style.left="-1001px";e.appendChild(h.createElement("br"));c=e.innerText.length;n.insertBefore(e,n.firstChild);if(e.innerText.length!=c)e.style.overflow="";b.selectAllChildren(e);setTimeout(function(){e.parentNode.removeChild(e);b.removeAllRanges();b.addRange(j);O=false},0)}return true},hb=function(a,b){var c=true;if(i.a||i.el){var e;e=x(b);e=e.length>=
2?W(e.charAt(0))||W(e.charAt(e.length-1))||W(e.charAt(e.length/2)):W(e);var d;if(d=i.h)a:{d=(d=gb())?d.className.split(/\s+/):[];for(var f=d.length-1;f>=0;f--)if(i.h[d[f]]!==undefined){d=i.h[d[f]];break a}d=void 0}d=d;if(d!==false&&(e&&b.replace(/\s/g,"").length>=i.aw*2||!e&&T(b)>=i.aw)||d)if(i.a||i.el){c=fb(a.g);if(i.a)a.trace_type=0}}return c},gb=function(){return!h.selection||!h.selection.createRange?function(){var a=getSelection().getRangeAt(0),b=a.startContainer.nodeType==3?a.startContainer.parentNode:
a.startContainer;return b&&x(a.toString())==x(b.textContent)?b:null}:function(){var a=h.selection.createRange(),b=a.duplicate();b.collapse(true);return(b=b.parentElement())&&x(a.text)==x(b.innerText)?b:null}}(),ib=function(a){if(!(a.hash===""||a.hash==="#"))return false;if(typeof i.ba=="boolean"&&i.ba)i.ba=["/"];else if(!i.ba)return true;for(var b,c=i.ba.length-1;c>=0;c--){b=null;var e=i.ba[c],d=e.indexOf("/");if(d!=0){b=e.slice(0,d);e=e.slice(d)}if(!b||a.host==b)if(e.charAt(e.length-1)=="#"){if(a.pathname.indexOf(e.slice(0,
-1))==0)return false}else if(a.pathname==e)return false}return true},ca=0,jb=function(){var a=(Tynt.e||"")+"ic.tynt.com/b/s";Tynt.sc=function(d){clearTimeout(c);ca=d.fl||0;var f=da;d=(d=d)||{};if(d.d===true){d=d;H(Tynt.o||{},d)}else{d=Tynt.i||window.tyntVariables||{};H(d,f);d=f;if(!d.ap&&typeof tyntAP!="undefined")d.ap=tyntAP;if(!d.as&&typeof tyntAS!="undefined")d.as=tyntAS}i={a:true,aw:8,cc:0,b:false,ap:"Read more:",as:"",st:false,su:true,w:false,f:false,ss:""};H(d,i);if(i.a==="0"||i.a===0)i.a=false;
if(i.cc>6)i.cc=0;if(i.aw<8)i.aw=8;if(i.su==="0"||i.su===0)i.su=false;if(!/^\w{1,15}$/.test(i.w||""))i.w=false;if(!/^[\w.]{5,}$/.test(i.f||""))i.f=false;if(ca>0){i.a=false;i.b=false}ca===0&&Tynt.m.push(hb);if(i.b)if(f=(f=location.href.match(/axzz([^?$]*)/))&&f.length==2?f[1]:null){if("#axzz"+ea(h.cookie,"tracerabg")!=location.hash){db(f);wa(2)}}else{f=ea(h.cookie,"tracerabg");a:{d=h.getElementsByTagName("script");for(var g=0;g<d.length;g++)if(/\/show_afs_search\.js/i.test(d[g].src)){d=true;break a}d=
false}if(!d&&ib(location)){Tynt.b=f||L(location.href);location.replace(location.href+"#axzz"+Tynt.b)}d=(f=Tynt.b)?864E5:-5E3;d=new Date(v()+d);h.cookie="tracerabg="+f+";path=/;expires="+d.toUTCString()}if(i.ss&&!cb.test(navigator.userAgent||navigator.vendor||window.opera)){if(X(n).position=="relative")n.style.position="static";Tynt.m.push(Ta);S(Ya)}if(Tynt.e||Math.random()<0.0010){f=["?is=",ca,"&id=",A,"&rt=",v()-e,"&ts=",v()];f=a+f.join("");r(f)}if(d=i.p)for(f=0;f<d.length;f++)typeof Ba[d[f]]===
"function"&&Ba[d[f]]()};var b=$a+aa+".js",c=setTimeout(function(){Tynt.sc({fl:1})},1E4),e=v();ma(b)},Ea=function(){var a=h.title.indexOf("#ixzz");if(a>-1)h.title=h.title.substring(0,a);a=h.title.indexOf("#axzz");if(a>-1)h.title=h.title.substring(0,a)},kb=function(){for(var a=0;a<Tynt.length;a++)if(Tynt[a]&&Tynt[a].length==22)return Tynt[a];return null},da=function(a){if(!a)return{};for(var b={},c=a.substring(a.indexOf("?")+1).split("&"),e=0;e<c.length;e++){var d=c[e].split("=");if(d[0].indexOf("amp;")==
0)d[0]=d[0].substring(4);b[d[0]]=d[1]}a=a.split("/");a.pop();b.scriptPathUri=a.join("/");return b}(function(){for(var a=h.getElementsByTagName("script"),b=0;b<a.length;b++)if(/\/tracer.*\?/i.test(a[b].src))return a[b].src;return null}()),aa=da.user||kb();if(!aa)throw Error("Error finding Tynt Insight userId. Please check your HTML for errors.");da.user&&Tynt.push(da.user);/tracer=test/.test(location.href)&&r(Za+"/script/verify/"+aa);(function(){if(/disableTracer=/.test(location.href)){var a=location.href.match(/disableTracer=([^?$]*)/)[1],
b=new Date;b.setDate(a&&a=="on"?b.getDate()+365:b.getDate()-2);R("disableTracer="+(a&&a=="on"?"y":"n"),"expires="+b.toUTCString());b=q("div",{id:"TyntLocalOptOut"},{zIndex:"10000",position:"absolute",top:"10%",left:"10%",width:"80%",height:"80%",backgroundColor:"white",color:"black",textAlign:"center",fontSize:"32px",paddingTop:"10%",border:"1px solid gray"});b.innerHTML="Tynt Insight has been turned "+(a&&a=="on"?"off":"on")+" in this browser.<br>You may close this window.";n.insertBefore(b,n.firstChild)}})();
if(!ua()){if(P){Ea();h.attachEvent("onpropertychange",Ea)}var fa=ha();Oa();jb()}};Tynt.TIL=function(){document.body?lb():setTimeout(Tynt.TIL,300)}})();Tynt.TIL()};