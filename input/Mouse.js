function handleMouseMove(event) {
	let x = event.pageX;
	let y = event.pageY;

	Mouse.posizione = new Vector2(x, y);
}

function handleMouseDown(event) {
	handleMouseMove(event);

	switch(event.which) {
		case 1:
		if(!Mouse.left.down) {
			Mouse.left.pressed = true;
		}
		Mouse.left.down = true;
		break;
		case 2:
		if(!Mouse.middle.down) {
			Mouse.middle.pressed = true;
		}
		Mouse.middle.down = true;
		break;
		case 3:
		if(!Mouse.right.down) {
			Mouse.right.pressed = true;
		}
		Mouse.right.down = true;
		break;
	}
}

function handleMouseUp(event) {
	handleMouseMove(event);

	switch(event.which) {
		case 1:
		Mouse.left.down = false;
		break;
		case 2:
		Mouse.middle.down = false;
		break;
		case 3:
		Mouse.right.down = false;
		break;
	}
}

function MouseHandler() {

	this.left = new ButtonState();
	this.middle = new ButtonState();
	this.right = new ButtonState();

	this.posizione = new Vector2();

	document.onmousemove = handleMouseMove;
	document.onmousedown = handleMouseDown;
	document.onmouseup = handleMouseUp;
}

MouseHandler.prototype.reset = function() {
	this.left.pressed = false;
	this.middle.pressed = false;
	this.right.pressed = false;
}

let Mouse = new MouseHandler();
