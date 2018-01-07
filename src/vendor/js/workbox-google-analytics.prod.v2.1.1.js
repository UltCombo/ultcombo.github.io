/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

this.workbox = this.workbox || {};
this.workbox.googleAnalytics = (function () {
'use strict';

var constants = {CACHE_NAME:'offline-google-analytics',IDB:{NAME:'offline-google-analytics',STORE:'urls',VERSION:1},MAX_ANALYTICS_BATCH_SIZE:20,STOP_RETRYING_AFTER:172800000,URL:{ANALYTICS_JS_PATH:'/analytics.js',COLLECT_PATH:'/collect',HOST:'www.google-analytics.com'}};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var idb=createCommonjsModule(function(a){'use strict';(function(){function b(a){return Array.prototype.slice.call(a)}function c(a){return new Promise(function(b,c){a.onsuccess=function(){b(a.result);},a.onerror=function(){c(a.error);};})}function d(a,b,d){var e,f=new Promise(function(f,g){e=a[b].apply(a,d),c(e).then(f,g);});return f.request=e,f}function e(a,b,c){var e=d(a,b,c);return e.then(function(a){return a?new k(a,e.request):void 0})}function f(a,b,c){c.forEach(function(c){Object.defineProperty(a.prototype,c,{get:function(){return this[b][c]},set:function(a){this[b][c]=a;}});});}function g(a,b,c,e){e.forEach(function(e){e in c.prototype&&(a.prototype[e]=function(){return d(this[b],e,arguments)});});}function h(a,b,c,d){d.forEach(function(d){d in c.prototype&&(a.prototype[d]=function(){return this[b][d].apply(this[b],arguments)});});}function i(a,b,c,d){d.forEach(function(d){d in c.prototype&&(a.prototype[d]=function(){return e(this[b],d,arguments)});});}function j(a){this._index=a;}function k(a,b){this._cursor=a,this._request=b;}function l(a){this._store=a;}function m(a){this._tx=a,this.complete=new Promise(function(b,c){a.oncomplete=function(){b();},a.onerror=function(){c(a.error);},a.onabort=function(){c(a.error);};});}function n(a,b,c){this._db=a,this.oldVersion=b,this.transaction=new m(c);}function o(a){this._db=a;}f(j,'_index',['name','keyPath','multiEntry','unique']),g(j,'_index',IDBIndex,['get','getKey','getAll','getAllKeys','count']),i(j,'_index',IDBIndex,['openCursor','openKeyCursor']),f(k,'_cursor',['direction','key','primaryKey','value']),g(k,'_cursor',IDBCursor,['update','delete']),['advance','continue','continuePrimaryKey'].forEach(function(a){a in IDBCursor.prototype&&(k.prototype[a]=function(){var b=this,d=arguments;return Promise.resolve().then(function(){return b._cursor[a].apply(b._cursor,d),c(b._request).then(function(a){return a?new k(a,b._request):void 0})})});}),l.prototype.createIndex=function(){return new j(this._store.createIndex.apply(this._store,arguments))},l.prototype.index=function(){return new j(this._store.index.apply(this._store,arguments))},f(l,'_store',['name','keyPath','indexNames','autoIncrement']),g(l,'_store',IDBObjectStore,['put','add','delete','clear','get','getAll','getKey','getAllKeys','count']),i(l,'_store',IDBObjectStore,['openCursor','openKeyCursor']),h(l,'_store',IDBObjectStore,['deleteIndex']),m.prototype.objectStore=function(){return new l(this._tx.objectStore.apply(this._tx,arguments))},f(m,'_tx',['objectStoreNames','mode']),h(m,'_tx',IDBTransaction,['abort']),n.prototype.createObjectStore=function(){return new l(this._db.createObjectStore.apply(this._db,arguments))},f(n,'_db',['name','version','objectStoreNames']),h(n,'_db',IDBDatabase,['deleteObjectStore','close']),o.prototype.transaction=function(){return new m(this._db.transaction.apply(this._db,arguments))},f(o,'_db',['name','version','objectStoreNames']),h(o,'_db',IDBDatabase,['close']),['openCursor','openKeyCursor'].forEach(function(a){[l,j].forEach(function(c){c.prototype[a.replace('open','iterate')]=function(){var c=b(arguments),d=c[c.length-1],e=this._store||this._index,f=e[a].apply(e,c.slice(0,-1));f.onsuccess=function(){d(f.result);};};});}),[j,l].forEach(function(a){a.prototype.getAll||(a.prototype.getAll=function(a,b){var c=this,d=[];return new Promise(function(e){c.iterateCursor(a,function(a){return a?(d.push(a.value),void 0!==b&&d.length==b?void e(d):void a.continue()):void e(d)});})});});var p={open:function(a,b,c){var e=d(indexedDB,'open',[a,b]),f=e.request;return f.onupgradeneeded=function(a){c&&c(new n(f.result,a.oldVersion,f.transaction));},e.then(function(a){return new o(a)})},delete:function(a){return d(indexedDB,'deleteDatabase',[a])}};a.exports=p,a.exports.default=a.exports;})();});

class IDBHelper{constructor(a,b,c){if(a==void 0||b==void 0||c==void 0)throw Error('name, version, storeName must be passed to the constructor.');this._name=a,this._version=b,this._storeName=c;}_getDb(){return this._dbPromise?this._dbPromise:(this._dbPromise=idb.open(this._name,this._version,(a)=>{a.createObjectStore(this._storeName);}).then((a)=>a),this._dbPromise)}close(){return this._dbPromise?this._dbPromise.then((a)=>{a.close(),this._dbPromise=null;}):void 0}put(a,b){return this._getDb().then((c)=>{const d=c.transaction(this._storeName,'readwrite'),e=d.objectStore(this._storeName);return e.put(b,a),d.complete})}delete(a){return this._getDb().then((b)=>{const c=b.transaction(this._storeName,'readwrite'),d=c.objectStore(this._storeName);return d.delete(a),c.complete})}get(a){return this._getDb().then((b)=>b.transaction(this._storeName).objectStore(this._storeName).get(a))}getAllValues(){return this._getDb().then((a)=>a.transaction(this._storeName).objectStore(this._storeName).getAll())}getAllKeys(){return this._getDb().then((a)=>a.transaction(this._storeName).objectStore(this._storeName).getAllKeys())}}

const idbHelper=new IDBHelper(constants.IDB.NAME,constants.IDB.VERSION,constants.IDB.STORE);var enqueueRequest = ((a,b)=>{const c=new URL(a.url);return a.text().then((a)=>(a&&(c.search=a),idbHelper.put(c.toString(),b||Date.now())))});

class LogGroup{constructor(){this._logs=[],this._childGroups=[],this._isFallbackMode=!1;const a=/Firefox\/(\d*)\.\d*/.exec(navigator.userAgent);if(a)try{const b=parseInt(a[1],10);55>b&&(this._isFallbackMode=!0);}catch(a){this._isFallbackMode=!0;}/Edge\/\d*\.\d*/.exec(navigator.userAgent)&&(this._isFallbackMode=!0);}addPrimaryLog(a){this._primaryLog=a;}addLog(a){this._logs.push(a);}addChildGroup(a){0===a._logs.length||this._childGroups.push(a);}print(){return 0===this._logs.length&&0===this._childGroups.length?void this._printLogDetails(this._primaryLog):void(this._primaryLog&&(this._isFallbackMode?this._printLogDetails(this._primaryLog):console.groupCollapsed(...this._getLogContent(this._primaryLog))),this._logs.forEach((a)=>{this._printLogDetails(a);}),this._childGroups.forEach((a)=>{a.print();}),this._primaryLog&&!this._isFallbackMode&&console.groupEnd())}_printLogDetails(a){const b=a.logFunc?a.logFunc:console.log;b(...this._getLogContent(a));}_getLogContent(a){let b=a.message;this._isFallbackMode&&'string'==typeof b&&(b=b.replace(/%c/g,''));let c=[b];return!this._isFallbackMode&&a.colors&&(c=c.concat(a.colors)),a.args&&(c=c.concat(a.args)),c}}

function isDevBuild(){return`dev`==`prod`}

self.workbox=self.workbox||{},self.workbox.LOG_LEVEL=self.workbox.LOG_LEVEL||{none:-1,verbose:0,debug:1,warn:2,error:3};const LIGHT_GREY=`#bdc3c7`; const DARK_GREY=`#7f8c8d`; const LIGHT_GREEN=`#2ecc71`; const LIGHT_YELLOW=`#f1c40f`; const LIGHT_RED=`#e74c3c`; const LIGHT_BLUE=`#3498db`;class LogHelper{constructor(){this._defaultLogLevel=isDevBuild()?self.workbox.LOG_LEVEL.debug:self.workbox.LOG_LEVEL.warn;}log(a){this._printMessage(self.workbox.LOG_LEVEL.verbose,a);}debug(a){this._printMessage(self.workbox.LOG_LEVEL.debug,a);}warn(a){this._printMessage(self.workbox.LOG_LEVEL.warn,a);}error(a){this._printMessage(self.workbox.LOG_LEVEL.error,a);}_printMessage(a,b){if(this._shouldLogMessage(a,b)){const c=this._getAllLogGroups(a,b);c.print();}}_getAllLogGroups(a,b){const c=new LogGroup,d=this._getPrimaryMessageDetails(a,b);if(c.addPrimaryLog(d),b.error){const a={message:b.error,logFunc:console.error};c.addLog(a);}const e=new LogGroup;if(b.that&&b.that.constructor&&b.that.constructor.name){const a=b.that.constructor.name;e.addLog(this._getKeyValueDetails('class',a));}return b.data&&('object'!=typeof b.data||b.data instanceof Array?e.addLog(this._getKeyValueDetails('additionalData',b.data)):Object.keys(b.data).forEach((a)=>{e.addLog(this._getKeyValueDetails(a,b.data[a]));})),c.addChildGroup(e),c}_getKeyValueDetails(a,b){return{message:`%c${a}: `,colors:[`color: ${LIGHT_BLUE}`],args:b}}_getPrimaryMessageDetails(a,b){let c,d;a===self.workbox.LOG_LEVEL.verbose?(c='Info',d=LIGHT_GREY):a===self.workbox.LOG_LEVEL.debug?(c='Debug',d=LIGHT_GREEN):a===self.workbox.LOG_LEVEL.warn?(c='Warn',d=LIGHT_YELLOW):a===self.workbox.LOG_LEVEL.error?(c='Error',d=LIGHT_RED):void 0;let e=`%c🔧 %c[${c}]`;const f=[`color: ${LIGHT_GREY}`,`color: ${d}`];let g;return'string'==typeof b?g=b:b.message&&(g=b.message),g&&(g=g.replace(/\s+/g,' '),e+=`%c ${g}`,f.push(`color: ${DARK_GREY}; font-weight: normal`)),{message:e,colors:f}}_shouldLogMessage(a,b){if(!b)return!1;let c=this._defaultLogLevel;return self&&self.workbox&&'number'==typeof self.workbox.logLevel&&(c=self.workbox.logLevel),c===self.workbox.LOG_LEVEL.none||a<c?!1:!0}}var logHelper = new LogHelper;

const idbHelper$1=new IDBHelper(constants.IDB.NAME,constants.IDB.VERSION,constants.IDB.STORE);var replayQueuedRequests = ((a)=>(a=a||{},idbHelper$1.getAllKeys().then((b)=>Promise.all(b.map((b)=>idbHelper$1.get(b).then((c)=>{const d=Date.now()-c,e=new URL(b);if(d>constants.STOP_RETRYING_AFTER)return;if(!('searchParams'in e))return;let f=a.parameterOverrides||{};f.qt=d,Object.keys(f).sort().forEach((a)=>{e.searchParams.set(a,f[a]);});let g=a.hitFilter;if('function'==typeof g)try{g(e.searchParams);}catch(a){return}return fetch(e.toString())}).then(()=>idbHelper$1.delete(b)))))));

const initialize=(a)=>{a=a||{};let b=!1;self.addEventListener('fetch',(c)=>{const d=new URL(c.request.url),e=c.request;if(d.hostname===constants.URL.HOST)if(d.pathname===constants.URL.COLLECT_PATH){const d=e.clone();c.respondWith(fetch(e).then((c)=>(b&&replayQueuedRequests(a),b=!1,c),()=>(logHelper.log('Enqueuing failed request...'),b=!0,enqueueRequest(d).then(()=>Response.error()))));}else d.pathname===constants.URL.ANALYTICS_JS_PATH&&c.respondWith(caches.open(constants.CACHE_NAME).then((a)=>fetch(e).then((b)=>a.put(e,b.clone()).then(()=>b)).catch((b)=>(logHelper.error(b),a.match(e)))));}),replayQueuedRequests(a);};var index = {initialize};

return index;

}());
//# sourceMappingURL=workbox-google-analytics.prod.v2.1.1.js.map
