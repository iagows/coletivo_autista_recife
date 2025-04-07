import{r as u,e as F,j as t,c as B,h as j,a as m,b as E,d as M,m as A,f as U,g as G,i as N,k,s as O,u as $,l as H,n as I,o as C,p as L,T as h}from"./index-C78xz32A.js";import{C as q}from"./index-PDRj7__8.js";import{s as z,u as J,S as l,P as K,C as Q,a as W}from"./index-CUcHUBRR.js";const X=N(),Y=z("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root});function Z(e){return J({props:e,name:"MuiStack",defaultTheme:X})}function _(e,s){const r=u.Children.toArray(e).filter(Boolean);return r.reduce((o,n,c)=>(o.push(n),c<r.length-1&&o.push(u.cloneElement(s,{key:`separator-${c}`})),o),[])}const w=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],ee=({ownerState:e,theme:s})=>{let r={display:"flex",flexDirection:"column",...j({theme:s},m({values:e.direction,breakpoints:s.breakpoints.values}),o=>({flexDirection:o}))};if(e.spacing){const o=E(s),n=Object.keys(s.breakpoints.values).reduce((a,i)=>((typeof e.spacing=="object"&&e.spacing[i]!=null||typeof e.direction=="object"&&e.direction[i]!=null)&&(a[i]=!0),a),{}),c=m({values:e.direction,base:n}),f=m({values:e.spacing,base:n});typeof c=="object"&&Object.keys(c).forEach((a,i,p)=>{if(!c[a]){const d=i>0?c[p[i-1]]:"column";c[a]=d}}),r=M(r,j({theme:s},f,(a,i)=>e.useFlexGap?{gap:k(o,a)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${w(i?c[i]:e.direction)}`]:k(o,a)}}))}return r=A(s.breakpoints,r),r};function se(e={}){const{createStyledComponent:s=Y,useThemeProps:r=Z,componentName:o="MuiStack"}=e,n=()=>U({root:["root"]},a=>G(o,a),{}),c=s(ee);return u.forwardRef(function(a,i){const p=r(a),v=F(p),{component:d="div",direction:P="column",spacing:S=0,divider:y,children:x,className:R,useFlexGap:T=!1,...b}=v,V={direction:P,spacing:S,useFlexGap:T},D=n();return t.jsx(c,{as:d,ownerState:V,ref:i,className:B(D.root,R),...b,children:y?_(x,y):x})})}const te=se({createStyledComponent:O("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root}),useThemeProps:e=>$({props:e,name:"MuiStack"})}),re=()=>{const e=H(),s=I(r=>r.rules);return u.useEffect(()=>{e(C())},[e]),{...s,refetch:()=>e(C())}},ce=()=>{const{translate:e}=L(),{data:s,error:r,loading:o}=re();return t.jsxs(q,{children:[t.jsx(h,{variant:"h5",component:"p",children:e("regras.titulo")}),t.jsx(h,{variant:"h6",component:"p",children:e("regras.descricao")}),t.jsx(te,{direction:"column",spacing:2,children:r?t.jsxs("div",{children:["Erro: ",r]}):t.jsx(t.Fragment,{children:o?t.jsxs(t.Fragment,{children:[t.jsx(l,{variant:"rectangular",height:118,animation:"wave"}),t.jsx(l,{variant:"rectangular",height:118,animation:"wave"}),t.jsx(l,{variant:"rectangular",height:118,animation:"wave"}),t.jsx(l,{variant:"rectangular",height:118,animation:"wave"})]}):s.map(n=>t.jsxs(K,{children:[t.jsx(Q,{title:n.texto}),t.jsx(W,{children:n.detalhamento&&t.jsx(h,{gutterBottom:!0,component:"p",variant:"body2",color:"text.secondary",children:n.detalhamento})})]},n.id))})})]})};export{ce as default};
