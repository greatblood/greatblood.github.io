"use strict";(self["webpackChunkcheck_work_view"]=self["webpackChunkcheck_work_view"]||[]).push([[491],{4649:function(e,a,t){t.d(a,{$h:function(){return p},$l:function(){return y},Fq:function(){return W},HB:function(){return c},IT:function(){return k},It:function(){return x},J1:function(){return m},N5:function(){return C},Pk:function(){return F},Qg:function(){return Z},Ts:function(){return i},UM:function(){return P},V0:function(){return _},Y$:function(){return l},Zo:function(){return w},bR:function(){return z},dv:function(){return U},f2:function(){return D},fM:function(){return o},m_:function(){return s},nG:function(){return S},pr:function(){return v},q0:function(){return f},qS:function(){return d},rG:function(){return $},rP:function(){return u},v3:function(){return h},vQ:function(){return T},vi:function(){return b},vx:function(){return g},wM:function(){return I},wy:function(){return V},x4:function(){return n}});var r=t(8676);function n(e){return(0,r.Z)({url:"/manager/login",method:"post",data:e})}function o(){return(0,r.Z)({url:"/manager/getByToken",method:"get",params:{},data:{}})}function s(e){const a="/manager/manager/create";return r.Z.post(a,e)}function u(e){return console.log(e),(0,r.Z)({url:"/manager/manager/delete",method:"delete",params:e})}function l(e){const a="/manager/manager/update";return r.Z.put(a,e)}function d(e){const a="/manager/manager/update/password";return r.Z.put(a,e)}function i(e){return(0,r.Z)({url:"/manager/manager/resetPassword",method:"get",params:e,data:{}})}function m(e){return(0,r.Z)({url:"/manager/manager/find",method:"get",params:e})}function c(e){const a="/manager/function/create";return r.Z.post(a,e)}function p(e){return console.log(e),(0,r.Z)({url:"/manager/function/delete",method:"delete",params:e})}function g(e){const a="/manager/function/update";return r.Z.put(a,e)}function h(e){return(0,r.Z)({url:"/manager/function/find",method:"get",params:e})}function f(e){return(0,r.Z)({url:"/manager/function/findByRole",method:"get",params:e})}function w(e){const a="/manager/teacherRole/create";return r.Z.post(a,e)}function _(e){return console.log(e),(0,r.Z)({url:"/manager/teacherRole/delete",method:"delete",params:e})}function k(e){const a="/manager/teacherRole/update";return r.Z.put(a,e)}function D(e){return(0,r.Z)({url:"/manager/teacherRole/find",method:"get",params:e})}function y(e){const a="/manager/teacher/create";return r.Z.post(a,e)}function Z(e){return console.log(e),(0,r.Z)({url:"/manager/teacher/delete",method:"delete",params:e})}function C(e){const a="/manager/teacher/update";return r.Z.put(a,e)}function b(e){return(0,r.Z)({url:"/manager/teacher/update/password",method:"put",params:{},data:e})}function F(e){return(0,r.Z)({url:"/manager/teacher/find",method:"get",params:e,data:{}})}function W(e){return(0,r.Z)({url:"/manager/teacher/resetPassword",method:"get",params:e,data:{}})}function v(e){return(0,r.Z)({url:"/manager/class/create",method:"post",params:{},data:e})}function V(e){return(0,r.Z)({url:"/manager/class/delete",method:"delete",params:e,data:{}})}function P(e){return(0,r.Z)({url:"/manager/class/update",method:"put",params:{},data:e})}function z(e){return(0,r.Z)({url:"/manager/class/find",method:"get",params:e,data:{}})}function U(e){return(0,r.Z)({url:"/manager/student/create",method:"post",params:{},data:e})}function S(e){return(0,r.Z)({url:"/manager/student/delete",method:"delete",params:e,data:{}})}function $(e){return(0,r.Z)({url:"/manager/student/update",method:"put",params:{},data:e})}function I(e){return(0,r.Z)({url:"/manager/student/update/password",method:"put",params:{},data:e})}function x(e){return(0,r.Z)({url:"/manager/student/resetPassword",method:"get",params:e,data:{}})}function T(e){return(0,r.Z)({url:"/manager/student/find",method:"get",params:e,data:{}})}},8676:function(e,a,t){t.d(a,{Z:function(){return u}});t(7658);var r=t(4161);function n(){var e={token:sessionStorage.getItem("token"),user_id:sessionStorage.getItem("user_id"),type:sessionStorage.getItem("type")};return e}var o=t(7178);const s=r.Z.create({baseURL:"http://101.200.87.232:11002"});s.interceptors.request.use((e=>{var a=n();return""!=a.token&&(e.headers["token"]=a.token,e.headers["user_id"]=a.user_id,e.headers["type"]=a.type),e}),(e=>Promise.reject(e))),s.interceptors.response.use((e=>{if(console.log(e),401===e.data.code&&(console.log(1233),(0,o.z8)({message:e.data.msg,type:"error",duration:5e3}),router.push("/login")),400!==e.data.code)return e;(0,o.z8)({message:e.data.msg,type:"error",duration:5e3})}),(e=>{Promise.reject(e)}));var u=s},5491:function(e,a,t){t.r(a),t.d(a,{default:function(){return i}});var r=t(3396);const n={key:0,style:{display:"flex","flex-direction":"row-reverse","margin-top":"10px"}};function o(e,a,t,o,s,u){const l=(0,r.up)("el-input"),d=(0,r.up)("el-form-item"),i=(0,r.up)("el-button"),m=(0,r.up)("el-form"),c=(0,r.up)("el-card"),p=(0,r.up)("el-table-column"),g=(0,r.up)("el-table"),h=(0,r.up)("el-pagination"),f=(0,r.up)("el-dialog");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(c,{class:"header"},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{inline:!0,class:"headerForm",model:s.searchHeaderForm},{default:(0,r.w5)((()=>[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(l,{clearable:"",modelValue:s.searchHeaderForm.find,"onUpdate:modelValue":a[0]||(a[0]=e=>s.searchHeaderForm.find=e),placeholder:"请输入邮箱/名称/电话"},null,8,["modelValue"])])),_:1}),(0,r.Wm)(i,{type:"primary",onClick:u.getDatas},{default:(0,r.w5)((()=>[(0,r.Uk)("查询")])),_:1},8,["onClick"]),(0,r.Wm)(i,{class:"searchBtn",type:"primary",onClick:a[1]||(a[1]=e=>u.handleData("add"))},{default:(0,r.w5)((()=>[(0,r.Uk)("添 加")])),_:1})])),_:1},8,["model"])])),_:1}),(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[(0,r.Wm)(g,{data:s.tableData,border:"",style:{width:"100%"},"header-cell-style":{background:"#F3F4F7",color:"#555"}},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{prop:"email",label:"邮箱","min-width":"200"}),(0,r.Wm)(p,{prop:"name",label:"姓名","min-width":"200"}),(0,r.Wm)(p,{prop:"phone",label:"电话","min-width":"200"}),(0,r.Wm)(p,{prop:"create_time",label:"创建时间","min-width":"200"}),(0,r.Wm)(p,{align:"center",label:"密码","min-width":"200"},{default:(0,r.w5)((e=>[(0,r.Wm)(i,{type:"primary",onClick:a=>u.resetPassword(e.row._id)},{default:(0,r.w5)((()=>[(0,r.Uk)("重置密码")])),_:2},1032,["onClick"])])),_:1}),(0,r.Wm)(p,{align:"center",fixed:"right",label:"操作",width:"200"},{default:(0,r.w5)((e=>[(0,r.Wm)(i,{type:"primary",onClick:a=>u.handleData("update",e.row)},{default:(0,r.w5)((()=>[(0,r.Uk)("修改")])),_:2},1032,["onClick"]),(0,r.Wm)(i,{type:"danger",disabled:e.row._id==s.userID,onClick:a=>u.deleteData(e.row._id)},{default:(0,r.w5)((()=>[(0,r.Uk)("删除")])),_:2},1032,["disabled","onClick"])])),_:1})])),_:1},8,["data"]),0!==s.tableData.length?((0,r.wg)(),(0,r.iD)("div",n,[(0,r.Wm)(h,{"current-page":s.currentPage,"page-size":s.pageSize,total:s.total,"page-sizes":[10,20,50,100],background:"",layout:"total, sizes, prev, pager, next, jumper",onSizeChange:u.handleSizeChange,onCurrentChange:u.handleCurrentChange},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"])])):(0,r.kq)("",!0)])),_:1}),(0,r.Wm)(f,{"modal-append-to-body":!1,modelValue:s.operaDialog,"onUpdate:modelValue":a[7]||(a[7]=e=>s.operaDialog=e),title:s.dialogTitle,onClose:u.resetForm},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{"status-icon":"",model:s.operaForm,ref:"operaForm",class:"operaDialog","label-width":"100px",rules:e.rules},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{label:"姓名",prop:"name"},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{modelValue:s.operaForm.name,"onUpdate:modelValue":a[2]||(a[2]=e=>s.operaForm.name=e)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(d,{label:"邮箱",prop:"email"},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{modelValue:s.operaForm.email,"onUpdate:modelValue":a[3]||(a[3]=e=>s.operaForm.email=e)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(d,{label:"电话",prop:"phone"},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{modelValue:s.operaForm.phone,"onUpdate:modelValue":a[4]||(a[4]=e=>s.operaForm.phone=e)},null,8,["modelValue"])])),_:1}),s.isupdate?((0,r.wg)(),(0,r.j4)(d,{key:0,label:"密码",prop:"password"},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{modelValue:s.operaForm.password,"onUpdate:modelValue":a[5]||(a[5]=e=>s.operaForm.password=e),type:"password",placeholder:"请输入密码","show-password":""},null,8,["modelValue"])])),_:1})):(0,r.kq)("",!0),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(i,{type:"primary",onClick:a[6]||(a[6]=e=>u.submitForm())},{default:(0,r.w5)((()=>[(0,r.Uk)("提交")])),_:1}),(0,r.Wm)(i,{onClick:u.resetForm},{default:(0,r.w5)((()=>[(0,r.Uk)("取消")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title","onClose"])])}var s=t(4649),u={data(){return{userID:sessionStorage.getItem("user_id"),tableData:[],isCollapse:!1,isupdate:!1,search:"",operaDialog:!1,dialogTitle:"",pageSize:10,total:0,currentPage:1,opera:"",operaForm:{name:"",phone:"",email:"",password:""},searchHeaderForm:{find:""}}},created(){this.getDatas()},methods:{desearch(){this.search="",this.getDatas()},handleData(e,a){"add"==e?(this.operaForm={},this.dialogTitle="添加API",this.isupdate=!0,this.opera="add"):"update"==e&&(this.operaForm={...a},//!!! 直接赋值是引用类型,引起表单重置问题
this.dialogTitle="编辑API",this.isupdate=!1,this.opera="update"),console.log(e),this.operaDialog=!0,console.log(this.operaDialog)},handleSizeChange(e){this.pageSize=e,this.getDatas()},handleCurrentChange(e){this.currentPage=e,this.getDatas()},async getDatas(){const e={page:this.currentPage,page_size:this.pageSize,search:this.searchHeaderForm.find},a=await(0,s.J1)(e);200===a.data.code&&(a.data.data?(this.total=a.data.data.count,this.tableData=a.data.data.data,null==a.data.data.data&&(this.tableData=[])):(this.total=a.data.data.count,this.tableData=[]))},addData(){(0,s.m_)(this.operaForm).then((e=>{console.log(e),200===e.data.code?(this.$message({showClose:!0,message:"创建成功",type:"success"}),this.operaDialog=!1,this.getDatas()):this.$message({showClose:!0,message:e.data.msg,type:"error"})}))},deleteData(e){(0,s.rP)({_id:e}).then((a=>{console.log(e),200===a.data.code&&(this.$message({showClose:!0,message:"删除成功",type:"success"}),this.operaDialog=!1,this.getDatas())}))},editData(){updateApi(this.operaForm).then((e=>{200===e.data.code&&(this.$message({showClose:!0,message:e.data.msg,type:"success"}),this.operaDialog=!1,this.getDatas())}))},submitForm(){this.$refs.operaForm.validate((e=>{e?"add"===this.opera?this.addData():this.editData():this.$message({showClose:!0,message:"请根据要求将信息填写完整",type:"warning"})}))},resetForm(){this.$refs.operaForm.clearValidate(),this.operaForm={},this.operaDialog=!1},resetPassword(e){(0,s.Ts)({_id:e}).then((e=>{200===e.data.code?this.$message({showClose:!0,message:"重置密码成功",type:"success"}):this.$message({showClose:!0,message:e.data.msg,type:"error"})}))}}},l=t(89);const d=(0,l.Z)(u,[["render",o],["__scopeId","data-v-2bd0cb10"]]);var i=d}}]);
//# sourceMappingURL=491.78f4107d.js.map