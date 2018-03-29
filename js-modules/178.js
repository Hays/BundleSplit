__d(function(t,e,i,a,n){'use strict';var s=e(n[0]),_=(e(n[1]),e(n[2])),o=e(n[3]),l=e(n[4]),u=l.API,r=1;function h(t){var e=new Set;!(function t(i){'function'==typeof i.update?e.add(i):i.__getChildren().forEach(t)})(t),e.forEach(function(t){return t.update()})}var v=(function(t){function e(t){babelHelpers.classCallCheck(this,e);var i=babelHelpers.possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i._startingValue=i._value=t,i._offset=0,i._animation=null,i._listeners={},i}return babelHelpers.inherits(e,t),babelHelpers.createClass(e,[{key:"__detach",value:function(){this.stopAnimation(),babelHelpers.get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"__detach",this).call(this)}},{key:"__getValue",value:function(){return this._value+this._offset}},{key:"__makeNative",value:function(){babelHelpers.get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"__makeNative",this).call(this),Object.keys(this._listeners).length&&this._startListeningToNativeValueUpdates()}},{key:"setValue",value:function(t){this._animation&&(this._animation.stop(),this._animation=null),this._updateValue(t,!this.__isNative),this.__isNative&&u.setAnimatedNodeValue(this.__getNativeTag(),t)}},{key:"setOffset",value:function(t){this._offset=t,this.__isNative&&u.setAnimatedNodeOffset(this.__getNativeTag(),t)}},{key:"flattenOffset",value:function(){this._value+=this._offset,this._offset=0,this.__isNative&&u.flattenAnimatedNodeOffset(this.__getNativeTag())}},{key:"extractOffset",value:function(){this._offset+=this._value,this._value=0,this.__isNative&&u.extractAnimatedNodeOffset(this.__getNativeTag())}},{key:"addListener",value:function(t){var e=String(r++);return this._listeners[e]=t,this.__isNative&&this._startListeningToNativeValueUpdates(),e}},{key:"removeListener",value:function(t){delete this._listeners[t],this.__isNative&&0===Object.keys(this._listeners).length&&this._stopListeningForNativeValueUpdates()}},{key:"removeAllListeners",value:function(){this._listeners={},this.__isNative&&this._stopListeningForNativeValueUpdates()}},{key:"_startListeningToNativeValueUpdates",value:function(){var t=this;this.__nativeAnimatedValueListener||(u.startListeningToAnimatedNodeValue(this.__getNativeTag()),this.__nativeAnimatedValueListener=l.nativeEventEmitter.addListener('onAnimatedValueUpdate',function(e){e.tag===t.__getNativeTag()&&t._updateValue(e.value,!1)}))}},{key:"_stopListeningForNativeValueUpdates",value:function(){this.__nativeAnimatedValueListener&&(this.__nativeAnimatedValueListener.remove(),this.__nativeAnimatedValueListener=null,u.stopListeningToAnimatedNodeValue(this.__getNativeTag()))}},{key:"stopAnimation",value:function(t){this.stopTracking(),this._animation&&this._animation.stop(),this._animation=null,t&&t(this.__getValue())}},{key:"resetAnimation",value:function(t){this.stopAnimation(t),this._value=this._startingValue}},{key:"interpolate",value:function(t){return new s(this,t)}},{key:"animate",value:function(t,e){var i=this,a=null;t.__isInteraction&&(a=o.createInteractionHandle());var n=this._animation;this._animation&&this._animation.stop(),this._animation=t,t.start(this._value,function(t){i._updateValue(t,!0)},function(t){i._animation=null,null!==a&&o.clearInteractionHandle(a),e&&e(t)},n,this)}},{key:"stopTracking",value:function(){this._tracking&&this._tracking.__detach(),this._tracking=null}},{key:"track",value:function(t){this.stopTracking(),this._tracking=t}},{key:"_updateValue",value:function(t,e){for(var i in this._value=t,e&&h(this),this._listeners)this._listeners[i]({value:this.__getValue()})}},{key:"__getNativeConfig",value:function(){return{type:'value',value:this._value,offset:this._offset}}}]),e})(_);i.exports=v},178,[179,180,182,183,181]);