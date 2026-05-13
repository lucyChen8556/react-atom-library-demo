import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{T as a}from"./Tag-5HF3mQqu.js";import"./index-C7k4LvGd.js";import"./cx-2dOUpm6k.js";import"./x-nFuAMi5B.js";import"./createLucideIcon-e0PjoWs3.js";const h={title:"Atoms/Tag",component:a,tags:["autodocs"],args:{children:"Reacton",variant:"filled",tone:"default",ellipsis:!1},argTypes:{variant:{control:"inline-radio",options:["filled","status","notify"]},tone:{control:"inline-radio",options:["default","success","danger","warning","info"]},ellipsis:{control:"boolean"},onRemove:{action:"remove"}}},n={},r={args:{children:"Closable tag",onRemove:()=>{}}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:12},children:[e.jsx(a,{children:"Default"}),e.jsx(a,{tone:"success",children:"Success"}),e.jsx(a,{tone:"danger",children:"Danger"}),e.jsx(a,{tone:"warning",children:"Warning"}),e.jsx(a,{tone:"info",children:"Info"}),e.jsx(a,{variant:"status",children:"Status"}),e.jsx(a,{variant:"notify",children:"Notify"}),e.jsx(a,{ellipsis:!0,style:{maxWidth:120},children:"Very long tag content for truncation"})]})};var t,s,i;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,c,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: "Closable tag",
    onRemove: () => undefined
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,p,m;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: 12
  }}>
      <Tag>Default</Tag>
      <Tag tone="success">Success</Tag>
      <Tag tone="danger">Danger</Tag>
      <Tag tone="warning">Warning</Tag>
      <Tag tone="info">Info</Tag>
      <Tag variant="status">Status</Tag>
      <Tag variant="notify">Notify</Tag>
      <Tag ellipsis style={{
      maxWidth: 120
    }}>
        Very long tag content for truncation
      </Tag>
    </div>
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const j=["Playground","Removable","Gallery"];export{o as Gallery,n as Playground,r as Removable,j as __namedExportsOrder,h as default};
