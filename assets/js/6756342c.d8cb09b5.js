(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[729],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),f=o,d=m["".concat(u,".").concat(f)]||m[f]||c[f]||a;return t?n.createElement(d,i(i({ref:r},p),{},{components:t})):n.createElement(d,i({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,r,t){"use strict";var n=t(7294);r.Z=function(e){var r=e.children,t=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:o},r)}},1395:function(e,r,t){"use strict";t.d(r,{Z:function(){return p}});var n=t(7294),o=t(944),a=t(6010),i="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,l=39;var p=function(e){var r=e.lazy,t=e.block,p=e.defaultValue,c=e.values,m=e.groupId,f=e.className,d=(0,o.Z)(),b=d.tabGroupChoices,v=d.setTabGroupChoices,y=(0,n.useState)(p),h=y[0],g=y[1],k=n.Children.toArray(e.children),w=[];if(null!=m){var O=b[m];null!=O&&O!==h&&c.some((function(e){return e.value===O}))&&g(O)}var N=function(e){var r=e.currentTarget,t=w.indexOf(r),n=c[t].value;g(n),null!=m&&(v(m,n),setTimeout((function(){var e,t,n,o,a,i,u,l;(e=r.getBoundingClientRect(),t=e.top,n=e.left,o=e.bottom,a=e.right,i=window,u=i.innerHeight,l=i.innerWidth,t>=0&&a<=l&&o<=u&&n>=0)||(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add(s),setTimeout((function(){return r.classList.remove(s)}),2e3))}),150))},x=function(e){var r,t;switch(e.keyCode){case l:var n=w.indexOf(e.target)+1;t=w[n]||w[0];break;case u:var o=w.indexOf(e.target)-1;t=w[o]||w[w.length-1]}null==(r=t)||r.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},f)},c.map((function(e){var r=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:h===r?0:-1,"aria-selected":h===r,className:(0,a.Z)("tabs__item",i,{"tabs__item--active":h===r}),key:r,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:N,onClick:N},t)}))),r?(0,n.cloneElement)(k.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==h})}))))}},9443:function(e,r,t){"use strict";var n=(0,t(7294).createContext)(void 0);r.Z=n},944:function(e,r,t){"use strict";var n=t(7294),o=t(9443);r.Z=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},3149:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),i=t(1395),s=t(8215),u=["components"],l={id:"reporters",title:"Reporters",sidebar_label:"Reporters",slug:"/reporters"},p={unversionedId:"reporters",id:"reporters",isDocsHomePage:!1,title:"Reporters",description:"Default reporter",source:"@site/docs/reporters.md",sourceDirName:".",slug:"/reporters",permalink:"/betterer/docs/reporters",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/docs/reporters.md",version:"current",lastUpdatedBy:"Craig Spence",lastUpdatedAt:1614395603,formattedLastUpdatedAt:"2/27/2021",sidebar_label:"Reporters",frontMatter:{id:"reporters",title:"Reporters",sidebar_label:"Reporters",slug:"/reporters"},sidebar:"docs",previous:{title:"Updating results",permalink:"/betterer/docs/updating-results"},next:{title:"Development workflow",permalink:"/betterer/docs/development-workflow"}},c=[{value:"Default reporter",id:"default-reporter",children:[]},{value:"Custom reporters",id:"custom-reporters",children:[]}],m={toc:c};function f(e){var r=e.components,t=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"default-reporter"},"Default reporter"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Betterer")," has a reporter system for hooking into the test runner. The default reporter lives in it's own package (",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@betterer/reporter"},(0,a.kt)("inlineCode",{parentName:"a"},"@betterer/reporter")),"), and uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vadimdemedes/ink"},"Ink")," for fancy terminal output:"),(0,a.kt)("div",{className:"video__container"},(0,a.kt)("video",{loop:!0,autoPlay:!0,muted:!0,width:"100%"},(0,a.kt)("source",{src:"/betterer/videos/watch.mp4",type:"video/mp4"}))),(0,a.kt)("h3",{id:"custom-reporters"},"Custom reporters"),(0,a.kt)("p",null,"If you want to write your own reporter, you need to implement the ",(0,a.kt)("a",{parentName:"p",href:"./reporter#bettererreporter"},(0,a.kt)("inlineCode",{parentName:"a"},"BettererReporter"))," API and export an instance from a JavaScript module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/html-reporter.ts\nimport { BettererContext, BettererReporter, BettererSummaries } from '@betterer/betterer';\nimport { BettererError } from '@betterer/errors';\nimport { promises as fs } from 'fs';\n\nexport const reporter: BettererReporter = createHTMLReporter();\n\nfunction createHTMLReporter(): BettererReporter {\n  return {\n    contextEnd(_: BettererContext, summaries: BettererSummaries): Promise<void> {\n      return fs.writeFile('report.html', renderHTMLTemplate(summaries), 'utf8');\n    },\n    contextError(_: BettererContext, error: BettererError): void {\n      console.log(error);\n    }\n  };\n}\n\nfunction renderHTMLTemplate(summaries: BettererSummaries): string {\n  // ...\n}\n")),(0,a.kt)("p",null,"You can then use the ",(0,a.kt)("a",{parentName:"p",href:"./running-betterer#start-options"},(0,a.kt)("inlineCode",{parentName:"a"},"--reporter"))," flag when you run ",(0,a.kt)("strong",{parentName:"p"},"Betterer"),":"),(0,a.kt)(i.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn betterer --reporter ./src/html-reporter\n"))),(0,a.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run betterer --reporter ./src/html-reporter\n")))))}f.isMDXComponent=!0},6010:function(e,r,t){"use strict";function n(e){var r,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function o(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(o&&(o+=" "),o+=r);return o}t.d(r,{Z:function(){return o}})}}]);