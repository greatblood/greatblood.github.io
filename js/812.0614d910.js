"use strict";(self["webpackChunkcheck_work_view"]=self["webpackChunkcheck_work_view"]||[]).push([[812],{4649:function(e,t,a){a.d(t,{$h:function(){return p},$l:function(){return Z},Fq:function(){return W},HB:function(){return m},IT:function(){return y},It:function(){return I},J1:function(){return c},N5:function(){return D},Pk:function(){return F},Qg:function(){return _},Ts:function(){return l},UM:function(){return z},V0:function(){return k},Y$:function(){return i},Zo:function(){return w},bR:function(){return V},dv:function(){return x},f2:function(){return C},fM:function(){return o},m_:function(){return u},nG:function(){return U},pr:function(){return v},q0:function(){return f},qS:function(){return d},rG:function(){return $},rP:function(){return s},v3:function(){return g},vQ:function(){return S},vi:function(){return b},vx:function(){return h},wM:function(){return P},wy:function(){return T},x4:function(){return n}});var r=a(8676);function n(e){return(0,r.Z)({url:"/manager/login",method:"post",data:e})}function o(){return(0,r.Z)({url:"/manager/getByToken",method:"get",params:{},data:{}})}function u(e){const t="/manager/manager/create";return r.Z.post(t,e)}function s(e){return console.log(e),(0,r.Z)({url:"/manager/manager/delete",method:"delete",params:e})}function i(e){const t="/manager/manager/update";return r.Z.put(t,e)}function d(e){const t="/manager/manager/update/password";return r.Z.put(t,e)}function l(e){return(0,r.Z)({url:"/manager/manager/resetPassword",method:"get",params:e,data:{}})}function c(e){return(0,r.Z)({url:"/manager/manager/find",method:"get",params:e})}function m(e){const t="/manager/function/create";return r.Z.post(t,e)}function p(e){return console.log(e),(0,r.Z)({url:"/manager/function/delete",method:"delete",params:e})}function h(e){const t="/manager/function/update";return r.Z.put(t,e)}function g(e){return(0,r.Z)({url:"/manager/function/find",method:"get",params:e})}function f(e){return(0,r.Z)({url:"/manager/function/findByRole",method:"get",params:e})}function w(e){const t="/manager/teacherRole/create";return r.Z.post(t,e)}function k(e){return console.log(e),(0,r.Z)({url:"/manager/teacherRole/delete",method:"delete",params:e})}function y(e){const t="/manager/teacherRole/update";return r.Z.put(t,e)}function C(e){return(0,r.Z)({url:"/manager/teacherRole/find",method:"get",params:e})}function Z(e){const t="/manager/teacher/create";return r.Z.post(t,e)}function _(e){return console.log(e),(0,r.Z)({url:"/manager/teacher/delete",method:"delete",params:e})}function D(e){const t="/manager/teacher/update";return r.Z.put(t,e)}function b(e){return(0,r.Z)({url:"/manager/teacher/update/password",method:"put",params:{},data:e})}function F(e){return(0,r.Z)({url:"/manager/teacher/find",method:"get",params:e,data:{}})}function W(e){return(0,r.Z)({url:"/manager/teacher/resetPassword",method:"get",params:e,data:{}})}function v(e){return(0,r.Z)({url:"/manager/class/create",method:"post",params:{},data:e})}function T(e){return(0,r.Z)({url:"/manager/class/delete",method:"delete",params:e,data:{}})}function z(e){return(0,r.Z)({url:"/manager/class/update",method:"put",params:{},data:e})}function V(e){return(0,r.Z)({url:"/manager/class/find",method:"get",params:e,data:{}})}function x(e){return(0,r.Z)({url:"/manager/student/create",method:"post",params:{},data:e})}function U(e){return(0,r.Z)({url:"/manager/student/delete",method:"delete",params:e,data:{}})}function $(e){return(0,r.Z)({url:"/manager/student/update",method:"put",params:{},data:e})}function P(e){return(0,r.Z)({url:"/manager/student/update/password",method:"put",params:{},data:e})}function I(e){return(0,r.Z)({url:"/manager/student/resetPassword",method:"get",params:e,data:{}})}function S(e){return(0,r.Z)({url:"/manager/student/find",method:"get",params:e,data:{}})}},8676:function(e,t,a){a.d(t,{Z:function(){return s}});a(7658);var r=a(4161);function n(){var e={token:sessionStorage.getItem("token"),user_id:sessionStorage.getItem("user_id"),type:sessionStorage.getItem("type")};return e}var o=a(7178);const u=r.Z.create({baseURL:"https://serve.xiongmaojiuxian.eu.org"});u.interceptors.request.use((e=>{var t=n();return""!=t.token&&(e.headers["token"]=t.token,e.headers["user_id"]=t.user_id,e.headers["type"]=t.type),e}),(e=>Promise.reject(e))),u.interceptors.response.use((e=>{if(console.log(e),401===e.data.code&&(console.log(1233),(0,o.z8)({message:e.data.msg,type:"error",duration:5e3}),router.push("/login")),400!==e.data.code)return e;(0,o.z8)({message:e.data.msg,type:"error",duration:5e3})}),(e=>{Promise.reject(e)}));var s=u},2812:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var r=a(3396);const n={key:0,style:{display:"flex","flex-direction":"row-reverse","margin-top":"10px"}};function o(e,t,a,o,u,s){const i=(0,r.up)("el-input"),d=(0,r.up)("el-form-item"),l=(0,r.up)("el-button"),c=(0,r.up)("el-form"),m=(0,r.up)("el-card"),p=(0,r.up)("el-table-column"),h=(0,r.up)("el-table"),g=(0,r.up)("el-pagination"),f=(0,r.up)("el-dialog"),w=(0,r.up)("el-tree"),k=(0,r.up)("el-drawer");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(m,{class:"header"},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{inline:!0,class:"headerForm",model:u.searchHeaderForm},{default:(0,r.w5)((()=>[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(i,{clearable:"",modelValue:u.searchHeaderForm.find,"onUpdate:modelValue":t[0]||(t[0]=e=>u.searchHeaderForm.find=e),placeholder:"请输入名称"},null,8,["modelValue"])])),_:1}),(0,r.Wm)(l,{type:"primary",onClick:s.getDatas},{default:(0,r.w5)((()=>[(0,r.Uk)("查询")])),_:1},8,["onClick"]),(0,r.Wm)(l,{class:"searchBtn",type:"primary",onClick:t[1]||(t[1]=e=>s.handleData("add"))},{default:(0,r.w5)((()=>[(0,r.Uk)("添 加")])),_:1})])),_:1},8,["model"])])),_:1}),(0,r.Wm)(m,null,{default:(0,r.w5)((()=>[(0,r.Wm)(h,{data:u.tableData,border:"",style:{width:"100%"},"header-cell-style":{background:"#F3F4F7",color:"#555"}},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{prop:"name",label:"角色名称","min-width":"200"}),(0,r.Wm)(p,{prop:"create_time",label:"创建时间","min-width":"200"}),(0,r.Wm)(p,{align:"center",fixed:"right",label:"权限",width:"200"},{default:(0,r.w5)((e=>[(0,r.Wm)(l,{type:"primary",onClick:t=>s.upApis(e.row)},{default:(0,r.w5)((()=>[(0,r.Uk)("设置权限")])),_:2},1032,["onClick"])])),_:1}),(0,r.Wm)(p,{align:"center",fixed:"right",label:"操作",width:"200"},{default:(0,r.w5)((e=>[(0,r.Wm)(l,{type:"primary",onClick:t=>s.handleData("update",e.row)},{default:(0,r.w5)((()=>[(0,r.Uk)("修改")])),_:2},1032,["onClick"]),(0,r.Wm)(l,{type:"danger",onClick:t=>s.deleteData(e.row._id)},{default:(0,r.w5)((()=>[(0,r.Uk)("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),0!==u.tableData.length?((0,r.wg)(),(0,r.iD)("div",n,[(0,r.Wm)(g,{"current-page":u.currentPage,"page-size":u.pageSize,total:u.total,"page-sizes":[10,20,50,100],background:"",layout:"total, sizes, prev, pager, next, jumper",onSizeChange:s.handleSizeChange,onCurrentChange:s.handleCurrentChange},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"])])):(0,r.kq)("",!0)])),_:1}),(0,r.Wm)(f,{"modal-append-to-body":!1,modelValue:u.operaDialog,"onUpdate:modelValue":t[4]||(t[4]=e=>u.operaDialog=e),title:u.dialogTitle,onClose:s.resetForm},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{"status-icon":"",model:u.operaForm,ref:"operaForm",class:"operaDialog","label-width":"100px",rules:e.rules},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{label:"角色名称",prop:"name"},{default:(0,r.w5)((()=>[(0,r.Wm)(i,{modelValue:u.operaForm.name,"onUpdate:modelValue":t[2]||(t[2]=e=>u.operaForm.name=e)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(l,{type:"primary",onClick:t[3]||(t[3]=e=>s.submitForm())},{default:(0,r.w5)((()=>[(0,r.Uk)("提交")])),_:1}),(0,r.Wm)(l,{onClick:s.resetForm},{default:(0,r.w5)((()=>[(0,r.Uk)("取消")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title","onClose"]),(0,r.Wm)(k,{modelValue:u.drawer,"onUpdate:modelValue":t[5]||(t[5]=e=>u.drawer=e),"with-header":!1},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{class:"fl-right",type:"primary",onClick:s.upApisEnter},{default:(0,r.w5)((()=>[(0,r.Uk)("确 定")])),_:1},8,["onClick"]),(0,r.Wm)(w,{ref:"apiTree",data:u.treedata,props:u.defaultProps,"default-checked-keys":u.apiTreeIds,accordion:"","show-checkbox":"","default-expand-all":"","highlight-current":"","node-key":"_id"},null,8,["data","props","default-checked-keys"])])),_:1},8,["modelValue"])])}a(7658);var u=a(4649),s={data(){return{tableData:[],isCollapse:!1,drawer:!1,search:"",operaDialog:!1,dialogTitle:"",pageSize:10,total:0,currentPage:1,opera:"",operaForm:{name:""},searchHeaderForm:{find:""},updateRole:{},treedata:[],apiTreeIds:[],defaultProps:{children:"apis",label:"name"}}},created(){this.getDatas(),this.getAllApi()},methods:{getAllApi(){(0,u.q0)().then((e=>{200===e.data.code&&(this.treedata=this.buildApiTree(e.data.data))}))},buildApiTree(e){return e&&e.forEach((e=>{e.name=e.group+"组"})),console.log(e),e},desearch(){this.searchHeaderForm={find:""},this.getDatas()},handleData(e,t){"add"==e?(this.operaForm={},this.dialogTitle="添加角色",this.opera="add"):"update"==e&&(this.operaForm={...t},//!!! 直接赋值是引用类型,引起表单重置问题
this.dialogTitle="编辑角色",this.opera="update"),this.operaDialog=!0},handleSizeChange(e){this.pageSize=e,this.getDatas()},handleCurrentChange(e){this.currentPage=e,this.getDatas()},async getDatas(){const e={page:this.currentPage,page_size:this.pageSize,search:this.searchHeaderForm.find},t=await(0,u.f2)(e);200===t.data.code&&(t.data.data?(this.total=t.data.data.count,this.tableData=t.data.data.data,null==t.data.data.data&&(this.tableData=[])):(this.total=t.data.data.count,this.tableData=[]))},addData(){(0,u.Zo)(this.operaForm).then((e=>{console.log(e),200===e.data.code&&(this.$message({showClose:!0,message:"创建成功",type:"success"}),this.operaDialog=!1,this.getDatas())}))},deleteData(e){(0,u.V0)({_id:e}).then((e=>{200===e.data.code&&(this.$message({showClose:!0,message:"删除成功",type:"success"}),this.operaDialog=!1,this.getDatas())}))},editData(){(0,u.IT)(this.operaForm).then((e=>{200===e.data.code&&(this.$message({showClose:!0,message:e.data.msg,type:"success"}),this.operaDialog=!1,this.getDatas())}))},submitForm(){this.$refs.operaForm.validate((e=>{e?"add"===this.opera?this.addData():this.editData():this.$message({showClose:!0,message:"请根据要求将信息填写完整",type:"warning"})}))},resetForm(){this.$refs.operaForm.clearValidate(),this.operaForm={},this.operaDialog=!1},upApis(e){this.drawer=!0,this.apiTreeIds=e.apis,this.$nextTick((()=>{this.$refs.apiTree.setCheckedKeys(this.apiTreeIds)})),this.updateRole=e},upApisEnter(){const e=[],t=this.$refs.apiTree.getCheckedNodes();t.forEach((t=>{console.log(t),t.apis||e.push(t._id)})),this.updateRole.apis=e,(0,u.IT)(this.updateRole).then((e=>{200===e.data.code?this.$message({showClose:!0,message:"角色权限设置成功",type:"success"}):this.$message({showClose:!0,message:"角色权限设置失败",type:"error"}),this.getDatas()}))}}},i=a(89);const d=(0,i.Z)(s,[["render",o],["__scopeId","data-v-0a32029c"]]);var l=d}}]);
//# sourceMappingURL=812.0614d910.js.map