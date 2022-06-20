"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4321:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:3},l="Experimental Software",c={unversionedId:"software/experimental",id:"software/experimental",title:"Experimental Software",description:"DiffPHC",source:"@site/docs/software/experimental.md",sourceDirName:"software",slug:"/software/experimental",permalink:"/Time-Appliance-Project/docs/software/experimental",draft:!1,editUrl:"https://github.com/opencomputeproject/Time-Appliance-Project/tree/master/website/docs/software/experimental.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Clientgen",permalink:"/Time-Appliance-Project/docs/software/clientgen"}},p={},u=[{value:"DiffPHC",id:"diffphc",level:2},{value:"Linearizible clock test",id:"linearizible-clock-test",level:2},{value:"Open time instrument",id:"open-time-instrument",level:2},{value:"Usage",id:"usage",level:3}],m={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"experimental-software"},"Experimental Software"),(0,a.kt)("h2",{id:"diffphc"},"DiffPHC"),(0,a.kt)("p",null,"DiffPHC is a tool that allows you to measure the difference between two or multiple PHCs of the system."),(0,a.kt)("h2",{id:"linearizible-clock-test"},"Linearizible clock test"),(0,a.kt)("p",null,"This is a vanilla program that tests the true clocks. It is by no means mature, yet. It only depends on the C++11 features and no extra packages are needed(e.g. thrift, etc.) The OSS socket library from ",(0,a.kt)("a",{parentName:"p",href:"https://cs.baylor.edu/~donahoo/practical/CSockets/practical/"},"https://cs.baylor.edu/~donahoo/practical/CSockets/practical/")," are copied and modified for our needs."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," the original socket library does not support IPv6. Currently, efforts are only made to support IPv6 for UDP sockets."),(0,a.kt)("h2",{id:"open-time-instrument"},"Open time instrument"),(0,a.kt)("p",null,"This software is a modified version of testptp. It uses the timestamper inputs of the Time Card to read PPS timestamps from the Time Card, and outputs TIE measurements in a format recognized by Calnex CAT."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Enable the Time Card SMAs as Timestamper inputs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"echo IN: TS1 >> /sys/class/timecard/ocp0/sma1\necho IN: TS2 >> /sys/class/timecard/ocp0/sma2\necho IN: TS3 >> /sys/class/timecard/ocp0/sma3\necho IN: TS4 >> /sys/class/timecard/ocp0/sma4\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Build this tool")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"make\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Run this application using the ptp device for the Time Card")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./OpenTimeInstrument -d /dev/ptp1 -e -1\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Log results are made as .log files, one log per channel.")))}f.isMDXComponent=!0}}]);