(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[572],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2067:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],p={id:"api",title:"Betterer API",description:"JS API reference for Betterer",slug:"/api"},l={unversionedId:"api/api",id:"api/api",isDocsHomePage:!1,title:"Betterer API",description:"JS API reference for Betterer",source:"@site/docs/api/api.md",sourceDirName:"api",slug:"/api",permalink:"/betterer/docs/api",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/docs/api/api.md",version:"current",lastUpdatedBy:"Craig Spence",lastUpdatedAt:1614393388,formattedLastUpdatedAt:"2/27/2021",frontMatter:{id:"api",title:"Betterer API",description:"JS API reference for Betterer",slug:"/api"},sidebar:"api",next:{title:"Betterer Configuration",permalink:"/betterer/docs/config"}},c=[{value:"<code>betterer()</code>",id:"betterer",children:[]},{value:"<code>betterer.watch()</code>",id:"bettererwatch",children:[]},{value:"<code>betterer.runner()</code>",id:"bettererrunner",children:[]}],u={toc:c};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Betterer")," has a JavaScript API which can be used to start a run programatically."),(0,i.kt)("h2",{id:"betterer"},(0,i.kt)("inlineCode",{parentName:"h2"},"betterer()")),(0,i.kt)("p",null,"Run ",(0,i.kt)("strong",{parentName:"p"},"Betterer")," with given options."),(0,i.kt)("p",null,"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { betterer } from '@betterer/betterer';\n\nconst summary = await betterer(options);\n")),(0,i.kt)("p",null,"Args:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options"),": ",(0,i.kt)("a",{parentName:"li",href:"./config#bettereroptionsstart"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererOptionsStart?"))," - An options object for a ",(0,i.kt)("strong",{parentName:"li"},"Betterer")," run in default mode")),(0,i.kt)("p",null,"Returns: ",(0,i.kt)("a",{parentName:"p",href:"./context#betterersummary"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererSummary"))),(0,i.kt)("h2",{id:"bettererwatch"},(0,i.kt)("inlineCode",{parentName:"h2"},"betterer.watch()")),(0,i.kt)("p",null,"Create a ",(0,i.kt)("strong",{parentName:"p"},"BettererRunner")," with given options. Starts up a file watcher in the current directory."),(0,i.kt)("p",null,"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { betterer } from '@betterer/betterer';\n\nconst runner = await betterer.watch(options);\n")),(0,i.kt)("p",null,"Args:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options"),": ",(0,i.kt)("a",{parentName:"li",href:"./config#bettereroptionsrunner"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererOptionsRunner?"))," - An options object for creating a ",(0,i.kt)("strong",{parentName:"li"},"Betterer")," runner.")),(0,i.kt)("p",null,"Returns: ",(0,i.kt)("a",{parentName:"p",href:"./runner#bettererrunner"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererRunner"))),(0,i.kt)("h2",{id:"bettererrunner"},(0,i.kt)("inlineCode",{parentName:"h2"},"betterer.runner()")),(0,i.kt)("p",null,"Create a ",(0,i.kt)("strong",{parentName:"p"},"BettererRunner")," with given config."),(0,i.kt)("p",null,"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { betterer } from '@betterer/betterer';\n\nconst runner = await betterer.runner(options);\n")),(0,i.kt)("p",null,"Args:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options"),": ",(0,i.kt)("a",{parentName:"li",href:"./config#bettereroptionswatch"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererOptionsWatch?"))," - An options object for a ",(0,i.kt)("strong",{parentName:"li"},"Betterer")," run in Watch mode")),(0,i.kt)("p",null,"Returns: ",(0,i.kt)("a",{parentName:"p",href:"./runner#bettererrunner"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererRunner"))))}s.isMDXComponent=!0}}]);