(this.webpackJsonpmfgj202106=this.webpackJsonpmfgj202106||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},146:function(e,t){},149:function(e,t,a){"use strict";a.r(t);var n,r,s=a(6),c=a(23),i=a.n(c),l=(a(106),a(107),a(95)),O=a(16),E=a(15),o=a(175),N=a(177),d=a(13),u=a(21),I=a(172),R=a(173),F=a(174),j=a(36),h=a(181),p=a(180),b=a(0),T=a(1),m=16,C=60/352;!function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON",e[e.ACCENT=2]="ACCENT"}(n||(n={})),function(e){e[e.INCREMENT=0]="INCREMENT",e[e.DECREMENT=1]="DECREMENT",e[e.ZERO=2]="ZERO",e[e.MAX=3]="MAX",e[e.SHIFT_UP=4]="SHIFT_UP",e[e.SHIFT_RIGHT=5]="SHIFT_RIGHT",e[e.SHIFT_DOWN=6]="SHIFT_DOWN",e[e.SHIFT_LEFT=7]="SHIFT_LEFT",e[e.IGNORE=8]="IGNORE"}(r||(r={}));var G=function(e,t){var a,s=Object(d.a)(t.steps),c=Object(O.a)(e.entries());try{var i=function(){var e=Object(E.a)(a.value,2),c=e[0],i=e[1];s[c]=function(){var e=t.steps[c];switch(i){case r.INCREMENT:return e===n.OFF?n.ON:n.ACCENT;case r.DECREMENT:return e===n.ACCENT?n.ON:n.OFF;case r.MAX:return n.ACCENT;case r.ZERO:return n.OFF;case r.SHIFT_UP:return c+4>m?n.OFF:t.steps[c+4];case r.SHIFT_RIGHT:return c%4===0?n.OFF:t.steps[c-1];case r.SHIFT_DOWN:return c-4<0?n.OFF:t.steps[c-4];case r.SHIFT_LEFT:return c%4+1===4?n.OFF:t.steps[c+1];default:return e}}()};for(c.s();!(a=c.n()).done;)i()}catch(l){c.e(l)}finally{c.f()}t.steps=s},f=function(){function e(t,a,n){Object(b.a)(this,e),this.title=void 0,this.description=void 0,this.image=void 0,this.sampleTarget=void 0,this.pattern=void 0,this.title=t.title,this.description=t.description,this.image=t.image,this.pattern=a,this.sampleTarget=n}return Object(T.a)(e,[{key:"playCard",value:function(e){var t,a=Object(O.a)(e.playerParts);try{for(a.s();!(t=a.n()).done;){var n=t.value;n.sample===this.sampleTarget&&(this.pattern&&G(this.pattern,n))}}catch(r){a.e(r)}finally{a.f()}}}]),e}(),v={layFlat:new f({title:"Lay Flat",description:"Lay your shirt flat on your bed. The foundation of any laundry folding routine."},[r.INCREMENT,r.IGNORE,r.IGNORE,r.IGNORE,r.INCREMENT,r.IGNORE,r.IGNORE,r.IGNORE,r.INCREMENT,r.IGNORE,r.IGNORE,r.IGNORE,r.INCREMENT,r.IGNORE,r.IGNORE,r.IGNORE],"sd"),fold:new f({title:"Fold",description:"Fold your shirt. Add some complexity! (Assuming you have something to start with...)"},[r.DECREMENT,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.DECREMENT,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE],"sd"),drop:new f({title:"Drop",description:"Oops! You dropped your [?] all over the floor. What a mess..."},[r.INCREMENT,r.INCREMENT,r.INCREMENT,r.INCREMENT,r.INCREMENT,r.INCREMENT,r.INCREMENT,r.INCREMENT,r.INCREMENT,r.INCREMENT,r.INCREMENT,r.INCREMENT,r.INCREMENT,r.INCREMENT,r.INCREMENT,r.INCREMENT],"bd"),mop:new f({title:"Mop",description:"Mop the floor. This mess might be a bit too much to soak up though."},[r.DECREMENT,r.DECREMENT,r.IGNORE,r.DECREMENT,r.DECREMENT,r.DECREMENT,r.IGNORE,r.DECREMENT,r.DECREMENT,r.DECREMENT,r.IGNORE,r.DECREMENT,r.DECREMENT,r.DECREMENT,r.IGNORE,r.DECREMENT],"bd"),sweep:new f({title:"Sweep",description:"Sweep the floor. It's a bit hard to reach that corner."},[r.ZERO,r.SHIFT_RIGHT,r.SHIFT_RIGHT,r.SHIFT_RIGHT,r.ZERO,r.SHIFT_RIGHT,r.SHIFT_RIGHT,r.SHIFT_RIGHT,r.ZERO,r.SHIFT_RIGHT,r.SHIFT_RIGHT,r.SHIFT_RIGHT,r.ZERO,r.SHIFT_RIGHT,r.SHIFT_RIGHT,r.SHIFT_RIGHT],"bd"),vacuum:new f({title:"Vacuum",description:"Suck up whatever is left. (Maybe leave 4 [?]s on the floor?)"},[r.INCREMENT,r.IGNORE,r.IGNORE,r.DECREMENT,r.INCREMENT,r.IGNORE,r.IGNORE,r.DECREMENT,r.INCREMENT,r.IGNORE,r.IGNORE,r.DECREMENT,r.INCREMENT,r.IGNORE,r.IGNORE,r.DECREMENT],"bd"),feast:new f({title:"Feast",description:"What a delicious meal! What are we going to do about all the dishes?"},[r.INCREMENT,r.INCREMENT,r.INCREMENT,r.INCREMENT,r.IGNORE,r.INCREMENT,r.IGNORE,r.INCREMENT,r.INCREMENT,r.INCREMENT,r.INCREMENT,r.INCREMENT,r.IGNORE,r.INCREMENT,r.IGNORE,r.INCREMENT],"ch"),bus:new f({title:"Bus",description:"What a delicious meal! What are we going to do about all the dishes?"},[r.SHIFT_LEFT,r.SHIFT_LEFT,r.SHIFT_LEFT,r.ZERO,r.SHIFT_LEFT,r.SHIFT_LEFT,r.SHIFT_LEFT,r.ZERO,r.SHIFT_LEFT,r.SHIFT_LEFT,r.SHIFT_LEFT,r.ZERO,r.SHIFT_LEFT,r.SHIFT_LEFT,r.SHIFT_LEFT,r.ZERO],"ch"),rinse:new f({title:"Rinse",description:"Rinse the dishes. This will make them easier to clean."},[r.IGNORE,r.ZERO,r.IGNORE,r.IGNORE,r.IGNORE,r.ZERO,r.IGNORE,r.IGNORE,r.IGNORE,r.ZERO,r.IGNORE,r.IGNORE,r.IGNORE,r.ZERO,r.IGNORE,r.IGNORE],"ch"),scour:new f({title:"Scour",description:"Scour the dishes. Really put your back into it."},[r.INCREMENT,r.IGNORE,r.INCREMENT,r.IGNORE,r.INCREMENT,r.IGNORE,r.INCREMENT,r.IGNORE,r.INCREMENT,r.IGNORE,r.INCREMENT,r.IGNORE,r.INCREMENT,r.IGNORE,r.INCREMENT,r.IGNORE],"ch"),dry:new f({title:"Dry",description:"Let the dishes dry. What a lovely sight!"},[r.DECREMENT,r.IGNORE,r.IGNORE,r.IGNORE,r.DECREMENT,r.IGNORE,r.IGNORE,r.IGNORE,r.DECREMENT,r.IGNORE,r.IGNORE,r.IGNORE,r.DECREMENT,r.IGNORE,r.IGNORE,r.IGNORE],"ch"),laundry:new f({title:"Laundry",description:"Do the laundry. You know how!"},[r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.INCREMENT,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.INCREMENT,r.IGNORE,r.IGNORE,r.IGNORE],"sd"),floor:new f({title:"Floor",description:"Clean the floor. You know how!"},[r.INCREMENT,r.IGNORE,r.IGNORE,r.IGNORE,r.INCREMENT,r.IGNORE,r.IGNORE,r.IGNORE,r.INCREMENT,r.IGNORE,r.IGNORE,r.IGNORE,r.INCREMENT,r.IGNORE,r.IGNORE,r.IGNORE],"bd"),dishes:new f({title:"Dishes",description:"Do the dishes. You know how!"},[r.INCREMENT,r.IGNORE,r.MAX,r.IGNORE,r.INCREMENT,r.IGNORE,r.MAX,r.IGNORE,r.INCREMENT,r.IGNORE,r.MAX,r.IGNORE,r.INCREMENT,r.IGNORE,r.MAX,r.IGNORE],"ch")},y=a(4),x=a(150),g=a(178),M=a(171),S=a(14),H=["classSequence"],_=["parts","currentlyPlayingStep"],w=["parts","currentlyPlayingStep"];function D(e){var t=e.classSequence,a=(Object(u.a)(e,H),Object(j.chunk)(t,4));return Object(S.jsx)(S.Fragment,{children:a.map((function(e,t){return Object(S.jsx)("tr",{className:"row",children:e.map((function(e,t){return Object(S.jsx)("td",{className:e,children:Object(S.jsx)(x.a,{className:"step",variant:"outlined"})},"col "+t)}))},"row "+t)}))})}function k(e){var t=e.parts,a=e.currentlyPlayingStep,r=Object(u.a)(e,_),c=Object(s.useState)(0),i=Object(E.a)(c,2),l=i[0],O=i[1],o=t[l],N=o.steps,d=o.sample,I=Object(j.take)(N,m).map((function(e,t){var r="cell ";return r+=n[e]+" ",null!==a&&t===a%m&&(r+="playing"),r}));return Object(s.createElement)("table",Object(y.a)(Object(y.a)({},r),{},{key:l}),Object(S.jsx)("caption",{children:Object(S.jsx)(g.a,{variant:"fullWidth",value:l,onChange:function(e,t){return O(t)},className:"part-selector",children:t.map((function(e,t){return Object(S.jsx)(M.a,{label:e.sample,style:{minWidth:48}},"tab "+t)}))})}),Object(S.jsx)("tbody",{className:d,children:Object(S.jsx)(D,{classSequence:I})}))}function L(e){var t=e.parts,a=e.currentlyPlayingStep,n=Object(u.a)(e,w);return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(k,Object(y.a)({parts:t,currentlyPlayingStep:a},n))})}var P=["cards","buttonLabel","onClickCard","unremovable","className"];function A(e){var t,a=e.cardId,n=e.cardIndex,s=e.buttonLabel,c=e.onClickCard,i=e.onClickEnabled,l=e.viewCard,O=v[a],E=null===(t=O.pattern)||void 0===t?void 0:t.map((function(e){return"cell "+r[e]}));return Object(S.jsxs)(I.a,{variant:"outlined",className:"card",onClick:l,children:[Object(S.jsxs)(R.a,{children:[Object(S.jsx)("h2",{children:O.title}),O.sampleTarget&&Object(S.jsx)("span",{children:O.sampleTarget}),E&&Object(S.jsx)("table",{className:"pattern",children:Object(S.jsx)("tbody",{children:Object(S.jsx)(D,{classSequence:E})})}),Object(S.jsx)("p",{children:O.description})]}),Object(S.jsx)(F.a,{children:Object(S.jsx)(o.a,{variant:"contained",onClick:function(){return c(n)},disabled:!i,children:s})})]})}var Z=Object(j.range)(6).map((function(e){return"card-show"}));function W(e){var t=e.cards,a=e.buttonLabel,n=e.onClickCard,r=e.unremovable,c=e.className,i=(Object(u.a)(e,P),Object(s.useState)(0)),l=Object(E.a)(i,2),O=l[0],o=l[1],N=Object(s.useState)(Z),I=Object(E.a)(N,2),R=I[0],F=I[1],j=Object(s.useState)(t.length),b=Object(E.a)(j,2),T=b[0],m=b[1];Object(s.useEffect)((function(){if(t.length!==T)return F(Z),o(0),void m(t.length);for(var e=Object(d.a)(Z),a=function(t){var a=t<O?"displace":"show";e[t]="card-"+a},n=0;n<6;n++)a(n);F(e)}),[t,T,O]);var C=function(e){e>=r&&n(e)};return Object(S.jsx)("div",{className:"sequence "+c,children:Object(S.jsx)(h.a,{component:null,children:t.map((function(e,n){return Object(S.jsx)(p.a,{exit:!0,classNames:"card",timeout:200,children:Object(S.jsx)("div",{className:"card-slot "+R[n],style:{zIndex:6-n},children:Object(S.jsx)(A,{cardId:e,cardIndex:n,buttonLabel:a,onClickCard:function(){return C(n)},onClickEnabled:n>=r,viewCard:function(){return o(n!==O?n:n<t.length-1?n+1:0)}})})},n)}))})})}var q="/mfgj202106/samples/levels/",X=[{title:"The Laundry",description:["laundry laundry laundry","laundry laundry"],levelTrack:"".concat(q,"unmixed_1_1_88_bpm.ogg"),targetParts:[{sample:"sd",steps:[n.OFF,n.OFF,n.OFF,n.OFF,n.ON,n.OFF,n.OFF,n.OFF,n.OFF,n.OFF,n.OFF,n.OFF,n.ON,n.OFF,n.OFF,n.OFF]}],startingHand:["layFlat","fold"],startingSchedule:[]},{title:"The Floor",description:["floor sweepy sweepy floor","sweepy sweepy floor floor"],levelTrack:"".concat(q,"unmixed_1_2_88_bpm.ogg"),targetParts:[{sample:"bd",steps:[n.ON,n.OFF,n.OFF,n.OFF,n.ON,n.OFF,n.OFF,n.OFF,n.ON,n.OFF,n.OFF,n.OFF,n.ON,n.OFF,n.OFF,n.OFF]}],startingHand:["mop","sweep","vacuum"],startingSchedule:["drop"]},{title:"The Dishes",description:["dishy dishy wishy wash","washa dishy dish dish"],levelTrack:"".concat(q,"unmixed_1_3_88_bpm.ogg"),targetParts:[{sample:"ch",steps:[n.ON,n.OFF,n.ACCENT,n.OFF,n.ON,n.OFF,n.ACCENT,n.OFF,n.ON,n.OFF,n.ACCENT,n.OFF,n.ON,n.OFF,n.ACCENT,n.OFF]}],startingHand:["bus","rinse","scour","dry"],startingSchedule:["feast"]},{title:"Putting it All Together",description:["every every thing thing","all at once"],levelTrack:"".concat(q,"unmixed_test_song_176_bpm.ogg"),targetParts:[{sample:"sd",steps:[n.OFF,n.OFF,n.OFF,n.OFF,n.ON,n.OFF,n.OFF,n.OFF,n.OFF,n.OFF,n.OFF,n.OFF,n.ON,n.OFF,n.OFF,n.OFF]},{sample:"bd",steps:[n.ON,n.OFF,n.OFF,n.OFF,n.ON,n.OFF,n.OFF,n.OFF,n.ON,n.OFF,n.OFF,n.OFF,n.ON,n.OFF,n.OFF,n.OFF]},{sample:"ch",steps:[n.ON,n.OFF,n.ACCENT,n.OFF,n.ON,n.OFF,n.ACCENT,n.OFF,n.ON,n.OFF,n.ACCENT,n.OFF,n.ON,n.OFF,n.ACCENT,n.OFF]}],startingHand:["laundry","floor","dishes"],startingSchedule:[]}],B=a(11),U=function(e){var t,a,r=X[e-1],s=r.targetParts.map((function(e){return{sample:e.sample,steps:Array.from({length:m},(function(){return n.OFF}))}})),c=Object(y.a)(Object(y.a)({},r),{},{playerParts:s,playerHand:Object(d.a)(r.startingHand),playerSchedule:Object(d.a)(null!==(t=r.startingSchedule)&&void 0!==t?t:[])});return(null!==(a=r.startingSchedule)&&void 0!==a?a:[]).forEach((function(e){return v[e].playCard(c)})),c},Y=function(e){var t,a=Object(O.a)(e.targetParts.entries());try{for(a.s();!(t=a.n()).done;)for(var n=Object(E.a)(t.value,2),r=n[0],s=n[1],c=e.playerParts[r],i=0;i<m;i++)if(c.steps[i]!==s.steps[i])return!1}catch(l){a.e(l)}finally{a.f()}return!0},J={moves:{playCard:function(e,t,a){var n=e.playerHand[a];v[n].playCard(e),e.playerHand.splice(a,1),e.playerSchedule.push(n)},removeCard:function(e,t,a){if(a<e.startingSchedule.length)return B.x;var n=U(t.turn);n.playerHand=Object(d.a)(e.playerHand);var r=e.playerSchedule[a];n.playerHand.push(r);var s,c=Object(O.a)(e.playerSchedule.entries());try{for(c.s();!(s=c.n()).done;){var i=Object(E.a)(s.value,2),l=i[0],o=i[1];if(!(l===a||l<e.startingSchedule.length))v[o].playCard(n),n.playerSchedule.push(o)}}catch(N){c.e(N)}finally{c.f()}return n},clearSchedule:function(e,t){return U(t.turn)},commitSchedule:function(e,t){var a,n;Y(e)&&(null===(a=t.events)||void 0===a||null===(n=a.endTurn)||void 0===n||n.call(a))}},turn:{onBegin:function(e,t){return U(t.turn)}}},z=a(34),V=a(179);function K(e){var t=e.turn,a=e.onDismiss,n=Object(s.useState)(t),r=Object(E.a)(n,2),c=r[0],i=r[1],l=Object(s.useState)(!0),O=Object(E.a)(l,2),o=O[0],N=O[1];Object(s.useEffect)((function(){t!==c&&N(!0)}),[c,t]);var d=function(){N(!1),i(t),a()},u=X[t-1];return Object(S.jsx)(V.a,{open:o,onClose:d,onClick:d,children:Object(S.jsx)(x.a,{variant:"outlined",className:"event-modal",children:Object(S.jsxs)("div",{className:"event-body",children:[Object(S.jsx)("h1",{children:u.title}),u.description.map((function(e,t){return Object(S.jsx)("p",{children:e},t)})),Object(S.jsx)("p",{children:"Press Escape or click/tap anywhere to continue..."})]})})})}var Q=a(176);function $(e){var t=e.progress,a=e.max;return Object(S.jsx)(Q.a,{className:"progress-bar",variant:"determinate",value:100*(null===t?0:t+1)/a})}function ee(e){var t=e.G,a=e.onClick,n=Y(t);return Object(S.jsx)(o.a,{variant:"contained",onClick:a,disabled:!n,children:"Next Day"})}var te={bd:"e4",ch:"d4",sd:"c4"},ae=new z.b({urls:{e4:"BD/E808_BD[short]-03.wav",d4:"CH/E808_CH-06.wav",c4:"SD/E808_SD-03.wav"},baseUrl:"/mfgj202106/samples/808/"}).toDestination();var ne=Object(l.a)({game:J,board:function(e){var t=e.G,a=e.ctx,r=e.moves,c=t.title,i=t.levelTrack,l=t.playerParts,d=t.targetParts,u=t.playerHand,I=t.playerSchedule;Object(s.useEffect)((function(){return z.d.bpm.value=88,z.e(),z.d.start(),function(){z.d.stop()}}),[]);var R=Object(s.useState)(null),F=Object(E.a)(R,2),h=F[0],p=F[1],b=Object(s.useState)(null),T=Object(E.a)(b,2),G=T[0],f=T[1],v=Object(s.useState)(void 0),y=Object(E.a)(v,2),x=y[0],g=y[1],M=Object(s.useState)(!1),H=Object(E.a)(M,2),_=H[0],w=H[1],D=Object(s.useState)(!0),k=Object(E.a)(D,2),P=k[0],A=k[1],Z=Object(s.useState)(null),q=Object(E.a)(Z,2),X=q[0],B=q[1],U=Object(s.useState)(null),Y=Object(E.a)(U,2),J=Y[0],V=Y[1];Object(s.useEffect)((function(){if(G!==h&&"undefined"!==typeof x&&null!==h&&_){f(h);var e,t=h%m,a=P?l:d,r=Object(O.a)(a);try{for(r.s();!(e=r.n()).done;){var s=e.value;s.steps[t]!==n.OFF&&ae.triggerAttackRelease(te[s.sample],"16n",x,s.steps[t]/2)}}catch(c){r.e(c)}finally{r.f()}return h>=63?(w(!1),g(void 0),p(null),B(null),void V(null)):void 0}}),[x,l,d,h,G,P,_]);var Q=function(e,t){g(e),p(t)},ne=function(){if(!_){var e=new z.c(Q,Object(j.range)(64),"16n");V(e);var t=new z.a(i,(function(){w(!0),z.e(),e.loop=!1,e.start()})).toDestination();B(t),t.loop=!1,t.autostart=!0}},re=function(){_&&(g(void 0),f(null),p(null),null===J||void 0===J||J.stop(),V(null),null===X||void 0===X||X.stop(),B(null),w(!1))};return Object(S.jsxs)(N.a,{container:!0,className:"game-board",alignItems:"center",justify:"center",children:[Object(S.jsx)(K,{turn:a.turn,onDismiss:function(){A(!1),ne()}}),Object(S.jsx)(N.a,{item:!0,xs:3,className:"pc-area portrait-area",children:Object(S.jsx)("div",{className:"pc portrait",children:"\xa0"})},"pc-area"),Object(S.jsx)(N.a,{item:!0,xs:6,className:"parts-area",children:Object(S.jsxs)(N.a,{container:!0,className:"parts",justify:"center",children:[Object(S.jsx)(N.a,{item:!0,xs:12,children:Object(S.jsxs)("h1",{children:[a.turn,": ",c]})},"title"),Object(S.jsx)(N.a,{item:!0,xs:1,children:_&&Object(S.jsx)("span",{children:((null!==h&&void 0!==h?h:0)*C).toFixed(1)})},"time-elapsed"),Object(S.jsx)(N.a,{item:!0,xs:10,children:Object(S.jsx)($,{progress:h,max:64})},"progress"),Object(S.jsx)(N.a,{item:!0,xs:1,children:_&&Object(S.jsx)("span",{children:((64-(null!==h&&void 0!==h?h:0))*C).toFixed(1)})},"time-remaining"),Object(S.jsx)(N.a,{item:!0,xs:12,className:"start-stop",children:Object(S.jsx)(o.a,{className:_?"stop":"play",onClick:_?re:ne,children:"\xa0"})},"start-stop"),Object(S.jsxs)(N.a,{item:!0,xs:12,className:"current-parts",children:[P?Object(S.jsx)(L,{parts:l,currentlyPlayingStep:P?h:null,className:"sampler player"}):Object(S.jsx)(L,{parts:d,currentlyPlayingStep:P?null:h,className:"sampler player"}),Object(S.jsx)(o.a,{variant:"contained",disabled:P,className:P?"selected":"",onClick:function(){A(!0),ne()},children:"Current"}),"\xa0",Object(S.jsx)(o.a,{variant:"contained",disabled:!P,className:P?"":"selected",onClick:function(){A(!1),ne()},children:"Target"})]}),Object(S.jsx)(N.a,{item:!0,xs:12,className:"dialogue",children:Object(S.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]},"parts")}),Object(S.jsx)(N.a,{item:!0,xs:3,className:"npc-area portrait-area",children:Object(S.jsx)("div",{className:"npc portrait",children:"\xa0"})},"npc-area"),Object(S.jsx)(N.a,{item:!0,xs:12},"break"),Object(S.jsxs)(N.a,{item:!0,xs:5,className:"hand-area",children:[Object(S.jsx)("h3",{children:"To-Do"}),Object(S.jsx)(W,{cards:u,onClickCard:function(e){r.playCard(e),ne()},buttonLabel:"Enqueue",className:"hand",unremovable:0})]},"hand-area"),Object(S.jsxs)(N.a,{item:!0,xs:2,className:"next-day",children:[Object(S.jsx)(o.a,{variant:"contained",onClick:r.clearSchedule,children:"Clear"}),Object(S.jsx)("hr",{}),Object(S.jsx)(ee,{G:t,onClick:function(){r.commitSchedule(),re()}})]},"next-day"),Object(S.jsxs)(N.a,{item:!0,xs:5,className:"schedule-area",children:[Object(S.jsx)("h3",{children:"Schedule"}),Object(S.jsx)(W,{cards:I,onClickCard:function(e){r.removeCard(e),ne()},buttonLabel:"Remove",className:"schedule",unremovable:t.startingSchedule.length})]},"schedule-area")]})},numPlayers:1,debug:!1}),re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,182)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};i.a.render(Object(S.jsx)(ne,{}),document.getElementById("root")),re()}},[[149,1,2]]]);
//# sourceMappingURL=main.58347c21.chunk.js.map