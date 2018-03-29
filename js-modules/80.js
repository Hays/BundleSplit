__d(function(t,e,r,o,n){!(function(t){'use strict';if(!t.fetch){var e={searchParams:'URLSearchParams'in t,iterable:'Symbol'in t&&'iterator'in Symbol,blob:'FileReader'in t&&'Blob'in t&&(function(){try{return new Blob,!0}catch(t){return!1}})(),formData:'FormData'in t,arrayBuffer:'ArrayBuffer'in t};if(e.arrayBuffer)var r=['[object Int8Array]','[object Uint8Array]','[object Uint8ClampedArray]','[object Int16Array]','[object Uint16Array]','[object Int32Array]','[object Uint32Array]','[object Float32Array]','[object Float64Array]'],o=function(t){return t&&DataView.prototype.isPrototypeOf(t)},n=ArrayBuffer.isView||function(t){return t&&r.indexOf(Object.prototype.toString.call(t))>-1};h.prototype.append=function(t,e){t=a(t),e=u(e);var r=this.map[t];r||(r=[],this.map[t]=r),r.push(e)},h.prototype.delete=function(t){delete this.map[a(t)]},h.prototype.get=function(t){var e=this.map[a(t)];return e?e[0]:null},h.prototype.getAll=function(t){return this.map[a(t)]||[]},h.prototype.has=function(t){return this.map.hasOwnProperty(a(t))},h.prototype.set=function(t,e){this.map[a(t)]=[u(e)]},h.prototype.forEach=function(t,e){Object.getOwnPropertyNames(this.map).forEach(function(r){this.map[r].forEach(function(o){t.call(e,o,r,this)},this)},this)},h.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),f(t)},h.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),f(t)},h.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),f(t)},e.iterable&&(h.prototype["function"==typeof Symbol?Symbol.iterator:"@@iterator"]=h.prototype.entries);var i=['DELETE','GET','HEAD','OPTIONS','POST','PUT'];m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},b.call(m.prototype),b.call(_.prototype),_.prototype.clone=function(){return new _(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},_.error=function(){var t=new _(null,{status:0,statusText:''});return t.type='error',t};var s=[301,302,303,307,308];_.redirect=function(t,e){if(-1===s.indexOf(e))throw new RangeError('Invalid status code');return new _(null,{status:e,headers:{location:t}})},t.Headers=h,t.Request=m,t.Response=_,t.fetch=function(t,r){return new Promise(function(o,n){var i=new m(t,r),s=new XMLHttpRequest;s.onload=function(){var t,e,r={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||'',e=new h,t.split('\r\n').forEach(function(t){var r=t.split(':'),o=r.shift().trim();if(o){var n=r.join(':').trim();e.append(o,n)}}),e)};r.url='responseURL'in s?s.responseURL:r.headers.get('X-Request-URL');var n='response'in s?s.response:s.responseText;o(new _(n,r))},s.onerror=function(){n(new TypeError('Network request failed'))},s.ontimeout=function(){n(new TypeError('Network request failed'))},s.open(i.method,i.url,!0),'include'===i.credentials&&(s.withCredentials=!0),'responseType'in s&&e.blob&&(s.responseType='blob'),i.headers.forEach(function(t,e){s.setRequestHeader(e,t)}),s.send(void 0===i._bodyInit?null:i._bodyInit)})},t.fetch.polyfill=!0}function a(t){if('string'!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError('Invalid character in header field name');return t.toLowerCase()}function u(t){return'string'!=typeof t&&(t=String(t)),t}function f(t){var r={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e.iterable&&(r["function"==typeof Symbol?Symbol.iterator:"@@iterator"]=function(){return r}),r}function h(t){this.map={},t instanceof h?t.forEach(function(t,e){this.append(e,t)},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function y(t){if(t.bodyUsed)return Promise.reject(new TypeError('Already read'));t.bodyUsed=!0}function d(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function l(t){var e=new FileReader,r=d(e);return e.readAsArrayBuffer(t),r}function p(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join('')}function c(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if('string'==typeof t)this._bodyText=t;else if(e.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(e.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(e.arrayBuffer&&e.blob&&o(t))this._bodyArrayBuffer=c(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!e.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!n(t))throw new Error('unsupported BodyInit type');this._bodyArrayBuffer=c(t)}else this._bodyText='';this.headers.get('content-type')||('string'==typeof t?this.headers.set('content-type','text/plain;charset=UTF-8'):this._bodyBlob&&this._bodyBlob.type?this.headers.set('content-type',this._bodyBlob.type):e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set('content-type','application/x-www-form-urlencoded;charset=UTF-8'))},e.blob&&(this.blob=function(){var t=y(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error('could not read FormData body as blob');return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?y(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(l)}),this.text=function(){var t,e,r,o=y(this);if(o)return o;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=d(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(p(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error('could not read FormData body as text');return Promise.resolve(this._bodyText)},e.formData&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}function m(t,e){var r,o,n=(e=e||{}).body;if('string'==typeof t)this.url=t;else{if(t.bodyUsed)throw new TypeError('Already read');this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new h(t.headers)),this.method=t.method,this.mode=t.mode,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}if(this.credentials=e.credentials||this.credentials||'omit',!e.headers&&this.headers||(this.headers=new h(e.headers)),this.method=(r=e.method||this.method||'GET',o=r.toUpperCase(),i.indexOf(o)>-1?o:r),this.mode=e.mode||this.mode||null,this.referrer=null,('GET'===this.method||'HEAD'===this.method)&&n)throw new TypeError('Body not allowed for GET or HEAD requests');this._initBody(n)}function w(t){var e=new FormData;return t.trim().split('&').forEach(function(t){if(t){var r=t.split('='),o=r.shift().replace(/\+/g,' '),n=r.join('=').replace(/\+/g,' ');e.append(decodeURIComponent(o),decodeURIComponent(n))}}),e}function _(t,e){e||(e={}),this.type='default',this.status='status'in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText='statusText'in e?e.statusText:'OK',this.headers=new h(e.headers),this.url=e.url||'',this._initBody(t)}})('undefined'!=typeof self?self:this)},80,[]);