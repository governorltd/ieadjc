import{_ as i,o as n,c as a,J as c,a as o,n as d}from"./entry.b5d62968.js";const u={data(){return{isVisible:!1}},methods:{scrollToTop(){window.scroll({top:0,behavior:"smooth"})}},mounted(){window.addEventListener("scroll",()=>{window.scrollY>=500?this.isVisible=!0:this.isVisible=!1})}},p=o("i",{class:"arrow-top icofont-rounded-up"},null,-1),f=o("i",{class:"arrow-bottom icofont-rounded-up"},null,-1),_=[p,f];function m(s,l,w,h,t,e){return n(),a("div",null,[c(s.$slots,"default"),o("button",{class:d(["scroll-top",{show:t.isVisible}]),onClick:l[0]||(l[0]=(...r)=>e.scrollToTop&&e.scrollToTop(...r))},_,2)])}const T=i(u,[["render",m]]);export{T as default};
