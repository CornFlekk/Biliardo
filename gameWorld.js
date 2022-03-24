const DELTA = 1/180; //velocità di ciclo di gioco
var ballsMoving = false;

function GameWorld() {

	this.pallaNera = new Palla(new Vector2(860, 360), COLORE.NERO);
	this.pallaBianca = new Palla(new Vector2(320, 360), COLORE.BIANCO);

	this.stecca = new Stecca(new Vector2(320, 360), this.pallaBianca.tira.bind(this.pallaBianca));

	this.tavolo = {
		TopY: 80,
		RightX: 1195,
		BottomY: 640,
		LeftX: 80
	}
}

GameWorld.prototype.update = function() {

	this.gestisciCollisioni();

	this.pallaNera.update(DELTA);
	this.pallaBianca.update(DELTA);
	this.stecca.update();

	if(!this.ballsMoving() && this.stecca.tiro) {
		this.stecca.riposiziona(this.pallaBianca.posizione);
	}
}

GameWorld.prototype.draw = function() {

	Sfondo.drawImage(sprites.background, {x: 0, y: 0});

	this.pallaBianca.draw();
	this.pallaNera.draw();
	this.stecca.draw();

}

GameWorld.prototype.gestisciCollisioni = function() {
	this.pallaBianca.collisioneCon(this.tavolo);
	this.pallaNera.collisioneCon(this.tavolo);
	this.pallaBianca.collisioneCon(this.pallaNera);
}

GameWorld.prototype.ballsMoving = function() {
	if(this.pallaBianca.muovendo) {
		ballsMoving = true;
		return true;
	}
	if(this.pallaNera.muovendo) {
		ballsMoving = true;
		return true;
	}
	else {
		ballsMoving = false;
		return false;
	}
}
