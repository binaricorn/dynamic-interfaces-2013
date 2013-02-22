window.onload=function(){
// move across the screen.

var ball = document.getElementById("ball");
var myBox = document.getElementById("box");
var boxHeight = myBox.offsetHeight; // gets the height of the box
var boxWidth = myBox.offsetWidth; // gets the height of the box

var xSpeed = 2;
var ySpeed = 2;


x = Math.floor((Math.random()*50)+10);
y = Math.floor((Math.random()*50)+10);

function update() {
	x+=xSpeed;
    y+=ySpeed;
	ball.style.left = x + "px";
	ball.style.top = y + "px";
    if (x > boxWidth-50 || x < 0) {
        console.log("out of bounds");
        xSpeed *= -1;
    }
    
    if (y > boxHeight - 50 || y < 0) {
        ySpeed *= -1;
    }
}


setInterval(update,1000/30); // 1000/30 means try to update 30 times a second.
console.log(boxHeight, boxWidth);
}//]]>