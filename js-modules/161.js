__d(function(e,t,s,r,o){'use strict';var i=t(o[0]),a=(t(o[1]),t(o[2])),l=t(o[3]),n=t(o[4]),b=t(o[5]),c=t(o[6]),u=(t(o[7]),t(o[8])),d=t(o[9]),p=(function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){var e=this.props,t=e.accessibilityLabel,s=e.color,r=e.onPress,o=e.title,i=e.hasTVPreferredFocus,l=e.disabled,n=e.testID,p=[h.button],f=[h.text];s&&p.push({backgroundColor:s});var y=['button'];l&&(p.push(h.buttonDisabled),f.push(h.textDisabled),y.push('disabled')),d('string'==typeof o,'The title prop of a Button must be a string');var g=o.toUpperCase(),C=c;return a.createElement(C,{accessibilityComponentType:"button",accessibilityLabel:t,accessibilityTraits:y,hasTVPreferredFocus:i,testID:n,disabled:l,onPress:r},a.createElement(u,{style:p},a.createElement(b,{style:f,disabled:l},g)))}}]),t})(a.Component);p.propTypes={title:l.string.isRequired,accessibilityLabel:l.string,color:i,disabled:l.bool,onPress:l.func.isRequired,testID:l.string,hasTVPreferredFocus:l.bool};var h=n.create({button:{elevation:4,backgroundColor:'#2196F3',borderRadius:2},text:{color:'white',textAlign:'center',padding:8,fontWeight:'500'},buttonDisabled:{elevation:0,backgroundColor:'#dfdfdf'},textDisabled:{color:'#a1a1a1'}});s.exports=p},161,[40,28,110,107,148,162,170,174,150,18]);