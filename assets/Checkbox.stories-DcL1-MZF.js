import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{C as a}from"./Checkbox-Bk-8IysC.js";import"./index-C7k4LvGd.js";import"./cx-2dOUpm6k.js";import"./check-DIQmgjSX.js";import"./createLucideIcon-e0PjoWs3.js";const U={title:"Forms/Checkbox",component:a,tags:["autodocs"],args:{label:"Email me updates",description:"Receive product announcements and release notes.",labelPosition:"end",inMenu:!1},argTypes:{labelPosition:{control:"inline-radio",options:["start","end"]},inMenu:{control:"boolean"}}},r={},t={args:{defaultChecked:!0}},s={args:{disabled:!0}},d={args:{indeterminate:!0,label:"Partially selected",description:"Intermediate state for nested selections."}},n={args:{labelPosition:"start",label:"Label on the start side"}},l={args:{inMenu:!0,defaultChecked:!0,label:"Menu row (checked uses primary label)"}},o={render:()=>e.jsxs("div",{style:{display:"grid",gap:16},children:[e.jsx(a,{label:"Default",description:"Unchecked resting state."}),e.jsx(a,{defaultChecked:!0,label:"Checked"}),e.jsx(a,{checked:!0,indeterminate:!0,label:"Checked indeterminate"}),e.jsx(a,{label:"Focus visible","data-focused":"true"}),e.jsx(a,{disabled:!0,label:"Disabled"}),e.jsx(a,{disabled:!0,defaultChecked:!0,label:"Disabled checked"}),e.jsx(a,{disabled:!0,defaultChecked:!0,indeterminate:!0,label:"Disabled indeterminate"}),e.jsx("div",{style:{display:"flex",width:150,gap:16,border:"1px solid var(--oec-color-border-strong)"},children:e.jsx(a,{disabled:!0,defaultChecked:!0,indeterminate:!0,label:"Disabled indeterminate"})})]})};var i,c,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var b,m,p;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,k,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(g=(k=s.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var C,x,f;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    label: "Partially selected",
    description: "Intermediate state for nested selections."
  }
}`,...(f=(x=d.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,D,j;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    labelPosition: "start",
    label: "Label on the start side"
  }
}`,...(j=(D=n.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var v,S,M;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    inMenu: true,
    defaultChecked: true,
    label: "Menu row (checked uses primary label)"
  }
}`,...(M=(S=l.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var I,P,w;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 16
  }}>
      <Checkbox label="Default" description="Unchecked resting state." />
      <Checkbox defaultChecked label="Checked" />
      <Checkbox checked={true} indeterminate label="Checked indeterminate" />
      <Checkbox label="Focus visible" data-focused="true" />
      <Checkbox disabled label="Disabled" />
      <Checkbox disabled defaultChecked label="Disabled checked" />
      <Checkbox disabled defaultChecked indeterminate label="Disabled indeterminate" />

      <div style={{
      display: "flex",
      width: 150,
      gap: 16,
      border: "1px solid var(--oec-color-border-strong)"
    }}>
        <Checkbox disabled defaultChecked indeterminate label="Disabled indeterminate" />
      </div>
    </div>
}`,...(w=(P=o.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};const _=["Default","Checked","Disabled","Indeterminate","LabelAtStart","InMenu","StateGallery"];export{t as Checked,r as Default,s as Disabled,l as InMenu,d as Indeterminate,n as LabelAtStart,o as StateGallery,_ as __namedExportsOrder,U as default};
