import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-C7k4LvGd.js";import{B as o}from"./Button-CRJgnCCT.js";import{D as h,a as x,b as K}from"./Dialog-DrIGME5Y.js";import"./cx-2dOUpm6k.js";import"./Modal-CTpPKqbm.js";import"./index-s2tCW9eu.js";import"./index-Cb0LmbZ2.js";import"./Tooltip-BD41W_Ht.js";import"./floating-ui.react-d-2ItNnr.js";import"./Typography-DDbXw5QJ.js";import"./circle-question-mark-5mlb1FzF.js";import"./createLucideIcon-e0PjoWs3.js";import"./circle-alert-C05QPBuZ.js";import"./x-nFuAMi5B.js";function l({classes:a,content:r="Changes that you made will not be saved.",header:s="Leave page",isKeep:i=!0,isOpen:p=!1,onClick:n,text:t}){return!i&&!p?null:e.jsx(h,{className:"oec-leave-info-dialog",classes:a==null?void 0:a.dialog,closeOnEscape:!1,closeOnOverlayClick:!1,footer:e.jsx(x,{children:e.jsxs(K,{children:[e.jsx(o,{onClick:()=>n==null?void 0:n("cancel"),variant:"outline",children:(t==null?void 0:t.stay)??"Stay"}),e.jsx(o,{color:"error",onClick:()=>n==null?void 0:n("leave"),children:(t==null?void 0:t.leave)??"Leave"})]})}),onOpenChange:()=>{},open:p,title:s,type:"warning",withCloseButton:!1,children:e.jsx("div",{children:r})})}l.__docgenInfo={description:"",methods:[],displayName:"LeaveInfoDialog",props:{classes:{required:!1,tsType:{name:"LeaveInfoDialogClasses"},description:""},content:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:'"Changes that you made will not be saved."',computed:!1}},header:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:'"Leave page"',computed:!1}},isKeep:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:'(type: "cancel" | "leave") => void',signature:{arguments:[{type:{name:"union",raw:'"cancel" | "leave"',elements:[{name:"literal",value:'"cancel"'},{name:"literal",value:'"leave"'}]},name:"type"}],return:{name:"void"}}},description:""},text:{required:!1,tsType:{name:"LeaveInfoDialogText"},description:""}}};function j(a){const[r,s]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>s(!0),children:"Open leave dialog"}),e.jsx(l,{...a,isOpen:r,onClick:()=>{s(!1)}})]})}const M={title:"Atoms/LeaveInfoDialog",component:l,tags:["autodocs"],args:{content:"Changes that you made will not be saved.",header:"Leave page",isKeep:!0,isOpen:!1},argTypes:{onClick:{control:!1}}},d={render:a=>e.jsx(j,{...a})},u={render:a=>{const r=()=>{const[s,i]=c.useState(!1),[p,n]=c.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[e.jsx(o,{onClick:()=>i(!0),children:"keep is true"}),e.jsx(o,{onClick:()=>n(!0),children:"keep is false"}),e.jsx(l,{...a,isKeep:!0,isOpen:s,onClick:()=>i(!1)}),e.jsx(l,{...a,isKeep:!1,isOpen:p,onClick:()=>n(!1)})]})};return e.jsxs("div",{style:{display:"grid",gap:16},children:[e.jsx("div",{children:"isKeep"}),e.jsx(r,{})]})}};var m,f,v;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <InteractiveLeaveInfoDialog {...args} />
}`,...(v=(f=d.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var g,y,O;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const KeepMountedExample = () => {
      const [keepOpen, setKeepOpen] = useState(false);
      const [notKeepOpen, setNotKeepOpen] = useState(false);
      return <div style={{
        display: "flex",
        gap: 12,
        flexWrap: "wrap"
      }}>
          <Button onClick={() => setKeepOpen(true)}>keep is true</Button>
          <Button onClick={() => setNotKeepOpen(true)}>keep is false</Button>
          <LeaveInfoDialog {...args} isKeep isOpen={keepOpen} onClick={() => setKeepOpen(false)} />
          <LeaveInfoDialog {...args} isKeep={false} isOpen={notKeepOpen} onClick={() => setNotKeepOpen(false)} />
        </div>;
    };
    return <div style={{
      display: "grid",
      gap: 16
    }}>
        <div>isKeep</div>
        <KeepMountedExample />
      </div>;
  }
}`,...(O=(y=u.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};const R=["Default","Summary"];export{d as Default,u as Summary,R as __namedExportsOrder,M as default};
