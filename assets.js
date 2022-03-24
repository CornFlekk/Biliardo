let sprites = {};
let sounds = {};
let semaforosprites = 0;

function assetsLoadingLoop(callback) {
	if(semaforosprites) {
		requestAnimationFrame(assetsLoadingLoop.bind(this, callback));
	}
	else {
		callback();
	}
}

function loadAssets(callback) {

	function loadSprite(filename) {
		semaforosprites++;

		let sprImg = new Image();
		sprImg.src = "assets/" + filename;

		sprImg.onload = function() {
			semaforosprites--;
		}

		return sprImg;
	}

	function loadSound(filename) {

		let sprSnd = new Audio();
		sprSnd.src = "assets/" + filename;


		return sprSnd;
	}

	sprites.background = loadSprite("tavolo.png");
	sprites.stecca = loadSprite("stecca.png");
	sprites.pallaBianca = loadSprite("pallaBianca.png");
	sprites.pallaNera = loadSprite("pallaNera.png");
	sprites.pallaGialla = loadSprite("pallaGialla.png");
	sprites.pallaRossa = loadSprite("pallaRossa.png");
	sounds.poolshot = loadSound("pool-shot.mp3");

	assetsLoadingLoop(callback);
}

function getSpriteDaColore(colore){
	switch(colore) {
		case COLORE.ROSSO:
		return sprites.pallaRossa;
		case COLORE.GIALLO:
		return sprites.pallaGialla;
		case COLORE.NERO:
		return sprites.pallaNera;
		case COLORE.BIANCO:
		return sprites.pallaBianca;
	}
}
