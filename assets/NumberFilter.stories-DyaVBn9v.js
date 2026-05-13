import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as d}from"./index-C7k4LvGd.js";import{D as l,N as B}from"./NumberFilter-DtLtYhzM.js";import"./cx-2dOUpm6k.js";import"./NumberInput-ws6Jubkf.js";import"./Input-CFBDID0e.js";import"./fieldMessages-B9-hGdj0.js";import"./textValue-C1yidy5v.js";import"./Field-DTqFT2up.js";import"./Select-JH9RUJDC.js";import"./floating-ui.react-d-2ItNnr.js";import"./index-s2tCW9eu.js";import"./index-Cb0LmbZ2.js";import"./x-nFuAMi5B.js";import"./createLucideIcon-e0PjoWs3.js";import"./Checkbox-Bk-8IysC.js";import"./check-DIQmgjSX.js";function s(e){const[C,f]=d.useState(e.value??[]),[L,P]=d.useState(e.options??l[0].value);return r.jsx("div",{style:{width:"fit-content",border:"1px solid var(--oec-color-outline-variant)",borderRadius:"var(--oec-radius-sm)",background:"var(--oec-color-surface)"},children:r.jsx(B,{...e,onChangeValue:f,onSelectChange:_=>P(_.value),options:L,value:C})})}const K={title:"Filters/NumberFilter",component:B,tags:["autodocs"],args:{error:"This field is required.",isError:"",onChangeValue:()=>{},onSelectChange:()=>{},options:l[0].value,placeholder:{select:"Select...",input1:"no.",input2:"no."},queryOptions:l,value:[]}},o={render:e=>r.jsx(s,{...e})},n={args:{options:"BETWEEN",value:[10,20]},render:e=>r.jsx(s,{...e})},a={args:{options:"IS_NULL",value:[null]},render:e=>r.jsx(s,{...e})},i={args:{isError:"error",options:"BETWEEN",value:[10,null]},render:e=>r.jsx(s,{...e})},t={render:e=>r.jsxs("div",{style:{display:"grid",gap:24},children:[r.jsxs("div",{style:{display:"grid",gap:12},children:[r.jsx("div",{children:"Default"}),r.jsx(s,{...e})]}),r.jsxs("div",{style:{display:"grid",gap:12},children:[r.jsx("div",{children:"Between"}),r.jsx(s,{...e,options:"BETWEEN",value:[10,20]})]}),r.jsxs("div",{style:{display:"grid",gap:12},children:[r.jsx("div",{children:"Is Null"}),r.jsx(s,{...e,options:"IS_NULL",value:[null]})]}),r.jsxs("div",{style:{display:"grid",gap:12},children:[r.jsx("div",{children:"Error"}),r.jsx(s,{...e,isError:"error",options:"BETWEEN",value:[10,null]})]})]})};var p,u,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <ControlledPreview {...args} />
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var v,m,g;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    options: "BETWEEN",
    value: [10, 20]
  },
  render: args => <ControlledPreview {...args} />
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var E,y,x;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    options: "IS_NULL",
    value: [null]
  },
  render: args => <ControlledPreview {...args} />
}`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var j,N,S;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isError: "error",
    options: "BETWEEN",
    value: [10, null]
  },
  render: args => <ControlledPreview {...args} />
}`,...(S=(N=i.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var h,w,T;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "grid",
    gap: 24
  }}>
      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>Default</div>
        <ControlledPreview {...args} />
      </div>
      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>Between</div>
        <ControlledPreview {...args} options="BETWEEN" value={[10, 20]} />
      </div>
      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>Is Null</div>
        <ControlledPreview {...args} options="IS_NULL" value={[null]} />
      </div>
      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>Error</div>
        <ControlledPreview {...args} isError="error" options="BETWEEN" value={[10, null]} />
      </div>
    </div>
}`,...(T=(w=t.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const Q=["Default","Between","NullType","ErrorState","Summary"];export{n as Between,o as Default,i as ErrorState,a as NullType,t as Summary,Q as __namedExportsOrder,K as default};
