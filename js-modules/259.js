__d(function(e,t,n,o,r){'use strict';var s=t(r[0]),i=t(r[1]),u=t(r[2]),a=t(r[3]),c=t(r[4]),l=(function(e){function t(e,n){babelHelpers.classCallCheck(this,t);var o=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o._listViewRef=null,o._shouldBounceFirstRowOnMount=!1,o._onScroll=function(e){o.props.dataSource.getOpenRowID()&&o.setState({dataSource:o.state.dataSource.setOpenRowID(null)}),o.props.onScroll&&o.props.onScroll(e)},o._renderRow=function(e,t,n){var r=o.props.renderQuickActions(e,t,n);if(!r)return o.props.renderRow(e,t,n);var s=!1;return o._shouldBounceFirstRowOnMount&&(o._shouldBounceFirstRowOnMount=!1,s=n===o.props.dataSource.getFirstRowID()),u.createElement(c,{slideoutView:r,isOpen:e.id===o.props.dataSource.getOpenRowID(),maxSwipeDistance:o._getMaxSwipeDistance(e,t,n),key:n,onOpen:function(){return o._onOpen(e.id)},onClose:function(){return o._onClose(e.id)},onSwipeEnd:function(){return o._setListViewScrollable(!0)},onSwipeStart:function(){return o._setListViewScrollable(!1)},shouldBounceOnMount:s},o.props.renderRow(e,t,n))},o._shouldBounceFirstRowOnMount=o.props.bounceFirstRowOnMount,o.state={dataSource:o.props.dataSource},o}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,null,[{key:"getNewDataSource",value:function(){return new a({getRowData:function(e,t,n){return e[t][n]},getSectionHeaderData:function(e,t){return e[t]},rowHasChanged:function(e,t){return e!==t},sectionHeaderHasChanged:function(e,t){return e!==t}})}}]),babelHelpers.createClass(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.state.dataSource.getDataSource()!==e.dataSource.getDataSource()&&this.setState({dataSource:e.dataSource})}},{key:"render",value:function(){var e=this;return u.createElement(s,babelHelpers.extends({},this.props,{ref:function(t){e._listViewRef=t},dataSource:this.state.dataSource.getDataSource(),onScroll:this._onScroll,renderRow:this._renderRow}))}},{key:"_setListViewScrollable",value:function(e){this._listViewRef&&'function'==typeof this._listViewRef.setNativeProps&&this._listViewRef.setNativeProps({scrollEnabled:e})}},{key:"getScrollResponder",value:function(){if(this._listViewRef&&'function'==typeof this._listViewRef.getScrollResponder)return this._listViewRef.getScrollResponder()}},{key:"_getMaxSwipeDistance",value:function(e,t,n){return'function'==typeof this.props.maxSwipeDistance?this.props.maxSwipeDistance(e,t,n):this.props.maxSwipeDistance}},{key:"_onOpen",value:function(e){this.setState({dataSource:this.state.dataSource.setOpenRowID(e)})}},{key:"_onClose",value:function(e){this.setState({dataSource:this.state.dataSource.setOpenRowID(null)})}}]),t})(u.Component);l.propTypes={bounceFirstRowOnMount:i.bool.isRequired,dataSource:i.instanceOf(a).isRequired,maxSwipeDistance:i.oneOfType([i.number,i.func]).isRequired,renderRow:i.func.isRequired,renderQuickActions:i.func.isRequired},l.defaultProps={bounceFirstRowOnMount:!1,renderQuickActions:function(){return null}},n.exports=l},259,[222,107,110,260,256]);