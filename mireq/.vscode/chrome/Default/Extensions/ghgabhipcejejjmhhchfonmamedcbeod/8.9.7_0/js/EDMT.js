// Click&Clean for Google Chrome - HOTCLEANER.COM - Copyright (c) 2017 Vlad & Serge Strukoff. All Rights Reserved.
(function(){function E(b){p(1);F(b);u=chrome.i18n.getMessage("cache").split(";");G();chrome.runtime.sendMessage(JSON.stringify({id:15,v:"0078"}),function(b){b=200==b.code&&b.data||0;0==b?(A(),p(0)):(a=b.split("\n"),C(),q(1))})}function H(){p(1);A();chrome.runtime.sendMessage(JSON.stringify({id:15,v:"0078"}),function(b){b=200==b.code&&b.data||0;0==b?p(0):(a=b.split("\n"),C(),q(1))})}function I(b){b=this.parentElement.getAttribute("data-key");chrome.runtime.sendMessage(JSON.stringify({id:9,v:b}))}function J(b){b=
this.parentElement.parentElement.getAttribute("data-key");chrome.runtime.sendMessage(JSON.stringify({id:9,v:"chrome://view-http-cache/"+b}))}function K(){p(1);chrome.runtime.sendMessage(JSON.stringify({id:19,v:{since:-1},v2:{cache:!0}}),function(){A();p(0)})}function L(b){chrome.runtime.sendMessage(JSON.stringify({id:15,v:"0079",v2:this.getAttribute("fname")}),function(b){})}function M(){0<l&&(l--,c=x[l],q(0))}function N(){c<a.length&&(l++,x[l]=c,q(0))}function C(){for(var b,d={image:"jpg jpeg gif png ico webp svg bmp".split(" "),
video:"mp4 mp4v m4v m4s ogv ogm webm mov avi mpeg mpg 3gp flv m1v m2v m4e mkv swf".split(" "),audio:"m4a ogg mp3 oga wav amr flac".split(" "),text:"txt xml htm html js json css".split(" ")},e,c=[" ","?","#"],h,f,k=0,g=a.length;k<g;k+=4)if(b=a[k+1],0==b)for(name in b=a[k]+" ",d){e=d[name];for(var l=f=0,p=e.length;l<p;l++){h=e[l];for(var B=0,u=c.length;B<u;B++)if(f=c[B],f=b.indexOf("."+h+f),0<f){"js"==h&&(h="javascript");a[k+1]=name+"/"+h;break}if(0<f)break}if(0<f)break}}function y(b,a,e,c,h){var d=
document.createElement("div"),k=document.createElement("div"),g=document.createElement("div"),m=document.createElement("div"),l=document.createElement("div"),p=document.createElement("div");d.className="item";d.setAttribute("data-ct",e);d.setAttribute("data-b",h);g.className="iftr";m.className="ibtn idat";l.className="ibtn iexp";p.className="iinf";d.setAttribute("data-key",a);m.title=u[13];d.appendChild(k);d.appendChild(g);d.appendChild(p);"0"!=c&&(l.setAttribute("fname",c),g.appendChild(l),l.title=
u[14],l.addEventListener("click",L,!1));g.appendChild(m);g.appendChild(document.createTextNode(O(a)));if(-1<e.search(/image/)&&1048577>h){var t=new Image,v,r,q,n;t.onload=function(){v=this.width;r=this.height;0<v&&0<r?(1024>v&&1024>r?(176<v||110<r?1.6<v/r?(n=parseInt(176*r/v),q=176,this.style.marginTop=parseInt((110-n)/2)+"px"):(q=parseInt(110*v/r),n=110):(q=v,n=r,this.style.marginTop=parseInt((110-r)/2)+"px"),this.style.width=q+"px",this.style.height=n+"px",k.className="iimg",k.appendChild(t)):(k.className=
"itxt",k.textContent=e),p.textContent=v+"x"+r+" "+w(h)):(k.className="itxt",k.textContent=e,p.textContent=w(h))};t.src=a}else k.className="itxt",k.textContent=e,p.textContent=w(h);k.addEventListener("click",I,!1);m.addEventListener("click",J,!1);b.appendChild(d)}function q(b){p(1);var d=g("search").value,e=z.getAttribute("data-ct"),m=document.createDocumentFragment(),h;if(1>d.length)if("/"==e)for(h=0;c<a.length&&(y(m,a[c],a[c+1],a[c+2],a[c+3]),h++,c+=4,60!=h););else{h=0;for(var f;c<a.length&&(f=a[c+
1],-1<f.indexOf(e)&&(y(m,a[c],a[c+1],a[c+2],a[c+3]),h++),c+=4,60!=h););}else if("/"==e)for(h=0;c<a.length&&(f=a[c],-1<f.indexOf(d)&&(y(m,a[c],a[c+1],a[c+2],a[c+3]),h++),c+=4,60!=h););else{h=0;for(var k;c<a.length&&(f=a[c],k=a[c+1],-1<f.indexOf(d)&&-1<k.indexOf(e)&&(y(m,a[c],a[c+1],a[c+2],a[c+3]),h++),c+=4,60!=h););}g("content").textContent="";g("content").appendChild(m);if(b)if(1>d.length)if("/"==e){e=d=0;for(b=3;b<a.length;b+=4)e+=parseInt(a[b]),d++;t=d+" items / "+w(e)}else{for(f=m=d=0;f<a.length;f+=
4)b=a[f+1],-1<b.indexOf(e)&&(m+=parseInt(a[f+3]),d++);t=d+" items / "+w(m)}else if("/"==e){for(f=m=e=0;f<a.length;f+=4)b=a[f],cont=a[f+1],-1<b.indexOf(d)&&(m+=parseInt(a[f+3]),e++);t=e+" items / "+w(m)}else{for(var n=k=b=0;n<a.length;n+=4)m=a[n],f=a[n+1],-1<m.indexOf(d)&&-1<f.indexOf(e)&&(k+=parseInt(a[n+3]),b++);t=b+" items / "+w(k)}d=60*l;e=d+h;g("info").textContent=d+"-"+e+" of "+t;g("prev").style.opacity=1>d?.5:1;g("next").style.opacity=e==parseInt(t)?.5:1;g("info2").textContent=l+1;g("tab").scrollTop=
0;p(0)}function A(){l=c=0;x=[0];a=[];g("info").textContent="0 items / 0 MB";g("info2").textContent="-";g("content").textContent=u[15];g("next").style.opacity=g("prev").style.opacity=.5}function D(){l=c=0;x=[0];this.hasAttribute("data-ct")&&(z.className="btn nav",this.className="btn nav on",z=this);q(1)}function w(b){return 1048577>b?(b/1024).toFixed(1)+"KB":(b/1048576).toFixed(1)+"MB"}function p(b){g("shade").style.display=b?"block":"none";g("clear").firstElementChild.src=b?"i/wipe.gif":"i/del1.png"}
function G(){function b(b,c){a.addEventListener("click",c,!1);a.title=u[b];a=a.nextElementSibling}var a;z=a=g("hdr").firstElementChild;for(var c=0;7>c;c++)b(c,D);b(7,H);b(8,K);a.addEventListener("keyup",D,!1);a.setAttribute("placeholder",u[9]);a=g("prev");b(10,M);a.title=u[11];a=a.nextElementSibling;b(12,N)}function O(b){var a=b.indexOf(":")+3,c=b.indexOf("/",a);return b.slice(a,c)}function F(b){for(var a=[chrome.runtime.getURL(""),"https://www.hotcleaner.com/","http://www.hotcleaner.com/","https://hotcleaner.com/",
"http://hotcleaner.com/"],c=0,g=a.length;c<g;c++)if(0==b.indexOf(a[c]))return;document.location.href="about:blank"}function g(a){return document.getElementById(a)}var a,c=0,x=[0],l=0,t,z,u;if("chrome"in window){var n=Object.getOwnPropertyDescriptor(chrome,"management");if(n){n.value={};n.configurable=!1;n.writable=!1;try{Object.defineProperty(chrome,"management",n)}catch(b){}}}window.addEventListener("DOMContentLoaded",function(){chrome.runtime.sendMessage(JSON.stringify({id:2}),E)},!1)})();
