import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{c as r}from"./cx-2dOUpm6k.js";function t({classes:e,className:y,disabled:l,label:n,...s}){return a.jsxs("label",{className:r("oec-reset","oec-switch",l&&"oec-switch--disabled",e==null?void 0:e.root,y),children:[a.jsx("input",{...s,checked:s.checked,className:r("oec-switch__input",e==null?void 0:e.input),disabled:l,type:"checkbox"}),a.jsx("span",{className:r("oec-switch__control",e==null?void 0:e.control)}),n?a.jsx("span",{className:r("oec-switch__label",e==null?void 0:e.label),children:n}):null]})}t.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{classes:{required:!1,tsType:{name:"SwitchClasses"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};const k={title:"Atoms/Switch",component:t,tags:["autodocs"],args:{label:"Enable notifications"}},d={},o={args:{defaultChecked:!0}},c={args:{disabled:!0}},i={render:()=>a.jsxs("div",{style:{display:"grid",gap:16},children:[a.jsx(t,{label:"Default"}),a.jsx(t,{label:"Hovered","data-hovered":"true"}),a.jsx(t,{label:"Focused","data-focused":"true"}),a.jsx(t,{label:"Active","data-active":"true"}),a.jsx(t,{label:"On","data-checked":"true"}),a.jsx(t,{label:"Disabled",disabled:!0}),a.jsx(t,{label:"Disabled on",disabled:!0,defaultChecked:!0})]})};var u,p,m;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(m=(p=d.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,h,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,S,w;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(w=(S=c.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var g,j,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 16
  }}>
      <Switch label="Default" />
      <Switch label="Hovered" data-hovered="true" />
      <Switch label="Focused" data-focused="true" />
      <Switch label="Active" data-active="true" />
      <Switch label="On" data-checked="true" />
      <Switch label="Disabled" disabled />
      <Switch label="Disabled on" disabled defaultChecked />
    </div>
}`,...(v=(j=i.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const N=["Default","On","Disabled","StateGallery"];export{d as Default,c as Disabled,o as On,i as StateGallery,N as __namedExportsOrder,k as default};
