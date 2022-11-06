cfg.Light

function OnStart()
{
	lay  = app.CreateLayout( "Linear", "Horizontal" )
	app.AddText( lay, "Hello" )
	app.AddLayout( lay )
}
