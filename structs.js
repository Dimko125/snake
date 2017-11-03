/*Powered by Dimasik
*/

function Box()
{
	this.Width = 0;
	this.Height = 0;
	this.Coord = new Coord();
	this.Color = new ColorRGB(0, 0, 0);
	this.Rounding = 0; // Percent
	this.Id = 0;
	
	this.Rad = 0.0;
}

function Snake(TilesCount, MaxGap, MinGap)
{
	this.Vel = 0;
	this.Tiles = new Array(0);
	this.Id = 0;
	
	for(var i = 0; i < TilesCount; i++)
	{
		var b = new Box();
		b.Width = 25;
		b.Height = 25;
		b.Color = new ColorRGB(125, 33, 0).ToHexString();
		b.Coord = new Coord(0, 0);
		b.Rounding = 100;
		b.Id = i;
		if(this.Tiles.length == 0)
			this.Tiles[0] = b;
		else
			this.Tiles.push(b);
	}
	
	
	Snake.prototype.Update = function()
	{
		for(var i = 0; i < this.Tiles.length; i++)
		{
			if(i > 0)
			{
				var b1 = this.Tiles[i - 1];
				var b2 = this.Tiles[i];
				var d = b1.Coord.Distance(b2.Coord);
					
				/*
				new Coord(
							Math.cos(a) * d / this.Vel,
							Math.sin(a) * d / this.Vel
				*/
					
				if(true) // d > Gap
				{
					var k = 0;
					var gap = MaxGap - MinGap;
					k = 1 / gap;
					var a = Math.atan2(b1.Coord.Y - b2.Coord.Y, b1.Coord.X - b2.Coord.X);
					
					b2.Coord = b2.Coord.Plus(
					
						new Coord(
							Math.cos(a) * k * (d - MinGap) * 10,
							Math.sin(a) * k * (d - MinGap) * 10
							
					));
				}
			}
		}
	}
	
	Snake.prototype.Forward = function(Coord1)
	{
		
		var a = Math.atan2(Coord1.Y - this.Tiles[0].Coord.Y, Coord1.X - this.Tiles[0].Coord.X);
		var k = this.Vel;
		var d = this.Tiles[0].Coord.Distance(Coord1);
		if(d < k)
			k = d;
		this.Tiles[0].Coord = new Coord(Math.cos(a) * k, Math.sin(a) * k).Plus(this.Tiles[0].Coord);
		
		
		//this.Tiles[0].Coord = Coord1;
	}
	
	
}