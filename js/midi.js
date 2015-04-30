window.addEventListener('load', function() {   
  	navigator.requestMIDIAccess().then( 
		onMIDIInit, 
    	onMIDISystemError );
    	//console.log('in navigator');
});

function onMIDIInit( midi ) {
	//console.log('initializing midi');
	//console.log(midi);
	var temp = midi.inputs();
	temp[0].onmidimessage=midiMessageReceived;
}

function onMIDISystemError(){
	//console.log('in System Error');
}

function midiMessageReceived( ev ) {
	//console.log('midiMessageRcvd');
	//console.log(' val0 : '+ev.data[0]+' val1 : '+ev.data[1]+' val2 : '+ev.data[2]);
	//val1 is noteValue and val2 is velocity or analog value
	//then to trigger that event in another part of your application:
	arg={
		var1 : "text",
		var2 : "number"
	};
	mediator.send("someEvent", arg);
}