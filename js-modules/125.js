__d(function(e,r,t,n,s){'use strict';r(s[0]);var o=r(s[1]),a=r(s[2]),i=r(s[3]),p=r(s[4]),l=r(s[5]),v=r(s[6]),u=r(s[7]),b=r(s[8]),y=r(s[9]),c=r(s[10]),T=(r(s[11]),r(s[12])),f=r(s[13]),d=!1;var E={CATransform3D:v,CGPoint:u,CGSize:c,UIEdgeInsets:l};function g(e){return e&&e.map(b)}var C={CGColor:b,CGColorArray:g,UIColor:b,UIColorArray:g,CGImage:y,UIImage:y,RCTImageSource:y,Color:b,ColorArray:g};t.exports=function(e,r,t){function n(e){i.ViewManagerNames?e=s(e,i.getDefaultEventTypes()):(e.bubblingEventTypes=s(e.bubblingEventTypes,i.genericBubblingEventTypes),e.directEventTypes=s(e.directEventTypes,i.genericDirectEventTypes))}function s(e,r){if(!r)return e;if(!e)return r;for(var t in r)if(r.hasOwnProperty(t)){var n=r[t];if(e.hasOwnProperty(t)){var o=e[t];'object'==typeof n&&'object'==typeof o&&(n=s(o,n))}e[t]=n}return e}return p(e,function(){var t=i[e];T(null!=t&&null!=!t.NativeProps,'Native component for "%s" does not exist',e),t.uiViewClassName=e,t.validAttributes={},t.propTypes=r?'object'==typeof r.__propTypesSecretDontUseThesePlease?r.__propTypesSecretDontUseThesePlease:r.propTypes:null;for(var s=t.baseModuleName,p=t.bubblingEventTypes,l=t.directEventTypes,v=t.NativeProps;s;){var u=i[s];u?(p=babelHelpers.extends({},u.bubblingEventTypes,p),l=babelHelpers.extends({},u.directEventTypes,l),v=babelHelpers.extends({},u.NativeProps,v),s=u.baseModuleName):(f(!1,'Base module "%s" does not exist',s),s=null)}for(var b in t.bubblingEventTypes=p,t.directEventTypes=l,v){var y=!1,c={},g=E[v[b]];g&&(c.diff=g,y=!0);var m=C[v[b]];m&&(c.process=m,y=!0),t.validAttributes[b]=!y||c}return t.validAttributes.style=a,d||(n(t),d=!0),o.processEventTypes(t),t})}},125,[28,126,127,98,136,137,138,139,132,140,135,147,18,32]);