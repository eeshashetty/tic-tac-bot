(this["webpackJsonptic-tac-bot"]=this["webpackJsonptic-tac-bot"]||[]).push([[0],[,,,,,,,function(e,t){var n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function r(e){if(e.length<3)return!1;var t=0;t=e.length<6?e.length%3:e.length-e.length%3*3;for(var r=0;r<=t;r++)for(var a=r+1;a<=e.length-e.length%2*2;a++)for(var l=function(t){var l=[e[r],e[a],e[t]],i=n.filter((function(e){return JSON.stringify(e)===JSON.stringify(l)}));if(i.length>0)return{v:i}},i=a+1;i<e.length;i++){var c=l(i);if("object"===typeof c)return c.v}return[]}function a(e){for(var t=[],n=[],a=0;a<e.length;a++)"X"===e[a]&&t.push(a),"O"===e[a]&&n.push(a);var l=r(t),i=r(n);return l.length>0?{res:"X",pattern:l[0]}:i.length>0?{res:"O",pattern:i[0]}:{res:"D",pattern:[]}}e.exports={check:a,checkscore:function(e){var t=0;return"X"===a(e).res&&(t=-10),"O"===a(e).res&&(t=10),t}}},,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){var r=n(7).checkscore;function a(e,t,n){var l=r(e);if(10===l||-10===l)return l;if(!0===function(e){for(var t in e)if(""===e[t])return!1;return!0}(e))return 0;if(n){for(var i=-1/0,c=0;c<e.length;c++)""===e[c]&&(e[c]="O",l=a(e,t+1,!1),i=Math.max(i,l),e[c]="");return i}for(var s=1/0,o=0;o<e.length;o++)""===e[o]&&(e[o]="X",l=a(e,t+1,!0),s=Math.min(s,l),e[o]="");return s}e.exports=function(e){for(var t=-1/0,n=-1,r=-1/0,l=0;l<e.length;l++)""===e[l]&&(e[l]="O",r=a(e,0,!1),e[l]="",r>t&&(t=r,n=l));return n}},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(8),i=n.n(l),c=(n(15),n(2)),s=n(3),o=n(5),u=n(4),h=n(9),f=n(1),d=(n(16),n(7).check),v=n(17);function m(e){e.x;var t=e.result,n=e.grid,r=e.pattern,l=e.handleClick;return null===t?a.a.createElement("div",null,a.a.createElement("center",null,a.a.createElement(g,{result:""})),a.a.createElement("div",{className:"grid-container"},n.map((function(e,t){return a.a.createElement("div",{className:"grid-item hover",onClick:function(){return l(t)}},"O"===n[t]?"\ud83e\udd16":"X"===n[t]?"\ud83e\udd38\u200d\u2640\ufe0f":n[t])})))):a.a.createElement("div",null,a.a.createElement("center",null,a.a.createElement(g,{result:t})),a.a.createElement("div",{className:"grid-container"},n.map((function(e,t){var i="grid-item";return null!=r&&r.includes(t)&&(i="gsel"),a.a.createElement("div",{className:i,onClick:function(){return l(t)}},"O"===n[t]?"\ud83e\udd16":"X"===n[t]?"\ud83e\udd38\u200d\u2640\ufe0f":n[t])}))))}function g(e){var t=e.result;return""===t?a.a.createElement("h1",{className:"hide"},"Bla"):"D"===t?a.a.createElement("h1",{className:"over"},"Draw!"):"X"===t?a.a.createElement("h1",{className:"over"},"You Win"):"O"===t?a.a.createElement("h1",{className:"over"},"Bot Wins!"):void 0}var p=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={grid:["","","","","","","","",""],x:!0,full:!1,result:null,pattern:null},e.handleClick=e.handleClick.bind(Object(f.a)(e)),e.onReset=e.onReset.bind(Object(f.a)(e)),e.updateBot=e.updateBot.bind(Object(f.a)(e)),e.checkRes=e.checkRes.bind(Object(f.a)(e)),e}return Object(s.a)(n,[{key:"updateBot",value:function(){var e=Object(h.a)(this.state.grid),t=0;t=e.filter((function(e){return""===e})).length===e.length-1?Math.floor(9*Math.random()):v(e),console.log("*"),e[t]="O";var n=this.checkRes(e);this.setState({grid:e,x:!0,full:n})}},{key:"checkRes",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.grid,t=0===e.filter((function(e){return""===e})).length,n=d(e),r=n.res,a=n.pattern;return"X"===r&&this.setState({result:"X",pattern:a}),"O"===r&&this.setState({result:"O",pattern:a}),"D"===r&&!0===t&&this.setState({result:"D"}),t}},{key:"handleClick",value:function(e){if(""===this.state.grid[e]&&null===this.state.result){var t=this.state.x?"X":"O",n=this.state.grid;n[e]=t;var r=this.checkRes();this.setState({grid:n,x:!this.state.x,full:r}),console.log({grid:n,x:!this.state.x,full:r}),this.updateBot()}}},{key:"onReset",value:function(){this.setState({grid:["","","","","","","","",""],x:!0,full:!1,result:null,pattern:null})}},{key:"render",value:function(){return a.a.createElement("div",{className:"fix-grid"},a.a.createElement(m,{x:this.state.x,result:this.state.result,grid:this.state.grid,pattern:this.state.pattern,handleClick:this.handleClick}),a.a.createElement("button",{className:"reset",onClick:this.onReset},"RESET"))}}]),n}(r.Component);n(18);function k(){return a.a.createElement("div",{className:"display"},a.a.createElement("div",{className:"header"},"Tic-Tac-\ud83e\udd16"),a.a.createElement("div",{className:"links"},"by ",a.a.createElement("a",{href:"https://eeshashetty.github.io",target:"_blank",rel:"noopener noreferrer"},"@eeshashetty")))}var E=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(p,null),a.a.createElement(k,null))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.d2052850.chunk.js.map