import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-C7k4LvGd.js";import{B as z}from"./Button-CRJgnCCT.js";import{C as m}from"./CheckboxFilter-CxvSnTMt.js";import"./cx-2dOUpm6k.js";import"./Checkbox-Bk-8IysC.js";import"./check-DIQmgjSX.js";import"./createLucideIcon-e0PjoWs3.js";import"./SearchBar-BBekaNBv.js";import"./Input-CFBDID0e.js";import"./fieldMessages-B9-hGdj0.js";import"./textValue-C1yidy5v.js";import"./Field-DTqFT2up.js";import"./x-nFuAMi5B.js";import"./search-7DMAlEQT.js";import"./Spinner-ByXhr7nR.js";const V=[{label:"Air",value:"air"},{label:"Ocean",value:"ocean"},{label:"Rail",value:"rail"},{label:"Pending",value:"pending"},{label:"Booked",value:"booked"},{label:"Cancelled",value:"cancelled"}],E=[{label:"Air",value:"air",group:"Shipping mode"},{label:"Ocean",value:"ocean",group:"Shipping mode"},{label:"Rail",value:"rail",group:"Shipping mode"},{label:"Pending",value:"pending",group:"Status"},{label:"Booked",value:"booked",group:"Status"},{label:"Cancelled",value:"cancelled",group:"Status"}];function a(r){const[u,g]=s.useState(r.value??[]),[v,o]=s.useState(!!r.isFetching);return e.jsx("div",{style:{width:320,border:"1px solid var(--oec-color-outline-variant)",borderRadius:"var(--oec-radius-sm)",overflow:"hidden",background:"var(--oec-color-surface)"},children:e.jsx(m,{...r,isFetching:v,onChangeValue:g,setIsFetching:o,value:u})})}function H(r){const[u,g]=s.useState(r.value??[]),[v,o]=s.useState(!1),[I,_]=s.useState([]),T=s.useCallback(async()=>{o(!0),await new Promise(q=>window.setTimeout(q,1e3)),_(V),o(!1)},[]);return e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(z,{onClick:()=>void T(),children:"Load options"}),e.jsx("div",{style:{width:320,border:"1px solid var(--oec-color-outline-variant)",borderRadius:"var(--oec-radius-sm)",overflow:"hidden",background:"var(--oec-color-surface)"},children:e.jsx(m,{...r,isFetching:v,onChangeValue:g,options:I,setIsFetching:o,value:u})})]})}const te={title:"Filters/CheckboxFilter",component:m,tags:["autodocs"],args:{options:V,placeholder:"Search ...",value:[]}},i={render:r=>e.jsx(a,{...r})},n={args:{defaultDisabled:["rail","cancelled"],value:["air"]},render:r=>e.jsx(a,{...r})},t={args:{options:E},render:r=>e.jsx(a,{...r})},d={args:{isFetching:!0},render:r=>e.jsx(a,{...r})},l={render:r=>e.jsx(H,{...r})},c={args:{options:[],text:{noData:"No Data"}},render:r=>e.jsx(a,{...r})},p={render:r=>e.jsxs("div",{style:{display:"grid",gap:24},children:[e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"Default"}),e.jsx(a,{...r})]}),e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"With Group"}),e.jsx(a,{...r,options:E})]}),e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"Disabled"}),e.jsx(a,{...r,defaultDisabled:["rail","cancelled"],value:["booked"]})]}),e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"No Data"}),e.jsx(a,{...r,options:[],text:{noData:"No Data"}})]}),e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"Loading"}),e.jsx(a,{...r,isFetching:!0})]})]})};var h,x,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <ControlledPreview {...args} />
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var b,j,D;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    defaultDisabled: ["rail", "cancelled"],
    value: ["air"]
  },
  render: args => <ControlledPreview {...args} />
}`,...(D=(j=n.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var f,w,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    options: groupedOptions
  },
  render: args => <ControlledPreview {...args} />
}`,...(S=(w=t.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var C,P,k;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isFetching: true
  },
  render: args => <ControlledPreview {...args} />
}`,...(k=(P=d.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var F,O,N;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <AsyncPreview {...args} />
}`,...(N=(O=l.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var W,A,B;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    options: [],
    text: {
      noData: "No Data"
    }
  },
  render: args => <ControlledPreview {...args} />
}`,...(B=(A=c.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var L,R,G;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
        <div>With Group</div>
        <ControlledPreview {...args} options={groupedOptions} />
      </div>
      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>Disabled</div>
        <ControlledPreview {...args} defaultDisabled={["rail", "cancelled"]} value={["booked"]} />
      </div>
      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>No Data</div>
        <ControlledPreview {...args} options={[]} text={{
        noData: "No Data"
      }} />
      </div>
      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>Loading</div>
        <ControlledPreview {...args} isFetching />
      </div>
    </div>
}`,...(G=(R=p.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};const de=["Default","WithDisabledOptions","WithGroup","Loading","WithAsync","NoData","Summary"];export{i as Default,d as Loading,c as NoData,p as Summary,l as WithAsync,n as WithDisabledOptions,t as WithGroup,de as __namedExportsOrder,te as default};
