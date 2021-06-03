(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[987],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),h=a,g=m["".concat(p,".").concat(h)]||m[h]||c[h]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5451:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],s={title:"Improving accessibility with Betterer \u2600\ufe0f",author:"Craig Spence",authorURL:"http://twitter.com/phenomnominal",authorTwitter:"phenomnominal"},p={permalink:"/betterer/blog/2020/05/15/improving-accessibility-with-betterer",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/blog/blog/2020-5-15-improving-accessibility-with-betterer.md",source:"@site/blog/2020-5-15-improving-accessibility-with-betterer.md",title:"Improving accessibility with Betterer \u2600\ufe0f",description:"So, yesterday I announced the new release of \u2600\ufe0f Betterer, thanks if you've checked it out already!",date:"2020-05-15T00:00:00.000Z",formattedDate:"May 15, 2020",tags:[],readingTime:3.74,truncated:!1,prevItem:{title:"Incrementally adding Stylelint rules with Betterer \u2600\ufe0f",permalink:"/betterer/blog/2021/03/01/betterer-and-stylelint"},nextItem:{title:"Betterer v1.0.0 \u2600\ufe0f",permalink:"/betterer/blog/2020/05/14/betterer-v1.0.0"}},l=[{value:"<strong>Betterer</strong> TL;DR",id:"betterer-tldr",children:[]},{value:"Our first <strong>Betterer</strong> test",id:"our-first-betterer-test",children:[{value:"Writing the test",id:"writing-the-test",children:[]},{value:"Writing the constraint",id:"writing-the-constraint",children:[]},{value:"The whole thing",id:"the-whole-thing",children:[]}]},{value:"That&#39;s it!",id:"thats-it",children:[]}],u={toc:l};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"So, yesterday I announced the new release of ",(0,o.kt)("a",{parentName:"p",href:"https://dev.to/phenomnominal/betterer-v1-0-0-301b"},"\u2600\ufe0f ",(0,o.kt)("strong",{parentName:"a"},"Betterer")),", thanks if you've checked it out already!"),(0,o.kt)("p",null,"I wanted to write another post describing a different example, this time with a custom test instead of a built-in test! Let's take a look at how we can prevent accessibility regressions (and hopefully encourage improvements!) \ud83d\udc40"),(0,o.kt)("h2",{id:"betterer-tldr"},(0,o.kt)("strong",{parentName:"h2"},"Betterer")," TL;DR"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/phenomnomnominal/betterer"},(0,o.kt)("strong",{parentName:"a"},"Betterer"))," is a test runner that helps make incremental improvements to your code! It is based upon ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/snapshot-testing"},(0,o.kt)("strong",{parentName:"a"},"Jest"),"'s snapshot testing"),", but with a twist..."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Betterer")," works in two stages. The first time it runs a test, it will take a snapshot of the current state. From that point on, whenever it runs it will compare against that snapshot. It will either throw an error (if the test got worse \u274c), or update the snapshot (if the test got better \u2705). That's pretty much it!"),(0,o.kt)("h2",{id:"our-first-betterer-test"},"Our first ",(0,o.kt)("strong",{parentName:"h2"},"Betterer")," test"),(0,o.kt)("p",null,"Writing a test with ",(0,o.kt)("strong",{parentName:"p"},"Betterer")," involves implementing two functions! More formally, we need to implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"BettererTest")," type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type BettererTest<ResultType> = {\n  test: () => ResultType | Promise<ResultType>;\n  constraint: (result: ResultType, expected: ResultType) => ResultType | Promise<ResultType>;\n};\n")),(0,o.kt)("p",null,"So we need to write two functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"test")," - the action that needs to happen to get a result,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"constraint")," - the rule to apply to check if the result is ",(0,o.kt)("em",{parentName:"li"},"better"),", ",(0,o.kt)("em",{parentName:"li"},"worse")," or the ",(0,o.kt)("em",{parentName:"li"},"same"))),(0,o.kt)("p",null,"We can implement these in their own file, or straight in the ",(0,o.kt)("inlineCode",{parentName:"p"},".betterer.ts")," file. To keep it simple, we'll do the latter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// .betterer.ts\nexport default {\n  'improve accessibility': {\n    test: ...?,\n    constraint: ...?\n  }\n};\n")),(0,o.kt)("h3",{id:"writing-the-test"},"Writing the test"),(0,o.kt)("p",null,"To implement our test, we're going to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer"},(0,o.kt)("strong",{parentName:"a"},"Puppeteer"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dequelabs/axe-core"},(0,o.kt)("strong",{parentName:"a"},"Axe")),". ",(0,o.kt)("strong",{parentName:"p"},"Puppeteer")," is a tool that will run a browser and load a page. ",(0,o.kt)("strong",{parentName:"p"},"Axe")," is a set of accessibility audits that we can run over a web page. We're also going to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dequelabs/axe-puppeteer"},(0,o.kt)("strong",{parentName:"a"},"Axe Puppeteer"))," which makes it a bit easier to use ",(0,o.kt)("strong",{parentName:"p"},"Axe")," with ",(0,o.kt)("strong",{parentName:"p"},"Puppeteer"),"."),(0,o.kt)("p",null,"Lucky for us, we can take the example straight from the ",(0,o.kt)("strong",{parentName:"p"},"Axe Puppeteer")," documentation! \ud83d\ude0d"),(0,o.kt)("p",null,"We launch ",(0,o.kt)("strong",{parentName:"p"},"Puppeteer"),", get the ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," that it creates for us and navigate to a website. Then we execute ",(0,o.kt)("strong",{parentName:"p"},"Axe")," and get the results. Next, we close the page and the browser, before finally returning the number of violations! \ud83e\udd13"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AxePuppeteer } from 'axe-puppeteer';\nimport * as puppeteer from 'puppeteer';\n\nasync function improveAccessibility() {\n  const browser = await puppeteer.launch();\n  const [page] = await browser.pages();\n\n  await page.goto('https://phenomnomnominal.github.io/betterer');\n  const results = await new AxePuppeteer(page).analyze();\n\n  await page.close();\n  await browser.close();\n\n  return results.violations.length;\n}\n")),(0,o.kt)("p",null,"That's our test sorted!"),(0,o.kt)("h3",{id:"writing-the-constraint"},"Writing the constraint"),(0,o.kt)("p",null,"Now what about the ",(0,o.kt)("inlineCode",{parentName:"p"},"constraint"),"? Since our test returns a number, we just need to compare the two results. We want our test to improve when the result is ",(0,o.kt)("em",{parentName:"p"},"smaller"),", so the ",(0,o.kt)("inlineCode",{parentName:"p"},"constraint")," should look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ConstraintResult } from '@betterer/constraint';\n\nfunction constraint(result: number, expected: number): ConstraintResult {\n  if (current === previous) {\n    return ConstraintResult.same;\n  }\n  if (current < previous) {\n    return ConstraintResult.better;\n  }\n  return ConstraintResult.worse;\n}\n")),(0,o.kt)("p",null,"Comparing numbers is fairly common, so we can use the pre-defined ",(0,o.kt)("inlineCode",{parentName:"p"},"smaller")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"bigger")," constraints:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { smaller } from '@betterer/constraint';\n")),(0,o.kt)("p",null,"So I kind of lied, you can write a test with just one function! \ud83d\ude05"),(0,o.kt)("h3",{id:"the-whole-thing"},"The whole thing"),(0,o.kt)("p",null,"Putting it all together, we have our test:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// .betterer.ts\nimport { smaller } from '@betterer/constraint';\nimport { AxePuppeteer } from 'axe-puppeteer';\nimport * as puppeteer from 'puppeteer';\n\nexport default {\n  'improve accessibility': {\n    async test() {\n      const browser = await puppeteer.launch();\n      const [page] = await browser.pages();\n\n      await page.goto('https://phenomnomnominal.github.io/betterer');\n      const results = await new AxePuppeteer(page).analyze();\n\n      await page.close();\n      await browser.close();\n\n      return results.violations.length;\n    },\n    constraint: smaller\n  }\n};\n")),(0,o.kt)("p",null,"How's that look? Not bad I reckon! ",(0,o.kt)("strong",{parentName:"p"},"Betterer")," will run the test for us and update the test snapshot whenever the results get better. That will help make sure that our audit score only goes in the right direction."),(0,o.kt)("p",null,"This test isn't perfect - you may noticed that it doesn't matter ",(0,o.kt)("em",{parentName:"p"},"what")," the violations are, but ",(0,o.kt)("em",{parentName:"p"},"how many")," there are! That's something that we could improve later! For now it will stop us introducing more audit violations, which is a good start \u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f"),(0,o.kt)("p",null,"We could improve this test by keeping track of the specific violations that occurred, so we can have a clearer definition of what ",(0,o.kt)("em",{parentName:"p"},"better")," or ",(0,o.kt)("em",{parentName:"p"},"worse")," really is, but let's leave that for another day!"),(0,o.kt)("h2",{id:"thats-it"},"That's it!"),(0,o.kt)("p",null,"That's all I got for now. Please let me know what you think on ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/phenomnominal"},"Twitter"),"! \ud83e\udd84"))}c.isMDXComponent=!0}}]);