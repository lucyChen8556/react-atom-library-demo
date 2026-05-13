import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as g}from"./cx-2dOUpm6k.js";function a({orientation:n="horizontal",className:p,...m}){return e.jsx("hr",{className:g("oec-reset","oec-divider",`oec-divider--${n}`,p),...m})}a.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}}},composes:["HTMLAttributes"]};const u={title:"Atoms/Divider",component:a,tags:["autodocs"]},s={render:n=>e.jsxs("div",{style:{display:"grid",gap:12,width:320},children:[e.jsx("span",{children:"Above"}),e.jsx(a,{...n}),e.jsx("span",{children:"Below"})]})},r={args:{orientation:"vertical"},render:n=>e.jsxs("div",{style:{display:"flex",alignItems:"stretch",gap:12,height:48},children:[e.jsx("span",{style:{display:"inline-flex",alignItems:"center"},children:"Left"}),e.jsx(a,{...n}),e.jsx("span",{style:{display:"inline-flex",alignItems:"center"},children:"Right"})]})};var i,t,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "grid",
    gap: 12,
    width: 320
  }}>
      <span>Above</span>
      <Divider {...args} />
      <span>Below</span>
    </div>
}`,...(l=(t=s.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var o,d,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    orientation: "vertical"
  },
  render: args => <div style={{
    display: "flex",
    alignItems: "stretch",
    gap: 12,
    height: 48
  }}>
      <span style={{
      display: "inline-flex",
      alignItems: "center"
    }}>Left</span>
      <Divider {...args} />
      <span style={{
      display: "inline-flex",
      alignItems: "center"
    }}>
        Right
      </span>
    </div>
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const x=["Horizontal","Vertical"];export{s as Horizontal,r as Vertical,x as __namedExportsOrder,u as default};
