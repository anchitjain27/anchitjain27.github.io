(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[12],{168:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s(0),r=s(7),l=s(20),i=function(e){var t=e.label,s=e.link,n=e.value,r=e.format;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{width:"70%",children:t}),Object(a.jsx)("td",{children:s?Object(a.jsx)("a",{href:s,children:r(n)}):r(n)})]})};i.defaultProps={format:function(e){return e},link:null,value:null};var c=i,o=function(e){var t=e.data;return Object(a.jsx)("table",{children:Object(a.jsx)("tbody",{children:t.map((function(e){return Object(a.jsx)(c,{format:e.format,label:e.label,link:e.link,value:e.value},e.label)}))})})},u=s(21),b=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),s=t[0],r=t[1];return Object(n.useEffect)((function(){var e=setInterval((function(){return function(){var e=new Date("1990-02-05T09:24:00");r(((Date.now()-e)/31556925190.079998).toFixed(11))}()}),25);return function(){clearInterval(e)}}),[]),Object(a.jsx)(a.Fragment,{children:s})},j=[{key:"age",label:"Current age",value:Object(a.jsx)(b,{})},{key:"countries",label:"Countries visited",value:53,link:"https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2"},{key:"location",label:"Current city",value:"New York, NY"}],h=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{children:"Some stats about me"}),Object(a.jsx)(o,{data:j})]})},d=s(154),p=s.n(d),f=s(66),m=s(156),O=s(157),g=s.n(O),k=[{label:"Stars this repository has on github",key:"stargazers_count",link:"https://github.com/mldangelo/personal-site/stargazers"},{label:"Number of people watching this repository",key:"subscribers_count",link:"https://github.com/mldangelo/personal-site/stargazers"},{label:"Number of forks",key:"forks",link:"https://github.com/mldangelo/personal-site/network"},{label:"Number of spoons",value:"0"},{label:"Number of linter warnings",value:"0"},{label:"Open github issues",key:"open_issues_count",link:"https://github.com/mldangelo/personal-site/issues"},{label:"Last updated at",key:"pushed_at",link:"https://github.com/mldangelo/personal-site/commits",format:function(e){return g()(e).format("MMMM DD, YYYY")}},{label:"Lines of Javascript powering this website",value:"2115",link:"https://github.com/mldangelo/personal-site/graphs/contributors"}],v=function(){var e=Object(n.useState)(k),t=Object(u.a)(e,2),s=t[0],r=t[1],l=Object(n.useCallback)(Object(m.a)(p.a.mark((function e(){var t,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/mldangelo/personal-site");case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,r(k.map((function(e){return Object(f.a)(Object(f.a)({},e),{},{value:Object.keys(s).includes(e.key)?s[e.key]:e.value})})));case 7:case"end":return e.stop()}}),e)}))),[]);return Object(n.useEffect)((function(){l()}),[l]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Some stats about this site"}),Object(a.jsx)(o,{data:s})]})};t.default=function(){return Object(a.jsx)(l.a,{title:"Stats",description:"Some statistics about Anchit Jain",children:Object(a.jsxs)("article",{className:"post",id:"stats",children:[Object(a.jsx)("header",{children:Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("h2",{"data-testid":"heading",children:Object(a.jsx)(r.b,{to:"/stats",children:"Stats"})})})}),Object(a.jsx)(h,{}),Object(a.jsx)(v,{})]})})}}}]);
//# sourceMappingURL=12.888c18d6.chunk.js.map