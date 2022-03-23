const ORIGINE_PALLA = new Vector2(25, 25);

function Palla(posizione) {
	this.posizione = posizione;
}

Palla.prototype.update = function () {

}

Palla.prototype.draw = function () {
	Sfondo.drawImage(sprites.pallaBianca, this.posizione, ORIGINE_PALLA);
}
