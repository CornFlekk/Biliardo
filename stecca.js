function Stecca() {
	this.posizione = new Vector2(0, 0);
	this.origine = new Vector2(sprites.stecca.width/2, sprites.stecca.height);
}

Stecca.prototype.update = function() {
	this.posizione = Mouse.posizione;

	if(Mouse.left.pressed) {
		console.log("Pressed left");
	}
}

Stecca.prototype.draw = function() {
	Sfondo.drawImage(sprites.stick, this.posizione, this.origine);
}
