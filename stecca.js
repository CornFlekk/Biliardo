function Stecca() {
	this.posizione = {x: 0, y: schermo.height/2};
}

Stecca.prototype.update = function() {

//Test
	this.posizione.x++;

}

Stecca.prototype.draw = function() {
	Sfondo.drawImage(sprites.stick, this.posizione, {hx: sprites.stick.width/2, hy: sprites.stick.height/2});
}
