__d(function(e,o,t,n,l){'use strict';var r,s=o(l[0]),i=o(l[1]),a=o(l[2]),c=(o(l[3]),o(l[4])),d=o(l[5]),h=o(l[6]),p=o(l[7]),u=o(l[8]),m=o(l[9]),f=o(l[10]),y=o(l[11]),S=o(l[12]),R=o(l[13]),b=o(l[14]),v=o(l[15]),H=o(l[16]),_=(o(l[17]),o(l[18])),w=o(l[19]),g=o(l[20]),C=(o(l[21]),o(l[22])),T=v({displayName:'ScrollView',propTypes:babelHelpers.extends({},R,{automaticallyAdjustContentInsets:d.bool,contentInset:a,contentOffset:c,bounces:d.bool,bouncesZoom:d.bool,alwaysBounceHorizontal:d.bool,alwaysBounceVertical:d.bool,centerContent:d.bool,contentContainerStyle:y(b),decelerationRate:d.oneOfType([d.oneOf(['fast','normal']),d.number]),horizontal:d.bool,indicatorStyle:d.oneOf(['default','black','white']),invertStickyHeaders:d.bool,directionalLockEnabled:d.bool,canCancelContentTouches:d.bool,keyboardDismissMode:d.oneOf(['none','on-drag','interactive']),keyboardShouldPersistTaps:d.oneOf(['always','never','handled',!1,!0]),maintainVisibleContentPosition:d.shape({minIndexForVisible:d.number.isRequired,autoscrollToTopThreshold:d.number}),maximumZoomScale:d.number,minimumZoomScale:d.number,onMomentumScrollBegin:d.func,onMomentumScrollEnd:d.func,onScroll:d.func,onScrollBeginDrag:d.func,onScrollEndDrag:d.func,onContentSizeChange:d.func,pagingEnabled:d.bool,pinchGestureEnabled:d.bool,scrollEnabled:d.bool,scrollEventThrottle:d.number,scrollIndicatorInsets:a,scrollsToTop:d.bool,showsHorizontalScrollIndicator:d.bool,showsVerticalScrollIndicator:d.bool,stickyHeaderIndices:d.arrayOf(d.number),snapToInterval:d.number,snapToAlignment:d.oneOf(['start','center','end']),removeClippedSubviews:d.bool,zoomScale:d.number,contentInsetAdjustmentBehavior:d.oneOf(['automatic','scrollableAxes','never','always']),refreshControl:d.element,endFillColor:i,scrollPerfTag:d.string,overScrollMode:d.oneOf(['auto','always','never']),DEPRECATED_sendUpdatedChildFrames:d.bool,scrollBarThumbImage:d.oneOfType([d.shape({uri:d.string}),d.number])}),mixins:[u.Mixin],_scrollAnimatedValue:new s.Value(0),_scrollAnimatedValueAttachment:null,_stickyHeaderRefs:new Map,_headerLayoutYs:new Map,getInitialState:function(){return babelHelpers.extends({},this.scrollResponderMixinGetInitialState(),{layoutHeight:null})},UNSAFE_componentWillMount:function(){this._scrollAnimatedValue=new s.Value(this.props.contentOffset?this.props.contentOffset.y:0),this._scrollAnimatedValue.setOffset(this.props.contentInset?this.props.contentInset.top:0),this._stickyHeaderRefs=new Map,this._headerLayoutYs=new Map},componentDidMount:function(){this._updateAnimatedNodeAttachment()},componentDidUpdate:function(){this._updateAnimatedNodeAttachment()},componentWillUnmount:function(){this._scrollAnimatedValueAttachment&&this._scrollAnimatedValueAttachment.detach()},setNativeProps:function(e){this._scrollViewRef&&this._scrollViewRef.setNativeProps(e)},getScrollResponder:function(){return this},getScrollableNode:function(){return p.findNodeHandle(this._scrollViewRef)},getInnerViewNode:function(){return p.findNodeHandle(this._innerViewRef)},scrollTo:function(e,o,t){if('number'==typeof e)console.warn("`scrollTo(y, x, animated)` is deprecated. Use `scrollTo({x: 5, y: 5, animated: true})` instead.");else{var n=e||{};o=n.x,e=n.y,t=n.animated}this.getScrollResponder().scrollResponderScrollTo({x:o||0,y:e||0,animated:!1!==t})},scrollToEnd:function(e){var o=!1!==(e&&e.animated);this.getScrollResponder().scrollResponderScrollToEnd({animated:o})},scrollWithoutAnimationTo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;console.warn('`scrollWithoutAnimationTo` is deprecated. Use `scrollTo` instead'),this.scrollTo({x:o,y:e,animated:!1})},flashScrollIndicators:function(){this.getScrollResponder().scrollResponderFlashScrollIndicators()},_getKeyForIndex:function(e,o){var t=o[e];return t&&t.key},_updateAnimatedNodeAttachment:function(){this._scrollAnimatedValueAttachment&&this._scrollAnimatedValueAttachment.detach(),this.props.stickyHeaderIndices&&this.props.stickyHeaderIndices.length>0&&(this._scrollAnimatedValueAttachment=s.attachNativeEvent(this._scrollViewRef,'onScroll',[{nativeEvent:{contentOffset:{y:this._scrollAnimatedValue}}}]))},_setStickyHeaderRef:function(e,o){o?this._stickyHeaderRefs.set(e,o):this._stickyHeaderRefs.delete(e)},_onStickyHeaderLayout:function(e,o,t){if(this.props.stickyHeaderIndices){var n=h.Children.toArray(this.props.children);if(t===this._getKeyForIndex(e,n)){var l=o.nativeEvent.layout.y;this._headerLayoutYs.set(t,l);var r=this.props.stickyHeaderIndices.indexOf(e),s=this.props.stickyHeaderIndices[r-1];if(null!=s){var i=this._stickyHeaderRefs.get(this._getKeyForIndex(s,n));i&&i.setNextHeaderY(l)}}}},_handleScroll:function(e){'on-drag'===this.props.keyboardDismissMode&&H(),this.scrollResponderHandleScroll(e)},_handleLayout:function(e){this.props.invertStickyHeaders&&this.setState({layoutHeight:e.nativeEvent.layout.height}),this.props.onLayout&&this.props.onLayout(e)},_handleContentOnLayout:function(e){var o=e.nativeEvent.layout,t=o.width,n=o.height;this.props.onContentSizeChange&&this.props.onContentSizeChange(t,n)},_scrollViewRef:null,_setScrollViewRef:function(e){this._scrollViewRef=e},_innerViewRef:null,_setInnerViewRef:function(e){this._innerViewRef=e},render:function(){var e=this,o=void 0,t=void 0;this.props.horizontal?(o=x,t=A):(o=E,t=S),_(void 0!==o,'ScrollViewClass must not be undefined'),_(void 0!==t,'ScrollContentContainerViewClass must not be undefined');var n=[this.props.horizontal&&V.contentContainerHorizontal,this.props.contentContainerStyle],l={};this.props.onContentSizeChange&&(l={onLayout:this._handleContentOnLayout});var r=this.props.stickyHeaderIndices,s=r&&r.length>0,i=s&&h.Children.toArray(this.props.children),a=s?i.map(function(o,t){var n=o?r.indexOf(t):-1;if(n>-1){var l=o.key,s=r[n+1];return h.createElement(m,{key:l,ref:function(o){return e._setStickyHeaderRef(l,o)},nextHeaderLayoutY:e._headerLayoutYs.get(e._getKeyForIndex(s,i)),onLayout:function(o){return e._onStickyHeaderLayout(t,o,l)},scrollAnimatedValue:e._scrollAnimatedValue,inverted:e.props.invertStickyHeaders,scrollViewHeight:e.state.layoutHeight},o)}return o}):this.props.children,c=h.createElement(t,babelHelpers.extends({},l,{ref:this._setInnerViewRef,style:n,removeClippedSubviews:!s&&this.props.removeClippedSubviews,collapsable:!1}),a),d=void 0!==this.props.alwaysBounceHorizontal?this.props.alwaysBounceHorizontal:this.props.horizontal,p=void 0!==this.props.alwaysBounceVertical?this.props.alwaysBounceVertical:!this.props.horizontal,u=!!this.props.DEPRECATED_sendUpdatedChildFrames,f=this.props.horizontal?V.baseHorizontal:V.baseVertical,y=babelHelpers.extends({},this.props,{alwaysBounceHorizontal:d,alwaysBounceVertical:p,style:[f,this.props.style],onContentSizeChange:null,onLayout:this._handleLayout,onMomentumScrollBegin:this.scrollResponderHandleMomentumScrollBegin,onMomentumScrollEnd:this.scrollResponderHandleMomentumScrollEnd,onResponderGrant:this.scrollResponderHandleResponderGrant,onResponderReject:this.scrollResponderHandleResponderReject,onResponderRelease:this.scrollResponderHandleResponderRelease,onResponderTerminate:this.scrollResponderHandleTerminate,onResponderTerminationRequest:this.scrollResponderHandleTerminationRequest,onScroll:this._handleScroll,onScrollBeginDrag:this.scrollResponderHandleScrollBeginDrag,onScrollEndDrag:this.scrollResponderHandleScrollEndDrag,onScrollShouldSetResponder:this.scrollResponderHandleScrollShouldSetResponder,onStartShouldSetResponder:this.scrollResponderHandleStartShouldSetResponder,onStartShouldSetResponderCapture:this.scrollResponderHandleStartShouldSetResponderCapture,onTouchEnd:this.scrollResponderHandleTouchEnd,onTouchMove:this.scrollResponderHandleTouchMove,onTouchStart:this.scrollResponderHandleTouchStart,onTouchCancel:this.scrollResponderHandleTouchCancel,scrollBarThumbImage:C(this.props.scrollBarThumbImage),scrollEventThrottle:s?1:this.props.scrollEventThrottle,sendMomentumEvents:!(!this.props.onMomentumScrollBegin&&!this.props.onMomentumScrollEnd),DEPRECATED_sendUpdatedChildFrames:u}),R=this.props.decelerationRate;R&&(y.decelerationRate=w(R));var b=this.props.refreshControl;return b?h.cloneElement(b,{style:y.style},h.createElement(o,babelHelpers.extends({},y,{style:f,ref:this._setScrollViewRef}),c)):h.createElement(o,babelHelpers.extends({},y,{ref:this._setScrollViewRef}),c)}}),V=f.create({baseVertical:{flexGrow:1,flexShrink:1,flexDirection:'column',overflow:'scroll'},baseHorizontal:{flexGrow:1,flexShrink:1,flexDirection:'row',overflow:'scroll'},contentContainerHorizontal:{flexDirection:'row'}}),E=void 0,A=void 0,x=void 0;E=g('RCTScrollView',T,r={nativeOnly:{sendMomentumEvents:!0}}),x=g('AndroidHorizontalScrollView',T,r),A=g('AndroidHorizontalScrollContentView'),t.exports=T},204,[175,40,112,28,205,107,110,43,206,214,148,118,150,111,119,153,210,102,18,215,125,32,140]);