(this.webpackJsonpmfgj202106=this.webpackJsonpmfgj202106||[]).push([[0],{168:function(e,t,n){},169:function(e,t,n){},312:function(e,t){},315:function(e,t,n){"use strict";n.r(t);var a,r,s=n(5),c=n.n(s),o=n(26),i=n.n(o),l=(n(168),n(15)),d=(n(169),n(156)),u=n(16),O=n(341),h=n(21),N=n(4),E=n(337),I=n(338),b=n(339),j=n(340),p=n(30),R=n(348),F=n(347),T=n(29),g=n(0),m=n(1),f=n(14),G=16,C=60/448;!function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON",e[e.ACCENT=2]="ACCENT"}(a||(a={})),function(e){e[e.INCREMENT=0]="INCREMENT",e[e.DECREMENT=1]="DECREMENT",e[e.ZERO=2]="ZERO",e[e.MAX=3]="MAX",e[e.SHIFT_UP=4]="SHIFT_UP",e[e.SHIFT_RIGHT=5]="SHIFT_RIGHT",e[e.SHIFT_DOWN=6]="SHIFT_DOWN",e[e.SHIFT_LEFT=7]="SHIFT_LEFT",e[e.IGNORE=8]="IGNORE"}(r||(r={}));var x=function(e,t){var n,s=Object(f.a)(t.steps),c=Object(u.a)(e.entries());try{var o=function(){var e=Object(l.a)(n.value,2),c=e[0],o=e[1];s[c]=function(){var e=t.steps[c];switch(o){case r.INCREMENT:return e===a.OFF?a.ON:a.ACCENT;case r.DECREMENT:return e===a.ACCENT?a.ON:a.OFF;case r.MAX:return a.ACCENT;case r.ZERO:return a.OFF;case r.SHIFT_UP:return c+4>G?a.OFF:t.steps[c+4];case r.SHIFT_RIGHT:return c%4===0?a.OFF:t.steps[c-1];case r.SHIFT_DOWN:return c-4<0?a.OFF:t.steps[c-4];case r.SHIFT_LEFT:return c%4+1===4?a.OFF:t.steps[c+1];default:return e}}()};for(c.s();!(n=c.n()).done;)o()}catch(i){c.e(i)}finally{c.f()}t.steps=s},y=function(){function e(t,n,a){Object(g.a)(this,e),this.title=void 0,this.description=void 0,this.image=void 0,this.sampleTarget=void 0,this.pattern=void 0,this.title=t.title,this.description=t.description,this.image=t.image,this.pattern=n,this.sampleTarget=a}return Object(m.a)(e,[{key:"playCard",value:function(e){var t,n=Object(u.a)(e.playerParts);try{for(n.s();!(t=n.n()).done;){var a=t.value;a.sample===this.sampleTarget&&(this.pattern&&x(this.pattern,a))}}catch(r){n.e(r)}finally{n.f()}}}]),e}(),v={makeBed:new y({title:"Make Bed",description:"\n        Good job!\n\n        Pay attention to the order that you\u2019re playing these cards in, or you could really get messed up.\n      "},[r.INCREMENT,r.IGNORE,r.IGNORE,r.IGNORE,r.INCREMENT,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE],"bd"),cleanChest:new y({title:"Clean Chest",description:"\n        Hey, you've found **ACCENTED** beats!\n        \n        A beat can be **NORMAL** or **ACCENTED**, which just means it's being hit harder.\n      "},[r.INCREMENT,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.INCREMENT,r.IGNORE,r.IGNORE,r.IGNORE],"bd"),placeBelongings:new y({title:"Place Belongings",description:"\n        Wonderful! You've got yourself a solid foundation.\n\n        Click **NEXT** to continue to the next level.\n      "},[r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.MAX,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE],"bd"),cobwebs:new y({title:"Cobwebs",description:"\n        Why don't we start by dusting away all these cobwebs?\n\n        They sure are layered pretty thick in these corners.\n      "},[r.MAX,r.INCREMENT,r.INCREMENT,r.MAX,r.INCREMENT,r.INCREMENT,r.INCREMENT,r.INCREMENT,r.INCREMENT,r.INCREMENT,r.INCREMENT,r.INCREMENT,r.MAX,r.INCREMENT,r.INCREMENT,r.MAX],"ch"),dust1:new y({title:"Dust 1",description:"\n        Yep! But, you'll find that practicing now will make you fluent in the long run. \n      "},[r.IGNORE,r.DECREMENT,r.IGNORE,r.DECREMENT,r.IGNORE,r.DECREMENT,r.IGNORE,r.DECREMENT,r.IGNORE,r.DECREMENT,r.IGNORE,r.DECREMENT,r.IGNORE,r.DECREMENT,r.IGNORE,r.DECREMENT],"ch"),dust2:new y({title:"Dust 2",description:"\n        Nice work! But are you ready to put them together?\n        \n        Click ***NEXT*** to continue to the next level.\n      "},[r.DECREMENT,r.IGNORE,r.IGNORE,r.DECREMENT,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.DECREMENT,r.IGNORE,r.IGNORE,r.IGNORE],"ch"),washBedsheets:new y({title:"Wash Bedsheets",description:"\n        ***Neon:*** Some of these cards have different symbols in the background!\n        \n        Does that mean they affect different grids?\n      "},[r.IGNORE,r.INCREMENT,r.IGNORE,r.INCREMENT,r.IGNORE,r.INCREMENT,r.IGNORE,r.INCREMENT,r.IGNORE,r.INCREMENT,r.IGNORE,r.INCREMENT,r.IGNORE,r.INCREMENT,r.INCREMENT,r.INCREMENT],"ch"),dryBedsheets:new y({title:"Dry Bedsheets",description:"\n        Exactly! Matching the symbol on a card to its respective grid lets you move things around there without messing up the other grid.\n      "},[r.SHIFT_LEFT,r.SHIFT_RIGHT,r.SHIFT_LEFT,r.SHIFT_RIGHT,r.SHIFT_LEFT,r.SHIFT_RIGHT,r.SHIFT_LEFT,r.SHIFT_RIGHT,r.SHIFT_LEFT,r.SHIFT_RIGHT,r.SHIFT_LEFT,r.SHIFT_RIGHT,r.SHIFT_LEFT,r.SHIFT_RIGHT,r.SHIFT_LEFT,r.SHIFT_RIGHT],"ch"),gatherBedsheets:new y({title:"Gather Bedsheets",description:"\n        ***Neon:*** You know, this is getting kind of hard to keep track of what goes where...\n\n        ***Cadence:*** You'll get there. I know you\u2019ll master these grids in no time!\n      "},[r.INCREMENT,r.IGNORE,r.IGNORE,r.IGNORE,r.MAX,r.IGNORE,r.IGNORE,r.IGNORE,r.INCREMENT,r.IGNORE,r.IGNORE,r.IGNORE,r.MAX,r.IGNORE,r.IGNORE,r.IGNORE],"bd"),placeBedsheets:new y({title:"Place Bedsheets",description:"\n        Fantastic! You're picking this up so quickly!\n        \n        Click Next to continue to the next level.\n      "},[r.SHIFT_UP,r.SHIFT_UP,r.SHIFT_UP,r.SHIFT_UP,r.SHIFT_DOWN,r.SHIFT_DOWN,r.SHIFT_DOWN,r.SHIFT_DOWN,r.SHIFT_UP,r.SHIFT_UP,r.SHIFT_UP,r.SHIFT_UP,r.SHIFT_DOWN,r.SHIFT_DOWN,r.SHIFT_DOWN,r.SHIFT_DOWN],"bd"),layFlat:new y({title:"Lay Flat",description:"Lay your shirt flat on your bed. The foundation of any laundry folding routine."},[r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.INCREMENT,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE],"sd"),fold:new y({title:"Fold",description:"Fold your shirt. Add some complexity! (Assuming you have something to start with...)"},[r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.INCREMENT,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE],"sd"),putAway:new y({title:"Put Away",description:"Put away your freshly folded clothes."},[r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.MAX,r.IGNORE,r.IGNORE,r.IGNORE],"sd"),drop:new y({title:"The Mess",description:"Oops! You dropped your [?] all over the floor. What a mess..."},[r.MAX,r.MAX,r.MAX,r.MAX,r.MAX,r.MAX,r.MAX,r.MAX,r.MAX,r.MAX,r.MAX,r.MAX,r.MAX,r.MAX,r.MAX,r.MAX],"bd"),mop:new y({title:"Mop",description:"Mop the floor. This mess might be a bit too much to soak up though."},[r.IGNORE,r.IGNORE,r.DECREMENT,r.DECREMENT,r.IGNORE,r.IGNORE,r.DECREMENT,r.DECREMENT,r.IGNORE,r.IGNORE,r.DECREMENT,r.DECREMENT,r.IGNORE,r.IGNORE,r.DECREMENT,r.DECREMENT],"bd"),sweep:new y({title:"Sweep",description:"Sweep the floor. It's a bit hard to get the corners though.."},[r.IGNORE,r.IGNORE,r.DECREMENT,r.IGNORE,r.IGNORE,r.IGNORE,r.DECREMENT,r.DECREMENT,r.IGNORE,r.IGNORE,r.DECREMENT,r.DECREMENT,r.IGNORE,r.IGNORE,r.DECREMENT,r.IGNORE],"bd"),vacuum:new y({title:"Vacuum",description:"Suck up whatever is left."},[r.IGNORE,r.IGNORE,r.IGNORE,r.DECREMENT,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.DECREMENT],"bd"),emptyTrash:new y({title:"Empty Trash",description:"Those bins were chalk full of [???]! Much better now..."},[r.IGNORE,r.ZERO,r.IGNORE,r.IGNORE,r.IGNORE,r.ZERO,r.IGNORE,r.IGNORE,r.IGNORE,r.ZERO,r.IGNORE,r.IGNORE,r.IGNORE,r.ZERO,r.IGNORE,r.IGNORE],"bd"),feast:new y({title:"Feast",description:"What a delicious meal! What are we going to do about all the dishes?"},[r.INCREMENT,r.INCREMENT,r.IGNORE,r.IGNORE,r.INCREMENT,r.INCREMENT,r.IGNORE,r.MAX,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.MAX,r.IGNORE,r.MAX,r.MAX],"ch"),rearrange:new y({title:"Rearrange",description:"\n        A circle to the left and a circle to the right.\n\n        How do I use this card?\n      "},[r.SHIFT_LEFT,r.SHIFT_UP,r.SHIFT_LEFT,r.SHIFT_UP,r.SHIFT_DOWN,r.SHIFT_UP,r.SHIFT_DOWN,r.SHIFT_UP,r.SHIFT_DOWN,r.SHIFT_UP,r.SHIFT_DOWN,r.SHIFT_UP,r.SHIFT_DOWN,r.SHIFT_RIGHT,r.SHIFT_DOWN,r.SHIFT_RIGHT],"ch"),bus:new y({title:"Bus",description:"\n        Whoah, all those notes were rotated!\n        \n        Interestingly, I still have the same number of accented and regular notes!\n      "},[r.SHIFT_LEFT,r.SHIFT_LEFT,r.SHIFT_LEFT,r.SHIFT_UP,r.SHIFT_DOWN,r.IGNORE,r.IGNORE,r.SHIFT_UP,r.SHIFT_DOWN,r.IGNORE,r.IGNORE,r.SHIFT_UP,r.SHIFT_DOWN,r.SHIFT_RIGHT,r.SHIFT_RIGHT,r.SHIFT_RIGHT],"ch"),rinse:new y({title:"Rinse",description:"Let's rotate some notes. Did you notice which notes weren't touched?"},[r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.SHIFT_LEFT,r.SHIFT_UP,r.SHIFT_LEFT,r.SHIFT_UP,r.SHIFT_DOWN,r.SHIFT_RIGHT,r.SHIFT_DOWN,r.SHIFT_RIGHT,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE],"ch"),scour:new y({title:"Scour",description:"What a weird pattern. Did that do what you expected?"},[r.SHIFT_LEFT,r.SHIFT_RIGHT,r.SHIFT_LEFT,r.SHIFT_RIGHT,r.SHIFT_LEFT,r.SHIFT_UP,r.SHIFT_UP,r.SHIFT_RIGHT,r.SHIFT_DOWN,r.SHIFT_RIGHT,r.SHIFT_LEFT,r.SHIFT_DOWN,r.SHIFT_LEFT,r.SHIFT_RIGHT,r.SHIFT_LEFT,r.SHIFT_RIGHT],"ch"),dry:new y({title:"Dry",description:"Doesn't this look like it should go last?"},[r.SHIFT_LEFT,r.SHIFT_RIGHT,r.SHIFT_LEFT,r.SHIFT_RIGHT,r.SHIFT_LEFT,r.SHIFT_RIGHT,r.SHIFT_LEFT,r.SHIFT_RIGHT,r.SHIFT_LEFT,r.SHIFT_RIGHT,r.SHIFT_LEFT,r.SHIFT_RIGHT,r.SHIFT_LEFT,r.SHIFT_RIGHT,r.SHIFT_LEFT,r.SHIFT_RIGHT],"ch"),laundry:new y({title:"Laundry",description:"Do the laundry. You know how!"},[r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.MAX,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.IGNORE,r.MAX,r.IGNORE,r.IGNORE,r.IGNORE],"sd"),floor:new y({title:"Floor",description:"Clean the floor. You know how!"},[r.INCREMENT,r.IGNORE,r.IGNORE,r.IGNORE,r.INCREMENT,r.IGNORE,r.IGNORE,r.IGNORE,r.INCREMENT,r.IGNORE,r.IGNORE,r.IGNORE,r.INCREMENT,r.IGNORE,r.IGNORE,r.IGNORE],"bd"),dishes:new y({title:"Dishes",description:"Do the dishes. You know how!"},[r.INCREMENT,r.IGNORE,r.MAX,r.IGNORE,r.INCREMENT,r.IGNORE,r.MAX,r.IGNORE,r.INCREMENT,r.IGNORE,r.MAX,r.IGNORE,r.INCREMENT,r.IGNORE,r.MAX,r.IGNORE],"ch")},k=n(316),S=n(345),w=n(336),H=n(10),M=["classSequence"],_=["parts","currentlyPlayingStep","tabIndex","setTabIndex"],A=["parts","currentlyPlayingStep","tabIndex","setTabIndex"],D=new T.b({urls:{c4:"bubble.ogg"},baseUrl:"/mfgj202106/samples/scene/"}).toDestination();function L(e){var t=e.classSequence,n=(Object(h.a)(e,M),Object(p.chunk)(t,4));return Object(H.jsx)(H.Fragment,{children:n.map((function(e,t){return Object(H.jsx)("tr",{className:"row",children:e.map((function(e,t){return Object(H.jsx)("td",{className:e,children:Object(H.jsx)(k.a,{className:"step",variant:"outlined"})},"col "+t)}))},"row "+t)}))})}function P(e){var t=e.parts,n=e.currentlyPlayingStep,r=e.tabIndex,c=e.setTabIndex,o=Object(h.a)(e,_),i=Math.min(t.length-1,r),l=t[i],d=l.steps,u=l.sample,O=Object(p.take)(d,G).map((function(e,t){var r="cell ";return r+=a[e]+" ",null!==n&&t===n%G&&(r+="playing"),r}));return Object(s.createElement)("table",Object(N.a)(Object(N.a)({},o),{},{key:i}),Object(H.jsx)("caption",{children:Object(H.jsx)(S.a,{variant:"fullWidth",value:i,onChange:function(e,t){c(t),D.triggerAttackRelease("c4",1)},className:"part-selector",children:t.map((function(e,t){return Object(H.jsx)(w.a,{label:e.sample,style:{minWidth:48}},"tab "+t)}))})}),Object(H.jsx)("tbody",{className:u,children:Object(H.jsx)(L,{classSequence:O})}))}function W(e){var t=e.parts,n=e.currentlyPlayingStep,a=e.tabIndex,r=e.setTabIndex,s=Object(h.a)(e,A);return Object(H.jsx)(H.Fragment,{children:Object(H.jsx)(P,Object(N.a)({parts:t,tabIndex:a,setTabIndex:r,currentlyPlayingStep:n},s))})}var X=["cards","buttonLabel","onClickCard","unremovable","className","emphasizeButton"],B=new T.b({urls:{c4:"1.ogg",d4:"2.ogg",e4:"3.ogg",f4:"4.ogg",g4:"5.ogg"},baseUrl:"/mfgj202106/samples/cards/"}).toDestination();function U(e){var t,n=e.cardId,a=e.cardIndex,s=e.buttonLabel,c=e.onClickCard,o=e.onClickEnabled,i=e.viewCard,l=e.isSelected,d=e.emphasizeButton,u=e.leftOffset,O=v[n],h=null===(t=O.pattern)||void 0===t?void 0:t.map((function(e){return"cell "+r[e]}));return Object(H.jsxs)(E.a,{variant:"outlined",className:"card "+O.sampleTarget+(l?" selected":""),onClick:i,style:{marginLeft:u+"px"},children:[Object(H.jsx)(I.a,{children:h&&Object(H.jsx)("table",{className:"pattern",children:Object(H.jsx)("tbody",{children:Object(H.jsx)(L,{classSequence:h})})})}),Object(H.jsx)(b.a,{children:o?Object(H.jsx)(j.a,{variant:"contained",onClick:function(e){c(a),e.stopPropagation()},disabled:!l,className:d?"emphasis":"",children:s}):Object(H.jsx)("div",{className:"card-fixed",children:"FIXED"})})]})}var Y=function(e,t){switch(t.type){case"enter":return Object(N.a)(Object(N.a)({},e),{},{renderedCardCount:e.renderedCardCount+1});case"exited":return Object(N.a)(Object(N.a)({},e),{},{renderedCardCount:e.renderedCardCount-1});case"select-card":var n=t.value!==e.selectedCard?t.value:t.value<e.cardCount-1?t.value+1:0,a=Object(p.range)(6).map((function(e){return"card-"+function(e){return e<n?"displace":"show"}(e)}));return Object(N.a)(Object(N.a)({},e),{},{cardClasses:a,selectedCard:n});case"reset":return Object(N.a)(Object(N.a)({},t.value),{},{renderedCardCount:e.renderedCardCount});default:throw new Error("Unrecognized action.")}};function q(e){var t=e.cards,n=e.buttonLabel,a=e.onClickCard,r=e.unremovable,c=e.className,o=e.emphasizeButton,i=(Object(h.a)(e,X),Object(s.useRef)(!1)),d=Object(p.range)(6).map((function(){return"card-show"})),u=Object(s.useReducer)(Y,{cardCount:t.length,selectedCard:0,cardClasses:d,renderedCardCount:t.length}),O=Object(l.a)(u,2),N=O[0],E=O[1];return Object(s.useEffect)((function(){t.length!==N.cardCount&&E({type:"reset",value:{cardCount:t.length,selectedCard:0,cardClasses:d}})}),[t.length,d,N.cardCount]),Object(s.useEffect)((function(){i.current?function(){var e;B.triggerAttackRelease(null!==(e=Object(p.sample)(["c4","d4","e4","f4","g4"]))&&void 0!==e?e:"c4",.2)}():i.current=!0}),[N.selectedCard,t.length]),Object(H.jsx)("div",{className:"sequence "+c,children:Object(H.jsx)(R.a,{component:null,children:t.map((function(e,s){return Object(H.jsx)(F.a,{enter:!0,exit:!0,classNames:"card",timeout:200,onEnter:function(){return E({type:"enter",value:t.length})},onExited:function(){return E({type:"exited",value:t.length})},children:Object(H.jsxs)("div",{className:"card-slot "+N.cardClasses[s],style:{zIndex:6-s},children:[Object(H.jsx)(U,{cardId:e,cardIndex:s,buttonLabel:n,onClickCard:function(){return a(s)},onClickEnabled:t.length-s>r,viewCard:function(){E({type:"select-card",value:s})},isSelected:s===N.selectedCard,emphasizeButton:o,leftOffset:18*(6-N.renderedCardCount-1)}),t.length-s>r&&Object(H.jsx)("div",{className:"card-order",onClick:function(){return E({type:"select-card",value:s})},children:t.length-s-r})]})},e)}))})})}var z=n(346),Z="/mfgj202106/samples/levels/",J=[{albumIndex:0,title:"The Baseline Bass",introDialogue:[{speaker:"cadence",text:"\n          We'll start simple.\n        "},{speaker:"cadence",text:"\n          The first step to any rhythm is the foundation you build on.\n        "}],levelTrack:"".concat(Z,"1_1.ogg"),targetParts:[{sample:"bd",steps:[a.ACCENT,a.OFF,a.OFF,a.OFF,a.ON,a.OFF,a.OFF,a.OFF,a.ACCENT,a.OFF,a.OFF,a.OFF,a.ON,a.OFF,a.OFF,a.OFF]}],startingHand:["makeBed","cleanChest","placeBelongings"],startingSchedule:[],hints:["Use the cards in your hand to modify those beats on your grid.","See if you can't make your grid look like mine."]},{albumIndex:0,title:"Hi Hat Flavor",introDialogue:[{speaker:"neon",text:"Okay, that's my foundation. We can move on, right?"},{speaker:"cadence",text:"Patience, Neon. There's still more to teach."}],levelTrack:"".concat(Z,"1_1.ogg"),targetParts:[{sample:"ch",steps:[a.ON,a.OFF,a.ON,a.OFF,a.ON,a.OFF,a.ON,a.OFF,a.ON,a.OFF,a.ON,a.OFF,a.ON,a.OFF,a.ON,a.ON]}],startingHand:["dust1","dust2"],startingSchedule:["cobwebs"],hints:["Use the cards in your hand to modify those beats on your grid.","See if you can't make your grid look like mine.","***Neon:*** Hey didn't I just do this?"]},{albumIndex:0,title:"Combination Station",introDialogue:[{speaker:"neon",text:"Alright, hit me with your next shot!"},{speaker:"cadence",text:"You\u2019re doing great. But how will you do when you have *two* grids to work with?"}],levelTrack:"".concat(Z,"1_1.ogg"),targetParts:[{sample:"ch",steps:[a.ON,a.OFF,a.ON,a.OFF,a.ON,a.OFF,a.ON,a.OFF,a.ON,a.OFF,a.ON,a.OFF,a.ON,a.OFF,a.ON,a.ON]},{sample:"bd",steps:[a.ACCENT,a.OFF,a.OFF,a.OFF,a.ON,a.OFF,a.OFF,a.OFF,a.ACCENT,a.OFF,a.OFF,a.OFF,a.ON,a.OFF,a.OFF,a.OFF]}],startingHand:["washBedsheets","dryBedsheets","gatherBedsheets","placeBedsheets"],startingSchedule:[],hints:["Here, both of your grids need to match both of mine before we can move on.","You can switch between them with the buttons labelled ***CH*** and ***BD*** above the grid.","What are ***CH*** and ***BD*** short for? Well that's a secret ^_^."]},{albumIndex:0,title:"The REAL Fun",introDialogue:[{speaker:"neon",text:"The *real* fun? Were we having fake fun before?"},{speaker:"cadence",text:"It's just a saying, Neon. Are you ready?"}],levelTrack:"".concat(Z,"1_1.ogg"),targetParts:[{sample:"ch",steps:[a.ON,a.OFF,a.ACCENT,a.OFF,a.ON,a.OFF,a.ACCENT,a.OFF,a.ON,a.OFF,a.ACCENT,a.OFF,a.ON,a.OFF,a.ACCENT,a.OFF]}],startingHand:["bus","rinse","rearrange","dry","scour"],startingSchedule:["feast"],hints:["Don't let it overwhelm you!","Each piece is doing exactly what we've done before, it's just a matter of application.","Can you keep up?"]},{albumIndex:0,title:"To Be Continued...",introDialogue:[{speaker:"cadence",text:"Thanks for playing!"},{speaker:"neon",text:"I guess the credits and acknowledgments go here?"},{speaker:"cadence",text:"Sure. This project was built with [ReactJS](https://reactjs.org/) and [boardgame.io](https://boardgame.io/)."},{speaker:"cadence",text:"Many general purpose icons and UI components were from [Material UI](https://material-ui.com/)."},{speaker:"cadence",text:"Those in-game drum samples were taken from the [SampleRadar 808 Collection](https://www.musicradar.com/news/sampleradar-378-free-808-drum-samples)."},{speaker:"neon",text:"Oh! And the source code and raw assets live on [GitHub](https://github.com/shaoster/mfgj202106)."},{speaker:"neon",text:"Thanks for playing!"}],levelTrack:"".concat(Z,"1_2.ogg"),targetParts:[{sample:"sd",steps:[a.OFF,a.OFF,a.OFF,a.OFF,a.ACCENT,a.OFF,a.OFF,a.OFF,a.OFF,a.OFF,a.OFF,a.OFF,a.ACCENT,a.OFF,a.OFF,a.OFF]},{sample:"bd",steps:[a.ACCENT,a.OFF,a.OFF,a.OFF,a.ON,a.OFF,a.OFF,a.OFF,a.ACCENT,a.OFF,a.OFF,a.OFF,a.ON,a.OFF,a.OFF,a.OFF]},{sample:"ch",steps:[a.ON,a.OFF,a.ACCENT,a.OFF,a.ON,a.OFF,a.ACCENT,a.OFF,a.ON,a.OFF,a.ACCENT,a.OFF,a.ON,a.OFF,a.ACCENT,a.OFF]}],startingHand:[],startingSchedule:[],hints:["To be continued..."]}],V=n(55),$=n.n(V);function K(e){for(var t,n,a,r=/^([ \t]*)(.*)\n/gm;null!==(n=r.exec(e));)if(n[2]){if(!(t=n[1].length))break;a=void 0!==a?Math.min(a,t):t}return a&&(e=e.replace(new RegExp("^[ \t]{"+a+"}(.*\n)","gm"),"$1")),e}var Q=new T.b({urls:{c4:"bubble.ogg"},baseUrl:"/mfgj202106/samples/scene/"}).toDestination();function ee(e){var t=e.skip,n=e.dialogue,a=e.header,r=e.song,c=e.npc;Object(s.useEffect)((function(){var e=new T.a(r).toDestination();return e.loop=!0,e.autostart=!0,function(){e.stop()}}),[r]);var o=Object(s.useState)(0),i=Object(l.a)(o,2),d=i[0],u=i[1];return Object(H.jsx)(k.a,{variant:"outlined",className:"cutscene",onClick:function(e){if(e.stopPropagation(),d+1<n.length)return u(d+1),void Q.triggerAttackRelease("c4",1)},children:Object(H.jsxs)(O.a,{container:!0,className:"game-board",alignItems:"center",justify:"center",children:[Object(H.jsxs)(O.a,{item:!0,xs:3,className:"pc-area portrait-area",children:[Object(H.jsx)("h1",{children:"Neon"}),Object(H.jsx)("div",{className:"pc portrait",children:"\xa0"})]},"pc-area"),Object(H.jsxs)(O.a,{item:!0,xs:6,className:"cutscene-body",children:[a||Object(H.jsx)(H.Fragment,{}),Object(H.jsx)("div",{className:"continue-or-skip",children:d+1<n.length?Object(H.jsxs)(H.Fragment,{children:["Click anywhere to continue or",Object(H.jsx)(j.a,{variant:"contained",onClick:t,children:"Skip"})]}):Object(H.jsx)(j.a,{variant:"contained",onClick:t,children:"Continue"})}),Object(H.jsx)("hr",{}),Object(p.take)(n,d+1).map((function(e,t){return Object(H.jsx)($.a,{className:"dialog "+e.speaker+(t===d?" current":""),children:K(e.text)},t)})),Object(H.jsx)("div",{className:"continue-or-skip",children:d+1>=n.length&&Object(H.jsx)(j.a,{variant:"contained",onClick:t,children:"Continue"})})]}),Object(H.jsxs)(O.a,{item:!0,xs:3,className:"npc-area portrait-area ".concat(c.toLowerCase()),children:[Object(H.jsx)("h1",{children:c}),Object(H.jsx)("div",{className:"".concat(c.toLowerCase()," portrait"),children:"\xa0"})]},"npc-area")]})})}function te(e){var t=e.turn,n=e.onDismiss,a=Object(s.useState)(t),r=Object(l.a)(a,2),c=r[0],o=r[1],i=Object(s.useState)(!0),d=Object(l.a)(i,2),u=d[0],O=d[1];Object(s.useEffect)((function(){t!==c&&O(!0)}),[c,t]);var h=function(){O(!1),o(t),n()},N=J[t-1];return Object(H.jsx)(z.a,{open:u,onClose:h,onClick:h,children:Object(H.jsx)(ee,{skip:h,dialogue:N.introDialogue,header:Object(H.jsx)("h1",{children:N.title}),song:N.levelTrack,npc:"Cadence"})})}var ne=n(342);function ae(e){var t=e.progress,n=e.max;return Object(H.jsx)(ne.a,{className:"progress-bar",variant:"determinate",value:100*(null===t?0:t+1)/n})}var re=n(344),se=n(343),ce=["children","onClick","tutorialMd","showTutorial","onAcknowledge","className"];function oe(e){var t=e.children,n=e.onClick,a=e.tutorialMd,r=e.showTutorial,o=e.onAcknowledge,i=e.className,d=Object(h.a)(e,ce),u=Object(s.useRef)(null),O=c.a.useState(null),E=Object(l.a)(O,2),I=E[0],b=E[1],R=Object(s.useState)(Object(p.uniqueId)()),F=Object(l.a)(R,1)[0];return Object(s.useEffect)((function(){u.current&&b(u.current)}),[u]),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(j.a,Object(N.a)(Object(N.a)({},d),{},{className:r?i?"".concat(i," glow"):"glow":i,"aria-describedby":F,ref:u,onClick:function(e){n(),o()},children:t})),Object(H.jsx)(se.a,{id:F,anchorEl:I,placement:"bottom",open:r,children:Object(H.jsxs)(k.a,{className:"tutorial-popper",children:[Object(H.jsx)("div",{className:"up-arrow",children:"\xa0"}),Object(H.jsx)($.a,{children:K(null!==a&&void 0!==a?a:"")})]})})]})}var ie=[{key:"start-stop",textMarkdown:"\n      Click here to replay the steps in the current grid or to stop if the music is already playing.\n\n      Notice the sounds (or lack thereof) made when the steps light up below!\n    "},{key:"goal",textMarkdown:"\n      Didn't quite catch what pattern you were supposed to match?\n\n      Click here to see and hear it again!\n    "},{key:"current",textMarkdown:"\n      Want to switch back to what your current pattern looks like while the music is playing?\n\n      Click this button to swap back to your current pattern!\n\n      Try switching back and forth between **MY PARTS** and **GOAL**!\n    "},{key:"reset",textMarkdown:"\n      Next, try clicking **PLACE** on the cards to the left.\n\n      Notice how they are added to the schedule on the right?\n\n      In both the **TO-DO** and **Schedule**, you can click on the body of the cards to flip through them.\n\n      (This becomes critical on later levels when order matters!)\n\n      Also notice that you can **REMOVE** any cards you **PLACE**.\n\n      Click **RESET** here to restore the level to its original state and continue.\n    "},{key:"next",textMarkdown:"\n      That's pretty much it for the tutorial!\n\n      Once you've clicked **PLACE** on all the cards in your **TO-DO**, the **NEXT** button will light up.\n\n      When you think you've got a pretty good handle on what these buttons do, click **NEXT** to continue.\n    "}];var le=[{title:"Mastering Rhythm",dialogue:[{speaker:"neon",text:"Master Cadence, I\u2019ve traveled too far to come here. I *demand* that you teach me rhythm."},{speaker:"cadence",text:"Well **that's** a fine \u2018good morning\u2019. What's your name?"},{speaker:"neon",text:"It's Neon, lady."},{speaker:"cadence",text:"Well, Neon, I\u2019m afraid I can't teach you anything new without fixing what you already have."},{speaker:"neon",text:"Wh\u2026 huh?"},{speaker:"cadence",text:"Step inside, we\u2019ve got a lot of work to do."}]},{title:"The Real Fun",dialogue:[{speaker:"neon",text:"The real fun? Were we having fake fun before?"},{speaker:"cadence",text:"It's just a saying, Neon. Are you ready?"}]}];var de=function(e){var t=e.index,n=e.acknowledge,a=le[t];return Object(H.jsx)(z.a,{open:!0,onClose:n,onClick:n,children:Object(H.jsx)(ee,{skip:n,dialogue:a.dialogue,header:Object(H.jsxs)("h1",{children:["Album ",t+1,": ",a.title]}),song:"/mfgj202106/samples/scene/1_full.ogg",npc:"Cadence"})})},ue={cy:{pitch:"f4",duration:"2n"},bd:{pitch:"e4",duration:"16n"},ch:{pitch:"d4",duration:"16n"},sd:{pitch:"c4",duration:"16n"}},Oe=new T.b({urls:{f4:"CY/E808_CY-12[short].ogg",e4:"BD/E808_BD[short]-03.wav",d4:"CH/E808_CH-06.wav",c4:"SD/E808_SD-07.wav",a4:"../levels/clear.ogg"},baseUrl:"/mfgj202106/samples/808/"}).toDestination();function he(){return Object(H.jsxs)("div",{className:"credits",children:[Object(H.jsx)("p",{children:"Programming & Dev Lead: @shaoster"}),Object(H.jsx)("p",{children:"Sound Design: @SoundFont+"}),Object(H.jsx)("p",{children:"Art and Writing: @soupsong"}),Object(H.jsx)("p",{children:Object(H.jsx)("em",{children:"Made for My First Game Jam: Summer 2021"})})]})}var Ne=[{speaker:"neon",text:"I don't get it, Avery! I'm a musical genius, top of my class and top of my game, making new music should be easy! But no matter what I do, nothing good comes out. I just feel so stuck..."},{speaker:"avery",text:"Maybe you should see Master Cadence?"},{speaker:"neon",text:"What?"},{speaker:"avery",text:"Rhythm Master Cadence, she lives kind of clo--"},{speaker:"neon",text:"I *know* who Master Cadence is, and I'm not going to get her help. Do I look like a baby to you?"},{speaker:"avery",text:"N-- No, no! I just thought that if you needed help, going back to basics would be a good place to sta--"},{speaker:"neon",text:"*Help?* I'm *fine* by myself! If your idea of 'help' is sending me to someone who\u2019s going to teach me my *quarter notes*, just leave now."},{speaker:"avery",text:"...Yeah, okay. I'll leave. When you *do* realize you need help, go to Master Cadence, since I can't do anything else for you."},{speaker:"avery",text:"Goodbye, Neon."},{speaker:"neon",text:"Wait-- No, wait, Avery, I didn't mean it!! I'm sorry, I-- Hey, don't--!! Leave me\u2026 Alright Master Cadence, where are you?"}],Ee=Object(s.forwardRef)((function(e,t){return Object(H.jsxs)(k.a,{variant:"outlined",className:"intro",ref:t,children:[Object(H.jsxs)("div",{className:"intro-body",children:[Object(H.jsx)("h1",{children:"The Neon Slide"}),Object(H.jsx)("h3",{children:"A game about finding your sound"}),Object(H.jsx)("h3",{children:"(and getting out of that funk!!!)"}),Object(H.jsx)("p",{children:Object(H.jsx)("em",{children:"Press Escape or click/tap anywhere to continue..."})})]}),Object(H.jsx)(he,{})]})}));function Ie(e){var t=e.show,n=e.acknowledge,a=Object(s.useState)(!1),r=Object(l.a)(a,2),c=r[0],o=r[1],i=function(){c?n():o(!0)};return Object(H.jsx)(z.a,{open:t,onClose:i,onClick:i,children:c?Object(H.jsx)(ee,{skip:n,dialogue:Ne,song:"/mfgj202106/samples/scene/2_full.ogg",npc:"Avery"}):Object(H.jsx)(Ee,{})})}var be=n(12),je=function(e,t){var n,r,s,c=J[e-1],o=c.targetParts.map((function(e){return{sample:e.sample,steps:Array.from({length:G},(function(){return a.OFF}))}})),i=Object(N.a)(Object(N.a)({},c),{},{playerParts:o,playerHand:Object(f.a)(c.startingHand),playerSchedule:Object(f.a)(null!==(n=c.startingSchedule)&&void 0!==n?n:[]),hasClearedLevel:null!==(r=null===t||void 0===t?void 0:t.hasClearedLevel)&&void 0!==r&&r});return(null!==(s=c.startingSchedule)&&void 0!==s?s:[]).forEach((function(e){return v[e].playCard(i)})),i},pe=function(e){var t,n=Object(u.a)(e.targetParts.entries());try{for(n.s();!(t=n.n()).done;)for(var a=Object(l.a)(t.value,2),r=a[0],s=a[1],c=e.playerParts[r],o=0;o<G;o++)if(c.steps[o]!==s.steps[o])return!1}catch(i){n.e(i)}finally{n.f()}return!0},Re={moves:{playCard:function(e,t,n){var a=e.playerHand[n],r=v[a];if(!r)return be.x;r.playCard(e),e.playerHand.splice(n,1),e.playerSchedule.unshift(a),pe(e)&&(e.hasClearedLevel=!0)},removeCard:function(e,t,n){if(e.playerSchedule.length-n<=e.startingSchedule.length)return be.x;var a=e.playerSchedule[n];if(!a)return be.x;var r=je(t.turn,e);r.playerHand=Object(f.a)(e.playerHand),r.playerHand.unshift(a);var s=Object(p.reverse)(Object(f.a)(e.playerSchedule));console.log(s);var c,o=Object(u.a)(s.entries());try{for(o.s();!(c=o.n()).done;){var i=Object(l.a)(c.value,2),d=i[0],O=i[1];if(e.playerSchedule.length-d-1!==n)if(!(d<e.startingSchedule.length))v[O].playCard(r),r.playerSchedule.unshift(O)}}catch(h){o.e(h)}finally{o.f()}return pe(r)&&(e.hasClearedLevel=!0),r},clearSchedule:function(e,t){return pe(e)&&(e.hasClearedLevel=!0),je(t.turn,e)},commitSchedule:function(e,t){var n,a;e.hasClearedLevel&&(null===(n=t.events)||void 0===n||null===(a=n.endTurn)||void 0===a||a.call(n))}},turn:{onBegin:function(e,t){return je(t.turn)}}},Fe=Object(d.a)({game:Re,board:function(e){var t=e.G,n=e.ctx,r=e.moves,c=t.title,o=t.hasClearedLevel,i=t.hints,d=t.levelTrack,h=t.playerParts,N=t.targetParts,E=t.playerHand,I=t.playerSchedule,b=t.startingSchedule,j=t.overrideTrackBars,R=t.overrideBPM,g=t.albumIndex,m=null!==j&&void 0!==j?j:4,f=null!==R&&void 0!==R?R:112;Object(s.useEffect)((function(){return T.d.bpm.value=f,T.e(),T.d.start(),function(){T.d.stop()}}),[f]);var x=Object(s.useState)(i),y=Object(l.a)(x,2),k=y[0],S=y[1],w=Object(s.useState)(0),M=Object(l.a)(w,2),_=M[0],A=M[1];Object(s.useEffect)((function(){if(I.length===b.length&&S(i),I.length>0){var e=v[I[0]],t=h.findIndex((function(t){return t.sample===e.sampleTarget}));t>=0&&A(t)}}),[i,h,I,b.length]);var D=Object(s.useState)(null),L=Object(l.a)(D,2),P=L[0],X=L[1],B=Object(s.useState)(null),U=Object(l.a)(B,2),Y=U[0],z=U[1],Z=Object(s.useState)(void 0),J=Object(l.a)(Z,2),V=J[0],Q=J[1],ee=Object(s.useState)(!1),ne=Object(l.a)(ee,2),se=ne[0],ce=ne[1],le=Object(s.useState)(!0),he=Object(l.a)(le,2),Ne=he[0],Ee=he[1],Ie=Object(s.useState)(null),be=Object(l.a)(Ie,2),je=be[0],pe=be[1],Re=Object(s.useState)(null),Fe=Object(l.a)(Re,2),Te=Fe[0],ge=Fe[1],me=function(e,t){Q(e),X(t)},fe=function(){if(!se){var e=new T.c(me,Object(p.range)(G*m+1),"16n");Ge(),ge(e);var t=new T.a(d,(function(){ce(!0),T.e(),e.loop=!1,e.start()})).toDestination();pe(t),t.loop=!1,t.autostart=!0}},Ge=Object(s.useCallback)((function(){se&&(Q(void 0),z(null),X(null),null===Te||void 0===Te||Te.stop(),ge(null),null===je||void 0===je||je.stop(),pe(null),ce(!1),Ee(!0))}),[se,Te,je]),Ce=function(){var e=Object(s.useState)(-1),t=Object(l.a)(e,2),n=t[0],a=t[1];return[n>=0?ie[n]:void 0,function(e){if("undefined"===typeof e)a(0);else{var t=ie.findIndex((function(t){return t.key===e}))+1;t===n+1&&a(t)}},function(){a(-1)}]}(),xe=Object(l.a)(Ce,3),ye=xe[0],ve=xe[1],ke=xe[2];Object(s.useEffect)((function(){A(0),n.turn>1&&Oe.triggerAttackRelease("a4",4)}),[n.turn]),Object(s.useEffect)((function(){n.turn>1&&ke()}),[n.turn,ke]),Object(s.useEffect)((function(){if(Y!==P&&"undefined"!==typeof V&&null!==P&&se)if(P>=G*m)Ge();else{z(P);var e,t=P%G,n=Ne?h:N,r=Object(u.a)(n);try{for(r.s();!(e=r.n()).done;){var s=e.value;s.steps[t]!==a.OFF&&Oe.triggerAttackRelease(ue[s.sample].pitch,ue[s.sample].duration,V,s.steps[t]/2)}}catch(c){r.e(c)}finally{r.f()}}}),[V,h,N,P,Y,Ne,se,Ge,m]);var Se=Object(s.useState)(-1),we=Object(l.a)(Se,2),He=we[0],Me=we[1];return g>He?Object(H.jsx)(de,{index:g,acknowledge:function(){return Me(g)}}):Object(H.jsxs)(O.a,{container:!0,className:"game-board",alignItems:"center",justify:"center",children:[Object(H.jsx)(te,{turn:n.turn,onDismiss:function(){Ee(!1),fe(),1===n.turn&&ve()}},"ld:"+n.turn),Object(H.jsx)(O.a,{item:!0,xs:12,children:Object(H.jsx)("h1",{children:c})},"title"),Object(H.jsxs)(O.a,{item:!0,xs:3,className:"pc-area portrait-area",children:[Object(H.jsx)("h1",{children:"Neon"}),Object(H.jsx)("div",{className:"pc portrait",children:"\xa0"})]},"pc-area"),Object(H.jsxs)(O.a,{item:!0,xs:6,className:"parts-area",children:[Object(H.jsxs)(O.a,{container:!0,className:"parts",justify:"center",children:[Object(H.jsx)(O.a,{item:!0,xs:1,children:se&&Object(H.jsx)("span",{children:((null!==P&&void 0!==P?P:0)*C).toFixed(1)})},"time-elapsed"),Object(H.jsx)(O.a,{item:!0,xs:10,children:Object(H.jsx)(ae,{progress:P,max:m*G})},"progress"),Object(H.jsx)(O.a,{item:!0,xs:1,children:se&&Object(H.jsx)("span",{children:((m*G-(null!==P&&void 0!==P?P:0))*C).toFixed(1)})},"time-remaining"),Object(H.jsx)(O.a,{item:!0,xs:5,className:"my-parts",children:Object(H.jsx)(oe,{variant:"contained",disabled:Ne,className:Ne?"selected":"",showTutorial:"current"===(null===ye||void 0===ye?void 0:ye.key),tutorialMd:null===ye||void 0===ye?void 0:ye.textMarkdown,onClick:function(){Ee(!0),fe()},onAcknowledge:function(){return ve("current")},children:"My Parts"})}),Object(H.jsx)(O.a,{item:!0,xs:2,className:"start-stop",children:Object(H.jsx)(oe,{className:se?"stop":"play",onClick:se?Ge:fe,tutorialMd:null===ye||void 0===ye?void 0:ye.textMarkdown,showTutorial:"start-stop"===(null===ye||void 0===ye?void 0:ye.key),onAcknowledge:function(){return ve("start-stop")},children:"\xa0"},se?"stop":"play")},"start-stop"),Object(H.jsx)(O.a,{item:!0,xs:5,className:"target-parts",children:Object(H.jsx)(oe,{variant:"contained",disabled:!Ne,className:Ne?"":"selected",onClick:function(){Ee(!1),fe()},tutorialMd:null===ye||void 0===ye?void 0:ye.textMarkdown,showTutorial:"goal"===(null===ye||void 0===ye?void 0:ye.key),onAcknowledge:function(){return ve("goal")},children:"Goal"})}),Object(H.jsx)(O.a,{item:!0,xs:12,className:"current-parts",children:Object(H.jsx)(re.a,{children:Object(H.jsx)(F.a,{timeout:200,classNames:Ne?"current":"target",children:Object(H.jsx)(W,{parts:Ne?h:N,currentlyPlayingStep:P,className:"sampler "+(Ne?"current":"target"),tabIndex:_,setTabIndex:A})},Ne?"current":"target")})})]},"parts"),Object(H.jsx)(O.a,{item:!0,xs:12,className:"dialogue",children:"undefined"!==typeof k&&Object(H.jsx)("div",{className:"dialogue-wrapper",children:Object(H.jsx)($.a,{className:"dialogue-text",children:K(k.join("\n\n"))})})})]}),Object(H.jsxs)(O.a,{item:!0,xs:3,className:"npc-area portrait-area cadence",children:[Object(H.jsx)("h1",{children:"Cadence"}),Object(H.jsx)("div",{className:"cadence portrait",children:"\xa0"})]},"npc-area"),Object(H.jsxs)(O.a,{item:!0,xs:5,className:"hand-area",children:[Object(H.jsx)("div",{className:"label",children:Object(H.jsx)("h3",{children:"To-Do"})}),Object(H.jsx)(q,{cards:E,onClickCard:function(e){r.playCard(e),Ee(!0),fe(),function(e){var t=v[E[e]];t&&S([t.description])}(e)},buttonLabel:"Place",className:"hand",unremovable:0,emphasizeButton:!o&&"reset"===(null===ye||void 0===ye?void 0:ye.key)},"hand:"+n.turn)]},"hand-area"),Object(H.jsx)(O.a,{item:!0,xs:2,className:"next-day",children:Object(H.jsxs)(O.a,{container:!0,children:[Object(H.jsx)(O.a,{item:!0,xs:12,children:Object(H.jsx)(oe,{variant:"contained",onClick:r.clearSchedule,tutorialMd:null===ye||void 0===ye?void 0:ye.textMarkdown,showTutorial:"reset"===(null===ye||void 0===ye?void 0:ye.key),onAcknowledge:function(){return ve("reset")},children:"Reset"})}),Object(H.jsx)(O.a,{item:!0,xs:12,className:"break"}),Object(H.jsx)(O.a,{item:!0,xs:12,children:Object(H.jsx)(oe,{variant:"contained",onClick:function(){r.commitSchedule(),Ge()},disabled:!t.hasClearedLevel,className:t.hasClearedLevel?"glow":"",showTutorial:"next"===(null===ye||void 0===ye?void 0:ye.key),tutorialMd:null===ye||void 0===ye?void 0:ye.textMarkdown,onAcknowledge:function(){return ve("next")},children:"next"})})]})},"next-day"),Object(H.jsxs)(O.a,{item:!0,xs:5,className:"schedule-area",children:[Object(H.jsx)("div",{className:"label",children:Object(H.jsx)("h3",{children:"Schedule"})}),Object(H.jsx)(q,{cards:I,onClickCard:function(e){r.removeCard(e),fe()},buttonLabel:"Remove",className:"schedule",unremovable:t.startingSchedule.length,emphasizeButton:"reset"===(null===ye||void 0===ye?void 0:ye.key)},"schedule:"+n.turn)]},"schedule-area")]})},numPlayers:1,debug:!0});var Te=function(){var e=Object(s.useState)(!0),t=Object(l.a)(e,2),n=t[0],a=t[1];return n?Object(H.jsx)(Ie,{show:n,acknowledge:function(){return a(!1)}}):Object(H.jsx)(Fe,{})},ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,349)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};i.a.render(Object(H.jsx)(Te,{}),document.getElementById("root")),ge()}},[[315,1,2]]]);
//# sourceMappingURL=main.24eec07a.chunk.js.map