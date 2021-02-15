console.log("test");

var canvas = document.createElement("canvas");

var ctx = CanvasRenderingContext2D.prototype;

var key = {space: false, w: false, d: false, s: false, a: false};



function start() {
    canvas = document.createElement("canvas");
    canvas.style.width = document.body.clientWidth + "px";
    canvas.style.height = document.body.clientHeight + "px";
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
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
    if(event.keyCode == 87) {
        key.w = true;
    }
    if(event.keyCode == 68) {
        key.d = true;
    }
    if(event.keyCode == 83) {
        key.s = true;
    }
    if(event.keyCode == 65) {
        key.a = false;
    }
});
document.addEventListener('keyup', function(event) {
    if (event.keyCode == 32 ) {
        key.space = false;
    }
    if (event.keyCode == 87 ) {
        key.w = false;
    }
    if(event.keyCode == 68) {
        key.d = flase;
    }
    if(event.keyCode == 83) {
        key.s = true;
    }
    if(event.keyCode == 65) {
        key.a = true;
    }
});




