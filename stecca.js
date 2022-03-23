const ORIGINE_STECCA = new Vector2(720, 0);

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
	this.rotazione = Math.atan2((Mouse.posizione.y - this.posizione.y), (Mouse.posizione.x - this.posizione.x));
}
