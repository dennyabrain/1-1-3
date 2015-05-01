var mediator;
var paper;
var t;

window.onload = function(){
	mediator = new MicroEvent();
	paper = Raphael(10, 50, 320, 200);

	initializeMIDI();
	initCanvas();
	drawStuff(100,100);

	mediator.route('knob1',t.move.bind(this))
}
