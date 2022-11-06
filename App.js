app.LoadPlugin( "Picasso" );

function OnStart()
{
  lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

  img = app.AddImage( lay, "http://droidscript.org/wp-content/uploads/2020/08/cropped-unnamed-5.png", 0.3 );
  lay.AddChild( img );

  img2 = Picasso.CreateImage( "http://droidscript.org/wp-content/uploads/2020/08/cropped-unnamed-5.png", 0.3, -1, "Circle" );
  img2.SetMargins( 0, 0.1, 0, 0);
  lay.AddChild( img2 );

  app.AddLayout( lay );
}

