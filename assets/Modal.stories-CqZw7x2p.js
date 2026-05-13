import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-C7k4LvGd.js";import{B as j}from"./Button-CRJgnCCT.js";import{M as h}from"./Modal-CTpPKqbm.js";import"./cx-2dOUpm6k.js";import"./index-s2tCW9eu.js";function n({bodyText:e,initialOpen:l,...b}){const[y,t]=c.useState(l);return c.useEffect(()=>{t(l)},[l]),r.jsxs("div",{children:[r.jsx(j,{onClick:()=>t(!0),children:"Open modal"}),r.jsx(h,{...b,onOpenChange:t,open:y,children:r.jsx("div",{style:{width:320,maxWidth:"calc(100vw - 48px)",padding:24,borderRadius:4,background:"var(--oec-color-surface)",boxShadow:"var(--oec-shadow-level-3)",boxSizing:"border-box"},children:e})})]})}const S={title:"Atoms/Modal",component:n,tags:["autodocs"],args:{bodyText:"This is a base modal container.",closeOnEscape:!0,closeOnOverlayClick:!1,fullscreen:!1,initialOpen:!1},argTypes:{bodyText:{control:"text"},className:{control:"text"},classes:{control:"object"},closeOnEscape:{control:"boolean"},closeOnOverlayClick:{control:"boolean"},fullscreen:{control:"boolean"},initialOpen:{control:"boolean"},style:{control:"object"}}},o={render:e=>r.jsx(n,{...e})},s={args:{fullscreen:!0},render:e=>r.jsx(n,{...e})},a={args:{closeOnOverlayClick:!0},render:e=>r.jsx(n,{...e})};var d,u,i;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <ModalPlayground {...args} />
}`,...(i=(u=o.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var p,m,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    fullscreen: true
  },
  render: args => <ModalPlayground {...args} />
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,O,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    closeOnOverlayClick: true
  },
  render: args => <ModalPlayground {...args} />
}`,...(f=(O=a.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};const w=["Playground","Fullscreen","CloseOnClickOutside"];export{a as CloseOnClickOutside,s as Fullscreen,o as Playground,w as __namedExportsOrder,S as default};
