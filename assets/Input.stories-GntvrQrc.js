import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as V}from"./index-C7k4LvGd.js";import{I as a}from"./Input-CFBDID0e.js";import"./cx-2dOUpm6k.js";import"./fieldMessages-B9-hGdj0.js";import"./textValue-C1yidy5v.js";import"./Field-DTqFT2up.js";function ye(t){const[r,s]=V.useState(String(t.value??t.defaultValue??""));return V.useEffect(()=>{s(String(t.value??t.defaultValue??""))},[t.defaultValue,t.value]),e.jsx("div",{style:{width:320,display:"grid",gap:"var(--oec-space-3)"},children:e.jsx(a,{...t,value:r,onChange:S=>{s(S.target.value)}})})}function he(t){const[r,s]=V.useState("");return e.jsxs("div",{style:{width:320,display:"grid",gap:"var(--oec-space-3)"},children:[e.jsx(a,{...t,value:r,onChange:S=>{s(S.target.value)},placeholder:"Type something..."}),e.jsxs("div",{style:{fontFamily:"var(--oec-font-sans)",fontSize:"var(--oec-font-size-sm)",color:"var(--oec-color-outline)"},children:["Current value: ",r||"empty"]})]})}const je={title:"Forms/Input",component:a,tags:["autodocs"],args:{label:"Email address",placeholder:"name@example.com",description:"We will use this email for account notifications.",bottomMessage:"Use a work email so your teammates can recognize you.",type:"text",state:"default",error:!1,inputSize:"sm",disabled:!1,readOnly:!1,required:!1,showCount:!1,showNumberStepper:!1,maxLength:20,startAdornment:"",endAdornment:"",message:"",errorMessage:""},argTypes:{label:{control:"text"},placeholder:{control:"text"},description:{control:"text"},bottomMessage:{control:"text"},message:{control:"text"},errorMessage:{control:"text"},value:{control:"text"},defaultValue:{control:"text"},type:{control:"select",options:["text","email","number","password","search","url"]},error:{control:"boolean"},state:{control:"inline-radio",options:["default","invalid","success"]},inputSize:{control:"inline-radio",options:["sm","md"]},disabled:{control:"boolean"},readOnly:{control:"boolean"},required:{control:"boolean"},showCount:{control:"boolean"},showNumberStepper:{control:"boolean"},maxLength:{control:"number"},startAdornment:{control:"text"},endAdornment:{control:"text"},classes:{control:"object"},className:{control:"text"},id:{control:"text"},autoComplete:{control:"text"},name:{control:"text"},inputMode:{control:"select",options:[void 0,"text","search","email","tel","url","numeric","decimal"]},pattern:{control:"text"},onChange:{action:"change"},onBlur:{action:"blur"},onKeyDown:{action:"keydown"},style:{control:"object"}}},o={args:{value:""},render:t=>e.jsx(ye,{...t})},l={args:{value:void 0,defaultValue:void 0}},n={args:{defaultValue:"lucy@example.com"}},d={args:{disabled:!0,defaultValue:"Disabled field",bottomMessage:"This field is locked."}},u={render:t=>e.jsx(he,{...t})},i={args:{error:!0,defaultValue:"wrong@email",errorMessage:"Please enter a valid work email address."}},c={args:{state:"success",defaultValue:"lucy@oec.dev",message:"Email looks good."}},p={args:{readOnly:!0,defaultValue:"readonly@oec.dev",bottomMessage:"Read-only fields can be selected but not edited."}},m={args:{label:"Workspace URL",startAdornment:"https://",endAdornment:".oec.dev",placeholder:"team-name"}},b={args:{type:"email",label:"Contact email",placeholder:"type and blur to validate",errorMessage:"Please enter a valid email address for this field."}},g={args:{type:"number",label:"Budget",placeholder:"12345",description:"Supports scientific notation like 1e3. Number stepper stays hidden by default."}},f={args:{type:"number",label:"Quantity",defaultValue:"3",showNumberStepper:!0,bottomMessage:"Native up/down controls are optional."}},y={args:{label:"Styled input",bottomMessage:"This example uses slot-level classes.",classes:{root:"sb-input-root",label:"sb-input-label",control:"sb-input-control",input:"sb-input-element",bottomMessage:"sb-input-bottom",message:"sb-input-message"}},parameters:{docs:{description:{story:"Use the classes prop to target root, label, control, input, adornments, bottom message, and validation message independently."}}}},h={args:{type:"text",label:"Project name",defaultValue:"Reacton",maxLength:20,showCount:!0,bottomMessage:"Keep it short and memorable."}},v={args:{inputSize:"sm",label:"Small input",placeholder:"Compact control"}},x={render:()=>e.jsxs("div",{style:{display:"grid",gap:12,width:320},children:[e.jsx(a,{label:"Default",placeholder:"Default"}),e.jsx(a,{label:"Hover","data-hovered":"true",placeholder:"Hover"}),e.jsx(a,{label:"Focus","data-focused":"true",placeholder:"Focus"}),e.jsx(a,{label:"Invalid",error:!0,defaultValue:"Invalid state",errorMessage:"Enter a valid value."}),e.jsx(a,{label:"Success",state:"success",defaultValue:"Success state",message:"Everything looks good."}),e.jsx(a,{label:"Disabled",disabled:!0,defaultValue:"Disabled state"}),e.jsx(a,{label:"Read only",readOnly:!0,defaultValue:"Read only state"}),e.jsx(a,{label:"Required",required:!0,placeholder:"Required field"}),e.jsx(a,{label:"Email validation",type:"email",defaultValue:"wrong@email",bottomMessage:"Blur to trigger built-in validation."}),e.jsx(a,{label:"Number validation",type:"number",defaultValue:"1e3",bottomMessage:"Scientific notation is allowed."}),e.jsx(a,{label:"Number with stepper",type:"number",showNumberStepper:!0,defaultValue:"2",bottomMessage:"Optional native stepper enabled."}),e.jsx(a,{label:"Empty",placeholder:"Empty state",value:"",readOnly:!0})]})};var w,I,M;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    value: ""
  },
  render: args => <InputPlayground {...args} />
}`,...(M=(I=o.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var j,C,E;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    value: undefined,
    defaultValue: undefined
  }
}`,...(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var N,R,D;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    defaultValue: "lucy@example.com"
  }
}`,...(D=(R=n.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var k,O,P;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: "Disabled field",
    bottomMessage: "This field is locked."
  }
}`,...(P=(O=d.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var A,W,q;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <InteractiveInput {...args} />
}`,...(q=(W=u.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var z,F,L;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    error: true,
    defaultValue: "wrong@email",
    errorMessage: "Please enter a valid work email address."
  }
}`,...(L=(F=i.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var T,B,U;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    state: "success",
    defaultValue: "lucy@oec.dev",
    message: "Email looks good."
  }
}`,...(U=(B=c.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var H,K,G;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    defaultValue: "readonly@oec.dev",
    bottomMessage: "Read-only fields can be selected but not edited."
  }
}`,...(G=(K=p.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var Q,_,J;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: "Workspace URL",
    startAdornment: "https://",
    endAdornment: ".oec.dev",
    placeholder: "team-name"
  }
}`,...(J=(_=m.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    type: "email",
    label: "Contact email",
    placeholder: "type and blur to validate",
    errorMessage: "Please enter a valid email address for this field."
  }
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    type: "number",
    label: "Budget",
    placeholder: "12345",
    description: "Supports scientific notation like 1e3. Number stepper stays hidden by default."
  }
}`,...(ae=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,re,se;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    type: "number",
    label: "Quantity",
    defaultValue: "3",
    showNumberStepper: true,
    bottomMessage: "Native up/down controls are optional."
  }
}`,...(se=(re=f.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,le,ne;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    label: "Styled input",
    bottomMessage: "This example uses slot-level classes.",
    classes: {
      root: "sb-input-root",
      label: "sb-input-label",
      control: "sb-input-control",
      input: "sb-input-element",
      bottomMessage: "sb-input-bottom",
      message: "sb-input-message"
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Use the classes prop to target root, label, control, input, adornments, bottom message, and validation message independently."
      }
    }
  }
}`,...(ne=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var de,ue,ie;h.parameters={...h.parameters,docs:{...(de=h.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    type: "text",
    label: "Project name",
    defaultValue: "Reacton",
    maxLength: 20,
    showCount: true,
    bottomMessage: "Keep it short and memorable."
  }
}`,...(ie=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:ie.source}}};var ce,pe,me;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    inputSize: "sm",
    label: "Small input",
    placeholder: "Compact control"
  }
}`,...(me=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var be,ge,fe;x.parameters={...x.parameters,docs:{...(be=x.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 12,
    width: 320
  }}>
      <Input label="Default" placeholder="Default" />
      <Input label="Hover" data-hovered="true" placeholder="Hover" />
      <Input label="Focus" data-focused="true" placeholder="Focus" />
      <Input label="Invalid" error defaultValue="Invalid state" errorMessage="Enter a valid value." />
      <Input label="Success" state="success" defaultValue="Success state" message="Everything looks good." />
      <Input label="Disabled" disabled defaultValue="Disabled state" />
      <Input label="Read only" readOnly defaultValue="Read only state" />
      <Input label="Required" required placeholder="Required field" />
      <Input label="Email validation" type="email" defaultValue="wrong@email" bottomMessage="Blur to trigger built-in validation." />
      <Input label="Number validation" type="number" defaultValue="1e3" bottomMessage="Scientific notation is allowed." />
      <Input label="Number with stepper" type="number" showNumberStepper defaultValue="2" bottomMessage="Optional native stepper enabled." />
      <Input label="Empty" placeholder="Empty state" value="" readOnly />
    </div>
}`,...(fe=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};const Ce=["Playground","Default","Prefilled","Disabled","Interactive","Invalid","Success","ReadOnly","WithAdornments","EmailValidation","NumberValidation","NumberWithStepper","CustomClasses","WithCharacterCount","Small","StateGallery"];export{y as CustomClasses,l as Default,d as Disabled,b as EmailValidation,u as Interactive,i as Invalid,g as NumberValidation,f as NumberWithStepper,o as Playground,n as Prefilled,p as ReadOnly,v as Small,x as StateGallery,c as Success,m as WithAdornments,h as WithCharacterCount,Ce as __namedExportsOrder,je as default};
