import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as X}from"./index-C7k4LvGd.js";import{B as e}from"./Button-CRJgnCCT.js";import{T as a}from"./ToastProvider-FC15Aibl.js";import{c as o,s as i,a as n,b as Y,d as w,e as Z,f as $}from"./toastStore-91DSA9z6.js";import"./cx-2dOUpm6k.js";import"./index-s2tCW9eu.js";import"./x-nFuAMi5B.js";import"./createLucideIcon-e0PjoWs3.js";import"./circle-x-DFQSOCAc.js";import"./info-oI3AJd1-.js";import"./circle-alert-C05QPBuZ.js";function s({open:r=!1,position:x,...v}){X.useEffect(()=>{r||o()},[r]);const M=x==="top-center"&&v.variant==="notice"?"top-right":x,Q=()=>{o(),$({...v,duration:3e4,position:M})},U=()=>{o()};return t.jsxs("div",{style:{minHeight:220,paddingTop:72},children:[t.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[t.jsx(e,{onClick:Q,children:"Show toast"}),t.jsx(e,{onClick:U,variant:"outline",children:"Hide toast"})]}),t.jsx(a,{})]})}function tt(){return t.jsxs("div",{style:{display:"grid",gap:16},children:[t.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[t.jsx(e,{onClick:()=>{o(),i("Success message")},children:"Alert top-center"}),t.jsx(e,{onClick:()=>{o(),w("Error message",{position:"top-left"})},children:"Alert top-left"})]}),t.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[t.jsx(e,{onClick:()=>{n("Info",{description:"Info",position:"top-right",variant:"notice",withCloseButton:!0})},variant:"outline",children:"Info Notice"}),t.jsx(e,{onClick:()=>{Z("Warning",{description:"Warning",position:"top-right",variant:"notice",withCloseButton:!0})},variant:"outline",children:"Warning Notice"}),t.jsx(e,{onClick:()=>{w("Error",{description:"Error",position:"top-right",variant:"notice",withCloseButton:!0})},variant:"outline",children:"Error Notice"}),t.jsx(e,{onClick:()=>{i("Success",{description:"Success",position:"top-right",variant:"notice",withCloseButton:!0})},variant:"outline",children:"Success Notice"})]}),t.jsx(a,{})]})}function et(){return t.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[t.jsx(e,{onClick:()=>{o(),i("Top left alert",{position:"top-left"})},children:"Top left"}),t.jsx(e,{onClick:()=>{o(),i("Top center alert",{position:"top-center"})},children:"Top center"}),t.jsx(e,{onClick:()=>{o(),i("Top right alert",{position:"top-right"})},children:"Top right"}),t.jsx(e,{onClick:()=>{o(),i("Bottom left alert",{position:"bottom-left"})},children:"Bottom left"}),t.jsx(e,{onClick:()=>{o(),i("Bottom center alert",{position:"bottom-center"})},children:"Bottom center"}),t.jsx(e,{onClick:()=>{o(),i("Bottom right alert",{position:"bottom-right"})},children:"Bottom right"}),t.jsx(a,{})]})}function ot(){return t.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[t.jsx(e,{onClick:()=>{o(),i("Short alert",{duration:1e3,position:"top-center"})},children:"1s"}),t.jsx(e,{onClick:()=>{o(),i("Default alert",{duration:1500,position:"top-center"})},children:"1.5s"}),t.jsx(e,{onClick:()=>{o(),i("Long alert",{duration:3e3,position:"top-center"})},children:"3s"}),t.jsx(e,{onClick:()=>{o(),i("Persistent alert",{duration:!1,position:"top-center",withCloseButton:!0})},children:"Persistent"}),t.jsx(a,{})]})}function rt(){return t.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[t.jsx(e,{onClick:()=>{n("Top left notice",{description:"Top left notice",position:"top-left",variant:"notice",withCloseButton:!0})},variant:"outline",children:"Top left"}),t.jsx(e,{onClick:()=>{n("Top center notice",{description:"Top center notice",position:"top-center",variant:"notice",withCloseButton:!0})},variant:"outline",children:"Top center"}),t.jsx(e,{onClick:()=>{n("Top right notice",{description:"Top right notice",position:"top-right",variant:"notice",withCloseButton:!0})},variant:"outline",children:"Top right"}),t.jsx(e,{onClick:()=>{n("Bottom left notice",{description:"Bottom left notice",position:"bottom-left",variant:"notice",withCloseButton:!0})},variant:"outline",children:"Bottom left"}),t.jsx(e,{onClick:()=>{n("Bottom center notice",{description:"Bottom center notice",position:"bottom-center",variant:"notice",withCloseButton:!0})},variant:"outline",children:"Bottom center"}),t.jsx(e,{onClick:()=>{n("Bottom right notice",{description:"Bottom right notice",position:"bottom-right",variant:"notice",withCloseButton:!0})},variant:"outline",children:"Bottom right"}),t.jsx(e,{onClick:()=>{Y()},variant:"outline",children:"Clear notices"}),t.jsx(a,{})]})}const ft={title:"Atoms/Toast",component:s,tags:["autodocs"],args:{title:"Workspace published",description:"",intent:"success",variant:"alert",withCloseButton:!1,position:"top-center",open:!1,closeLabel:"Close toast",ariaLive:"polite"},argTypes:{title:{control:"text"},description:{control:"text"},intent:{control:"inline-radio",options:["success","warning","info","error"]},variant:{control:"inline-radio",options:["alert","notice"]},position:{control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"]},withCloseButton:{control:"boolean"},open:{control:"boolean"},closeLabel:{control:"text"},ariaLive:{control:"inline-radio",options:["polite","assertive"]},icon:{control:!1},classes:{control:"object"},className:{control:"text"},style:{control:"object"}}},c={render:r=>t.jsx(s,{...r})},l={args:{description:"",intent:"success",position:"top-center",title:"Workspace published",variant:"alert",withCloseButton:!1},render:r=>t.jsx(s,{...r})},p={args:{description:"",intent:"error",position:"top-left",title:"Error message",variant:"alert",withCloseButton:!1},render:r=>t.jsx(s,{...r})},d={args:{description:"Large files may take a few minutes before records appear.",intent:"info",position:"top-right",title:"Import in progress",variant:"notice",withCloseButton:!0},render:r=>t.jsx(s,{...r})},u={args:{description:"Check the CSV headers and try again.",intent:"error",position:"bottom-right",title:"Import failed",variant:"notice",withCloseButton:!0},render:r=>t.jsx(s,{...r})},h={parameters:{controls:{disable:!0},docs:{description:{story:"This preview demonstrates the imperative `showSuccessToast`, `showErrorToast`, `showInfoToast`, and `showWarningToast` APIs together with the provider-managed viewports."}}},render:()=>t.jsx(tt,{})},m={parameters:{controls:{disable:!0}},render:()=>t.jsx(et,{})},g={parameters:{controls:{disable:!0}},render:()=>t.jsx(ot,{})},f={parameters:{controls:{disable:!0}},render:()=>t.jsx(rt,{})};var C,j,T;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <ToastPlayground {...args} />
}`,...(T=(j=c.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var B,P,k;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    description: "",
    intent: "success",
    position: "top-center",
    title: "Workspace published",
    variant: "alert",
    withCloseButton: false
  },
  render: args => <ToastPlayground {...args} />
}`,...(k=(P=l.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var b,y,A;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    description: "",
    intent: "error",
    position: "top-left",
    title: "Error message",
    variant: "alert",
    withCloseButton: false
  },
  render: args => <ToastPlayground {...args} />
}`,...(A=(y=p.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var S,W,N;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    description: "Large files may take a few minutes before records appear.",
    intent: "info",
    position: "top-right",
    title: "Import in progress",
    variant: "notice",
    withCloseButton: true
  },
  render: args => <ToastPlayground {...args} />
}`,...(N=(W=d.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var E,I,L;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    description: "Check the CSV headers and try again.",
    intent: "error",
    position: "bottom-right",
    title: "Import failed",
    variant: "notice",
    withCloseButton: true
  },
  render: args => <ToastPlayground {...args} />
}`,...(L=(I=u.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var D,R,H;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "This preview demonstrates the imperative \`showSuccessToast\`, \`showErrorToast\`, \`showInfoToast\`, and \`showWarningToast\` APIs together with the provider-managed viewports."
      }
    }
  },
  render: () => <ProviderApiPreview />
}`,...(H=(R=h.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var V,_,O;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <AlertPositionsPreview />
}`,...(O=(_=m.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var q,z,F;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <AlertDurationsPreview />
}`,...(F=(z=g.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var G,J,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <NoticePositionsPreview />
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const xt=["Playground","Alert","AlertCustomPosition","Notice","NoticeBottomRight","ProviderApi","AlertPositions","AlertDurations","NoticePositions"];export{l as Alert,p as AlertCustomPosition,g as AlertDurations,m as AlertPositions,d as Notice,u as NoticeBottomRight,f as NoticePositions,c as Playground,h as ProviderApi,xt as __namedExportsOrder,ft as default};
