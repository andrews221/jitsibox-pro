"use strict";(self.webpackChunknew_project=self.webpackChunknew_project||[]).push([[702],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1},o="Tablet settings",l={unversionedId:"installation/para-tablette",id:"installation/para-tablette",title:"Tablet settings",description:"Allow the tablet to have a separate touch screen",source:"@site/docs/installation/para-tablette.md",sourceDirName:"installation",slug:"/installation/para-tablette",permalink:"/jitsibox-pro/docs/installation/para-tablette",draft:!1,editUrl:"https://github.com/snapcom-factory/jitsibox-pro/blob/wiki/new-project/docs/installation/para-tablette.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Pr\xe9sentation",permalink:"/jitsibox-pro/docs/presentation/"},next:{title:"Installation with Chrome",permalink:"/jitsibox-pro/docs/installation/instal-chrome"}},s={},c=[{value:"Allow the tablet to have a separate touch screen",id:"allow-the-tablet-to-have-a-separate-touch-screen",level:2},{value:"Prevent the opening of the notification center and the task view",id:"prevent-the-opening-of-the-notification-center-and-the-task-view",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tablet-settings"},"Tablet settings"),(0,i.kt)("h2",{id:"allow-the-tablet-to-have-a-separate-touch-screen"},"Allow the tablet to have a separate touch screen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure the tablet is plugged in and the screen is expanded (click Windows+P, then ",(0,i.kt)("inlineCode",{parentName:"li"},"Expand Display")," to make sure)."),(0,i.kt)("li",{parentName:"ul"},'Open the "Control Panel", and select "Large Icon Display".'),(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Tablet PC Settings")," (or look for it in the search bar if it doesn't appear), then ",(0,i.kt)("inlineCode",{parentName:"li"},"Configure"),"."),(0,i.kt)("li",{parentName:"ul"},"A message ",(0,i.kt)("inlineCode",{parentName:"li"},"Touch this screen if you want to identify it as the touch screen")," appears on the main screen. Press ",(0,i.kt)("inlineCode",{parentName:"li"},"Enter")," to move it to the second screen, and click on this second screen with the mouse to confirm.")),(0,i.kt)("h2",{id:"prevent-the-opening-of-the-notification-center-and-the-task-view"},"Prevent the opening of the notification center and the task view"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the registry editor with ",(0,i.kt)("inlineCode",{parentName:"li"},"Windows Key + R"),", type ",(0,i.kt)("inlineCode",{parentName:"li"},"regedit")," and validate."),(0,i.kt)("li",{parentName:"ul"},"In the registry editor, navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"HKEY_LOCAL_MACHINE > SOFTWARE > Policies > Microsoft > Windows > EdgeUI"),"."),(0,i.kt)("li",{parentName:"ul"},"If the ",(0,i.kt)("inlineCode",{parentName:"li"},"EdgeUI")," folder exists, select it and double-click on the ",(0,i.kt)("inlineCode",{parentName:"li"},"AllowEdgeSwipe")," key to replace the value ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),". Then restart the computer."),(0,i.kt)("li",{parentName:"ul"},"Alternatively, right-click on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Windows")," folder, and select ",(0,i.kt)("inlineCode",{parentName:"li"},"New > Key"),". Name this key ",(0,i.kt)("inlineCode",{parentName:"li"},"EdgeUI"),"."),(0,i.kt)("li",{parentName:"ul"},"Then right-click on the new ",(0,i.kt)("inlineCode",{parentName:"li"},"EdgeUI")," key, and select ",(0,i.kt)("inlineCode",{parentName:"li"},"New > 32-bit DWORD Value"),". Name this value ",(0,i.kt)("inlineCode",{parentName:"li"},"AllowEdgeSwipe"),", and validate."),(0,i.kt)("li",{parentName:"ul"},"Double-click on this new value, and replace the value ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),". Then restart the computer.")))}d.isMDXComponent=!0}}]);