import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as S}from"./index-C7k4LvGd.js";import{B as s}from"./Button-CRJgnCCT.js";import{T as le}from"./Tabs-DV7G4pxT.js";import{D as Z,a as v,b as $}from"./Dialog-DrIGME5Y.js";import{C as se}from"./circle-question-mark-5mlb1FzF.js";import"./cx-2dOUpm6k.js";import"./Tag-5HF3mQqu.js";import"./x-nFuAMi5B.js";import"./createLucideIcon-e0PjoWs3.js";import"./Modal-CTpPKqbm.js";import"./index-s2tCW9eu.js";import"./index-Cb0LmbZ2.js";import"./Tooltip-BD41W_Ht.js";import"./floating-ui.react-d-2ItNnr.js";import"./Typography-DDbXw5QJ.js";import"./circle-alert-C05QPBuZ.js";function r(t){const{bodyText:i,footerAlign:d,initialOpen:l,showFooter:u,showHeaderIcon:T,showSecondaryHeader:n,useContentProp:j,...ee}=t,[te,o]=S.useState(l);S.useEffect(()=>{o(l)},[l]);const ae=n?e.jsx(le,{items:[{id:"tab-1",label:"Tab1",content:null},{id:"tab-2",label:"Tab2",content:null}],size:"sm"}):void 0,ne=T?e.jsx(se,{size:16,strokeWidth:2}):void 0,re=u?e.jsx(v,{align:d,children:e.jsxs($,{children:[e.jsx(s,{variant:"outline",onClick:()=>o(!1),children:"Cancel"}),e.jsx(s,{onClick:()=>o(!1),children:"Confirm"})]})}):void 0;return e.jsxs("div",{children:[e.jsx(s,{onClick:()=>o(!0),children:"Open dialog"}),e.jsx(Z,{...ee,content:j?i:void 0,footer:re,headerIcon:ne,onClose:()=>o(!1),onExtend:()=>{},onOpenChange:o,open:te,secondaryHeader:ae,children:j?void 0:i})]})}function a(t){const{btnText:i="Open!",footerTextButton:d=!0,initialOpen:l,...u}=t,[T,n]=S.useState(l);return S.useEffect(()=>{n(l)},[l]),e.jsxs("div",{children:[e.jsx(s,{onClick:()=>n(!0),children:i}),e.jsx(Z,{...u,footer:e.jsxs(e.Fragment,{children:[d?e.jsx(v,{align:"start",children:e.jsx(s,{variant:"text",onClick:()=>n(!1),children:"TEXT"})}):null,e.jsx(v,{align:"end",children:e.jsxs($,{children:[e.jsx(s,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(s,{onClick:()=>n(!1),children:"Confirm"})]})})]}),onClose:()=>n(!1),onExtend:()=>{},onOpenChange:n,open:T,children:u.bodyText})]})}function D(t){const{tabBody:i="Easy Test Wait for Card",...d}=t;return e.jsx(a,{...d,showSecondaryHeader:!0,bodyText:i})}const je={title:"Atoms/Dialog",component:r,tags:["autodocs"],args:{bodyText:"Dialog content goes here. Use it for confirmations, forms, and focused tasks that need temporary attention.",canExtend:!1,closeOnClickOutside:!1,closeOnEscape:!0,closeOnOverlayClick:!1,defaultExtended:!1,footerAlign:"end",fullScreen:!1,header:"Default",headerIconColor:"default",initialOpen:!1,isCloseButtonShown:void 0,isHideFooter:!1,showFooter:!0,showHeaderIcon:!1,showSecondaryHeader:!1,size:"sm",subtitle:void 0,text:{closeBtn:"Close",exitFullScreenBtn:"Exit Fullscreen",fullScreenBtn:"Fullscreen"},type:"default",useContentProp:!1,withCloseButton:!0},argTypes:{bodyText:{control:"text"},canExtend:{control:"boolean"},className:{control:"text"},classNames:{control:"object"},classes:{control:"object"},closeOnClickOutside:{control:"boolean"},closeOnEscape:{control:"boolean"},closeOnOverlayClick:{control:"boolean"},defaultExtended:{control:"boolean"},footerAlign:{control:"select",options:["start","end","space-between"]},fullScreen:{control:"boolean"},header:{control:"text"},headerIconColor:{control:"select",options:["default","warning","info","primary"]},initialOpen:{control:"boolean"},isCloseButtonShown:{control:"boolean"},isHideFooter:{control:"boolean"},showFooter:{control:"boolean"},showHeaderIcon:{control:"boolean"},showSecondaryHeader:{control:"boolean"},size:{control:"select",options:["sm","md","lg","xl"]},style:{control:"object"},subtitle:{control:"text"},text:{control:"object"},title:{control:"text"},type:{control:"select",options:["default","startInfo","info","warning"]},useContentProp:{control:"boolean"},withCloseButton:{control:"boolean"}}},c={render:t=>e.jsx(r,{...t})},p={render:t=>e.jsxs("div",{style:{display:"grid",gap:32},children:[e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"Size Small (Default)"}),e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[e.jsx(a,{...t,btnText:"Default",footerTextButton:!1,header:"Default",isCloseButtonShown:!1,size:"sm",type:"default"}),e.jsx(a,{...t,btnText:"Warning",footerTextButton:!1,header:"Warning Type",isCloseButtonShown:!1,size:"sm",type:"warning"})]})]}),e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"Size Medium"}),e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[e.jsx(a,{...t,btnText:"Default",header:"Default",size:"md",type:"default"}),e.jsx(a,{...t,btnText:"Info",header:"Default",size:"md",type:"info"}),e.jsx(a,{...t,btnText:"Subtitle",header:"Subtitle",size:"md",subtitle:"Subtitle",type:"default"}),e.jsx(a,{...t,btnText:"Info Subtitle",header:"Default",size:"md",subtitle:"Subtitle",type:"info"}),e.jsx(D,{...t,btnText:"With Tab",header:"Default",size:"md",type:"default"})]})]}),e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"Size Large"}),e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[e.jsx(a,{...t,btnText:"Default",header:"Default",size:"lg",type:"default"}),e.jsx(a,{...t,btnText:"Info",header:"Default",size:"lg",type:"info"}),e.jsx(a,{...t,btnText:"Subtitle",header:"Subtitle",size:"lg",subtitle:"Subtitle",type:"default"}),e.jsx(a,{...t,btnText:"Info Subtitle",header:"Default",size:"lg",subtitle:"Subtitle",type:"info"}),e.jsx(D,{...t,btnText:"With Tab",header:"Default",size:"lg",type:"default"})]})]}),e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"Size Extra Large"}),e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[e.jsx(a,{...t,btnText:"Default",header:"Default",size:"xl",type:"default"}),e.jsx(a,{...t,btnText:"Info",header:"Default",size:"xl",type:"info"}),e.jsx(a,{...t,btnText:"Subtitle",header:"Subtitle",size:"xl",subtitle:"Subtitle",type:"default"}),e.jsx(a,{...t,btnText:"Info Subtitle",header:"Default",size:"xl",subtitle:"Subtitle",type:"info"}),e.jsx(D,{...t,btnText:"With Tab",header:"Default",size:"xl",type:"default"})]})]}),e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"Close When Click Outside"}),e.jsx("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:e.jsx(a,{...t,closeOnClickOutside:!0,btnText:"Open!",header:"Default"})})]})]})},f={args:{header:"Warning Type",subtitle:void 0,type:"warning"},render:t=>e.jsx(r,{...t})},x={args:{header:"Info Type",subtitle:void 0,type:"info"},render:t=>e.jsx(r,{...t})},g={args:{header:"Subtitle Type",size:"md",subtitle:"This action keeps the workspace available but removes it from the main list."},render:t=>e.jsx(r,{...t})},m={args:{header:"Info Subtitle",size:"md",subtitle:"This action keeps the workspace available but removes it from the main list.",type:"info"},render:t=>e.jsx(r,{...t})},y={args:{header:"Default",showSecondaryHeader:!0,size:"md"},render:t=>e.jsx(r,{...t})},b={render:t=>e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"With Extend"}),e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[e.jsx(a,{...t,btnText:"Small",canExtend:!0,footerTextButton:!1,header:"Default",size:"sm",type:"default"}),e.jsx(a,{...t,btnText:"Medium",canExtend:!0,header:"Default",size:"md",type:"default"}),e.jsx(a,{...t,btnText:"Large",canExtend:!0,header:"Default",size:"lg",type:"default"}),e.jsx(a,{...t,btnText:"Extra Large",canExtend:!0,header:"Default",size:"xl",type:"default"})]})]})},h={args:{size:"lg"},render:t=>e.jsx(r,{...t})};var z,w,C;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <DialogPlayground {...args} />
}`,...(C=(w=c.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var W,E,O;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "grid",
    gap: 32
  }}>
      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>Size Small (Default)</div>
        <div style={{
        display: "flex",
        gap: 16,
        flexWrap: "wrap"
      }}>
          <SummaryDialog {...args} btnText="Default" footerTextButton={false} header="Default" isCloseButtonShown={false} size="sm" type="default" />
          <SummaryDialog {...args} btnText="Warning" footerTextButton={false} header="Warning Type" isCloseButtonShown={false} size="sm" type="warning" />
        </div>
      </div>

      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>Size Medium</div>
        <div style={{
        display: "flex",
        gap: 16,
        flexWrap: "wrap"
      }}>
          <SummaryDialog {...args} btnText="Default" header="Default" size="md" type="default" />
          <SummaryDialog {...args} btnText="Info" header="Default" size="md" type="info" />
          <SummaryDialog {...args} btnText="Subtitle" header="Subtitle" size="md" subtitle="Subtitle" type="default" />
          <SummaryDialog {...args} btnText="Info Subtitle" header="Default" size="md" subtitle="Subtitle" type="info" />
          <SummaryDialogWithTab {...args} btnText="With Tab" header="Default" size="md" type="default" />
        </div>
      </div>

      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>Size Large</div>
        <div style={{
        display: "flex",
        gap: 16,
        flexWrap: "wrap"
      }}>
          <SummaryDialog {...args} btnText="Default" header="Default" size="lg" type="default" />
          <SummaryDialog {...args} btnText="Info" header="Default" size="lg" type="info" />
          <SummaryDialog {...args} btnText="Subtitle" header="Subtitle" size="lg" subtitle="Subtitle" type="default" />
          <SummaryDialog {...args} btnText="Info Subtitle" header="Default" size="lg" subtitle="Subtitle" type="info" />
          <SummaryDialogWithTab {...args} btnText="With Tab" header="Default" size="lg" type="default" />
        </div>
      </div>

      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>Size Extra Large</div>
        <div style={{
        display: "flex",
        gap: 16,
        flexWrap: "wrap"
      }}>
          <SummaryDialog {...args} btnText="Default" header="Default" size="xl" type="default" />
          <SummaryDialog {...args} btnText="Info" header="Default" size="xl" type="info" />
          <SummaryDialog {...args} btnText="Subtitle" header="Subtitle" size="xl" subtitle="Subtitle" type="default" />
          <SummaryDialog {...args} btnText="Info Subtitle" header="Default" size="xl" subtitle="Subtitle" type="info" />
          <SummaryDialogWithTab {...args} btnText="With Tab" header="Default" size="xl" type="default" />
        </div>
      </div>

      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>Close When Click Outside</div>
        <div style={{
        display: "flex",
        gap: 16,
        flexWrap: "wrap"
      }}>
          <SummaryDialog {...args} closeOnClickOutside btnText="Open!" header="Default" />
        </div>
      </div>
    </div>
}`,...(O=(E=p.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var I,k,B;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    header: "Warning Type",
    subtitle: undefined,
    type: "warning"
  },
  render: args => <DialogPlayground {...args} />
}`,...(B=(k=f.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var P,H,F;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    header: "Info Type",
    subtitle: undefined,
    type: "info"
  },
  render: args => <DialogPlayground {...args} />
}`,...(F=(H=x.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var L,A,M;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    header: "Subtitle Type",
    size: "md",
    subtitle: "This action keeps the workspace available but removes it from the main list."
  },
  render: args => <DialogPlayground {...args} />
}`,...(M=(A=g.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var N,_,G;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    header: "Info Subtitle",
    size: "md",
    subtitle: "This action keeps the workspace available but removes it from the main list.",
    type: "info"
  },
  render: args => <DialogPlayground {...args} />
}`,...(G=(_=m.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var Q,R,U;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    header: "Default",
    showSecondaryHeader: true,
    size: "md"
  },
  render: args => <DialogPlayground {...args} />
}`,...(U=(R=y.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var X,q,J;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "grid",
    gap: 12
  }}>
      <div>With Extend</div>
      <div style={{
      display: "flex",
      gap: 16,
      flexWrap: "wrap"
    }}>
        <SummaryDialog {...args} btnText="Small" canExtend footerTextButton={false} header="Default" size="sm" type="default" />
        <SummaryDialog {...args} btnText="Medium" canExtend header="Default" size="md" type="default" />
        <SummaryDialog {...args} btnText="Large" canExtend header="Default" size="lg" type="default" />
        <SummaryDialog {...args} btnText="Extra Large" canExtend header="Default" size="xl" type="default" />
      </div>
    </div>
}`,...(J=(q=b.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,V,Y;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    size: "lg"
  },
  render: args => <DialogPlayground {...args} />
}`,...(Y=(V=h.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};const ze=["Playground","Summary","Warning","Info","Subtitle","InfoSubtitle","WithTab","WithExtend","Large"];export{x as Info,m as InfoSubtitle,h as Large,c as Playground,g as Subtitle,p as Summary,f as Warning,b as WithExtend,y as WithTab,ze as __namedExportsOrder,je as default};
