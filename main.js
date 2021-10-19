var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="brown";
width= 3;
var mouseEvent="empty";

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    cpx= e.clientX-canvas.offsetLeft;
    cpy= e.clientY-canvas.offsetTop;

    if(mouseEvent == "mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(cpx,cpy,30,0,2*Math.PI);
        ctx.stroke();
    }
}