(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(b,".").concat(u)]||d[u]||s[u]||l;return n?r.a.createElement(m,i(i({ref:t},c),{},{components:n})):r.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var c=2;c<l;c++)b[c]=n[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},116:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},118:function(e,t,n){"use strict";var a=n(0),r=n(119);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},119:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},120:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(118),b=n(116),i=n(55),o=n.n(i);const c=37,p=39;t.a=function(e){const{lazy:t,block:n,defaultValue:i,values:d,groupId:s,className:u}=e,{tabGroupChoices:m,setTabGroupChoices:O}=Object(l.a)(),[j,N]=Object(a.useState)(i),h=a.Children.toArray(e.children);if(null!=s){const e=m[s];null!=e&&e!==j&&d.some((t=>t.value===e))&&N(e)}const f=e=>{N(e),null!=s&&O(s,e)},g=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":n},u)},d.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===e,className:Object(b.a)("tabs__item",o.a.tabItem,{"tabs__item--active":j===e}),key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e)},onFocus:()=>f(e),onClick:()=>{f(e)}},t)))),t?Object(a.cloneElement)(h.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}},121:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),l=(n(0),n(115)),b=n(120),i=n(121),o={id:"running-betterer",title:"Running Betterer",sidebar_label:"Running Betterer",slug:"/running-betterer"},c={unversionedId:"running-betterer",id:"running-betterer",isDocsHomePage:!1,title:"Running Betterer",description:"You can run Betterer with the Betterer CLI. If you used npx @betterer/cli init to add Betterer to your project, @betterer/cli will already be added as a dependency, and there will be a betterer script in your package.json file.",source:"@site/docs/running-betterer.md",slug:"/running-betterer",permalink:"/betterer/docs/running-betterer",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/docs/running-betterer.md",version:"current",lastUpdatedBy:"Craig Spence",lastUpdatedAt:1614395603,sidebar_label:"Running Betterer",sidebar:"docs",previous:{title:"Installation",permalink:"/betterer/docs/installation"},next:{title:"Test definition file",permalink:"/betterer/docs/test-definition-file"}},p=[{value:"Default mode (run your tests once)",id:"default-mode-run-your-tests-once",children:[{value:"Start options",id:"start-options",children:[]},{value:"Read more about Start mode",id:"read-more-about-start-mode",children:[]}]},{value:"CI mode (run your tests and throw on changes)",id:"ci-mode-run-your-tests-and-throw-on-changes",children:[{value:"CI options",id:"ci-options",children:[]},{value:"Read more about CI mode",id:"read-more-about-ci-mode",children:[]}]},{value:"Watch mode (run your tests when files change)",id:"watch-mode-run-your-tests-when-files-change",children:[{value:"Watch mode controls",id:"watch-mode-controls",children:[]},{value:"Watch options",id:"watch-options",children:[]},{value:"Read more about Watch mode",id:"read-more-about-watch-mode",children:[]}]}],d={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"You can run ",Object(l.b)("strong",{parentName:"p"},"Betterer")," with the ",Object(l.b)("strong",{parentName:"p"},"Betterer CLI"),". If you used ",Object(l.b)("inlineCode",{parentName:"p"},"npx @betterer/cli init")," to add ",Object(l.b)("strong",{parentName:"p"},"Betterer")," to your project, ",Object(l.b)("inlineCode",{parentName:"p"},"@betterer/cli")," will already be added as a dependency, and there will be a ",Object(l.b)("inlineCode",{parentName:"p"},"betterer")," script in your ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," file."),Object(l.b)("h2",{id:"default-mode-run-your-tests-once"},"Default mode (run your tests once)"),Object(l.b)("p",null,"If you just want to run your tests once (like before commiting your code), you can use ",Object(l.b)("inlineCode",{parentName:"p"},"betterer start")," or just ",Object(l.b)("inlineCode",{parentName:"p"},"betterer"),":"),Object(l.b)(b.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"yarn",mdxType:"TabItem"},Object(l.b)("p",null,"Run ",Object(l.b)("inlineCode",{parentName:"p"},"yarn betterer start")," or just ",Object(l.b)("inlineCode",{parentName:"p"},"yarn betterer")," to run ",Object(l.b)("strong",{parentName:"p"},"Betterer")," once.")),Object(l.b)(i.a,{value:"npm",mdxType:"TabItem"},Object(l.b)("p",null,"Run ",Object(l.b)("inlineCode",{parentName:"p"},"npm run betterer start")," or just ",Object(l.b)("inlineCode",{parentName:"p"},"npm run betterer")," to run ",Object(l.b)("strong",{parentName:"p"},"Betterer")," once."))),Object(l.b)("div",{className:"video__container"},Object(l.b)("video",{loop:!0,autoPlay:!0,muted:!0,width:"100%"},Object(l.b)("source",{src:"/betterer/videos/start.mp4",type:"video/mp4"}))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Betterer")," will run your tests, compare the new results against the expected results, and report the updated status. If any test result is better, the ",Object(l.b)("a",{parentName:"p",href:"./results-file"},Object(l.b)("inlineCode",{parentName:"a"},".betterer.results"))," file will be updated with the new result \u2705! If it gets worse, your test will fail and ",Object(l.b)("strong",{parentName:"p"},"Betterer")," will throw an error \u274c!"),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"If it is your first time running ",Object(l.b)("strong",{parentName:"p"},"Betterer"),", it will create a ",Object(l.b)("inlineCode",{parentName:"p"},".betterer.results")," file! If you haven't added a test yet, the ",Object(l.b)("inlineCode",{parentName:"p"},".betterer.results")," file will only contain the header comment."))),Object(l.b)("h3",{id:"start-options"},"Start options"),Object(l.b)("p",null,"You can pass the following options to the ",Object(l.b)("inlineCode",{parentName:"p"},"start")," script:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Option"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-c"),", ",Object(l.b)("inlineCode",{parentName:"td"},"--config")," ","[value]"),Object(l.b)("td",{parentName:"tr",align:null},"Path to test definition file relative to CWD. Takes multiple values"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"./.betterer.ts"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-r"),", ",Object(l.b)("inlineCode",{parentName:"td"},"--results")," ","[value]"),Object(l.b)("td",{parentName:"tr",align:null},"Path to test results file relative to CWD"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"./.betterer.results"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-t"),", ",Object(l.b)("inlineCode",{parentName:"td"},"--tsconfig")," ","[value]"),Object(l.b)("td",{parentName:"tr",align:null},"Path to TypeScript config file relative to CWD"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"null"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-f"),", ",Object(l.b)("inlineCode",{parentName:"td"},"--filter")," ","[value]"),Object(l.b)("td",{parentName:"tr",align:null},"Select tests to run by RegExp. Takes multiple values"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-s"),", ",Object(l.b)("inlineCode",{parentName:"td"},"--silent")),Object(l.b)("td",{parentName:"tr",align:null},"Disable all default reporters. Custom reporters still work normally."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-u"),", ",Object(l.b)("inlineCode",{parentName:"td"},"--update")),Object(l.b)("td",{parentName:"tr",align:null},"Update the results file, even if things get worse"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--strict")),Object(l.b)("td",{parentName:"tr",align:null},'Hide the "how to update" message and set ',Object(l.b)("inlineCode",{parentName:"td"},"--update")," to ",Object(l.b)("inlineCode",{parentName:"td"},"false"),"."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-R"),", ",Object(l.b)("inlineCode",{parentName:"td"},"--reporter")," ","[value]"),Object(l.b)("td",{parentName:"tr",align:null},"npm package name or file path to a Betterer reporter. Takes multiple values"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"['@betterer/reporter']"))))),Object(l.b)("h3",{id:"read-more-about-start-mode"},"Read more about Start mode"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"./test-definition-file"},"The test definition file")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"./results-file"},"The results file")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"./betterer-and-typescript"},"Betterer and TypeScript")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"./filters-and-ignores#filters"},"Filters")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"./updating-results"},"Updating results")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"./reporters"},"Reporters"))),Object(l.b)("h2",{id:"ci-mode-run-your-tests-and-throw-on-changes"},"CI mode (run your tests and throw on changes)"),Object(l.b)("p",null,"If you just want to run your tests on your CI server (like as part of a build review process), you can use ",Object(l.b)("inlineCode",{parentName:"p"},"betterer ci"),":"),Object(l.b)(b.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"yarn",mdxType:"TabItem"},Object(l.b)("p",null,"Run ",Object(l.b)("inlineCode",{parentName:"p"},"yarn betterer ci")," to run ",Object(l.b)("strong",{parentName:"p"},"Betterer")," in CI mode.")),Object(l.b)(i.a,{value:"npm",mdxType:"TabItem"},Object(l.b)("p",null,"Run ",Object(l.b)("inlineCode",{parentName:"p"},"npm run betterer ci")," to run ",Object(l.b)("strong",{parentName:"p"},"Betterer")," in CI mode."))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Betterer")," will run your tests, compare the new results against the expected results, and report the updated status. If there is a difference between the new results and the expected results ",Object(l.b)("strong",{parentName:"p"},"Betterer")," will throw an error \u274c."),Object(l.b)("h3",{id:"ci-options"},"CI options"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Option"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-c"),", ",Object(l.b)("inlineCode",{parentName:"td"},"--config")," ","[path]"),Object(l.b)("td",{parentName:"tr",align:null},"Path to test definition file relative to CWD. Takes multiple values"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"./.betterer.ts"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-r"),", ",Object(l.b)("inlineCode",{parentName:"td"},"--results")," ","[path]"),Object(l.b)("td",{parentName:"tr",align:null},"Path to test results file relative to CWD"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"./.betterer.results"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-t"),", ",Object(l.b)("inlineCode",{parentName:"td"},"--tsconfig")," ","[path]"),Object(l.b)("td",{parentName:"tr",align:null},"Path to TypeScript config file relative to CWD"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"null"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-f"),", ",Object(l.b)("inlineCode",{parentName:"td"},"--filter")," ","[regexp]"),Object(l.b)("td",{parentName:"tr",align:null},"Select tests to run by RegExp. Takes multiple values"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-s"),", ",Object(l.b)("inlineCode",{parentName:"td"},"--silent")),Object(l.b)("td",{parentName:"tr",align:null},"Disable all default reporters. Custom reporters still work normally."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-R"),", ",Object(l.b)("inlineCode",{parentName:"td"},"--reporter")," ","[value]"),Object(l.b)("td",{parentName:"tr",align:null},"npm package name or file path to a Betterer reporter. Takes multiple values"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"['@betterer/reporter']"))))),Object(l.b)("h3",{id:"read-more-about-ci-mode"},"Read more about CI mode"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"./development-workflow"},"Suggested development workflow"))),Object(l.b)("h2",{id:"watch-mode-run-your-tests-when-files-change"},"Watch mode (run your tests when files change)"),Object(l.b)("p",null,"If you just want to run your tests each time your files change (like when working to fix a whole bunch of issues), you can use ",Object(l.b)("inlineCode",{parentName:"p"},"betterer watch"),":"),Object(l.b)(b.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"yarn",mdxType:"TabItem"},Object(l.b)("p",null,"Run ",Object(l.b)("inlineCode",{parentName:"p"},"yarn betterer watch")," to run ",Object(l.b)("strong",{parentName:"p"},"Betterer")," in watch mode.")),Object(l.b)(i.a,{value:"npm",mdxType:"TabItem"},Object(l.b)("p",null,"Run ",Object(l.b)("inlineCode",{parentName:"p"},"npm run betterer watch")," to run ",Object(l.b)("strong",{parentName:"p"},"Betterer")," in watch mode."))),Object(l.b)("div",{className:"video__container"},Object(l.b)("video",{loop:!0,autoPlay:!0,muted:!0,width:"100%"},Object(l.b)("source",{src:"/betterer/videos/watch.mp4",type:"video/mp4"}))),Object(l.b)("h3",{id:"watch-mode-controls"},"Watch mode controls"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Press ",Object(l.b)("inlineCode",{parentName:"li"},"q")," to quit"),Object(l.b)("li",{parentName:"ul"},"Press ",Object(l.b)("inlineCode",{parentName:"li"},"f")," to modify filters"),Object(l.b)("li",{parentName:"ul"},"Press ",Object(l.b)("inlineCode",{parentName:"li"},"i")," to modify ignores")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Betterer")," will start watch mode, and wait for any files to change. When a file is saved, it will run any tests that apply to that file, compare the new results against the saved results, and report the updated status. When you quit watch mode (by pressing ",Object(l.b)("inlineCode",{parentName:"p"},"q"),"), the ",Object(l.b)("a",{parentName:"p",href:"./results-file"},Object(l.b)("inlineCode",{parentName:"a"},".betterer.results"))," file will be updated with the new results \u2705!"),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"When running in watch mode, ",Object(l.b)("strong",{parentName:"p"},"Betterer")," will currently only run ",Object(l.b)("a",{parentName:"p",href:"./betterer-file-test"},"File Tests"),". This might change in the future, so please raise an issue with your use case!"))),Object(l.b)("h3",{id:"watch-options"},"Watch options"),Object(l.b)("p",null,"You can pass the following options to the ",Object(l.b)("inlineCode",{parentName:"p"},"watch")," script:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Option"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-c"),", ",Object(l.b)("inlineCode",{parentName:"td"},"--config")," ","[path]"),Object(l.b)("td",{parentName:"tr",align:null},"Path to test definition file relative to CWD. Takes multiple values"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"./.betterer.ts"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-r"),", ",Object(l.b)("inlineCode",{parentName:"td"},"--results")," ","[path]"),Object(l.b)("td",{parentName:"tr",align:null},"Path to test results file relative to CWD"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"./.betterer.results"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-t"),", ",Object(l.b)("inlineCode",{parentName:"td"},"--tsconfig")," ","[path]"),Object(l.b)("td",{parentName:"tr",align:null},"Path to TypeScript config file relative to CWD"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"null"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-f"),", ",Object(l.b)("inlineCode",{parentName:"td"},"--filter")," ","[regexp]"),Object(l.b)("td",{parentName:"tr",align:null},"Select tests to run by RegExp. Takes multiple values"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-s"),", ",Object(l.b)("inlineCode",{parentName:"td"},"--silent")),Object(l.b)("td",{parentName:"tr",align:null},"Disable all default reporters. Custom reporters still work normally."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-i"),", ",Object(l.b)("inlineCode",{parentName:"td"},"--ignore")," ","[glob]"),Object(l.b)("td",{parentName:"tr",align:null},"Ignore files by Glob when running in watch mode. Takes multiple values"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-R"),", ",Object(l.b)("inlineCode",{parentName:"td"},"--reporter")," ","[value]"),Object(l.b)("td",{parentName:"tr",align:null},"npm package name or file path to a Betterer reporter. Takes multiple values"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"['@betterer/reporter']"))))),Object(l.b)("h3",{id:"read-more-about-watch-mode"},"Read more about Watch mode"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"./filters-and-ignores"},"Filters and Ignores"))))}s.isMDXComponent=!0}}]);