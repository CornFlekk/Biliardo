//uso la strict mode, una modalità che cambia la gestione degli errori e delle classi, rendendo il codice più veloce
"use strict";

//definisco sfondo2D usato come classe (le variabili vengono riferite con this perchè è una funzione generica)
function Sfondo2D() {
	this.schermo = document.getElementById("schermo");
	this.context = schermo.getContext("2d");
}

//prototype è usato per accedere ai metodi (e attributi) della classe padre. in questi casi ridefinisco clear e drawImage
Sfondo2D.prototype.clear = function() {
	this.context.clearRect(0, 0, this.schermo.width, this.schermo.height);
}

Sfondo2D.prototype.drawImage = function(immagine, posizione, origine) {

	if(!posizione) {
		posizione = new Vector2();
	}

	if(!origine) {
		origine = new Vector2();
	}
	this.context.save();
	this.context.translate(posizione.x, posizione.y);
	this.context.drawImage(immagine, -origine.x, -origine.y);
	this.context.restore();
}

let Sfondo = new Sfondo2D();
