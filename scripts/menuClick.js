var text = ["Menu", "Close"];
var a = true;

function menuClick(){
    if(a) {
        document.getElementsByClassName("textClick")[0].setAttribute("style", "color: black;");
        document.getElementsByClassName("menuClick")[0].setAttribute("style", "margin-right: 0%;visibility: visible;transition-delay: 300ms;");
        document.getElementsByClassName("shadows")[0].setAttribute("style", "visibility: visible;opacity:0.8;");
        document.getElementsByClassName("textClick")[0].innerHTML = text[1];
        document.querySelector(".mid").setAttribute("tag", "Visible");
        document.body.setAttribute("style", "overflow:hidden;height:100vh");
        a = false;

        //  Animation Slide MenuBar
        setTimeout(function(){
            document.getElementsByClassName("menuBar")[0].setAttribute("style", "opacity: 1.0;margin-top: 0;");
            document.getElementsByClassName("texter")[0].setAttribute("style", "opacity: 1.0;margin-top: 0;");
            document.getElementsByClassName("social")[0].setAttribute("style", "opacity: 1.0;margin-top: 0;");
        }, 1500)
    }
    else {
        document.getElementsByClassName("textClick")[0].setAttribute("style", "color: white;");
        document.getElementsByClassName("menuClick")[0].setAttribute("style", "margin-right: -50%;visibility: hidden;transition-delay: 1000ms;");
        document.getElementsByClassName("shadows")[0].setAttribute("style", "visibility: hidden;opacity:0;");
        document.getElementsByClassName("textClick")[0].innerHTML = text[0];
        document.querySelector(".mid").setAttribute("tag", "");
        document.body.setAttribute("style", "overflow:scroll;height:auto");
        a = true;

        //  Animation Slide MenuBar
        document.getElementsByClassName("menuBar")[0].setAttribute("style", "opacity: 0;margin-top: 40px;")
        document.getElementsByClassName("texter")[0].setAttribute("style", "opacity: 0;margin-top: 40px;");
        document.getElementsByClassName("social")[0].setAttribute("style", "opacity: 0;margin-top: 40px;");
    }
};
