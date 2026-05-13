import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as a}from"./index-C7k4LvGd.js";import{S as u}from"./SelectTagFilter-KAjk9LHi.js";import"./cx-2dOUpm6k.js";import"./Menu-MGqqQZhF.js";import"./check-DIQmgjSX.js";import"./createLucideIcon-e0PjoWs3.js";import"./Spinner-ByXhr7nR.js";import"./TagInput-CSmXTIO7.js";import"./fieldMessages-B9-hGdj0.js";import"./Field-DTqFT2up.js";import"./Tag-5HF3mQqu.js";import"./x-nFuAMi5B.js";import"./toastStore-91DSA9z6.js";import"./search-7DMAlEQT.js";const F=[{label:"Taipei",value:"taipei"},{label:"Tokyo",value:"tokyo"},{label:"Toronto",value:"toronto"},{label:"Seoul",value:"seoul"},{label:"Singapore",value:"singapore"}];function T({children:r}){return e.jsx("div",{style:{width:320,border:"1px solid var(--oec-color-outline-variant)",borderRadius:"var(--oec-radius-sm)",overflow:"hidden",background:"var(--oec-color-surface)"},children:r})}function s(r){const[p,c]=a.useState(r.value??[]);return e.jsx(T,{children:e.jsx(u,{...r,onChangeValue:c,value:p})})}function N(r){const[p,c]=a.useState(r.value??[]),[O,E]=a.useState([]),[U,v]=a.useState(!1),k=a.useCallback(async g=>{await new Promise(t=>window.setTimeout(t,1e3)),E(F.filter(t=>t.label.toUpperCase().includes(g.toUpperCase())||t.value.toUpperCase().includes(g.toUpperCase()))),v(!1)},[]);return e.jsx(T,{children:e.jsx(u,{...r,isFetching:U,onChangeValue:c,options:O,promiseOptions:k,setIsFetching:v,value:p})})}const Z={title:"Filters/SelectTagFilter",component:u,tags:["autodocs"],args:{onChangeValue:()=>{},options:F,placeholder:"Search...",text:{input:"Enter at least 3 letters to search",noData:"No Data"},value:[]}},o={render:r=>e.jsx(s,{...r})},i={args:{value:["taipei"]},render:r=>e.jsx(s,{...r})},n={args:{options:[]},render:r=>e.jsx(s,{...r})},l={args:{options:[]},render:r=>e.jsx(N,{...r})},d={render:r=>e.jsxs("div",{style:{display:"grid",gap:24},children:[e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"Default"}),e.jsx(s,{...r})]}),e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"With Value"}),e.jsx(s,{...r,value:["taipei"]})]}),e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"No Data"}),e.jsx(s,{...r,options:[]})]}),e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"With Async"}),e.jsx(N,{...r,options:[]})]})]})};var m,y,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <ControlledPreview {...args} />
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var x,j,S;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value: ["taipei"]
  },
  render: args => <ControlledPreview {...args} />
}`,...(S=(j=i.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var f,w,C;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    options: []
  },
  render: args => <ControlledPreview {...args} />
}`,...(C=(w=n.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var b,P,D;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    options: []
  },
  render: args => <AsyncPreview {...args} />
}`,...(D=(P=l.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var V,W,A;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
        <div>With Value</div>
        <ControlledPreview {...args} value={["taipei"]} />
      </div>
      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>No Data</div>
        <ControlledPreview {...args} options={[]} />
      </div>
      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>With Async</div>
        <AsyncPreview {...args} options={[]} />
      </div>
    </div>
}`,...(A=(W=d.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};const $=["Default","WithValue","NoData","WithAsync","Summary"];export{o as Default,n as NoData,d as Summary,l as WithAsync,i as WithValue,$ as __namedExportsOrder,Z as default};
