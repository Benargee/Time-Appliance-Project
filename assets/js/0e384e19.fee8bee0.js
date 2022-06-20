"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:1},c="Time Appliances Project",l={unversionedId:"intro",id:"intro",title:"Time Appliances Project",description:"Intro",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/Time-Appliance-Project/docs/intro",draft:!1,editUrl:"https://github.com/opencomputeproject/Time-Appliance-Project/tree/master/website/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Data Center PTP Profile",permalink:"/Time-Appliance-Project/docs/dc-ptp-profile"}},p={},u=[{value:"Intro",id:"intro",level:2},{value:"Scope",id:"scope",level:2},{value:"Regular Project Calls",id:"regular-project-calls",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"time-appliances-project"},"Time Appliances Project"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"Time is a key element to get the highest efficiency in a distributed system. The performance of a distributed system depends on the synchronization of its elements. Several industries such as telecom, mobile, power, industrial, professional audio and video and many more have embraced the need for highly accurate and more importantly reliable distribution and synchronization of time and frequency across packet networks. Although the use case scenario for each of the industries is different, they all share one common thing and that is, time synchronization. Since there is a diverse need for time synchronization across different industries, driven from different use cases and applications, managing the needs of this industry chain becomes a challenge."),(0,o.kt)("h2",{id:"scope"},"Scope"),(0,o.kt)("p",null,"Time Appliances Project (TAP) aims to provide a platform to bring together, discuss, standardize and share technologies and solutions across industries with the datacenter applications and datacenter network infrastructure as the main interest. The project aims to bring together the community of datacenter operators, application developers, and equipment and semiconductor companies together to enable datacenter time-sensitive applications such as consistency in distributed systems, edge computing, AR/VR and IoT. These applications will greatly benefit from high accuracy, reliable, and scalable distribution and synchronization of time."),(0,o.kt)("p",null,"IEEE 1588 Precision Timing Protocol (PTP) and other synchronization methods have been adopted by various industries to maximize the efficiency of various distributed system use cases. Each use case scenario comes with a set of requirements and configurations. These configurations are collected as a \u2018PTP profile\u2019. Time appliances project aims to support the development of a PTP profile for datacenter applications and datacenter network infrastructure. The profile will cover time-sensitive applications over OCP-compliant and PTP-aware networking infrastructure such as network switches, network clocks, network interface cards, timing modules & connectors, etc. Additionally, the profile will address various requirements for high accuracy and reliable distribution and synchronization of time, such as expected performance, networking, software API, data models, deployment and telemetry. The project also aims at openness and interoperability through the use of open-source PTP software implementations for timing appliances."),(0,o.kt)("p",null,"Datacenter applications are the primary target of time appliances project. In addition, the project extends to related topics on time synchronization in academia, research and other industries. The time appliances project brings together the community and will be highly collaborative through technical meetings and collaboration with other OCP Projects including the Networking, Storage, Server, and Telco Projects."),(0,o.kt)("h2",{id:"regular-project-calls"},"Regular Project Calls"),(0,o.kt)("p",null,"This project meets every two weeks on Wednesdays at 11am PST"),(0,o.kt)("p",null,"Please contact Ahmad Byagowi to propose any agenda items."))}m.isMDXComponent=!0}}]);