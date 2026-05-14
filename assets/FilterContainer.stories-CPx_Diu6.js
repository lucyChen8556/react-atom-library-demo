import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as m}from"./index-C7k4LvGd.js";import{T as qe}from"./Tooltip-BD41W_Ht.js";import{c as R}from"./cx-2dOUpm6k.js";import{B as h}from"./Button-CRJgnCCT.js";import{C as He}from"./CheckboxFilter-CxvSnTMt.js";import{D as Ue}from"./DateRange-DMDYaSxb.js";import{F as We}from"./FilterButton-Bln0jzFu.js";import{D as ze,N as Xe}from"./NumberFilter-DtLtYhzM.js";import{P as k}from"./Popover-DOKRedu-.js";import{S as Ke}from"./SelectTagFilter-KAjk9LHi.js";import{S as $e}from"./StringTagFilter-CQ0fXYcm.js";import{P as Qe}from"./plus-iR3Npvqg.js";import"./floating-ui.react-d-2ItNnr.js";import"./index-s2tCW9eu.js";import"./Typography-DDbXw5QJ.js";import"./Checkbox-Bk-8IysC.js";import"./check-DIQmgjSX.js";import"./createLucideIcon-e0PjoWs3.js";import"./SearchBar-BBekaNBv.js";import"./Input-CFBDID0e.js";import"./fieldMessages-B9-hGdj0.js";import"./textValue-C1yidy5v.js";import"./Field-DTqFT2up.js";import"./x-nFuAMi5B.js";import"./search-7DMAlEQT.js";import"./Spinner-ByXhr7nR.js";import"./dateCalendar-CSFEN7rI.js";import"./Menu-MGqqQZhF.js";import"./chevron-down-BWfEgQAQ.js";import"./NumberInput-ws6Jubkf.js";import"./Select-JH9RUJDC.js";import"./index-Cb0LmbZ2.js";import"./TagInput-CSmXTIO7.js";import"./Tag-5HF3mQqu.js";import"./toastStore-91DSA9z6.js";const Me=[{label:"Contains",value:"CONTAINS"},{label:"Begins with",value:"START_WITH"},{label:"Ends with",value:"END_WITH"},{label:"Equals",value:"EQUALS"},{label:"Is null",value:"IS_NULL"},{label:"Is not null",value:"IS_NOT_NULL"}];function G(r,a){return a?{date_range_duration:a.date_range_duration??"",operation:a.operation??(r==="DATE_RANGE_FILTER"?"RANGE":"CONTAINS"),value:[...a.value]}:{date_range_duration:"",operation:r==="DATE_RANGE_FILTER"?"RANGE":"CONTAINS",value:[]}}function Je(r){return r?typeof r=="string"?r:r.text:""}function V(r){return r?typeof r=="string"?r:r.origin??r.text:""}function se(r,a){return r?new Intl.DateTimeFormat(a,{year:"numeric",month:"2-digit",day:"2-digit"}).format(r):""}function Ye(r,a){const i={...a,value:[...a.value]};if(r==="DATE_RANGE_FILTER"){const[t,u]=i.value;return!t&&!u?(i.value=[],i.date_range_duration="",i):(i.operation="RANGE",i.value=[t??u??null,u??t??null],i)}if(r==="NUMERIC"){if(i.value.length===0||i.value.every(t=>t==null||t===""))return i.value=[],i;if(i.operation==="BETWEEN"&&i.value.length===2){const[t,u]=i.value;t!=null&&u!=null&&t>u&&(i.value=[u,t])}return i}return r==="CHARACTER_STRING_FILTER"&&i.operation!=="IS_NULL"&&i.operation!=="IS_NOT_NULL"&&(i.value=i.value.filter(t=>t!=null&&t!=="")),i}function Ze(r){const a=r.operation,i=r.value;return a==="IS_NULL"||a==="IS_NOT_NULL"?!1:a==="BETWEEN"?i.length>0&&(i[0]==null||i[1]==null):i.length>0&&i[0]==null}function _({buttonIcon:r,classes:a,className:i,column:t,controlType:u,defaultChecked:Re=[],defaultDisabled:b=[],defaultFooterText:H,fetchFilter:T,filterData:s,filterType:p="CHECKBOX",handleChange:g,handleDelete:Se,hasBorder:Ee=!0,hasSelectDisplay:Fe=!0,index:S,isFixedHeight:U,isUsePromise:W=!1,label:N,locale:E,maxDate:z,menuList:X,minDate:K,options:Oe=[],placeholder:w,position:Ae="bottom-start",queryMatchOption:y,showDeleteIcon:Ie=!1,showResetButton:D=!1,showSelectAllButton:_e=!0,showToggleIcon:be=!0,tag:we="text",text:n,zIndex:De=199,...je}){var oe,te,le;const[$,j]=m.useState(!1),[L,C]=m.useState(!1),[Q,P]=m.useState(!1),[f,M]=m.useState(Oe),[d,c]=m.useState(G(p,s)),Le=m.useMemo(()=>f.map(o=>({label:o.label,value:o.value??o.label})),[f]),J=(y==null?void 0:y.string)??Me,Y=(y==null?void 0:y.number)??ze,Z=Je(N),x=p==="DATE_RANGE_FILTER"&&((oe=s==null?void 0:s.value)==null?void 0:oe.length)===2,Pe=x?`${Z} : ${se(s==null?void 0:s.value[0],E)} - ${se(s==null?void 0:s.value[1],E)}`:Z,ee=(((te=s==null?void 0:s.value)==null?void 0:te.length)??0)>0,xe=p!=="TAG"||ee||((f==null?void 0:f.length)??0)>0,ne=()=>{c(G(p,s)),P(!1)},re=m.useCallback(async()=>{if(!T)return;const o=await T(t,"");M(o),C(!1)},[t,T]),ie=m.useCallback(async o=>{if(!T)return;if(o.trim().length<3){C(!1);return}const l=await T(t,o);M(l.filter(Be=>!d.value.includes(Be.value))),C(!1)},[t,T,d.value]),ke=()=>{const o=Ye(p,d);if(p==="NUMERIC"){const l=Ze(o);if(P(l),l)return}g==null||g(t,o,V(N),S),j(!1)},ae=()=>{const o={date_range_duration:"",operation:p==="DATE_RANGE_FILTER"?"RANGE":G(p,s).operation,value:[...Re]};c(o),P(!1),p==="DROPDOWN"&&(g==null||g(t,o,V(N),S))},Ge=()=>{c(o=>({...o,value:f.map(l=>l.value??l.label)}))},Ve=m.useMemo(()=>{switch(p){case"CHECKBOX":case"DROPDOWN":return e.jsx(He,{defaultDisabled:b,isFetching:L,isUsePromise:W,onChangeValue:o=>{c(l=>({...l,value:o})),p==="DROPDOWN"&&(g==null||g(t,{...d,value:o},V(N),S))},options:f,placeholder:w??(n==null?void 0:n.search)??"Search",promiseOptions:re,setIsFetching:C,text:{noData:(n==null?void 0:n.noData)??"No Data"},value:d.value});case"DATE_RANGE_FILTER":return e.jsx(Ue,{dateDuration:d.date_range_duration??null,defaultFooterText:H,haveFooter:!0,haveMenu:!0,locale:E,maxDate:z,menuList:X,minDate:K,onChange:o=>c(l=>({...l,value:o})),onDateDurationChange:o=>c(l=>({...l,date_range_duration:o})),value:d.value??[null,null]});case"CHARACTER_STRING_FILTER":return e.jsx($e,{controlType:u??"DEFAULT",disableList:b,isFixedHeight:!!U,onChangeValue:o=>c(l=>({...l,value:o})),onSelectChange:o=>c(l=>({...l,operation:o.value})),placeholder:{input:(n==null?void 0:n.enterMultiple)??"Press enter for multiple value...",select:(n==null?void 0:n.select)??"Select..."},queryOptions:J,selectValue:d.operation,value:d.value});case"NUMERIC":return e.jsx(Xe,{error:(n==null?void 0:n.enterValue)??"This field is required.",isError:Q?"error":"",onChangeValue:o=>c(l=>({...l,value:o})),onSelectChange:o=>c(l=>({...l,operation:o.value})),options:d.operation,placeholder:{input1:(n==null?void 0:n.enterValue)??"no.",input2:(n==null?void 0:n.enterValue)??"no.",select:(n==null?void 0:n.select)??"Select..."},queryOptions:Y,value:d.value});case"TAG":return e.jsx(Ke,{isFetching:L,onChangeValue:o=>c(l=>({...l,value:o})),options:Le,placeholder:w??(n==null?void 0:n.search)??"Search",promiseOptions:ie,setIsFetching:C,text:{input:(n==null?void 0:n.search)??"Enter at least 3 letters to search",noData:(n==null?void 0:n.noData)??"No Data"},value:d.value})}},[t,u,b,H,p,g,S,L,U,W,N,E,z,X,K,Q,Y,f,w,re,ie,J,d,n]);return e.jsx("div",{...je,className:R("oec-filter-container",i,a==null?void 0:a.root),children:e.jsxs(k,{classes:{dropdown:R("oec-filter-container__dropdown",a==null?void 0:a.dropdown)},offset:2,onOpenChange:o=>{j(o),o&&ne()},open:$,position:Ae,zIndex:De,children:[e.jsx(k.Target,{children:r?e.jsx(h,{type:"icon",children:r}):e.jsx(We,{hasBorder:Ee,hasSelect:Fe?ee:!1,label:Pe,onDelete:Se,opened:$,showDeleteIcon:Ie,showToggleIcon:be,tag:x?"none":we,tagNum:x||!((le=s==null?void 0:s.value)!=null&&le.length)?void 0:s.value.length})}),e.jsxs(k.Dropdown,{children:[Ve,xe?e.jsxs("div",{className:R("oec-filter-container__footer",a==null?void 0:a.footer),children:[e.jsxs("div",{className:R("oec-filter-container__footer-left",a==null?void 0:a.footerLeft),children:[p==="CHECKBOX"&&_e&&d.value.length===0?e.jsx(h,{onClick:Ge,variant:"text",children:(n==null?void 0:n.selectAll)??"Select all"}):null,!D&&d.value.length>0?e.jsx(h,{onClick:ae,variant:"text",children:(n==null?void 0:n.clear)??"Clear"}):null,D?e.jsx(h,{onClick:ae,variant:"text",children:(n==null?void 0:n.resetToDefault)??"Reset to default"}):null]}),D?null:e.jsxs("div",{className:R("oec-filter-container__footer-right",a==null?void 0:a.footerRight),children:[e.jsx(h,{onClick:()=>{j(!1),ne()},variant:"outline",children:(n==null?void 0:n.cancel)??"Cancel"}),e.jsx(h,{onClick:ke,children:(n==null?void 0:n.apply)??"Apply"})]})]}):null]})]})})}_.__docgenInfo={description:"",methods:[],displayName:"FilterContainer",props:{buttonIcon:{required:!1,tsType:{name:"ReactNode"},description:""},classes:{required:!1,tsType:{name:"FilterContainerClasses"},description:""},column:{required:!1,tsType:{name:"string"},description:""},controlType:{required:!1,tsType:{name:"string"},description:""},defaultChecked:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},defaultDisabled:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},defaultFooterText:{required:!1,tsType:{name:"string"},description:""},fetchFilter:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  column: string | undefined,
  inputValue: string
) => Promise<CheckboxFilterOption[] | SelectTagFilterOption[]>`,signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"column"},{type:{name:"string"},name:"inputValue"}],return:{name:"Promise",elements:[{name:"union",raw:"CheckboxFilterOption[] | SelectTagFilterOption[]",elements:[{name:"Array",elements:[{name:"CheckboxFilterOption"}],raw:"CheckboxFilterOption[]"},{name:"Array",elements:[{name:"SelectTagFilterOption"}],raw:"SelectTagFilterOption[]"}]}],raw:"Promise<CheckboxFilterOption[] | SelectTagFilterOption[]>"}}},description:""},filterData:{required:!1,tsType:{name:"FilterContainerData"},description:""},filterType:{required:!1,tsType:{name:"union",raw:`| "CHECKBOX"
| "DATE_RANGE_FILTER"
| "CHARACTER_STRING_FILTER"
| "NUMERIC"
| "TAG"
| "DROPDOWN"`,elements:[{name:"literal",value:'"CHECKBOX"'},{name:"literal",value:'"DATE_RANGE_FILTER"'},{name:"literal",value:'"CHARACTER_STRING_FILTER"'},{name:"literal",value:'"NUMERIC"'},{name:"literal",value:'"TAG"'},{name:"literal",value:'"DROPDOWN"'}]},description:"",defaultValue:{value:'"CHECKBOX"',computed:!1}},handleChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  column: string | undefined,
  data: FilterContainerData,
  label?: string,
  index?: number
) => void`,signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"column"},{type:{name:"FilterContainerData"},name:"data"},{type:{name:"string"},name:"label"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},handleDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},hasBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},hasSelectDisplay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},index:{required:!1,tsType:{name:"number"},description:""},isFixedHeight:{required:!1,tsType:{name:"boolean"},description:""},isUsePromise:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"union",raw:"FilterContainerLabelObject | string",elements:[{name:"FilterContainerLabelObject"},{name:"string"}]},description:""},locale:{required:!1,tsType:{name:"string"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},menuList:{required:!1,tsType:{name:"Array",elements:[{name:"DateRangePreset"}],raw:"DateRangePreset[]"},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},options:{required:!1,tsType:{name:"union",raw:"CheckboxFilterOption[] | SelectTagFilterOption[]",elements:[{name:"Array",elements:[{name:"CheckboxFilterOption"}],raw:"CheckboxFilterOption[]"},{name:"Array",elements:[{name:"SelectTagFilterOption"}],raw:"SelectTagFilterOption[]"}]},description:"",defaultValue:{value:"[]",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:"| FloatingSide\n| `${FloatingSide}-${FloatingPlacement}`",elements:[{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},{name:"literal",value:"`${FloatingSide}-${FloatingPlacement}`"}]},description:"",defaultValue:{value:'"bottom-start"',computed:!1}},queryMatchOption:{required:!1,tsType:{name:"FilterContainerQueryOptions"},description:""},showDeleteIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showResetButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showSelectAllButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showToggleIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},tag:{required:!1,tsType:{name:"union",raw:'"none" | "text" | "tag"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"text"'},{name:"literal",value:'"tag"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},text:{required:!1,tsType:{name:"FilterContainerText"},description:""},zIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"199",computed:!1}}},composes:["Omit"]};const q=[{label:"Air",value:"air"},{label:"Ocean",value:"ocean"},{label:"Rail",value:"rail"},{label:"Pending",value:"pending"},{label:"Booked",value:"booked"},{label:"Cancelled",value:"cancelled"}],Ce=[{label:"Air",value:"air",group:"Shipping mode"},{label:"Ocean",value:"ocean",group:"Shipping mode"},{label:"Rail",value:"rail",group:"Shipping mode"},{label:"Pending",value:"pending",group:"Status"},{label:"Booked",value:"booked",group:"Status"},{label:"Cancelled",value:"cancelled",group:"Status"}],B=[{label:"Tokyo",value:"tokyo"},{label:"Taipei",value:"taipei"},{label:"Toronto",value:"toronto"}];function v(r){const[a,i]=m.useState(r.filterData??{operation:"CONTAINS",value:[]});return e.jsxs("div",{style:{display:"grid",gap:8,justifyItems:"start"},children:[e.jsx(_,{...r,filterData:a,handleChange:(t,u)=>i(u)}),e.jsx("div",{style:{fontSize:12,color:"var(--oec-color-on-surface-variant)"},children:JSON.stringify(a)})]})}function en(r){const[a,i]=m.useState(r.filterData??{operation:"CONTAINS",value:[]});return e.jsxs("div",{style:{display:"grid",gap:8,justifyItems:"start"},children:[e.jsx(qe,{content:"Add",children:e.jsx("div",{children:e.jsx(_,{...r,filterData:a,handleChange:(t,u)=>i(u)})})}),e.jsx("div",{style:{fontSize:12,color:"var(--oec-color-on-surface-variant)"},children:JSON.stringify(a)})]})}const Gn={title:"Filters/FilterContainer",component:_,tags:["autodocs"],args:{filterType:"CHECKBOX",filterData:{operation:"CONTAINS",value:[]},hasBorder:!0,label:"Status",options:q,showToggleIcon:!0,tag:"text"},argTypes:{fetchFilter:{control:!1},filterData:{control:!1},menuList:{control:!1},options:{control:!1},queryMatchOption:{control:!1}}},F={render:r=>e.jsx(v,{...r})},O={render:r=>e.jsx(v,{...r})},A={render:r=>e.jsxs("div",{style:{display:"grid",gap:24},children:[e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"Checkbox Filter"}),e.jsx(v,{...r,options:Ce})]}),e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"Checkbox Fetch Filter"}),e.jsx(v,{...r,fetchFilter:async()=>new Promise(a=>{window.setTimeout(()=>a(B),300)}),isUsePromise:!0,options:[]})]}),e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"String Tag Filter"}),e.jsx(v,{...r,filterData:{operation:"CONTAINS",value:[]},filterType:"CHARACTER_STRING_FILTER"})]}),e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"String Tag Filter type No Select"}),e.jsx(v,{...r,controlType:"FIXED_CONDITION",filterData:{operation:"CONTAINS",value:[]},filterType:"CHARACTER_STRING_FILTER"})]}),e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"Date Range Filter"}),e.jsx(v,{...r,filterData:{operation:"RANGE",value:[]},filterType:"DATE_RANGE_FILTER"})]}),e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"Number Filter"}),e.jsx(v,{...r,filterData:{operation:"EQUALS",value:[]},filterType:"NUMERIC"})]}),e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"Select Tag Filter"}),e.jsx(v,{...r,fetchFilter:async(a,i)=>B.filter(t=>t.label.toLowerCase().includes(i.toLowerCase())),filterData:{operation:"CONTAINS",value:[]},filterType:"TAG",options:B})]}),e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"Dropdown Filter"}),e.jsx(v,{...r,filterData:{operation:"CONTAINS",value:[]},filterType:"DROPDOWN",options:q,showResetButton:!0})]}),e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{children:"Dropdown Filter With Icon"}),e.jsx(en,{...r,buttonIcon:e.jsx(Qe,{size:16,strokeWidth:2.25}),filterData:{operation:"CONTAINS",value:[]},filterType:"DROPDOWN",options:q,showResetButton:!0})]})]})},I={render:r=>e.jsxs("div",{style:{minHeight:500,maxHeight:500,position:"relative"},children:[e.jsx("div",{style:{position:"fixed",top:24,right:24,zIndex:10,width:360,maxHeight:420,borderRadius:8,background:"var(--oec-color-surface)",boxShadow:"var(--oec-shadow-sm)"},children:e.jsxs("div",{style:{height:"100%",overflow:"auto",padding:16},children:[e.jsx("div",{style:{marginBottom:16,color:"var(--oec-color-on-surface-variant)"},children:"Scroll inside this fixed panel and test the opened filter popover."}),e.jsx(v,{...r,filterData:{operation:"CONTAINS",value:[]},filterType:"CHARACTER_STRING_FILTER",position:"bottom",options:Ce}),e.jsx("div",{style:{height:16}}),Array.from({length:4}).map((a,i)=>e.jsxs("div",{style:{height:56,borderBottom:"1px solid var(--oec-color-outline-variant)"},children:["Panel Row ",i+1]},i))]})}),e.jsx("div",{style:{paddingTop:120,color:"var(--oec-color-on-surface-variant)"},children:Array.from({length:15}).map((a,i)=>e.jsxs("div",{style:{height:56,borderBottom:"1px solid var(--oec-color-outline-variant)"},children:["Background Row ",i+1]},i))})]})};var de,ue,pe;F.parameters={...F.parameters,docs:{...(de=F.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: args => <ControlledPreview {...args} />
}`,...(pe=(ue=F.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ce,me,ve;O.parameters={...O.parameters,docs:{...(ce=O.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: args => <ControlledPreview {...args} />
}`,...(ve=(me=O.parameters)==null?void 0:me.docs)==null?void 0:ve.source}}};var ge,fe,Te;A.parameters={...A.parameters,docs:{...(ge=A.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "grid",
    gap: 24
  }}>
      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>Checkbox Filter</div>
        <ControlledPreview {...args} options={groupedOptions} />
      </div>

      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>Checkbox Fetch Filter</div>
        <ControlledPreview {...args} fetchFilter={async () => new Promise(resolve => {
        window.setTimeout(() => resolve(asyncOptions), 300);
      })} isUsePromise options={[]} />
      </div>

      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>String Tag Filter</div>
        <ControlledPreview {...args} filterData={{
        operation: "CONTAINS",
        value: []
      }} filterType="CHARACTER_STRING_FILTER" />
      </div>

      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>String Tag Filter type No Select</div>
        <ControlledPreview {...args} controlType="FIXED_CONDITION" filterData={{
        operation: "CONTAINS",
        value: []
      }} filterType="CHARACTER_STRING_FILTER" />
      </div>

      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>Date Range Filter</div>
        <ControlledPreview {...args} filterData={{
        operation: "RANGE",
        value: []
      }} filterType="DATE_RANGE_FILTER" />
      </div>

      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>Number Filter</div>
        <ControlledPreview {...args} filterData={{
        operation: "EQUALS",
        value: []
      }} filterType="NUMERIC" />
      </div>

      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>Select Tag Filter</div>
        <ControlledPreview {...args} fetchFilter={async (column, inputValue) => asyncOptions.filter(option => option.label.toLowerCase().includes(inputValue.toLowerCase()))} filterData={{
        operation: "CONTAINS",
        value: []
      }} filterType="TAG" options={asyncOptions} />
      </div>

      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>Dropdown Filter</div>
        <ControlledPreview {...args} filterData={{
        operation: "CONTAINS",
        value: []
      }} filterType="DROPDOWN" options={baseOptions} showResetButton />
      </div>

      <div style={{
      display: "grid",
      gap: 12
    }}>
        <div>Dropdown Filter With Icon</div>
        <TriggerOnlyPreview {...args} buttonIcon={<Plus size={16} strokeWidth={2.25} />} filterData={{
        operation: "CONTAINS",
        value: []
      }} filterType="DROPDOWN" options={baseOptions} showResetButton />
      </div>
    </div>
}`,...(Te=(fe=A.parameters)==null?void 0:fe.docs)==null?void 0:Te.source}}};var ye,he,Ne;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: args => <div style={{
    minHeight: 500,
    maxHeight: 500,
    position: "relative"
  }}>
      <div style={{
      position: "fixed",
      top: 24,
      right: 24,
      zIndex: 10,
      width: 360,
      maxHeight: 420,
      borderRadius: 8,
      background: "var(--oec-color-surface)",
      boxShadow: "var(--oec-shadow-sm)"
    }}>
        <div style={{
        height: "100%",
        overflow: "auto",
        padding: 16
      }}>
          <div style={{
          marginBottom: 16,
          color: "var(--oec-color-on-surface-variant)"
        }}>
            Scroll inside this fixed panel and test the opened filter popover.
          </div>
          <ControlledPreview {...args} filterData={{
          operation: "CONTAINS",
          value: []
        }} filterType="CHARACTER_STRING_FILTER" position="bottom" options={groupedOptions} />
          <div style={{
          height: 16
        }} />
          {Array.from({
          length: 4
        }).map((_, index) => <div key={index} style={{
          height: 56,
          borderBottom: "1px solid var(--oec-color-outline-variant)"
        }}>
              Panel Row {index + 1}
            </div>)}
        </div>
      </div>

      <div style={{
      paddingTop: 120,
      color: "var(--oec-color-on-surface-variant)"
    }}>
        {Array.from({
        length: 15
      }).map((_, index) => <div key={index} style={{
        height: 56,
        borderBottom: "1px solid var(--oec-color-outline-variant)"
      }}>
            Background Row {index + 1}
          </div>)}
      </div>
    </div>
}`,...(Ne=(he=I.parameters)==null?void 0:he.docs)==null?void 0:Ne.source}}};const Vn=["Playground","Default","Summary","FixedViewportScroll"];export{O as Default,I as FixedViewportScroll,F as Playground,A as Summary,Vn as __namedExportsOrder,Gn as default};
