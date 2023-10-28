(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3445],{2852:function(s,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/icMySQL/Benchmark/With-Cache",function(){return r(1323)}])},1323:function(s,e,r){"use strict";r.r(e),r.d(e,{__toc:function(){return i}});var o=r(5893),l=r(2673),n=r(2643);let i=[{depth:2,value:"Code",id:"code"},{depth:2,value:"Result(PENDING TO CHANGE)",id:"resultpending-to-change"}];function t(s){let e=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span"},(0,n.a)(),s.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{children:"Benchmark With Cache"}),"\n",(0,o.jsx)(e.p,{children:"Aqu\xed vamos a mostrar cuanto consume las consultas realizadas a una base de datos mysql utilizando nuestro sistema de cache.\r\nObviamente estoy podria variar mucho dependiendo de los componentes del ordenador que realice las operaciones."}),"\n",(0,o.jsx)(e.h2,{id:"code",children:"Code"}),"\n",(0,o.jsx)(e.pre,{"data-language":"lua","data-theme":"default",filename:"Benchmark.lua",hasCopyCode:!0,children:(0,o.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"Citizen."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"CreateThread"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" times "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"10000"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" i"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", times "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"do"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" startTime "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" os."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"nanotime"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" result "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" exports["}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"ice_mysql"'}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]:"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"AwaitSelect"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"SELECT name FROM players WHERE id=?"'}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", {"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"3"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}, "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" endTime "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" os."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"nanotime"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" spend "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" endTime "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" startTime"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        ice "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ice "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" spend"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"ICE: "'}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:".."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(ice"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"/"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1000000"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:".."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"ms"'}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})}),"\n",(0,o.jsx)(e.h2,{id:"resultpending-to-change",children:"Result(PENDING TO CHANGE)"}),"\n",(0,o.jsx)(e.pre,{"data-language":"text","data-theme":"default",children:(0,o.jsx)(e.code,{"data-language":"text","data-theme":"default",children:(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"ICE: 100.24ms"})})})})]})}e.default=(0,l.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,n.a)(),s.components);return e?(0,o.jsx)(e,{...s,children:(0,o.jsx)(t,{...s})}):t(s)},pageOpts:{filePath:"pages/icMySQL/Benchmark/With-Cache.mdx",route:"/icMySQL/Benchmark/With-Cache",timestamp:1698488768e3,title:"Benchmark With Cache",headings:i},pageNextRoute:"/icMySQL/Benchmark/With-Cache"})}},function(s){s.O(0,[2673,9774,2888,179],function(){return s(s.s=2852)}),_N_E=s.O()}]);