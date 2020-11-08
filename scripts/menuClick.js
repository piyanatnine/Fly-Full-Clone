var text = ["Menu", "Close"];
var a = true;

function menuClick(){
    if(a) {
        document.getElementsByClassName("textClick")[0].setAttribute("style", "color: black;");
        document.getElementsByClassName("menuClick")[0].setAttribute("style", "margin-right: 0%;visibility: visible;");
        document.getElementsByClassName("shadows")[0].setAttribute("style", "visibility: visible;opacity:0.8;");
        document.getElementsByClassName("textClick")[0].innerHTML = text[1];
        document.querySelector(".mid").setAttribute("tag", "Visible");
        a = false;
    }
    else {
        document.getElementsByClassName("textClick")[0].setAttribute("style", "color: white;");
        document.getElementsByClassName("menuClick")[0].setAttribute("style", "margin-right: -50%;visibility: hidden;");
        document.getElementsByClassName("shadows")[0].setAttribute("style", "visibility: hidden;opacity:0;");
        document.getElementsByClassName("textClick")[0].innerHTML = text[0];
        document.querySelector(".mid").setAttribute("tag", "");
        a = true;
    }
};
