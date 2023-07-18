"use strict";(self["webpackChunkcheck_work_view"]=self["webpackChunkcheck_work_view"]||[]).push([[677],{4649:function(e,t,n){n.d(t,{$h:function(){return f},$l:function(){return v},Fq:function(){return S},HB:function(){return l},IT:function(){return k},It:function(){return j},J1:function(){return m},N5:function(){return I},Pk:function(){return b},Qg:function(){return y},Ts:function(){return d},UM:function(){return W},V0:function(){return w},Y$:function(){return c},Zo:function(){return Z},bR:function(){return P},dv:function(){return R},f2:function(){return _},fM:function(){return u},m_:function(){return o},nG:function(){return $},pr:function(){return C},q0:function(){return h},qS:function(){return i},rG:function(){return q},rP:function(){return s},v3:function(){return p},vQ:function(){return x},vi:function(){return V},vx:function(){return g},wM:function(){return M},wy:function(){return U},x4:function(){return a}});var r=n(8676);function a(e){return(0,r.Z)({url:"/manager/login",method:"post",data:e})}function u(){return(0,r.Z)({url:"/manager/getByToken",method:"get",params:{},data:{}})}function o(e){const t="/manager/manager/create";return r.Z.post(t,e)}function s(e){return console.log(e),(0,r.Z)({url:"/manager/manager/delete",method:"delete",params:e})}function c(e){const t="/manager/manager/update";return r.Z.put(t,e)}function i(e){const t="/manager/manager/update/password";return r.Z.put(t,e)}function d(e){return(0,r.Z)({url:"/manager/manager/resetPassword",method:"get",params:e,data:{}})}function m(e){return(0,r.Z)({url:"/manager/manager/find",method:"get",params:e})}function l(e){const t="/manager/function/create";return r.Z.post(t,e)}function f(e){return console.log(e),(0,r.Z)({url:"/manager/function/delete",method:"delete",params:e})}function g(e){const t="/manager/function/update";return r.Z.put(t,e)}function p(e){return(0,r.Z)({url:"/manager/function/find",method:"get",params:e})}function h(e){return(0,r.Z)({url:"/manager/function/findByRole",method:"get",params:e})}function Z(e){const t="/manager/teacherRole/create";return r.Z.post(t,e)}function w(e){return console.log(e),(0,r.Z)({url:"/manager/teacherRole/delete",method:"delete",params:e})}function k(e){const t="/manager/teacherRole/update";return r.Z.put(t,e)}function _(e){return(0,r.Z)({url:"/manager/teacherRole/find",method:"get",params:e})}function v(e){const t="/manager/teacher/create";return r.Z.post(t,e)}function y(e){return console.log(e),(0,r.Z)({url:"/manager/teacher/delete",method:"delete",params:e})}function I(e){const t="/manager/teacher/update";return r.Z.put(t,e)}function V(e){return(0,r.Z)({url:"/manager/teacher/update/password",method:"put",params:{},data:e})}function b(e){return(0,r.Z)({url:"/manager/teacher/find",method:"get",params:e,data:{}})}function S(e){return(0,r.Z)({url:"/manager/teacher/resetPassword",method:"get",params:e,data:{}})}function C(e){return(0,r.Z)({url:"/manager/class/create",method:"post",params:{},data:e})}function U(e){return(0,r.Z)({url:"/manager/class/delete",method:"delete",params:e,data:{}})}function W(e){return(0,r.Z)({url:"/manager/class/update",method:"put",params:{},data:e})}function P(e){return(0,r.Z)({url:"/manager/class/find",method:"get",params:e,data:{}})}function R(e){return(0,r.Z)({url:"/manager/student/create",method:"post",params:{},data:e})}function $(e){return(0,r.Z)({url:"/manager/student/delete",method:"delete",params:e,data:{}})}function q(e){return(0,r.Z)({url:"/manager/student/update",method:"put",params:{},data:e})}function M(e){return(0,r.Z)({url:"/manager/student/update/password",method:"put",params:{},data:e})}function j(e){return(0,r.Z)({url:"/manager/student/resetPassword",method:"get",params:e,data:{}})}function x(e){return(0,r.Z)({url:"/manager/student/find",method:"get",params:e,data:{}})}},5617:function(e,t,n){n.d(t,{f:function(){return a}});var r=n(8676);function a(){return(0,r.Z)({url:"/getVerify",method:"get"})}},8676:function(e,t,n){n.d(t,{Z:function(){return s}});n(7658);var r=n(4161);function a(){var e={token:sessionStorage.getItem("token"),user_id:sessionStorage.getItem("user_id"),type:sessionStorage.getItem("type")};return e}var u=n(7178);const o=r.Z.create({baseURL:"http://101.200.87.232:11002"});o.interceptors.request.use((e=>{var t=a();return""!=t.token&&(e.headers["token"]=t.token,e.headers["user_id"]=t.user_id,e.headers["type"]=t.type),e}),(e=>Promise.reject(e))),o.interceptors.response.use((e=>{if(console.log(e),401===e.data.code&&(console.log(1233),(0,u.z8)({message:e.data.msg,type:"error",duration:5e3}),router.push("/login")),400!==e.data.code)return e;(0,u.z8)({message:e.data.msg,type:"error",duration:5e3})}),(e=>{Promise.reject(e)}));var s=o},4677:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(3396);const a={class:"container"},u={class:"main"},o={class:"input"},s=(0,r._)("div",{class:"title-container"},[(0,r._)("span",{class:"title"},"管理员登录")],-1),c={class:"inof"},i=["src"];function d(e,t,n,d,m,l){const f=(0,r.up)("el-input"),g=(0,r.up)("el-form-item"),p=(0,r.up)("el-button"),h=(0,r.up)("el-form");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("div",u,[(0,r._)("div",o,[s,(0,r._)("div",c,[(0,r.Wm)(h,{ref:"form",model:m.form,"label-width":"80px"},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{label:"电话"},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{modelValue:m.form.account,"onUpdate:modelValue":t[0]||(t[0]=e=>m.form.account=e)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(g,{label:"密码"},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{placeholder:"请输入密码",modelValue:m.form.password,"onUpdate:modelValue":t[1]||(t[1]=e=>m.form.password=e),"show-password":""},null,8,["modelValue"])])),_:1}),m.isVerify?((0,r.wg)(),(0,r.j4)(g,{key:0},{default:(0,r.w5)((()=>[(0,r._)("img",{src:m.changeImage,onClick:t[2]||(t[2]=(...e)=>l.handleClickImge&&l.handleClickImge(...e)),class:"codeImage"},null,8,i)])),_:1})):(0,r.kq)("",!0),m.isVerify?((0,r.wg)(),(0,r.j4)(g,{key:1,label:"验证码"},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{placeholder:"请输入验证码",modelValue:m.form.code,"onUpdate:modelValue":t[3]||(t[3]=e=>m.form.code=e)},null,8,["modelValue"])])),_:1})):(0,r.kq)("",!0),(0,r.Wm)(g,null,{default:(0,r.w5)((()=>[(0,r.Wm)(p,{type:"primary",onClick:l.onSubmit},{default:(0,r.w5)((()=>[(0,r.Uk)("立即登录")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])])])])}n(7658);var m=n(4649),l=n(5617),f=n(2044),g={data(){return{store:f.h,isVerify:!1,changeImage:"",form:{account:"",password:""}}},methods:{getUserMessage(){(0,m.fM)().then((e=>{200!=e.data.code?this.$message.error(e.data.msg):(sessionStorage.setItem("name",e.data.data.name),sessionStorage.setItem("image_url",e.data.data.image_url),sessionStorage.setItem("type","manager"))}))},handleClickImge(){(0,l.f)().then((e=>{this.changeImage=e.data.data.base64,this.form.verify_id=e.data.data.verify_id}))},onSubmit(){(0,m.x4)(this.form).then((e=>{200!=e.data.code?(e.data.data>=3?(this.isVerify=!0,this.handleClickImge()):this.isVerify=!1,this.$message.error(e.data.msg)):(sessionStorage.setItem("token",e.data.data.token),sessionStorage.setItem("user_id",e.data.data.user_id),this.getUserMessage(),this.$message({showClose:!0,message:"登录成功",type:"success"}),setTimeout((()=>{this.$router.push("/manager/home").catch((()=>{}))}),100))}))}}},p=n(89);const h=(0,p.Z)(g,[["render",d]]);var Z=h}}]);
//# sourceMappingURL=677.8ed9f044.js.map