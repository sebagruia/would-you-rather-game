(this["webpackJsonpreact-would_you_rather"]=this["webpackJsonpreact-would_you_rather"]||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/logo.2056c12c.png"},41:function(e,t,a){e.exports=a.p+"static/media/tylermcginnis.8366a16c.png"},50:function(e,t,a){e.exports=a.p+"static/media/sarahedo.b5af26a6.png"},51:function(e,t,a){e.exports=a.p+"static/media/johndoe.50d048d7.png"},54:function(e,t,a){e.exports=a(68)},64:function(e,t,a){},65:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=(a(56),a(22)),s=a(13),l=a(7),c=a(49),i=function(e){return function(t){return function(a){console.group(a.type),console.log("This action: ",a);var n=t(a);return console.log("The New STATE: ",e.getState()),console.groupEnd(),n}}},u=a(6),m=a(5),d=a(41),v=a.n(d),p=a(50),E=a.n(p),h=a(51),b=a.n(h);console.log(v.a);var f={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:{name:E.a},answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:{name:v.a},answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:{name:b.a},answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},g={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function O(e){return new Promise((function(t,a){var n=e.author,r=function(e){var t=e.optionOneText,a=e.optionTwoText,n=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:n,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:a}}}(e);setTimeout((function(){g=Object(m.a)({},g,Object(u.a)({},r.id,r)),f=Object(m.a)({},f,Object(u.a)({},n,Object(m.a)({},f[n],{questions:f[n].questions.concat([r.id])}))),t(r)}),1e3)}))}var y=function(){return function(e){return new Promise((function(e,t){setTimeout((function(){return e(Object(m.a)({},f))}),1e3)})).then((function(t){e({type:"RECEIVE_USERS",payload:t})}))}},j=function(e){return function(t){(function(e){var t=e.authedUser,a=e.qid,n=e.answer;return new Promise((function(e,r){setTimeout((function(){f=Object(m.a)({},f,Object(u.a)({},t,Object(m.a)({},f[t],{answers:Object(m.a)({},f[t].answers,Object(u.a)({},a,n))}))),g=Object(m.a)({},g,Object(u.a)({},a,Object(m.a)({},g[a],Object(u.a)({},n,Object(m.a)({},g[a][n],{votes:g[a][n].votes.concat([t])}))))),e()}),500)}))})(e).then((function(){t({type:"SAVE_ANSWER",payload:e})}))}},N={users:{}},q=function(e){return{type:"SET_LOGIN_USER",payload:e}},w={loginField:""},x=function(){return function(e){return new Promise((function(e,t){setTimeout((function(){return e(Object(m.a)({},g))}),1e3)})).then((function(t){e({type:"RECEIVE_ALL_QUESTIONS",payload:t})}))}},S={questions:{}},T=function(e){return{type:"LOGED_IN",payload:e}},U={logIn:!1},k=a(23),I=a.n(k),R=(a(64),a(28)),_=a(29),C=a(35),L=a(30),A=a(36),D=(a(65),a(20)),z=a(31),Q=a.n(z),V=a(11),F=a(18),W=a(10),B=function(e){function t(){return Object(R.a)(this,t),Object(C.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this.props,t=e.users,a=e.onLoginChange,n=e.onSubmitUser,o=e.loginField;return r.a.createElement(V.a,{className:"logIn-form m-auto"},r.a.createElement(V.a.Title,{className:"card-title"},r.a.createElement("h5",null,"Welcome to the Would You Rather App!"),r.a.createElement("h6",null,"Please log in to continue")),r.a.createElement(V.a.Body,null,r.a.createElement(V.a.Img,{className:"logo-img-container",variant:"top",src:Q.a}),r.a.createElement(W.a,{className:"submit-form",onSubmit:"Select User"!==o&&""!==o?n:null},r.a.createElement(W.a.Control,{className:"select-user",onChange:a,as:"select"},r.a.createElement("option",{defaultValue:!0},"Select User"),Object.values(t).map((function(e){return r.a.createElement("option",{key:e.id,value:e.name},e.name)}))),r.a.createElement(F.a,{type:"submit",block:!0,variant:"primary"},"Log In"))))}}]),t}(n.Component),P=Object(s.b)((function(e){return{users:e.usersReducer.users,loginField:e.chooseLoginReducer.loginField,logIn:e.logReducer.logIn}}),(function(e){return{onLoginChange:function(t){t.preventDefault(),"Select User"!==t.target.value&&""!==t.target.value&&e(q(t.target.value))},onSubmitUser:function(t){t.preventDefault(),e(T(!0))}}}))(B),G=a(26),H=a(24),M=Object(s.b)()((function(e){var t=e.userName,a=e.avatarUrl;return r.a.createElement(G.a,{bg:"light",expand:"lg"},r.a.createElement("div",{className:"container"},r.a.createElement(G.a.Brand,null,r.a.createElement("img",{src:Q.a,className:"d-inline-block align-top logo-image",width:"30",height:"30",alt:"app logo"}),"Would You Rather?"),r.a.createElement(G.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(G.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(H.a,{className:"ml-auto"},r.a.createElement(l.b,{to:"/questions/unanswered-questions",activeClassName:"selected"},r.a.createElement("i",{className:"fas fa-home"}),"Home"),r.a.createElement(l.b,{to:"/leaderbord",activeClassName:"selected"},r.a.createElement("i",{className:"fas fa-medal"}),"Leaderboard"),r.a.createElement(l.b,{to:"/add-question",activeClassName:"selected"},r.a.createElement("i",{className:"fas fa-plus-circle"}),"Add question"),r.a.createElement(l.b,{to:"/user",activeClassName:"selected"},r.a.createElement("div",{className:"nav-link-img-container"},r.a.createElement("img",{className:"user-avatar",src:a,alt:"user avatar"}),r.a.createElement("p",null,"Hello, ",t))),r.a.createElement(l.b,{to:"/login",onClick:function(){e.dispatch(T(!1)),e.dispatch(q(""))}},r.a.createElement("i",{className:"fas fa-minus-circle"}),"LogOut")))))})),J=function(e){var t=e.user,a=Object.keys(t.answers).length,n=Object.keys(t.questions).length,o=a+n;return r.a.createElement("div",{className:"userStats-container"},r.a.createElement("div",{className:"userStats-avatar"},r.a.createElement("img",{src:t.avatarURL.name,alt:"avatar"})),r.a.createElement("div",{className:"userStats-statistic"},r.a.createElement("div",{className:"userStats-statistic-text"},r.a.createElement("h5",null,t.name),r.a.createElement("div",{className:"answered-questions"},r.a.createElement("div",null,r.a.createElement("h6",null,"Answered questions")),r.a.createElement("div",null,r.a.createElement("h6",null,a))),r.a.createElement("div",{className:"created-questions"},r.a.createElement("div",null,r.a.createElement("h6",null,"Created questions")),r.a.createElement("div",null,r.a.createElement("h6",null,n))))),r.a.createElement("div",{className:"userStats-score"},r.a.createElement("div",{className:"userStats-score-text"},r.a.createElement("h6",null,"Score")),r.a.createElement("div",{className:"userStats-score-number"},r.a.createElement("p",null,o))))},$=function(e){var t=e.users,a=Object.values(t).sort((function(e,t){return Object.keys(t.answers).length+t.questions.length-(Object.keys(e.answers).length+e.questions.length)}));return r.a.createElement("div",{className:"leaderboard"},a.map((function(e){return r.a.createElement(J,{key:e.id,user:e})})))},X=a(17),Y=Object(D.g)(Object(s.b)()((function(e){var t=e.location.state,a=t.userName,o=t.avatarUrl,s=t.question,l=e.authedUser,c=e.dispatch,i=Object(n.useState)(!1),u=Object(X.a)(i,2),m=u[0],d=u[1],v=Object(n.useState)(""),p=Object(X.a)(v,2),E=p[0],h=p[1],b=function(e){h(e.target.value)};return r.a.createElement(n.Fragment,null,m?r.a.createElement(D.a,{to:{pathname:"/pollresults/:".concat(s.id),state:{inputValue:E,userName:a,avatarUrl:o,question:s,questionId:s.id}}}):r.a.createElement("div",{className:"user poll"},r.a.createElement("div",{className:"user-name"},r.a.createElement("h5",null,a," asks:")),r.a.createElement("div",{className:"user-info-container-poll"},r.a.createElement("div",{className:"image-container poll-image-container align-middle"},r.a.createElement("img",{src:o,alt:"avatar"})),r.a.createElement(W.a,{onSubmit:function(e){e.preventDefault(),E&&(d(!0),c(j({authedUser:l,qid:s.id,answer:E})))},className:"question-container"},r.a.createElement("h5",null,"Would you rather..."),r.a.createElement("div",{className:"poll-first-question-container"},r.a.createElement("div",{className:"input-container"},r.a.createElement(W.a.Check,{onChange:b,type:"radio",label:s.optionOne.text,name:"selection",id:"first-question-checkbox",value:"optionOne"}))),r.a.createElement("div",{className:"poll-second-question-container"},r.a.createElement("div",{className:"input-container"},r.a.createElement(W.a.Check,{onChange:b,type:"radio",label:s.optionTwo.text,name:"selection",id:"second-question-checkbox",value:"optionTwo"}))),r.a.createElement(F.a,{type:"submit",variant:"outline-info",className:"view-poll-button btn-block"},"Vote")))))}))),K=Object(D.g)((function(e){var t=e.location.state,a=t.userName,n=t.avatarUrl,o=t.question,s=o.optionOne.votes.length,l=o.optionTwo.votes.length;return r.a.createElement("div",{className:"user poll"},r.a.createElement("div",{className:"user-name"},r.a.createElement("h5",null,"Asked by ",a)),r.a.createElement("div",{className:"pollresults-container-poll"},r.a.createElement("div",{className:"pollresults-image-container"},r.a.createElement("img",{src:n,alt:"avatar"})),r.a.createElement("div",{className:"pollresults"},r.a.createElement("h5",{className:"pollresults-title"},"Results:"),r.a.createElement("div",{className:"pollresults-container "},r.a.createElement("div",{className:"pollresults-question"},r.a.createElement("h6",null,"".concat(o.optionOne.text,"?"))),r.a.createElement("div",{className:"progress",style:{height:"20px"}},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(s/(s+l)*100,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},s/(s+l)*100,"%")),r.a.createElement("div",{className:"votes"},r.a.createElement("h6",null,"".concat(s," out of ").concat(s+l," votes")))),r.a.createElement("div",{className:"pollresults-container"},r.a.createElement("div",{className:"pollresults-question"},r.a.createElement("h6",null,"".concat(o.optionTwo.text,"?"))),r.a.createElement("div",{className:"progress",style:{height:"20px"}},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(l/(s+l)*100,"%")},"aria-valuenow":"35","aria-valuemin":"0","aria-valuemax":"100"},l/(s+l)*100,"%")),r.a.createElement("div",{className:"votes"},r.a.createElement("h6",null,"".concat(l," out of ").concat(s+l," votes")))))))})),Z=Object(s.b)()((function(e){var t=e.dispatch,a=e.userId,o=Object(n.useState)(""),s=Object(X.a)(o,2),l=s[0],c=s[1],i=Object(n.useState)(""),u=Object(X.a)(i,2),m=u[0],d=u[1],v=Object(n.useState)(!1),p=Object(X.a)(v,2),E=p[0],h=p[1];return r.a.createElement(n.Fragment,null,E?r.a.createElement(D.a,{to:"/questions"}):r.a.createElement(V.a,{className:"createQuestion"},r.a.createElement(V.a.Header,null,r.a.createElement("h3",null,"Add a New Question")),r.a.createElement(V.a.Body,null,r.a.createElement(W.a,{onSubmit:function(e){var n;e.preventDefault(),""!==l&&""!==m&&(t((n={optionOneText:l,optionTwoText:m,author:a},function(e){return O(n).then((function(t){e({type:"ADD_QUESTION",payload:t})}))})),t(function(e){return function(t){O(e).then((function(e){t({type:"ADD_QUESTION_TO_USER",payload:e})}))}}({optionOneText:l,optionTwoText:m,author:a})),h(!0))},className:"submit-form createQuestion-form"},r.a.createElement("h6",null,"Complete the question"),r.a.createElement("h5",null,"Would you rather..."),r.a.createElement(W.a.Group,{controlId:"formBasicEmail"},r.a.createElement(W.a.Control,{onChange:function(e){return t=e.target.value,void c(t);var t},type:"text",placeholder:"Enter Question One Here"})),r.a.createElement("hr",null),r.a.createElement(W.a.Group,{controlId:"formBasicPassword"},r.a.createElement(W.a.Control,{onChange:function(e){return t=e.target.value,void d(t);var t},type:"text",placeholder:"Enter Question Two One Here"})),r.a.createElement(F.a,{type:"submit",block:!0,variant:"primary"},"Submit")))))})),ee=function(e){var t=e.userName,a=e.avatarUrl,o=e.question,s=e.answered,l=Object(n.useState)(!1),c=Object(X.a)(l,2),i=c[0],u=c[1];return r.a.createElement(n.Fragment,null,i&&!s?r.a.createElement(D.a,{to:{pathname:"/question/:".concat(o.id),state:{userName:t,avatarUrl:a,question:o,questionId:o.id}}}):i&&s?r.a.createElement(D.a,{to:{pathname:"/pollresults/:".concat(o.id),state:{userName:t,avatarUrl:a,question:o,questionId:o.id}}}):r.a.createElement("div",{className:"user"},r.a.createElement("div",{className:"user-name"},r.a.createElement("h5",null,t," asks:")),r.a.createElement("div",{className:"user-info-container"},r.a.createElement("div",{className:"image-container align-middle"},r.a.createElement("img",{src:a,alt:"avatar"})),r.a.createElement("div",{className:"question-container"},r.a.createElement("h5",null,"Would you rather"),r.a.createElement("p",null,o.optionOne.text),r.a.createElement(F.a,{onClick:function(e){e.preventDefault(),u(!0)},variant:"outline-info",className:"view-poll-button btn-block"},s?"View Poll":"Submit")))))},te=function(e){var t=e.users,a=e.questions,n=e.userName,o=Object.values(t).filter((function(e){return e.name===n})),s=Object.values(a).filter((function(e){return e.optionOne.votes.includes(o[0].id)||e.optionTwo.votes.includes(o[0].id)})),c=Object.values(a).filter((function(e){return!e.optionOne.votes.includes(o[0].id)&&!e.optionTwo.votes.includes(o[0].id)}));return r.a.createElement(V.a,{className:"home"},r.a.createElement(V.a.Header,null,r.a.createElement(H.a,{variant:"tabs",defaultActiveKey:"#first",className:"home-links-container"},r.a.createElement(H.a.Item,null,r.a.createElement(l.b,{to:"/questions/unanswered-questions",className:"nav-link",activeClassName:"active"},"Unanswered Questions")),r.a.createElement(H.a.Item,null,r.a.createElement(l.b,{to:"/questions/answered-questions",className:"nav-link",activeClassName:"active"},"Answered Questions")))),r.a.createElement(V.a.Body,null,r.a.createElement(D.b,{exact:!0,path:"/questions/unanswered-questions",render:function(){return Object.values(t).map((function(e){return c.map((function(t){return e.id===t.author?r.a.createElement(ee,{key:t.id,userName:e.name,avatarUrl:e.avatarURL.name,question:t}):null}))}))}}),r.a.createElement(D.b,{exact:!0,path:"/questions/answered-questions",render:function(){return Object.values(t).map((function(e){return s.map((function(t){return e.id===t.author?r.a.createElement(ee,{key:t.id,userName:e.name,avatarUrl:e.avatarURL.name,question:t,answered:!0}):null}))}))}})))},ae=function(e){function t(){return Object(R.a)(this,t),Object(C.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){this.props.retreiveUsers(),this.props.retreiveQuestions()}},{key:"render",value:function(){var e=this.props,t=e.users,a=e.logIn,o=e.userName,s=e.questions,l=e.avatarUrl,c=e.userId,i=e.location;return r.a.createElement("div",null,r.a.createElement(D.b,{exact:!0,path:"/react-would_you_rather"},a?null:r.a.createElement(D.a,{to:"/login"})),r.a.createElement(D.b,{exact:!0,path:"/login",component:P}),a?r.a.createElement(n.Fragment,null,r.a.createElement(D.b,{path:"/"},r.a.createElement(M,{userName:o,avatarUrl:l})),r.a.createElement(D.a,{to:"/questions"}),r.a.createElement(D.d,null,r.a.createElement(D.b,{path:"/questions"},r.a.createElement(D.a,{to:"/questions/unanswered-questions"}),r.a.createElement(te,{users:t,userName:o,questions:s})),r.a.createElement(D.b,{exact:!0,path:"/leaderbord"},r.a.createElement($,{users:t})),r.a.createElement(D.b,{exact:!0,path:"/add-question"},r.a.createElement(Z,{userId:c})),r.a.createElement(D.b,{exact:!0,path:"/question/:".concat(i.state?i.state.questionId:null)},r.a.createElement(Y,{authedUser:c})),r.a.createElement(D.b,{exact:!0,path:"/pollresults/:".concat(i.state?i.state.questionId:null)},r.a.createElement(K,null)))):null)}}]),t}(n.Component),ne=Object(D.g)(Object(s.b)((function(e){var t=Object.values(e.usersReducer.users),a=e.chooseLoginReducer.loginField;return{users:e.usersReducer.users,questions:e.questionsReducer.questions,logIn:e.logReducer.logIn,userName:e.chooseLoginReducer.loginField,avatarUrl:function(){var e=!0,n=!1,r=void 0;try{for(var o,s=t[Symbol.iterator]();!(e=(o=s.next()).done);e=!0){var l=o.value;if(l.name===a)return l.avatarURL.name}}catch(c){n=!0,r=c}finally{try{e||null==s.return||s.return()}finally{if(n)throw r}}}(),userId:function(){var e=!0,n=!1,r=void 0;try{for(var o,s=t[Symbol.iterator]();!(e=(o=s.next()).done);e=!0){var l=o.value;if(l.name===a)return l.id}}catch(c){n=!0,r=c}finally{try{e||null==s.return||s.return()}finally{if(n)throw r}}}()}}),(function(e){return{retreiveUsers:function(){return e(y())},retreiveQuestions:function(){return e(x())}}}))(ae));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=Object(o.c)({usersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"RECEIVE_USERS":return Object(m.a)({},e,{users:t.payload});case"ADD_QUESTION_TO_USER":var a=t.payload;return Object(m.a)({},e,{users:Object(m.a)({},e.users,Object(u.a)({},a.author,Object(m.a)({},e.users[a.author],{questions:e.users[a.author].questions.concat([a.id])})))});case"SAVE_ANSWER":var n=t.payload.authedUser,r=t.payload.qid;return Object(m.a)({},e,{users:Object(m.a)({},e.users,Object(u.a)({},n,Object(m.a)({},e.users[n],{answers:Object(m.a)({},e.users[n].answers,Object(u.a)({},r,t.payload.answer))})))});default:return e}},chooseLoginReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SET_LOGIN_USER":return Object(m.a)({},e,{loginField:t.payload});default:return e}},questionsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"RECEIVE_ALL_QUESTIONS":return Object(m.a)({},e,{questions:t.payload});case"ADD_QUESTION":return Object(m.a)({},e,{questions:Object(m.a)({},e.questions,Object(u.a)({},t.payload.id,t.payload))});case"SAVE_ANSWER":var a=t.payload.qid,n=t.payload.answer;return Object(m.a)({},e,{questions:Object(m.a)({},e.questions,Object(u.a)({},a,Object(m.a)({},e.questions[a],Object(u.a)({},n,Object(m.a)({},e.questions[a][n],{votes:e.questions[a][n].votes.concat([t.payload.authedUser])})))))});default:return e}},logReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"LOGED_IN":return Object(m.a)({},e,{logIn:t.payload});default:return e}}}),oe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,se=Object(o.e)(re,oe(Object(o.a)(c.a,i)));I.a.render(r.a.createElement(s.a,{store:se},r.a.createElement(l.a,null,r.a.createElement(ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.ecc8536b.chunk.js.map