__d(function(o,r,e,n,a){'use strict';var l=r(a[0]),t={log:'log',info:'info',warn:'warn',error:'error',fatal:'error'},i=null,s={logIfNoNativeHook:function(r){for(var e=arguments.length,n=Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];void 0===o.nativeLoggingHook?s.logToConsole.apply(s,[r].concat(babelHelpers.toConsumableArray(n))):i&&'warn'===r&&i.apply(void 0,babelHelpers.toConsumableArray(n))},logToConsole:function(o){var r,e=t[o];l(e,'Level "'+o+'" not one of '+Object.keys(t).toString());for(var n=arguments.length,a=Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];(r=console)[e].apply(r,babelHelpers.toConsumableArray(a))},setWarningHandler:function(o){i=o}};e.exports=s},93,[18]);