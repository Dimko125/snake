// This low level Init function. This only calls main Initialize func
function Init(){
	
	mainCanvas = document.getElementById("drawField");
	ctx = mainCanvas.getContext("2d");
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	
	Initialize();
	_update();
}

// This 'low level' _update func. It only calls main Update function
var canUpdate = true;
var updDelay = 20; // miliseconds. Default 20
function _update(){
	Update();
	if(canUpdate)
		setTimeout(_update, updDelay);
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


var b1;
var b2;
var s1;

// This main Initialize func
function Initialize()
{
	
	b1 = new Box();
	b1.Width = 50;
	b1.Height = 50;
	b1.Color = new ColorRGB(125, 33, 0).ToHexString();
	b1.Coord = new Coord(0, 0);
	b1.Rounding = 100;
	/*
	b2 = new Box();
	b2.Width = 50;
	b2.Height = 50;
	b2.Color = new ColorRGB(125, 33, 0).ToHexString();
	b2.Coord = new Coord(1, 1);
	b2.Rounding = 100;
	objsStack.push(b2);
	*/
	
	s1 = new Snake(100, 20, 10);
	s1.Vel = 10;
	
	console.log("inited");
}

var ts = 0;
// This main Update function
function Update(){
	
	s1.Forward(Cursor);
	
	/*
	ts++;
	document.title = ts;
	
	if(ts >= 10)
	{	
		s1.Forward(
			new Coord(
				Math.round(Math.random() * (1920 - 0 + 1)) + 0, 
				Math.round(Math.random() * (1080 - 0 + 1)) + 0));
		ts=0;
	}*/
		
	s1.Update();
	
	Draw();
}



var mainCanvas;
var ctx;
function Draw()
{
	ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height)
	for(var i = 0; i < s1.Tiles.length; i++)
	{
		ctx.beginPath();
		
		ctx.arc(s1.Tiles[i].Coord.X, s1.Tiles[i].Coord.Y, s1.Tiles[i].Width / 2, 0, Math.PI * 2, false);
		
		ctx.fillStyle = s1.Tiles[i].Color;
		ctx.fill();
		ctx.closePath();
	}
}










