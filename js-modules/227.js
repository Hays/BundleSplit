__d(function(e,s,r,t,i){'use strict';var n=s(i[0]),o=s(i[1]),h=(s(i[2]),s(i[3])),f=s(i[4]),p=s(i[5]),a=s(i[6]),l=s(i[7]),R=s(i[8]).AndroidSwipeRefreshLayout.Constants,g=a({displayName:'RefreshControl',statics:{SIZE:R.SIZE},mixins:[o],propTypes:babelHelpers.extends({},p,{onRefresh:f.func,refreshing:f.bool.isRequired,tintColor:n,titleColor:n,title:f.string,enabled:f.bool,colors:f.arrayOf(n),progressBackgroundColor:n,size:f.oneOf([R.SIZE.DEFAULT,R.SIZE.LARGE]),progressViewOffset:f.number}),_nativeRef:null,_lastNativeRefreshing:!1,componentDidMount:function(){this._lastNativeRefreshing=this.props.refreshing},componentDidUpdate:function(e){this.props.refreshing!==e.refreshing?this._lastNativeRefreshing=this.props.refreshing:this.props.refreshing!==this._lastNativeRefreshing&&(this._nativeRef.setNativeProps({refreshing:this.props.refreshing}),this._lastNativeRefreshing=this.props.refreshing)},render:function(){var e=this;return h.createElement(d,babelHelpers.extends({},this.props,{ref:function(s){e._nativeRef=s},onRefresh:this._onRefresh}))},_onRefresh:function(){this._lastNativeRefreshing=!0,this.props.onRefresh&&this.props.onRefresh(),this.forceUpdate()}}),d=l('AndroidSwipeRefreshLayout',g);r.exports=g},227,[40,42,28,110,107,111,153,125,98]);