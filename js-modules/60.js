__d(function(n,t,e,r,o){'use strict';var f=t(o[0]);e.exports=f;var i=v(!0),u=v(!1),c=v(null),a=v(void 0),l=v(0),h=v('');function v(n){var t=new f(f._61);return t._65=1,t._55=n,t}f.resolve=function(n){if(n instanceof f)return n;if(null===n)return c;if(void 0===n)return a;if(!0===n)return i;if(!1===n)return u;if(0===n)return l;if(''===n)return h;if('object'==typeof n||'function'==typeof n)try{var t=n.then;if('function'==typeof t)return new f(t.bind(n))}catch(n){return new f(function(t,e){e(n)})}return v(n)},f.all=function(n){var t=Array.prototype.slice.call(n);return new f(function(n,e){if(0===t.length)return n([]);var r=t.length;function o(i,u){if(u&&('object'==typeof u||'function'==typeof u)){if(u instanceof f&&u.then===f.prototype.then){for(;3===u._65;)u=u._55;return 1===u._65?o(i,u._55):(2===u._65&&e(u._55),void u.then(function(n){o(i,n)},e))}var c=u.then;if('function'==typeof c)return void new f(c.bind(u)).then(function(n){o(i,n)},e)}t[i]=u,0==--r&&n(t)}for(var i=0;i<t.length;i++)o(i,t[i])})},f.reject=function(n){return new f(function(t,e){e(n)})},f.race=function(n){return new f(function(t,e){n.forEach(function(n){f.resolve(n).then(t,e)})})},f.prototype.catch=function(n){return this.then(null,n)}},60,[61]);