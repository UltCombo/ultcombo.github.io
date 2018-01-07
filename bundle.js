(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=1)})([function(a,b){'use strict';b.a=(...a)=>fetch(...a).then((a)=>a.json())},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(2),e=c(6),f=c(7),g=c(9),h=c(10),i=c(11),j=c(13),k=c(14);(async()=>{const{reputation:a,badgeCounts:{gold:b,silver:c,bronze:g}}=await Object(d.c)(1331430);Object(e.a)({"#stackoverflow-reputation-value":Object(f.a)(a),"#stackoverflow-gold-badges-count":Object(f.a)(b),"#stackoverflow-silver-badges-count":Object(f.a)(c),"#stackoverflow-bronze-badges-count":Object(f.a)(g)})})(),(async()=>{const{ownRepos:a,forks:b,followers:c,stargazers:g}=await Object(d.a)('UltCombo');Object(e.a)({"#own-repos-count":Object(f.a)(a),"#forks-count":Object(f.a)(b),"#followers-count":Object(f.a)(c),"#stargazers-count":Object(f.a)(g)})})(),(async()=>{const a=['glob-manipulate','globby','gulp-buster','gulp-src-ordered-globs','gulp-watch','harmonic','harmonic-theme-default','harmonic-theme-jsrocks','innerator','slush-es20xx','traceuroso','ultflow','uri-path'],b=await Object(d.b)(a),c=new Intl.NumberFormat;Object(e.a)({"#packages-count":c.format(a.length),"#downloads-count":c.format(b)})})(),(async()=>{await Promise.all([Object(g.a)(2400),Object(h.a)('.projects')]),Object(i.a)('#termynal')})(),Object(j.a)(document.querySelectorAll('a')),Object(k.a)('/sw.js')},function(a,b,c){'use strict';var d=c(3);c.d(b,'c',function(){return d.a});var e=c(4);c.d(b,'a',function(){return e.a});var f=c(5);c.d(b,'b',function(){return f.a})},function(a,b,c){'use strict';b.a=async function(a){const b=await e(`/2.2/users/${a}?site=stackoverflow&filter=!)scY2t2ZXiZikVLZ1Zie`),c=b.items[0],{reputation:d,badge_counts:f}=c;return{reputation:d,badgeCounts:f}};var d=c(0);const e=(a)=>Object(d.a)(`${'https://api.stackexchange.com'}${a}`)},function(a,b,c){'use strict';b.a=async function(a){const{data:{user:{ownRepos:{totalCount:b},forks:{totalCount:c},followers:{totalCount:d},repositories:{edges:g}}}}=await f(e,{login:a});return{ownRepos:b,forks:c,followers:d,stargazers:g.reduce((a,b)=>a+b.node.stargazers.totalCount,0)}};var d=c(0);const e=`
  query($login: String!) {
    user(login: $login) {
      ownRepos: repositories(isFork: false) {
        totalCount
      }
      forks: repositories(isFork: true) {
        totalCount
      }
      followers {
        totalCount
      }
      repositories(first: 100, orderBy: { field: STARGAZERS, direction: DESC }) {
        edges {
          node {
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`,f=(a,b)=>Object(d.a)('https://api.github.com/graphql',{method:'POST',headers:{Authorization:`bearer ${'d5983dc8314b6b35fedc8f8a10f49980fd06a72a'}`},body:JSON.stringify({query:a,variables:b})})},function(a,b,c){'use strict';b.a=async function(a){const b=await Promise.all(a.map((a)=>e(`/downloads/point/2000-01-01:3000-01-01/${a}`)));return b.reduce((a,b)=>a+b.downloads,0)};var d=c(0);const e=(a)=>Object(d.a)(`${'https://api.npmjs.org'}${a}`)},function(a,b){'use strict';b.a=function(a){for(const[b,c]of Object.entries(a))document.querySelector(b).textContent=c}},function(a,b,c){'use strict';var d=c(8),e=c.n(d);b.a=(a)=>(e()(a)+'').toLowerCase()},function(a){(function(b,c){a.exports=c()})(this,function(){'use strict';return function(a){var b=Math.abs;if('number'!=typeof a)throw new TypeError('Expected a number');if(1e19<a)throw new RangeError('Input expected to be < 1e19');if(-1e19>a)throw new RangeError('Input expected to be > 1e19');if(1e3>b(a))return a;var c,d,e,f=0>a?'-':'',g={K:6,M:9,B:12,T:16};for(var h in a=b(a),e=a.toString().length,d=0==e%3?e-3:e-e%3,c=Math.round(10*(a/Math.pow(10,d)))/10,g)if(d<g[h]){c+=h;break}return f+c}})},function(a,b){'use strict';b.a=(a)=>new Promise((b)=>setTimeout(b,a))},function(a,b){'use strict';b.a=function(a){return new Promise((b)=>{const c=new IntersectionObserver((a)=>{a[0].isIntersecting&&(c.disconnect(),b())},{rootMargin:'0px 0px -100px 0px'});c.observe(document.querySelector(a))})}},function(a,b,c){'use strict';var d=c(12);b.a=(a)=>new d.a(a,{startDelay:0,typeDelay:50,lineDelay:650})},function(a,b,c){'use strict';function h(d){if(Array.isArray(d)){for(var a=0,b=Array(d.length);a<d.length;a++)b[a]=d[a];return b}return Array.from(d)}function d(c,a){if(!(c instanceof a))throw new TypeError('Cannot call a class as a function')}c.d(b,'a',function(){return f});var e=function(){function e(a,b){for(var c,e=0;e<b.length;e++)c=b[e],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(a,b,c){return b&&e(a.prototype,b),c&&e(a,c),a}}(),f=function(){function f(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:'#termynal',e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};d(this,f),this.container='string'==typeof a?document.querySelector(a):a,this.pfx='data-'+(e.prefix||'ty'),this.startDelay=null==e.startDelay?parseFloat(this.container.getAttribute(this.pfx+'-startDelay'))||600:e.startDelay,this.typeDelay=null==e.typeDelay?parseFloat(this.container.getAttribute(this.pfx+'-typeDelay'))||90:e.typeDelay,this.lineDelay=null==e.lineDelay?parseFloat(this.container.getAttribute(this.pfx+'-lineDelay'))||1500:e.lineDelay,this.progressLength=e.progressLength||parseFloat(this.container.getAttribute(this.pfx+'-progressLength'))||40,this.progressChar=e.progressChar||this.container.getAttribute(this.pfx+'-progressChar')||'\u2588',this.cursor=e.cursor||this.container.getAttribute(this.pfx+'-cursor')||'\u258B',e.noInit||this.init()}return e(f,[{key:'init',value:function(){this.lines=[].concat(h(this.container.querySelectorAll('['+this.pfx+']')));var a=getComputedStyle(this.container);this.container.style.width=a.width,this.container.style.minHeight=a.height,this.container.setAttribute('data-termynal',''),this.container.innerHTML='',this.start()}},{key:'start',value:async function(){await this._wait(this.startDelay);var a,g=!0,h=!1;try{for(var i,c=this.lines[Symbol.iterator]();!(g=(i=c.next()).done);g=!0){var b=i.value,d=b.getAttribute(this.pfx),e=b.getAttribute(this.pfx+'-delay')||this.lineDelay;'input'==d?(b.setAttribute(this.pfx+'-cursor',this.cursor),await this.type(b),await this._wait(e)):'progress'==d?(await this.progress(b),await this._wait(e)):(this.container.appendChild(b),await this._wait(e)),b.removeAttribute(this.pfx+'-cursor')}}catch(b){h=!0,a=b}finally{try{!g&&c.return&&c.return()}finally{if(h)throw a}}}},{key:'type',value:async function(a){var b=[].concat(h(a.textContent)),c=a.getAttribute(this.pfx+'-typeDelay')||this.typeDelay;a.textContent='',this.container.appendChild(a);var d,i=!0,j=!1;try{for(var k,f,g=b[Symbol.iterator]();!(i=(k=g.next()).done);i=!0)f=k.value,await this._wait(c),a.textContent+=f}catch(a){j=!0,d=a}finally{try{!i&&g.return&&g.return()}finally{if(j)throw d}}}},{key:'progress',value:async function(a){var b=a.getAttribute(this.pfx+'-progressLength')||this.progressLength,c=a.getAttribute(this.pfx+'-progressChar')||this.progressChar,d=c.repeat(b);a.textContent='',this.container.appendChild(a);for(var e=1;e<d.length+1;e++){await this._wait(this.typeDelay);var f=Math.round(100*(e/d.length));a.textContent=d.slice(0,e)+' '+f+'%'}}},{key:'_wait',value:function(a){return new Promise(function(b){return setTimeout(b,a)})}}]),f}();if(document.currentScript.hasAttribute('data-termynal-container')){var g=document.currentScript.getAttribute('data-termynal-container');g.split('|').forEach(function(b){return new f(b)})}},function(a,b){'use strict';b.a=function(a){for(const b of Array.from(a))b.addEventListener('click',()=>c('link','click',b.href))};const c=(a,b,c)=>ga('send','event',a,b,c,{transport:'beacon'})},function(a,b){'use strict';b.a=function(a){c()&&d()&&navigator.serviceWorker.register(a)};const c=()=>!!navigator.serviceWorker,d=()=>!1===new URLSearchParams(location.search).has('disable-sw')}]);