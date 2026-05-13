import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as S}from"./index-C7k4LvGd.js";import{F as x}from"./FilterButton-Bln0jzFu.js";import"./cx-2dOUpm6k.js";import"./x-nFuAMi5B.js";import"./createLucideIcon-e0PjoWs3.js";import"./chevron-down-BWfEgQAQ.js";const he={title:"Filters/FilterButton",component:x,tags:["autodocs"],args:{label:"Status",hasBorder:!0,opened:!1,hasSelect:!1,showToggleIcon:!0,showDeleteIcon:!1,tag:"none"},argTypes:{tag:{control:"inline-radio",options:["none","text","tag"]}}};function le(a){const[B,b]=S.useState(!!a.opened),[v,y]=S.useState(!!a.hasSelect),[f,oe]=S.useState(a.tagNum??0),ne=a.tag!=="none"||a.showDeleteIcon;return e.jsx("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:e.jsx(x,{...a,hasSelect:v,onClick:()=>{if(a.showToggleIcon){b(h=>!h);return}ne&&y(h=>!h)},onDelete:()=>{b(!1),y(!1),oe(0)},opened:B,showDeleteIcon:!!a.showDeleteIcon&&(v||B||f>0),tagNum:f})})}const r={args:{showDeleteIcon:!0,tag:"text",tagNum:3},render:a=>e.jsx(le,{...a})},s={args:{hasSelect:!0}},o={args:{tag:"text",tagNum:12}},n={args:{hasSelect:!0,tag:"tag",tagNum:1200}},l={args:{opened:!0,showDeleteIcon:!0,tag:"text",tagNum:3}},d={args:{disabled:!0,tag:"tag",tagNum:2}},u={args:{hasBorder:!0,tag:"none"}},c={args:{hasBorder:!1,tag:"none"}},g={args:{hasBorder:!1,hasSelect:!0}},i={args:{hasBorder:!0,hasSelect:!0,tag:"tag",tagNum:3}},m={args:{hasBorder:!0,showToggleIcon:!1,tag:"text",tagNum:3}};function t(a){return e.jsx("div",{style:{marginBottom:12,marginRight:12},children:e.jsx(x,{...a})})}const p={render:()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:24},children:[e.jsx("div",{children:"Default"}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap"},children:[e.jsx(t,{hasBorder:!0,label:"Status"}),e.jsx(t,{hasBorder:!0,label:"Status",showToggleIcon:!1}),e.jsx(t,{label:"Status"}),e.jsx(t,{hasBorder:!0,label:"Status",opened:!0}),e.jsx(t,{hasBorder:!0,hasSelect:!0,label:"Status"})]})]}),e.jsxs("div",{style:{marginBottom:24},children:[e.jsx("div",{children:"Count"}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap"},children:[e.jsx(t,{hasBorder:!0,label:"Status",tag:"text",tagNum:3}),e.jsx(t,{hasBorder:!0,label:"Status",tag:"tag",tagNum:3}),e.jsx(t,{hasBorder:!0,label:"Status",tag:"tag",tagNum:1200})]})]}),e.jsxs("div",{style:{marginBottom:24},children:[e.jsx("div",{children:"Delete"}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap"},children:[e.jsx(t,{hasBorder:!0,hasSelect:!0,label:"Status",onDelete:()=>{},showDeleteIcon:!0,tag:"text",tagNum:3}),e.jsx(t,{disabled:!0,hasBorder:!0,label:"Status",tag:"tag",tagNum:2}),e.jsx(t,{hasBorder:!0,label:"Status",showToggleIcon:!1,tag:"text",tagNum:3})]})]}),e.jsxs("div",{children:[e.jsx("div",{children:"Disabled"}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap"},children:[e.jsx(t,{disabled:!0,hasBorder:!0,label:"Status"}),e.jsx(t,{disabled:!0,hasBorder:!0,label:"Status",tag:"text",tagNum:3}),e.jsx(t,{disabled:!0,hasBorder:!0,label:"Status",tag:"tag",tagNum:2}),e.jsx(t,{disabled:!0,label:"Status"})]})]})]})};var j,N,w;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    showDeleteIcon: true,
    tag: "text",
    tagNum: 3
  },
  render: args => <InteractiveFilterButton {...args} />
}`,...(w=(N=r.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var D,I,R;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    hasSelect: true
  }
}`,...(R=(I=s.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var T,W,C;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    tag: "text",
    tagNum: 12
  }
}`,...(C=(W=o.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var F,A,O;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    hasSelect: true,
    tag: "tag",
    tagNum: 1200
  }
}`,...(O=(A=n.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var E,P,_;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    opened: true,
    showDeleteIcon: true,
    tag: "text",
    tagNum: 3
  }
}`,...(_=(P=l.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var k,H,q;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    disabled: true,
    tag: "tag",
    tagNum: 2
  }
}`,...(q=(H=d.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var z,G,J;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    hasBorder: true,
    tag: "none"
  }
}`,...(J=(G=u.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,L,M;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    hasBorder: false,
    tag: "none"
  }
}`,...(M=(L=c.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var Q,U,V;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    hasBorder: false,
    hasSelect: true
  }
}`,...(V=(U=g.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var X,Y,Z;i.parameters={...i.parameters,docs:{...(X=i.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    hasBorder: true,
    hasSelect: true,
    tag: "tag",
    tagNum: 3
  }
}`,...(Z=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    hasBorder: true,
    showToggleIcon: false,
    tag: "text",
    tagNum: 3
  }
}`,...(te=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,re,se;p.parameters={...p.parameters,docs:{...(ae=p.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div>
      <div style={{
      marginBottom: 24
    }}>
        <div>Default</div>
        <div style={{
        display: "flex",
        flexWrap: "wrap"
      }}>
          <StoryRender hasBorder label="Status" />
          <StoryRender hasBorder label="Status" showToggleIcon={false} />
          <StoryRender label="Status" />
          <StoryRender hasBorder label="Status" opened />
          <StoryRender hasBorder hasSelect label="Status" />
        </div>
      </div>

      <div style={{
      marginBottom: 24
    }}>
        <div>Count</div>
        <div style={{
        display: "flex",
        flexWrap: "wrap"
      }}>
          <StoryRender hasBorder label="Status" tag="text" tagNum={3} />
          <StoryRender hasBorder label="Status" tag="tag" tagNum={3} />
          <StoryRender hasBorder label="Status" tag="tag" tagNum={1200} />
        </div>
      </div>

      <div style={{
      marginBottom: 24
    }}>
        <div>Delete</div>
        <div style={{
        display: "flex",
        flexWrap: "wrap"
      }}>
          <StoryRender hasBorder hasSelect label="Status" onDelete={() => {}} showDeleteIcon tag="text" tagNum={3} />
          <StoryRender disabled hasBorder label="Status" tag="tag" tagNum={2} />
          <StoryRender hasBorder label="Status" showToggleIcon={false} tag="text" tagNum={3} />
        </div>
      </div>

      <div>
        <div>Disabled</div>
        <div style={{
        display: "flex",
        flexWrap: "wrap"
      }}>
          <StoryRender disabled hasBorder label="Status" />
          <StoryRender disabled hasBorder label="Status" tag="text" tagNum={3} />
          <StoryRender disabled hasBorder label="Status" tag="tag" tagNum={2} />
          <StoryRender disabled label="Status" />
        </div>
      </div>
    </div>
}`,...(se=(re=p.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};const Se=["Playground","Active","WithTextCount","WithTagCount","OpenedWithDelete","Disabled","Bordered","Borderless","BorderlessActive","TagCount","NoToggle","Summary"];export{s as Active,u as Bordered,c as Borderless,g as BorderlessActive,d as Disabled,m as NoToggle,l as OpenedWithDelete,r as Playground,p as Summary,i as TagCount,n as WithTagCount,o as WithTextCount,Se as __namedExportsOrder,he as default};
