(this.webpackJsonpmfgj202106=this.webpackJsonpmfgj202106||[]).push([[0],{107:function(e,t,a){},108:function(e,t,a){},147:function(e,t){},150:function(e,t,a){"use strict";a.r(t);var n,s,r=a(5),c=a(23),i=a.n(c),l=(a(107),a(108),a(97)),O=a(16),o=a(15),d=a(176),E=a(178),u=a(13),N=a(21),I=a(173),F=a(174),h=a(175),R=a(38),j=a(183),b=a(182),T=a(0),p=a(1),G=16,m=60/352;!function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON",e[e.ACCENT=2]="ACCENT"}(n||(n={})),function(e){e[e.INCREMENT=0]="INCREMENT",e[e.DECREMENT=1]="DECREMENT",e[e.ZERO=2]="ZERO",e[e.MAX=3]="MAX",e[e.SHIFT_UP=4]="SHIFT_UP",e[e.SHIFT_RIGHT=5]="SHIFT_RIGHT",e[e.SHIFT_DOWN=6]="SHIFT_DOWN",e[e.SHIFT_LEFT=7]="SHIFT_LEFT",e[e.IGNORE=8]="IGNORE"}(s||(s={}));var f=function(e,t){var a,r=Object(u.a)(t.steps),c=Object(O.a)(e.entries());try{var i=function(){var e=Object(o.a)(a.value,2),c=e[0],i=e[1];r[c]=function(){var e=t.steps[c];switch(i){case s.INCREMENT:return e===n.OFF?n.ON:n.ACCENT;case s.DECREMENT:return e===n.ACCENT?n.ON:n.OFF;case s.MAX:return n.ACCENT;case s.ZERO:return n.OFF;case s.SHIFT_UP:return c+4>G?n.OFF:t.steps[c+4];case s.SHIFT_RIGHT:return c%4===0?n.OFF:t.steps[c-1];case s.SHIFT_DOWN:return c-4<0?n.OFF:t.steps[c-4];case s.SHIFT_LEFT:return c%4+1===4?n.OFF:t.steps[c+1];default:return e}}()};for(c.s();!(a=c.n()).done;)i()}catch(l){c.e(l)}finally{c.f()}t.steps=r},v=function(){function e(t,a,n){Object(T.a)(this,e),this.title=void 0,this.description=void 0,this.image=void 0,this.sampleTarget=void 0,this.pattern=void 0,this.title=t.title,this.description=t.description,this.image=t.image,this.pattern=a,this.sampleTarget=n}return Object(p.a)(e,[{key:"playCard",value:function(e){var t,a=Object(O.a)(e.playerParts);try{for(a.s();!(t=a.n()).done;){var n=t.value;n.sample===this.sampleTarget&&(this.pattern&&f(this.pattern,n))}}catch(s){a.e(s)}finally{a.f()}}}]),e}(),C={makeBed:new v({title:"Make Bed",description:"If you make your bed every morning, you will have accomplished the first task of the day."},[s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE],"bd"),cleanChest:new v({title:"Clean Chest",description:"Next to the bed is a small chest for your personal belongings. It's a bit dusty."},[s.DECREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE],"bd"),layFlat:new v({title:"Lay Flat",description:"Lay your shirt flat on your bed. The foundation of any laundry folding routine."},[s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE],"sd"),fold:new v({title:"Fold",description:"Fold your shirt. Add some complexity! (Assuming you have something to start with...)"},[s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE],"sd"),putAway:new v({title:"Put Away",description:"Put away your freshly folded clothes."},[s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.MAX,s.IGNORE,s.IGNORE,s.IGNORE],"sd"),drop:new v({title:"The Mess",description:"Oops! You dropped your [?] all over the floor. What a mess..."},[s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX,s.MAX],"bd"),mop:new v({title:"Mop",description:"Mop the floor. This mess might be a bit too much to soak up though."},[s.IGNORE,s.IGNORE,s.DECREMENT,s.DECREMENT,s.IGNORE,s.IGNORE,s.DECREMENT,s.DECREMENT,s.IGNORE,s.IGNORE,s.DECREMENT,s.DECREMENT,s.IGNORE,s.IGNORE,s.DECREMENT,s.DECREMENT],"bd"),sweep:new v({title:"Sweep",description:"Sweep the floor. It's a bit hard to get the corners though.."},[s.IGNORE,s.IGNORE,s.DECREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.DECREMENT,s.DECREMENT,s.IGNORE,s.IGNORE,s.DECREMENT,s.DECREMENT,s.IGNORE,s.IGNORE,s.DECREMENT,s.IGNORE],"bd"),vacuum:new v({title:"Vacuum",description:"Suck up whatever is left."},[s.IGNORE,s.IGNORE,s.IGNORE,s.DECREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.DECREMENT],"bd"),emptyTrash:new v({title:"Empty Trash",description:"Those bins were chalk full of [???]! Much better now..."},[s.IGNORE,s.ZERO,s.IGNORE,s.IGNORE,s.IGNORE,s.ZERO,s.IGNORE,s.IGNORE,s.IGNORE,s.ZERO,s.IGNORE,s.IGNORE,s.IGNORE,s.ZERO,s.IGNORE,s.IGNORE],"bd"),feast:new v({title:"Feast",description:"What a delicious meal! What are we going to do about all the dishes?"},[s.INCREMENT,s.INCREMENT,s.IGNORE,s.IGNORE,s.INCREMENT,s.INCREMENT,s.IGNORE,s.MAX,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.MAX,s.IGNORE,s.MAX,s.MAX],"ch"),rearrange:new v({title:"Rearrange",description:"All the chairs and tables have been moved away from their original places!"},[s.SHIFT_LEFT,s.SHIFT_UP,s.SHIFT_LEFT,s.SHIFT_UP,s.SHIFT_DOWN,s.SHIFT_UP,s.SHIFT_DOWN,s.SHIFT_UP,s.SHIFT_DOWN,s.SHIFT_UP,s.SHIFT_DOWN,s.SHIFT_UP,s.SHIFT_DOWN,s.SHIFT_RIGHT,s.SHIFT_DOWN,s.SHIFT_RIGHT],"ch"),bus:new v({title:"Bus",description:"What a delicious meal! What are we going to do about all the dishes?"},[s.SHIFT_LEFT,s.SHIFT_LEFT,s.SHIFT_LEFT,s.SHIFT_UP,s.SHIFT_DOWN,s.IGNORE,s.IGNORE,s.SHIFT_UP,s.SHIFT_DOWN,s.IGNORE,s.IGNORE,s.SHIFT_UP,s.SHIFT_DOWN,s.SHIFT_RIGHT,s.SHIFT_RIGHT,s.SHIFT_RIGHT],"ch"),rinse:new v({title:"Rinse",description:"Rinse the dishes. This will make them easier to clean."},[s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.SHIFT_LEFT,s.SHIFT_UP,s.SHIFT_LEFT,s.SHIFT_UP,s.SHIFT_DOWN,s.SHIFT_RIGHT,s.SHIFT_DOWN,s.SHIFT_RIGHT,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE],"ch"),scour:new v({title:"Scour",description:"Scour the dishes. Really put your back into it."},[s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_UP,s.SHIFT_UP,s.SHIFT_RIGHT,s.SHIFT_DOWN,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_DOWN,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT],"ch"),dry:new v({title:"Dry",description:"Let the dishes dry. What a lovely sight!"},[s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT,s.SHIFT_LEFT,s.SHIFT_RIGHT],"ch"),laundry:new v({title:"Laundry",description:"Do the laundry. You know how!"},[s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.MAX,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.IGNORE,s.MAX,s.IGNORE,s.IGNORE,s.IGNORE],"sd"),floor:new v({title:"Floor",description:"Clean the floor. You know how!"},[s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE,s.INCREMENT,s.IGNORE,s.IGNORE,s.IGNORE],"bd"),dishes:new v({title:"Dishes",description:"Do the dishes. You know how!"},[s.INCREMENT,s.IGNORE,s.MAX,s.IGNORE,s.INCREMENT,s.IGNORE,s.MAX,s.IGNORE,s.INCREMENT,s.IGNORE,s.MAX,s.IGNORE,s.INCREMENT,s.IGNORE,s.MAX,s.IGNORE],"ch")},S=a(4),y=a(151),g=a(180),H=a(172),x=a(14),_=["classSequence"],M=["parts","currentlyPlayingStep"],w=["parts","currentlyPlayingStep"];function A(e){var t=e.classSequence,a=(Object(N.a)(e,_),Object(R.chunk)(t,4));return Object(x.jsx)(x.Fragment,{children:a.map((function(e,t){return Object(x.jsx)("tr",{className:"row",children:e.map((function(e,t){return Object(x.jsx)("td",{className:e,children:Object(x.jsx)(y.a,{className:"step",variant:"outlined"})},"col "+t)}))},"row "+t)}))})}function k(e){var t=e.parts,a=e.currentlyPlayingStep,s=Object(N.a)(e,M),c=Object(r.useState)(0),i=Object(o.a)(c,2),l=i[0],O=i[1],d=t[l],E=d.steps,u=d.sample,I=Object(R.take)(E,G).map((function(e,t){var s="cell ";return s+=n[e]+" ",null!==a&&t===a%G&&(s+="playing"),s}));return Object(r.createElement)("table",Object(S.a)(Object(S.a)({},s),{},{key:l}),Object(x.jsx)("caption",{children:Object(x.jsx)(g.a,{variant:"fullWidth",value:l,onChange:function(e,t){return O(t)},className:"part-selector",children:t.map((function(e,t){return Object(x.jsx)(H.a,{label:e.sample,style:{minWidth:48}},"tab "+t)}))})}),Object(x.jsx)("tbody",{className:u,children:Object(x.jsx)(A,{classSequence:I})}))}function D(e){var t=e.parts,a=e.currentlyPlayingStep,n=Object(N.a)(e,w);return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(k,Object(S.a)({parts:t,currentlyPlayingStep:a},n))})}var L=["cards","buttonLabel","onClickCard","unremovable","className"];function P(e){var t,a=e.cardId,n=e.cardIndex,r=e.buttonLabel,c=e.onClickCard,i=e.onClickEnabled,l=e.viewCard,O=e.isSelected,o=C[a],E=null===(t=o.pattern)||void 0===t?void 0:t.map((function(e){return"cell "+s[e]}));return Object(x.jsxs)(I.a,{variant:"outlined",className:"card"+(O?" selected":""),onClick:l,children:[Object(x.jsxs)(F.a,{children:[Object(x.jsx)("h2",{children:o.title}),o.sampleTarget&&Object(x.jsx)("span",{children:o.sampleTarget}),E&&Object(x.jsx)("table",{className:"pattern",children:Object(x.jsx)("tbody",{children:Object(x.jsx)(A,{classSequence:E})})})]}),Object(x.jsx)(h.a,{children:i&&Object(x.jsx)(d.a,{variant:"contained",onClick:function(){return c(n)},disabled:!O,children:r})})]})}var X=Object(R.range)(6).map((function(e){return"card-show"}));function W(e){var t=e.cards,a=e.buttonLabel,n=e.onClickCard,s=e.unremovable,c=e.className,i=(Object(N.a)(e,L),Object(r.useState)(0)),l=Object(o.a)(i,2),O=l[0],d=l[1],E=Object(r.useState)(X),I=Object(o.a)(E,2),F=I[0],h=I[1],R=Object(r.useState)(t.length),T=Object(o.a)(R,2),p=T[0],G=T[1];Object(r.useEffect)((function(){if(t.length!==p)return h(X),d(0),void G(t.length);for(var e=Object(u.a)(X),a=function(t){var a=t<O?"displace":"show";e[t]="card-"+a},n=0;n<6;n++)a(n);h(e)}),[t,p,O]);var m=function(e){e>=s&&n(e)};return Object(x.jsx)("div",{className:"sequence "+c,children:Object(x.jsx)(j.a,{component:null,children:t.map((function(e,n){return Object(x.jsx)(b.a,{exit:!0,classNames:"card",timeout:200,children:Object(x.jsx)("div",{className:"card-slot "+F[n],style:{zIndex:6-n},children:Object(x.jsx)(P,{cardId:e,cardIndex:n,buttonLabel:a,onClickCard:function(){return m(n)},onClickEnabled:n>=s,viewCard:function(){var e=n!==O?n:n<t.length-1?n+1:0;d(e)},isSelected:n===O})})},e+":"+n)}))})})}var U=a(35),Y=a(181),B="/mfgj202106/samples/levels/",Z=[{title:"The Laundry",description:["Hey Neon, are you settled in yet?","I'm [???] and I'm a specialist in [???].","Your training starts today."],levelTrack:"".concat(B,"unmixed_1_1_88_bpm.ogg"),targetParts:[{sample:"sd",steps:[n.OFF,n.OFF,n.OFF,n.OFF,n.ACCENT,n.OFF,n.OFF,n.OFF,n.OFF,n.OFF,n.OFF,n.OFF,n.ACCENT,n.OFF,n.OFF,n.OFF]}],startingHand:["layFlat","fold","putAway"],startingSchedule:[],hints:["Queue up items on your To-Do list and make a plan for the day!","Why don't we get started by doing the laundry?","Is it just me, or is there something absolutely musical about clean clothes?"]},{title:"The Floor",description:["Nice work on that laundry!","Let me introduce you to [???].","We're only just getting started..."],levelTrack:"".concat(B,"unmixed_1_2_88_bpm.ogg"),targetParts:[{sample:"bd",steps:[n.ACCENT,n.OFF,n.OFF,n.OFF,n.ACCENT,n.OFF,n.OFF,n.OFF,n.ACCENT,n.OFF,n.OFF,n.OFF,n.ACCENT,n.OFF,n.OFF,n.OFF]}],startingHand:["mop","sweep","vacuum","emptyTrash"],startingSchedule:["drop"],hints:["Looks like [???] made a real mess of things when [???] dropped those [???].","Not to worry, though! Cleaning is a subtractive process.","Just like with music, sometimes what's missing is heard loudest."]},{title:"After Dinner",description:["Everything's right back in its place.","You can head to the mess hall now.","[???] will serve you your dinner."],levelTrack:"".concat(B,"unmixed_1_3_88_bpm.ogg"),targetParts:[{sample:"ch",steps:[n.ON,n.OFF,n.ACCENT,n.OFF,n.ON,n.OFF,n.ACCENT,n.OFF,n.ON,n.OFF,n.ACCENT,n.OFF,n.ON,n.OFF,n.ACCENT,n.OFF]}],startingHand:["rearrange","bus","rinse","scour","dry"],startingSchedule:["feast"],hints:["You've been working hard! You've arrived just in time for dinner.","Err.. Or rather, just in time for cleaning the tables and dishes from dinner..."]},{title:"Putting it All Together",description:["Wow, all the tables and dishes look great!","You've worked hard.","It's time to meet the master..."],levelTrack:"".concat(B,"unmixed_test_song_176_bpm.ogg"),targetParts:[{sample:"sd",steps:[n.OFF,n.OFF,n.OFF,n.OFF,n.ACCENT,n.OFF,n.OFF,n.OFF,n.OFF,n.OFF,n.OFF,n.OFF,n.ACCENT,n.OFF,n.OFF,n.OFF]},{sample:"bd",steps:[n.ON,n.OFF,n.OFF,n.OFF,n.ON,n.OFF,n.OFF,n.OFF,n.ON,n.OFF,n.OFF,n.OFF,n.ON,n.OFF,n.OFF,n.OFF]},{sample:"ch",steps:[n.ON,n.OFF,n.ACCENT,n.OFF,n.ON,n.OFF,n.ACCENT,n.OFF,n.ON,n.OFF,n.ACCENT,n.OFF,n.ON,n.OFF,n.ACCENT,n.OFF]}],startingHand:["laundry","floor","dishes"],startingSchedule:[],hints:["Show me what you've done today!"]}];function q(e){var t=e.turn,a=e.onDismiss,n=Object(r.useState)(t),s=Object(o.a)(n,2),c=s[0],i=s[1],l=Object(r.useState)(!0),O=Object(o.a)(l,2),d=O[0],E=O[1];Object(r.useEffect)((function(){t!==c&&E(!0)}),[c,t]);var u=function(){E(!1),i(t),a()},N=Z[t-1];return Object(x.jsx)(Y.a,{open:d,onClose:u,onClick:u,children:Object(x.jsx)(y.a,{variant:"outlined",className:"event-modal",children:Object(x.jsxs)("div",{className:"event-body",children:[Object(x.jsx)("h1",{children:N.title}),N.description.map((function(e,t){return Object(x.jsx)("p",{children:e},t)})),Object(x.jsx)("p",{children:Object(x.jsx)("em",{children:"Press Escape or click/tap anywhere to continue..."})})]})})})}var J=a(177);function z(e){var t=e.progress,a=e.max;return Object(x.jsx)(J.a,{className:"progress-bar",variant:"determinate",value:100*(null===t?0:t+1)/a})}var Q=a(179);function V(e){var t=e.G,a=e.onClick,n=t.hasClearedLevel;return Object(x.jsx)(d.a,{variant:"contained",onClick:a,disabled:!n,className:n?"glow":"",children:"Continue"})}var K={cy:"f4",bd:"e4",ch:"d4",sd:"c4"},$=new U.b({urls:{f4:"CY/E808_CY-12.wav",e4:"BD/E808_BD[short]-03.wav",d4:"CH/E808_CH-06.wav",c4:"SD/E808_SD-15.wav"},baseUrl:"/mfgj202106/samples/808/"}).toDestination();var ee=a(11),te=function(e,t){var a,s,r,c,i=Z[e-1],l=i.targetParts.map((function(e){return{sample:e.sample,steps:Array.from({length:G},(function(){return n.OFF}))}})),O=Object(S.a)(Object(S.a)({},i),{},{playerParts:l,playerHand:Object(u.a)(i.startingHand),playerSchedule:Object(u.a)(null!==(a=i.startingSchedule)&&void 0!==a?a:[]),hasClearedLevel:null!==(s=null===t||void 0===t?void 0:t.hasClearedLevel)&&void 0!==s&&s,hints:Object(u.a)(null!==(r=i.hints)&&void 0!==r?r:[])});return(null!==(c=i.startingSchedule)&&void 0!==c?c:[]).forEach((function(e){return C[e].playCard(O)})),O},ae=function(e){var t,a=Object(O.a)(e.targetParts.entries());try{for(a.s();!(t=a.n()).done;)for(var n=Object(o.a)(t.value,2),s=n[0],r=n[1],c=e.playerParts[s],i=0;i<G;i++)if(c.steps[i]!==r.steps[i])return!1}catch(l){a.e(l)}finally{a.f()}return!0},ne={moves:{playCard:function(e,t,a){var n=e.playerHand[a],s=C[n];if(!s)return ee.x;s.playCard(e),e.playerHand.splice(a,1),e.playerSchedule.push(n),ae(e)&&(e.hasClearedLevel=!0)},removeCard:function(e,t,a){if(a<e.startingSchedule.length)return ee.x;var n=e.playerSchedule[a];if(!n)return ee.x;var s=te(t.turn,e);s.playerHand=Object(u.a)(e.playerHand),s.playerHand.push(n);var r,c=Object(O.a)(e.playerSchedule.entries());try{for(c.s();!(r=c.n()).done;){var i=Object(o.a)(r.value,2),l=i[0],d=i[1];if(!(l===a||l<e.startingSchedule.length))C[d].playCard(s),s.playerSchedule.push(d)}}catch(E){c.e(E)}finally{c.f()}return ae(s)&&(e.hasClearedLevel=!0),s},clearSchedule:function(e,t){return ae(e)&&(e.hasClearedLevel=!0),te(t.turn,e)},commitSchedule:function(e,t){var a,n;e.hasClearedLevel&&(null===(a=t.events)||void 0===a||null===(n=a.endTurn)||void 0===n||n.call(a))}},turn:{onBegin:function(e,t){return te(t.turn)}}},se=Object(l.a)({game:ne,board:function(e){var t=e.G,a=e.ctx,s=e.moves,c=t.title,i=t.hints,l=t.levelTrack,u=t.playerParts,N=t.targetParts,I=t.playerHand,F=t.playerSchedule;t.hasClearedLevel,Object(r.useEffect)((function(){return U.d.bpm.value=88,U.e(),U.d.start(),function(){U.d.stop()}}),[]);var h=Object(r.useState)(i),j=Object(o.a)(h,2),T=j[0],p=j[1];Object(r.useEffect)((function(){p(i)}),[i]);var f=Object(r.useState)(null),v=Object(o.a)(f,2),S=v[0],y=v[1],g=Object(r.useState)(null),H=Object(o.a)(g,2),_=H[0],M=H[1],w=Object(r.useState)(void 0),A=Object(o.a)(w,2),k=A[0],L=A[1],P=Object(r.useState)(!1),X=Object(o.a)(P,2),Y=X[0],B=X[1],Z=Object(r.useState)(!0),J=Object(o.a)(Z,2),ee=J[0],te=J[1],ae=Object(r.useState)(null),ne=Object(o.a)(ae,2),se=ne[0],re=ne[1],ce=Object(r.useState)(null),ie=Object(o.a)(ce,2),le=ie[0],Oe=ie[1],oe=function(e,t){L(e),y(t)},de=function(){if(!Y){var e=new U.c(oe,Object(R.range)(64),"16n");Ee(),Oe(e);var t=new U.a(l,(function(){B(!0),U.e(),e.loop=!1,e.start()})).toDestination();re(t),t.loop=!1,t.autostart=!0}},Ee=Object(r.useCallback)((function(){Y&&(L(void 0),M(null),y(null),null===le||void 0===le||le.stop(),Oe(null),null===se||void 0===se||se.stop(),re(null),B(!1),te(!0))}),[Y,le,se]);return Object(r.useEffect)((function(){if(_!==S&&"undefined"!==typeof k&&null!==S&&Y){M(S);var e,t=S%G,a=ee?u:N,s=Object(O.a)(a);try{for(s.s();!(e=s.n()).done;){var r=e.value;r.steps[t]!==n.OFF&&$.triggerAttackRelease(K[r.sample],"16n",k,r.steps[t]/2)}}catch(c){s.e(c)}finally{s.f()}S>=63&&Ee()}}),[k,u,N,S,_,ee,Y,Ee]),Object(x.jsxs)(E.a,{container:!0,className:"game-board",alignItems:"center",justify:"center",children:[Object(x.jsx)(q,{turn:a.turn,onDismiss:function(){te(!1),de()}}),Object(x.jsx)(E.a,{item:!0,xs:3,className:"pc-area portrait-area",children:Object(x.jsx)("div",{className:"pc portrait",children:"\xa0"})},"pc-area"),Object(x.jsx)(E.a,{item:!0,xs:6,className:"parts-area",children:Object(x.jsxs)(E.a,{container:!0,className:"parts",justify:"center",children:[Object(x.jsx)(E.a,{item:!0,xs:12,children:Object(x.jsxs)("h1",{children:[a.turn,": ",c]})},"title"),Object(x.jsx)(E.a,{item:!0,xs:1,children:Y&&Object(x.jsx)("span",{children:((null!==S&&void 0!==S?S:0)*m).toFixed(1)})},"time-elapsed"),Object(x.jsx)(E.a,{item:!0,xs:10,children:Object(x.jsx)(z,{progress:S,max:64})},"progress"),Object(x.jsx)(E.a,{item:!0,xs:1,children:Y&&Object(x.jsx)("span",{children:((64-(null!==S&&void 0!==S?S:0))*m).toFixed(1)})},"time-remaining"),Object(x.jsx)(E.a,{item:!0,xs:12,className:"start-stop",children:Object(x.jsx)(d.a,{className:Y?"stop":"play",onClick:Y?Ee:de,children:"\xa0"})},"start-stop"),Object(x.jsxs)(E.a,{item:!0,xs:12,className:"current-parts",children:[Object(x.jsx)(Q.a,{children:Object(x.jsx)(b.a,{timeout:200,classNames:ee?"current":"target",children:ee?Object(x.jsx)(D,{parts:u,currentlyPlayingStep:ee?S:null,className:"sampler current"}):Object(x.jsx)(D,{parts:N,currentlyPlayingStep:ee?null:S,className:"sampler target"})},ee?"current":"target")}),Object(x.jsx)(d.a,{variant:"contained",disabled:ee,className:ee?"selected":"",onClick:function(){te(!0),de()},children:"My Parts"}),"\xa0",Object(x.jsx)(d.a,{variant:"contained",disabled:!ee,className:ee?"":"selected",onClick:function(){te(!1),de()},children:"Goal"})]}),Object(x.jsx)(E.a,{item:!0,xs:12,className:"dialogue",children:"undefined"!==typeof T&&T.map((function(e,t){return Object(x.jsx)("p",{children:e},t)}))})]},"parts")}),Object(x.jsx)(E.a,{item:!0,xs:3,className:"npc-area portrait-area",children:Object(x.jsx)("div",{className:"npc portrait",children:"\xa0"})},"npc-area"),Object(x.jsx)(E.a,{item:!0,xs:12},"break"),Object(x.jsxs)(E.a,{item:!0,xs:5,className:"hand-area",children:[Object(x.jsx)("h3",{children:"To-Do"}),Object(x.jsx)(W,{cards:I,onClickCard:function(e){s.playCard(e),te(!0),de(),function(e){var t=C[I[e]];t&&p([t.description])}(e)},buttonLabel:"Enqueue",className:"hand",unremovable:0})]},"hand-area"),Object(x.jsxs)(E.a,{item:!0,xs:2,className:"next-day",children:[Object(x.jsx)(d.a,{variant:"contained",onClick:s.clearSchedule,children:"Reset"}),Object(x.jsx)("hr",{}),Object(x.jsx)(V,{G:t,onClick:function(){s.commitSchedule(),Ee()}})]},"next-day"),Object(x.jsxs)(E.a,{item:!0,xs:5,className:"schedule-area",children:[Object(x.jsx)("h3",{children:"Schedule"}),Object(x.jsx)(W,{cards:F,onClickCard:function(e){s.removeCard(e),de()},buttonLabel:"Remove",className:"schedule",unremovable:t.startingSchedule.length})]},"schedule-area")]})},numPlayers:1,debug:!0}),re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,184)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};i.a.render(Object(x.jsx)(se,{}),document.getElementById("root")),re()}},[[150,1,2]]]);
//# sourceMappingURL=main.3dfd535f.chunk.js.map