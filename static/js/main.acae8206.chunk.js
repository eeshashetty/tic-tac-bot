(this["webpackJsonptic-tac-bot"]=this["webpackJsonptic-tac-bot"]||[]).push([[0],[,,,,,,,function(e,t){function n(e){for(var t=0;t<=6;t+=3)if(e[t]===e[t+1]&&e[t+1]===e[t+2]){if("X"===e[t])return{res:"X",pattern:[t,t+1,t+2]};if("O"===e[t])return{res:"O",pattern:[t,t+1,t+2]}}for(var n=0;n<3;n++)if(e[n]===e[n+3]&&e[n+3]===e[n+6]){if("X"===e[n])return{res:"X",pattern:[n,n+3,n+6]};if("O"===e[n])return{res:"O",pattern:[n,n+3,n+6]}}if(e[0]===e[4]&&e[4]===e[8]){if("X"===e[0])return{res:"X",pattern:[0,4,8]};if("O"===e[0])return{res:"O",pattern:[0,4,8]}}if(e[2]===e[4]&&e[4]===e[6]){if("X"===e[2])return{res:"X",pattern:[2,4,6]};if("O"===e[2])return{res:"O",pattern:[2,4,6]}}return{res:"D",pattern:[]}}e.exports={check:n,checkscore:function(e){var t=0;return"X"===n(e).res&&(t=-10),"O"===n(e).res&&(t=10),t}}},,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){var r=n(7).checkscore;function a(e,t,n,i,c){var s=r(e);if(10===s||-10===s)return s;if(!0===function(e){for(var t in e)if(""===e[t])return!1;return!0}(e))return 0;if(n){for(var l=-1/0,o=0;o<e.length;o++)""===e[o]&&(e[o]="O",s=a(e,t+1,!1),l=Math.max(l,s),e[o]="");return l}for(var u=1/0,h=0;h<e.length;h++)""===e[h]&&(e[h]="X",s=a(e,t+1,!0),u=Math.min(u,s),c=Math.min(c,u),e[h]="");return u}function i(e){for(var t=-1/0,n=-1,r=-1/0,i=0;i<e.length;i++)""===e[i]&&(e[i]="O",r=a(e,0,!1),e[i]="",r>t&&(t=r,n=i));return console.log("Best Move is to Position ".concat(n)),console.log("Value =  ".concat(t)),n}i(["X","","O","","X","","","",""]),e.exports=i},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(8),c=n.n(i),s=(n(15),n(2)),l=n(3),o=n(5),u=n(4),h=n(9),f=n(1),d=(n(16),n(7).check),m=n(17);function v(e){e.x;var t=e.result,n=e.grid,r=e.pattern,i=e.handleClick;return null===t?a.a.createElement("div",null,a.a.createElement("center",null,a.a.createElement(p,{result:""})),a.a.createElement("div",{className:"grid-container"},n.map((function(e,t){return a.a.createElement("div",{className:"grid-item hover",onClick:function(){return i(t)}},"O"===n[t]?"\ud83e\udd16":"X"===n[t]?"\ud83e\udd38\u200d\u2640\ufe0f":n[t])})))):a.a.createElement("div",null,a.a.createElement("center",null,a.a.createElement(p,{result:t})),a.a.createElement("div",{className:"grid-container"},n.map((function(e,t){var c="grid-item";return null!=r&&r.includes(t)&&(c="gsel"),a.a.createElement("div",{className:c,onClick:function(){return i(t)}},"O"===n[t]?"\ud83e\udd16":"X"===n[t]?"\ud83e\udd38\u200d\u2640\ufe0f":n[t])}))))}function p(e){var t=e.result;return""===t?a.a.createElement("h1",{className:"hide"},"Bla"):"D"===t?a.a.createElement("h1",{className:"over"},"Draw!"):"X"===t?a.a.createElement("h1",{className:"over"},"You Win"):"O"===t?a.a.createElement("h1",{className:"over"},"Bot Wins!"):void 0}var g=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={grid:["","","","","","","","",""],x:!0,full:!1,result:null,pattern:null},e.handleClick=e.handleClick.bind(Object(f.a)(e)),e.onReset=e.onReset.bind(Object(f.a)(e)),e.updateBot=e.updateBot.bind(Object(f.a)(e)),e.checkRes=e.checkRes.bind(Object(f.a)(e)),e}return Object(l.a)(n,[{key:"updateBot",value:function(){var e=Object(h.a)(this.state.grid),t=m(e);console.log("*"),e[t]="O";var n=this.checkRes(e);this.setState({grid:e,x:!0,full:n})}},{key:"checkRes",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.grid,t=0===e.filter((function(e){return""===e})).length,n=d(e),r=n.res,a=n.pattern;return"X"===r&&this.setState({result:"X",pattern:a}),"O"===r&&this.setState({result:"O",pattern:a}),"D"===r&&!0===t&&this.setState({result:"D"}),t}},{key:"handleClick",value:function(e){if(""===this.state.grid[e]&&null===this.state.result){var t=this.state.x?"X":"O",n=this.state.grid;n[e]=t;var r=this.checkRes();this.setState({grid:n,x:!this.state.x,full:r}),console.log({grid:n,x:!this.state.x,full:r}),this.updateBot()}}},{key:"onReset",value:function(){this.setState({grid:["","","","","","","","",""],x:!0,full:!1,result:null,pattern:null})}},{key:"render",value:function(){return a.a.createElement("div",{className:"fix-grid"},a.a.createElement(v,{x:this.state.x,result:this.state.result,grid:this.state.grid,pattern:this.state.pattern,handleClick:this.handleClick}),a.a.createElement("button",{className:"reset",onClick:this.onReset},"RESET"))}}]),n}(r.Component);n(18);function O(){return a.a.createElement("div",{className:"display"},a.a.createElement("div",{className:"header"},"Tic-Tac-\ud83e\udd16"),a.a.createElement("div",{className:"links"},"by ",a.a.createElement("a",{href:"https://eeshashetty.github.io",target:"_blank",rel:"noopener noreferrer"},"@eeshashetty")))}var k=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(g,null),a.a.createElement(O,null))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.acae8206.chunk.js.map