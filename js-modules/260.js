__d(function(t,e,i,n,s){'use strict';var o=e(s[0]),a=(function(){function t(e){var i=this;babelHelpers.classCallCheck(this,t),this._dataSource=new o({getRowData:e.getRowData,getSectionHeaderData:e.getSectionHeaderData,rowHasChanged:function(t,n){return t.id!==i._previousOpenRowID&&n.id===i._openRowID||t.id===i._previousOpenRowID&&n.id!==i._openRowID||e.rowHasChanged(t,n)},sectionHeaderHasChanged:e.sectionHeaderHasChanged})}return babelHelpers.createClass(t,[{key:"cloneWithRowsAndSections",value:function(t,e,i){return this._dataSource=this._dataSource.cloneWithRowsAndSections(t,e,i),this._dataBlob=t,this.rowIdentities=this._dataSource.rowIdentities,this.sectionIdentities=this._dataSource.sectionIdentities,this}},{key:"getDataSource",value:function(){return this._dataSource}},{key:"getOpenRowID",value:function(){return this._openRowID}},{key:"getFirstRowID",value:function(){return this.rowIdentities?this.rowIdentities[0]&&this.rowIdentities[0][0]:Object.keys(this._dataBlob)[0]}},{key:"getLastRowID",value:function(){if(this.rowIdentities&&this.rowIdentities.length){var t=this.rowIdentities[this.rowIdentities.length-1];if(t&&t.length)return t[t.length-1]}return Object.keys(this._dataBlob)[this._dataBlob.length-1]}},{key:"setOpenRowID",value:function(t){return this._previousOpenRowID=this._openRowID,this._openRowID=t,this._dataSource=this._dataSource.cloneWithRowsAndSections(this._dataBlob,this.sectionIdentities,this.rowIdentities),this}}]),t})();i.exports=a},260,[223]);