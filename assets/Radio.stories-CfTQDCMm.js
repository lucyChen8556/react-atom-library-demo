import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{c as a}from"./cx-2dOUpm6k.js";import{r as m}from"./index-C7k4LvGd.js";import{A as Re}from"./AlertMessage-BAWHBFe8.js";import{B as we}from"./Button-CRJgnCCT.js";import{b as qe,r as Ne}from"./fieldMessages-B9-hGdj0.js";import{F as p}from"./Field-DTqFT2up.js";import{I as Se}from"./info-oI3AJd1-.js";import{C as _e}from"./circle-question-mark-5mlb1FzF.js";import"./x-nFuAMi5B.js";import"./createLucideIcon-e0PjoWs3.js";import"./circle-x-DFQSOCAc.js";import"./circle-alert-C05QPBuZ.js";function s({classes:o,className:R,description:e,disabled:l,label:i,...d}){return r.jsxs("label",{className:a("oec-reset","oec-radio",l&&"oec-radio--disabled",R,o==null?void 0:o.root),children:[r.jsx("input",{...d,className:a("oec-radio__input",o==null?void 0:o.input),disabled:l,type:"radio"}),r.jsx("span",{className:a("oec-radio__indicator",o==null?void 0:o.indicator),children:r.jsx("span",{className:a("oec-radio__icon",o==null?void 0:o.icon)})}),(i||e)&&r.jsxs("span",{className:a("oec-radio__body",o==null?void 0:o.body),children:[i?r.jsx("span",{className:a("oec-radio__label",o==null?void 0:o.label),children:i}):null,e?r.jsx("span",{className:a("oec-radio__description",o==null?void 0:o.description),children:e}):null]})]})}s.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{classes:{required:!1,tsType:{name:"RadioClasses"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};function I({bottomMessage:o,children:R,classes:e,className:l,defaultValue:i,description:d,disabled:T=!1,error:ie=!1,errorMessage:w,hasInfoIcon:de=!1,label:q,labelIcon:C,message:se,name:le,onLabelClick:me,onValueChange:N,options:S,orientation:pe="column",required:ce=!1,state:ue,value:_,...ge}){const fe=m.useId(),M=m.useId(),k=m.useId(),[be,he]=m.useState((i==null?void 0:i.toString())??""),t=ue??(ie?"invalid":"default"),{resolvedMessage:j,visibleBottomMessage:ye}=Ne({bottomMessage:o,errorMessage:w,message:se,state:t}),ve=_!=null?_.toString():be.toString(),xe=n=>{_==null&&he(n),N==null||N(n)};return r.jsxs(p,{className:a("oec-radio-group-field",l,e==null?void 0:e.root),children:[(q||d||t==="invalid")&&r.jsxs("div",{className:a("oec-radio-group__header",e==null?void 0:e.header),children:[q?r.jsxs("div",{className:"oec-radio-group__label-row",children:[r.jsx(p.Label,{className:a("oec-radio-group__label",e==null?void 0:e.label),required:ce,children:q}),C?r.jsx("span",{className:a("oec-radio-group__label-icon",e==null?void 0:e.labelIcon),children:C}):null,de?r.jsx(we,{"aria-label":"More information",buttonClassName:a("oec-radio-group__label-icon-button",e==null?void 0:e.labelIcon),onClick:me,type:"icon",variant:"ghost",children:r.jsx(Se,{size:16,strokeWidth:2})}):null]}):null,d?r.jsx(p.Description,{className:e==null?void 0:e.description,id:M,children:d}):null,t==="invalid"&&w?r.jsx(Re,{className:"oec-radio-group__alert",header:w,intent:"error"}):null]}),r.jsx("div",{...ge,"aria-describedby":qe(d?M:void 0,j&&t!=="invalid"?k:void 0),"aria-invalid":t==="invalid"||void 0,className:a("oec-radio-group",pe==="row"&&"oec-radio-group--row",T&&"oec-radio-group--disabled",e==null?void 0:e.group),role:"radiogroup",children:(S==null?void 0:S.map(n=>r.jsx(s,{checked:ve===n.value.toString(),classes:e==null?void 0:e.radio,description:n.description,disabled:T||n.disabled,label:n.label,name:le??fe,onChange:()=>xe(n.value.toString()),value:n.value},n.value)))??R}),r.jsx(p.Messages,{bottomMessageClassName:e==null?void 0:e.bottomMessage,messageClassName:e==null?void 0:e.message,messageId:j&&t!=="invalid"?k:void 0,resolvedMessage:t==="invalid"?void 0:j,state:t,visibleBottomMessage:ye})]})}I.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{bottomMessage:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},classes:{required:!1,tsType:{name:"RadioGroupClasses"},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"ReactNode"},description:""},hasInfoIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:""},labelIcon:{required:!1,tsType:{name:"ReactNode"},description:""},message:{required:!1,tsType:{name:"ReactNode"},description:""},name:{required:!1,tsType:{name:"string"},description:""},onLabelClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"RadioOption"}],raw:"RadioOption[]"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"column" | "row"',elements:[{name:"literal",value:'"column"'},{name:"literal",value:'"row"'}]},description:"",defaultValue:{value:'"column"',computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "invalid" | "success"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"invalid"'},{name:"literal",value:'"success"'}]},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""}},composes:["Omit"]};const We={title:"Forms/Radio",component:I,tags:["autodocs"],args:{label:"Delivery method",description:"Choose one option",options:[{label:"Standard",value:"standard"},{label:"Express",value:"express"},{label:"Same day",value:"same-day"}],defaultValue:"standard",orientation:"column"},argTypes:{label:{control:"text"},description:{control:"text"},orientation:{control:"inline-radio",options:["column","row"]}}},c={},u={args:{orientation:"row"},parameters:{docs:{description:{story:"Displays radio options horizontally."}}}},g={args:{disabled:!0},parameters:{docs:{description:{story:"Shows the disabled state for the entire radio group."}}}},f={args:{error:!0,errorMessage:"Please select one option."},parameters:{docs:{description:{story:"Uses `AlertMessage` for the invalid state, matching the sample behavior."}}}},b={args:{required:!0},parameters:{docs:{description:{story:"Marks the group label as required."}}}},h={args:{labelIcon:r.jsx(_e,{size:16,strokeWidth:2})},parameters:{docs:{description:{story:"Adds a custom icon next to the group label."}}}},y={args:{hasInfoIcon:!0,onLabelClick:()=>{window.alert("Info clicked")}},parameters:{docs:{description:{story:"Shows the optional info action button in the label row."}}}},v={render:()=>r.jsxs(I,{label:"Delivery method",children:[r.jsx(s,{label:"Standard",name:"custom-radio",value:"standard"}),r.jsx(s,{label:"Express",name:"custom-radio",value:"express"}),r.jsx(s,{description:"Delivered within the hour",label:"Same day",name:"custom-radio",value:"same-day"})]}),parameters:{docs:{description:{story:"Demonstrates composing the group with custom `Radio` children instead of `options`."}}}},x={render:()=>r.jsx(s,{label:"Standalone radio",name:"single",value:"single"}),parameters:{docs:{description:{story:"Renders a single standalone radio control."}}}};var D,A,E;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var L,z,G;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    orientation: "row"
  },
  parameters: {
    docs: {
      description: {
        story: "Displays radio options horizontally."
      }
    }
  }
}`,...(G=(z=u.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var O,W,B;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the disabled state for the entire radio group."
      }
    }
  }
}`,...(B=(W=g.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var F,P,U;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    error: true,
    errorMessage: "Please select one option."
  },
  parameters: {
    docs: {
      description: {
        story: "Uses \`AlertMessage\` for the invalid state, matching the sample behavior."
      }
    }
  }
}`,...(U=(P=f.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var V,H,Q;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    required: true
  },
  parameters: {
    docs: {
      description: {
        story: "Marks the group label as required."
      }
    }
  }
}`,...(Q=(H=b.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var J,K,X;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    labelIcon: <CircleHelp size={16} strokeWidth={2} />
  },
  parameters: {
    docs: {
      description: {
        story: "Adds a custom icon next to the group label."
      }
    }
  }
}`,...(X=(K=h.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,Z,$;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    hasInfoIcon: true,
    onLabelClick: () => {
      window.alert("Info clicked");
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the optional info action button in the label row."
      }
    }
  }
}`,...($=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,oe;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <RadioGroup label="Delivery method">
      <Radio label="Standard" name="custom-radio" value="standard" />
      <Radio label="Express" name="custom-radio" value="express" />
      <Radio description="Delivered within the hour" label="Same day" name="custom-radio" value="same-day" />
    </RadioGroup>,
  parameters: {
    docs: {
      description: {
        story: "Demonstrates composing the group with custom \`Radio\` children instead of \`options\`."
      }
    }
  }
}`,...(oe=(re=v.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ae,ne,te;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <Radio label="Standalone radio" name="single" value="single" />,
  parameters: {
    docs: {
      description: {
        story: "Renders a single standalone radio control."
      }
    }
  }
}`,...(te=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const Be=["Playground","Row","Disabled","Error","Required","LabelWithIcon","InfoAction","CustomChildren","SingleRadio"];export{v as CustomChildren,g as Disabled,f as Error,y as InfoAction,h as LabelWithIcon,c as Playground,b as Required,u as Row,x as SingleRadio,Be as __namedExportsOrder,We as default};
