(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1088:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),s=a(8),i=a.n(s),o=(a(16),a(19),function(e){var t=e.user,a=t.name,n=t.profile_pic,r=t.status;return c.a.createElement("div",{className:"User"},c.a.createElement("img",{src:n,alt:a,className:"User__pic"}),c.a.createElement("div",{className:"User__details"},c.a.createElement("p",{className:"User__details-name"},a),c.a.createElement("p",{className:"User__details-status"},r)))}),l=(a(21),function(e){var t=e.contacts;return c.a.createElement("aside",{className:"Sidebar"},t.map(function(e){return c.a.createElement(o,{user:e,key:e.user_id})}))}),u=(a(23),a(25),function(e){var t=e.user,a=t.name,n=t.profile_pic,r=t.status,s=a.split(" ")[0];return c.a.createElement("div",{className:"Empty"},c.a.createElement("h1",{className:"Empty__name"},"Welcome, ",s," "),c.a.createElement("img",{src:n,alt:a,className:"Empty__img"}),c.a.createElement("p",{className:"Empty__status"},c.a.createElement("b",null,"Status:")," ",r),c.a.createElement("button",{className:"Empty__btn"},"Start a conversation"),c.a.createElement("p",{className:"Empty__info"},"Search for someone to start chatting with or go to Contacts to see who is available"))}),m=function(e){var t=e.activeUserId;return c.a.createElement("div",{className:"ChatWindow"},"Conversation for user id: ",t)},f=function(e){var t=e.user,a=e.activeUserId;return c.a.createElement("main",{className:"Main"},a?c.a.createElement(m,{activeUserId:a}):c.a.createElement(u,{user:t,activeUserId:a}))},d=(a(27),a(2)),v=a(10),p=a(29),E=a(38),_=a(39),g=a(3),b=(n=10,Array.from({length:n},function(){return N()})),h=g.mapKeys(b,"user_id");N(),function(e){var t={};g.forEach(b,function(a){var n;t[a.user_id]=Object(v.a)({},g.mapKeys((n=e,Array.from({length:n},function(e,t){return{number:t,text:E.sentence(),is_user_msg:_.random.boolean()}})),"number"))})}(10);function N(){return{name:_.name.findName(),email:_.internet.email(),profile_pic:_.internet.avatar(),status:E.sentence(),user_id:p.generate()}}var y=Object(d.a)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N();return arguments.length>1&&arguments[1],e},contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;arguments.length>1&&arguments[1];return e},activeUserId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return arguments.length>1&&arguments[1],e}}),U=Object(d.b)(y),w=a(3),I=a.n(w),S=function(){var e=U.getState(),t=e.contacts,a=e.user,n=e.activeUserId;return c.a.createElement("div",{className:"App"},c.a.createElement(l,{contacts:I.a.values(t)}),c.a.createElement(f,{user:a,activeUserId:n}))},k=function(){return console.log("%c Rendered with \ud83d\udc49 \ud83d\udc49\ud83d\udc47","background: purple; color: #fff"),console.log(U.getState()),i.a.render(c.a.createElement(S,null),document.getElementById("root"))};k(),U.subscribe(k)},11:function(e,t,a){e.exports=a(1088)},16:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){}},[[11,2,1]]]);
//# sourceMappingURL=main.bdbcfedc.chunk.js.map