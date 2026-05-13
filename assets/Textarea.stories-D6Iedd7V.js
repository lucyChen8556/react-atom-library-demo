import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as b}from"./index-C7k4LvGd.js";import{c as C}from"./cx-2dOUpm6k.js";import{b as Pe,r as Ve}from"./fieldMessages-B9-hGdj0.js";import{g as Re}from"./textValue-C1yidy5v.js";import{F as t}from"./Field-DTqFT2up.js";function H(r){r.style.height="auto",r.style.height=`${r.scrollHeight}px`}function I({autoResize:r=!0,bottomMessage:T,classes:e,className:w,description:L,disabled:P,error:he,errorMessage:xe,id:ve,label:j,limitLength:ye=!1,maxLength:n,message:be,onBlur:S,onChange:M,readOnly:V,required:Te,rows:we=1,showCount:Le=!1,state:R="default",style:D,textareaSize:je="xs",value:N,resize:Se="none",...O}){const Me=b.useId(),o=ve??Me,u=b.useRef(null),W=L?`${o}-description`:void 0,l=Re(N??O.defaultValue),Ne=typeof n=="number"&&l>n,i=he??(R==="invalid"||Ne)?"invalid":R==="success"?"success":"default",{resolvedMessage:z,visibleBottomMessage:E}=Ve({bottomMessage:T,errorMessage:xe,message:be,state:i}),_=E?`${o}-bottom-message`:void 0,$=z?`${o}-message`:void 0,qe=Pe(W,_,$),F=Le&&typeof n=="number",q=ye&&typeof n=="number"?n+1:void 0;b.useEffect(()=>{if(!(!r||!u.current)){if(l===0){u.current.style.height="";return}H(u.current)}},[r,l,N]);const Ce=d=>{typeof q=="number"&&d.currentTarget.value.length>q||(r&&H(d.currentTarget),M==null||M(d))},Ie=d=>{S==null||S(d)};return a.jsx("div",{className:C("oec-reset","oec-textarea-field",e==null?void 0:e.root,w),style:D,children:a.jsxs(t,{children:[(j||F)&&a.jsxs(t.Header,{children:[j?a.jsx(t.Label,{className:e==null?void 0:e.label,htmlFor:o,required:Te,children:j}):a.jsx(t.Spacer,{}),F?a.jsxs(t.Count,{className:e==null?void 0:e.count,children:[l,"/",n]}):null]}),L?a.jsx(t.Description,{className:e==null?void 0:e.description,id:W,children:L}):null,a.jsx("div",{className:C("oec-textarea",`oec-textarea--${je}`,i!=="default"&&`oec-textarea--${i}`,P&&"oec-textarea--disabled",V&&"oec-textarea--readonly",e==null?void 0:e.control),children:a.jsx("textarea",{...O,"aria-describedby":qe,"aria-invalid":i==="invalid"?!0:void 0,className:C("oec-textarea__input",e==null?void 0:e.textarea),disabled:P,id:o,maxLength:q,onBlur:Ie,onChange:Ce,readOnly:V,ref:u,rows:we,value:N,style:{...D,resize:Se}})}),a.jsx(t.Messages,{bottomMessageClassName:e==null?void 0:e.bottomMessage,bottomMessageId:_,messageClassName:e==null?void 0:e.message,messageId:$,resolvedMessage:z,state:i,visibleBottomMessage:E})]})})}I.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{bottomMessage:{required:!1,tsType:{name:"ReactNode"},description:""},classes:{required:!1,tsType:{name:"TextareaClasses"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},errorMessage:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},message:{required:!1,tsType:{name:"ReactNode"},description:""},state:{required:!1,tsType:{name:"union",raw:'"default" | "invalid" | "success"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"invalid"'},{name:"literal",value:'"success"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},autoResize:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},limitLength:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showCount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},textareaSize:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:"",defaultValue:{value:'"xs"',computed:!1}},resize:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal" | "none"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'},{name:"literal",value:'"none"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},rows:{defaultValue:{value:"1",computed:!1},required:!1}},composes:["Omit"]};function s(r){const[T,e]=b.useState(typeof r.value=="string"?r.value:"");return a.jsx("div",{style:{width:360},children:a.jsx(I,{...r,value:T,onChange:w=>e(w.target.value)})})}const Fe={title:"Forms/Textarea",component:I,tags:["autodocs"],args:{label:"Notes",placeholder:"Write your notes here...",bottomMessage:"Supports multi-line input and auto-resize.",textareaSize:"xs",rows:1}},c={render:r=>a.jsx(s,{...r})},m={args:{description:"Helpful context is shown above the field.",rows:3},render:r=>a.jsx(s,{...r})},p={args:{error:!0,errorMessage:"Please add a longer explanation."},render:r=>a.jsx(s,{...r})},g={args:{state:"success",message:"Looks good."},render:r=>a.jsx(s,{...r})},f={args:{disabled:!0,value:"This field is disabled."}},h={args:{readOnly:!0,value:"This field is read only."}},x={args:{maxLength:120,showCount:!0},render:r=>a.jsx(s,{...r})},v={args:{maxLength:20,showCount:!0,value:"This content is longer than twenty characters."},render:r=>a.jsx(s,{...r})},y={args:{bottomMessage:"When limitLength is enabled, input is capped at maxLength + 1.",limitLength:!0,maxLength:20,showCount:!0},render:r=>a.jsx(s,{...r})};var k,B,A;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <Playground {...args} />
}`,...(A=(B=c.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var G,J,K;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    description: "Helpful context is shown above the field.",
    rows: 3
  },
  render: args => <Playground {...args} />
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    error: true,
    errorMessage: "Please add a longer explanation."
  },
  render: args => <Playground {...args} />
}`,...(X=(U=p.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    state: "success",
    message: "Looks good."
  },
  render: args => <Playground {...args} />
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,te;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: "This field is disabled."
  }
}`,...(te=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,ne,oe;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    value: "This field is read only."
  }
}`,...(oe=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ie,de,ue;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    maxLength: 120,
    showCount: true
  },
  render: args => <Playground {...args} />
}`,...(ue=(de=x.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var le,ce,me;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    maxLength: 20,
    showCount: true,
    value: "This content is longer than twenty characters."
  },
  render: args => <Playground {...args} />
}`,...(me=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var pe,ge,fe;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    bottomMessage: "When limitLength is enabled, input is capped at maxLength + 1.",
    limitLength: true,
    maxLength: 20,
    showCount: true
  },
  render: args => <Playground {...args} />
}`,...(fe=(ge=y.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};const He=["Default","WithDescription","Invalid","Success","Disabled","ReadOnly","WithCount","OverMaxLengthShowsError","LimitLength"];export{c as Default,f as Disabled,p as Invalid,y as LimitLength,v as OverMaxLengthShowsError,h as ReadOnly,g as Success,x as WithCount,m as WithDescription,He as __namedExportsOrder,Fe as default};
