"use strict";(self["webpackChunkcheck_work_view"]=self["webpackChunkcheck_work_view"]||[]).push([[843],{3843:function(t,e,i){i.r(e),i.d(e,{default:function(){return o}});var a=i(3396);const s=(0,a._)("div",{class:"le"},[(0,a._)("h2",null,"请开始一天的工作吧。"),(0,a._)("p",null,"课程数量 创建题目数量 待完成作业数量 "),(0,a._)("p")],-1),n=(0,a._)("div",{class:"ri"},[(0,a._)("img",{class:"ri-img",decoding:"async",src:"https://demo.gin-vue-admin.com/assets/dashboard.70e55b71.png",alt:""})],-1),l=(0,a._)("div",null,[(0,a._)("div",{id:"main",style:{width:"600px",height:"300px",float:"left"}}),(0,a._)("div",{id:"main2",style:{width:"600px",height:"300px",float:"right"}})],-1);function d(t,e,i,d,r,h){const c=(0,a.up)("el-card");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c,{class:"header"},{default:(0,a.w5)((()=>[s,n])),_:1}),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[l])),_:1})],64)}var r={data(){return{isCollapse:!1}},methods:{leftChart(){let t=this.$echarts.init(document.getElementById("main")),e={title:{text:"课程作业重复率排行"},tooltip:{},legend:{data:["重复率"]},xAxis:{data:["软件1902","软件1901","软件1905","计算机1901","计算机1903"]},yAxis:{},series:[{name:"重复率",type:"bar",data:[36,31,29,20,14,13]}]};t.setOption(e)},rightChart(){let t=this.$echarts.init(document.getElementById("main2")),e={title:{text:"课程作业完成率排行"},tooltip:{},legend:{data:["完成率"]},xAxis:{data:["软件1902","软件1901","软件1905","计算机1901","计算机1903"]},yAxis:{},series:[{name:"完成率",type:"bar",data:[90,86,77,75,75,74]}]};t.setOption(e)}},mounted(){this.leftChart(),this.rightChart()}},h=i(89);const c=(0,h.Z)(r,[["render",d]]);var o=c}}]);
//# sourceMappingURL=843.46ecfd20.js.map