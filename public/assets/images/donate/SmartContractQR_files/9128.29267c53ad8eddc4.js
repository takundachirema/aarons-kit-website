(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9128],{29924:function(t,e,n){"use strict";var o=n(92777),c=n(82262),r=n(10748),i=n(45959),s=n(63553),a=n(37247),l=n(59499),u=n(67294),f=n(97394),p=n(39772),v=n.n(p),y=n(85893);function h(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=(0,a.Z)(t);if(e){var c=(0,a.Z)(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return(0,s.Z)(this,n)}}var _=function(t){(0,i.Z)(n,t);var e=h(n);function n(t){var c;return(0,o.Z)(this,n),c=e.call(this,t),(0,l.Z)((0,r.Z)(c),"title",void 0),c.state={isOpen:!1},c.title="Turn On/Off Live Updates","undefined"!==typeof c.props.title&&(c.title=c.props.title),c.onToggleTooltip=c.onToggleTooltip.bind((0,r.Z)(c)),c}return(0,c.Z)(n,[{key:"onToggleTooltip",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var t=this.props,e=t.id,n=t.stopped,o=t.inTab,c=t.onOff,r=this.state.isOpen;return(0,y.jsxs)(u.Fragment,{children:[(0,y.jsx)("div",{id:"live-action-".concat(e),className:"".concat(v()["live-action"],"\n\t\t\t\t\t\t").concat(n?v().on:v().off,"\n\t\t\t\t\t\t").concat(o?v()["in-tab"]:""),onClick:c,"data-cy":"onOffbutton"}),(0,y.jsx)(f.Z,{placement:"top-start",hideArrow:!0,isOpen:r,toggle:this.onToggleTooltip,target:"live-action-".concat(e),children:this.title})]})}}]),n}(u.Component);e.Z=_},5448:function(t,e,n){"use strict";n.r(e);var o=n(59499),c=n(92777),r=n(82262),i=n(45959),s=n(63553),a=n(37247),l=n(67294),u=n(77243),f=n(53999),p=n(98008),v=n(29924),y=n(74588),h=n.n(y),_=n(85893);function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){(0,o.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=(0,a.Z)(t);if(e){var c=(0,a.Z)(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return(0,s.Z)(this,n)}}var g=function(t){(0,i.Z)(n,t);var e=O(n);function n(){return(0,c.Z)(this,n),e.apply(this,arguments)}return(0,r.Z)(n,[{key:"render",value:function(){var t=this.props,e=t.values,n=t.active,o=t.allWidth,c=t.className,r=t.special,i=t.onToggle;return(0,_.jsx)(u.Z,{className:"".concat(h().tabs," ").concat("undefined"!==typeof c?c:""),tabs:!0,children:e.map((function(t,c){return(0,_.jsx)(f.Z,{className:"".concat(h()["tabs-item"],"\n\t\t\t\t\t\t\t\t").concat(n===c?h().active:"","\n\t\t\t\t\t\t\t\t").concat(o?h()["w-".concat(e.length)]:"","\n\t\t\t\t\t\t\t\t").concat(r?h()["w-".concat(r)]:""),children:(0,_.jsxs)(p.Z,{className:h()["tabs-link"],onClick:function(){return i(c)},children:["undefined"!==typeof t.liveAction?(0,_.jsx)(v.Z,d({},t.liveAction)):null,t.text]})},"nav-item-".concat(c))}))})}}]),n}(l.Component);e.default=g},39772:function(t){t.exports={"live-action":"styles_live-action__h2OjQ",on:"styles_on__LtXRH",off:"styles_off__NmA8O"}},74588:function(t){t.exports={tabs:"styles_tabs__K1maB","tabs-item":"styles_tabs-item__9vhqv","w-stats":"styles_w-stats__Bh__b","w-2":"styles_w-2__deo6_",active:"styles_active__8CwQQ","tabs-link":"styles_tabs-link__b7laj"}}}]);