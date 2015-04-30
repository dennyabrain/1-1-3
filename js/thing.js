function thing(){
	this.circle;
}

thing.prototype.init=function(){
	this.circle=paper.circle(50,50,20);
	this.circle.attr("fill", "#f00");
    this.circle.attr("stroke", "#00f");
}

thing.prototype.draw=function(){

}