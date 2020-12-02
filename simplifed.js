console.log("test");

var canvas;
var ctx = CanvasRenderingContext2D.prototype;

function start() {
    canvas = document.createElement("canvas");
    canvas.width = "500px";
    canvas.height = "500px";
    ctx = canvas.getContext("2d");
    

    setInterval(update, 30);
}

function rect(x,y, width, height, color) {
    
    ctx.rect(x,y,width,height);
    ctx.fillStyle = color;
    ctx.fill();
}

