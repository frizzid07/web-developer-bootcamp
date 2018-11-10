function colorchanger() {
	var btn = document.querySelector("button");
	// Assigning random values for rgb
	var x = Math.floor(Math.random() * 256);
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);

	var bgcolor = "rgba(" +x+ "," +y+ "," +z+ ")";
	var btncolor = "rgba(" +z+ "," +x+ "," +y+ ")";
	var txtcolor = "rgba(" +y+ "," +z+ "," +x+ ")";

	document.body.style.background = bgcolor;
	btn.style.background = btncolor;
	btn.style.color = txtcolor;
	document.querySelector("h1").style.color = txtcolor;
	document.querySelector("h2").style.color = txtcolor;
}