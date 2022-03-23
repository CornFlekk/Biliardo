let sprites = {};
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

	sprites.background = loadSprite("tavolo.png");
	sprites.stecca = loadSprite("stecca.png");
	sprites.pallaBianca = loadSprite("pallaBianca.png");

	assetsLoadingLoop(callback);
}
