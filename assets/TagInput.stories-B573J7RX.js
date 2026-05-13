import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-C7k4LvGd.js";import{T as E}from"./TagInput-CSmXTIO7.js";import"./cx-2dOUpm6k.js";import"./fieldMessages-B9-hGdj0.js";import"./Field-DTqFT2up.js";import"./Tag-5HF3mQqu.js";import"./x-nFuAMi5B.js";import"./createLucideIcon-e0PjoWs3.js";import"./toastStore-91DSA9z6.js";import"./search-7DMAlEQT.js";function a(e){const[V,k]=c.useState(e.values??[]),[H,K]=c.useState(e.inputValue??"");return r.jsx("div",{style:{width:360},children:r.jsx(E,{...e,inputValue:H,onChange:k,onInputValueChange:K,values:V})})}const G={title:"Forms/TagInput",component:E,tags:["autodocs"],args:{values:[],placeholder:"Search...",separator:[";",`
`,"\r"],isFixedHeight:!1,isSearchIcon:!1,autoEnter:!1,canCopyValue:!0,disabled:!1},argTypes:{values:{control:!1},inputValue:{control:!1},onChange:{control:!1},onInputValueChange:{control:!1},separator:{control:!1},disableAutoEnterFn:{control:!1},controlProps:{control:!1},text:{control:!1},isFixedHeight:{control:"boolean"},isSearchIcon:{control:"boolean"},autoEnter:{control:"boolean"},canCopyValue:{control:"boolean"},disabledAutoFocus:{control:"boolean"},touched:{control:"boolean"},state:{control:"inline-radio",options:["default","invalid","success"]}}},o={render:e=>r.jsx(a,{...e})},s={args:{label:"Keywords",bottomMessage:"Press ;, Enter, Tab, or paste a list to create tags."},render:e=>r.jsx(a,{...e})},t={args:{isFixedHeight:!0,isSearchIcon:!0,autoEnter:!0,placeholder:"Search...",values:["Taipei","Tokyo","Seoul"]},render:e=>r.jsx(a,{...e})},n={args:{isFixedHeight:!0,label:"Keywords",placeholder:"Add keyword",values:["Taipei","Tokyo","Seoul","Singapore","Sydney"]},render:e=>r.jsx(a,{...e})},l={args:{label:"Keywords",error:!0,touched:!0,errorMessage:"Add at least one tag before continuing."},render:e=>r.jsx(a,{...e})},d={args:{label:"Keywords",disabled:!0,values:["Locked","Read only"]},render:e=>r.jsx(a,{...e})};var u,i,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <ControlledTagInput {...args} />
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var g,m,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Keywords",
    bottomMessage: "Press ;, Enter, Tab, or paste a list to create tags."
  },
  render: args => <ControlledTagInput {...args} />
}`,...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var b,y,S;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isFixedHeight: true,
    isSearchIcon: true,
    autoEnter: true,
    placeholder: "Search...",
    values: ["Taipei", "Tokyo", "Seoul"]
  },
  render: args => <ControlledTagInput {...args} />
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var f,x,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isFixedHeight: true,
    label: "Keywords",
    placeholder: "Add keyword",
    values: ["Taipei", "Tokyo", "Seoul", "Singapore", "Sydney"]
  },
  render: args => <ControlledTagInput {...args} />
}`,...(T=(x=n.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var I,v,C;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: "Keywords",
    error: true,
    touched: true,
    errorMessage: "Add at least one tag before continuing."
  },
  render: args => <ControlledTagInput {...args} />
}`,...(C=(v=l.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var w,F,j;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Keywords",
    disabled: true,
    values: ["Locked", "Read only"]
  },
  render: args => <ControlledTagInput {...args} />
}`,...(j=(F=d.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};const J=["Playground","Default","SearchBar","FixedHeight","Invalid","Disabled"];export{s as Default,d as Disabled,n as FixedHeight,l as Invalid,o as Playground,t as SearchBar,J as __namedExportsOrder,G as default};
