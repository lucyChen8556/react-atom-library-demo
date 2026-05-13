import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as m}from"./index-C7k4LvGd.js";import{D}from"./DateRange-DMDYaSxb.js";import"./cx-2dOUpm6k.js";import"./dateCalendar-CSFEN7rI.js";import"./createLucideIcon-e0PjoWs3.js";import"./Field-DTqFT2up.js";import"./Menu-MGqqQZhF.js";import"./check-DIQmgjSX.js";const G=[{label:"Today",value:"TODAY"},{label:"Yesterday",value:"YESTERDAY"},{label:"Last 7 days",value:"LAST_7_DAYS"},{label:"Last 14 days",value:"LAST_14_DAYS"},{label:"Last 30 days",value:"LAST_30_DAYS"},{label:"Last 60 days",value:"LAST_60_DAYS"},{label:"This month",value:"THIS_MONTH"},{label:"Last month",value:"LAST_MONTH"},{label:"This quarter",value:"THIS_QUARTER"},{label:"Last quarter",value:"LAST_QUARTER"},{label:"This year",value:"THIS_YEAR"},{label:"Last year",value:"LAST_YEAR"},{label:"Custom range",value:"CUSTOM_RANGE"}];function n(a){const[r,g]=m.useState(a.value),[v,h]=m.useState(a.dateDuration??null);return e.jsx(D,{...a,dateDuration:v,onChange:g,onDateDurationChange:h,value:r})}function p(a){const[r,g]=m.useState(a.value),[v,h]=m.useState(a.dateDuration??null);return e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(D,{...a,dateDuration:v,onChange:g,onDateDurationChange:h,value:r}),e.jsxs("div",{children:["StartTime: ",r[0]?r[0].toLocaleDateString("en-US"):""]}),e.jsxs("div",{children:["EndTime: ",r[1]?r[1].toLocaleDateString("en-US"):""]})]})}const Z={title:"Forms/DateRange",component:D,tags:["autodocs"],args:{value:[null,null],haveMenu:!1,haveFooter:!1},argTypes:{value:{control:!1},menuList:{control:!1},footer:{control:!1},variables:{control:!1}}},t={render:a=>e.jsx(n,{...a})},o={args:{haveMenu:!0},render:a=>e.jsx(n,{...a})},s={args:{haveFooter:!0,haveMenu:!0},render:a=>e.jsx(n,{...a})},l={args:{highlightToday:!0},render:a=>e.jsx(n,{...a})},d={args:{highlightToday:!0,value:[new Date(2026,4,7),new Date(2026,4,16)],variables:{todayTextColor:"#B54708",todayBackground:"rgba(245, 158, 11, 0.16)",todayOutline:"#F59E0B",rangeTextColor:"#0F766E",rangeBackground:"rgba(20, 184, 166, 0.14)",rangeEndpointBackground:"#0F766E",rangeEndpointTextColor:"#FFFFFF",rangePreviewOutline:"#0F766E",menuSelectedTextColor:"#0F766E",navHoverColor:"#0F766E",mutedTextColor:"#6B7280"}},render:a=>e.jsx(n,{...a})},i={render:a=>e.jsxs("div",{style:{display:"grid",gap:24},children:[e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:12},children:"Default"}),e.jsx(p,{...a,value:[new Date(2026,4,7),new Date(2026,5,16)]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:12},children:"Have Menu"}),e.jsx(p,{...a,haveMenu:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:12},children:"Have Menu and Footer"}),e.jsx(p,{...a,haveFooter:!0,haveMenu:!0})]})]})},u={render:a=>e.jsxs("div",{style:{display:"grid",gap:24},children:[e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:12},children:"English (US)"}),e.jsx(n,{...a,locale:"en-US",value:[new Date(2026,4,7),new Date(2026,5,16)]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:12},children:"Traditional Chinese (Taiwan)"}),e.jsx(n,{...a,locale:"zh-TW",value:[new Date(2026,4,7),new Date(2026,5,16)]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:12},children:"Japanese"}),e.jsx(n,{...a,locale:"ja-JP",value:[new Date(2026,4,7),new Date(2026,5,16)]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:12},children:"German"}),e.jsx(n,{...a,locale:"de-DE",value:[new Date(2026,4,7),new Date(2026,5,16)]})]})]})},c={args:{haveMenu:!0,menuList:G},render:a=>e.jsx(n,{...a})};var x,y,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <ControlledDateRange {...args} />
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var T,j,E;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    haveMenu: true
  },
  render: args => <ControlledDateRange {...args} />
}`,...(E=(j=o.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var C,F,w;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    haveFooter: true,
    haveMenu: true
  },
  render: args => <ControlledDateRange {...args} />
}`,...(w=(F=s.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var B,M,L;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    highlightToday: true
  },
  render: args => <ControlledDateRange {...args} />
}`,...(L=(M=l.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var b,R,_;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    highlightToday: true,
    value: [new Date(2026, 4, 7), new Date(2026, 4, 16)],
    variables: {
      todayTextColor: "#B54708",
      todayBackground: "rgba(245, 158, 11, 0.16)",
      todayOutline: "#F59E0B",
      rangeTextColor: "#0F766E",
      rangeBackground: "rgba(20, 184, 166, 0.14)",
      rangeEndpointBackground: "#0F766E",
      rangeEndpointTextColor: "#FFFFFF",
      rangePreviewOutline: "#0F766E",
      menuSelectedTextColor: "#0F766E",
      navHoverColor: "#0F766E",
      mutedTextColor: "#6B7280"
    }
  },
  render: args => <ControlledDateRange {...args} />
}`,...(_=(R=d.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var A,f,H;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "grid",
    gap: 24
  }}>
      <div>
        <div style={{
        marginBottom: 12
      }}>Default</div>
        <SummaryExample {...args} value={[new Date(2026, 4, 7), new Date(2026, 5, 16)]} />
      </div>
      <div>
        <div style={{
        marginBottom: 12
      }}>Have Menu</div>
        <SummaryExample {...args} haveMenu />
      </div>
      <div>
        <div style={{
        marginBottom: 12
      }}>Have Menu and Footer</div>
        <SummaryExample {...args} haveFooter haveMenu />
      </div>
    </div>
}`,...(H=(f=i.parameters)==null?void 0:f.docs)==null?void 0:H.source}}};var O,U,Y;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "grid",
    gap: 24
  }}>
      <div>
        <div style={{
        marginBottom: 12
      }}>English (US)</div>
        <ControlledDateRange {...args} locale="en-US" value={[new Date(2026, 4, 7), new Date(2026, 5, 16)]} />
      </div>
      <div>
        <div style={{
        marginBottom: 12
      }}>Traditional Chinese (Taiwan)</div>
        <ControlledDateRange {...args} locale="zh-TW" value={[new Date(2026, 4, 7), new Date(2026, 5, 16)]} />
      </div>
      <div>
        <div style={{
        marginBottom: 12
      }}>Japanese</div>
        <ControlledDateRange {...args} locale="ja-JP" value={[new Date(2026, 4, 7), new Date(2026, 5, 16)]} />
      </div>
      <div>
        <div style={{
        marginBottom: 12
      }}>German</div>
        <ControlledDateRange {...args} locale="de-DE" value={[new Date(2026, 4, 7), new Date(2026, 5, 16)]} />
      </div>
    </div>
}`,...(Y=(U=u.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var N,k,W;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    haveMenu: true,
    menuList: LONG_MENU_LIST
  },
  render: args => <ControlledDateRange {...args} />
}`,...(W=(k=c.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};const $=["Default","WithMenu","WithMenuAndFooter","HighlightToday","CustomColors","Summary","LocaleSummary","ScrollableMenu"];export{d as CustomColors,t as Default,l as HighlightToday,u as LocaleSummary,c as ScrollableMenu,i as Summary,o as WithMenu,s as WithMenuAndFooter,$ as __namedExportsOrder,Z as default};
