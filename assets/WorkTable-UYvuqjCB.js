import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o,c as r,a as t,F as d,i as c,t as a,p as u,j as p}from"./app-Sv2AyNyC.js";const _=[{id:1,name:"test",why:"test",style:"test"}],h={name:"WorkTable",props:{work_type:{type:String,required:!0}},methods:{chooseForm(){switch(this.work_type){case"mwpz":return this.mwpzdata;default:return[]}}},data(){return{mwpzdata:[]}},mounted(){this.mwpzdata=_}},i=s=>(u("data-v-cd2c5895"),s=s(),p(),s),m={class:"custom-table"},w=i(()=>t("thead",null,[t("tr",null,[t("th",null,"序号"),t("th",null,"名称"),t("th",null,"原因"),t("th",null,"联系方式")])],-1)),y={style:{width:"2em"}};function f(s,k,b,z,S,l){return o(),r("div",null,[t("table",m,[w,t("tbody",null,[(o(!0),r(d,null,c(l.chooseForm(),e=>(o(),r("tr",{key:e.id},[t("td",null,a(e.id),1),t("td",null,a(e.name),1),t("td",null,a(e.why),1),t("td",y,a(e.style),1)]))),128))])])])}const I=n(h,[["render",f],["__scopeId","data-v-cd2c5895"],["__file","WorkTable.vue"]]);export{I as default};
