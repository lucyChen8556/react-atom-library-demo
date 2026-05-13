import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{c as z}from"./cx-2dOUpm6k.js";function A(e){return e?e.trim().split(/\s+/).slice(0,2).map(t=>{var s;return((s=t[0])==null?void 0:s.toUpperCase())??""}).join(""):"?"}function r({classes:e,src:t,alt:s,name:m,size:y="md",className:x,...j}){return a.jsx("div",{className:z("oec-reset","oec-avatar",`oec-avatar--${y}`,e==null?void 0:e.root,x),...j,children:t?a.jsx("img",{className:e==null?void 0:e.image,src:t,alt:s??m??"Avatar"}):a.jsx("span",{className:e==null?void 0:e.fallback,children:A(m)})})}r.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{classes:{required:!1,tsType:{name:"AvatarClasses"},description:""},src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}}},composes:["HTMLAttributes"]};const L={title:"Atoms/Avatar",component:r,tags:["autodocs"],args:{name:"Lucy Chen",size:"md"}},n={},i={args:{src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"}},o={render:()=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[a.jsx(r,{name:"Lucy Chen",size:"sm"}),a.jsx(r,{name:"Lucy Chen",size:"md"}),a.jsx(r,{name:"Lucy Chen",size:"lg"})]})};var c,p,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,u,g;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  }
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,v,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    gap: 12
  }}>
      <Avatar name="Lucy Chen" size="sm" />
      <Avatar name="Lucy Chen" size="md" />
      <Avatar name="Lucy Chen" size="lg" />
    </div>
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const q=["Initials","Image","Sizes"];export{i as Image,n as Initials,o as Sizes,q as __namedExportsOrder,L as default};
