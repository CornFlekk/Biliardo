function Buca(posizione) {
  this.posizione = posizione;
}

function inBuca(palla) {
  if(palla.posizione.x == this.posizione.x && palla.posizione.y == this.posizione.y) {
    console.log("buca");
  }
}
