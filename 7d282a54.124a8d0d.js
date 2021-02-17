(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(199)),s={title:"Examples II",description:"Introduction > Examples: Wechaty interactive example chatbots"},c={unversionedId:"examples2",id:"examples2",isDocsHomePage:!1,title:"Examples II",description:"Introduction > Examples: Wechaty interactive example chatbots",source:"@site/docs/examples2.md",slug:"/examples2",permalink:"/docs/examples2",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/examples2.md",version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1613550047,sidebar:"docs",previous:{title:"Examples",permalink:"/docs/examples"},next:{title:"Alternatives",permalink:"/docs/introduction/alternatives"}},i=[{value:"Ding Dong Bot",id:"ding-dong-bot",children:[]},{value:"Counter",id:"counter",children:[]},{value:"More Examples",id:"more-examples",children:[]}],l={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Redux is distributed with a few examples in its ",Object(o.b)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/tree/master/examples"},"source code"),". Most of these examples are also on ",Object(o.b)("a",{parentName:"p",href:"https://codesandbox.io"},"CodeSandbox"),", an online editor that lets you play with the examples online."),Object(o.b)("h2",{id:"ding-dong-bot"},"Ding Dong Bot"),Object(o.b)("p",null,"Run the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started/tree/master/examples/ding-dong-bot.ts"},"Ding Dong Bot")," example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/wechaty/wechaty-getting-started.git\n\ncd wechaty-getting-started\nnpm install\nnpm start\n")),Object(o.b)("p",null,"Or check out the ",Object(o.b)("a",{parentName:"p",href:"https://codesandbox.io/s/github/wechaty/wechaty-getting-started/tree/master/examples/third-parties/codesandbox?hidenavigation=1&module=%2Fding-dong-bot.ts&theme=dark"},"sandbox"),":"),Object(o.b)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/wechaty/wechaty-getting-started/tree/master/examples/third-parties/codesandbox?hidenavigation=1&module=%2Fding-dong-bot.ts&theme=dark",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),Object(o.b)("p",null,"It does not require a build system or a view framework and exists to show the raw Redux API used with ES5."),Object(o.b)("h2",{id:"counter"},"Counter"),Object(o.b)("p",null,"Run the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/tree/master/examples/counter"},"Counter")," example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/reduxjs/redux.git\n\ncd redux/examples/counter\nnpm install\nnpm start\n")),Object(o.b)("p",null,"Or check out the ",Object(o.b)("a",{parentName:"p",href:"https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter"},"sandbox"),":"),Object(o.b)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/counter",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),Object(o.b)("p",null,"This is the most basic example of using Redux together with React. For simplicity, it re-renders the React component manually when the store changes. In real projects, you will likely want to use the highly performant ",Object(o.b)("a",{parentName:"p",href:"https://github.com/reduxjs/react-redux"},"React Redux")," bindings instead."),Object(o.b)("p",null,"This example includes tests."),Object(o.b)("h2",{id:"more-examples"},"More Examples"),Object(o.b)("p",null,"You can find more examples in the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/markerikson/redux-ecosystem-links/blob/master/apps-and-examples.md"},"Redux Apps and Examples"),"\npage of the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/markerikson/redux-ecosystem-links"},"Redux Addons Catalog"),"."))}p.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);