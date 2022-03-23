const ORIGINE_STECCA = new Vector2(720, 2);

function Stecca(posizione) {
	this.posizione = posizione;
}

Stecca.prototype.update = function() {

}

Stecca.prototype.draw = function() {
	Sfondo.drawImage(sprites.stecca, this.posizione, ORIGINE_STECCA);
}
