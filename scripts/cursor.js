const cursor = document.querySelector('.cursor');
var div = document.querySelectorAll(".clickAbleImg");

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 20)+"px; left: "+(e.pageX - 20)+"px;")
    for(var div2 of div){
        if(div2.mouseIsOver){
            cursor.setAttribute("tag", "expanded");
            break;
        }
        else{
            cursor.setAttribute("tag", "");
        }
    }
})

window.onload = initDivMouseOver;
function initDivMouseOver()   {
   for(var div2 of div){
   div2.mouseIsOver = false;
   div2.onmouseover = function()   {
      div2.mouseIsOver = true;
   };
   div2.onmouseout = function()   {
      div2.mouseIsOver = false;
   }
}
}