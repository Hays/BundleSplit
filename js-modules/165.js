__d(function(t,n,o,e,i){'use strict';var r=n(i[0]),s=function(t){if(this.instancePool.length){var n=this.instancePool.pop();return this.call(n,t),n}return new this(t)},l=function(t){r(t instanceof this,'Trying to release an instance into a pool of a different type.'),t.destructor(),this.instancePool.length<this.poolSize&&this.instancePool.push(t)},a=s,h={addPoolingTo:function(t,n){var o=t;return o.instancePool=[],o.getPooled=n||a,o.poolSize||(o.poolSize=10),o.release=l,o},oneArgumentPooler:s,twoArgumentPooler:function(t,n){if(this.instancePool.length){var o=this.instancePool.pop();return this.call(o,t,n),o}return new this(t,n)},threeArgumentPooler:function(t,n,o){if(this.instancePool.length){var e=this.instancePool.pop();return this.call(e,t,n,o),e}return new this(t,n,o)},fourArgumentPooler:function(t,n,o,e){if(this.instancePool.length){var i=this.instancePool.pop();return this.call(i,t,n,o,e),i}return new this(t,n,o,e)}};o.exports=h},165,[18]);