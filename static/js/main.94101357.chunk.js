(this.webpackJsonpwebchat=this.webpackJsonpwebchat||[]).push([[0],{43:function(e,t,n){},45:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(12),c=n.n(a),r=n(35),s=n.n(r),i=(n(43),n(0)),o=n.n(i),u=n(1),j=n(14),d=(n(45),n(26)),b=(n(46),n(52),n(50),n(37)),h=n(38),l=n(13);d.a.initializeApp({apiKey:"AIzaSyAiA_sEPH60fc5G2anujmZ77AuxSLDZnAo",authDomain:"webchat-9a1e7.firebaseapp.com",projectId:"webchat-9a1e7",storageBucket:"webchat-9a1e7.appspot.com",messagingSenderId:"1087030049750",appId:"1:1087030049750:web:3003876b0dd461fda84277",measurementId:"G-2KQSWD6VQ4"});var p=d.a.auth(),O=d.a.firestore();function m(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"hone",children:"Web Based Chat Application"}),Object(l.jsx)("button",{className:"sign-in",onClick:function(){var e=new d.a.auth.GoogleAuthProvider;p.signInWithPopup(e)},children:"Sign in with Google"})]})}function x(){return p.currentUser&&Object(l.jsx)("button",{className:"sign-out",onClick:function(){return p.signOut()},children:"Sign Out"})}function f(){var e=Object(a.useRef)(),t=O.collection("messages"),n=t.orderBy("createdAt").limit(100),c=Object(h.a)(n,{idField:"id"}),r=Object(j.a)(c,1)[0],s=Object(a.useState)(""),i=Object(j.a)(s,2),b=i[0],m=i[1],x=function(){var n=Object(u.a)(o.a.mark((function n(a){var c,r,s;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),c=p.currentUser,r=c.uid,s=c.photoURL,n.next=4,t.add({text:b,createdAt:d.a.firestore.FieldValue.serverTimestamp(),uid:r,photoURL:s});case 4:m(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("main",{children:[r&&r.map((function(e){return Object(l.jsx)(g,{message:e},e.id)})),Object(l.jsx)("span",{ref:e})]}),Object(l.jsxs)("form",{onSubmit:x,children:[Object(l.jsx)("input",{value:b,onChange:function(e){return m(e.target.value)},placeholder:"Type Message..."}),Object(l.jsx)("button",{type:"submit",disabled:!b,children:"\u27a4"})]})]})}function g(e){var t=e.message,n=t.text,a=t.uid,c=t.photoURL,r=a===p.currentUser.uid?"sent":"received";return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"message ".concat(r),children:[Object(l.jsx)("img",{src:c||"https://api.adorable.io/avatars/23/abott@adorable.png"}),Object(l.jsx)("p",{children:n})]})})}var v=function(){var e=Object(b.a)(p),t=Object(j.a)(e,1)[0];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{children:"Fire Chat"}),Object(l.jsx)(x,{})]}),Object(l.jsx)("section",{children:t?Object(l.jsx)(f,{}):Object(l.jsx)(m,{})})]})};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.94101357.chunk.js.map