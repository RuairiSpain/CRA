// History Eraser for Google Chrome - HOTCLEANER.COM - Copyright (c) 2017 Vlad & Serge Strukoff. All Rights Reserved.
window.addEventListener("load",historyEraser,!1);
function historyEraser(){function C(a){function b(){l+=2;l<e.length?chrome.runtime.sendMessage(JSON.stringify({id:11,v:{startTime:e[l],endTime:e[l+1]}}),b):n(0)}n(1);a=g("tab");var d=a.getElementsByClassName("item"),c=a.getElementsByClassName("chk"),e=[],k=[],f,h,l=d.length-1,m=0;for(f=l;-1<l;l--)f=d[l],h=c[l],"none"==f.style.display?m&&(m=0,e.push(h.time-1)):h.checked?(k.push(f),m||(m=1,e.push(h.time-1))):m&&(m=0,e.push(h.time-1));for(f=0;f<k.length;f++)a.removeChild(k[f]);m&&e.push(h.time+1);l=
-2;b()}function D(a){a=this.checked;var b=g("tab");x(a,b.firstElementChild,b.lastElementChild);this.checked=!a}function x(a,b,d){if(b&&d){var c=b,e="item"+(a?" itemSel":"");b.index>d.index&&(c=d,d=b);for(;c&&c.index<=d.index;)"none"!=c.style.display&&(c.firstElementChild.firstElementChild.checked=a,c.className=e),c=c.nextElementSibling}}function E(){var a=g("tab"),b=a.getElementsByClassName("item"),a=a.getElementsByClassName("chk"),d,c,e,k;d=t.timeType;k=10==d?0:0==d?y:9==d?t.time:(new Date).getTime()-
36E5*[0,1,2,4,8,10,12,24,168][d];for(var f=0;f<b.length;f++)d=b[f],c=a[f],"none"!=d.style.display&&(e=c.time<k?!1:!0,c.checked=e,d.className="item"+(e?" itemSel":""))}function u(){var a=g("filter").value;if(v!=a){v=a;for(var b=g("tab").getElementsByClassName("hLink"),d,c,e=new RegExp(a,"i"),k=0;k<b.length;k++)d=b[k],c=1>a.length||d.textContent.match(e)?"":"none",d.parentElement.style.display=c}}function F(a){var b=this.parentElement.parentElement;a.shiftKey?(0>q&&(q=g("tab").firstElementChild),x(this.checked,
b,q)):b.className="item"+(this.checked?" itemSel":"");q=b}function G(a,b){function d(a){k=document.createElement("button");k.className=a;g.appendChild(k);k.addEventListener("click",H,!1)}var c,e,k,f,h,l,m,g=document.createElement("div");g.index=b;g.className="item";c=document.createElement("input");c.time=a.time;c.type="checkbox";c.checked=!1;c.className="chk histChk";c.addEventListener("click",F,!1);h=new Date(a.time);l=h.getMilliseconds();h=h.toTimeString().split(":");m=12>h[0]?"AM":"PM";h[2]=h[2].slice(0,
2);e=document.createElement("label");e.className="histLabel";e.appendChild(c);e.appendChild(document.createTextNode(h[0]+":"+h[1]+" "+m));e.title=h[0]+":"+h[1]+":"+h[2]+":"+l;g.appendChild(e);f=document.createElement("a");f.className="hLink elps";if(z)try{f.style.backgroundImage="url(chrome://favicon/"+a.url+")"}catch(n){f.style.backgroundImage="url(chrome://favicon/)"}else chrome.runtime.sendMessage('{"id":5,"v":"chrome://favicon/'+a.url+'"}',function(a){f.style.backgroundImage="url("+a+")"});f.href=
a.url;f.title="Transition type: "+a.transition;f.target="_blank";f.appendChild(document.createTextNode(a.label));g.appendChild(f);d("ginfo");d("bing");d("build");return g}function I(a){a.sort(function(a,b){return b.time-a.time});for(var b=document.createDocumentFragment(),d,c=0;c<a.length;c++)(d=G(a[c],c))&&b.appendChild(d);g("tab").appendChild(b);u();E();n(0)}function J(a){function b(b){for(var c=0;c<b.length;c++)k=b[c],k.visitTime>r&&k.visitTime<w&&(h={url:a[e].url,time:k.visitTime,label:a[e].title?
a[e].title:a[e].url,transition:k.transition},f.push(h));e++;d()}function d(){e<a.length?chrome.runtime.sendMessage(JSON.stringify({id:13,v:{url:a[e].url}}),b):I(f)}if(1>a.length){var c=chrome.i18n.getMessage("history").split(";");g("tab").innerHTML='<p style="margin:10px;">'+c[4]+"</p>";n(0)}else{var e=0,k,f=[],h;d()}}function A(){n(1);g("tab").innerHTML=v="";r=parseInt(g("timeInput").getAttribute("data-time"));w=r+864E5;chrome.runtime.sendMessage(JSON.stringify({id:10,v:{url:"https://www.hotcleaner.com/clear-browsing-history.html"}}),
function(){chrome.runtime.sendMessage(JSON.stringify({id:10,v:{url:chrome.runtime.getURL("history.html")}}),function(){chrome.runtime.sendMessage(JSON.stringify({id:12,v:{text:"",startTime:r,endTime:w,maxResults:9999}}),J)})})}function H(a){a=this.className;var b=this.parentElement.getElementsByClassName("hLink")[0].href,d;"ginfo"==a?d="http://www.google.com/webhp?#q="+B(b):"bing"==a?d="http://www.bing.com/search?q="+B(b):"build"==a&&(d="http://builtwith.com/?"+encodeURIComponent(b));chrome.runtime.sendMessage(JSON.stringify({id:9,
v:d}))}function B(a){var b=a.indexOf("://"),d=a.indexOf("/",b+3);return a.slice(b+3,d)}function n(a){g("shade").style.display=a?"block":"none"}function K(a){function b(){d<a.length?(g=a[d],c=new Date(g.time),f=c.getDay(),f!=k&&(0<d&&(p+="</div>"),p+='<div class="date"><b>&#9662;</b> '+q[f]+", "+r[c.getMonth()]+" "+c.getDate()+", "+c.getFullYear()+'</div><div class="items">'),k=f,e=c.getMilliseconds(),c=c.toTimeString().split(":"),h=12>c[0]?"AM":"PM",c[2]=c[2].slice(0,2),d++,chrome.runtime.sendMessage('{"id":5,"v1":1,"v":"chrome://favicon/'+
g.url+'"}',function(a){p+='<div class="item"><span class="time" title="'+(c[0]+":"+c[1]+":"+c[2]+":"+e)+'">'+(c[0]+":"+c[1]+" "+h)+'</span><a class="label" style="background-image: url('+a+')" href="'+g.url+'" title="'+g.url+'" target="_blank">'+g.label+"</a></div>";setTimeout(b,0)})):(p+='</div><div id="ftr"></div><div id="sidebar"><div class="box"><h1>Browsing History</h1><div>Date generated</div><small>'+(new Date).toLocaleString()+'</small></div><div class="hr"></div><div class="box"><h2>Connect</h2>&#9642; <a href="https://www.hotcleaner.com">Hotcleaner</a><br/>&#9642; <a href="https://www.hotcleaner.com/security-and-privacy-software-feedback.html" title="If you have any questions, ideas or suggestions, please feel free to contact us!">Support</a><br/>&#9642; <a href="http://www.facebook.com/sharer.php?u='+
m+'" title="Join us on Facebook">Facebook</a><br/>&#9642; <a href="http://twitter.com/intent/user?screen_name=clickclean" title="Follow us on Twitter">Twitter</a><br/>&#9642; <a href="https://plus.google.com/share?url='+m+'" title="Follow us on Google+">Google+</a><br/>&#9642; <a href="http://youtube.com/subscription_center?add_user=YTMoo" title="Subscribe to our YouTube channel">YouTube</a></div><div class="box"><h2>Creations</h2>&#9642; <a href="http://www.chromeactions.com/" title="A super new look and cool features for YouTube!">Magic Actions for YouTube</a><br/>&#9642; <a href="https://www.hotcleaner.com/" title="A powerful security &amp; privacy tool">Click&amp;Clean</a><br/>&#9642; <a href="https://www.hotcleaner.com/history-eraser-chrome-extension-app.html">History Eraser</a><br/>&#9642; <a href="https://www.hotcleaner.com/cookies.html" title="A powerful Cookie Editor for Google Chrome">Cookies App</a><br/>&#9642; <a href="http://www.cinetonic.com/" title="Search and watch online videos">Cinetonic</a><br/>&#9642; <a href="https://chrome.google.com/webstore/detail/country-flags/keifkkbjefbkgedeolmccljagcmphldp" title="Flags of all countries on a 3D globe">Country Flags</a><br/>&#9642; <a href="https://chrome.google.com/webstore/detail/satellite-finder/bgbokbdbcdfnjhifdlincngoohncfada" title="The fast amp; easy way to find a satellite!">Satellite Finder</a><br/>&#9642; <a href="https://chrome.google.com/webstore/detail/facepad/cgaknhmchnjaphondjciheacngggiclo" title="Looks, acts &amp; feels like you\'re using Facebook on your iPhone">Facepad</a></div></div></div></body></html>',
L(p),n(0))}a.sort(function(a,b){return b.time-a.time});var d=0,c,e,k,f,h,g,m=encodeURIComponent("https://www.hotcleaner.com"),p='<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>Browsing History</title><link rel="icon" type="image/png" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB9oDBwAVAJKzMZQAAAJoSURBVDjLlZI7aJVBEIW/3bv/TUxyiYZ0FhECAREMXFRisBa0S20aC1EbFXyAaGEhGHw0VrFId7UQRMFCm5AgiKISDKIEX2gRbIIajf9jd3bH4kajZaYbmDnMd+aY05fuHHFZ7XLN2gbrqJjSTwnxjHPOTvz65RtBwnr2yVzW6O7KJpwxpnclL7HWAJA04b2QEohEAFSVjg5Hve6wxgJQ+ZKe7nqvU1V8CNSsRSRRlBW7mwMcP7iXLbsPs/h8im/LK0zdfsSTuc9s6OzAOUtMCVXFqULwCbGJnysl54/tY2R4EICyamNt6u3h1KH9PJ3/wMXrD2j0dKIJVMGqKkEieR4YbQ4wMjxIiPIfbxUCIQojw4OMNgfI80CQiKq2BUoRlouC8bFRfBC8b7Nb2+ZNUfE+4oMwPjbKclFQiqwJSIj4wtPf1yCvAl4iokq9njH9+BXULCEm8irQ39fAFx4JqxckBR8CXoTSB6JEJETyvOLGxBGOnp9i+tE8BkOUSOnbsz4E0h8PvCTUWN68WwRVRCJFUbFnx1aunD3AuSstogio8ubdImpse+cvgo84LJOtGTAGUaX0wo+8ZFdziIetC/iYwBgmWzM4LOL/MdGnSLKJ+YUvTN6cJXM1rLUkUapSEEkATN6cZX7hC8kmfIprORCfsFkNZzJu3XvBs5cfGR8bYdvQZgBev12kdfcp7z99pZ5lJAEJCVVoJ1EEDBgDNjO8/bzE2av3kdU8uJojcwaX1YgmIQJ+9Y1OVec2NjqbS99zzL/pMeCc+9sGUYK0BRXo39iFqs45VT2xa/uWa8BO1lfPVfXkbymMk1S9jJaDAAAAAElFTkSuQmCC"><style>*{margin:0;padding:0}html,body{height:100%;_overflow-x:hidden}body{font:400 13px/1.3 \'Segoe UI\',Tahoma,Helvetica,\'Helvetica Neue\',Arial,sans-serif;color:#303942;background-color:#fff;cursor:default;overflow-x:hidden}h1,h2{color:#000;font-weight:400;margin-bottom:10px}h1{font-size:20px}h2{font-size:16px}a{text-decoration:none}a:hover{text-decoration:underline}.box a{color:#E80000}#page{height:100%;padding:0 20px;border-left:200px solid #f3f3f3}.date{font-size:22px;padding:16px 0;-webkit-user-select:none;-moz-user-select:none;user-select:none;-ms-user-select:none}.items{border-bottom:1px solid #c0c4c9;overflow:hidden;-webkit-transition:.2s;-moz-transition:.2s;-o-transition:.2s;-ms-transition:.2s}.item{position:relative;padding:6px 0;border-bottom: 1px solid #eaeef3;overflow:hidden}.time{position:absolute;left:4px;top:6px;color:#909499;white-space:nowrap}.label{display:inline-block;padding:0 4px 0 100px;background-position:78px 0;background-repeat:no-repeat}#ftr{height:72px}#sidebar{position:fixed;_position:absolute;left:0;top:0;width:199px;height:100%;line-height:20px;font-size:13px;color:#696969;background-color:#f3f3f3;border-right:1px solid #e3e3e3}.box{margin:15px 15px 18px}#tgen{margin-top:-2px}.hr{margin:15px;border-top:1px solid #d9d9d9}</style><script type="text/javascript">window.onload=function(){for(var c=document.getElementById("page").childNodes,b=0,a;a=c[b];b++)1==a.nodeType&&"date"==a.className&&(a.nextSibling.style.height="0px",a.onclick=function(){var a=this.nextSibling;a.style.height=12<a.offsetHeight?"0px":a.scrollHeight+"px"})};\x3c/script></head><body><div id="page">',
q=chrome.i18n.getMessage("days").split(";"),r=chrome.i18n.getMessage("months").split(";");b()}function M(a){function b(b){for(var c=0;c<b.length;c++)k=b[c],h={url:a[e].url,time:k.visitTime,label:a[e].title?a[e].title:a[e].url},f.push(h);e++;d()}function d(){e<a.length?chrome.runtime.sendMessage(JSON.stringify({id:13,v:{url:a[e].url}}),b):K(f)}if(1>a.length){var c=chrome.i18n.getMessage("history").split(";");g("tab").innerHTML='<p style="margin:10px;">'+c[4]+"</p>";n(0)}else{var e=0,k,f=[],h;d()}}
function N(){n(1);chrome.runtime.sendMessage(JSON.stringify({id:12,v:{text:"",startTime:0,endTime:(new Date).getTime(),maxResults:99999}}),M)}function L(a){var b;Blob?b=new Blob([a],{type:"text/html;charset=UTF-8"}):BlobBuilder&&(b=new BlobBuilder,b.append(a),b=b.getBlob("text/html;charset=UTF-8"));O(b,"history.html")}function O(a,b){var d=document.createElement("a"),c=window.webkitURL||window.URL;d.href=c.createObjectURL(a);d.setAttribute("download",b);d.click();setTimeout(function(){c.revokeObjectURL(d.href)},
2E3)}function g(a){return document.getElementById(a)}var v,y,r,w,z=0,q=-1,t;chrome.runtime.sendMessage('{"id":1}',function(a){var b=a.u;0!=b.indexOf("https://www.hotcleaner.com/")&&0!=b.indexOf("http://www.hotcleaner.com/")&&(b.indexOf(0==chrome.runtime.getURL(""))?z=1:document.location.href="about:blank");t=a.v;y=a.t;a=g("timeInput");b=chrome.i18n.getMessage("history").split(";");calInit(a,0,0,A);a=g("refresh");a.title=b[1];a.addEventListener("click",A,!1);a=g("selAll");a.checked=!1;a.title=b[2];
a.addEventListener("click",D,!1);a=g("delSel");a.title=b[3];a.addEventListener("click",C,!1);a=g("filter");a.placeholder=b[0];a.addEventListener("change",u,!1);a.addEventListener("keyup",u,!1);a=g("save");a.title=b[5];a.addEventListener("click",N,!1)})};