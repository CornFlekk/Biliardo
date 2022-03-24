const ORIGINE_STECCA = new Vector2(970, 11);
const ORIGINE_STECCA_TIRO = new Vector2(950, 11);
const MAX_POTENZA = 5500;

function Stecca(posizione, sulTiro) {
	this.posizione = posizione;
	this.rotazione = 0;
	this.origine = ORIGINE_STECCA.copy();
	this.potenza = 0;
	this.sulTiro = sulTiro;
	this.tiro = false;
}

Stecca.prototype.update = function() {

	if(Mouse.left.down && !ballsMoving) {
		this.incrementaPotenza();
	}
	else if(this.potenza>0) {
		this.tira();
	}

	if(!this.tiro) {
		this.updateRotation();
	}

}

Stecca.prototype.draw = function() {
	Sfondo.drawImage(sprites.stecca, this.posizione, this.origine, this.rotazione);
}

Stecca.prototype.updateRotation = function () {
	let op = Mouse.posizione.y - this.posizione.y;
	let ad = Mouse.posizione.x - this.posizione.x;

	// let op = this.posizione.y - Mouse.posizione.y;
	// let ad = this.posizione.x - Mouse.posizione.x;
	// inverso

	this.rotazione = Math.atan2(op, ad);
}

Stecca.prototype.incrementaPotenza = function() {
	if(this.potenza>MAX_POTENZA) {
		return;
	}
	this.potenza+=120;
	this.origine.x+=5;
}

Stecca.prototype.tira = function() {
	this.sulTiro(this.potenza, this.rotazione); //richiama il tiro della palla
	this.potenza = 0;
	this.origine = ORIGINE_STECCA_TIRO.copy();
	this.tiro = true;
}

Stecca.prototype.riposiziona = function(posizione) {
	this.posizione = posizione.copy();
	this.origine = ORIGINE_STECCA.copy();
	console.log("a");
	this.tiro = false;
}
