import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as b}from"./index-C7k4LvGd.js";import{M as c}from"./Menu-MGqqQZhF.js";import"./cx-2dOUpm6k.js";import"./check-DIQmgjSX.js";import"./createLucideIcon-e0PjoWs3.js";const d=[{label:"Edit",value:"edit"},{label:"Duplicate",description:"Create a second copy with the same configuration.",value:"duplicate"},{disabled:!0,label:"Archive",value:"archive"}];function C(){const[t,n]=b.useState(null);return e.jsx("div",{style:{width:320},children:e.jsx(c,{onSelect:o=>n(o.value),options:d,selectedValue:t})})}function M(){const[t,n]=b.useState(["edit"]);return e.jsx("div",{style:{width:320},children:e.jsx(c,{multiple:!0,onSelect:o=>n(l=>l.includes(o.value)?l.filter(z=>z!==o.value):[...l,o.value]),options:d,selectedValue:t,showCheckbox:!0})})}function O(){return e.jsx(C,{})}const W={title:"Atoms/Menu",component:O,tags:["autodocs"]},s={render:()=>e.jsx(C,{})},r={render:()=>e.jsx(M,{})},i={render:()=>e.jsx("div",{style:{width:320},children:e.jsx(c,{onSelect:()=>{},options:d,renderOption:(t,n)=>e.jsxs("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between",gap:12},children:[e.jsxs("div",{style:{display:"grid",gap:2,minWidth:0},children:[e.jsx("span",{children:t.label}),t.description?e.jsx("span",{style:{color:n.selected?"var(--oec-color-primary)":"var(--oec-color-outline)",fontSize:"var(--oec-font-size-sm)"},children:t.description}):null]}),e.jsx("span",{style:{color:n.disabled?"var(--oec-color-outline)":"var(--oec-color-text-secondary)",fontSize:"var(--oec-font-size-sm)"},children:"⌘K"})]})})})},a={render:()=>e.jsx("div",{style:{width:320},children:e.jsx(c,{emptyMessage:"No data",options:[]})})};var p,u,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <SinglePreview />
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var v,h,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <CheckboxPreview />
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,f,S;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320
  }}>
      <Menu onSelect={() => undefined} options={OPTIONS} renderOption={(option, state) => <div style={{
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12
    }}>
            <div style={{
        display: "grid",
        gap: 2,
        minWidth: 0
      }}>
              <span>{option.label}</span>
              {option.description ? <span style={{
          color: state.selected ? "var(--oec-color-primary)" : "var(--oec-color-outline)",
          fontSize: "var(--oec-font-size-sm)"
        }}>
                  {option.description}
                </span> : null}
            </div>
            <span style={{
        color: state.disabled ? "var(--oec-color-outline)" : "var(--oec-color-text-secondary)",
        fontSize: "var(--oec-font-size-sm)"
      }}>
              ⌘K
            </span>
          </div>} />
    </div>
}`,...(S=(f=i.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var j,g,w;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320
  }}>
      <Menu emptyMessage="No data" options={[]} />
    </div>
}`,...(w=(g=a.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const D=["Default","WithCheckbox","CustomContent","Empty"];export{i as CustomContent,s as Default,a as Empty,r as WithCheckbox,D as __namedExportsOrder,W as default};
