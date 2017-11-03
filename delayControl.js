function InitDelayControl()
{
	document.getElementById("updDelayTextFld").value = updDelay;
}

function DecreaseDelay()
{
	updDelay -= 5;
	write();
}

function IncreaseDelay()
{
	updDelay += 5;
	write();
}

function SetDelay()
{
	updDelay = parseInt(document.getElementById("updDelayTextFld").value);
}

function StopUpd()
{
	canUpdate = false;
}
function PlayUpd()
{
	canUpdate = true;
	_update();
}

function write()
{
	document.getElementById("updDelayTextFld").value = updDelay;
}