(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["GoodsList_Add"],{1276:function(e,t,r){"use strict";var a=r("d784"),n=r("44e7"),o=r("825a"),s=r("1d80"),i=r("4840"),l=r("8aa5"),c=r("50c4"),u=r("14c3"),d=r("9263"),p=r("9f7f"),m=p.UNSUPPORTED_Y,g=[].push,f=Math.min,b=4294967295;a("split",2,(function(e,t,r){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var a=String(s(this)),o=void 0===r?b:r>>>0;if(0===o)return[];if(void 0===e)return[a];if(!n(e))return t.call(a,e,o);var i,l,c,u=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,f=new RegExp(e.source,p+"g");while(i=d.call(f,a)){if(l=f.lastIndex,l>m&&(u.push(a.slice(m,i.index)),i.length>1&&i.index<a.length&&g.apply(u,i.slice(1)),c=i[0].length,m=l,u.length>=o))break;f.lastIndex===i.index&&f.lastIndex++}return m===a.length?!c&&f.test("")||u.push(""):u.push(a.slice(m)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:t.call(this,e,r)}:t,[function(t,r){var n=s(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,n,r):a.call(String(n),t,r)},function(e,n){var s=r(a,e,this,n,a!==t);if(s.done)return s.value;var d=o(e),p=String(this),g=i(d,RegExp),h=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"g":"y"),_=new g(m?"^(?:"+d.source+")":d,v),x=void 0===n?b:n>>>0;if(0===x)return[];if(0===p.length)return null===u(_,p)?[p]:[];var y=0,w=0,F=[];while(w<p.length){_.lastIndex=m?0:w;var I,k=u(_,m?p.slice(w):p);if(null===k||(I=f(c(_.lastIndex+(m?w:0)),p.length))===y)w=l(p,w,h);else{if(F.push(p.slice(y,w)),F.length===x)return F;for(var $=1;$<=k.length-1;$++)if(F.push(k[$]),F.length===x)return F;w=y=I}}return F.push(p.slice(y)),F}]}),m)},"14c3":function(e,t,r){var a=r("c6b6"),n=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var o=r.call(e,t);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},1544:function(e,t,r){"use strict";r("44a6")},"373b":function(e,t,r){"use strict";r("cd64")},"44a6":function(e,t,r){},"44e7":function(e,t,r){var a=r("861d"),n=r("c6b6"),o=r("b622"),s=o("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==n(e))}},"4f9b":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("商品管理")]),r("el-breadcrumb-item",[e._v("添加商品")])],1),r("el-card",[r("el-alert",{attrs:{title:"添加商品信息",type:"info",center:"","show-icon":"",closable:!1}}),r("el-steps",{attrs:{space:200,active:e.activeIndex-0,"finish-status":"success","align-center":""}},[r("el-step",{attrs:{title:"基本信息"}}),r("el-step",{attrs:{title:"商品参数"}}),r("el-step",{attrs:{title:"商品属性"}}),r("el-step",{attrs:{title:"商品图片"}}),r("el-step",{attrs:{title:"商品内容"}}),r("el-step",{attrs:{title:"完成"}})],1),r("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.addFormRules,"label-width":"100px","label-position":"top"}},[r("el-tabs",{attrs:{"tab-position":"left","before-leave":e.beforeTabLeave},on:{"tab-click":e.tabClicked},model:{value:e.activeIndex,callback:function(t){e.activeIndex=t},expression:"activeIndex"}},[r("el-tab-pane",{attrs:{label:"基本信息",name:"0"}},[r("el-form-item",{attrs:{label:"商品名称",prop:"goods_name"}},[r("el-input",{model:{value:e.addForm.goods_name,callback:function(t){e.$set(e.addForm,"goods_name",t)},expression:"addForm.goods_name"}})],1),r("el-form-item",{attrs:{label:"商品价格",prop:"goods_price"}},[r("el-input",{attrs:{type:"number"},model:{value:e.addForm.goods_price,callback:function(t){e.$set(e.addForm,"goods_price",t)},expression:"addForm.goods_price"}})],1),r("el-form-item",{attrs:{label:"商品重量",prop:"goods_weight"}},[r("el-input",{attrs:{type:"number"},model:{value:e.addForm.goods_weight,callback:function(t){e.$set(e.addForm,"goods_weight",t)},expression:"addForm.goods_weight"}})],1),r("el-form-item",{attrs:{label:"商品数量",prop:"goods_number",type:"number"}},[r("el-input",{model:{value:e.addForm.goods_number,callback:function(t){e.$set(e.addForm,"goods_number",t)},expression:"addForm.goods_number"}})],1),r("el-form-item",{attrs:{label:"商品分类",prop:"goods_cat"}},[r("el-cascader",{attrs:{options:e.catelist,props:e.cateProps,"props.expandTrigger":"hover"},on:{change:e.handleChange},model:{value:e.addForm.goods_cat,callback:function(t){e.$set(e.addForm,"goods_cat",t)},expression:"addForm.goods_cat"}})],1)],1),r("el-tab-pane",{attrs:{label:"商品参数",name:"1"}},e._l(e.manyTableData,(function(t){return r("el-form-item",{key:t.attr_id,attrs:{label:t.attr_name}},[r("el-checkbox-group",{model:{value:t.attr_vals,callback:function(r){e.$set(t,"attr_vals",r)},expression:"item.attr_vals"}},e._l(t.attr_vals,(function(e,t){return r("el-checkbox",{key:t,attrs:{label:e,border:""}})})),1)],1)})),1),r("el-tab-pane",{attrs:{label:"商品属性",name:"2"}},e._l(e.onlyTableData,(function(t){return r("el-form-item",{key:t.attr_id,attrs:{label:t.attr_name}},[r("el-input",{model:{value:t.attr_vals,callback:function(r){e.$set(t,"attr_vals",r)},expression:"item.attr_vals"}})],1)})),1),r("el-tab-pane",{attrs:{label:"商品图片",name:"3"}},[r("el-upload",{attrs:{action:e.uploadURL,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"list-type":"picture",headers:e.headerObj,"on-success":e.handleSuccess}},[r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1),r("el-tab-pane",{attrs:{label:"商品内容",name:"4"}},[r("quill-editor",{model:{value:e.addForm.goods_introduce,callback:function(t){e.$set(e.addForm,"goods_introduce",t)},expression:"addForm.goods_introduce"}}),r("el-button",{staticClass:"btnAdd",attrs:{type:"primary"},on:{click:e.add}},[e._v("添加商品")])],1)],1)],1)],1),r("el-dialog",{attrs:{title:"图片预览",visible:e.previewVisible,width:"50%"},on:{"update:visible":function(t){e.previewVisible=t}}},[r("img",{staticClass:"previewImg",attrs:{src:e.previewPath,alt:""}})])],1)},n=[],o=r("1da1"),s=(r("159b"),r("ac1f"),r("1276"),r("c740"),r("a434"),r("a15b"),r("96cf"),r("60bb")),i=r.n(s),l={data:function(){return{activeIndex:"0",addForm:{goods_name:"",goods_price:0,goods_weight:0,goods_number:0,goods_cat:[],pics:[],goods_introduce:"",attrs:[]},addFormRules:{goods_name:[{required:!0,message:"请输入商品名称",trigger:"blur"}],goods_price:[{required:!0,message:"请输入商品价格",trigger:"blur"}],goods_weight:[{required:!0,message:"请输入商品重量",trigger:"blur"}],goods_number:[{required:!0,message:"请输入商品数量",trigger:"blur"}],goods_cat:[{required:!0,message:"请选择商品分类",trigger:"blur"}]},catelist:[],cateProps:{label:"cat_name",value:"cat_id",children:"children"},manyTableData:[],onlyTableData:[],uploadURL:"https://api.naccl.top/vue/shop/api/private/v1/upload",headerObj:{Authorization:window.sessionStorage.getItem("token")},previewPath:"",previewVisible:!1}},created:function(){this.getCateList()},methods:{getCateList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("categories");case 2:if(r=t.sent,a=r.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("获取商品分类失败"));case 6:e.catelist=a.data;case 7:case"end":return t.stop()}}),t)})))()},handleChange:function(){3!==this.addForm.goods_cat.length&&(this.addForm.goods_cat=[])},beforeTabLeave:function(e,t){if("0"===t&&3!==this.addForm.goods_cat.length)return this.$message.error("请先选择商品分类!"),!1},tabClicked:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("1"!==e.activeIndex){t.next=11;break}return t.next=3,e.$http.get("categories/".concat(e.cateId,"/attributes"),{params:{sel:"many"}});case 3:if(r=t.sent,a=r.data,200===a.meta.status){t.next=7;break}return t.abrupt("return",e.$message.error("获取动态参数列表失败!"));case 7:a.data.forEach((function(e){e.attr_vals=0===e.attr_vals.length?[]:e.attr_vals.split(" ")})),e.manyTableData=a.data,t.next=19;break;case 11:if("2"!==e.activeIndex){t.next=19;break}return t.next=14,e.$http.get("categories/".concat(e.cateId,"/attributes"),{params:{sel:"only"}});case 14:if(n=t.sent,o=n.data,200===o.meta.status){t.next=18;break}return t.abrupt("return",e.$message.error("获取静态属性失败!"));case 18:e.onlyTableData=o.data;case 19:case"end":return t.stop()}}),t)})))()},handlePreview:function(e){this.previewPath=e.response.data.url,this.previewVisible=!0},handleRemove:function(e){var t=e.response.data.tmp_path,r=this.addForm.pics.findIndex((function(e){return e.pic===t}));this.addForm.pics.splice(r,1)},handleSuccess:function(e){var t={pic:e.data.tmp_path};this.addForm.pics.push(t)},add:function(){var e=this;this.$refs.addFormRef.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var a,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",e.$message.error("请填写必要的表单项目!"));case 2:return a=i.a.cloneDeep(e.addForm),a.goods_cat=a.goods_cat.join(","),e.manyTableData.forEach((function(t){var r={attr_id:t.attr_id,attr_value:t.attr_vals.join(" ")};e.addForm.attrs.push(r)})),e.onlyTableData.forEach((function(t){var r={attr_id:t.attr_id,attr_value:t.attr_vals};e.addForm.attrs.push(r)})),a.attrs=e.addForm.attrs,t.next=9,e.$http.post("goods",a);case 9:if(n=t.sent,o=n.data,201===o.meta.status){t.next=13;break}return t.abrupt("return",e.$message.error("添加商品失败!"));case 13:e.$message.success("添加商品成功!"),e.$router.push("/goods");case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},computed:{cateId:function(){return 3===this.addForm.goods_cat.length?this.addForm.goods_cat[2]:null}}},c=l,u=(r("373b"),r("2877")),d=Object(u["a"])(c,a,n,!1,null,"477356bb",null);t["default"]=d.exports},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var a=r("1d80"),n=r("5899"),o="["+n+"]",s=RegExp("^"+o+o+"*"),i=RegExp(o+o+"*$"),l=function(e){return function(t){var r=String(a(t));return 1&e&&(r=r.replace(s,"")),2&e&&(r=r.replace(i,"")),r}};e.exports={start:l(1),end:l(2),trim:l(3)}},7156:function(e,t,r){var a=r("861d"),n=r("d2bb");e.exports=function(e,t,r){var o,s;return n&&"function"==typeof(o=t.constructor)&&o!==r&&a(s=o.prototype)&&s!==r.prototype&&n(e,s),e}},"8aa5":function(e,t,r){"use strict";var a=r("6547").charAt;e.exports=function(e,t,r){return t+(r?a(e,t).length:1)}},9263:function(e,t,r){"use strict";var a=r("ad6d"),n=r("9f7f"),o=r("5692"),s=RegExp.prototype.exec,i=o("native-string-replace",String.prototype.replace),l=s,c=function(){var e=/a/,t=/b*/g;return s.call(e,"a"),s.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=n.UNSUPPORTED_Y||n.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],p=c||d||u;p&&(l=function(e){var t,r,n,o,l=this,p=u&&l.sticky,m=a.call(l),g=l.source,f=0,b=e;return p&&(m=m.replace("y",""),-1===m.indexOf("g")&&(m+="g"),b=String(e).slice(l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&"\n"!==e[l.lastIndex-1])&&(g="(?: "+g+")",b=" "+b,f++),r=new RegExp("^(?:"+g+")",m)),d&&(r=new RegExp("^"+g+"$(?!\\s)",m)),c&&(t=l.lastIndex),n=s.call(p?r:l,b),p?n?(n.input=n.input.slice(f),n[0]=n[0].slice(f),n.index=l.lastIndex,l.lastIndex+=n[0].length):l.lastIndex=0:c&&n&&(l.lastIndex=l.global?n.index+n[0].length:t),d&&n&&n.length>1&&i.call(n[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n}),e.exports=l},"9f7f":function(e,t,r){"use strict";var a=r("d039");function n(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=a((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a434:function(e,t,r){"use strict";var a=r("23e7"),n=r("23cb"),o=r("a691"),s=r("50c4"),i=r("7b0b"),l=r("65f0"),c=r("8418"),u=r("1dde"),d=u("splice"),p=Math.max,m=Math.min,g=9007199254740991,f="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var r,a,u,d,b,h,v=i(this),_=s(v.length),x=n(e,_),y=arguments.length;if(0===y?r=a=0:1===y?(r=0,a=_-x):(r=y-2,a=m(p(o(t),0),_-x)),_+r-a>g)throw TypeError(f);for(u=l(v,a),d=0;d<a;d++)b=x+d,b in v&&c(u,d,v[b]);if(u.length=a,r<a){for(d=x;d<_-a;d++)b=d+a,h=d+r,b in v?v[h]=v[b]:delete v[h];for(d=_;d>_-a+r;d--)delete v[d-1]}else if(r>a)for(d=_-a;d>x;d--)b=d+a-1,h=d+r-1,b in v?v[h]=v[b]:delete v[h];for(d=0;d<r;d++)v[d+x]=arguments[d+2];return v.length=_-a+r,u}})},a9e3:function(e,t,r){"use strict";var a=r("83ab"),n=r("da84"),o=r("94ca"),s=r("6eeb"),i=r("5135"),l=r("c6b6"),c=r("7156"),u=r("c04e"),d=r("d039"),p=r("7c73"),m=r("241c").f,g=r("06cf").f,f=r("9bf2").f,b=r("58a8").trim,h="Number",v=n[h],_=v.prototype,x=l(p(_))==h,y=function(e){var t,r,a,n,o,s,i,l,c=u(e,!1);if("string"==typeof c&&c.length>2)if(c=b(c),t=c.charCodeAt(0),43===t||45===t){if(r=c.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+c}for(o=c.slice(2),s=o.length,i=0;i<s;i++)if(l=o.charCodeAt(i),l<48||l>n)return NaN;return parseInt(o,a)}return+c};if(o(h,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var w,F=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof F&&(x?d((function(){_.valueOf.call(r)})):l(r)!=h)?c(new v(y(t)),r,F):y(t)},I=a?m(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),k=0;I.length>k;k++)i(v,w=I[k])&&!i(F,w)&&f(F,w,g(v,w));F.prototype=_,_.constructor=F,s(n,h,F)}},ac1f:function(e,t,r){"use strict";var a=r("23e7"),n=r("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(e,t,r){"use strict";var a=r("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},c740:function(e,t,r){"use strict";var a=r("23e7"),n=r("b727").findIndex,o=r("44d2"),s="findIndex",i=!0;s in[]&&Array(1)[s]((function(){i=!1})),a({target:"Array",proto:!0,forced:i},{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),o(s)},cb38:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("商品管理")]),r("el-breadcrumb-item",[e._v("商品列表")])],1),r("el-card",[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:8}},[r("el-input",{attrs:{placeholder:"请输入内容",clearable:""},on:{clear:e.getGoodsList},model:{value:e.queryInfo.query,callback:function(t){e.$set(e.queryInfo,"query",t)},expression:"queryInfo.query"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getGoodsList},slot:"append"})],1)],1),r("el-col",{attrs:{span:4}},[r("el-button",{attrs:{type:"primary"},on:{click:e.goAddpage}},[e._v("添加商品")])],1)],1),r("el-table",{attrs:{data:e.goodslist,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"index"}}),r("el-table-column",{attrs:{label:"商品名称",prop:"goods_name"}}),r("el-table-column",{attrs:{label:"商品价格(元)",prop:"goods_price",width:"95px"}}),r("el-table-column",{attrs:{label:"商品重量",prop:"goods_weight",width:"70px"}}),r("el-table-column",{attrs:{label:"创建时间",prop:"add_time",width:"140px"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("dateFormat")(t.row.add_time))+" ")]}}])}),r("el-table-column",{attrs:{label:"操作",width:"130px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(r){return e.goEditPage(t.row.goods_id)}}}),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return e.removeById(t.row.goods_id)}}})]}}])})],1),r("el-pagination",{attrs:{"current-page":e.queryInfo.pagenum,"page-sizes":[5,10,15,20],"page-size":e.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total,background:""},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},n=[],o=r("1da1"),s=(r("96cf"),{data:function(){return{queryInfo:{query:"",pagenum:1,pagesize:10},goodslist:[],total:0}},created:function(){this.getGoodsList()},methods:{getGoodsList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("goods",{params:e.queryInfo});case 2:if(r=t.sent,a=r.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("获取商品列表失败!"));case 6:e.$message.success("获取商品列表成功!"),e.goodslist=a.data.goods,e.total=a.data.total;case 9:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){this.queryInfo.pagesize=e,this.getGoodsList()},handleCurrentChange:function(e){this.queryInfo.pagenum=e,this.getGoodsList()},removeById:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$confirm("此操作将永久删除该商品, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(a=r.sent,"confirm"===a){r.next=5;break}return r.abrupt("return",t.$message.info("已经取消删除!"));case 5:return r.next=7,t.$http.delete("goods/".concat(e));case 7:if(n=r.sent,o=n.data,200===o.meta.status){r.next=11;break}return r.abrupt("return",t.$message.error("删除失败!"));case 11:t.$message.success("删除成功!"),t.getGoodsList();case 13:case"end":return r.stop()}}),r)})))()},goAddpage:function(){this.$router.push("/goods/add")},goEditPage:function(e){this.$router.push("/goods/edit/".concat(e))}}}),i=s,l=r("2877"),c=Object(l["a"])(i,a,n,!1,null,"e19acb40",null);t["default"]=c.exports},cd64:function(e,t,r){},d784:function(e,t,r){"use strict";r("ac1f");var a=r("6eeb"),n=r("9263"),o=r("d039"),s=r("b622"),i=r("9112"),l=s("species"),c=RegExp.prototype,u=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),p=s("replace"),m=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),g=!o((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,p){var f=s(e),b=!o((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),h=b&&!o((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[l]=function(){return r},r.flags="",r[f]=/./[f]),r.exec=function(){return t=!0,null},r[f](""),!t}));if(!b||!h||"replace"===e&&(!u||!d||m)||"split"===e&&!g){var v=/./[f],_=r(f,""[e],(function(e,t,r,a,o){var s=t.exec;return s===n||s===c.exec?b&&!o?{done:!0,value:v.call(t,r,a)}:{done:!0,value:e.call(r,t,a)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:m}),x=_[0],y=_[1];a(String.prototype,e,x),a(c,f,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}p&&i(c[f],"sham",!0)}},d81d:function(e,t,r){"use strict";var a=r("23e7"),n=r("b727").map,o=r("1dde"),s=o("map");a({target:"Array",proto:!0,forced:!s},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},ebde:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("商品管理")]),r("el-breadcrumb-item",[e._v("编辑商品")])],1),r("el-card",[r("el-alert",{attrs:{title:"编辑商品信息",type:"info",center:"","show-icon":"",closable:!1}}),r("el-steps",{attrs:{space:200,active:e.activeIndex-0,"finish-status":"success","align-center":""}},[r("el-step",{attrs:{title:"基本信息"}}),r("el-step",{attrs:{title:"商品参数"}}),r("el-step",{attrs:{title:"商品属性"}}),r("el-step",{attrs:{title:"商品图片"}}),r("el-step",{attrs:{title:"商品内容"}}),r("el-step",{attrs:{title:"完成"}})],1),r("el-form",{ref:"editFormRef",attrs:{model:e.editForm,rules:e.editFormRules,"label-width":"100px","label-position":"top"}},[r("el-tabs",{attrs:{"tab-position":"left","before-leave":e.beforeTabLeave},on:{"tab-click":e.tabClicked},model:{value:e.activeIndex,callback:function(t){e.activeIndex=t},expression:"activeIndex"}},[r("el-tab-pane",{attrs:{label:"基本信息",name:"0"}},[r("el-form-item",{attrs:{label:"商品名称",prop:"goods_name"}},[r("el-input",{model:{value:e.editForm.goods_name,callback:function(t){e.$set(e.editForm,"goods_name",t)},expression:"editForm.goods_name"}})],1),r("el-form-item",{attrs:{label:"商品价格",prop:"goods_price"}},[r("el-input",{attrs:{type:"number"},model:{value:e.editForm.goods_price,callback:function(t){e.$set(e.editForm,"goods_price",t)},expression:"editForm.goods_price"}})],1),r("el-form-item",{attrs:{label:"商品重量",prop:"goods_weight"}},[r("el-input",{attrs:{type:"number"},model:{value:e.editForm.goods_weight,callback:function(t){e.$set(e.editForm,"goods_weight",t)},expression:"editForm.goods_weight"}})],1),r("el-form-item",{attrs:{label:"商品数量",prop:"goods_number",type:"number"}},[r("el-input",{model:{value:e.editForm.goods_number,callback:function(t){e.$set(e.editForm,"goods_number",t)},expression:"editForm.goods_number"}})],1),r("el-form-item",{attrs:{label:"商品分类",prop:"goods_cat"}},[r("el-cascader",{attrs:{options:e.catelist,props:e.cateProps,"props.expandTrigger":"hover"},on:{change:e.handleChange},model:{value:e.editForm.goods_cat,callback:function(t){e.$set(e.editForm,"goods_cat",t)},expression:"editForm.goods_cat"}})],1)],1),r("el-tab-pane",{attrs:{label:"商品参数",name:"1"}},e._l(e.manyTableData,(function(t){return r("el-form-item",{key:t.attr_id,attrs:{label:t.attr_name}},[r("el-checkbox-group",{model:{value:t.attr_vals,callback:function(r){e.$set(t,"attr_vals",r)},expression:"item.attr_vals"}},e._l(t.attr_vals,(function(e,t){return r("el-checkbox",{key:t,attrs:{label:e,border:""}})})),1)],1)})),1),r("el-tab-pane",{attrs:{label:"商品属性",name:"2"}},e._l(e.onlyTableData,(function(t){return r("el-form-item",{key:t.attr_id,attrs:{label:t.attr_name}},[r("el-input",{model:{value:t.attr_vals,callback:function(r){e.$set(t,"attr_vals",r)},expression:"item.attr_vals"}})],1)})),1),r("el-tab-pane",{attrs:{label:"商品图片",name:"3"}},[r("el-upload",{attrs:{action:e.uploadURL,"on-preview":e.handlePreview,"file-list":e.imgList,"on-remove":e.handleRemove,"list-type":"picture",headers:e.headerObj,"on-success":e.handleSuccess}},[r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1),r("el-tab-pane",{attrs:{label:"商品内容",name:"4"}},[r("quill-editor",{model:{value:e.editForm.goods_introduce,callback:function(t){e.$set(e.editForm,"goods_introduce",t)},expression:"editForm.goods_introduce"}}),r("el-button",{staticClass:"btnEdit",attrs:{type:"primary"},on:{click:e.edit}},[e._v("编辑商品")])],1)],1)],1)],1),r("el-dialog",{attrs:{title:"图片预览",visible:e.previewVisible,width:"50%"},on:{"update:visible":function(t){e.previewVisible=t}}},[r("img",{staticClass:"previewImg",attrs:{src:e.previewPath,alt:""}})])],1)},n=[],o=r("2909"),s=r("1da1"),i=(r("96cf"),r("d81d"),r("ac1f"),r("1276"),r("a9e3"),r("159b"),r("c740"),r("a434"),r("a15b"),r("60bb")),l=r.n(i),c={data:function(){return{activeIndex:"0",editForm:{goods_name:"",goods_price:0,goods_weight:0,goods_number:0,goods_cat:[],pics:[],goods_introduce:"",attrs:[]},editFormRules:{goods_name:[{required:!0,message:"请输入商品名称",trigger:"blur"}],goods_price:[{required:!0,message:"请输入商品价格",trigger:"blur"}],goods_weight:[{required:!0,message:"请输入商品重量",trigger:"blur"}],goods_number:[{required:!0,message:"请输入商品数量",trigger:"blur"}],goods_cat:[{required:!0,message:"请选择商品分类",trigger:"blur"}]},catelist:[],cateProps:{label:"cat_name",value:"cat_id",children:"children"},manyTableData:[],onlyTableData:[],imgList:[],tmpImgList:[],uploadURL:"https://api.naccl.top/vue/shop/api/private/v1/upload",headerObj:{Authorization:window.sessionStorage.getItem("token")},previewPath:"",previewVisible:!1}},created:function(){this.getCateList(),this.getGoodsInfo()},methods:{getGoodsInfo:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("goods/".concat(e.$route.params.id));case 2:if(r=t.sent,a=r.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("获取商品信息失败"));case 6:e.editForm=a.data,e.editForm.goods_cat=e.editForm.goods_cat.split(",").map(Number),e.getAttrData(),e.getImgList();case 10:case"end":return t.stop()}}),t)})))()},getCateList:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("categories");case 2:if(r=t.sent,a=r.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("获取商品分类失败"));case 6:e.catelist=a.data;case 7:case"end":return t.stop()}}),t)})))()},getAttrData:function(){var e=this;this.editForm.attrs.forEach((function(t){"many"===t.attr_sel?(t.attr_vals=t.attr_vals?t.attr_vals.split(","):[],t.attr_value=t.attr_value?t.attr_value.split(","):[],e.manyTableData.push(t)):"only"===t.attr_sel&&e.onlyTableData.push(t)}))},getImgList:function(){var e=this;this.editForm.pics.forEach((function(t){e.imgList.push({name:t.pics_id,url:t.pics_big_url,pic:t.pics_big})}))},handleChange:function(){3!==this.editForm.goods_cat.length&&(this.editForm.goods_cat=[])},beforeTabLeave:function(e,t){if("0"===t&&3!==this.editForm.goods_cat.length)return this.$message.error("请先选择商品分类!"),!1},tabClicked:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("1"!==e.activeIndex){t.next=11;break}return t.next=3,e.$http.get("categories/".concat(e.cateId,"/attributes"),{params:{sel:"many"}});case 3:if(r=t.sent,a=r.data,200===a.meta.status){t.next=7;break}return t.abrupt("return",e.$message.error("获取动态参数列表失败!"));case 7:a.data.forEach((function(e){e.attr_vals=0===e.attr_vals.length?[]:e.attr_vals.split(" ")})),e.manyTableData=a.data,t.next=19;break;case 11:if("2"!==e.activeIndex){t.next=19;break}return t.next=14,e.$http.get("categories/".concat(e.cateId,"/attributes"),{params:{sel:"only"}});case 14:if(n=t.sent,o=n.data,200===o.meta.status){t.next=18;break}return t.abrupt("return",e.$message.error("获取静态属性失败!"));case 18:e.onlyTableData=o.data;case 19:case"end":return t.stop()}}),t)})))()},handlePreview:function(e){this.previewPath=e.response.data.url,this.previewVisible=!0},handleRemove:function(e){if(e.response){var t=e.response.data.tmp_path,r=this.tmpImgList.findIndex((function(e){return e.pic===t}));this.tmpImgList.splice(r,1)}else{var a=e.pic,n=this.imgList.findIndex((function(e){return e.pic===a}));this.imgList.splice(n,1)}},handleSuccess:function(e){var t={pic:e.data.tmp_path};this.editForm.pics.push(t)},edit:function(){var e=this;this.$refs.editFormRef.validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(r){var a,n,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",e.$message.error("请填写必要的表单项目!"));case 2:return a=[],e.imgList.forEach((function(e){a.push({pic:e.pic})})),a.push.apply(a,Object(o["a"])(e.tmpImgList)),n={goods_name:l.a.cloneDeep(e.editForm.goods_name),goods_price:e.editForm.goods_price,goods_number:e.editForm.goods_number,goods_weight:e.editForm.goods_weight,goods_introduce:l.a.cloneDeep(e.editForm.goods_introduce),pics:l.a.cloneDeep(a),attrs:l.a.cloneDeep(e.editForm.attrs)},e.manyTableData.forEach((function(t){var r={attr_id:t.attr_id,attr_value:t.attr_vals.join(" ")};e.editForm.attrs.push(r)})),e.onlyTableData.forEach((function(t){var r={attr_id:t.attr_id,attr_value:t.attr_vals};e.editForm.attrs.push(r)})),n.attrs=e.editForm.attrs,t.next=11,e.$http.put("goods/".concat(e.editForm.goods_id),n);case 11:if(s=t.sent,i=s.data,200===i.meta.status){t.next=15;break}return t.abrupt("return",e.$message.error("编辑商品失败!"));case 15:e.$message.success("编辑商品成功!"),e.$router.push("/goods");case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},computed:{cateId:function(){return 3===this.editForm.goods_cat.length?this.editForm.goods_cat[2]:null}}},u=c,d=(r("1544"),r("2877")),p=Object(d["a"])(u,a,n,!1,null,"04e2d617",null);t["default"]=p.exports}}]);
//# sourceMappingURL=GoodsList_Add.0c0dd306.js.map