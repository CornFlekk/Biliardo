const DELTA = 1/100; //velocità di ciclo di gioco

function GameWorld() {

	this.pallaBianca = new Palla(new Vector2(320, 360));
	this.stecca = new Stecca(new Vector2(320, 360), this.pallaBianca.tira.bind(this.pallaBianca));

}

GameWorld.prototype.update = function() {

	this.pallaBianca.update(DELTA);
	this.stecca.update();

	if(!this.ballsMoving() && this.stecca.tiro) {
		this.stecca.riposiziona(this.pallaBianca.posizione);
	}
}

GameWorld.prototype.draw = function() {

	Sfondo.drawImage(sprites.background, {x: 0, y: 0});

	this.pallaBianca.draw();
	this.stecca.draw();

}

GameWorld.prototype.ballsMoving = function() {
	return this.pallaBianca.muovendo;
}
