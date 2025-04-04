import{_ as S,v as $,$ as U,g as p,q as u,r as h,u as m,j as C,s as f,c as g,f as v,P as N,z as j,G as A,a0 as R,a1 as b}from"./index-CrPihqFz.js";const _=S();function H({props:t,name:s,defaultTheme:e,themeId:o}){let a=$(e);return o&&(a=a[o]||a),U({theme:a,name:s,props:t})}function P(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function T(t){return parseFloat(t)}function X(t){return p("MuiCard",t)}u("MuiCard",["root"]);const B=t=>{const{classes:s}=t;return v({root:["root"]},X,s)},E=f(N,{name:"MuiCard",slot:"Root",overridesResolver:(t,s)=>s.root})({overflow:"hidden"}),I=h.forwardRef(function(s,e){const o=m({props:s,name:"MuiCard"}),{className:a,raised:n=!1,...r}=o,i={...o,raised:n},l=B(i);return C.jsx(E,{className:g(l.root,a),elevation:n?8:void 0,ref:e,ownerState:i,...r})});function K(t){return p("MuiCardContent",t)}u("MuiCardContent",["root"]);const W=t=>{const{classes:s}=t;return v({root:["root"]},K,s)},q=f("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,s)=>s.root})({padding:16,"&:last-child":{paddingBottom:24}}),J=h.forwardRef(function(s,e){const o=m({props:s,name:"MuiCardContent"}),{className:a,component:n="div",...r}=o,i={...o,component:n},l=W(i);return C.jsx(q,{as:n,className:g(l.root,a),ownerState:i,ref:e,...r})});function z(t){return p("MuiSkeleton",t)}u("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const D=t=>{const{classes:s,variant:e,animation:o,hasChildren:a,width:n,height:r}=t;return v({root:["root",e,o,a&&"withChildren",a&&!n&&"fitContent",a&&!r&&"heightAuto"]},z,s)},c=b`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,d=b`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,F=typeof c!="string"?R`
        animation: ${c} 2s ease-in-out 0.5s infinite;
      `:null,G=typeof d!="string"?R`
        &::after {
          animation: ${d} 2s linear 0.5s infinite;
        }
      `:null,O=f("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:e}=t;return[s.root,s[e.variant],e.animation!==!1&&s[e.animation],e.hasChildren&&s.withChildren,e.hasChildren&&!e.width&&s.fitContent,e.hasChildren&&!e.height&&s.heightAuto]}})(j(({theme:t})=>{const s=P(t.shape.borderRadius)||"px",e=T(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:A(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${e}${s}/${Math.round(e/.6*10)/10}${s}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:o})=>o.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:o})=>o.hasChildren&&!o.width,style:{maxWidth:"fit-content"}},{props:({ownerState:o})=>o.hasChildren&&!o.height,style:{height:"auto"}},{props:{animation:"pulse"},style:F||{animation:`${c} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:G||{"&::after":{animation:`${d} 2s linear 0.5s infinite`}}}]}})),L=h.forwardRef(function(s,e){const o=m({props:s,name:"MuiSkeleton"}),{animation:a="pulse",className:n,component:r="span",height:i,style:l,variant:k="text",width:x,...y}=o,w={...o,animation:a,component:r,variant:k,hasChildren:!!y.children},M=D(w);return C.jsx(O,{as:r,ref:e,className:g(M.root,n),ownerState:w,...y,style:{width:x,height:i,...l}})});export{I as C,L as S,J as a,_ as s,H as u};
