(this["webpackJsonpfairwinds-assessment"]=this["webpackJsonpfairwinds-assessment"]||[]).push([[0],{52:function(e,t,n){},54:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),s=n(14),u=n.n(s),i=(n(52),n(12)),o=n.n(i),l=n(19),b=n(18),j=n(6),d=n(2),m=n(69),f=n(70),O=n(44),h=n(45),p=n(64),_=n(68),v=n(66);!function(e){e[e.CREATE=0]="CREATE",e[e.VIEW=1]="VIEW"}(a||(a={}));var x=n(7),y=n(3),g=n(65),C=n(67),w=function(e,t){return fetch("".concat("https://my.api.mockaroo.com/customers.json?key=e95894a0").concat(e),t)},T=function(){var e=Object(b.a)(o.a.mark((function e(){var t,n,a,c=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:{},n=t.size,e.next=4,w(void 0!==n?"&size=".concat(n):"");case 4:return a=e.sent,e.abrupt("return",a.json());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(b.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=(n(54),n(1)),N=["type","customer"],S=function(e){var t,n=e.type,r=e.customer,s=Object(y.a)(e,N),u=(t={},Object(x.a)(t,a.CREATE,{title:"Create Customer"}),Object(x.a)(t,a.VIEW,{title:"View Customer"}),t)[n],i=Object(c.useState)(0),l=Object(j.a)(i,2),m=l[0],f=l[1],O=Object(c.useState)(!1),p=Object(j.a)(O,2),_=p[0],w=p[1],T=Object(c.useState)(r||{first_name:"",last_name:"",date_birth:"",email:"",mobile_phone_number:"",primary_address:{address_line_1:"",city:"",state:"",zip_code:""},ssn:""}),S=Object(j.a)(T,2),I=S[0],M=S[1],A=["address_line_1","city","state","zip_code"],z=function(e){var t=e.split("/"),n=Object(j.a)(t,3),a=n[0],c=n[1],r=n[2];return"".concat(r,"-").concat(a,"-").concat(c)};Object(c.useEffect)((function(){return f((function(e){return e+1})),M(r||{first_name:"",last_name:"",date_birth:"",email:"",mobile_phone_number:"",primary_address:{address_line_1:"",city:"",state:"",zip_code:""},ssn:""}),function(){w(!1)}}),[r,s.show]);var F=function e(t){return t?Object.keys(t).flatMap((function(n){return"object"===typeof t[n]?e(t[n]):n})):[]}(I),R=function(){var e=Object(b.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,k(I);case 4:e.sent,w(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(E.jsxs)(g.a,Object(d.a)(Object(d.a)({},s),{},{dialogClassName:"customerModal__dialog",contentClassName:"customerModal__content",children:[Object(E.jsx)(g.a.Header,{children:Object(E.jsx)(g.a.Title,{children:u.title})}),Object(E.jsx)(g.a.Body,{className:"customerModal__body",children:_?Object(E.jsx)(C.a,{variant:"success",children:"Customer has been created successfully!"}):Object(E.jsxs)(v.a,{onSubmit:R,children:[F.map((function(e){return Object(E.jsxs)(v.a.Group,{className:"mb-3",controlId:"formGroup__".concat(e),children:[Object(E.jsx)(v.a.Label,{style:{textTransform:"ssn"===e?"uppercase":"capitalize"},children:e.replaceAll("_"," ")}),Object(E.jsx)(v.a.Control,{required:!0,type:"date_birth"===e?"date":"text",value:"date_birth"===e?z(I[e]):"ssn"===e&&n===a.VIEW?"***-**-".concat(I[e].substring(I[e].length-4)):I.primary_address[e]||I[e],onChange:function(t){return M((function(n){return Object(d.a)(Object(d.a)({},n),{},{primary_address:Object(d.a)(Object(d.a)({},n.primary_address),A.includes(e)&&Object(x.a)({},e,t.target.value))},!A.includes(e)&&Object(x.a)({},e,t.target.value))}))},readOnly:n===a.VIEW})]},"".concat(m).concat(e))})),n===a.CREATE?Object(E.jsx)(h.a,{variant:"primary",type:"submit",disabled:_,children:"Submit"}):null]})})]}))},I=(n(59),function(e){var t=e.columns,n=e.data,r=e.getCustomer,s=[25,50,100],u=Object(c.useState)(""),i=Object(j.a)(u,2),o=i[0],b=i[1],x=Object(c.useState)(1),y=Object(j.a)(x,2),g=y[0],C=y[1],w=Object(c.useState)(s[0]),T=Object(j.a)(w,2),k=T[0],N=T[1],I=Object(c.useState)({show:!1,type:a.CREATE}),M=Object(j.a)(I,2),A=M[0],z=M[1],F=function(e,t){return z((function(n){return Object(d.a)(Object(d.a)({},n),{},{customer:t&&Object(d.a)(Object(d.a)({},r(t.customer_number)),{},{age:t.age}),type:e,show:!0})}))};Object(c.useEffect)((function(){C(1)}),[k]);var R=Math.ceil(n.length/k),V=n.slice(k*(g-1),k*g).filter((function(e){return Object.values(e).join(" ").toLowerCase().includes(o)}));return Object(E.jsxs)("div",{className:"customTable",children:[Object(E.jsx)(S,Object(d.a)(Object(d.a)({},A),{},{onHide:function(){return z((function(e){return Object(d.a)(Object(d.a)({},e),{},{customer:void 0,show:!1})}))}})),Object(E.jsxs)("div",{className:"customTable__header",children:[Object(E.jsx)(f.a,{className:"customTable__headerSearch",children:Object(E.jsx)(O.a,{className:"customTable__headerSearchInput",placeholder:"Search...",value:o,onChange:function(e){return b(e.target.value)}})}),Object(E.jsx)("div",{className:"customTable__headerCreate",children:Object(E.jsx)(h.a,{className:"customTable__headerCreateBtn",variant:"light",onClick:function(){return F(a.CREATE)},children:"Create Customer"})})]}),Object(E.jsx)("div",{className:"customTable__body",children:Object(E.jsxs)(p.a,{borderless:!0,className:"customTable__bodyTable",children:[Object(E.jsx)("thead",{children:Object(E.jsx)("tr",{children:t.map((function(e){var t=e.label;return Object(E.jsx)("th",{children:t},t)}))})}),Object(E.jsxs)("tbody",{children:[V.map((function(e){return Object(E.jsx)("tr",{onClick:function(){return F(a.VIEW,e)},children:t.map((function(t){var n=t.label,a=t.key;return Object(E.jsx)("td",{children:e[a]||""},n)}))},Object.values(e).join(""))})),new Array(k-V.length).fill(Object(E.jsx)("tr",{className:"customTable__bodyTableRow-placeholder",children:t.map((function(e){var t=e.label;return Object(E.jsx)("td",{children:Object(E.jsx)(_.a,{animation:"glow",as:"div"})},t)}))}))]})]})}),Object(E.jsxs)("div",{className:"customTable__footer",children:[Object(E.jsxs)("div",{className:"customTable__footerRows",children:[Object(E.jsx)(v.a.Select,{defaultValue:10,size:"sm",onChange:function(e){return N(+e.target.value)},children:s.map((function(e){return Object(E.jsx)("option",{value:e,children:e},e)}))}),Object(E.jsx)("p",{children:"rows per page"})]}),Object(E.jsx)(m.a,{children:function(){var e=[],t=Math.max(1,g-3),n=Math.min(R,t+6);n===R&&(t=Math.max(1,n-6));for(var a=t;a<=n;a++)e.push(a);return[Object(E.jsx)(m.a.First,{onClick:function(){return C(1)}})].concat(Object(l.a)(e.map((function(e){return Object(E.jsx)(m.a.Item,{onClick:function(){return C(e)},active:g===e,children:e},e)}))),[Object(E.jsx)(m.a.Last,{onClick:function(){return C(R)}})])}()})]})]})}),M=function(e,t){var n=e.split("/").map((function(e){return+e})),a=Object(j.a)(n,3),c=a[0],r=a[1],s=a[2],u=new Date(s,c-1,r),i=t.getFullYear()-u.getFullYear(),o=t.getMonth()-u.getMonth();return(o<0||!o&&t.getDate()<u.getDate())&&i--,i},A=(n(60),function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(j.a)(r,2),u=(s[0],s[1]),i=function(){var e=Object(b.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T({size:200});case 3:return t=e.sent,a(t),e.next=7,T({size:800});case 7:n=e.sent,a([].concat(Object(l.a)(t),Object(l.a)(n))),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),u("Error fetching customers.");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){return i(),function(){a([]),u("")}}),[]);var d,m=new Date;return Object(E.jsx)("div",{className:"customers",children:Object(E.jsx)("div",{className:"customers__content",children:Object(E.jsx)(I,{columns:[{label:"Customer Number",key:"customer_number"},{label:"First Name",key:"first_name"},{label:"Last Name",key:"last_name"},{label:"Date of Birth",key:"date_birth"},{label:"SSN",key:"ssn"},{label:"Age",key:"age"}],data:(d=n,d.map((function(e){var t=e.customer_number,n=e.first_name,a=e.last_name,c=e.date_birth,r=e.ssn;return{customer_number:t,first_name:n,last_name:a,date_birth:c,ssn:r?"***-**-".concat(r.substring(r.length-4)):"",age:M(c,m)}}))),getCustomer:function(e){return n.find((function(t){return t.customer_number===e}))}})})})});n(61);var z=function(){return Object(E.jsx)("div",{className:"App",children:Object(E.jsx)(A,{})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};u.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(z,{})}),document.getElementById("root")),F()}},[[62,1,2]]]);
//# sourceMappingURL=main.658361c1.chunk.js.map