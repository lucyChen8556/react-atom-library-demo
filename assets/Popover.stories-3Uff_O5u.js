import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as y}from"./index-C7k4LvGd.js";import{B as r}from"./Button-CRJgnCCT.js";import{P as n}from"./Popover-DOKRedu-.js";import"./cx-2dOUpm6k.js";import"./floating-ui.react-d-2ItNnr.js";import"./index-s2tCW9eu.js";const S={title:"Overlays/Popover",component:n,tags:["autodocs"],args:{children:null,closeOnClickOutside:!0,closeOnEscape:!0,defaultOpen:!1,disabled:!1,offset:2,position:"bottom-start",sameWidth:!1,withinPortal:!1},argTypes:{position:{control:"select",options:["top-start","top","top-end","right-start","right","right-end","bottom-start","bottom","bottom-end","left-start","left","left-end"]}}};function P(e){const[u,x]=y.useState(!!e.open);return t.jsx("div",{style:{minHeight:220,padding:32,position:"relative"},children:t.jsxs(n,{...e,onOpenChange:x,open:u,children:[t.jsx(n.Target,{children:t.jsx(r,{variant:"outline",children:"Open popover"})}),t.jsx(n.Dropdown,{children:t.jsx("div",{style:{padding:16,minWidth:240},children:"Popover content"})})]})})}const o={args:{},render:e=>t.jsx(P,{...e})},i={args:{sameWidth:!0},render:e=>t.jsx("div",{style:{minHeight:220,padding:32,position:"relative"},children:t.jsxs(n,{...e,children:[t.jsx(n.Target,{children:t.jsx(r,{style:{width:280},variant:"outline",children:"Match trigger width"})}),t.jsx(n.Dropdown,{children:t.jsx("div",{style:{padding:16},children:"Popover content"})})]})})},d={args:{},render:()=>t.jsxs("div",{style:{display:"grid",gap:24,minHeight:320,padding:32,position:"relative"},children:[t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsx("div",{children:"Default"}),t.jsxs(n,{children:[t.jsx(n.Target,{children:t.jsx(r,{variant:"outline",children:"Bottom Start"})}),t.jsx(n.Dropdown,{children:t.jsx("div",{style:{padding:16,minWidth:240},children:"Popover content"})})]})]}),t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsx("div",{children:"Same Width"}),t.jsxs(n,{sameWidth:!0,children:[t.jsx(n.Target,{children:t.jsx(r,{style:{width:280},variant:"outline",children:"Match trigger width"})}),t.jsx(n.Dropdown,{children:t.jsx("div",{style:{padding:16},children:"Popover content"})})]})]}),t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsx("div",{children:"Position"}),t.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:["top-start","top","top-end","right-start","right","right-end","bottom-start","bottom","bottom-end","left-start","left","left-end"].map(e=>t.jsxs(n,{position:e,children:[t.jsx(n.Target,{children:t.jsx(r,{variant:"outline",children:e})}),t.jsx(n.Dropdown,{children:t.jsx("div",{style:{padding:16,minWidth:180},children:e})})]},e))})]})]})};var s,a,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {},
  render: args => <BasePreview {...args} />
}`,...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var l,v,g;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    sameWidth: true
  },
  render: args => <div style={{
    minHeight: 220,
    padding: 32,
    position: "relative"
  }}>
      <Popover {...args}>
        <Popover.Target>
          <Button style={{
          width: 280
        }} variant="outline">
            Match trigger width
          </Button>
        </Popover.Target>
        <Popover.Dropdown>
          <div style={{
          padding: 16
        }}>Popover content</div>
        </Popover.Dropdown>
      </Popover>
    </div>
}`,...(g=(v=i.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var c,h,m;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: "grid",
    gap: 24,
    minHeight: 320,
    padding: 32,
    position: "relative"
  }}>
      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>Default</div>
        <Popover>
          <Popover.Target>
            <Button variant="outline">Bottom Start</Button>
          </Popover.Target>
          <Popover.Dropdown>
            <div style={{
            padding: 16,
            minWidth: 240
          }}>Popover content</div>
          </Popover.Dropdown>
        </Popover>
      </div>

      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>Same Width</div>
        <Popover sameWidth>
          <Popover.Target>
            <Button style={{
            width: 280
          }} variant="outline">
              Match trigger width
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <div style={{
            padding: 16
          }}>Popover content</div>
          </Popover.Dropdown>
        </Popover>
      </div>

      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>Position</div>
        <div style={{
        display: "flex",
        gap: 12,
        flexWrap: "wrap"
      }}>
          {(["top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-start", "bottom", "bottom-end", "left-start", "left", "left-end"] as const).map(position => <Popover key={position} position={position}>
              <Popover.Target>
                <Button variant="outline">{position}</Button>
              </Popover.Target>
              <Popover.Dropdown>
                <div style={{
              padding: 16,
              minWidth: 180
            }}>{position}</div>
              </Popover.Dropdown>
            </Popover>)}
        </div>
      </div>
    </div>
}`,...(m=(h=d.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const b=["Playground","SameWidth","Summary"];export{o as Playground,i as SameWidth,d as Summary,b as __namedExportsOrder,S as default};
