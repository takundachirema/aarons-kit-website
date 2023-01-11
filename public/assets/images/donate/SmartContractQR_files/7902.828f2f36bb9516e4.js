"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7902],{86704:function(e,t,n){var o=n(87462),i=n(63366),r=n(97326),s=n(94578),a=n(67294),c=n(45697),l=n.n(c),p=n(81385),u=n(94184),d=n.n(u),h=n(80935),f=n(23663),g=["className","cssModule","direction","isOpen","group","size","nav","setActiveFromChild","active","addonType","tag","menuRole"],m={a11y:l().bool,disabled:l().bool,direction:l().oneOf(["up","down","left","right"]),group:l().bool,isOpen:l().bool,nav:l().bool,active:l().bool,addonType:l().oneOfType([l().bool,l().oneOf(["prepend","append"])]),size:l().string,tag:f.iC,toggle:l().func,children:l().node,className:l().string,cssModule:l().object,inNavbar:l().bool,setActiveFromChild:l().bool,menuRole:l().oneOf(["listbox","menu"])},v=[f.Do.space,f.Do.enter,f.Do.up,f.Do.down,f.Do.end,f.Do.home],b=function(e){function t(t){var n;return(n=e.call(this,t)||this).addEvents=n.addEvents.bind((0,r.Z)(n)),n.handleDocumentClick=n.handleDocumentClick.bind((0,r.Z)(n)),n.handleKeyDown=n.handleKeyDown.bind((0,r.Z)(n)),n.removeEvents=n.removeEvents.bind((0,r.Z)(n)),n.toggle=n.toggle.bind((0,r.Z)(n)),n.handleMenuRef=n.handleMenuRef.bind((0,r.Z)(n)),n.containerRef=a.createRef(),n.menuRef=a.createRef(),n}(0,s.Z)(t,e);var n=t.prototype;return n.handleMenuRef=function(e){this.menuRef.current=e},n.getContextValue=function(){return{toggle:this.toggle,isOpen:this.props.isOpen,direction:"down"===this.props.direction&&this.props.dropup?"up":this.props.direction,inNavbar:this.props.inNavbar,disabled:this.props.disabled,onMenuRef:this.handleMenuRef,menuRole:this.props.menuRole}},n.componentDidMount=function(){this.handleProps()},n.componentDidUpdate=function(e){this.props.isOpen!==e.isOpen&&this.handleProps()},n.componentWillUnmount=function(){this.removeEvents()},n.getContainer=function(){return this.containerRef.current},n.getMenu=function(){return this.menuRef.current},n.getMenuCtrl=function(){return this._$menuCtrl||(this._$menuCtrl=this.getContainer().querySelector("[aria-expanded]")),this._$menuCtrl},n.getItemType=function(){return"listbox"===this.context.menuRole?"option":"menuitem"},n.getMenuItems=function(){var e=this.getMenu()||this.getContainer();return[].slice.call(e.querySelectorAll('[role="'+this.getItemType()+'"]'))},n.addEvents=function(){var e=this;["click","touchstart","keyup"].forEach((function(t){return document.addEventListener(t,e.handleDocumentClick,!0)}))},n.removeEvents=function(){var e=this;["click","touchstart","keyup"].forEach((function(t){return document.removeEventListener(t,e.handleDocumentClick,!0)}))},n.handleDocumentClick=function(e){if(!e||3!==e.which&&("keyup"!==e.type||e.which===f.Do.tab)){var t=this.getContainer(),n=this.getMenu(),o=t.contains(e.target)&&t!==e.target,i=n&&n.contains(e.target)&&n!==e.target;(!o&&!i||"keyup"===e.type&&e.which!==f.Do.tab)&&this.toggle(e)}},n.handleKeyDown=function(e){var t=this,n="menuitem"===e.target.getAttribute("role")||"option"===e.target.getAttribute("role"),o=this.getMenuCtrl()===e.target,i=f.Do.tab===e.which;if(!(/input|textarea/i.test(e.target.tagName)||i&&!this.props.a11y||i&&!n&&!o)&&((-1!==v.indexOf(e.which)||e.which>=48&&e.which<=90)&&e.preventDefault(),!this.props.disabled&&(o&&([f.Do.space,f.Do.enter,f.Do.up,f.Do.down].indexOf(e.which)>-1?(this.props.isOpen||this.toggle(e),setTimeout((function(){return t.getMenuItems()[0].focus()}))):this.props.isOpen&&i?(e.preventDefault(),this.getMenuItems()[0].focus()):this.props.isOpen&&e.which===f.Do.esc&&this.toggle(e)),this.props.isOpen&&n)))if([f.Do.tab,f.Do.esc].indexOf(e.which)>-1)this.toggle(e),this.getMenuCtrl().focus();else if([f.Do.space,f.Do.enter].indexOf(e.which)>-1)e.target.click(),this.getMenuCtrl().focus();else if([f.Do.down,f.Do.up].indexOf(e.which)>-1||[f.Do.n,f.Do.p].indexOf(e.which)>-1&&e.ctrlKey){var r=this.getMenuItems(),s=r.indexOf(e.target);f.Do.up===e.which||f.Do.p===e.which&&e.ctrlKey?s=0!==s?s-1:r.length-1:(f.Do.down===e.which||f.Do.n===e.which&&e.ctrlKey)&&(s=s===r.length-1?0:s+1),r[s].focus()}else if(f.Do.end===e.which){var a=this.getMenuItems();a[a.length-1].focus()}else if(f.Do.home===e.which){this.getMenuItems()[0].focus()}else if(e.which>=48&&e.which<=90)for(var c=this.getMenuItems(),l=String.fromCharCode(e.which).toLowerCase(),p=0;p<c.length;p+=1){if((c[p].textContent&&c[p].textContent[0].toLowerCase())===l){c[p].focus();break}}},n.handleProps=function(){this.props.isOpen?this.addEvents():this.removeEvents()},n.toggle=function(e){return this.props.disabled?e&&e.preventDefault():this.props.toggle(e)},n.render=function(){var e,t,n=(0,f.CE)(this.props,["toggle","disabled","inNavbar","a11y"]),r=n.className,s=n.cssModule,c=n.direction,l=n.isOpen,u=n.group,m=n.size,v=n.nav,b=n.setActiveFromChild,x=n.active,C=n.addonType,y=n.tag,w=(n.menuRole,(0,i.Z)(n,g)),D=y||(v?"li":"div"),O=!1;b&&a.Children.map(this.props.children[1].props.children,(function(e){e&&e.props.active&&(O=!0)}));var R=(0,f.mx)(d()(r,"down"!==c&&"drop"+c,!(!v||!x)&&"active",!(!b||!O)&&"active",((e={})["input-group-"+C]=C,e["btn-group"]=u,e["btn-group-"+m]=!!m,e.dropdown=!u&&!C,e.show=l,e["nav-item"]=v,e)),s);return a.createElement(h.D.Provider,{value:this.getContextValue()},a.createElement(p.ZP,null,a.createElement(D,(0,o.Z)({},w,((t={})["string"===typeof D?"ref":"innerRef"]=this.containerRef,t),{onKeyDown:this.handleKeyDown,className:R}))))},t}(a.Component);b.propTypes=m,b.defaultProps={a11y:!0,isOpen:!1,direction:"down",nav:!1,active:!1,addonType:!1,inNavbar:!1,setActiveFromChild:!1},t.Z=b},80935:function(e,t,n){n.d(t,{D:function(){return o}});var o=n(67294).createContext({})},98227:function(e,t,n){var o=n(87462),i=n(63366),r=n(97326),s=n(94578),a=n(67294),c=n(45697),l=n.n(c),p=n(94184),u=n.n(p),d=n(80935),h=n(23663),f=["className","cssModule","divider","tag","header","active","text"],g={children:l().node,active:l().bool,disabled:l().bool,divider:l().bool,tag:h.iC,header:l().bool,onClick:l().func,className:l().string,cssModule:l().object,toggle:l().bool,text:l().bool},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind((0,r.Z)(n)),n.getTabIndex=n.getTabIndex.bind((0,r.Z)(n)),n}(0,s.Z)(t,e);var n=t.prototype;return n.getRole=function(){return"listbox"===this.context.menuRole?"option":"menuitem"},n.onClick=function(e){var t=this.props,n=t.disabled,o=t.header,i=t.divider,r=t.text;n||o||i||r?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},n.getTabIndex=function(){var e=this.props,t=e.disabled,n=e.header,o=e.divider,i=e.text;return t||n||o||i?"-1":"0"},n.render=function(){var e=this.getTabIndex(),t=e>-1?this.getRole():void 0,n=(0,h.CE)(this.props,["toggle"]),r=n.className,s=n.cssModule,c=n.divider,l=n.tag,p=n.header,d=n.active,g=n.text,m=(0,i.Z)(n,f),v=(0,h.mx)(u()(r,{disabled:m.disabled,"dropdown-item":!c&&!p&&!g,active:d,"dropdown-header":p,"dropdown-divider":c,"dropdown-item-text":g}),s);return"button"===l&&(p?l="h6":c?l="div":m.href?l="a":g&&(l="span")),a.createElement(l,(0,o.Z)({type:"button"===l&&(m.onClick||this.props.toggle)?"button":void 0},m,{tabIndex:e,role:t,className:v,onClick:this.onClick}))},t}(a.Component);m.propTypes=g,m.defaultProps={tag:"button",toggle:!0},m.contextType=d.D,t.Z=m},42365:function(e,t,n){var o=n(87462),i=n(4942),r=n(63366),s=n(94578),a=n(67294),c=n(45697),l=n.n(c),p=n(73935),u=n(94184),d=n.n(u),h=n(32281),f=n(80935),g=n(23663),m=["className","cssModule","right","tag","flip","modifiers","persist","positionFixed","container"];function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x={tag:g.iC,children:l().node.isRequired,right:l().bool,flip:l().bool,modifiers:l().object,className:l().string,cssModule:l().object,persist:l().bool,positionFixed:l().bool,container:g.qW},C={flip:{enabled:!1}},y={up:"top",left:"left",right:"right",down:"bottom"},w=function(e){function t(){return e.apply(this,arguments)||this}(0,s.Z)(t,e);var n=t.prototype;return n.getRole=function(){return"listbox"===this.context.menuRole?"listbox":"menu"},n.render=function(){var e=this,t=this.props,n=t.className,i=t.cssModule,s=t.right,c=t.tag,l=t.flip,u=t.modifiers,f=t.persist,v=t.positionFixed,x=t.container,w=(0,r.Z)(t,m),D=(0,g.mx)(d()(n,"dropdown-menu",{"dropdown-menu-right":s,show:this.context.isOpen}),i),O=c;if(f||this.context.isOpen&&!this.context.inNavbar){var R=(y[this.context.direction]||"bottom")+"-"+(s?"end":"start"),k=l?u:b(b({},u),C),Z=!!v,M=a.createElement(h.ZP,{placement:R,modifiers:k,positionFixed:Z},(function(t){var n=t.ref,i=t.style,r=t.placement,s=b(b({},e.props.style),i);return a.createElement(O,(0,o.Z)({tabIndex:"-1",role:e.getRole(),ref:function(t){n(t);var o=e.context.onMenuRef;o&&o(t)}},w,{style:s,"aria-hidden":!e.context.isOpen,className:D,"x-placement":r}))}));return x?p.createPortal(M,(0,g.U9)(x)):M}return a.createElement(O,(0,o.Z)({tabIndex:"-1",role:this.getRole()},w,{"aria-hidden":!this.context.isOpen,className:D,"x-placement":w.placement}))},t}(a.Component);w.propTypes=x,w.defaultProps={tag:"div",flip:!0},w.contextType=f.D,t.Z=w},77704:function(e,t,n){n.d(t,{Z:function(){return R}});var o=n(87462),i=n(63366),r=n(97326),s=n(94578),a=n(67294),c=n(45697),l=n.n(c),p=n(94184),u=n.n(p),d=n(4942),h=n(42473),f=n.n(h),g=n(81385),m=n(67139),v=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return t=e.call.apply(e,[this].concat(o))||this,(0,d.Z)((0,r.Z)((0,r.Z)(t)),"refHandler",(function(e){(0,m.k$)(t.props.innerRef,e),(0,m.DL)(t.props.setReferenceNode,e)})),t}(0,s.Z)(t,e);var n=t.prototype;return n.componentWillUnmount=function(){(0,m.k$)(this.props.innerRef,null)},n.render=function(){return f()(Boolean(this.props.setReferenceNode),"`Reference` should not be used outside of a `Manager` component."),(0,m.$p)(this.props.children)({ref:this.refHandler})},t}(a.Component);function b(e){return a.createElement(g.mq.Consumer,null,(function(t){return a.createElement(v,(0,o.Z)({setReferenceNode:t},e))}))}var x=n(80935),C=n(23663),y=n(97975),w=["className","color","cssModule","caret","split","nav","tag","innerRef"],D={caret:l().bool,color:l().string,children:l().node,className:l().string,cssModule:l().object,disabled:l().bool,onClick:l().func,"aria-haspopup":l().bool,split:l().bool,tag:C.iC,nav:l().bool},O=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind((0,r.Z)(n)),n}(0,s.Z)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled||this.context.disabled?e.preventDefault():(this.props.nav&&!this.props.tag&&e.preventDefault(),this.props.onClick&&this.props.onClick(e),this.context.toggle(e))},n.getRole=function(){return this.context.menuRole||this.props["aria-haspopup"]},n.render=function(){var e,t=this,n=this.props,r=n.className,s=n.color,c=n.cssModule,l=n.caret,p=n.split,d=n.nav,h=n.tag,f=n.innerRef,g=(0,i.Z)(n,w),m=g["aria-label"]||"Toggle Dropdown",v=(0,C.mx)(u()(r,{"dropdown-toggle":l||p,"dropdown-toggle-split":p,"nav-link":d}),c),x="undefined"!==typeof g.children?g.children:a.createElement("span",{className:"sr-only"},m);return d&&!h?(e="a",g.href="#"):h?e=h:(e=y.Z,g.color=s,g.cssModule=c),this.context.inNavbar?a.createElement(e,(0,o.Z)({},g,{className:v,onClick:this.onClick,"aria-expanded":this.context.isOpen,"aria-haspopup":this.getRole(),children:x})):a.createElement(b,{innerRef:f},(function(n){var i,r=n.ref;return a.createElement(e,(0,o.Z)({},g,((i={})["string"===typeof e?"ref":"innerRef"]=r,i),{className:v,onClick:t.onClick,"aria-expanded":t.context.isOpen,"aria-haspopup":t.getRole(),children:x}))}))},t}(a.Component);O.propTypes=D,O.defaultProps={color:"secondary","aria-haspopup":!0},O.contextType=x.D;var R=O}}]);