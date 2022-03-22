function GameWorld() {
	this.stecca = new Stecca();
}

GameWorld.prototype.update = function() {
	this.stecca.update();
}

GameWorld.prototype.draw = function() {

	Sfondo.drawImage(sprites.background, {x: 0, y: 0}, {hx: schermo.width, hy: schermo.height});

	this.stecca.draw();

}
