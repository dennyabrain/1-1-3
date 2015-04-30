var mediator;
var paper;

window.onload = function(){
	mediator = new MicroEvent();
	paper = Raphael(10, 50, 320, 200);

	initializeMIDI();
	initCanvas();
	drawStuff(100,100);
}
