__d(function(e,t,i,n,r){'use strict';var o=t(r[0]),s=(t(r[1]),t(r[2])),d=(t(r[3]),t(r[4])),a=t(r[5]),p=t(r[6]).ViewContextTypes,u=t(r[7]),w=t(r[8]),x=t(r[9])('RCTView',u({displayName:'View',mixins:[o],propTypes:a,viewConfig:{uiViewClassName:'RCTView',validAttributes:d.RCTView},childContextTypes:p,getChildContext:function(){return{isInAParentText:!1}},render:function(){return w(!this.context.isInAParentText,'Nesting of <View> within <Text> is not supported on Android.'),s.createElement(x,this.props)}}),{nativeOnly:{nativeBackgroundAndroid:!0,nativeForegroundAndroid:!0}}),C=x;i.exports=C},150,[42,28,110,127,151,111,152,153,18,125]);