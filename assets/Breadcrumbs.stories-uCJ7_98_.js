import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{c as t}from"./cx-2dOUpm6k.js";function v({className:y,classes:e,current:m,items:o,onNavigate:d,separator:_="/"}){const l=m==null?o:(()=>{const r=o.findIndex(a=>a.value===m);return r===-1?o:o.slice(0,r+1)})();return n.jsx("nav",{"aria-label":"Breadcrumb",className:t("oec-reset","oec-breadcrumbs",y,e==null?void 0:e.root),children:n.jsx("ol",{className:"oec-breadcrumbs__list",children:l.map((r,a)=>{const x=r.disabled||r.value===m||m==null&&a===l.length-1;return n.jsxs("li",{className:t("oec-breadcrumbs__item",e==null?void 0:e.item),children:[a>0&&n.jsx("span",{className:t("oec-breadcrumbs__separator",e==null?void 0:e.separator),children:_}),x?n.jsx("span",{"aria-current":"page",className:t("oec-breadcrumbs__link","oec-breadcrumbs__link--current",e==null?void 0:e.link,e==null?void 0:e.current),children:r.label}):n.jsx("a",{className:t("oec-breadcrumbs__link",e==null?void 0:e.link),href:r.disabled?void 0:r.href,onClick:c=>{if(r.disabled){c.preventDefault();return}d==null||d(r,a,c)},children:r.label})]},r.value)})})})}v.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{className:{required:!1,tsType:{name:"string"},description:""},classes:{required:!1,tsType:{name:"BreadcrumbsClasses"},description:""},current:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},onNavigate:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  item: BreadcrumbItem,
  index: number,
  event: MouseEvent<HTMLAnchorElement>
) => void`,signature:{arguments:[{type:{name:"BreadcrumbItem"},name:"item"},{type:{name:"number"},name:"index"},{type:{name:"MouseEvent",elements:[{name:"HTMLAnchorElement"}],raw:"MouseEvent<HTMLAnchorElement>"},name:"event"}],return:{name:"void"}}},description:""},separator:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:'"/"',computed:!1}}}};const I=[{value:"home",label:"Home",href:"#"},{value:"library",label:"Library",href:"#"},{value:"atoms",label:"Atoms",href:"#"},{value:"input",label:"Input"}],j={title:"Navigation/Breadcrumbs",component:v,tags:["autodocs"],args:{items:I,current:"input"},argTypes:{onNavigate:{action:"navigate"}}},u={},i={args:{items:[{value:"home",label:"Home",href:"#"},{value:"settings",label:"Settings",disabled:!0}]}};var s,b,p;u.parameters={...u.parameters,docs:{...(s=u.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(p=(b=u.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var f,h,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    items: [{
      value: "home",
      label: "Home",
      href: "#"
    }, {
      value: "settings",
      label: "Settings",
      disabled: true
    }]
  }
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const E=["Playground","WithDisabledItem"];export{u as Playground,i as WithDisabledItem,E as __namedExportsOrder,j as default};
