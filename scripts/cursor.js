const cursor = document.querySelector(".cursor");
const cursorArrow = document.querySelector(".cursorArrow")
var clickAbleImg = document.querySelectorAll(".clickAbleImg");

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 20)+"px; left: "+(e.pageX - 20)+"px;")
    cursorArrow.setAttribute("style", "top: "+(e.pageY - 20)+"px; left: "+(e.pageX - 20)+"px;")
    for(var div of clickAbleImg){
        if(div.mouseIsOver){
            cursor.setAttribute("tag", "expanded");
            cursorArrow.setAttribute("tag", "");
            break;
        }
        else{
            cursor.setAttribute("tag", "");
            cursorArrow.setAttribute("tag", "hidden");
        }
    }
})

window.onload = initDivMouseOver;
function initDivMouseOver()   {
   for(var div of clickAbleImg){
   div.mouseIsOver = false;
   div.onmouseover = function()   {
      div.mouseIsOver = true;
   };
   div.onmouseout = function()   {
      div.mouseIsOver = false;
   }
}
}