(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:1,name:"DBZ GROUP",image:"assets/images/dbzbackground1.jpg"},{id:2,name:"Shenron",image:"assets/images/dbzfinalbackdrop.gif"},{id:3,name:"Kid Buu",image:"assets/images/douchebuu.gif"},{id:4,name:"Frieza",image:"assets/images/frieza.gif"},{id:5,name:"Gohan",image:"assets/images/gohan1.gif"},{id:6,name:"Goku",image:"assets/images/gokuplayercard.gif"},{id:7,name:"CELL",image:"assets/images/perfectcell.gif"},{id:8,name:"Bowser",image:"assets/images/vegeta.gif"}]},15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(3),c=t.n(r),i=t(4),s=t(5),l=t(7),d=t(6),m=t(8),g={img:{width:200,height:200,objectFit:"scale-down",margin:10,padding:10,border:"solid 1px white",background:"black"}},u=function(e){return o.a.createElement("div",{className:"col-3"},o.a.createElement("img",{style:g.img,className:"",alt:e.name,src:e.image,onClick:function(){return e.handleClick(e.id)}}))},p={wrapper:{paddingTop:50,height:"100%",display:"flex",flexFlow:"row wrap",padding:20,justifyContent:"space-around",alignContent:"flex-start",overflow:"auto",background:"orange",border:"solid 1px white"}},f=function(e){return o.a.createElement("div",{style:p.wrapper},e.children)},h=(t(15),function(){return o.a.createElement("div",{className:"jumbotron jumbotron-fluid clouds text-center"},o.a.createElement("h1",{className:"display-4"},"DragonBall Z Click"),o.a.createElement("p",{className:"lead"},"Click on a DBZ character to earn points, but don't click on any more than once!"))}),b={nav:{background:"orange",padding:20,border:"solid 1px white"},content:{color:"black",width:"30%",textAlign:"center",fontSize:"16pt"}},k=function(e){return o.a.createElement("nav",{style:b.nav,className:"navbar"},o.a.createElement("a",{style:b.content,className:"navbar-brand",href:"/"},"DBZ Click"),o.a.createElement("h3",{style:b.content},"Click on a DBZ Character to begin!"),o.a.createElement("h3",{style:b.content},"Score: ",e.score," | Top Score: ",e.topScore))},w=t(1),v=[],E=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(o)))).state={images:w,score:0,topScore:0,clicked:v},t.handleClick=function(e){console.log(e),t.updateScore(e),t.shuffleCards(w)},t.updateScore=function(e){var a=t.state.score,n=t.state.topScore;v.includes(e)?(alert("You lost :( Try again!!!"),v=[],t.setState({score:0,topScore:t.state.topScore,clicked:v})):(v.push(e),++a>=n&&(n=a),console.log("guessesArr",v),console.log("score",a),console.log("topscore",n),v.length===w.length&&(alert("YOU WIN!!!"),a=0,v=[]),t.setState({score:a,topScore:n,clicked:v}))},t.shuffleCards=function(e){for(var a=e.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),o=[e[n],e[a]];e[a]=o[0],e[n]=o[1]}return t.setState({images:e})},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(k,{score:this.state.score,topScore:this.state.topScore}),o.a.createElement(h,null),o.a.createElement(f,null,this.state.images.map(function(a){return o.a.createElement(u,{handleClick:e.handleClick,id:a.id,key:a.id,name:a.name,image:a.image})})))}}]),a}(n.Component);t(16);c.a.render(o.a.createElement(E,null),document.getElementById("root"))},9:function(e,a,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.27d57b02.chunk.js.map