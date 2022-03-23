function GameWorld() {

	this.pallaBianca = new Palla(413, 413);
	this.stecca = new Stecca();
}

GameWorld.prototype.update = function() {

	this.stecca.update();
	this.pallaBianca.update();

}

GameWorld.prototype.draw = function() {

	Sfondo.drawImage(sprites.background, {x: 0, y: 0});

	this.stecca.draw();
	this.pallaBianca.draw();

}
