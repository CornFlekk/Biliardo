const DELTA = 1/180; //velocità di ciclo di gioco
var ballsMoving = false;
var nCollisioni = 0;

function GameWorld() {

	this.palle = [
		[new Vector2(890, 360), COLORE.NERO],//palla1
		[new Vector2(925, 377.5), COLORE.NERO],//palla2
		[new Vector2(925, 342.5), COLORE.NERO],//palla3
		[new Vector2(960, 360), COLORE.NERO],//PALLA NERA 8
		[new Vector2(960, 395), COLORE.NERO],//palla5
		[new Vector2(960, 325), COLORE.NERO],//palla6
		[new Vector2(995, 377.5), COLORE.NERO],//palla7
		[new Vector2(995, 342.5), COLORE.NERO],//palla8
		[new Vector2(995, 412.5), COLORE.NERO],//palla9
		[new Vector2(995, 307.5), COLORE.NERO],//palla10
		[new Vector2(1030, 360), COLORE.NERO],//palla11
		[new Vector2(1030, 395), COLORE.NERO],//palla12
		[new Vector2(1030, 325), COLORE.NERO],//palla13
		[new Vector2(1030, 430), COLORE.NERO],//palla14
		[new Vector2(1030, 290), COLORE.NERO],//palla15
		[new Vector2(320, 360), COLORE.BIANCO] //bianca
	].map(params => new Palla(params[0], params[1]));

	this.pallaBianca = this.palle[this.palle.length - 1];

	this.stecca = new Stecca(new Vector2(320, 360), this.pallaBianca.tira.bind(this.pallaBianca));

	this.tavolo = {
		TopY: 82,
		RightX: 1196,
		BottomY: 648,
		LeftX: 82
	}

	this.buche = {
		b1: new Buca(new Vector2(360, 360))
	}
}

GameWorld.prototype.update = function() {

	this.gestisciCollisioni();

	for(let i=0; i<this.palle.length; i++) {
		this.palle[i].update(DELTA);
	}
	this.stecca.update();

	if(!this.ballsMoving() && this.stecca.tiro) {
		this.stecca.riposiziona(this.pallaBianca.posizione);
	}
}

GameWorld.prototype.draw = function() {

	Sfondo.drawImage(sprites.background, {x: 0, y: 0});

	for(let i=0; i<this.palle.length; i++) {
		this.palle[i].draw();
	}
	this.stecca.draw();

}

GameWorld.prototype.gestisciCollisioni = function() {
	for(let i=0; i<this.palle.length; i++) {
		this.palle[i].collisioneCon(this.tavolo);
		for(let j=i+1; j<this.palle.length; j++) {
			this.palle[i].collisioneCon(this.palle[j]);
		}
	}
}

GameWorld.prototype.ballsMoving = function() {
	for(var i=0; i<this.palle.length; i++) {
		if(this.palle[i].muovendo) {
			ballsMoving = true;
			return true;
		}
	}
	ballsMoving = false
	return false;
}
