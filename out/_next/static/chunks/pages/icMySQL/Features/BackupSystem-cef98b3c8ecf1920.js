(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2457],{1095:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/icMySQL/Features/BackupSystem",function(){return i(7822)}])},7822:function(e,t,i){"use strict";i.r(t),i.d(t,{__toc:function(){return o}});var n=i(5893),s=i(2673),a=i(2643);let o=[{depth:3,value:"Description",id:"description"},{depth:3,value:"Use",id:"use"},{depth:3,value:"Files",id:"files"}];function h(e){let t=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",ul:"ul",li:"li"},(0,a.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{children:"Backup System"}),"\n",(0,n.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["System that allows you to backup your database in a simple way, it will create a folder in the specified path in the config.js with the value of ",(0,n.jsx)(t.code,{children:"Config.BackupDirPath"}),", then it will create a file with the current date, time and database name, the file will contain the database backup in sql format."]}),"\n",(0,n.jsx)(t.h3,{id:"use",children:"Use"}),"\n",(0,n.jsxs)(t.p,{children:["To use this system you have to enable this options ",(0,n.jsx)(t.code,{children:"Config.BackupEnabled"})," in the config.js, specify the mysqldump.exe path in ",(0,n.jsx)(t.code,{children:"Config.MysqlDumpPath"})," and the backup directory path in ",(0,n.jsx)(t.code,{children:"Config.BackupDirPath"})," respective to the FXServer.exe file. Then you have to set the days in an array format, for example: if you want to set to make the backup the 2, 5, 10 days of each month you have to set: ",(0,n.jsx)(t.code,{children:"Config.Days = [2, 5, 10];"}),".\r\nTo set the hour you have to make sure to type in 24h format, for example: if you want to set the backup to 2:00 AM you have to set ",(0,n.jsx)(t.code,{children:'Config.Hour = "02:00";'}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"files",children:"Files"}),"\n",(0,n.jsx)(t.p,{children:"This is the list of the involved files in this feature to help any developer to understand how it works:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"src/db/backup/index.js"})}),"\n"]})]})}t.default=(0,s.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,a.a)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)},pageOpts:{filePath:"pages/icMySQL/Features/BackupSystem.mdx",route:"/icMySQL/Features/BackupSystem",timestamp:1698488768e3,title:"Backup System",headings:o},pageNextRoute:"/icMySQL/Features/BackupSystem"})}},function(e){e.O(0,[2673,9774,2888,179],function(){return e(e.s=1095)}),_N_E=e.O()}]);