(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={input:"ContactForm_input__346Cd",button:"ContactForm_button__2Y_Pr"}},11:function(t,e,n){t.exports={item:"ContactsList_item__1jyz7",itemTitle:"ContactsList_itemTitle__2wXff",enter:"ContactsList_enter__3W0bp",enterActive:"ContactsList_enterActive__1YXkz",exit:"ContactsList_exit__1D-m3",exitActive:"ContactsList_exitActive__30gKi",button:"ContactsList_button__1xyGC"}},23:function(t,e,n){t.exports={input:"Filter_input__2Glh7"}},24:function(t,e,n){t.exports={title:"Title_title__3eeDj"}},39:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var a,c=n(0),o=n.n(c),i=n(6),r=n.n(i),s=n(7),u=n(5),l=n(17),b=n(25),m=n(4),j=n(45),d={addContact:Object(u.b)("phonebook/add_contact",(function(t){return{payload:{contact:{id:Object(j.a)(),item:t}}}})),removeContact:Object(u.b)("phonebook/remove_contact"),findContact:Object(u.b)("phonebook/find_contact")},h=Object(u.c)([],(a={},Object(l.a)(a,d.addContact,(function(t,e){return[].concat(Object(b.a)(t),[e.payload.contact])})),Object(l.a)(a,d.removeContact,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),a)),p=Object(u.c)("",Object(l.a)({},d.findContact,(function(t,e){return e.payload}))),f=Object(m.c)({items:h,filter:p}),O=Object(u.a)({reducer:{contacts:f}}),C=(n(39),n(13)),_=n(14),v=n(16),x=n(15),g=n(44),N=n(10),y=n.n(N),k=n(1),L={name:"",number:""},w=function(t){Object(v.a)(n,t);var e=Object(x.a)(n);function n(){var t;Object(C.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state=L,t.handleNameChange=function(e){t.setState({name:e.target.value})},t.handleNumberChange=function(e){t.setState({number:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(t.state),t.setState({name:"",number:""})},t}return Object(_.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(k.jsxs)("form",{className:y.a.form,onSubmit:this.handleSubmit,children:["Name"," ",Object(k.jsx)("input",{className:y.a.input,type:"text",name:"name",placeholder:"Enter name",value:e,onChange:this.handleNameChange}),Object(k.jsx)("input",{className:y.a.input,type:"tel",name:"number",placeholder:"Enter phone number",value:n,onChange:this.handleNumberChange}),Object(k.jsx)("button",{className:y.a.button,type:"submit",children:"Add Contact"})]})}}]),n}(c.Component),A={onAddContact:d.addContact},S=Object(s.b)(null,A)(w),F=n(11),E=n.n(F),T=n(46);var D={onRemoveContact:d.removeContact},z=Object(s.b)((function(t){return{contacts:t.contacts.items.filter((function(e){return e.item.name.toLowerCase().includes(t.contacts.filter.toLowerCase())}))}}),D)((function(t){var e=t.contacts,n=t.onRemoveContact;return Object(k.jsx)(T.a,{component:"ul",children:e.map((function(t){var e=t.id,a=t.item;return Object(k.jsx)(g.a,{id:e,timeout:250,classNames:E.a,children:Object(k.jsxs)("li",{className:E.a.item,children:[Object(k.jsxs)("div",{className:E.a.itemTitle,children:[a.name,":",a.number]}),Object(k.jsx)("button",{className:E.a.button,onClick:function(){return n(e)},children:"delete"})]},"id")})}))})})),G=n(23),J=n.n(G),R={onChangeFilter:d.findContact},X=Object(s.b)((function(t){return{value:t.contacts.filter}}),R)((function(t){var e=t.value,n=t.onChangeFilter;return Object(k.jsx)("input",{className:J.a.input,type:"text",name:"filter",value:e,onChange:function(t){return n(t.target.value)},placeholder:"Enter name for Search"})})),Y=n(24),B=n.n(Y),I=function(t){var e=t.title;return Object(k.jsx)("h2",{className:B.a.title,children:e})},K=(n(41),function(t){Object(v.a)(n,t);var e=Object(x.a)(n);function n(){return Object(C.a)(this,n),e.apply(this,arguments)}return Object(_.a)(n,[{key:"render",value:function(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)(g.a,{in:!0,appear:!0,classNames:"transition",timeout:500,unmountOnExit:!0,children:Object(k.jsx)(I,{title:"Form Contact"})}),Object(k.jsx)(S,{}),Object(k.jsx)(I,{title:"Contacts List"}),Object(k.jsx)(X,{}),Object(k.jsx)(z,{})]})})}}]),n}(c.Component));r.a.render(Object(k.jsx)(o.a.StrictMode,{children:Object(k.jsx)(s.a,{store:O,children:Object(k.jsx)(K,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.9e81eafd.chunk.js.map