__d(function(e,t,r,n,o){'use strict';var a=t(o[0]),l=t(o[1]),s=t(o[2]),p=t(o[3]);t(o[4]),r.exports=function(e,t,r,n){p(r,'Expect to have a valid rootTag, instead got ',r);var o=l.createElement(a,{rootTag:r,WrapperComponent:n},l.createElement(e,babelHelpers.extends({},t,{rootTag:r})));if(null!=e.prototype&&!0===e.prototype.unstable_isAsyncReactComponent){var c=(function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){return this.props.children}}]),t})(l.unstable_AsyncComponent);o=l.createElement(c,null,o)}s.render(o,r)}},279,[241,110,43,18,280]);