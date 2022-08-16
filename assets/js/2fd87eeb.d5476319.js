"use strict";(self.webpackChunknew_project=self.webpackChunknew_project||[]).push([[91],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Frontend Apps",l={unversionedId:"github-read-me/apps/apps-read-me",id:"github-read-me/apps/apps-read-me",title:"Frontend Apps",description:"Introduction",source:"@site/docs/github-read-me/apps/apps-read-me.md",sourceDirName:"github-read-me/apps",slug:"/github-read-me/apps/apps-read-me",permalink:"/jitsibox-pro/docs/github-read-me/apps/apps-read-me",draft:!1,editUrl:"https://github.com/snapcom-factory/jitsibox-pro/blob/wiki/new-project/docs/github-read-me/apps/apps-read-me.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Roadmap",permalink:"/jitsibox-pro/docs/Roadmap/"},next:{title:"Controller",permalink:"/jitsibox-pro/docs/github-read-me/apps/controller-read-me"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Installation and getting started",id:"installation-and-getting-started",level:2},{value:"Folder structure",id:"folder-structure",level:2},{value:"Noteworthy features",id:"noteworthy-features",level:2},{value:"Common",id:"common",level:3},{value:"Controller",id:"controller",level:3},{value:"Main Screen",id:"main-screen",level:3},{value:"TODOs",id:"todos",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"frontend-apps"},"Frontend Apps"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"These apps are what the users see on the controller and the main screens. They communicate between each other thanks to the bridge."),(0,r.kt)("p",null,"These apps used the same technologies :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://beta.reactjs.org"},"React")," a Javascript frontend library"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org"},"Typescript")," a strongly typed programming language that is a superset of JavaScript"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mui.com/material-ui/getting-started/overview/"},"MUI")," a React Component library allowing for fast prototyping"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://vitejs.dev"},"Vite")," a frontend tooling library that configures our development environment"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://socket.io"},"Socket.io")," to communicate with the bridge using WebSockets")),(0,r.kt)("h2",{id:"installation-and-getting-started"},"Installation and getting started"),(0,r.kt)("p",null,"Before installation, you should add the following to ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"in the ",(0,r.kt)("inlineCode",{parentName:"li"},"controller")," app, add the following ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file at the same level of the ",(0,r.kt)("inlineCode",{parentName:"li"},"index.html")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," files :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"VITE_DOMAIN = meet.jit.si\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"in the ",(0,r.kt)("inlineCode",{parentName:"li"},"main-screen")," app, add the following ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file at the same level of the ",(0,r.kt)("inlineCode",{parentName:"li"},"index.html")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," files :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"VITE_WEBCONF_TOKEN = #add the Webconf JWT\nVITE_DOMAIN = meet.jit.si\n")),(0,r.kt)("p",null,"By running ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i")," in each app folder you should be able to install all of the dependencies necessary for the project to run. Next, you can use the various ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," scripts to launch the app (",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev")," for development for example)."),(0,r.kt)("h2",{id:"folder-structure"},"Folder structure"),(0,r.kt)("p",null,"All of the apps have the same basic folder structure :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"`index.html is the entry point to the website for the browser"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"index.tsx")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"main.tsx")," are loaded inside of the ",(0,r.kt)("inlineCode",{parentName:"li"},"index.html")," and renders the ",(0,r.kt)("inlineCode",{parentName:"li"},"App.tsx")," component"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"App.tsx")," is the entry point to the React application"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Routes.tsx")," is the main component rendered inside of ",(0,r.kt)("inlineCode",{parentName:"li"},"App.tsx")," and renders a different page in function of the URL path."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"views/")," contains the different pages rendered by ",(0,r.kt)("inlineCode",{parentName:"li"},"Routes.tsx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"components/")," contains the reusable components that are throughout the app"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"assets/")," contains images or fonts used in the app"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"services/")," contains various bits of logic that the app uses")))),(0,r.kt)("h2",{id:"noteworthy-features"},"Noteworthy features"),(0,r.kt)("h3",{id:"common"},"Common"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"services/theme.ts")," defines the app theme (color, typography, ...). It is used by all MUI components and is also compatible with external JS libraries thanks to the ",(0,r.kt)("inlineCode",{parentName:"li"},"useTheme")," hook: you can learn more with the ",(0,r.kt)("a",{parentName:"li",href:"https://mui.com/material-ui/customization/theming/"},"MUI documentation")),(0,r.kt)("li",{parentName:"ul"},"We use a plugin to Vite that allows to use the SVGR library: it transforms ",(0,r.kt)("inlineCode",{parentName:"li"},".svg")," files into React components allowing easy use of SVGs in React.")),(0,r.kt)("h3",{id:"controller"},"Controller"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"services/snackbar/")," defines an alert component that can easily be called anywhere in the app. You can read about the philosophy behind our snackbar ",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/swlh/snackbars-in-react-an-exercise-in-hooks-and-context-299b43fd2a2b"},"here")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"components/CustomKeyboard/")," defines the custom keyboard used in the Create and Join Meeting pages. It uses an external library that should be replaced: you can read more about it in the ",(0,r.kt)("inlineCode",{parentName:"li"},"CustomKeyboard.tsx")," file.")),(0,r.kt)("h3",{id:"main-screen"},"Main Screen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"services/mediaDevices")," defines functions that allow us to easily use MediaDevices throughout the app. The way they are chosen is done through the ",(0,r.kt)("inlineCode",{parentName:"li"},"services/config.ts")," file."),(0,r.kt)("li",{parentName:"ul"},"The SharePage tries to get a Share device that it displays on screen: for now the share device is the video stream coming from what is plugged into the HDMI in port of the Poly GC8."),(0,r.kt)("li",{parentName:"ul"},"The MeetingPage uses the Jitsi React SDK, which is under the hood the Jitsi IFrame API. Thus, we are for now limited by what the IFrame API proposes. It is limiting the share functionality inside of a meeting: currently there is no way to select a share device when toggling screen share on")),(0,r.kt)("h2",{id:"todos"},"TODOs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As mentioned above, the CustomKeyboard should be replaced: defining our own keyboard, thanks to MUI components and grid/flex elements, should get us a responsive keyboard, that interoperates well with how we theme the app"),(0,r.kt)("li",{parentName:"ul"},"Add the share screen feature inside a Jitsi Meeting: to do so, we believe that you should either use the low level library or try to ask the Jitsi Meet team to add the missing function ",(0,r.kt)("inlineCode",{parentName:"li"},"setScreenShareDevice")," to the IFrame API (or do yourself a Pull Request)"),(0,r.kt)("li",{parentName:"ul"},"For performance gains, you could check if our use of the ",(0,r.kt)("inlineCode",{parentName:"li"},"useEffect")," hooks were all necessary according to this piece of ",(0,r.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/learn/you-might-not-need-an-effect"},"React documentation"))))}u.isMDXComponent=!0}}]);