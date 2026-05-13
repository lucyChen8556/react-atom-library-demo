import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{a as L,b as S,T as a}from"./Typography-DDbXw5QJ.js";import"./cx-2dOUpm6k.js";const B={title:"Atoms/Typography",component:a,tags:["autodocs"],args:{children:"Body medium is a strong default for compact, readable UI copy.",variant:"body",size:"medium",tone:"default"},argTypes:{variant:{control:"select",options:S},size:{control:"select",options:L},tone:{control:"radio",options:["default","muted"]},preset:{control:"select",options:["displayLarge","displayMedium","displaySmall","headlineLarge","headlineMedium","headlineSmall","titleLarge","titleMedium","titleSmall","labelLarge","labelMedium","labelSmall","bodyLarge","bodyMedium","bodySmall"]},as:{control:"select",options:["p","span","label","div"]}}},r={},i={args:{variant:"body",size:"medium",tone:"muted",children:"Muted body medium for secondary information."}},s={args:{variant:"title",size:"large",children:"Section heading"}},t={render:()=>e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsx(a,{variant:"display",size:"large",children:"Display Large"}),e.jsx(a,{variant:"display",size:"medium",children:"Display Medium"}),e.jsx(a,{variant:"headline",size:"large",children:"Headline Large"}),e.jsx(a,{variant:"title",size:"large",children:"Title Large"}),e.jsx(a,{variant:"title",size:"medium",children:"Title Medium"}),e.jsx(a,{variant:"label",size:"medium",children:"Label Medium"}),e.jsx(a,{variant:"body",size:"large",children:"Body Large"}),e.jsx(a,{variant:"body",size:"medium",children:"Body Medium"}),e.jsx(a,{variant:"body",size:"small",children:"Body Small"})]})},n={render:()=>e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsx(a,{preset:"bodyMedium",children:"preset bodyMedium still works for compatibility"}),e.jsx(a,{preset:"titleLarge",children:"preset titleLarge maps to title + large"}),e.jsx(a,{variant:"headline",size:"small",as:"div",children:"New code should prefer variant + size"})]})};var o,d,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,y,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "body",
    size: "medium",
    tone: "muted",
    children: "Muted body medium for secondary information."
  }
}`,...(m=(y=i.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var c,g,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: "title",
    size: "large",
    children: "Section heading"
  }
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,T,v;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 10
  }}>
      <Typography variant="display" size="large">
        Display Large
      </Typography>
      <Typography variant="display" size="medium">
        Display Medium
      </Typography>
      <Typography variant="headline" size="large">
        Headline Large
      </Typography>
      <Typography variant="title" size="large">
        Title Large
      </Typography>
      <Typography variant="title" size="medium">
        Title Medium
      </Typography>
      <Typography variant="label" size="medium">
        Label Medium
      </Typography>
      <Typography variant="body" size="large">
        Body Large
      </Typography>
      <Typography variant="body" size="medium">
        Body Medium
      </Typography>
      <Typography variant="body" size="small">
        Body Small
      </Typography>
    </div>
}`,...(v=(T=t.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var b,z,M;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 10
  }}>
      <Typography preset="bodyMedium">
        preset bodyMedium still works for compatibility
      </Typography>
      <Typography preset="titleLarge">
        preset titleLarge maps to title + large
      </Typography>
      <Typography variant="headline" size="small" as="div">
        New code should prefer variant + size
      </Typography>
    </div>
}`,...(M=(z=n.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};const P=["BodyMedium","MutedBodyMedium","TitleLarge","TypeScale","PresetCompatibility"];export{r as BodyMedium,i as MutedBodyMedium,n as PresetCompatibility,s as TitleLarge,t as TypeScale,P as __namedExportsOrder,B as default};
