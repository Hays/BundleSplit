__d(function(e,r,t,n,o){'use strict';void 0===e.GLOBAL&&(e.GLOBAL=e),void 0===e.window&&(e.window=e);var i=r(o[0]),a=r(o[1]);function u(e,r,t){var n=Object.getOwnPropertyDescriptor(e,r),o=n||{},a=o.enumerable,u=o.writable,l=o.configurable;!n||l?i(e,r,{get:t,enumerable:!1!==a,writable:!1!==u}):console.error('Failed to set polyfill. '+r+' is not configurable.')}function l(r,t){u(e,r,t)}if(a('Map')&&l('Map',function(){return r(o[2])}),a('Set')&&l('Set',function(){return r(o[3])}),e.process=e.process||{},e.process.env=e.process.env||{},e.process.env.NODE_ENV||(e.process.env.NODE_ENV='production'),e.__RCTProfileIsProfiling){var c=r(o[4]);c.installReactHook(!0),c.setEnabled(!0)}var s=r(o[5]);if(s.installConsoleErrorReporter(),!e.__fbDisableExceptionsManager){r(o[6]).setGlobalHandler(function(e,r){try{s.handleException(e,r)}catch(r){throw console.log('Failed to print error: ',r.message),e}})}r(o[7]).checkVersions(),l('Promise',function(){return r(o[8])}),l('regeneratorRuntime',function(){return delete e.regeneratorRuntime,r(o[9]),e.regeneratorRuntime});var f=function(e){l(e,function(){return r(o[10])[e]})};f('setTimeout'),f('setInterval'),f('setImmediate'),f('clearTimeout'),f('clearInterval'),f('clearImmediate'),f('requestAnimationFrame'),f('cancelAnimationFrame'),f('requestIdleCallback'),f('cancelIdleCallback'),l('XMLHttpRequest',function(){return r(o[11])}),l('FormData',function(){return r(o[12])}),l('fetch',function(){return r(o[13]).fetch}),l('Headers',function(){return r(o[13]).Headers}),l('Request',function(){return r(o[13]).Request}),l('Response',function(){return r(o[13]).Response}),l('WebSocket',function(){return r(o[14])}),l('Blob',function(){return r(o[15])}),l('File',function(){return r(o[16])}),l('FileReader',function(){return r(o[17])}),l('URL',function(){return r(o[18])}),e.alert||(e.alert=function(e){r(o[19]).alert('Alert',''+e)});var d=e.navigator;void 0===d&&(e.navigator=d={}),u(d,'product',function(){return'ReactNative'}),u(d,'geolocation',function(){return r(o[20])});var g=r(o[21]);g.registerLazyCallableModule('Systrace',function(){return r(o[4])}),g.registerLazyCallableModule('JSTimers',function(){return r(o[10])}),g.registerLazyCallableModule('HeapCapture',function(){return r(o[22])}),g.registerLazyCallableModule('SamplingProfiler',function(){return r(o[23])}),g.registerLazyCallableModule('RCTLog',function(){return r(o[24])}),g.registerLazyCallableModule('RCTDeviceEventEmitter',function(){return r(o[25])}),g.registerLazyCallableModule('RCTNativeAppEventEmitter',function(){return r(o[26])}),g.registerLazyCallableModule('PerformanceLogger',function(){return r(o[27])}),g.registerLazyCallableModule('JSDevSupportModule',function(){return r(o[28])}),e.fetchSegment=function(e,t){var n=r(o[29]).SegmentFetcher;if(!n)throw new Error("SegmentFetcher is missing. Please ensure that it is included as a NativeModule.");n.fetchSegment(e,function(e){if(e){var r=new Error(e.message);r.code=e.code,t(r)}t(null)})}},45,[33,46,47,51,24,52,23,56,58,63,27,64,78,79,81,75,83,84,85,86,88,21,91,92,93,34,94,95,97,20]);