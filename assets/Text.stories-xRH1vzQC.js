import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as R}from"./cx-2dOUpm6k.js";function a({children:v,tone:y="default",size:h="md",as:z="p",className:b,style:j,...S}){const M=z;return e.jsx(M,{className:R("oec-reset","oec-text",`oec-text--${h}`,`oec-text--${y}`,b),style:j,...S,children:v})}a.__docgenInfo={description:"",methods:[],displayName:"Text",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"default" | "muted"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"muted"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},as:{required:!1,tsType:{name:"union",raw:'"p" | "span" | "label" | "div"',elements:[{name:"literal",value:'"p"'},{name:"literal",value:'"span"'},{name:"literal",value:'"label"'},{name:"literal",value:'"div"'}]},description:"",defaultValue:{value:'"p"',computed:!1}}},composes:["HTMLAttributes"]};const _={title:"Atoms/Text",component:a,tags:["autodocs"],args:{children:"Reacton helps you build consistent interfaces from small, reusable atoms.",size:"md",tone:"default"}},t={},s={args:{tone:"muted"}},r={args:{size:"lg"}},n={render:()=>e.jsxs("div",{style:{display:"grid",gap:8},children:[e.jsx(a,{size:"sm",children:"Small supporting text"}),e.jsx(a,{size:"md",children:"Medium body copy"}),e.jsx(a,{size:"lg",children:"Large emphasis text"}),e.jsx(a,{tone:"muted",size:"md",children:"Muted text for secondary information"}),e.jsx(a,{as:"label",children:"Rendered as a label element"}),e.jsx(a,{as:"div",children:"Rendered as a div container"})]})};var l,o,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(o=t.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var i,m,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    tone: "muted"
  }
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,p,x;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: "lg"
  }
}`,...(x=(p=r.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var g,f,T;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 8
  }}>
      <Text size="sm">Small supporting text</Text>
      <Text size="md">Medium body copy</Text>
      <Text size="lg">Large emphasis text</Text>
      <Text tone="muted" size="md">
        Muted text for secondary information
      </Text>
      <Text as="label">Rendered as a label element</Text>
      <Text as="div">Rendered as a div container</Text>
    </div>
}`,...(T=(f=n.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const w=["Default","Muted","Large","TypographyScale"];export{t as Default,r as Large,s as Muted,n as TypographyScale,w as __namedExportsOrder,_ as default};
