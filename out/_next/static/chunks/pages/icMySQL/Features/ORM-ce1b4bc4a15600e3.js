(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6668],{2572:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/icMySQL/Features/ORM",function(){return t(18)}])},18:function(e,s,t){"use strict";t.r(s),t.d(s,{__toc:function(){return o},default:function(){return c}});var n=t(5893),a=t(2673),i=t(2643),l={src:"/docs/_next/static/media/ORM.drawio.ed885f3a.png",height:1210,width:2860,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAU0lEQVR42mNwTcrVcAzgYGBQlBGJK+hm4DVydPOPze9mcPMJt3f1lBbh11U38gvPsjQ1MzO39wwvZNAzVjLQVtHRNDAxNNRREtTXUlZVVJfi4wQAdvkPbMTcuAQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3};let o=[{depth:3,value:"Description",id:"description"},{depth:3,value:"How it works",id:"how-it-works"},{depth:3,value:"Use",id:"use"},{depth:3,value:"Files",id:"files"},{depth:3,value:"Warn",id:"warn"}];function r(e){let s=Object.assign({h1:"h1",h3:"h3",p:"p",a:"a",code:"code",img:"img",ul:"ul",li:"li",pre:"pre",span:"span",strong:"strong"},(0,i.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{children:"ORM(Object Relational Mapping)"}),"\n",(0,n.jsx)(s.h3,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"ORM, or Object-Relational Mapping, is a technique that helps software developers work smoothly with databases. It acts as a translator between the object-oriented code we write and the tables in a relational database. Instead of dealing with complex database queries, we define our data as programming objects, and ORM takes care of converting them into database operations. This simplifies coding, improves readability, and makes database interaction more intuitive. It's like having a helper that understands both programming and databases, making our work easier and more efficient."}),"\n",(0,n.jsx)(s.h3,{id:"how-it-works",children:"How it works"}),"\n",(0,n.jsxs)(s.p,{children:["The ORM system that we have is bassed in ",(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/sequelize",children:"sequelize"})," package from nodejs, this package is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.\r\nWhen the script first load find all connections in the server.cfg when the script test that the connection is establish it will dump all the database structure in ",(0,n.jsx)(s.code,{children:"src/db/orm/models"})," folder, for example if you have a database with id 3, the folder will be created in ",(0,n.jsx)(s.code,{children:"src/db/orm/models/3"}),", in that folder you don't have to touch anything, but make sure that when the database structure change the models need to be updated, you can do it by removing the folder and restarting the script, the script will create the folder again with the new structure.\r\nOnce the script have writed correctly the sctructure in that folder you can use all the functions that we provide to make the queries, the script will take care of the rest.\r\nHere we're going to give to you an example of how it works.\r\n",(0,n.jsx)(s.img,{placeholder:"blur",src:l})]}),"\n",(0,n.jsx)(s.h3,{id:"use",children:"Use"}),"\n",(0,n.jsxs)(s.p,{children:["To use this system make sure that you have enabled in config.js at ",(0,n.jsx)(s.code,{children:"Config.ORM"})," once you have enabled this the script at the first start it will print some messages noticing you how many databases have been found and how many models have been created, once the script have created the models you can use the functions that we provide to make the queries, here we're going to give to you all the list of functions."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"MySQL.ORM.FindAll(databaseID, table, options, callback)"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"MySQL.ORM.FindOne(databaseID, table, options, callback)"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"MySQL.ORM.FindById(databaseID, table, id, callback)"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"MySQL.ORM.FindAndCountAll(databaseID, table, options, callback)"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"MySQL.ORM.Create(databaseID, table, options, callback)"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"MySQL.ORM.Modify(databaseID, table, values, options, callback)"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"MySQL.ORM.Destroy(databaseID, table, options, callback)"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"MySQL.ORM.Count(databaseID, table, options, callback)"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"MySQL.ORM.Max(databaseID, table, field, options, callback)"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"MySQL.ORM.Min(databaseID, table, field, options, callback)"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"MySQL.ORM.Sum(databaseID, table, field, options, callback)"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"MySQL.ORM.Increment(databaseID, field, table, options, callback)"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"MySQL.ORM.Decrement(databaseID, field, table, options, callback)"})}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"MySQL.ORM.BulkCreate(databaseID, table, values, options, callback)"}),"\r\nIn all the functions we provide callbacks if you want to use the function as synchronous you just need to remove the callback and the function will return the result, for example:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{"data-language":"js","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-line-numbers":"","data-language":"js","data-theme":"default","data-line-numbers-max-digits":"1",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"result"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"MySQL"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ORM"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".FindAll"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"users"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    where"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        name"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Daniel"'})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})})]})}),"\n",(0,n.jsx)(s.h3,{id:"files",children:"Files"}),"\n",(0,n.jsx)(s.p,{children:"This is the list of the involved files in this feature to help any developer to understand how it works:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"src/db/Query.js"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"src/db/orm/index.js"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"src/db/orm/models/index.js"})}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"warn",children:"Warn"}),"\n",(0,n.jsxs)(s.p,{children:["I am ",(0,n.jsx)(s.strong,{children:"not a professional developer"})," so some explanations may not be 100% correct but I have made an effort to document myself and make these schematics so that you can understand how ORM system of sequelize work. If you have any suggestion to improve the explanation, or anything, it will be well received."]})]})}var c=(0,a.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.a)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(r,{...e})}):r(e)},pageOpts:{filePath:"pages/icMySQL/Features/ORM.mdx",route:"/icMySQL/Features/ORM",timestamp:1698488768e3,title:"ORM(Object Relational Mapping)",headings:o},pageNextRoute:"/icMySQL/Features/ORM"})}},function(e){e.O(0,[2673,9774,2888,179],function(){return e(e.s=2572)}),_N_E=e.O()}]);