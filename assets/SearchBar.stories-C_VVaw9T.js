import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as y}from"./index-C7k4LvGd.js";import{S as f}from"./SearchBar-BBekaNBv.js";import"./cx-2dOUpm6k.js";import"./Input-CFBDID0e.js";import"./fieldMessages-B9-hGdj0.js";import"./textValue-C1yidy5v.js";import"./Field-DTqFT2up.js";import"./x-nFuAMi5B.js";import"./createLucideIcon-e0PjoWs3.js";import"./search-7DMAlEQT.js";function n(e){const[j,c]=y.useState(String(e.value??""));return r.jsx("div",{style:{width:320},children:r.jsx(f,{...e,onChange:b=>c(b.target.value),onClear:()=>c(""),value:j})})}const F={title:"Forms/SearchBar",component:f,tags:["autodocs"],args:{placeholder:"Search...",value:""}},a={render:e=>r.jsx(n,{...e})},s={args:{value:"Tokyo workspace"},render:e=>r.jsx(n,{...e})},o={args:{disabled:!0,value:"Disabled search"},render:e=>r.jsx(n,{...e})},t={args:{tone:"white",value:"Inverse surface"},render:e=>r.jsx("div",{style:{width:360,padding:20,background:"var(--oec-color-primary)"},children:r.jsx(n,{...e})})};var d,i,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <ControlledPreview {...args} />
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,u,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: "Tokyo workspace"
  },
  render: args => <ControlledPreview {...args} />
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,v,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: "Disabled search"
  },
  render: args => <ControlledPreview {...args} />
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var w,x,S;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    tone: "white",
    value: "Inverse surface"
  },
  render: args => <div style={{
    width: 360,
    padding: 20,
    background: "var(--oec-color-primary)"
  }}>
      <ControlledPreview {...args} />
    </div>
}`,...(S=(x=t.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const O=["Default","WithValue","Disabled","WhiteTone"];export{a as Default,o as Disabled,t as WhiteTone,s as WithValue,O as __namedExportsOrder,F as default};
