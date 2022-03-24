const ORIGINE_PALLA = new Vector2(25, 25);
const DIAMETRO_PALLA = 38;
const RAGGIO_PALLA = DIAMETRO_PALLA/2;

function Palla(posizione, colore) {
	this.posizione = posizione;
	this.velocita = new Vector2();
	this.muovendo = false;
	this.sprite = getSpriteDaColore(colore);
}

Palla.prototype.update = function (delta) {
	this.posizione.addTo(this.velocita.mult(delta));
	this.velocita = this.velocita.mult(0.984); //simulazione della frizione;

	if(this.velocita.length()<5) {
		this.velocita = new Vector2();
		this.muovendo = false;
	}
}

Palla.prototype.draw = function () {
	Sfondo.drawImage(this.sprite, this.posizione, ORIGINE_PALLA);
}

Palla.prototype.tira = function(potenza, rotazione) {
	console.log("tiro");
	this.velocita = new Vector2(potenza * Math.cos(rotazione),potenza * Math.sin(rotazione));
	this.muovendo = true;
}

Palla.prototype.collisioneConPalla = function(palla) {

		//Ricerca del vettore normale
		const n = this.posizione.sub(palla.posizione);

		//Ricerca distanza
		const dist = n.length();

		if(dist>DIAMETRO_PALLA) {
			return;
		}

		//Ricerca distanza minima di traslazione
		const mtd = n.mult((DIAMETRO_PALLA - dist) / dist);

		//Spingi e tira le palle
		this.posizione = this.posizione.add(mtd.mult(1/2));
		palla.posizione = palla.posizione.sub(mtd.mult(1/2));

		//Ricerca del vettore normale ad una superficie
		const un = n.mult(1/n.length());

		//Ricerca del vettore tangente ad una superficie
		const ut = new Vector2(-un.y, un.x);

		//Proiezione velocita nei vettori normali e tangenti
		const v1n = un.dot(this.velocita);
		const v1t = ut.dot(this.velocita);
		const v2n = un.dot(palla.velocita);
		const v2t = ut.dot(palla.velocita);

		//Calcolo nuova velocita
		//aiuto
		let v1nTag = v2n;
		let v2nTag = v1n;

		//convertire lo scalare normale e tangenziale in vettori (???)
		v1nTag = un.mult(v1nTag);
		const v1tTag = ut.mult(v1t);
		v2nTag = un.mult(v2nTag);
		const v2tTag = ut.mult(v2t);

		//cambio effettive velocita
		this.velocita = v1nTag.add(v1tTag);
		palla.velocita = v2nTag.add(v2tTag);

		this.muovendo = true;
		palla.muovendo = true;
		sounds.poolshot.play();
}

Palla.prototype.collisioneConTavolo = function(tavolo) {
	if(!this.muovendo) {
		return;
	}

	let collisione = false;

	//sopra
	if(this.posizione.y <= tavolo.TopY + RAGGIO_PALLA + 0.15) {
		this.velocita = new Vector2(this.velocita.x, -this.velocita.y);
		collisione=true;
	}

	//destra
	if(this.posizione.x >= tavolo.RightX - RAGGIO_PALLA - 0.15) {
		this.velocita = new Vector2(-this.velocita.x, this.velocita.y);
		collisione=true;
	}

	//sotto
	if(this.posizione.y >= tavolo.BottomY - RAGGIO_PALLA - 0.15) {
		this.velocita = new Vector2(this.velocita.x, -this.velocita.y);
		collisione=true;
	}

	//sinistra
	if(this.posizione.x <= tavolo.LeftX + RAGGIO_PALLA + 0.15) {
		this.velocita = new Vector2(-this.velocita.x, this.velocita.y);
		collisione=true;
	}

	if(collisione) {
		this.velocita = this.velocita.mult(0.984);
	}
}

Palla.prototype.collisioneCon = function(object) {
	if(object instanceof Palla) {
		this.collisioneConPalla(object);
	}
	else {
		this.collisioneConTavolo(object);
	}
}
