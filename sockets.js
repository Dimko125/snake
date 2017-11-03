var socket = new WebSocket("ws://localhost:1488");

socket.send("123");

socket.onopen = function()
{
	console.log("Connected !");
}

socket.onmessage = function(e)
{
	console.log(e.data);
}