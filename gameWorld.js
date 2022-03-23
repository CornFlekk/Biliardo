function GameWorld() {

	this.pallaBianca = new Palla(new Vector2(320, 360));
	this.stecca = new Stecca(new Vector2(320, 360));

}

GameWorld.prototype.update = function() {

	this.pallaBianca.update();
	this.stecca.update();

}

GameWorld.prototype.draw = function() {

	Sfondo.drawImage(sprites.background, {x: 0, y: 0});

	this.pallaBianca.draw();
	this.stecca.draw();

}
