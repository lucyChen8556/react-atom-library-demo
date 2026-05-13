import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{c as u}from"./cx-2dOUpm6k.js";import{N as I}from"./NumberInput-ws6Jubkf.js";import{S as O}from"./Select-JH9RUJDC.js";const q=[{label:"Is equal to",value:"EQUALS"},{label:"Is greater than",value:"GREATER_THAN"},{label:"Is greater than or equal to",value:"GREATER_EQUAL_THAN"},{label:"Is less than",value:"LESS_THAN"},{label:"Is less than or equal to",value:"LESS_EQUAL_THAN"},{label:"Is between",value:"BETWEEN"},{label:"Is null",value:"IS_NULL"},{label:"Is not null",value:"IS_NOT_NULL"}];function o(l){if(l===""||l==null)return null;const i=Number(l);return Number.isNaN(i)?null:i}function f(l){return l==null||l===""}function G({allowDecimal:l=!0,className:i,classes:e,decimalScale:A,error:S,isError:p,onChangeValue:E,onSelectChange:c,options:R,placeholder:a,queryOptions:N=q,value:t,text:_,...H}){const d=N.find(n=>n.value===R)??N[0],T=d.value,s=T==="IS_NULL"||T==="IS_NOT_NULL",L=T==="BETWEEN",b=t.length===0||t[0]===null&&t[1]===null,v=s?"null":t[0],g=s?"":(a==null?void 0:a.input1)??"no.",U=(n,w)=>{const m=[...t];if(m[w]=o(n),L){E([o(m[0]??null),o(m[1]??null)]);return}E([o(m[0]??null)])},Q=!!(!b&&p&&f(t[0])),y=!!(!b&&p&&f(t[1]));return r.jsxs("div",{...H,className:u("oec-number-filter",i,e==null?void 0:e.root),children:[r.jsx(O,{className:u("oec-number-filter__select",e==null?void 0:e.select),clearable:!1,onChange:n=>{n&&(c(n),(n.value==="IS_NULL"||n.value==="IS_NOT_NULL")&&E([null]))},options:N,placeholder:(a==null?void 0:a.select)??"Select...",selectSize:"sm",value:d}),r.jsx(I,{allowDecimal:l,className:u("oec-number-filter__input",L&&"oec-number-filter__input--between",e==null?void 0:e.input),decimalScale:A,disabled:s,error:Q,errorMessage:S??"This field is required.",inputSize:"sm",onChange:n=>U(n.target.value,0),placeholder:g,value:v==null?"":String(v)}),L?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:u("oec-number-filter__to",e==null?void 0:e.to),children:(_==null?void 0:_.to)??"to"}),r.jsx(I,{allowDecimal:l,className:u("oec-number-filter__input","oec-number-filter__input--between",e==null?void 0:e.betweenInput),decimalScale:A,error:y,errorMessage:S??"This field is required.",inputSize:"sm",onChange:n=>U(n.target.value,1),placeholder:(a==null?void 0:a.input2)??"no.",value:t[1]==null?"":String(t[1])})]}):null]})}G.__docgenInfo={description:"",methods:[],displayName:"NumberFilter",props:{allowDecimal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},classes:{required:!1,tsType:{name:"NumberFilterClasses"},description:""},decimalScale:{required:!1,tsType:{name:"number"},description:""},error:{required:!1,tsType:{name:"string"},description:""},isError:{required:!1,tsType:{name:"string"},description:""},onChangeValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: (number | null)[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"unknown"}],raw:"(number | null)[]"},name:"data"}],return:{name:"void"}}},description:""},onSelectChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: SelectOption<NumberFilterOperator>) => void",signature:{arguments:[{type:{name:"SelectOption",elements:[{name:"union",raw:`| "EQUALS"
| "GREATER_THAN"
| "GREATER_EQUAL_THAN"
| "LESS_THAN"
| "LESS_EQUAL_THAN"
| "BETWEEN"
| "IS_NULL"
| "IS_NOT_NULL"`,elements:[{name:"literal",value:'"EQUALS"'},{name:"literal",value:'"GREATER_THAN"'},{name:"literal",value:'"GREATER_EQUAL_THAN"'},{name:"literal",value:'"LESS_THAN"'},{name:"literal",value:'"LESS_EQUAL_THAN"'},{name:"literal",value:'"BETWEEN"'},{name:"literal",value:'"IS_NULL"'},{name:"literal",value:'"IS_NOT_NULL"'}]}],raw:"SelectOption<NumberFilterOperator>"},name:"data"}],return:{name:"void"}}},description:""},options:{required:!1,tsType:{name:"union",raw:"NumberFilterOperator | undefined",elements:[{name:"union",raw:`| "EQUALS"
| "GREATER_THAN"
| "GREATER_EQUAL_THAN"
| "LESS_THAN"
| "LESS_EQUAL_THAN"
| "BETWEEN"
| "IS_NULL"
| "IS_NOT_NULL"`,elements:[{name:"literal",value:'"EQUALS"'},{name:"literal",value:'"GREATER_THAN"'},{name:"literal",value:'"GREATER_EQUAL_THAN"'},{name:"literal",value:'"LESS_THAN"'},{name:"literal",value:'"LESS_EQUAL_THAN"'},{name:"literal",value:'"BETWEEN"'},{name:"literal",value:'"IS_NULL"'},{name:"literal",value:'"IS_NOT_NULL"'}]},{name:"undefined"}]},description:""},placeholder:{required:!1,tsType:{name:"NumberFilterPlaceholder"},description:""},queryOptions:{required:!1,tsType:{name:"Array",elements:[{name:"SelectOption",elements:[{name:"union",raw:`| "EQUALS"
| "GREATER_THAN"
| "GREATER_EQUAL_THAN"
| "LESS_THAN"
| "LESS_EQUAL_THAN"
| "BETWEEN"
| "IS_NULL"
| "IS_NOT_NULL"`,elements:[{name:"literal",value:'"EQUALS"'},{name:"literal",value:'"GREATER_THAN"'},{name:"literal",value:'"GREATER_EQUAL_THAN"'},{name:"literal",value:'"LESS_THAN"'},{name:"literal",value:'"LESS_EQUAL_THAN"'},{name:"literal",value:'"BETWEEN"'},{name:"literal",value:'"IS_NULL"'},{name:"literal",value:'"IS_NOT_NULL"'}]}],raw:"SelectOption<NumberFilterOperator>"}],raw:"SelectOption<NumberFilterOperator>[]"},description:"",defaultValue:{value:`[
  { label: "Is equal to", value: "EQUALS" },
  { label: "Is greater than", value: "GREATER_THAN" },
  {
    label: "Is greater than or equal to",
    value: "GREATER_EQUAL_THAN"
  },
  { label: "Is less than", value: "LESS_THAN" },
  { label: "Is less than or equal to", value: "LESS_EQUAL_THAN" },
  { label: "Is between", value: "BETWEEN" },
  { label: "Is null", value: "IS_NULL" },
  { label: "Is not null", value: "IS_NOT_NULL" }
]`,computed:!1}},value:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(number | null)[]"},description:""},text:{required:!1,tsType:{name:"NumberFilterText"},description:""}},composes:["Omit"]};export{q as D,G as N};
