(this.webpackJsonpnametrees=this.webpackJsonpnametrees||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(11),c=n.n(s),o=(n(93),n(13)),i=n.n(o),u=n(23),_=n(14),m=(n.p,n(59),n(171)),d=n(186),l=n(169),b=n(170),j=n(160),h=n(190),p=n(191),f=n(163),g=n(185),y=n(5),O=Object(j.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}}));function x(e){var t=O(),n=r.a.useState({named_trees:!1,un_named_trees:!1,trees_named_by_me:!1,trees_named_by_user:!1}),s=Object(_.a)(n,2),c=s[0],o=s[1],j=r.a.useState(""),x=Object(_.a)(j,2),v=x[0],w=x[1],k=r.a.useState([]),S=Object(_.a)(k,2),C=S[0],N=S[1],P=function(t){"un_named_trees"==t.target.name&&1==t.target.checked&&(e.myFunc("get_tree_info_un_named_page_true"),o({named_trees:!1,un_named_trees:!0,trees_named_by_me:!1,trees_named_by_user:!1})),"un_named_trees"==t.target.name&&0==t.target.checked&&(e.myFunc("get_tree_info_un_named_page_false"),o({named_trees:!1,un_named_trees:!1,trees_named_by_me:!1,trees_named_by_user:!1})),"named_trees"==t.target.name&&1==t.target.checked&&(e.myFunc("get_tree_info_named_page_true"),o({named_trees:!0,un_named_trees:!1,trees_named_by_me:!1,trees_named_by_user:!1})),"named_trees"==t.target.name&&0==t.target.checked&&(e.myFunc("get_tree_info_named_page_false"),o({named_trees:!1,un_named_trees:!1,trees_named_by_me:!1,trees_named_by_user:!1})),"trees_named_by_me"==t.target.name&&1==t.target.checked&&(e.myFunc("get_trees_named_by_me_true"),o({named_trees:!1,un_named_trees:!1,trees_named_by_me:!0,trees_named_by_user:!1})),"trees_named_by_me"==t.target.name&&0==t.target.checked&&(e.myFunc("get_trees_named_by_me_false"),o({named_trees:!1,un_named_trees:!1,trees_named_by_me:!1,trees_named_by_user:!1})),"trees_named_by_user"==t.target.name&&1==t.target.checked&&(e.myFunc("get_trees_named_by_user_true"),o({named_trees:!1,un_named_trees:!1,trees_named_by_me:!1,trees_named_by_user:!0})),"trees_named_by_user"==t.target.name&&0==t.target.checked&&(e.myFunc("get_trees_named_by_user_false"),o({named_trees:!1,un_named_trees:!1,trees_named_by_me:!1,trees_named_by_user:!1}),w(""))},z=function(t){e.myFunc("get_trees_named_by_customer",t.target.value),w(t.target.value)};function T(e){for(var t=[],n=0;n<e.length;n++){var a=e[n][0];t.push(a)}return t}function F(){return(F=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://k5tkgu2caj.execute-api.us-west-2.amazonaws.com/Dev",fetch("https://k5tkgu2caj.execute-api.us-west-2.amazonaws.com/Dev").then((function(e){return e.json()})).then((function(e){console.log(e.result);var t=T(JSON.parse(e.result));N(t)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){F.apply(this,arguments)}()}),[]),Object(y.jsx)(l.a,{className:t.root,children:Object(y.jsx)(b.a,{children:Object(y.jsxs)("div",{class:"grid grid-flow-col grid-rows-2 grid-cols-2 gap-4",children:[Object(y.jsx)("div",{children:Object(y.jsx)(m.a,{control:Object(y.jsx)(d.a,{checked:c.named_trees,onChange:P,name:"named_trees"}),label:"Show Named Trees"})}),Object(y.jsx)("div",{children:Object(y.jsx)(m.a,{control:Object(y.jsx)(d.a,{checked:c.un_named_trees,onChange:P,name:"un_named_trees"}),label:"Show Un-named Trees"})}),Object(y.jsx)("div",{children:Object(y.jsx)(m.a,{control:Object(y.jsx)(d.a,{checked:c.trees_named_by_me,onChange:P,name:"trees_named_by_me"}),label:"Show Trees named by me"})}),Object(y.jsxs)("div",{children:[Object(y.jsx)(m.a,{control:Object(y.jsx)(d.a,{checked:c.trees_named_by_user,onChange:P,name:"trees_named_by_user"}),label:"Show Trees named by Customer"}),function(){if(1==c.trees_named_by_user)return Object(y.jsxs)(f.a,{className:t.formControl,children:[Object(y.jsx)(h.a,{id:"demo-simple-select-label",children:"Customer Name"}),Object(y.jsx)(g.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:v,onChange:z,children:C.map((function(e,t){return Object(y.jsx)(p.a,{value:e,children:e},t)}))})]})}()]})]})})})}var v=n(68),w=n(3),k=n(10),S=n(183),C=n(184),N=n(175),P=n(182),z=n(173),T=n(188),F=n(174),D=n(192),I=n(176),J=n(61),R=n(114),B=n(194),L=n(181),E=n(193),U=n(189),W=n(180),A=n(178),H=n(179),q=n(177),X=n(70),K=n.n(X);function M(e,t,n){return{id:e,name:t,named_by:n}}function Q(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function Y(e,t){return"desc"===e?function(e,n){return Q(e,n,t)}:function(e,n){return-Q(e,n,t)}}function Z(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))}var G=[{id:"treeid",numeric:!1,disablePadding:!0,label:"Tree ID"},{id:"tree_name",numeric:!0,disablePadding:!1,label:"Tree Name"},{id:"named_by",numeric:!0,disablePadding:!1,label:"Named By"}];function V(e){var t=e.classes,n=(e.onSelectAllClick,e.order),a=e.orderBy,r=(e.numSelected,e.rowCount,e.onRequestSort);return Object(y.jsx)(z.a,{children:Object(y.jsxs)(F.a,{children:[Object(y.jsx)(N.a,{padding:"checkbox"}),G.map((function(e){return Object(y.jsx)(N.a,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"normal",sortDirection:a===e.id&&n,children:Object(y.jsxs)(D.a,{active:a===e.id,direction:a===e.id?n:"asc",onClick:(s=e.id,function(e){r(e,s)}),children:[e.label,a===e.id?Object(y.jsx)("span",{className:t.visuallyHidden,children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var s}))]})})}var $=Object(j.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(k.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}})),ee=function(e){var t=$(),n=e.numSelected;return Object(y.jsx)(I.a,{className:Object(w.a)(t.root,Object(v.a)({},t.highlight,n>0)),children:n>0?Object(y.jsxs)(J.a,{className:t.title,color:"inherit",variant:"subtitle1",component:"div",children:[n," selected"]}):Object(y.jsx)(J.a,{className:t.title,variant:"h6",id:"tableTitle",component:"div",children:"Tree Information"})})},te=Object(j.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function ne(e){var t=te(),n=r.a.useState("asc"),s=Object(_.a)(n,2),c=s[0],o=s[1],m=r.a.useState("calories"),d=Object(_.a)(m,2),l=d[0],b=d[1],j=r.a.useState([]),h=Object(_.a)(j,2),p=h[0],f=(h[1],r.a.useState(0)),g=Object(_.a)(f,2),O=g[0],x=g[1],v=r.a.useState(!1),w=Object(_.a)(v,2),k=w[0],z=(w[1],r.a.useState(5)),D=Object(_.a)(z,2),I=D[0],J=D[1],X=r.a.useState(!1),Q=Object(_.a)(X,2),G=Q[0],$=Q[1],ne=r.a.useState(""),ae=Object(_.a)(ne,2),re=ae[0],se=ae[1],ce=r.a.useState(0),oe=Object(_.a)(ce,2),ie=oe[0],ue=oe[1],_e=r.a.useState(""),me=Object(_.a)(_e,2),de=me[0],le=me[1],be=r.a.useState([]),je=Object(_.a)(be,2),he=je[0],pe=je[1],fe=r.a.useState(),ge=Object(_.a)(fe,2)[1];r.a.useCallback((function(){return ge({})}),[]);function ye(){1==e.myProp.un_named_trees?function(){Ce.apply(this,arguments)}():1==e.myProp.named_trees?function(){we.apply(this,arguments)}():1==e.myProp.trees_named_by_me?function(){Se.apply(this,arguments)}():1==e.myProp.trees_named_by_user&&""!=e.myProp.customerName?function(){ke.apply(this,arguments)}():function(){Ne.apply(this,arguments)}()}function Oe(){return xe.apply(this,arguments)}function xe(){return(xe=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(re),console.log(ie),console.log(de),t=(t=(t=(t="https://00q7n7ycb3.execute-api.us-west-2.amazonaws.com/Dev?")+"tree_id="+ie)+"&tree_name="+re)+"&customer_name="+de,t=encodeURI(t),fetch(t).then((function(e){return e.json()})).then((function(e){console.log(e.result)})),$(!1),ye(),x(O+1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ve(e){for(var t=[],n=0;n<e.length;n++){var a=e[n],r=M(a[0],a[1],a[2]);t.push(r)}return t}function we(){return(we=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="https://ul8jj6g53h.execute-api.us-west-2.amazonaws.com/Dev?page_number=",t+=O,pe([]),fetch(t).then((function(e){return e.json()})).then((function(e){console.log(e.result);var t=ve(JSON.parse(e.result));pe(t)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ke(){return(ke=Object(u.a)(i.a.mark((function t(){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=O,a=(a="https://0z3d2olyda.execute-api.us-west-2.amazonaws.com/Dev?customer_name=")+e.myProp.customer_name+"&page_number=",a+=n,a=encodeURI(a),pe([]),fetch(a).then((function(e){return e.json()})).then((function(e){console.log(e.result);var t=ve(JSON.parse(e.result));pe(t)}));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Se(){return(Se=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=O,pe([]),n=(n="https://0z3d2olyda.execute-api.us-west-2.amazonaws.com/Dev?customer_name=")+de+"&page_number=",n+=t,n=encodeURI(n),fetch(n).then((function(e){return e.json()})).then((function(e){console.log(e.result);var t=ve(JSON.parse(e.result));pe(t)}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ce(){return(Ce=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="https://x5jiirt94l.execute-api.us-west-2.amazonaws.com/Dev?page_number=",t+=O,pe([]),fetch(t).then((function(e){return e.json()})).then((function(e){console.log(e.result);var t=ve(JSON.parse(e.result));pe(t)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ne(){return(Ne=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="https://n6khjm2uoe.execute-api.us-west-2.amazonaws.com/Dev?page_number=",t+=O,pe([]),fetch(t).then((function(e){return e.json()})).then((function(e){console.log(e.result);var t=ve(JSON.parse(e.result));pe(t)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){console.log("body.js useeffect"),le(e.myProp.logged_in_user_name),ye()}),[]);var Pe=function(e,t){ue(t),$(!0)},ze=I-Math.min(I,he.length-O*I);return Object(y.jsxs)("div",{className:t.root,children:[Object(y.jsxs)(U.a,{open:G,onClose:Oe,"aria-labelledby":"form-dialog-title",children:[Object(y.jsx)(q.a,{id:"form-dialog-title",children:"Tree Name"}),Object(y.jsxs)(A.a,{children:[Object(y.jsx)(H.a,{children:"Enter the name of the tree."}),Object(y.jsx)(E.a,{onChange:function(e){se(e.target.value)},autoFocus:!0,margin:"dense",id:"name",label:"Tree Name",type:"email",fullWidth:!0})]}),Object(y.jsxs)(W.a,{children:[Object(y.jsx)(L.a,{onClick:Oe,color:"primary",children:"Cancel"}),Object(y.jsx)(L.a,{onClick:Oe,color:"primary",children:"Add"})]})]}),Object(y.jsxs)(R.a,{className:t.paper,children:[Object(y.jsx)(ee,{numSelected:p.length}),Object(y.jsx)(P.a,{children:Object(y.jsxs)(S.a,{className:t.table,"aria-labelledby":"tableTitle",size:k?"small":"medium","aria-label":"enhanced table",children:[Object(y.jsx)(V,{classes:t,numSelected:p.length,order:c,orderBy:l,onRequestSort:function(e,t){o(l===t&&"asc"===c?"desc":"asc"),b(t)},rowCount:he.length}),Object(y.jsxs)(C.a,{children:[Z(he,Y(c,l)).slice(O*I,O*I+I).map((function(e,t){var n,a=(n=e.name,-1!==p.indexOf(n)),r="enhanced-table-checkbox-".concat(t);return Object(y.jsxs)(F.a,{hover:!0,onClick:function(t){return Pe(0,e.id)},role:"checkbox","aria-checked":a,tabIndex:-1,selected:a,children:[Object(y.jsx)(N.a,{padding:"checkbox",children:Object(y.jsx)(B.a,{title:"Click to add Tree Name",children:Object(y.jsx)(K.a,{onClick:Pe})})}),Object(y.jsx)(N.a,{component:"th",id:r,scope:"row",padding:"none",children:e.id}),Object(y.jsx)(N.a,{align:"right",children:e.name}),Object(y.jsx)(N.a,{align:"right",children:e.named_by})]},e.id)})),ze>0&&Object(y.jsx)(F.a,{style:{height:(k?33:53)*ze},children:Object(y.jsx)(N.a,{colSpan:6})})]})]})}),Object(y.jsx)(T.a,{rowsPerPageOptions:[10],component:"div",count:he.length,rowsPerPage:I,page:O,onPageChange:function(e,t){x(t)},onRowsPerPageChange:function(e){J(parseInt(e.target.value,10)),x(0)}})]})]})}var ae=n(26),re=function(){var e=Object(ae.b)().loginWithRedirect;return Object(y.jsx)("button",{onClick:function(){return e()},children:"Log In"})},se=function(){var e=Object(ae.b)().logout;return Object(y.jsx)("button",{onClick:function(){return e({returnTo:"https://nametreesfornaveeed.s3.us-west-2.amazonaws.com/index.html"})},children:"Log Out"})};var ce=function(){var e=r.a.useState({named_trees:!0,un_named_trees:!0,trees_named_by_me:!0,trees_named_by_user:!0,customer_name:"",logged_in_user_name:""}),t=Object(_.a)(e,2),n=t[0],s=t[1],c=Object(ae.b)(),o=c.user,m=c.isAuthenticated;function d(){return(d=Object(u.a)(i.a.mark((function e(t){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.logged_in_user_name!=t&&((a=Object.assign({},n)).logged_in_user_name=t,s(a)),r="https://0oua10pc4j.execute-api.us-west-2.amazonaws.com/Dev?customer_name=",r+=t,fetch(r).then((function(e){return e.json()})).then((function(e){console.log(e.result)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return c.isLoading,Object(a.useEffect)((function(){console.log("app.js")})),m?(console.log(o),function(e){d.apply(this,arguments)}(o.nickname),Object(y.jsx)("div",{className:"flex justify-center",children:Object(y.jsxs)("table",{children:[Object(y.jsx)("tr",{children:Object(y.jsx)(se,{})}),Object(y.jsx)("tr",{children:Object(y.jsx)(x,{myFunc:function(e,t){"get_tree_info_un_named_page_true"==e&&s({named_trees:!1,un_named_trees:!0,trees_named_by_me:!1,trees_named_by_user:!1,customer_name:""}),"get_tree_info_un_named_page_false"==e&&s({named_trees:!1,un_named_trees:!1,trees_named_by_me:!1,trees_named_by_user:!1,customer_name:""}),"get_tree_info_named_page_true"==e&&s({named_trees:!0,un_named_trees:!1,trees_named_by_me:!1,trees_named_by_user:!1,customer_name:""}),"get_tree_info_named_page_false"==e&&s({named_trees:!1,un_named_trees:!1,trees_named_by_me:!1,trees_named_by_user:!1,customer_name:""}),"get_tree_info_by_user_named_page_true"==e&&s({named_trees:!1,un_named_trees:!1,trees_named_by_me:!1,trees_named_by_user:!0,customer_name:""}),"get_tree_info_by_user_named_page_false"==e&&s({named_trees:!1,un_named_trees:!1,trees_named_by_me:!1,trees_named_by_user:!1,customer_name:""}),"get_trees_named_by_me_true"==e&&s({named_trees:!1,un_named_trees:!1,trees_named_by_me:!0,trees_named_by_user:!1,customer_name:""}),"get_trees_named_by_me_false"==e&&s({named_trees:!1,un_named_trees:!1,trees_named_by_me:!1,trees_named_by_user:!1,customer_name:""}),"get_trees_named_by_customer"==e&&s({named_trees:!1,un_named_trees:!1,trees_named_by_me:!1,trees_named_by_user:!0,customer_name:t})}})}),Object(y.jsx)("tr",{children:Object(y.jsx)(ne,{myProp:n},n.named_trees.toString().concat(n.un_named_trees.toString()).concat(n.trees_named_by_me.toString()).concat(n.trees_named_by_user.toString()).concat(n.customer_name.toString()))})]})})):Object(y.jsx)("div",{className:"flex justify-center",children:Object(y.jsx)(re,{})})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,196)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};c.a.render(Object(y.jsx)(ae.a,{domain:"dev--f-9o7ez.us.auth0.com",clientId:"cApQco8t8vfzyH2pXoojpL0XZeNlHYKP",redirectUri:"https://nametreesfornaveeed.s3.us-west-2.amazonaws.com/index.html",children:Object(y.jsx)(ce,{})}),document.getElementById("root")),oe()},59:function(e,t,n){},93:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.1d34880c.chunk.js.map