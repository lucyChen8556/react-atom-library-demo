import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{A as r}from"./AlertMessage-BAWHBFe8.js";import"./Button-CRJgnCCT.js";import"./index-C7k4LvGd.js";import"./cx-2dOUpm6k.js";import"./x-nFuAMi5B.js";import"./createLucideIcon-e0PjoWs3.js";import"./circle-x-DFQSOCAc.js";import"./info-oI3AJd1-.js";import"./circle-alert-C05QPBuZ.js";const A={title:"Atoms/AlertMessage",component:r,tags:["autodocs"],parameters:{layout:"padded"},args:{intent:"error",header:"Error Message",description:"Some description here",withCloseButton:!1,hiddenIcon:!1},argTypes:{intent:{control:"inline-radio",options:["info","success","warning","error"]}}};function l({intent:n}){const e=`${n.charAt(0).toUpperCase()}${n.slice(1)} Message`;return t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsx(r,{header:e,hiddenIcon:!0,intent:n}),t.jsx(r,{description:"Some description here",header:e,hiddenIcon:!0,intent:n}),t.jsx(r,{header:e,intent:n}),t.jsx(r,{description:"Some description here",header:e,intent:n}),t.jsx(r,{header:e,intent:n,withCloseButton:!0}),t.jsx(r,{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quisquam facilis voluptatibus dignissimos iusto ratione cupiditate minima numquam tenetur pariatur consectetur quam quae sequi.",header:e,intent:n,withCloseButton:!0})]})}const i={},s={render:()=>{const n=[{intent:"info"},{intent:"success"},{intent:"error"},{intent:"warning"}];return t.jsx("div",{style:{display:"grid",gap:24,width:640,maxWidth:"100%"},children:n.map(e=>t.jsxs("section",{style:{display:"grid",gap:12,width:"100%"},children:[t.jsx("div",{style:{color:"var(--oec-color-text)",fontSize:"1rem",fontWeight:600,lineHeight:"1.5rem",margin:0},children:e.intent.charAt(0).toUpperCase()+e.intent.slice(1)}),t.jsx(l,{intent:e.intent})]},e.intent))})}};var o,a,c;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(c=(a=i.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var m,d,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const samples: {
      intent: "info" | "success" | "warning" | "error";
    }[] = [{
      intent: "info"
    }, {
      intent: "success"
    }, {
      intent: "error"
    }, {
      intent: "warning"
    }];
    return <div style={{
      display: "grid",
      gap: 24,
      width: 640,
      maxWidth: "100%"
    }}>
        {samples.map(sample => <section key={sample.intent} style={{
        display: "grid",
        gap: 12,
        width: "100%"
      }}>
            <div style={{
          color: "var(--oec-color-text)",
          fontSize: "1rem",
          fontWeight: 600,
          lineHeight: "1.5rem",
          margin: 0
        }}>
              {sample.intent.charAt(0).toUpperCase() + sample.intent.slice(1)}
            </div>
            <SummaryBlock intent={sample.intent} />
          </section>)}
      </div>;
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const q=["Default","Summary"];export{i as Default,s as Summary,q as __namedExportsOrder,A as default};
