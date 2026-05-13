import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as b}from"./index-C7k4LvGd.js";import{B as a}from"./Button-CRJgnCCT.js";import{T as o}from"./Tooltip-BD41W_Ht.js";import{I as f}from"./info-oI3AJd1-.js";import"./cx-2dOUpm6k.js";import"./floating-ui.react-d-2ItNnr.js";import"./index-s2tCW9eu.js";import"./Typography-DDbXw5QJ.js";import"./createLucideIcon-e0PjoWs3.js";const g=["bottom","bottom-end","bottom-start","left","left-end","left-start","right","right-end","right-start","top","top-end","top-start"];function r({children:e,title:n}){return t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsx("div",{style:{fontSize:14,fontWeight:600},children:n}),e]})}function c({hasArrow:e=!1,position:n}){const[h,j]=b.useState(!1),i=`${n}${e?" with arrow":""}`;return t.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center",marginTop:8},children:[t.jsx(o,{content:i,hasArrow:e,open:h,position:n,children:t.jsx(a,{onClick:()=>{j(S=>!S)},children:"Click me"})}),t.jsx(o,{content:i,hasArrow:e,position:n,children:t.jsx(a,{variant:"outline",children:"Hover me"})}),t.jsx(o,{content:i,hasArrow:e,position:n,children:"Hover me"}),t.jsx(o,{content:i,hasArrow:e,position:n,children:t.jsx("button",{"aria-label":"More information",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:0,border:0,background:"transparent",color:"var(--oec-color-primary)",cursor:"pointer"},type:"button",children:t.jsx(f,{size:18,strokeWidth:2})})})]})}const z={title:"Atoms/Tooltip",component:o,tags:["autodocs"],args:{children:t.jsx(a,{children:"Hover me"}),content:"Tooltip content",hasArrow:!0,multiline:!0,position:"bottom",arrowPosition:"center",arrowSize:5,strategy:"absolute",offset:{mainAxis:8,crossAxis:0,alignmentAxis:null}},argTypes:{children:{control:!1},content:{control:"text"},position:{control:"select",options:[...g]},hasArrow:{control:"boolean"},arrowPosition:{control:"inline-radio",options:["center","side"]},arrowSize:{control:{type:"number",min:4,max:12,step:1}},multiline:{control:"boolean"},strategy:{control:"inline-radio",options:["absolute","fixed"]},offset:{control:"object"}}},s={render:e=>t.jsx("div",{style:{display:"grid",gap:24},children:t.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[t.jsx(r,{title:"Default",children:t.jsx(o,{...e})}),t.jsx(r,{title:"Button",children:t.jsx(o,{...e,children:t.jsx(a,{children:"Hover me"})})}),t.jsx(r,{title:"With Arrow",children:t.jsx(o,{...e,hasArrow:!0,children:"Hover me"})}),t.jsx(r,{title:"Icon",children:t.jsx(o,{...e,children:t.jsx("button",{"aria-label":"More information",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:0,border:0,background:"transparent",color:"var(--oec-color-primary)",cursor:"pointer"},type:"button",children:t.jsx(f,{size:18,strokeWidth:2})})})})]})})},l={render:()=>t.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:32,padding:20},children:g.map(e=>t.jsxs(r,{title:`${e} with arrow`,children:[t.jsx(c,{hasArrow:!0,position:e}),t.jsx("div",{style:{height:8}}),t.jsx(c,{position:e})]},e))})};var d,p,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "grid",
    gap: 24
  }}>
      <div style={{
      display: "flex",
      gap: 24,
      flexWrap: "wrap"
    }}>
        <StorySection title="Default">
          <Tooltip {...args} />
        </StorySection>
        <StorySection title="Button">
          <Tooltip {...args}>
            <Button>Hover me</Button>
          </Tooltip>
        </StorySection>
        <StorySection title="With Arrow">
          <Tooltip {...args} hasArrow>
            Hover me
          </Tooltip>
        </StorySection>
        <StorySection title="Icon">
          <Tooltip {...args}>
            <button aria-label="More information" style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
            border: 0,
            background: "transparent",
            color: "var(--oec-color-primary)",
            cursor: "pointer"
          }} type="button">
              <Info size={18} strokeWidth={2} />
            </button>
          </Tooltip>
        </StorySection>
      </div>
    </div>
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,y,x;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 32,
    padding: 20
  }}>
      {POSITIONS.map(position => <StorySection key={position} title={\`\${position} with arrow\`}>
          <PositionTemplate hasArrow position={position} />
          <div style={{
        height: 8
      }} />
          <PositionTemplate position={position} />
        </StorySection>)}
    </div>
}`,...(x=(y=l.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const B=["Default","PositionSummary"];export{s as Default,l as PositionSummary,B as __namedExportsOrder,z as default};
