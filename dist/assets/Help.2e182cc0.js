import{f as l,X as d,_ as m,J as p,G as _,ax as h,o as a,g as v,a as g,h as s,aa as x,w as k,k as c,ay as y,F as w,j as N,t as j}from"./vendor.000df4d1.js";import{u as B,_ as F,f as R}from"./index.37175fb8.js";const D=l({setup(S){const u=d(),i=B(),f=m(),o=p(""),t=_(()=>{const e=u.params.distro;if(e!=null)return i.state.docItems.find(n=>n.name==e)});return h(async()=>{t.value&&R(t.value).then(e=>o.value=e,e=>f.error(e.message))}),(e,n)=>(a(),v(w,null,[g(s(x),{prefix:"bar"},{default:k(()=>{var r;return[N(j(((r=s(t))==null?void 0:r.name)||"Help"),1)]}),_:1}),s(t)?(a(),c(F,{key:0,content:o.value},null,8,["content"])):(a(),c(s(y),{key:1,size:"huge",status:"info",title:"RTFM",description:"Select menu to view help"}))],64))}});export{D as default};