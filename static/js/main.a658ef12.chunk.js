(this.webpackJsonpmfgj202106=this.webpackJsonpmfgj202106||[]).push([[0],{136:function(e,t){},139:function(e,t,a){"use strict";a.r(t);var n=a(8),c=a.n(n),r=a(31),s=a.n(r),l=(a(96),a(97),a(84)),i=a(154),o=a(4),d=a(20),u=a(156),j=a(157),p=a(158),b=a(159),h=a(16),O=["hand","onClickCard"];function v(e){var t=e.hand,a=e.onClickCard,n=void 0===a?void 0:a,c=Object(d.a)(e,O);return Object(h.jsx)(i.a,Object(o.a)(Object(o.a)({container:!0},c),{},{children:t.map((function(e,t){return Object(h.jsxs)(u.a,{variant:"outlined",className:"card",children:[Object(h.jsx)(j.a,{children:Object(h.jsx)("h2",{children:e})}),Object(h.jsx)(p.a,{children:Object(h.jsx)(b.a,{variant:"contained",onClick:function(){return n(t)},disabled:!n,children:"Play"})})]})}))}))}var m=a(7),f=a.n(m),x=a(14),g=a(11),C=a(13),y=a(28),k=a(160),S=a(162),P=a(161),w=a(86),N=a(50),F=["parts","currentlyPlayingStep","onClickStep"],H=["parts","onClickStep"];function D(e){var t=e.parts,a=e.currentlyPlayingStep,c=e.onClickStep,r=void 0===c?void 0:c,s=Object(d.a)(e,F),l=Object(n.useState)(0),i=Object(C.a)(l,2),u=i[0],j=i[1],p=t[u].steps,b=Object(N.take)(p,16),O=Object(N.chunk)(b,4);return Object(h.jsxs)("table",Object(o.a)(Object(o.a)({},s),{},{children:[Object(h.jsx)("caption",{children:Object(h.jsx)(k.a,{position:"static",children:Object(h.jsx)(S.a,{value:u,onChange:function(e,t){return j(t)},children:t.map((function(e){return Object(h.jsx)(P.a,{label:e.sample})}))})})}),Object(h.jsx)("tbody",{children:O.map((function(e,t){return Object(h.jsx)("tr",{className:"row",children:e.map((function(e,n){var c="cell ";c+=e?"selected":"unselected",4*t+n===a&&(c+=" playing");var s=4*t+n;return Object(h.jsx)("td",{className:c,children:Object(h.jsx)(w.a,{className:"step",variant:"outlined",onClick:function(){return r&&r(u,s)}})},n)}))},t)}))})]}))}var E={bd:"e4",ch:"d4",sd:"c4"},T=new y.a({urls:{e4:"BD/E808_BD[short]-03.wav",d4:"CH/E808_CH-06.wav",c4:"SD/E808_SD-03.wav"},baseUrl:"/mfgj202106/samples/808/"}).toDestination();function B(e){var t=e.parts,a=e.onClickStep,c=void 0===a?void 0:a,r=Object(d.a)(e,H);Object(n.useEffect)((function(){return y.c.bpm.value=80,y.c.start(),function(){y.c.stop()}}),[]);var s=Object(n.useState)(null),l=Object(C.a)(s,2),i=l[0],u=l[1],j=Object(n.useState)(!1),p=Object(C.a)(j,2),O=p[0],v=p[1],m=function(){var e=Object(g.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=new y.b((function(e,a){if(a>=16)return u(null),void v(!1);u(a);var n,c=Object(x.a)(t);try{for(c.s();!(n=c.n()).done;){var r=n.value;r.steps[a]&&T.triggerAttackRelease(E[r.sample],"16n",e)}}catch(s){c.e(s)}finally{c.f()}}),Object(N.range)(17),"16n"),v(!0),y.d(),a.loop=!1,a.start();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(D,Object(o.a)({parts:t,onClickStep:c,currentlyPlayingStep:i},r)),Object(h.jsx)(b.a,{variant:"contained",onClick:m,disabled:O,children:O?"Playing":"Play"})]})}var L="flip",_={setup:function(){return{playerParts:[{sample:"sd",steps:[!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1]},{sample:"bd",steps:[!0,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1]},{sample:"ch",steps:[!0,!1,!0,!1,!0,!1,!0,!1,!0,!1,!0,!1,!0,!1,!0,!1]}],targetParts:[{sample:"sd",steps:[!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1]},{sample:"bd",steps:[!0,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1]},{sample:"ch",steps:[!0,!1,!0,!1,!0,!1,!0,!1,!0,!1,!0,!1,!0,!1,!0,!0]}],playerHand:[L,L,L,L],currentCard:null}},moves:{playCard:function(e,t,a){var n=e.playerHand[a];switch(n){case L:var c,r;e.currentCard=a,null===(c=t.events)||void 0===c||null===(r=c.setStage)||void 0===r||r.call(c,{stage:"chooseFlipTarget",moveLimit:1});break;default:throw Error("Unrecognized card: ".concat(n))}}},turn:{stages:{chooseFlipTarget:{moves:{chooseTarget:function(e,t,a,n){e.playerParts[a].steps[n]=!e.playerParts[a].steps[n],e.playerHand.splice(e.currentCard,1),e.currentCard=null},cancel:function(e,t){e.currentCard=null}}}}}},G=Object(l.a)({game:_,board:function(e){var t,a=e.G,n=e.ctx,c=e.moves,r=a.playerParts,s=a.targetParts,l=null!==(t=c.chooseTarget)&&void 0!==t?t:void 0;return Object(h.jsxs)(i.a,{container:!0,children:[Object(h.jsxs)(i.a,{item:!0,xs:3,className:"current-parts",children:[Object(h.jsx)("h1",{children:"Current"}),Object(h.jsx)(B,{parts:r,className:"sampler player",onClickStep:l})]}),Object(h.jsxs)(i.a,{item:!0,xs:3,className:"target-parts",children:[Object(h.jsx)("h1",{children:"Goal"}),Object(h.jsx)(B,{parts:s,className:"sampler goal"})]}),Object(h.jsx)(i.a,{item:!0,xs:6}),Object(h.jsxs)(i.a,{item:!0,xs:12,className:"hand-area",children:[Object(h.jsx)("h1",{children:"Hand"}),Object(h.jsx)(v,{hand:a.playerHand,onClickCard:null===n.activePlayers?c.playCard:void 0,className:"hand"})]})]})},numPlayers:1,debug:!0}),I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,164)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(G,{})}),document.getElementById("root")),I()},96:function(e,t,a){},97:function(e,t,a){}},[[139,1,2]]]);
//# sourceMappingURL=main.a658ef12.chunk.js.map