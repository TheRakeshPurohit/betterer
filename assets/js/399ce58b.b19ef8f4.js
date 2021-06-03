(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[459],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=m(n),c=a,d=h["".concat(l,".").concat(c)]||h[c]||u[c]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2736:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={title:"Betterer v1.0.0 \u2600\ufe0f",author:"Craig Spence",authorURL:"http://twitter.com/phenomnominal",authorTwitter:"phenomnominal"},l={permalink:"/betterer/blog/2020/05/14/betterer-v1.0.0",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/blog/blog/2020-05-14-betterer-v1.0.0.md",source:"@site/blog/2020-05-14-betterer-v1.0.0.md",title:"Betterer v1.0.0 \u2600\ufe0f",description:"I'm stoked to announce v1.0.0 of Betterer!",date:"2020-05-14T00:00:00.000Z",formattedDate:"May 14, 2020",tags:[],readingTime:7.09,truncated:!1,prevItem:{title:"Improving accessibility with Betterer \u2600\ufe0f",permalink:"/betterer/blog/2020/05/15/improving-accessibility-with-betterer"}},m=[{value:"What is <strong>Betterer</strong>?",id:"what-is-betterer",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"What&#39;s in v1.0.0?",id:"whats-in-v100",children:[{value:"Force Update (!)",id:"force-update-",children:[]},{value:"Watch mode (!!!)",id:"watch-mode-",children:[]},{value:"VS Code extension (!!!!!)",id:"vs-code-extension-",children:[]},{value:"So, what&#39;s next?",id:"so-whats-next",children:[]}]}],p={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I'm stoked to announce ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/org/betterer"},"v1.0.0")," of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/phenomnomnominal/betterer"},(0,o.kt)("strong",{parentName:"a"},"Betterer"),"!")),(0,o.kt)("p",null,"I've been locked down in New Zealand for the last little while, and I've used some of that time to smash out what I think is a pretty compelling v1 release of a tool that I'm really excited about!"),(0,o.kt)("h2",{id:"what-is-betterer"},"What is ",(0,o.kt)("strong",{parentName:"h2"},"Betterer"),"?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/phenomnomnominal/betterer"},(0,o.kt)("strong",{parentName:"a"},"Betterer"))," is a test runner that helps make incremental improvements to your code! It is based upon ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/snapshot-testing"},(0,o.kt)("strong",{parentName:"a"},"Jest"),"'s snapshot testing"),", but with a twist..."),(0,o.kt)("p",null,"I'm sure many of us have been in situations where we've seen big changes we'd like to make, or new standards or design decisions that we'd like to encourage, but we just don't have the time to do it."),(0,o.kt)("p",null,"Usually one of two things happen:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You start a long-lived branch that is awful to maintain and often impossible to merge. It ends up being a time sink \u23f1")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You and your team make an agreement to make the improvement over time. It gets forgotten about and nothing gets better (in fact usually it gets worse!) \ud83d\ude15"))),(0,o.kt)("p",null,"I've seen this happen time and time and again! Sometimes it's introducing a new style rule to a codebase. Other times it's enabling stricter compilation, or decreasing the number of accessibility failures!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Betterer")," works in two stages. The first time it runs a test, it will take a snapshot of the current state. From that point on, whenever it runs it will compare against that snapshot. It will either throw an error (if the test got worse \u274c), or update the snapshot (if the test got better \u2705). That's pretty much it!"),(0,o.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,o.kt)("p",null,"To get started, you can run the following from the root of your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @betterer/cli init\n")),(0,o.kt)("p",null,"That will give you a brand new ",(0,o.kt)("inlineCode",{parentName:"p"},".betterer.ts")," config file which looks something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// .betterer.ts\n\nexport default {\n  // Add tests here \u2600\ufe0f\n};\n")),(0,o.kt)("p",null,"From here, it's up to you to add some tests!"),(0,o.kt)("p",null,"Let's imagine you're working with a codebase that uses ",(0,o.kt)("a",{parentName:"p",href:"https://momentjs.com/"},(0,o.kt)("strong",{parentName:"a"},"Moment.js")),". You'd like to migrate away from it for performance reasons."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// src/subtract.js\nimport * as moment from 'moment';\n\nconst now = moment();\n\nconsole.log(now.subtract(4, 'years'));\n")),(0,o.kt)("p",null,"Let's also imagine that you're using ",(0,o.kt)("strong",{parentName:"p"},"ESLint")," in this codebase. One approach to remove ",(0,o.kt)("strong",{parentName:"p"},"Moment.js")," might be to use ",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/no-restricted-imports"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"no-restricted-imports")," ",(0,o.kt)("strong",{parentName:"a"},"ESLint")," rule"),", add the ",(0,o.kt)("inlineCode",{parentName:"p"},"eslint-disable-next-line")," comment all over the place, and cross your fingers that people don't just add more... \ud83e\udd14"),(0,o.kt)("p",null,"Betterer gives us a better option! We can create a test for that specific rule:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// .betterer.ts\nimport { eslintBetterer } from '@betterer/eslint';\n\nexport default {\n  'no import from moment': eslintBetterer('./src/**/*.js', [\n    'no-restricted-imports',\n    [\n      'error',\n      {\n        name: 'moment',\n        message: 'Please use \"date-fns\" instead.'\n      }\n    ]\n  ])\n};\n")),(0,o.kt)("p",null,"The first time we run the test with ",(0,o.kt)("strong",{parentName:"p"},"Betterer"),", it will look something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/phenomnomnominal/betterer/master/docs/images/first-run.gif",alt:'Terminal output showing Betterer running and indicating that the "no import from moment" test has run for the first time',title:"First run"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Betterer")," has now created a snapshot of the current state, stored by default in a ",(0,o.kt)("inlineCode",{parentName:"p"},".betterer.results")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// BETTERER RESULTS V1.\nexports[`no import from moment`] = {\n  timestamp: 1589459511808,\n  value: `{\n    "src/subtract.js:566118541": [\n      [0, 0, 33, "\\\'moment\\\' import is restricted from being used. Please use \\\\"date-fns\\\\" instead.", "4035178381"]\n    ]\n  }`\n};\n')),(0,o.kt)("p",null,"The snapshot contains information about the current issues in the code."),(0,o.kt)("p",null,"The next time we run the test, it will look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/phenomnomnominal/betterer/master/docs/images/same-run.gif",alt:'Terminal output showing Betterer running and indicating that the "no import from moment" test has run and stayed the same',title:"Same run"})),(0,o.kt)("p",null,"Now, someone else on the team comes along and doesn't know about the new rule, and they add a new file that uses ",(0,o.kt)("strong",{parentName:"p"},"Moment.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// src/add.js\nimport * as moment from 'moment';\n\nconst now = moment();\n\nconsole.log(now.add(4, 'years'));\n")),(0,o.kt)("p",null,"When ",(0,o.kt)("strong",{parentName:"p"},"Betterer")," runs on their code, they get a nice big error:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/phenomnomnominal/betterer/master/docs/images/worse-run.gif",alt:'Terminal output showing Betterer running and indicating that the "no import from moment" test has run and got worse',title:"Worse run"})),(0,o.kt)("p",null,"Even though a new issue has been introduced, the ",(0,o.kt)("inlineCode",{parentName:"p"},".betterer.results")," file doesn't change!"),(0,o.kt)("p",null,"Our teammate reads the helpful error message from ",(0,o.kt)("strong",{parentName:"p"},"ESLint")," and they update their code to use ",(0,o.kt)("strong",{parentName:"p"},"date-fns"),"..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// src/add.js\nimport { addYears } from 'date-fns';\n\nconsole.log(addYears(Date.now(), 4));\n")),(0,o.kt)("p",null,"... and once again ",(0,o.kt)("strong",{parentName:"p"},"Betterer")," tells them that the result is the same:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/phenomnomnominal/betterer/master/docs/images/same-run.gif",alt:'Terminal output showing Betterer running and indicating that the "no import from moment" test has run and stayed the same',title:"Same run"})),(0,o.kt)("p",null,"Our teammate has a bit of time on their hands, so they decide to fix up our usage of ",(0,o.kt)("strong",{parentName:"p"},"Moment.js")," as well! \ud83c\udf89"),(0,o.kt)("p",null,"This time when they run ",(0,o.kt)("strong",{parentName:"p"},"Betterer"),", everything is good:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/phenomnomnominal/betterer/master/docs/images/better-run.gif",alt:'Terminal output showing Betterer running and indicating that the "no import from moment" test has run and got better',title:"Better run"})),(0,o.kt)("p",null,"There are now no remaining issues, so this test has met its goal. Since the existing issue has been resolved, it is removed from the snapshot in the ",(0,o.kt)("inlineCode",{parentName:"p"},".betterer.results")," file. This means we can move the rule from ",(0,o.kt)("strong",{parentName:"p"},"Betterer")," over to the normal ",(0,o.kt)("strong",{parentName:"p"},"ESLint")," configuration, so we don't reintroduce the issues again."),(0,o.kt)("p",null,"Pretty neat eh! That's an example of the built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"@betterer/eslint")," test, but there are ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/phenomnomnominal/betterer/tree/master/packages/typescript"},"other")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/phenomnomnominal/betterer/tree/master/packages/regexp"},"built-in")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/phenomnomnominal/betterer/tree/master/packages/tsquery"},"tests")," too. And you can of course write your own tests! Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/phenomnomnominal/betterer#custom-tests"},"documentation for more details")," (still a WIP \ud83d\udea7)!"),(0,o.kt)("h2",{id:"whats-in-v100"},"What's in v1.0.0?"),(0,o.kt)("p",null,"Everything I've mentioned so far has been working for a while! Over the last few months I've really solidified the implementation (basically a whole rewrite to be honest!):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Better error handling and error messages"),(0,o.kt)("li",{parentName:"ul"},"Better issue comparison. It now understands file renames and issues that around within the same file"),(0,o.kt)("li",{parentName:"ul"},"The ability to run tests on a single file via the JS API, with ",(0,o.kt)("inlineCode",{parentName:"li"},"betterer.single")),(0,o.kt)("li",{parentName:"ul"},"A whole bunch more tests!")),(0,o.kt)("p",null,"But I've also added a few key features that are worthy of a 1.0.0 release! \ud83d\udd25\ud83d\udd25\ud83d\udd25"),(0,o.kt)("h3",{id:"force-update-"},"Force Update (!)"),(0,o.kt)("p",null,"First things first, you can now run ",(0,o.kt)("strong",{parentName:"p"},"Betterer")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--update")," flag, and the snapshot will be updated even if it got worse! This is handy for when you need to ship something, even if it makes it temporarily worse:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"betterer --update\n")),(0,o.kt)("p",null,"And because this is shamelessly stolen from Jest, you can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"-u"),"."),(0,o.kt)("h3",{id:"watch-mode-"},"Watch mode (!!!)"),(0,o.kt)("p",null,"This one is huge! All the changes that I made were building up to this. You can now run ",(0,o.kt)("strong",{parentName:"p"},"Betterer")," in watch mode and get feedback as you fix up issues:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/i/z47lyc7qmtnnxov4ggra.gif",alt:'Terminal output showing Betterer running in watch mode indicating that the "no import from moment" test has run on a specific file and got better',title:"Watch mode"})),(0,o.kt)("p",null,"Same rules apply here, the snapshot will update whenever the test gets better!"),(0,o.kt)("p",null,"There's a bunch of other cool things that could happen with watch mode (gamification much?), so I'm pumped that it's working! \ud83e\udd29"),(0,o.kt)("h3",{id:"vs-code-extension-"},"VS Code extension (!!!!!)"),(0,o.kt)("p",null,"Way to bury the lede! This is probably the coolest bit! Let's just say it was a build up."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Betterer")," runs entirely in its own world, so the usual ",(0,o.kt)("strong",{parentName:"p"},"ESLint")," or ",(0,o.kt)("strong",{parentName:"p"},"TypeScript")," extensions can't report the issues. But everyone loves seeing red squiggly lines in the code editor, so ",(0,o.kt)("strong",{parentName:"p"},"Betterer")," now has ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=Betterer.betterer-vscode"},"its very own VS Code Extension")," \ud83e\udd2f!"),(0,o.kt)("h4",{id:"initialise-in-a-new-project"},"Initialise in a new project"),(0,o.kt)("p",null,"You can run the ",(0,o.kt)("inlineCode",{parentName:"p"},"betterer.init")," command in a project! It will generate config files and update your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," with scripts and dependencies:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/i/7ij09ag7q2v12pv56h5x.gif",alt:"VS Code screen capture output showing Betterer being initialised in a project",title:"VS Code Extension Betterer init"})),(0,o.kt)("h4",{id:"see-all-issues-in-a-file"},"See all issues in a file"),(0,o.kt)("p",null,"And when you've got some tests setup, it will show you all the existing issues in a file, and when they were first created. And it will show you any new issues as you make them:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/i/uxmtcar93enfqgx12orr.gif",alt:"VS Code screen capture output showing Betterer highlighting issues in a project",title:"VS Code Extension Betterer issues"})),(0,o.kt)("p",null,"I reckon that's pretty sweet!"),(0,o.kt)("h3",{id:"so-whats-next"},"So, what's next?"),(0,o.kt)("p",null,"Well, you're going to try out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/phenomnomnominal/betterer"},(0,o.kt)("strong",{parentName:"a"},"Betterer"))," and open lots of issues and help me make it better(er)! If you'd like to contribute..."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"There are ",(0,o.kt)("em",{parentName:"li"},"definitely")," bugs to fix"),(0,o.kt)("li",{parentName:"ul"},"The test coverage is pretty good, but there aren't any E2E tests for the VS Code extension yet"),(0,o.kt)("li",{parentName:"ul"},"The logging and reporting implementation could use some work"),(0,o.kt)("li",{parentName:"ul"},"There is so much documentation to be written")),(0,o.kt)("p",null,"What a time to be alive! \ud83e\udd13"),(0,o.kt)("p",null,"In case you can't tell, I'm unreasonably excited about this and I really think this will help with large and legacy codebases. Please let me know what you think on the ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/phenomnominal"},"Twitters"),"!"))}u.isMDXComponent=!0}}]);