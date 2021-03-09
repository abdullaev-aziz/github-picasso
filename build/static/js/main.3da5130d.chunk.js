(this.webpackJsonpgitpicasso=this.webpackJsonpgitpicasso||[]).push([[0],{23:function(t,e,n){},36:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),i=n.n(c),s=n(8),o=n.n(s),r=(n(23),n(16)),l=n(2),u=n(3),d=n(5),h=n(4),m=(n(24),n(6)),b=n.n(m),j=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).sendYear=function(t){a.props.changeState("year",t)},a.handleChange=function(t){var e=parseInt(t.target.value);e=(e=e<1900?1900:e)>a.state.currentYear?a.state.currentYear:e,a.sendYear(e)},a.state={currentYear:(new Date).getFullYear()},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"field-row-stacked",children:[Object(a.jsx)("label",{for:"text21",children:"Select a year"}),Object(a.jsx)("input",{id:"text21",className:"standard-input",value:this.props.year,onChange:this.handleChange,label:"Enter Year",placeholder:"Enter Year",type:"number"})]})}}]),n}(i.a.Component),p=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).sendGithub=function(t){a.props.changeState("github",t)},a.handleChange=function(t){a.sendGithub(t.target.value)},a.state={github:t.github},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.sendGithub=b()(this.sendGithub,300)}},{key:"render",value:function(){var t=this.state.text;return Object(a.jsxs)("div",{className:"field-row-stacked",children:[Object(a.jsx)("label",{for:"text22",children:"GitHub username"}),Object(a.jsx)("input",{id:"text22",className:"standard-input",onChange:this.handleChange,value:t,placeholder:"Github",label:"Github",autoFocus:"true"})]})}}]),n}(i.a.Component),O=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).sendRepo=function(t){a.props.changeState("repo",t)},a.handleChange=function(t){a.sendRepo(t.target.value)},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.sendRepo=b()(this.sendRepo,300)}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"field-row-stacked",children:[Object(a.jsx)("label",{for:"text23",children:"Repository Name"}),Object(a.jsx)("input",{id:"text23",className:"standard-input",onChange:this.handleChange,label:"Repo Name",placeholder:"Repo Name"})]})}}]),n}(i.a.Component),g=(n(36),n(9)),v=n.n(g),x=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).handleRightClick=function(t){t.preventDefault()},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.commits,n=t.handleClick,c=t.id,i=(t.allowDrawOnMouseOver,e[c]?e[c].color:"#EBEDF0"),s=e[c]?e[c].count:0;return Object(a.jsx)("div",{className:"commit",id:c,style:{backgroundColor:i},onClick:n,onDragEnter:n,onContextMenu:n,children:s})}}]),n}(i.a.Component);function f(t,e){var n=366===v()(parseInt(e));return t>=0&&t<=12?[31,n?29:28,31,30,31,30,31,31,30,31,30,31][t-1]:null}var C=function(t){for(var e=t.handleClick,n=t.commits,c=t.allowDrawOnMouseOver,i=t.year,s=364+function(t){var e="".concat(t,"-12-31"),n=new Date(e).getDay();return isNaN(n)?null:(n+1)%7}(i=void 0===i||null===i?0:i)-v()(parseInt(i)),o=[],r=1,l=1,u=f(l,i),d=0;d<53;d++){for(var h=[],m=0;m<7&&!(l>12);m++)if(s>=0)h.push(Object(a.jsx)(x,{commits:n,id:d+m,className:"commit"})),s--;else{var b="".concat(i,"-").concat(l<10?"0"+l:l,"-").concat(r<10?"0"+r:r);h.push(Object(a.jsx)(x,{className:"commit",id:b,year:i,handleClick:e,commits:n,allowDrawOnMouseOver:c})),++r>u&&(r=1,u=f(++l,i))}o.push(Object(a.jsx)("div",{className:"cols",children:h}))}return o};n(10),n(17);function y(t,e,n){var a=[],c="gitpicasso";for(var i in a.push("#!/bin/bash\n"),a.push("REPO=".concat(e,"\n")),a.push("git init $REPO\n"),a.push("cd $REPO\n"),a.push("touch README.md\n"),a.push("git add README.md\n"),a.push("touch ".concat(c,"\n")),a.push("git add ".concat(c,"\n")),t)for(var s=0;s<t[i].count;s++){var o="GIT_AUTHOR_DATE=".concat(i,"T12:00:00 GIT_COMMITTER_DATE=").concat(i,'T12:00:00 git commit --allow-empty -m "').concat(c,'" > /dev/null\n');a.push(o)}return a.push("git remote add origin git@github.com:".concat(n,"/$REPO.git\n")),a.push("git pull origin master --allow-unrelated-histories\n"),a.push("git push -u origin master\n"),function(t){var e=document.createElement("a"),n=new Blob(t,{type:"text/plain"});e.href=URL.createObjectURL(n),e.download="gitpicasso.sh",document.body.appendChild(e),e.click()}(a),a}var w=function(t){var e=t.commits,n=t.repo,c=t.github;return e&&n&&c?Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"generate-btn",onClick:function(){return y(e,n,c)},children:"Generate the Script"})}):Object(a.jsx)("div",{class:"window-body",className:"errorMsg",children:Object(a.jsx)("h4",{children:"Please fill out all the fields"})})};function k(){return Object(a.jsx)("nav",{children:Object(a.jsx)("ul",{children:Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://github.com/aliqsson-greenborders/github-picasso",children:"GitHub"})})})})}var N=function(){return Object(a.jsx)("div",{className:"taskbar",children:Object(a.jsx)("div",{className:"start"})})},S={position:"fixed",top:"0",left:"0",width:"100vw",height:"100vh",margin:"0"},D={position:"static",height:"auto",width:"80%",margin:"auto"},E=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;return Object(l.a)(this,n),(t=e.call(this)).getColorGroup=function(e){var n=t.state,a=n.maxCommits,c=n.colorValues,i=e?e/a*100:0;return 0===i?c.commits0:i<25?c.commits1:i<50?c.commits2:i<75?c.commits3:c.commits4},t.handleClick=function(e){var n=e.type;e.preventDefault();var a=e.target.id,c=t.state.commits,i=t.state,s=i.maxCommits;i.maxFreq;if(c[a]){if(10===c[a].count&&"contextmenu"!==n)return;"contextmenu"===n&&c[a].count>0?c[a].count--:c[a].count++}else c[a]={},c[a].count="contextmenu"===n?0:1;c[a].color=t.getColorGroup(c[a].count),c[a].count>s&&(s=c[a].count,t.setState({maxCommits:s}),t.rerenderColors()),t.setState({commits:c})},t.rerenderColors=function(){var e=t.state.commits;for(var n in e)e[n].color=t.getColorGroup(e[n].count);t.setState(e)},t.changeState=function(e,n){t.setState(Object(r.a)({},e,n))},t.maximize=function(){t.state.toggle?t.setState({currentStyle:D,toggle:!t.state.toggle}):t.setState({currentStyle:S,toggle:!t.state.toggle})},t.close=function(){document.querySelector(".window").style.display="none"},t.state={currentStyle:D,toggle:!1,allowDrawOnMouseOver:!1,isWrongInput:!1,github:"",year:"2020",repo:"",isValidGithub:!1,isValidYear:!1,isValidRepo:!1,commits:{},minCommits:0,maxCommits:0,maxFreq:0,colorValues:{commits0:"#EBEDF0",commits1:"#9BE9A8",commits2:"#40C462",commits3:"#30A14E",commits4:"#216E39"}},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this.state,e=t.github,n=t.year,c=t.repo,i=t.commits,s=(t.maxCommits,t.inputCompleted,t.allowDrawOnMouseOver),o=t.currentStyle;return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(k,{}),Object(a.jsxs)("div",{className:"window",style:o,children:[Object(a.jsxs)("div",{className:"title-bar",children:[Object(a.jsxs)("div",{className:"title-bar-text",children:[" ","Turn your GitHub into an Artboard"," "]})," ",Object(a.jsxs)("div",{class:"title-bar-controls",children:[Object(a.jsx)("button",{"aria-label":"Minimize"}),Object(a.jsx)("button",{"aria-label":"Maximize",onClick:this.maximize}),Object(a.jsx)("button",{"aria-label":"Close",onClick:this.close})]})]}),Object(a.jsxs)("div",{className:"window-body",children:[Object(a.jsxs)("div",{className:"inputs",disabled:!0,children:[Object(a.jsx)(p,{github:e,changeState:this.changeState})," ",Object(a.jsx)(j,{year:n,changeState:this.changeState})," ",Object(a.jsx)(O,{repo:c,changeState:this.changeState})," "]})," ",Object(a.jsxs)("div",{className:"commits-board",children:[Object(a.jsx)(C,{handleClick:this.handleClick,commits:i,year:n,allowDrawOnMouseOver:s})," ",Object(a.jsx)("div",{})," ",Object(a.jsxs)("div",{children:[Object(a.jsx)(w,{commits:i,github:e,repo:c})," "]})," ",Object(a.jsxs)("footer",{className:"pre",children:["Microsoft\u276eR\u276f Windows DOS \u276eC\u276f Copyright Microsoft Corp 1990-2001.",Object(a.jsx)("br",{}),"C:\\WINDOWS\\SYSTEM32> You can build a command line easily with a window and pre tag"]})]})," "]}),Object(a.jsx)("br",{})]}),Object(a.jsx)(N,{})]})}}]),n}(i.a.Component);o.a.render(Object(a.jsx)(E,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.3da5130d.chunk.js.map