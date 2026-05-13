import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as k}from"./index-C7k4LvGd.js";import{N as A}from"./NumberInput-ws6Jubkf.js";import"./Input-CFBDID0e.js";import"./cx-2dOUpm6k.js";import"./fieldMessages-B9-hGdj0.js";import"./textValue-C1yidy5v.js";import"./Field-DTqFT2up.js";function a(r){const[F,M]=k.useState(r.value??"");return e.jsx("div",{style:{width:240},children:e.jsx(A,{...r,onChange:V=>M(V.target.value),value:F})})}const U={title:"Forms/NumberInput",component:A,tags:["autodocs"],args:{label:"Amount",placeholder:"no.",inputSize:"sm",allowDecimal:!0,decimalScale:void 0,disabled:!1,readOnly:!1,required:!1,error:!1,errorMessage:"Enter a valid number."}},s={render:r=>e.jsx(a,{...r})},l={render:r=>e.jsx(a,{...r})},n={args:{disabled:!0,value:"10"}},d={args:{readOnly:!0,value:"10"}},i={args:{error:!0,value:"abc"},render:r=>e.jsx(a,{...r})},o={args:{allowDecimal:!1,value:"10"},render:r=>e.jsx(a,{...r})},t={args:{decimalScale:2,value:"12.34"},render:r=>e.jsx(a,{...r})},c={render:r=>e.jsxs("div",{style:{display:"grid",gap:24},children:[e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"Default"}),e.jsx(a,{...r})]}),e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"Disabled"}),e.jsx(a,{...r,disabled:!0,value:"10"})]}),e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"Read Only"}),e.jsx(a,{...r,readOnly:!0,value:"10"})]}),e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"Invalid"}),e.jsx(a,{...r,error:!0,value:"abc"})]}),e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"Integer Only"}),e.jsx(a,{...r,allowDecimal:!1,value:"10"})]}),e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"Decimal Scale"}),e.jsx(a,{...r,decimalScale:2,value:"12.34"})]})]})};var v,u,p;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <ControlledPreview {...args} />
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,g,y;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <ControlledPreview {...args} />
}`,...(y=(g=l.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var x,j,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: "10"
  }
}`,...(S=(j=n.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var w,b,f;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    value: "10"
  }
}`,...(f=(b=d.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,D,O;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    error: true,
    value: "abc"
  },
  render: args => <ControlledPreview {...args} />
}`,...(O=(D=i.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var P,C,I;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    allowDecimal: false,
    value: "10"
  },
  render: args => <ControlledPreview {...args} />
}`,...(I=(C=o.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var R,E,N;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    decimalScale: 2,
    value: "12.34"
  },
  render: args => <ControlledPreview {...args} />
}`,...(N=(E=t.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var _,q,z;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
        <div>Disabled</div>
        <ControlledPreview {...args} disabled value="10" />
      </div>
      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>Read Only</div>
        <ControlledPreview {...args} readOnly value="10" />
      </div>
      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>Invalid</div>
        <ControlledPreview {...args} error value="abc" />
      </div>
      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>Integer Only</div>
        <ControlledPreview {...args} allowDecimal={false} value="10" />
      </div>
      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>Decimal Scale</div>
        <ControlledPreview {...args} decimalScale={2} value="12.34" />
      </div>
    </div>
}`,...(z=(q=c.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const W=["Playground","Default","Disabled","ReadOnly","Invalid","IntegerOnly","DecimalScale","Summary"];export{t as DecimalScale,l as Default,n as Disabled,o as IntegerOnly,i as Invalid,s as Playground,d as ReadOnly,c as Summary,W as __namedExportsOrder,U as default};
