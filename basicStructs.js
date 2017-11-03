/*Powered by Dimasik
*/

// Class of 2D coordinates
function Coord(NewX, NewY)
{
	this.X = NewX;
	this.Y = NewY;
	
	Coord.prototype.toString = function()
	{
		return "{X:" + this.X + "; Y:" + this.Y + "}";
	}
	
	Coord.prototype.Minus = function(Coord2)
	{
		return new Coord(this.X - Coord2.X, this.Y - Coord2.Y);
	}
	Coord.prototype.Plus = function(Coord2)
	{
		return new Coord(this.X + Coord2.X, this.Y + Coord2.Y);
	}
	Coord.prototype.Distance = function(Coord2)
	{
		var x = Coord2.X - this.X;
		var y = Coord2.Y - this.Y;
		return Math.abs(Math.sqrt(x*x + y*y));
	}
	
	Coord.prototype.Mult = function(K)
	{
		return new Coord(this.X * K, this.Y * K);
	}
}

// Class of RGB color
function ColorRGB(NewR, NewG, NewB)
{
	this.R = NewR;
	this.G = NewG;
	this.B = NewB;
	
	ColorRGB.prototype.ToHexString = function ()
	{
		return "#" + ToHex(this.R) + ToHex(this.G) + ToHex(this.B);
	}
}

// Class of Hex color
function ColorHEX(NewHex)
{
	this.Hex = NewHex;
}

