(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(6),s=a.n(o),i=(a(16),a(3)),l=a(4),u=a(8),c=a(7),m=a(2),b=a(9),h=a(0),d=a.n(h),f=function(){function e(t,a,r){Object(i.a)(this,e),this._numberOfRows=t,this._numberOfColumns=a,this._numberOfBombs=r,this._numberOfTiles=t*a,this._playerBoard=e.generatePlayerBoard(t,a),this._bombBoard=e.generateBombBoard(t,a,r)}return Object(l.a)(e,[{key:"playMove",value:function(e,t,a){this.flipTile(e,t),console.log(this._numberOfBombs),console.log(this._numberOfTiles),"B"===this.playerBoard[e][t]?(d()(a.currentTarget).css({background:"red",color:"white"}).text("B"),d()(".status").show().text("NO!!! YOU LOST!")):this._numberOfTiles==this._numberOfBombs?(d()(a.currentTarget).css({background:"white",border:"1px solid black"}).text(this.getNumberOfNeighborBombs(e,t)),d()(".status").show().text("YOU WON!!")):d()(a.currentTarget).css({background:"white",border:"1px solid black"}).text(this.getNumberOfNeighborBombs(e,t))}},{key:"flipTile",value:function(e,t){return"B"===this._bombBoard[e][t]?this._playerBoard[e][t]="B":(this._playerBoard[e][t]=this.getNumberOfNeighborBombs(e,t),this._numberOfTiles--)}},{key:"getNumberOfNeighborBombs",value:function(e,t){var a=this,r=this._bombBoard.length,n=this._bombBoard[0].length,o=0;return[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]].forEach(function(s){var i=e+s[0],l=t+s[1];i>=0&&i<r&&l>=0&&l<n&&"B"===a._bombBoard[i][l]&&(o+=1)}),o}},{key:"playerBoard",get:function(){return this._playerBoard}}],[{key:"generatePlayerBoard",value:function(e,t){for(var a=[],r=0;r<e;r++){for(var n=[],o=0;o<t;o++)n.push(" ");a.push(n)}return a}},{key:"generateBombBoard",value:function(e,t,a){for(var r=[],n=0;n<e;n++){for(var o=[],s=0;s<t;s++)o.push(" ");r.push(o)}for(var i=0;i<a;){var l=Math.floor(Math.random()*e),u=Math.floor(Math.random()*t);"B"!==r[l][u]&&(r[l][u]="B",i+=1)}return r}}]),e}(),w=(a(17),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={rows:0,columns:0,bombs:0},a.Game=new f(a.state.rows,a.state.columns,a.state.bombs),a.getTileIndexes=a.getTileIndexes.bind(Object(m.a)(a)),a.startGame=a.startGame.bind(Object(m.a)(a)),a.restart=a.restart.bind(Object(m.a)(a)),a.newGame=a.newGame.bind(Object(m.a)(a)),a}return Object(b.a)(t,e),Object(l.a)(t,[{key:"getTileIndexes",value:function(e){var t=d()(e.currentTarget).index(),a=d()(e.currentTarget).parent().index();this.Game.playMove(a,t,e)}},{key:"startGame",value:function(){var e=d()(".rowInput").val(),t=d()(".columnInput").val(),a=d()(".bombInput").val();return Number(e)&&Number(t)&&Number(a)?e>10?d()(".error").show().text("Rows cannot be more than 10"):t>15?d()(".error").show().text("Columns cannot be more than 15"):e*t<=a?d()(".error").show().text("reduce amount of bombs!"):(this.setState({rows:e}),this.setState({columns:t}),this.setState({bombs:a}),d()(".tile").css({background:"black",color:"black"}),this.Game=new f(e,t,a),d()(".intro").hide(),d()(".error").hide(),d()(".restart").show(),void d()(".newGame").show()):d()(".error").show().text("can input only numbers!")}},{key:"restart",value:function(){this.Game=new f(this.state.rows,this.state.columns,this.state.bombs),d()(".tile").css({background:"black",color:"black",border:"1px solid white"}),d()(".status").hide()}},{key:"newGame",value:function(){this.setState({rows:0}),this.setState({columns:0}),this.setState({bombs:0}),d()(".intro").show(),d()(".status").hide(),d()(".restart").hide(),d()(".newGame").hide()}},{key:"printBoard",value:function(e,t){for(var a=[],r=0,o=1e3,s=0;s<e;s+=1){for(var i=[],l=0;l<t;l+=1){r+=1;var u=n.a.createElement("span",{onClick:this.getTileIndexes,key:r,className:"tile"});i.push(u)}o+=1,a.push(n.a.createElement("div",{className:"row",key:o},i))}return a}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"intro"},n.a.createElement("h1",null,"Lets start The Game!"),n.a.createElement("p",null,"Create you board..."),n.a.createElement("p",null,"Number of Rows"),n.a.createElement("input",{className:"rowInput"}),n.a.createElement("p",null,"Number of Columns"),n.a.createElement("input",{className:"columnInput"}),n.a.createElement("p",null,"Number of Bombs"),n.a.createElement("input",{className:"bombInput"}),n.a.createElement("p",{className:"error"}),n.a.createElement("button",{className:"startButton",onClick:this.startGame},"Start the Game")),n.a.createElement("div",{className:"board"},0!==e.state.rows&&0!==e.state.columns&&0!==e.state.bombs&&e.printBoard(e.state.rows,e.state.columns),n.a.createElement("p",{className:"status"},"You LOST!"),n.a.createElement("button",{className:"restart",onClick:this.restart},"Restart"),n.a.createElement("button",{className:"newGame",onClick:this.newGame},"NEW GAME")))}}]),t}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.aedceb4e.chunk.js.map