function Stecca() {
	this.posizione = {x: 0-(sprites.stick.width/2), y: schermo.height/2};
}

Stecca.prototype.update = function() {
	this.posizione = Mouse.posizione;

	if(Mouse.left.pressed) {
		console.log("Pressed left");
	}
}

Stecca.prototype.draw = function() {
	Sfondo.drawImage(sprites.stick, this.posizione, {hx: sprites.stick.width/2, hy: sprites.stick.height/2});
}
