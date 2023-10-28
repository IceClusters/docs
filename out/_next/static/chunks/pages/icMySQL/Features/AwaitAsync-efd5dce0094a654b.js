(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9556],{7464:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/icMySQL/Features/AwaitAsync",function(){return n(1621)}])},1621:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return h},default:function(){return r}});var s=n(5893),i=n(2673),a=n(2643),o={src:"/docs/_next/static/media/Async.drawio.18a53232.png",height:1615,width:3690,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAbElEQVR42mNwVnN2VHEyUXawjkkLzE2MiDKPdjEIszZmCPEIMjHUNFcNsHdPCQuzT4vVSQk38DbTY7A1tbWw1bY0cTYOC4vJCkjNMLTRFTeWkmZw1/M0k7C293OwT7P2TPV3KXDxc1AK1JYDAPhuGRadREv0AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},c={src:"/docs/_next/static/media/Sync.drawio.225be311.png",height:1615,width:3690,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAbElEQVR42mOwV3B0VHYykbezikoJzkuIjjGNdjUMtzFm8LXzNtBTNdcIcvJKc/ewDHSRSwk39DbTY/Cwd7N10zY1sjcICYlI84+KU7HRETeSkGJw1nY24jKy8bI1TdR3TfIyizf2s1MM0pEHAM3xF/XOXoT1AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4};let h=[{depth:3,value:"Description",id:"description"},{depth:3,value:"Asynchronous Scheme",id:"asynchronous-scheme"},{depth:5,value:"Steps",id:"steps"},{depth:5,value:"Call Stack",id:"call-stack"},{depth:5,value:"Conclusion",id:"conclusion"},{depth:3,value:"Synchronous Scheme",id:"synchronous-scheme"},{depth:5,value:"Call Stack",id:"call-stack-1"},{depth:3,value:"Use",id:"use"},{depth:3,value:"Files",id:"files"},{depth:3,value:"Warn",id:"warn"}];function l(e){let t=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",img:"img",h5:"h5",ol:"ol",li:"li",ul:"ul",strong:"strong"},(0,a.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{children:"Await and Async Support"}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["In the functions that make queries to the database, you can now use the ",(0,s.jsx)(t.code,{children:"await"})," keyword to wait for the query to finish and get the result, this is useful when you want to make a query and get the result in the same function, without having to use callbacks or promises."]}),"\n",(0,s.jsx)(t.h3,{id:"asynchronous-scheme",children:"Asynchronous Scheme"}),"\n",(0,s.jsxs)(t.p,{children:["This scheme is going to explain how asynchronous queries work in the script. This explication is based on JS so probably it's not going to be 100% accurate but it's going to be enough to understand how it works.\r\n",(0,s.jsx)(t.img,{placeholder:"blur",src:o})]}),"\n",(0,s.jsx)(t.h5,{id:"steps",children:"Steps"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"First we declare some vars to use later in the code."}),"\n",(0,s.jsx)(t.li,{children:"We execute the console.log function."}),"\n",(0,s.jsx)(t.li,{children:"We execute the query function, and we send a param as the callback function to be executed later."}),"\n",(0,s.jsx)(t.li,{children:"We execute another console.log function."}),"\n"]}),"\n",(0,s.jsx)(t.h5,{id:"call-stack",children:"Call Stack"}),"\n",(0,s.jsx)(t.p,{children:"The call stack is like a list of tasks that a computer keeps track of while running a program. When a function is called, it gets added to the top of the stack. As the function completes, it's removed from the top.\r\nIn this case as you can see the first step is an anonymous function because JS don't have a main function so all the code is executed inside an anonymous function. Then we have the console.log function, then the query function that register a callback in C++ APIs and when the query is finished the callback is added to the event loop that wait for the call stack to be empty to add the callback to the main thread and execute it. Then we have another console.log function and finally the anonymous function is removed from the call stack."}),"\n",(0,s.jsx)(t.h5,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(t.p,{children:"So as we see the async functions execute in the main thread, but the callback is executed in another thread, so the main thread is not blocked while the query is being executed. That explains why the console.log function is execute before the query callback that is previous at the function."}),"\n",(0,s.jsx)(t.h3,{id:"synchronous-scheme",children:"Synchronous Scheme"}),"\n",(0,s.jsxs)(t.p,{children:["This scheme is going to explain how synchronous queries work in the script. This explication is based on JS so probably it's not going to be 100% accurate but it's going to be enough to understand how it works.\r\n",(0,s.jsx)(t.img,{placeholder:"blur",src:c})]}),"\n",(0,s.jsx)(t.h5,{id:"call-stack-1",children:"Call Stack"}),"\n",(0,s.jsx)(t.p,{children:"As you can see in this scheme the call stack is the same as the async scheme, but in this case the main thread is blocked while the query is being executed, so the console.log function is executed after the query callback."}),"\n",(0,s.jsx)(t.h3,{id:"use",children:"Use"}),"\n",(0,s.jsx)(t.p,{children:"You don't have to make anything special to use this feature as this is already implmented in the script, you just have to make the queries as you would do normally, the script will take care of the rest."}),"\n",(0,s.jsx)(t.h3,{id:"files",children:"Files"}),"\n",(0,s.jsx)(t.p,{children:"This is the list of the involved files in this feature to help any developer to understand how it works:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"src/db/Query.js"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"src/db/[Select, Insert, Delete...].lua"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"src/db/Params.lua"})}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"warn",children:"Warn"}),"\n",(0,s.jsxs)(t.p,{children:["I am ",(0,s.jsx)(t.strong,{children:"not a professional developer"})," so some explanations may not be 100% correct but I have made an effort to document myself and make these schematics so that you can understand how synchronous and asynchronous functions work. If you have any suggestion to improve the explanation, or anything, it will be well received."]})]})}var r=(0,i.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,a.a)(),e.components);return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/icMySQL/Features/AwaitAsync.mdx",route:"/icMySQL/Features/AwaitAsync",timestamp:1698488768e3,title:"Await and Async Support",headings:h},pageNextRoute:"/icMySQL/Features/AwaitAsync"})}},function(e){e.O(0,[2673,9774,2888,179],function(){return e(e.s=7464)}),_N_E=e.O()}]);