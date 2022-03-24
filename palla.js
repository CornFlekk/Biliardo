const ORIGINE_PALLA = new Vector2(25, 25);

function Palla(posizione) {
	this.posizione = posizione;
	this.velocita = new Vector2();
	this.muovendo = false;
}

Palla.prototype.update = function (delta) {
	this.posizione.addTo(this.velocita.mult(delta));
	this.velocita = this.velocita.mult(0.98); //simulazione della frizione;

	if(this.velocita.length()<5) {
		this.velocita = new Vector2();
		this.muovendo = false;
	}
}

Palla.prototype.draw = function () {
	Sfondo.drawImage(sprites.pallaBianca, this.posizione, ORIGINE_PALLA);
}

Palla.prototype.tira = function(potenza, rotazione) {
	console.log("tiro");
	this.velocita = new Vector2(potenza * Math.cos(rotazione),potenza * Math.sin(rotazione));
	this.muovendo = true;
}
