window.onload=function(){var oFocus=document.getElementsByClassName("focus")[0];var oUl=document.getElementById("focus_pic");var aPic=oUl.getElementsByTagName("li");var oCir=document.getElementById("focus_cir");var aCircle=oCir.getElementsByTagName("li");var arrow_l=document.getElementsByClassName("arrow_l")[0];var arrow_r=document.getElementsByClassName("arrow_r")[0];var nowIndex=0;var zindex=2;for(var i=0;i<aCircle.length;i++){aCircle[i].index=i;aCircle[i].onclick=function(){if(nowIndex==this.index){return}nowIndex=this.index;tab()}}function tab(){for(var j=0;j<aCircle.length;j++){aCircle[j].className=""}aCircle[nowIndex].className="current";aPic[nowIndex].style.zIndex=zindex++}arrow_l.onclick=function(){nowIndex--;if(nowIndex<0){nowIndex=3}tab()};arrow_r.onclick=next;function next(){nowIndex++;if(nowIndex>3){nowIndex=0}tab()}var timer=setInterval(next,2000);oFocus.onmouseover=function(){clearInterval(timer)};oFocus.onmouseout=function(){timer=setInterval(next,2000)}};