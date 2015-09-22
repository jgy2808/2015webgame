var bMouseClicked = false;
var intMouseX = 480;
var intMouseY = 300;
var strMouseStatus = "준비중";
var intPlayerX = 480;
var intPlayerY = 300;
var Game_STATE_READY = 0;
var Game_STATE_GAME = 1;
var Game_STATE_OVER = 2;

var GameState = Game_STATE_READY;

var imgBackground = new Image();
imgBackground.src = "background.png";

var haepari = new Image();
haepari.src = "haepari.png";

var intervalID;

var tempHaepari1 = { x : 0, y : 0, go_x : 1, go_y : 1};
var tempHaepari2 = { x : 800, y : 0, go_x : -1, go_y : 1};
var tempHaepari3 = { x : 800, y : 600, go_x : -1, go_y : -1};
var tempHaepari4 = { x : 0, y : 600, go_x : 1, go_y : -1};


var imgPlayer = new Image();
imgPlayer.src = "spongebob.png";

imgPlayer.addEventListener("load", drawScreen, false);

function drawScreen(){
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");
	Context.drawImage(imgBackground,0,0,1000,700);
	Context.drawImage(imgPlayer,300,250,20,30);
}

window.addEventListener("load",drawScreen,false);
window.addEventListener("keydown",onkeydown,false);
window.addEventListener("keyup",onkeyup,false);
window.addEventListener("mousemove",onMouseMove,false);
window.addEventListener("mousedown",onMouseDown,false);
window.addEventListener("mouseup",onMouseUp,false);

var imgPlayer = new Image();
imgPlayer.src = "spongebob.png";
imgPlayer.addEventListener("load",drawScreen,false);

var strKeyEventType = "None";
var strKeyEventValue = "None";

function drawScreen(){
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");
	//Context.drawImage(imgBackground,0,0,1074,768);
	Context.drawImage(imgPlayer,300,250,20,30);
	Context.Style = "#00f";
	Context.font = '24px nanumgothic';
	Context.textBaseline = "top";
	Context.fillText("입력된 키는 :" + strKeyEventValue,5,5);
	Context.fillText("키 입력 상태는 : " + strKeyEventType,5,30);
	/*Context.fillStyle = "#ff0";
	Context.fillRect(0,0,1074,768);*/
	Context.drawImage(imgBackground,0,0,1074,768);
	Context.drawImage(imgPlayer, intPlayerX, intPlayerY,40,50);
	Context.fillStyle = "#000000";
	Context.font = '24px Arial';
	Context.textBaseline = "top";
	Context.fillText("발생한 마우스 이벤트는 :" + strMouseStatus,5,5);
	Context.fillText("마우스 좌표는 : " + "X = " +intMouseX + " Y = "+ intMouseY,5,30);	
	if (GameState == Game_STATE_READY)
	{
		Context.fillText("Ready!!", 470, 250);
	}
	else if (GameState == Game_STATE_GAME)
	{
		Context.fillText("Go!!!", 300, 200);
		Context.drawImage(haepari, tempHaepari1.x, tempHaepari1.y);
		Context.drawImage(haepari, tempHaepari2.x, tempHaepari2.y);
		Context.drawImage(haepari, tempHaepari3.x, tempHaepari3.y);
		Context.drawImage(haepari, tempHaepari4.x, tempHaepari4.y);
	}	
	else if (GameState == Game_STATE_OVER)
	{
		Context.font = '60px NanumGothicCoding';
		Context.fillText("GAME OVER", 400, 300);
	}
	
}

function onMouseDown(e){
	strMouseStatus = "클릭!";
	var theCanvas = document.getElementById("GameCanvas");
	bMouseClicked = true;
	intMouseX = e.clientX - theCanvas.offsetLeft-42;
	intMouseY = e.clientY - theCanvas.offsetTop-50;
	drawScreen();
}


function onMouseMove(e){
	strMouseStatus = "Moving now";
	if (bMouseClicked) {
		var theCanvas = document.getElementById("GameCanvas");
		bMouseClicked = true;
		intMouseX = e.clientX - theCanvas.offsetLeft-42;
		intMouseY = e.clientY - theCanvas.offsetTop-50;
		drawScreen();
	}
}

function onMouseUp(e) {
	strMouseStatus = "클릭 끝!";
	bMouseClicked = false;
	intMouseX = 480;
	intMouseY = 300;
	drawScreen();
}

function onkeydown(e)
{
	if (GameState == Game_STATE_READY)
	{
		if (e.keyCode == 13)
		{
			GameState = Game_STATE_GAME;
			onGameStart();
		}
	}
	else if (GameState == Game_STATE_GAME)
	{
		switch(e.keyCode)
		{
		case 37 : if (intPlayerX <= 0)
					{ intPlayerX = 0; }
				else
					{ intPlayerX -= 15; }
			break;

			case 39 : if (intPlayerX >= 985)
					{ intPlayerX = 985; }
				else 
					{ intPlayerX += 15; }
			break;

			case 38 : if (intPlayerY<= 0)
					{ intPlayerY = 0; }
				else 
					{ intPlayerY -= 15; }
			break;

			case 40 :  if (intPlayerY >= 720)
					{ intPlayerY = 720; }
				else 
					{ intPlayerY += 15; }
			break;
		}
		GameState == Game_STATE_OVER;
	}
	else if (GameState == Game_STATE_OVER)
	{
	if (e.keyCode == 13)
		{
			GameState == Game_STATE_READY;	
		}
	}
	drawScreen();
}

function onkeyup(e)
{

	drawScreen();
}

function onGameStart()
{
	intervalID = setInterval(MoveHaepari, 100);
}

function MoveHaepari()
{
	tempHaepari1.x += tempHaepari1.go_x * 10;
	tempHaepari1.y += tempHaepari1.go_y * 10;
	tempHaepari2.x += tempHaepari2.go_x * 10;
	tempHaepari2.y += tempHaepari2.go_y * 10;
	tempHaepari3.x += tempHaepari3.go_x * 10;
	tempHaepari3.y += tempHaepari3.go_y * 10;
	tempHaepari4.x += tempHaepari4.go_x * 10;
	tempHaepari4.y += tempHaepari4.go_y * 10;
	drawScreen();
}
