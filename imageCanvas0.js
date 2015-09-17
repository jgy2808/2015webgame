window.addEventListener("load",drawScreen,true);

function drawScreen()
{
var theCanvas = document.getElementById("GameCanvas");
var Context = theCanvas.getContext("2d");
Context.fillStyle = "#3498db";
Context.fillRect(0,0,1000,700);
/*Context.beginPath();
Context.moveTo(10,10);
Context.lineTo(150,100);
Context.strokeStyle = "#000";
Context.stroke();

Context.beginPath();
Context.arc(200,60,50,1*Math.PI,2*Math.PI,false);
Context.fillStyle="#ff0";
Context.fill();

var gradient = Context.createLinearGradient(0,0,170,0);
gradient.addColorStop("0", "white");
gradient.addColorStop("0.5","white");
gradient.addColorStop("1","white");

Context.strokeStyle = gradient;
Context.lineWidth = 8;
Context.strokeRect(150,150,500,300);
Context.fillStyle = "#fff";
Context.fillRect(150,150,500,300);

Context.beginPath();
Context.arc(400,290,80,5*Math.PI,6*Math.PI,false);
Context.fillStyle = "#ff0000";
Context.fill();
Context.beginPath();
Context.arc(400,290,80,5*Math.PI,6*Math.PI,true);
Context.fillStyle = "#0000ff";
Context.fill();

Context.beginPath();
Context.fillStyle = "#000";
Context.fillRect(160,180,140,30);
Context.fill();

Context.fillStyle = "#000";
Context.fillRect(160,220,140,30);

Context.fillStyle = "#000";
Context.fillRect(160,260,140,30);*/
}