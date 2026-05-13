import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-C7k4LvGd.js";import{S as r,M as C,A as Le}from"./Select-JH9RUJDC.js";import"./floating-ui.react-d-2ItNnr.js";import"./index-s2tCW9eu.js";import"./cx-2dOUpm6k.js";import"./fieldMessages-B9-hGdj0.js";import"./Field-DTqFT2up.js";import"./index-Cb0LmbZ2.js";import"./x-nFuAMi5B.js";import"./createLucideIcon-e0PjoWs3.js";import"./Checkbox-Bk-8IysC.js";import"./check-DIQmgjSX.js";const qe=[{label:"S",width:320,height:260},{label:"M",width:360,height:420},{label:"L",width:480,height:560}];function I({children:t,description:o,height:n=420,maxHeight:d,minHeight:l=220,minWidth:c=260,note:R,overflow:Ve="auto",presets:Ae=qe,style:V,title:A,width:u=360}){const N=s.useRef(null),[p,W]=s.useState({width:u,height:n}),[L,q]=s.useState({width:u,height:n});s.useEffect(()=>{W({width:u,height:n}),q({width:u,height:n})},[n,u]),s.useEffect(()=>{if(!N.current||typeof ResizeObserver>"u")return;const i=new ResizeObserver(([B])=>{const E=Math.round(B.contentRect.width),D=Math.round(B.contentRect.height);q(z=>z.width===E&&z.height===D?z:{width:E,height:D})});return i.observe(N.current),()=>i.disconnect()},[]);const We=s.useMemo(()=>({width:p.width,minWidth:c,height:p.height,minHeight:l,maxHeight:d,resize:"both",overflow:"hidden",border:"1px dashed var(--oec-color-border)",borderRadius:16,background:"linear-gradient(180deg, color-mix(in srgb, var(--oec-color-surface) 96%, white), var(--oec-color-bg))",boxSizing:"border-box",display:"grid",gridTemplateRows:"auto 1fr auto",...V}),[p.height,p.width,d,l,c,V]);return e.jsxs("div",{ref:N,style:We,children:[e.jsxs("div",{style:{position:"relative",zIndex:0,display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:12,padding:"16px 16px 12px"},children:[e.jsxs("div",{style:{minWidth:0},children:[A&&e.jsx("div",{style:{color:"var(--oec-color-text)",fontSize:14,lineHeight:"20px",fontWeight:700},children:A}),o&&e.jsx("div",{style:{marginTop:4,color:"var(--oec-color-outline)",fontSize:12,lineHeight:"18px"},children:o})]}),e.jsxs("div",{style:{flexShrink:0,display:"inline-flex",alignItems:"center",gap:8,color:"var(--oec-color-outline)",fontSize:11,lineHeight:"16px"},children:[e.jsxs("span",{children:[L.width," x ",L.height]}),e.jsx("div",{style:{display:"inline-flex",gap:6},children:Ae.map(i=>e.jsx("button",{onClick:()=>W({width:i.width,height:i.height}),style:{minWidth:28,height:24,padding:"0 8px",border:"1px solid var(--oec-color-border)",borderRadius:999,background:"var(--oec-color-surface)",color:"var(--oec-color-text)",fontSize:11,lineHeight:"16px",cursor:"pointer"},type:"button",children:i.label},i.label))})]})]}),e.jsx("div",{style:{position:"relative",zIndex:1,minHeight:0,overflow:Ve,padding:"0 16px 16px"},children:t}),R&&e.jsx("div",{style:{position:"relative",zIndex:0,borderTop:"1px solid color-mix(in srgb, var(--oec-color-border) 72%, transparent)",padding:"10px 16px 12px",color:"var(--oec-color-outline)",fontSize:11,lineHeight:"16px"},children:R})]})}I.__docgenInfo={description:"",methods:[],displayName:"ResizablePreview",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"420",computed:!1}},maxHeight:{required:!1,tsType:{name:"number"},description:""},minHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"220",computed:!1}},minWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"260",computed:!1}},note:{required:!1,tsType:{name:"ReactNode"},description:""},overflow:{required:!1,tsType:{name:'CSSProperties["overflow"]',raw:'CSSProperties["overflow"]'},description:"",defaultValue:{value:'"auto"',computed:!1}},presets:{required:!1,tsType:{name:"Array",elements:[{name:"ResizablePreviewPreset"}],raw:"ResizablePreviewPreset[]"},description:"",defaultValue:{value:`[
  { label: "S", width: 320, height: 260 },
  { label: "M", width: 360, height: 420 },
  { label: "L", width: 480, height: 560 }
]`,computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""},title:{required:!1,tsType:{name:"ReactNode"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"360",computed:!1}}}};const a=[{value:"taipei",label:"Taipei"},{value:"tokyo",label:"Tokyo"},{value:"seoul",label:"Seoul"},{value:"singapore",label:"Singapore"},{value:"sydney",label:"Sydney"}],k=[...a,{value:"bangkok",label:"Bangkok"},{value:"berlin",label:"Berlin"},{value:"london",label:"London"},{value:"paris",label:"Paris"},{value:"new-york",label:"New York"},{value:"san-francisco",label:"San Francisco"},{value:"osaka",label:"Osaka"}],Be=[...a,{value:"bangkok",label:"Bangkok"},{value:"berlin",label:"Berlin"},{value:"london",label:"London"}];function Ee(t){const[o,n]=s.useState(a[0]);return e.jsx("div",{style:{width:320},children:e.jsx(r,{...t,value:o,onChange:n})})}function Re(t){const[o,n]=s.useState([a[0]]);return e.jsx("div",{style:{width:360},children:e.jsx(C,{...t,value:o,onChange:n})})}function De(t){const[o,n]=s.useState(null),d=s.useCallback(async l=>(await new Promise(c=>window.setTimeout(c,500)),Be.filter(c=>c.label.toLowerCase().includes(l.toLowerCase()))),[]);return e.jsx("div",{style:{width:360},children:e.jsx(Le,{...t,cacheOptions:!0,defaultOptions:!0,loadOptions:d,value:o,onChange:l=>{n(Array.isArray(l)?null:l)}})})}function He(t){const[o,n]=s.useState(320);return e.jsxs("div",{style:{display:"grid",gap:12,width:"fit-content"},children:[e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:12,color:"var(--oec-color-text)"},children:[e.jsx("span",{style:{fontSize:14},children:"Width"}),e.jsx("input",{max:640,min:160,onChange:d=>n(Number(d.target.value)),style:{width:160},type:"range",value:o}),e.jsxs("span",{style:{fontSize:14,minWidth:48},children:[o,"px"]})]}),e.jsx("div",{style:{width:o},children:e.jsx(r,{...t})})]})}function _e(t){const o={display:"flex",flexDirection:"column",gap:20,minHeight:"100%"};return e.jsxs("div",{style:{display:"flex",gap:20,flexWrap:"wrap"},children:[e.jsx(I,{description:"Resize this panel. With menuPortalTarget=null, auto placement should use this panel's visible space.",note:"This lab uses an intentionally long option list so internal menu scrolling is easy to verify. Inline mode should prefer opening downward, then fall back to menu scrolling or upward placement only when space gets tight.",title:"Inline Boundary",children:e.jsxs("div",{style:o,children:[e.jsx("div",{style:{width:320},children:e.jsx(r,{...t,bottomMessage:"Top case: auto should open downward when there is room.",label:"Top select",menuPortalTarget:null})}),e.jsx("div",{style:{marginTop:"auto",width:320},children:e.jsx(r,{...t,bottomMessage:"Bottom case: auto should flip upward near the lower edge.",label:"Bottom select",menuPortalTarget:null})})]})}),e.jsx(I,{description:"This panel is only a trigger layout aid. With menuPortalTarget=body, the menu is positioned against the page, not clipped by this surface.",note:"This lab also uses a long option list so page-level portal behavior and internal menu scrolling are easier to inspect.",title:"Body Portal",children:e.jsxs("div",{style:o,children:[e.jsx("div",{style:{width:320},children:e.jsx(r,{...t,bottomMessage:"Top case: auto should open downward when there is room.",label:"Top select",menuPortalTarget:"body",options:k})}),e.jsx("div",{style:{marginTop:"auto",width:320},children:e.jsx(r,{...t,bottomMessage:"Bottom case: auto should flip upward near the lower edge.",label:"Bottom select",menuPortalTarget:"body",options:k})})]})})]})}const nt={title:"Forms/Select",component:r,tags:["autodocs"],args:{label:"City",options:a,placeholder:"Select a city",bottomMessage:"Pick the city closest to your workspace.",selectSize:"sm",state:"default",disabled:!1,required:!1,clearable:!0,searchable:!0,menuPlacement:"auto"},argTypes:{label:{control:"text"},placeholder:{control:"text"},bottomMessage:{control:"text"},description:{control:"text"},error:{control:"boolean"},errorMessage:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},clearable:{control:"boolean"},searchable:{control:"boolean"},menuPlacement:{control:"inline-radio",options:["auto","top","bottom"]},selectSize:{control:"inline-radio",options:["sm","md"]},state:{control:"inline-radio",options:["default","invalid","success"]}}},m={render:t=>e.jsx(Ee,{...t})},g={},h={args:{bottomMessage:"You can choose up to three cities.",maxSelectedNum:3},render:t=>e.jsx(Re,{...t})},b={args:{bottomMessage:"Results are loaded as you type.",noOptionsMessage:t=>t?`No city matching "${t}".`:"No cities found."},render:t=>e.jsx(De,{...t})},y={args:{error:!0,errorMessage:"Choose a city before continuing.",value:null}},x={args:{disabled:!0,value:a[0]}},v={args:{value:a[0]},render:t=>e.jsx(He,{...t})},S={args:{bottomMessage:"A third option is disabled once the limit is reached.",maxSelectedNum:2},render:t=>e.jsx(Re,{...t})},f={args:{options:[],noOptionsMessage:"No cities available."}},w={args:{menuPortalTarget:"body",bottomMessage:"Menu is portaled to document.body."}},P={args:{bottomMessage:"Options can render custom content while keeping the built-in listbox behavior."},render:t=>e.jsx("div",{style:{width:360},children:e.jsx(r,{...t,options:k,renderOption:(o,n)=>e.jsxs("div",{style:{display:"grid",gap:2,width:"100%"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[e.jsx("span",{style:{fontWeight:n.selected?600:500},children:o.label}),e.jsx("span",{style:{fontSize:12,color:"var(--oec-color-outline)"},children:String(o.value).toUpperCase()})]}),e.jsx("span",{style:{fontSize:12,color:"var(--oec-color-outline)"},children:n.active?"Active option":n.disabled?"Disabled option":n.selected?"Selected option":"Custom option content"})]})})})},j={args:{bottomMessage:"Selected value, tags, and indicator can also be customized."},render:t=>e.jsxs("div",{style:{display:"grid",gap:24,width:360},children:[e.jsx(r,{...t,defaultValue:a[0],renderIndicator:({open:o})=>e.jsx("span",{style:{fontSize:12,fontWeight:600,color:"var(--oec-color-outline)"},children:o?"LESS":"MORE"}),renderValue:o=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,minWidth:0},children:[e.jsx("span",{style:{width:8,height:8,borderRadius:999,background:"var(--oec-color-primary)",flexShrink:0}}),e.jsx("span",{children:o.label})]})}),e.jsx(C,{...t,defaultValue:[a[0],a[1]],renderTag:o=>e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[e.jsx("span",{style:{width:6,height:6,borderRadius:999,background:"currentColor",opacity:.7}}),e.jsx("span",{children:o.label})]})}),e.jsx(C,{...t,defaultValue:[a[0],a[1]],renderValue:o=>o.label,renderTag:o=>o.label})]})},M={args:{bottomMessage:"Multi select can render selected content as inline text, not only chips."},render:t=>e.jsx("div",{style:{width:360},children:e.jsx(C,{...t,defaultValue:[a[0],a[1],a[2]],renderSelectedValues:o=>e.jsx("span",{style:{color:"var(--oec-color-text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:o.map(n=>n.label).join(", ")})})})},T={args:{menuPlacement:"top",bottomMessage:"Menu opens upward from the control."}},O={name:"Auto Placement Lab",args:{menuPlacement:"auto",menuPortalTarget:"body",bottomMessage:void 0},parameters:{layout:"padded"},render:t=>e.jsx(_e,{...t})};var H,_,U;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <SelectPlayground {...args as SelectProps} />
}`,...(U=(_=m.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var F,Y,$;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...($=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var G,J,K;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    bottomMessage: "You can choose up to three cities.",
    maxSelectedNum: 3
  },
  render: args => <MultiSelectPlayground {...args as MultiSelectProps} />
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    bottomMessage: "Results are loaded as you type.",
    noOptionsMessage: inputValue => inputValue ? \`No city matching "\${inputValue}".\` : "No cities found."
  },
  render: args => <AsyncSelectPlayground {...args as Omit<AsyncSelectProps, "loadOptions">} />
}`,...(Z=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,oe;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    error: true,
    errorMessage: "Choose a city before continuing.",
    value: null
  }
}`,...(oe=(te=y.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,ae,se;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: OPTIONS[0]
  }
}`,...(se=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var re,le,ie;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    value: OPTIONS[0]
  },
  render: args => <WidthPlayground {...args as SelectProps} />
}`,...(ie=(le=v.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var de,ce,ue;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    bottomMessage: "A third option is disabled once the limit is reached.",
    maxSelectedNum: 2
  },
  render: args => <MultiSelectPlayground {...args as MultiSelectProps} />
}`,...(ue=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var pe,me,ge;f.parameters={...f.parameters,docs:{...(pe=f.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    options: [],
    noOptionsMessage: "No cities available."
  }
}`,...(ge=(me=f.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var he,be,ye;w.parameters={...w.parameters,docs:{...(he=w.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    menuPortalTarget: "body",
    bottomMessage: "Menu is portaled to document.body."
  }
}`,...(ye=(be=w.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var xe,ve,Se;P.parameters={...P.parameters,docs:{...(xe=P.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    bottomMessage: "Options can render custom content while keeping the built-in listbox behavior."
  },
  render: args => <div style={{
    width: 360
  }}>
      <Select {...args as SelectProps} options={LAB_OPTIONS} renderOption={(option, state) => <div style={{
      display: "grid",
      gap: 2,
      width: "100%"
    }}>
            <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12
      }}>
              <span style={{
          fontWeight: state.selected ? 600 : 500
        }}>
                {option.label}
              </span>
              <span style={{
          fontSize: 12,
          color: "var(--oec-color-outline)"
        }}>
                {String(option.value).toUpperCase()}
              </span>
            </div>
            <span style={{
        fontSize: 12,
        color: "var(--oec-color-outline)"
      }}>
              {state.active ? "Active option" : state.disabled ? "Disabled option" : state.selected ? "Selected option" : "Custom option content"}
            </span>
          </div>} />
    </div>
}`,...(Se=(ve=P.parameters)==null?void 0:ve.docs)==null?void 0:Se.source}}};var fe,we,Pe;j.parameters={...j.parameters,docs:{...(fe=j.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    bottomMessage: "Selected value, tags, and indicator can also be customized."
  },
  render: args => <div style={{
    display: "grid",
    gap: 24,
    width: 360
  }}>
      <Select {...args as SelectProps} defaultValue={OPTIONS[0]} renderIndicator={({
      open
    }) => <span style={{
      fontSize: 12,
      fontWeight: 600,
      color: "var(--oec-color-outline)"
    }}>
            {open ? "LESS" : "MORE"}
          </span>} renderValue={option => <div style={{
      display: "flex",
      alignItems: "center",
      gap: 8,
      minWidth: 0
    }}>
            <span style={{
        width: 8,
        height: 8,
        borderRadius: 999,
        background: "var(--oec-color-primary)",
        flexShrink: 0
      }} />
            <span>{option.label}</span>
          </div>} />

      <MultiSelect {...args as MultiSelectProps} defaultValue={[OPTIONS[0], OPTIONS[1]]} renderTag={option => <span style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }}>
            <span style={{
        width: 6,
        height: 6,
        borderRadius: 999,
        background: "currentColor",
        opacity: 0.7
      }} />
            <span>{option.label}</span>
          </span>} />

      <MultiSelect {...args as MultiSelectProps} defaultValue={[OPTIONS[0], OPTIONS[1]]} renderValue={option => option.label} renderTag={option => option.label} />
    </div>
}`,...(Pe=(we=j.parameters)==null?void 0:we.docs)==null?void 0:Pe.source}}};var je,Me,Te;M.parameters={...M.parameters,docs:{...(je=M.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    bottomMessage: "Multi select can render selected content as inline text, not only chips."
  },
  render: args => <div style={{
    width: 360
  }}>
      <MultiSelect {...args as MultiSelectProps} defaultValue={[OPTIONS[0], OPTIONS[1], OPTIONS[2]]} renderSelectedValues={options => <span style={{
      color: "var(--oec-color-text)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }}>
            {options.map(option => option.label).join(", ")}
          </span>} />
    </div>
}`,...(Te=(Me=M.parameters)==null?void 0:Me.docs)==null?void 0:Te.source}}};var Oe,Ce,Ne;T.parameters={...T.parameters,docs:{...(Oe=T.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    menuPlacement: "top",
    bottomMessage: "Menu opens upward from the control."
  }
}`,...(Ne=(Ce=T.parameters)==null?void 0:Ce.docs)==null?void 0:Ne.source}}};var ze,Ie,ke;O.parameters={...O.parameters,docs:{...(ze=O.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: "Auto Placement Lab",
  args: {
    menuPlacement: "auto",
    menuPortalTarget: "body",
    bottomMessage: undefined
  },
  parameters: {
    layout: "padded"
  },
  render: args => <AutoPlacementLab {...args as SelectProps} />
}`,...(ke=(Ie=O.parameters)==null?void 0:Ie.docs)==null?void 0:ke.source}}};const at=["Playground","Default","Multi","Async","Invalid","Disabled","WithWidth","MaxSelected","NoOptions","BodyPortal","CustomOptionContent","CustomControlContent","CustomSelectedValues","OpenUpward","AutoPlacementLabStory"];export{b as Async,O as AutoPlacementLabStory,w as BodyPortal,j as CustomControlContent,P as CustomOptionContent,M as CustomSelectedValues,g as Default,x as Disabled,y as Invalid,S as MaxSelected,h as Multi,f as NoOptions,T as OpenUpward,m as Playground,v as WithWidth,at as __namedExportsOrder,nt as default};
