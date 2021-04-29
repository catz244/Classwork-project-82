canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

var mouseEvent="empty";
var last_position_of_x; 
var last_position_of_y;

color="green";
width=2;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("colour_input").value;
    width=document.getElementById("width_input").value;

    mouseEvent="mousedown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
current_position_of_mouse_x= e.clientX-canvas.offsetLeft;
current_position_of_mouse_y= e.clientY-canvas.offsetTop;

if (mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;

    console.log("last position of x and y coordinate=");
    console.log("x=" + last_position_of_x +"y=" + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("current position of x and y coordinate=");
    console.log("x=" + current_position_of_mouse_x +"y=" + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);

    ctx.stroke();
}
last_position_of_x= current_position_of_mouse_x;
last_position_of_y= current_position_of_mouse_y;
}
canvas.addEventListener("mouseup",my_mouseup);
canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseup(e){
    mouseEvent="mouseup";
}
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
function clear() {
     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }