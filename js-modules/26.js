__d(function(t,n,i,e,f){'use strict';i.exports=function(t){var n,i=typeof t;if(void 0===t)n='undefined';else if(null===t)n='null';else if('string'===i)n='"'+t+'"';else if('function'===i)try{n=t.toString()}catch(t){n='[function unknown]'}else try{n=JSON.stringify(t)}catch(i){if('function'==typeof t.toString)try{n=t.toString()}catch(t){}}return n||'["'+i+'" failed to stringify]'}},26,[]);