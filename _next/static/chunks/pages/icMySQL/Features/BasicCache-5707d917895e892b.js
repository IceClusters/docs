(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5757],{8269:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/icMySQL/Features/BasicCache",function(){return t(730)}])},730:function(e,i,t){"use strict";t.r(i),t.d(i,{__toc:function(){return c}});var n=t(5893),s=t(2673),a=t(2643);let c=[{depth:3,value:"Description",id:"description"},{depth:3,value:"Video",id:"video"},{depth:3,value:"Use",id:"use"},{depth:3,value:"Files",id:"files"}];function o(e){let i=Object.assign({h1:"h1",h3:"h3",p:"p",ul:"ul",li:"li",code:"code"},(0,a.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{children:"Basic Connection Cache System"}),"\n",(0,n.jsx)(i.h3,{id:"description",children:"Description"}),"\n",(0,n.jsx)(i.p,{children:"This is a very basic system to keep alive multiple connections of one database and make queries to them. For example for each database the script will create the neccessary connections and will keep them alive to make queries to them. This is very useful to reduce time of creating a new connection from the pool, an example of that is for example when you make a query, the script will create a new connection from the pool if there isn't available connection, once the query has ended the connection keeps stored in an array an is waiting for other queries, you can change the max connection limit in the config.js, by default the max connection limit is 15."}),"\n",(0,n.jsx)(i.h3,{id:"video",children:"Video"}),"\n",(0,n.jsx)("div",{class:"iframe-container__wrapper mt-10",children:(0,n.jsx)("video",{className:"custom--frame",src:"https://github.com/IceSystem/ice_mysql/assets/96537843/9306427a-f58a-4335-8134-3684a436cfa6",autoplay:!0,controls:!0})}),"\n",(0,n.jsx)(i.h3,{id:"use",children:"Use"}),"\n",(0,n.jsx)(i.p,{children:"You don't have to make anything special to use this feature as this is already implmented in the script, you just have to make the queries as you would do normally, the script will take care of the rest."}),"\n",(0,n.jsx)(i.h3,{id:"files",children:"Files"}),"\n",(0,n.jsx)(i.p,{children:"This is the list of the involved files in this feature to help any developer to understand how it works:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"src/db/Connections.js"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"src/db/Query.lua"})}),"\n"]})]})}i.default=(0,s.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:i}=Object.assign({},(0,a.a)(),e.components);return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(o,{...e})}):o(e)},pageOpts:{filePath:"pages/icMySQL/Features/BasicCache.mdx",route:"/icMySQL/Features/BasicCache",timestamp:1698488768e3,title:"Basic Connection Cache System",headings:c},pageNextRoute:"/icMySQL/Features/BasicCache"})}},function(e){e.O(0,[2673,9774,2888,179],function(){return e(e.s=8269)}),_N_E=e.O()}]);