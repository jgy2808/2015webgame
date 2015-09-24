var bMouseClicked = false;
var intMouseX = 480;
var intMouseY = 300;
var strMouseStatus = "준비중";
var intPlayerX = 480;
var intPlayerY = 300;
var Game_STATE_READY = 0;
var Game_STATE_GAME = 1;
var Game_STATE_OVER = 2;
var arrHaepari = new Array();
var intTime = 100;

var GameState = Game_STATE_READY;

var imgBackground = new Image();
imgBackground.src = "background.png";

var haepari = new Image();
haepari.src = "haepari.png";

var intervalID;

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
	Context.Style = "#00f";
	Context.font = '24px nanumgothic';
	Context.textBaseline = "top";
	Context.fillText("입력된 키는 :" + strKeyEventValue,5,5);
	Context.fillText("키 입력 상태는 : " + strKeyEventType,5,30);
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
		for (var i = 0; i < arrHaepari.length; i++)
		{
			Context.drawImage(haepari, arrHaepari[i].x, arrHaepari[i].y);
		}
	}	
	else if (GameState == Game_STATE_OVER)
	{
		Context.font = '60px NanumGothicCoding';
		Context.fillText("GAME OVER", 400, 300);
		for (var i = 0; i < arrHaepari.length; i++)
		{
			Context.drawImage(haepari, arrHaepari[i].x, arrHaepari[i].y); 
		}
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
			onReady();	
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
    for (var i = 0; i < arrHaepari.length; i++)
    {
        arrHaepari[i].x += arrHaepari[i].go_x * 10;
        arrHaepari[i].y += arrHaepari[i].go_y * 10;
        if (IsCollisionWithPlayer(arrHaepari[i].x,arrHaepari[i].y))
        {
            onGameOver();
        }
        if (arrHaepari[i].x < 0 || arrHaepari[i].x > 940 || arrHaepari[i].y < 0 || arrHaepari[i].y >730)
        {
            var balltype = RandomNextint(4);
            switch(balltype)
            {
                case 1:
                    arrHaepari[i].x = 0;
                    arrHaepari[i].y = RandomNextint(730);
                    arrHaepari[i].go_x = RandomNextint(2);
                    arrHaepari[i].go_y = -2 + RandomNextint(4);
                    break;
                    
                case 2:
                    arrHaepari[i].x = RandomNextint(940);
                    arrHaepari[i].y = 0;
                    arrHaepari[i].go_x = RandomNextint(2);
                    arrHaepari[i].go_y = -2 + RandomNextint(4);
                    break;
                    
                case 3:
                    arrHaepari[i].x = 940;
                    arrHaepari[i].y = RandomNextint(730);
                    arrHaepari[i].go_x = RandomNextint(2);
                    arrHaepari[i].go_y = -2 + RandomNextint(4);
                    break;
                    
                case 4:
                    arrHaepari[i].x = RandomNextint(940);
                    arrHaepari[i].y = 730;
                    arrHaepari[i].go_x = RandomNextint(2);
                    arrHaepari[i].go_y = -2 + RandomNextint(4);
                    break;
            }
        }
    }
	drawScreen();
}

function RandomNextint(max)
{
    return 1 + Math.floor(Math.random() * max);
}

function IsCollisionWithPlayer(x,y)
{
	if (intPlayerX + 50 > x + 5 && intPlayerX + 5 < x + 50 && intPlayerY + 5 < y + 45 && intPlayerY + 45 > y + 5)
		{
			return true;
		}
	return false;
}
function onReady()
{
	GameState = Game_STATE_READY;
	intPlayerX = 480;
	intPlayerY = 300;
    while (arrHaepari.length != 0)
    {
        arrHaepari.pop();
    }
}
function onGameStart()
{
	GameState = Game_STATE_GAME;
	intervalID = setInterval(MoveHaepari,100);
    Makeball();
}
function onGameOver()
{
	GameState = Game_STATE_OVER;
	clearInterval(intervalID);
}

function InGameUpdate()
{
    intTime += 100;
    if (intTime % 5000 == 0)
    {
        for (var i = 0; i < 3; i++)
        {
            switch(balltype)
            {
                case 1:
                    intX = 0;
                    intY = RandomNextint(730);
                    intgoX = RandomNextint(2);
                    intgoY = -2 + RandomNextint(4);
                    break;
                
                case 2:
                    intX = RandomNextint(940);
                    intY = 0;
                    intgoX = RandomNextint(2);
                    intgoY = -2 + RandomNextint(4);
                    break;
                    
                case 3:
                    intX = 940;
                    intY = RandomNextint(730);
                    intgoX = RandomNextint(2);
                    intgoY = -2 + RandomNextint(4);
                    break;
                    
                case 4:
                    intX = RandomNextint(940);
                    intY = 730;
                    intgoX = RandomNextint(2);
                    intgoY = -2 + RandomNextint(4);
                    break;
            }
            Makeball.push({x : intX, y : intY, go_x : intgoX, go_y: intgoY});
        }
    }
    drawScreen();
}

function Makeball()
{
    for (var i = 0; i < 15; i++)
    {
        var balltype = RandomNextint(4);
        var intX, intY, intgoX, intgoY;
        switch(balltype)
        {
            case 1:
                intX = 0;
                intY = RandomNextint(730);
                intgoX = RandomNextint(2);
                intgoY = -2 + RandomNextint(4);
                break;
                
            case 2:
                intX = RandomNextint(940);
                intY = 0;
                intgoX = RandomNextint(2);
                intgoY = -2 + RandomNextint(4);
                break;
                
            case 3:
                intX = 940;
                intY = RandomNextint(730);
                intgoX = RandomNextint(2);
                intgoY = -2 + RandomNextint(4);
                break;
                
            case 4:
                intX = RandomNextint(940);
                intY = 730;
                intgoX = RandomNextint(2);
                intgoY = -2 + RandomNextint(4);
                break;
        }
        arrHaepari.push({x : intX, y : intY, go_x : intgoX, go_y: intgoY});
    }
    drawScreen();
}