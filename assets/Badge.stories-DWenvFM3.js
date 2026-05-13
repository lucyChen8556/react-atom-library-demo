import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as N}from"./cx-2dOUpm6k.js";function a({children:y,tone:B="neutral",className:S,style:w,...j}){return e.jsx("span",{className:N("oec-reset","oec-badge",`oec-badge--${B}`,S),style:w,...j,children:y})}a.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"neutral" | "success" | "warning"',elements:[{name:"literal",value:'"neutral"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'}]},description:"",defaultValue:{value:'"neutral"',computed:!1}}},composes:["HTMLAttributes"]};const b={title:"Atoms/Badge",component:a,tags:["autodocs"],args:{children:"Neutral",tone:"neutral"}},r={},n={args:{tone:"success",children:"Ready"}},s={args:{tone:"warning",children:"Attention"}},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[e.jsx(a,{tone:"neutral",children:"Neutral"}),e.jsx(a,{tone:"success",children:"Success"}),e.jsx(a,{tone:"warning",children:"Warning"}),e.jsx(a,{tone:"neutral",children:"Longer metadata badge"})]})};var o,c,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,i,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    tone: "success",
    children: "Ready"
  }
}`,...(u=(i=n.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,g,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    tone: "warning",
    children: "Attention"
  }
}`,...(m=(g=s.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var x,f,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12,
    flexWrap: "wrap"
  }}>
      <Badge tone="neutral">Neutral</Badge>
      <Badge tone="success">Success</Badge>
      <Badge tone="warning">Warning</Badge>
      <Badge tone="neutral">Longer metadata badge</Badge>
    </div>
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const A=["Neutral","Success","Warning","StateGallery"];export{r as Neutral,t as StateGallery,n as Success,s as Warning,A as __namedExportsOrder,b as default};
