const ORIGINE_STECCA = new Vector2(970, 11);

function Stecca(posizione) {
	this.posizione = posizione;
	this.rotazione = 0;
}

Stecca.prototype.update = function() {

	this.updateRotation();

}

Stecca.prototype.draw = function() {
	Sfondo.drawImage(sprites.stecca, this.posizione, ORIGINE_STECCA, this.rotazione);
}

Stecca.prototype.updateRotation = function () {
	let op = Mouse.posizione.y - this.posizione.y;
	let ad = Mouse.posizione.x - this.posizione.x;

	this.rotazione = Math.atan2(op, ad);
}
