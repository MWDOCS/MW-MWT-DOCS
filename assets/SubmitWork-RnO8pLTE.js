import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as u,c as a,a as t,b as m}from"./app-MHAHGXwr.js";const _={props:{work_type:{type:String,required:!0},label_name:{type:String,required:!0}},data(){return{showForm:!1}},methods:{submitForm(){const s=this.$refs.name.value,e=this.$refs.why.value,n=this.$refs.style.value,l="mw_docs.yml",r=`MW & MWT 文档: ${s}`,o=`https://github.com/MWDOCS/Wakudocs.github.io/issues/new?&labels=${this.label_name}&projects=&template=${l}&title=${encodeURIComponent(r)}&name=${encodeURIComponent(s)}&why=${encodeURIComponent(e)}&style=${encodeURIComponent(n)}&status=${encodeURIComponent(n)}`;window.open(o)}}},d={class:"overlay"},p={class:"form-container"},h=t("label",null,[t("strong",null,"名称：")],-1),b={type:"text",ref:"name"},f=t("br",null,null,-1),y=t("label",null,[t("strong",null,"建议：")],-1),$={type:"text",ref:"why"},w=t("br",null,null,-1),g=t("label",null,[t("strong",null,"联系邮箱：")],-1),k={type:"email",ref:"style"},v=t("br",null,null,-1),C={class:"form-container-right"};function x(s,e,n,l,r,o){return u(),a("form",d,[t("div",p,[h,t("input",b,null,512),f,y,t("input",$,null,512),w,g,t("input",k,null,512),v,m(" *尽量使用电脑端访问 ")]),t("div",C,[t("button",{onClick:e[0]||(e[0]=(...i)=>o.submitForm&&o.submitForm(...i)),type:"submit",class:"code-button"}," 提交 ")])])}const R=c(_,[["render",x],["__file","SubmitWork.vue"]]);export{R as default};