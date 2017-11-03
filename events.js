document.addEventListener("mousemove", OnMM, false);

var Cursor = new Coord(0, 0);
function OnMM(e)
{
	Cursor.X = e.clientX - 0;
	Cursor.Y = e.clientY - 0;
}