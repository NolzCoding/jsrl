console.log("test");

var canvas = document.createElement("canvas");

var ctx = CanvasRenderingContext2D.prototype;

var key = {space: false};

function start() {
    canvas = document.createElement("canvas");
    canvas.style.width = "500px";
    canvas.style.height = "500px";
    canvas.width = "500";
    canvas.height = "500";
    canvas.style.borderColor = "black";
    canvas.style.borderStyle = "solid";
    canvas.style.borderRadius = "3px"
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");
    
    setInterval(update, 30);
}

function rect(x,y, width, height, color) {
    ctx.beginPath();
    ctx.rect(x,y,width,height);
    ctx.fillStyle = color;
    ctx.closePath();
    ctx.fill();
    
}

function clear() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

function circle(x,y,r,c) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, true);
    ctx.fillStyle = c;
    ctx.closePath();
    ctx.fill();
}

function random(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 32 ) {
        key.space = true;
    }
});
document.addEventListener('keyup', function(event) {
    if (event.keyCode == 32 ) {
        key.space = false;
    }
});




