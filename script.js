function randomTXT(){
    var value = [
        `Building brands<br>
        with creative<br>
        digital thinking.`,
        `A digital studio,<br>
        working with the<br>
        brave and ambitious.`,
        `We elevate<br>
        brands from<br>
        good to great.`,
    ];
    let a = Math.floor(Math.random()*3);
    console.log(a);
    document.getElementById("textSecA").innerHTML = value[a];
}