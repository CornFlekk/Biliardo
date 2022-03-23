//gestione della logica di gioco

function Game() {

}

Game.prototype.init = function() {

	this.gameWorld = new GameWorld();

}

Game.prototype.start = function() {

	Biliardo.init();

	Biliardo.mainLoop();

}

Game.prototype.mainLoop = function() {

	Sfondo.clear();

	Biliardo.gameWorld.update();
	Biliardo.gameWorld.draw();
	
	Mouse.reset();

	requestAnimationFrame(Biliardo.mainLoop);

}

let Biliardo = new Game();
