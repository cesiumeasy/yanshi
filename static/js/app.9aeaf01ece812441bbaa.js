webpackJsonp([16],{"+hDD":function(e,t){e.exports={navList:[{title:"个人信息"},{title:"密码修改"},{title:"退出"}]}},0:function(e,t){},1:function(e,t){},"2PFs":function(e,t){},"6XYd":function(e,t){},"6ous":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAYAAABCfffNAAAAAXNSR0IArs4c6QAAAQhJREFUSA3tlUkSgjAQRZt53Lr2Ct7/Cl7HAqooCvOgooCQIMJKekFIp/v98JlEzvhLB5y2ba9lWd6bpsn3dsDzvEeSJDdfgUN1cimKQuq63k0nCAJR3AS+q6lpmkoYhnr60wgHno6XCAmEoyjSa5tG+vsLeLdj1yjiOBbHcaSqqlF+zQT4nBsfIsDYjRZSD4aVTy0C3Ie5GNk1LGBHNAIwBev4vyRA76IIizQCWBIin2WZ+P6sISC6MIpQAQDQVMh13S6v3oWeZDhaRegFlOe5ACa+Eejqu64VB8AIYeFQcEWrmM2cEPRNnqSt01V2WSmWglPEYtB4mf8JrzSf5KOiPAp8crc78ATgxCGh5+LymwAAAABJRU5ErkJggg=="},CuRo:function(e,t){},Dod7:function(e,t,n){"use strict";var a=n("rVsN"),r=n.n(a),o=n("3cXf"),s=n.n(o),i=n("+L5+"),c=n.n(i),u=n("3idv"),l=(n.n(u),n("88IO"));n.n(l);c.a.defaults.baseURL=Object({NODE_ENV:"production"}).API;var d=c.a.create({timeout:2e4,responseType:"json",withCredentials:!0,headers:{Authorization:"1","Content-Type":"application/json;charset=utf-8"}});d.interceptors.request.use(function(e){var t=s()(e).split(":");return"api"==t[t.length-1].split("/")[1]?e.headers.Authorization=""+localStorage.token:localStorage.access_token&&(e.headers.Authorization="Bearer "+localStorage.access_token),e},function(e){return r.a.reject(e)}),t.a=d},GK83:function(e,t){},IuJc:function(e,t){e.exports={CO_URL:"http://192.168.101.152:7001",BACK_URL:"http://192.168.101.152:81/",INFO:"http://192.168.101.152:9999",EXAM:"http://192.168.101.152:8086",SYS:"http://192.168.101.152:8085",EXAM1:"http://192.168.103.148:8086",NOTE:"http://192.168.101.152:8085/api"}},"JNE/":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("nhZ1"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=n("C7Lr")({name:"App",mounted:function(){}},r,!1,function(e){n("JNE/")},null,null).exports,s=n("lPSU"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("svg",{staticClass:"icon",staticStyle:{"margin-left":"10px"},attrs:{"aria-hidden":"true"}},[t("use",{attrs:{"xlink:href":"#icon-a-ShapeCopy"}})]),this._v(" "),t("el-breadcrumb",{attrs:{separator:"-"}},[t("el-breadcrumb-item",[this._v(this._s(this.idxName))])],1)],1)},staticRenderFns:[]};var c={name:"User",components:{List:n("C7Lr")({name:"List",props:["idxName"]},i,!1,function(e){n("iVbP")},"data-v-140857e8",null).exports},data:function(){return{idx:2,listArr:["系统配置","数据库管理","用户管理","配置管理","日志管理","课程管理","推演管理","仿真管理","考试管理","日志管理"],idxName:"用户管理"}},methods:{handChangePage:function(e,t){switch(this.idx=t,this.idxName=e,e){case"用户管理":this.$router.push("/list/user");break;case"系统配置":this.$router.push("/list/system")}}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",[a("el-header",[a("div",{staticClass:"header-left"},[a("img",{attrs:{src:n("jkTV"),alt:""}}),e._v(" "),a("span",[e._v("保障技术推演培训考试系统")])]),e._v(" "),a("div",{staticClass:"header-right"},[a("img",{attrs:{src:n("6ous"),alt:""}}),e._v(" "),a("span",[e._v("username")])])]),e._v(" "),a("el-container",[a("el-aside",{attrs:{width:"210px"}},[a("div",{staticClass:"user"},[a("div",{staticClass:"user-img"},[a("svg",{staticClass:"icon",staticStyle:{width:"60px",height:"57px"},attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-renwu"}})])]),e._v(" "),a("div",{staticClass:"user-details"},[a("p",[a("span",[e._v("张三")]),e._v(" "),a("span",[e._v(",欢迎您!")])]),e._v(" "),a("p",[a("span",[e._v("角色")]),e._v(" "),a("span",[e._v("系统管理员")])])])]),e._v(" "),a("div",[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2","text-color":"#fff","active-text-color":"#fff"},on:{open:e.handleOpen,close:e.handleClose}},e._l(e.listArr,function(t,n){return a("el-menu-item",{key:n,class:[e.idx===n?"active":""],attrs:{index:n},on:{click:function(a){return e.handChangePage(t,n)}}},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-peizhiguanli"}})]),e._v(" "),a("span",[e._v(e._s(t))])])}),1)],1)]),e._v(" "),a("el-main",[a("List",{attrs:{idxName:e.idxName}}),e._v(" "),a("router-view"),e._v(" "),a("img",{attrs:{src:"",alt:""}})],1)],1)],1)},staticRenderFns:[]};n("C7Lr")(c,u,!1,function(e){n("xiBf")},"data-v-40ab95c8",null).exports;var l=n("aexd"),d=n.n(l),h=n("+hDD"),f=n.n(h),m=n("Prow"),p={data:function(){return{navs:[],userInfo:""}},mounted:function(){this.navs=f.a.navList;var e=this;setTimeout(function(){e.userInfo=JSON.parse(localStorage.getItem("userInfo"))},1e3)},methods:{go:function(e){switch(console.log(e),e.title){case"退出":Object(m.a)({access_token:localStorage.getItem("access_token")}).then(function(e){window.location.href=e.data}).catch(function(e){});break;case"密码修改":this.$router.push("/student/pwdInfo");break;case"个人信息":this.$router.push("/student/userInfo")}}}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header-right"},[a("el-dropdown",[a("span",{staticClass:"rname"},[e._v(e._s(e.userInfo.name)),a("img",{staticClass:"nameImg",attrs:{src:n("6ous"),alt:""}})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},on:{command:e.go},slot:"dropdown"},e._l(e.navs,function(t,n){return a("el-dropdown-item",{key:n,attrs:{command:t.title}},[a("div",{on:{click:function(n){return e.go(t)}}},[e._v(e._s(t.title))])])}),1)],1)],1)},staticRenderFns:[]};var g=n("C7Lr")(p,v,!1,function(e){n("2PFs")},"data-v-5f0ebbdd",null).exports,I=(n("VDCd"),{data:function(){return{navs:{},activeIndex:"0"}},components:{headerR:g},mounted:function(){this.navs=d.a},methods:{go:function(e){switch(console.log(e),e.title){case"首页":this.$router.push("/student/home");break;case"我的课程":this.$router.push("/student/myClass");break;case"我的考试":this.$router.push("/student/exam");break;case"学习笔记":this.$router.push("/student/note");break;case"厂房综合":this.$router.push("/three");break;case"cesium":this.$router.push("/student/cesium")}this.$emit("select",{item:e})}}}),A={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"fiex"},[a("el-col",{attrs:{span:7}},[a("div",{staticClass:"header-left"},[a("img",{attrs:{src:n("jkTV"),alt:""}}),e._v(" "),a("span",[e._v(e._s(e.navs.headerTitle))])])]),e._v(" "),e._l(e.navs.headerList,function(t,n){return a("el-col",{key:n,attrs:{span:2}},[a("div",{staticClass:"grid-content",on:{click:function(n){return e.go(t)}}},[e._v(e._s(t.title))])])}),e._v(" "),a("el-col",{attrs:{span:2}},[a("headerR")],1)],2)},staticRenderFns:[]};var C=n("C7Lr")(I,A,!1,function(e){n("6XYd")},"data-v-d2108c4c",null).exports,w=n("oAV5"),b={name:"Index",components:{Header:C},data:function(){return{data:[]}},mounted:function(){localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InBhc3N3b3JkIjoiMTIzIiwibmFtZSI6IuiAgeW4iDEiLCJpZCI6MX0sImV4cCI6MTcxNjY5ODE3MH0.jQnLKrh5xnoTp27VC1a90WNhtOeIhnpe582mV7qrSt8"),this.$router.currentRoute.query.access_token&&(localStorage.setItem("Browser-User-Token",this.$router.currentRoute.query.access_token),localStorage.setItem("access_token",this.$router.currentRoute.query.access_token),Object(w.i)())},methods:{select:function(e){}}},E={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-container",[t("img",{staticClass:"bgimg",attrs:{src:n("rOIf")}}),this._v(" "),t("el-header",[t("Header",{on:{select:this.select}})],1),this._v(" "),t("el-main",[t("div",{attrs:{id:"container"}},[t("router-view")],1)])],1)},staticRenderFns:[]};var x=n("C7Lr")(b,E,!1,function(e){n("dDJl")},"data-v-67a0a1de",null).exports;a.default.use(s.a);var S=new s.a({routes:[{path:"/three",name:"three",component:function(){return n.e(1).then(n.bind(null,"pGRZ"))}},{path:"/",name:"Index",component:x,redirect:"/three",children:[{path:"/student/home",name:"home",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"4a8+"))}},{path:"/student/myClass",name:"myClass",component:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"2pM5"))}},{path:"/student/exam",name:"exam",component:function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"UNgz"))}},{path:"/student/note",name:"note",component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"0bLe"))}},{path:"/student/userInfo",name:"userInfo",component:function(){return n.e(6).then(n.bind(null,"9yYL"))}},{path:"/student/pwdInfo",name:"pwdInfo",component:function(){return n.e(5).then(n.bind(null,"xSsO"))}},{path:"/student/training",name:"training",component:function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"aMcq"))}},{path:"/student/deduction",name:"deduction",component:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"ZxfC"))}},{path:"/student/sec/classSec",name:"classSec",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"ad7m"))}},{path:"/student/sec/videoPSec",name:"videoPSec",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"N9Eu"))}},{path:"/student/sec/deduceSec",name:"deduceSec",component:function(){return n.e(8).then(n.bind(null,"edOz"))}},{path:"/student/sec/examSec",name:"examSec",component:function(){return n.e(3).then(n.bind(null,"JddU"))}},{path:"/student/sec/noteP",name:"noteP",component:function(){return n.e(13).then(n.bind(null,"xvg3"))}}]}]}),_=n("88IO"),k=n.n(_),y=(n("GK83"),n("CuRo"),n("CRWL")),N=n.n(y),R=(n("r8N3"),n("cDob"),n("+L5+")),L=n.n(R);a.default.prototype.$ajax=L.a,a.default.use(N.a),a.default.config.productionTip=!1,a.default.use(k.a),new a.default({el:"#app",router:S,components:{App:o},template:"<App/>"})},Prow:function(e,t,n){"use strict";t.a=function(e){return a.a.get(o.a.CO_URL+"/co/auth/logout?access_token="+e.access_token+"&flag=1&state=0&callBackUrl="+o.a.BACK_URL)},t.e=function(e){return a.a.get(o.a.INFO+"/co/user/info")},t.d=function(e){return a.a.post(o.a.EXAM+"/api/student/exam/paper/select/"+e.id)},t.f=function(e){return a.a.post(o.a.EXAM+"/api/student/paper/answer/answerSubmit/10004",e)},t.c=function(e){return a.a.get(o.a.NOTE+"/emulation/emulation/query.do?search-LIKE-EMU_TITLE_NAME="+e.name)},t.b=function(e){return a.a.get(o.a.NOTE+"/emulation/emulation/download?emulationId="+e.id)};var a=n("Dod7"),r=n("IuJc"),o=n.n(r)},VDCd:function(e,t){e.exports={url:"http://192.168.101.152/#/home?ZmxhZz0xJmNhbGxCYWNrVXJsPWh0dHA6Ly8xOTIuMTY4LjEwMS4xNTIvIy9ob21l"}},aexd:function(e,t){e.exports={headerTitle:"培训考试系统",headerList:[{title:"厂房综合"},{title:"首页"},{title:"我的课程"},{title:"我的考试"},{title:"学习笔记"},{title:"cesium"}]}},cDob:function(e,t){},dDJl:function(e,t){},iVbP:function(e,t){},jkTV:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAbCAYAAABiFp9rAAAAAXNSR0IArs4c6QAAAg5JREFUSA3tlj0oRWEYxx1ERotikEEZlBhIFmSxGCjuQIqFASklFilRksHio0hZFCaDwWSyWZRFycdioyT5vn7/c+497nnPObrnljJ46nff9/l6//e895z3XCsrxOLx+CCpmZB01PBNblAHIj3El8GCHTiDTKyLpkp49DUj0gHvsAoyFUc2+vrhE67g0rMAgVZ4gS3IAVlkIXpi8AFLMAHfQjiN8AR7IBELZJGEqG+DV1gHrfEthFMHD3AAebpMxshC9LTAM2xDdmIdR4hAFdzBERQk95J5JCHqG+AR9sG9yZjbQgrMQyGUwykJBo9pn2c9kWCnhPAxdFqW9W6WSCgHdPseGknd2qNwAudGznSLCHTDCCIvZtL2+baHsGEmiaW9ddRWg6wiYB176+wfzEz+hv8vlPGu/m/d398690wK+Ko6MWS9PIj1zjT0UyeDTA/nvTN1P2s1CxSiWMfPGujM0tPue+KJpVp+wmlmfEtJaP0yuNDrwHcEEdNBqhdXLKUpdEqd7wgipiNML1C9SFt9QgRnQa/gvtCVjQS1QUIrxPWXoN0uZ+JeEXPtsWzYWOtHl3qPEP4CaEf0J8cxHFuIcQhkk8lcuiM9rhDzKS2CDXj6CUjoGrRdc55kmg59NSBbdYb4mNmavOtKSdzCM4VTZlEafnGiRlcxzctv0ezRnbFLsMlMZOhvIjIe1PsFs9zs+xmwecUAAAAASUVORK5CYII="},oAV5:function(e,t,n){"use strict";t.i=function(){Object(i.e)().then(function(e){localStorage.setItem("userInfo",s()(e.data))})},t.d=function(e){var t=[],n=[];return e.titleItems.forEach(function(e){e.questionItems.forEach(function(e){var a=0;e.items.forEach(function(t){t.nowId=e.id+"."+a,a++,t.nowContent=t.prefix+"."+t.content}),e.nowAnswer="",n.push({answores:"",id:e.id}),t.push(e)})}),[t,e,n]},t.q=function(e){console.log(e);var t=[],n=[],a=[],r=[];e.titleItems.forEach(function(e){"单选题"==e.name&&0==t.length&&e.questionItems.forEach(function(e){t.push("")}),"多选题"==e.name&&0==n.length&&e.questionItems.forEach(function(e){n.push("")}),"判断题"==e.name&&0==a.length&&e.questionItems.forEach(function(e){a.push("")}),"简答题"==e.name&&0==r.length&&e.questionItems.forEach(function(e){r.push("")})}),localStorage.setItem("ranswors",u(t)),localStorage.setItem("danswors",u(n)),localStorage.setItem("panswors",u(a)),localStorage.setItem("janswors",u(r))},t.m=u,t.g=function(e){if(!e||!e.list)return 0;var t=0;return e.list.forEach(function(n){1==e.key?""!=n.answor&&t++:2==e.key?n.answor.length>0&&t++:3==e.key?""!=n.answor&&t++:4==e.key&&""!=n.answor&&t++}),t},t.c=function(e){return JSON.parse(e)},t.o=function(e){var t=[];return e.questionItems.forEach(function(e){t.push({answor:"",id:e.id})}),t},t.p=function(e){var t=[];return e.questionItems.forEach(function(e){t.push({answor:[]})}),t},t.a=function(){localStorage.removeItem("ranswors"),localStorage.removeItem("danswors"),localStorage.removeItem("panswors"),localStorage.removeItem("janswors")},t.h=l,t.e=function(e){var t=void 0,n=void 0,a=void 0;a=++e%60,n=parseInt(e/60),t=parseInt(e/3600),a<10&&(a="0"+a);n<10&&(n="0"+n);t<10&&(t="0"+t);return e=[e,t,n,a]},t.j=function(e,t,n,a,r){if(a=l(n.titleItems),1==e){if(--t<0)return Object(c.Message)({showClose:!0,message:"当前已经是第一题！",type:"warning"}),!1}else if(2==e&&++t>a)return t--,Object(c.Message)({showClose:!0,message:"当前已经是最后一题！",type:"warning"}),!1;var o=function(e,t,n,a){var r="";return n.forEach(function(e){e.name==a&&(r=e.questionItems[t])}),console.log("nowT",r),r}(0,t,n.titleItems,r);return[t,o,r]},t.k=function(e){if(0==--e)return!1;return e},t.l=function(e){return JSON.parse(s()(e))},t.n=function(e,t){if(0===arguments.length)return null;var n=t||"{y}-{m}-{d} {h}:{i}:{s}",a=void 0;"object"===(void 0===e?"undefined":r()(e))?a=e:("string"==typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"==typeof e&&10===e.toString().length&&(e*=1e3),a=new Date(e));var o={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()};return n.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var n=o[t];return"a"===t?["日","一","二","三","四","五","六"][n]:(e.length>0&&n<10&&(n="0"+n),n||0)})},t.b=function(e,t){var n=new Blob([e.data],{type:e.headers["content-type"]}),a=document.createElement("a"),r=window.URL.createObjectURL(n);a.href=r,a.download=t.sourceFileName,document.body.appendChild(a),a.click(),document.body.removeChild(a),window.URL.revokeObjectURL(r)},t.f=function(e){var t=void 0,n=void 0,a=void 0;a=--e%60,n=parseInt(e/60),t=parseInt(e/3600),a<10&&(a="0"+a);n<10&&(n="0"+n);t<10&&(t="0"+t);return e=[e,t,n,a]};var a=n("hRKE"),r=n.n(a),o=n("3cXf"),s=n.n(o),i=n("Prow"),c=n("88IO");n.n(c);function u(e){return s()(e)}function l(e){var t=0;return e.forEach(function(e){e.questionItems.forEach(function(e){t++})}),t}},r8N3:function(e,t){},rOIf:function(e,t,n){e.exports=n.p+"static/img/top.83412df.png"},xiBf:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.9aeaf01ece812441bbaa.js.map