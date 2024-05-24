var MAX_INDEX = 1000;
window.onload = function (){
    var add = document.getElementById("add");
    var change=document.getElementById("colors")
    add.onclick=addSquare;
    change.onclick=changeColor;
    var squarecount = parseInt(Math.random()*21)+30;
    for(var i = 0; i<squarecount;i++){
       addSquare();
    }
}
function getRandomColor(){
    var possibleLetters="0123456789ABCDEF";
    var color="#";
    for(var i=0;i<6;i++){
        color+=possibleLetters.charAt(parseInt(Math.random()*possibleLetters.length));
    }
    return color;
}
function addSquare(){
    var square = document.createElement("div");
    square.className="square";
    square.style.left=parseInt(Math.random()*651)+ "px";
    square.style.top=parseInt(Math.random()*251)+ "px";
    square.style.backgroundColor=getRandomColor();
    square.onclick=squareClick
    var squarearea=document.getElementById("squarearea");
    squarearea.appendChild(square);
}
function squareClick(){
    if(this.style.zIndex==MAX_INDEX)
       this.parentNode.removeChild(this);
    else{
        MAX_INDEX++;
        this.style.zIndex = MAX_INDEX;
    }
}
function changeColor(){
    var squares=document.querySelectorAll(".square")
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=getRandomColor();
    }
}