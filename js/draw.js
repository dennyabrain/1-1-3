window.onload = function() {
		// Get a reference to the canvas object
		var canvas = document.getElementById('myCanvas');
		// Create an empty project and a view for the canvas:
		paper.setup(canvas);
		// Create a Paper.js Path to draw a line into it:
		var path = new paper.Path();
		// Give the stroke a color
		path.strokeColor = 'black';
		var start = new paper.Point(100, 100);
		// Move to start and draw a line from there
		path.moveTo(start);
		// Note that the plus operator on Point objects does not work
		// in JavaScript. Instead, we need to call the add() function:
		path.lineTo(start.add([ 200, -50 ]));
		// Draw the view now:
		paper.view.draw();
}

function temp(arg){
	console.log(arg);
	//var t = new thing(20,30);
	//t.init();
}

function thing(x,y){
	this.path = new paper.Path.Rectangle(0,0);
}

thing.prototype.init=function(){
	this.path.position = new paper.Point(x,y);
	this.path.strokeColor = 'black';
}


