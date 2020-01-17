(this["webpackJsonpcontacts-app"]=this["webpackJsonpcontacts-app"]||[]).push([[0],{35:function(e,t,a){e.exports=a.p+"static/media/yuna.63f9d123.jpg"},37:function(e,t,a){e.exports=a(94)},42:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(24),r=a.n(l),s=a(4),o=a(14),i=(a(42),a(3)),m=Object(n.createContext)(),u=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),l=a[0],r=a[1];return c.a.createElement(m.Provider,{value:{user:l,keepAuthUser:function(e){r(e)},destroyAuthUser:function(){r("")}}},e.children)},d=a(5),p=a.n(d),E=function(e){var t=Object(n.useContext)(m).keepAuthUser,a=Object(n.useState)(!1),l=Object(i.a)(a,2),r=l[0],s=l[1],o=Object(n.useState)(!1),u=Object(i.a)(o,2),d=u[0],E=u[1];return r||function(){var e,a;p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.a.awrap(fetch("/users/login").catch((function(e){return console.log(e,"authContextKeeperErr")})));case 2:return e=n.sent,n.next=5,p.a.awrap(e.json());case 5:n.t0=n.sent,n.t1=e.status,(a={res:n.t0,status:n.t1}).res&&(t(a.res),s(!0)),E(!1);case 10:case"end":return n.stop()}}))}(),d?c.a.createElement("div",{className:"progress",style:{margin:"16rem 0.5rem  1rem  0.5rem",width:"100%",backgroundColor:"orange"}},c.a.createElement("div",{className:"indeterminate",style:{backgroundColor:"#03a9f4"}})):c.a.createElement("div",{className:""},e.children)},f=a(20),h=a(32),v=a.n(h),N=function(e,t){switch(t.type){case"ADD_CONTACT":return[].concat(Object(f.a)(e),[{name:t.contact.name,phoneNr:t.contact.phoneNr,email:t.contact.email,id:v()()}]);case"DELETE_CONTACT":return e.filter((function(e){return e.id!==t.id}));case"EDIT_CONTACT":return e.map((function(e){return e.id===t.contact.id?{name:t.contact.name,phoneNr:t.contact.phoneNr,email:t.contact.email,id:t.contact.id}:e}));default:return e}},g=Object(n.createContext)(),b=function(e){var t=Object(n.useReducer)(N,[],(function(){var e=localStorage.getItem("contacts");return e?JSON.parse(e):[]})),a=Object(i.a)(t,2),l=a[0],r=a[1];return Object(n.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(l))}),[l]),c.a.createElement(g.Provider,{value:{contacts:l,dispatch:r}},e.children)},w=a(10);var O=function(){var e=Object(n.useContext)(m),t=e.user,a=e.destroyAuthUser;return c.a.createElement(c.a.Fragment,null,t?c.a.createElement(s.b,{to:"#",className:"flatBtns z-depth-2",onClick:function(){var e;return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(fetch("/users/logout",{method:"GET",credentials:"include"}));case 2:(e=t.sent)&&200===e.status&&a();case 4:case"end":return t.stop()}}))}},c.a.createElement("i",{className:"material-icons auth-icons",style:{color:"#03a9f4",verticalAlign:"middle",fontSize:"1.6rem"}},"logout"),"SIGN OUT"):c.a.createElement(o.a,{to:"/login"}))};function j(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],r=a[1],o=function(){var e="object"===typeof window;function t(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}var a=Object(n.useState)(t),c=Object(i.a)(a,2),l=c[0],r=c[1];return Object(n.useEffect)((function(){if(!e)return!1;function a(){r(t())}return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)}}),[]),l}(),u=Object(n.useContext)(m).user;return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"light-blue nav-header"},c.a.createElement(s.b,{to:"#",className:"sidenav-trigger",onClick:function(){return r((function(e){return!e}))}},c.a.createElement("i",{className:"material-icons"},"menu")),c.a.createElement(s.b,{to:"/",className:"logo-brand"},c.a.createElement("i",{className:"material-icons",style:{color:"#fff"}},"phone"))),c.a.createElement("div",{className:"sidenav-overlay",onClick:function(){return r((function(e){return!e}))},style:{display:l&&o.width<980?"block":"none",opacity:"1"}}),c.a.createElement("ul",{id:"slide-out",className:"sidenav",style:{transform:l||o.width>980?"translateX(0%)":"",transitionProperty:"transform",transitionDuration:".25s"}},c.a.createElement("li",null,c.a.createElement(s.b,{to:"/contacts",className:"user-info",style:{backgroundColor:"#03a9f4",color:"#fff",height:"54px"}},c.a.createElement("i",{className:"material-icons auth-icons",style:{color:"#fff"}},"account_box"),u?"Logged in as ".concat(u.name):"No Active User")),e.paths.map((function(e,t){return c.a.createElement("li",{key:t,onClick:function(){return r((function(e){return!e}))}},c.a.createElement(s.b,{className:"waves-effect waves-light",to:e.path,style:{color:"#343434",textTransform:"uppercase",fontSize:"1rem",fontWeight:"400"}},e.name))})),c.a.createElement("li",null,c.a.createElement("div",{className:"divider z-depth-5"})),c.a.createElement("li",null,u?c.a.createElement(O,null):c.a.createElement(s.b,{to:"/login",className:"flatBtns z-depth-2"},c.a.createElement("i",{className:"material-icons auth-icons",style:{color:"#03a9f4",verticalAlign:"middle",fontSize:"1.6rem"}},"account_circle"),"SIGN IN"))))}var y=function(){return c.a.createElement(w.Row,null,c.a.createElement(j,{paths:[{name:"Home",path:"/"},{name:"Contacts",path:"/contacts/"},{name:"Add Contact",path:"/contacts/add"},{name:"& Stuff",path:"/user-contacts"}],title:"Menu",style:{color:"#03a9f4"}}))},C=function(){var e=Object(n.useContext)(m).user;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"home-page contacts-list"},e?c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Home Page"),"Welcome",c.a.createElement("h4",null,e.name),c.a.createElement("p",null,e.email),c.a.createElement("p",null,e.phone)):c.a.createElement("div",null,c.a.createElement("h3",null,"Welcome Guest"),c.a.createElement("div",{className:"btn-container"},"You can already add contacts!",c.a.createElement(s.b,{to:"/contacts/add",className:"btn-floating btn-large waves-effect waves-light addBtn"},c.a.createElement("i",{className:"material-icons"},"add"))))))},x=a(35),S=a.n(x),k=a(13),T=a(16),A=function(e){var t=e.contact,a=e.isEditing,l=e.setIsEditing,r=Object(n.useContext)(g).dispatch,s=Object(n.useState)(t),o=Object(i.a)(s,2),m=o[0],u=o[1],d=function(e){e.persist(),l(!0),u((function(t){return Object(T.a)({},t,Object(k.a)({},e.target.name,e.target.value))}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12",style:{marginBottom:"0.8rem"}},c.a.createElement("h3",null,"Edit Contact"),c.a.createElement("form",{className:"contact-form"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s6"},c.a.createElement("input",{name:"name",type:"text",placeholder:"Jane Doe",className:"validate",value:m.name,onChange:d,required:!0}),c.a.createElement("label",{htmlFor:"name",hidden:!0},"Name")),c.a.createElement("div",{className:"input-field col s6"},c.a.createElement("input",{name:"phoneNr",type:"text",placeholder:"072-978 69 69",className:"validate",value:m.phoneNr,onChange:d,required:!0}),c.a.createElement("label",{htmlFor:"phoneNr",hidden:!0},"PhoneNumber"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("input",{name:"email",type:"email",placeholder:"jane@idk.com",className:"validate",value:m.email,onChange:d,required:!0}),c.a.createElement("label",{htmlFor:"email",hidden:!0},"Email"))),a&&c.a.createElement(w.Button,{flat:!0,type:"submit",className:"btn waves-effect waves-light",value:"edit contact",onClick:function(e){e.preventDefault(),r({type:"EDIT_CONTACT",contact:Object(T.a)({},m)}),l(!1)}},"Save"),c.a.createElement("button",{onClick:function(){return l((function(e){return!e}))},className:"cancel-btn waves-light btn-flat"},"Cancel"))))))},B=function(e){var t=e.contact,a=Object(n.useContext)(g).dispatch,l=Object(n.useState)(!1),r=Object(i.a)(l,2),s=r[0],o=r[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"contact-details"},c.a.createElement("li",{key:t.id,className:"collection-item avatar z-depth-1"},c.a.createElement("img",{src:S.a,alt:"contact-avatar",className:"circle"}),c.a.createElement("span",{className:"contact-item"},t.name),c.a.createElement("p",null,t.phoneNr,c.a.createElement("br",null),t.email),c.a.createElement("a",{href:"#delete",onClick:function(){return a({type:"DELETE_CONTACT",id:t.id})},className:"secondary-content deleteBtn"},c.a.createElement("i",{className:"material-icons"},"delete")),c.a.createElement("a",{href:"#edit",onClick:function(){return o((function(e){return!e}))},className:"secondary-content editBtn",style:{marginRight:"1.8rem"}},c.a.createElement("i",{className:"material-icons"},"edit"))),s&&c.a.createElement("div",{className:"edit-modal"},c.a.createElement(A,{key:t.id,contact:t,isEditing:s,setIsEditing:o}))))},D=function(){var e=Object(n.useContext)(g).contacts;return c.a.createElement("div",{className:"contacts-list"},e.length?c.a.createElement("div",{className:"row"},c.a.createElement("h2",null,"User Contacts"),c.a.createElement("ul",{className:"collection"},e.map((function(e){return c.a.createElement(B,{key:e.id,contact:e})})))):c.a.createElement("div",{className:"empty"},c.a.createElement("h2",null,"No Contacts")),c.a.createElement("div",{className:"btn-container"},c.a.createElement(s.b,{to:"/contacts/add",className:"btn-floating btn-large waves-effect waves-light addBtn"},c.a.createElement("i",{className:"material-icons"},"add"))))},F=function(){var e=Object(n.useContext)(g).dispatch,t=Object(n.useState)(""),a=Object(i.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(""),m=Object(i.a)(s,2),u=m[0],d=m[1],p=Object(n.useState)(""),E=Object(i.a)(p,2),f=E[0],h=E[1],v=Object(n.useState)(!1),N=Object(i.a)(v,2),b=N[0],O=N[1];return c.a.createElement(c.a.Fragment,null,b&&c.a.createElement(o.a,{to:"/contacts"}),c.a.createElement("div",{className:"container all-form"},c.a.createElement("h3",null,"Add Contact"),c.a.createElement("div",{className:"col s12"},c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e({type:"ADD_CONTACT",contact:{name:l,phoneNr:u,email:f}}),r(""),d(""),h(""),O(!0)},className:"contact-form center-align"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s6"},c.a.createElement("input",{id:"name",type:"text",placeholder:"Jane Doe",className:"validate",value:l,onChange:function(e){return r(e.target.value)},required:!0}),c.a.createElement("label",{htmlFor:"name",hidden:!0},"Name")),c.a.createElement("div",{className:"input-field col s6"},c.a.createElement("input",{id:"phoneNr",type:"text",placeholder:"072-978 69 69",className:"validate",value:u,onChange:function(e){return d(e.target.value)},required:!0}),c.a.createElement("label",{htmlFor:"phoneNr",hidden:!0},"PhoneNumber"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("input",{id:"email",type:"email",placeholder:"jane@idk.com",className:"validate",value:f,onChange:function(e){return h(e.target.value)},required:!0}),c.a.createElement("label",{htmlFor:"email",hidden:!0},"Email")),c.a.createElement("span",{className:"helper-text","data-error":"wrong","data-success":"right"})),c.a.createElement(w.Button,{flat:!0,type:"submit",value:"Add contact",className:"btn waves-effect waves-light"},"Add Contact")))))},z=function(){var e=Object(n.useContext)(m).user,t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(!1),o=Object(i.a)(s,2),u=o[0],d=o[1];return Object(n.useEffect)((function(){var t=!0;return function(){var a,n,c,l;p.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,a=e._id,s.next=4,p.a.awrap(fetch("users/".concat(a,"/contacts")));case 4:if(n=s.sent,!t){s.next=12;break}return s.next=8,p.a.awrap(n.json());case 8:s.t0=s.sent,s.t1=n.status,200===(c={res:s.t0,status:s.t1}).status?(l=c.res.user.contacts,r(Object(f.a)(l))):400===c.status&&d(!0);case 12:s.next=17;break;case 14:s.prev=14,s.t2=s.catch(0),console.log(s.t2);case 17:case"end":return s.stop()}}),null,null,[[0,14]])}(),function(){d(!1),t=!1}}),[r]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container db-contacts"},u&&c.a.createElement("div",{className:"error-danger",style:{color:"crimson"}},c.a.createElement("span",null,"Please Login")),c.a.createElement("ul",{className:"collection"},l.length?l.map((function(e){return c.a.createElement("li",{key:e._id,className:"collection-item avatar z-depth-1"},c.a.createElement("span",{className:"contact-item"},e.name),c.a.createElement("p",null,e.phone,c.a.createElement("br",null),e.email))})):c.a.createElement("h4",null,"Oh noes! no contacts"))))},I=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"stuff-page"},c.a.createElement("h2",null,"DB Contacts"),c.a.createElement(z,null)))};var U=function(){var e=Object(n.useContext)(m),t=e.user,a=e.keepAuthUser,l=Object(n.useState)(null),r=Object(i.a)(l,2),u=r[0],d=r[1],E=function(e){var t=Object(n.useState)({email:"",password:"",isSubmitting:!1}),a=Object(i.a)(t,2),c=a[0],l=a[1];return{handleInputChange:function(e){e.persist(),l(Object(T.a)({},c,Object(k.a)({},e.target.name,e.target.value)))},handleSubmit:function(t){t.preventDefault(),e()},data:c}}((function(){var e,t,n;return p.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e={email:v.email,password:v.password},c.next=3,p.a.awrap(fetch("/users/login",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}));case 3:return t=c.sent,c.next=6,p.a.awrap(t.json());case 6:c.t0=c.sent,c.t1=t.status,200===(n={respon:c.t0,status:c.t1}).status&&a(n.respon),400===n.status&&d(n.respon.loginErr),404===n.status?d(n.respon.error):500===n.status&&("something aint quite right",d("something aint quite right"));case 12:case"end":return c.stop()}}))})),f=E.handleInputChange,h=E.handleSubmit,v=E.data;return c.a.createElement(c.a.Fragment,null,t?c.a.createElement(o.a,{to:"/"}):null,c.a.createElement("div",{className:"container all-form"},c.a.createElement("h3",null,"Sign In"),u&&c.a.createElement("h4",{className:"form-error",style:{color:"crimson"}},u),c.a.createElement("div",{className:"row"},c.a.createElement("form",{onSubmit:h,className:"col s12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("input",{name:"email",placeholder:"jane@idk.com",id:"email",type:"email",className:"validate",value:v.email,onChange:f}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("input",{name:"password",placeholder:"ExUs3rPasswd",id:"password",type:"password",className:"validate",value:v.password,onChange:f}))),c.a.createElement(w.Button,{flat:!0,className:"waves-effect waves-light loginBtn"},"Login"),c.a.createElement(w.Button,{flat:!0,className:"flatBtns",style:{marginTop:"15px",backgroundColor:"white",color:"#03a9f4",width:"90%"}},c.a.createElement(s.b,{to:"/signup"},"SignUp"))))))},P=function(e){var t=Object(n.useState)({name:"",phone:"",email:"",password:""}),a=Object(i.a)(t,2),c=a[0],l=a[1];return{data:c,handleInputChange:function(e){e.persist(),l(Object(T.a)({},c,Object(k.a)({},e.target.name,e.target.value)))},handleSubmit:function(t){t.preventDefault(),e()}}},_=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),o=Object(i.a)(r,2),m=o[0],u=o[1],d=P((function(){var e,t,a;return p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e={name:E.name,phone:E.phone,email:E.email,password:E.password},n.next=4,p.a.awrap(fetch("/users/",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}));case 4:return t=n.sent,n.next=7,p.a.awrap(t.json());case 7:n.t0=n.sent,n.t1=t.status,(a={res:n.t0,status:n.t1})||l("Oopsie"),404===a.status&&l(a.res.signUpErr),200===a.status&&u(a.res.successMssg),n.next=18;break;case 15:n.prev=15,n.t2=n.catch(0),console.log(n.t2,"err");case 18:case"end":return n.stop()}}),null,null,[[0,15]])})),E=d.data,f=d.handleInputChange,h=d.handleSubmit;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container signup-page all-form"},c.a.createElement("div",{className:"row"},c.a.createElement("h3",null,"Signup"),a?c.a.createElement("h4",{className:"errMssg",style:{color:"crimson"}},a):"",m&&c.a.createElement("div",{className:"success-mssg z-depth-2"},c.a.createElement("h4",{className:"success",style:{fontSize:"1.8rem"}}," ",m," "," ",c.a.createElement(s.b,{to:"/login",style:{fontSize:"1rem"}},"To Login"))),c.a.createElement("form",{onSubmit:h,className:"col s12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("input",{name:"name",placeholder:"Jane Doe",id:"name",type:"text",className:"validate",value:E.name,onChange:f}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("input",{name:"phone",placeholder:"072-978 00 00",id:"phone",type:"text",className:"validate",value:E.phone,onChange:f}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("input",{name:"email",placeholder:"jane@idk.com",id:"email",type:"email",className:"validate",value:E.email,onChange:f}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("input",{name:"password",placeholder:"ExUs3rPasswd",id:"password",type:"password",className:"validate",value:E.password,onChange:f}))),c.a.createElement(w.Button,{flat:!0,className:"flatBtns",style:{width:"90%",justifyContent:"center",backgroundColor:"#fff",color:"#03a9f4"}},"Signup")))))},J=a(36),q=function(e){var t=e.component,a=Object(J.a)(e,["component"]),l=Object(n.useContext)(m).user;return c.a.createElement(o.b,Object.assign({},a,{render:function(e){return l?c.a.createElement(t,e):c.a.createElement(o.a,{to:"/login"})}}))},L=function(){return c.a.createElement("div",{className:"container-fluid footer-container"},c.a.createElement("div",{className:"footer"},c.a.createElement("p",{className:"footer-text"},"\xa9 ",(new Date).getFullYear().toString(),", By zoeecoding | https://zoeali.se")))},W=function(){return c.a.createElement(u,null,c.a.createElement(s.a,null,c.a.createElement(E,null,c.a.createElement(b,null,c.a.createElement("section",{className:"container-fluid"},c.a.createElement(y,null),c.a.createElement("div",{className:"container-margin"},c.a.createElement(o.d,null,c.a.createElement(o.b,{exact:!0,path:"/login",component:U}),c.a.createElement(o.b,{exact:!0,path:"/",component:C}),c.a.createElement(o.b,{exact:!0,path:"/signup",component:_}),c.a.createElement(o.b,{exact:!0,path:"/contacts/add",component:F}),c.a.createElement(o.b,{exact:!0,path:"/contacts",component:D}),c.a.createElement(q,{exact:!0,path:"/user-contacts",component:I}))),c.a.createElement(L,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.0f5dc230.chunk.js.map