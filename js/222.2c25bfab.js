"use strict";(self["webpackChunkcheck_work_view"]=self["webpackChunkcheck_work_view"]||[]).push([[222],{344:function(e,t,a){a.d(t,{Bv:function(){return f},HD:function(){return c},Li:function(){return d},Ll:function(){return n},bR:function(){return p},dv:function(){return o},fM:function(){return r},h8:function(){return m},kn:function(){return u},x4:function(){return l},zd:function(){return i}});var s=a(8676);function l(e){return(0,s.Z)({url:"/student/login",method:"post",data:e})}function o(e){return(0,s.Z)({url:"/student/student/create",method:"post",data:e})}function r(){return(0,s.Z)({url:"/student/getByToken",method:"get",params:{},data:{}})}function n(){return(0,s.Z)({url:"/dashboard/student",method:"get",params:{},data:{}})}function u(e){return(0,s.Z)({url:"/work/course/find/student",method:"get",params:e,data:{}})}function d(e){return(0,s.Z)({url:"/work/course/join",method:"post",params:{},data:e})}function i(e){return(0,s.Z)({url:"/work/course/exitByStudent",method:"delete",params:e,data:{}})}function m(e){return(0,s.Z)({url:"/work/work/find",method:"get",params:e,data:{}})}function c(e){return(0,s.Z)({url:"/work/work/upload",method:"post",data:e})}function f(e){return(0,s.Z)({url:"/work/work/answer/details",method:"get",params:e,data:{}})}function p(e){return(0,s.Z)({url:"/manager/class/find",method:"get",params:e})}},5617:function(e,t,a){a.d(t,{f:function(){return l}});var s=a(8676);function l(){return(0,s.Z)({url:"/getVerify",method:"get"})}},8676:function(e,t,a){a.d(t,{Z:function(){return n}});a(7658);var s=a(4161);function l(){var e={token:sessionStorage.getItem("token"),user_id:sessionStorage.getItem("user_id"),type:sessionStorage.getItem("type")};return e}var o=a(7178);const r=s.Z.create({baseURL:"http://101.200.87.232:11002"});r.interceptors.request.use((e=>{var t=l();return""!=t.token&&(e.headers["token"]=t.token,e.headers["user_id"]=t.user_id,e.headers["type"]=t.type),e}),(e=>Promise.reject(e))),r.interceptors.response.use((e=>{if(console.log(e),401===e.data.code&&(console.log(1233),(0,o.z8)({message:e.data.msg,type:"error",duration:5e3}),router.push("/login")),400!==e.data.code)return e;(0,o.z8)({message:e.data.msg,type:"error",duration:5e3})}),(e=>{Promise.reject(e)}));var n=r},7222:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var s=a(3396);const l={class:"container"},o={class:"main"},r={key:0,class:"input"},n=(0,s._)("div",{class:"title-container"},[(0,s._)("span",{class:"title"},"学生登录")],-1),u={class:"inof"},d=["src"],i={key:1,class:"input"},m=(0,s._)("div",{class:"title-container"},[(0,s._)("span",{class:"title"},"学生注册")],-1),c=["src"];function f(e,t,a,f,p,g){const h=(0,s.up)("el-input"),w=(0,s.up)("el-form-item"),_=(0,s.up)("el-button"),k=(0,s.up)("el-form"),V=(0,s.up)("el-avatar"),v=(0,s.up)("el-upload"),y=(0,s.up)("el-dialog"),W=(0,s.up)("el-option"),b=(0,s.up)("el-select");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",o,[p.isregister?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",r,[n,(0,s._)("div",u,[(0,s.Wm)(k,{ref:"form",model:p.form,"label-width":"80px"},{default:(0,s.w5)((()=>[(0,s.Wm)(w,{label:"邮箱"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{modelValue:p.form.account,"onUpdate:modelValue":t[0]||(t[0]=e=>p.form.account=e)},null,8,["modelValue"])])),_:1}),(0,s.Wm)(w,{label:"密码"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{placeholder:"请输入密码",modelValue:p.form.password,"onUpdate:modelValue":t[1]||(t[1]=e=>p.form.password=e),"show-password":""},null,8,["modelValue"])])),_:1}),p.isVerify?((0,s.wg)(),(0,s.j4)(w,{key:0},{default:(0,s.w5)((()=>[(0,s._)("img",{slot:"append",src:p.changeImage,onClick:t[2]||(t[2]=(...e)=>g.handleClickImge&&g.handleClickImge(...e)),class:"codeImage"},null,8,d)])),_:1})):(0,s.kq)("",!0),p.isVerify?((0,s.wg)(),(0,s.j4)(w,{key:1,label:"验证码"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{placeholder:"请输入验证码",modelValue:p.form.code,"onUpdate:modelValue":t[3]||(t[3]=e=>p.form.code=e)},null,8,["modelValue"])])),_:1})):(0,s.kq)("",!0),(0,s.Wm)(w,null,{default:(0,s.w5)((()=>[(0,s.Wm)(_,{type:"primary",onClick:g.onSubmit},{default:(0,s.w5)((()=>[(0,s.Uk)("立即登录")])),_:1},8,["onClick"]),(0,s.Wm)(_,{type:"primary",onClick:g.onRegister},{default:(0,s.w5)((()=>[(0,s.Uk)("立即注册")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])])),p.isregister?((0,s.wg)(),(0,s.iD)("div",i,[m,(0,s.Wm)(k,{model:e.store,class:"demo-form-inline"},{default:(0,s.w5)((()=>[(0,s.Wm)(w,{label:"头像"},{default:(0,s.w5)((()=>[(0,s.Wm)(v,{"file-list":e.PicList,"onUpdate:fileList":t[4]||(t[4]=t=>e.PicList=t),name:"work_file",action:"http://127.0.0.1:11002/uploadImage","show-file-list":!1,"on-success":g.uploadSuccess,"on-remove":e.handleRemove},{default:(0,s.w5)((()=>[(0,s.Wm)(V,{size:70,src:p.user.image_url},null,8,["src"])])),_:1},8,["file-list","on-success","on-remove"]),(0,s.Wm)(y,{modelValue:e.dialogVisible,"onUpdate:modelValue":t[5]||(t[5]=t=>e.dialogVisible=t)},{default:(0,s.w5)((()=>[(0,s._)("img",{"w-full":"",src:e.dialogImageUrl,alt:"Preview Image"},null,8,c)])),_:1},8,["modelValue"])])),_:1}),(0,s.Wm)(w,{label:"学号"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{modelValue:p.user.school_student_id,"onUpdate:modelValue":t[6]||(t[6]=e=>p.user.school_student_id=e),placeholder:"请输入学号"},null,8,["modelValue"])])),_:1}),(0,s.Wm)(w,{label:"姓名"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{modelValue:p.user.name,"onUpdate:modelValue":t[7]||(t[7]=e=>p.user.name=e),placeholder:"请输入姓名"},null,8,["modelValue"])])),_:1}),(0,s.Wm)(w,{label:"班级"},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{modelValue:p.user.class_id,"onUpdate:modelValue":t[8]||(t[8]=e=>p.user.class_id=e),placeholder:"请选择班级",size:"large"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(p.options,(e=>((0,s.wg)(),(0,s.j4)(W,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,s.Wm)(w,{label:"邮箱"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{modelValue:p.user.email,"onUpdate:modelValue":t[9]||(t[9]=e=>p.user.email=e),placeholder:"请输入邮箱"},null,8,["modelValue"])])),_:1}),(0,s.Wm)(w,{label:"电话"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{modelValue:p.user.phone,"onUpdate:modelValue":t[10]||(t[10]=e=>p.user.phone=e),placeholder:"请输入电话"},null,8,["modelValue"])])),_:1}),(0,s.Wm)(w,{label:"密码"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{modelValue:p.user.password,"onUpdate:modelValue":t[11]||(t[11]=e=>p.user.password=e),placeholder:"请输入密码","show-password":""},null,8,["modelValue"])])),_:1}),(0,s.Wm)(w,null,{default:(0,s.w5)((()=>[(0,s.Wm)(_,{type:"primary",onClick:g.register},{default:(0,s.w5)((()=>[(0,s.Uk)("注册")])),_:1},8,["onClick"]),(0,s.Wm)(_,{type:"error",onClick:g.cancel},{default:(0,s.w5)((()=>[(0,s.Uk)("取消")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])):(0,s.kq)("",!0)])])}a(7658);var p=a(5617),g=a(344),h={data(){return{form:{account:"",password:"",verify_id:"",code:""},isVerify:!1,changeImage:"",isregister:!1,user:{school_student_id:"",name:"",class_id:"",image_url:"",email:"",phone:""},options:[]}},created(){this.getOptions(),this.handleClickImge()},methods:{getUserMessage(){(0,g.fM)().then((e=>{200!=e.data.code?this.$message.error(e.data.msg):(sessionStorage.setItem("name",e.data.data.name),sessionStorage.setItem("image_url",e.data.data.image_url))}))},uploadSuccess(e,t){this.user.image_url=e.data,this.$message({showClose:!0,message:"上传成功",type:"success"})},async getOptions(){const e=await(0,g.bR)();if(200===e.data.code)if(e.data.data){var t="",a="";for(let s=0;s<e.data.data.data.length;s++)t=e.data.data.data[s]._id,a=e.data.data.data[s].name,this.options.push({value:t,label:a})}else this.options=[]},handleClickImge(){(0,p.f)().then((e=>{this.changeImage=e.data.data.base64,this.form.verify_id=e.data.data.verify_id}))},onSubmit(){(0,g.x4)(this.form).then((e=>{200!=e.data.code?(e.data.data>=3?(this.isVerify=!0,this.handleClickImge()):this.isVerify=!1,this.$message.error(e.data.msg)):(sessionStorage.setItem("token",e.data.data.token),sessionStorage.setItem("user_id",e.data.data.user_id),this.getUserMessage(),this.$message({showClose:!0,message:"登录成功",type:"success"}),setTimeout((()=>{this.$router.push("/student/home").catch((()=>{}))}),100))}))},onRegister(){this.isregister=!0},cancel(){this.isregister=!1},register(){(0,g.dv)(this.user).then((e=>{200!=e.data.code?this.$message.error(e.data.msg):(this.$message({showClose:!0,message:"注册成功",type:"success"}),this.user={},this.isregister=!1)}))}}},w=a(89);const _=(0,w.Z)(h,[["render",f]]);var k=_}}]);
//# sourceMappingURL=222.2c25bfab.js.map