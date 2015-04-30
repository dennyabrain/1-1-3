function initializeMIDI(){
	navigator.requestMIDIAccess().then( 
		onMIDIInit, 
    	onMIDISystemError );
}

function onMIDIInit( midi ) {
	var temp = midi.inputs();
	temp[0].onmidimessage=midiMessageReceived;
}

function onMIDISystemError(){
	console.log('in MIDI Error');
}

function midiMessageReceived( ev ) {
	arg={
		noteValue : ev.data[1],
		analogValue : ev.data[2]
	};
	var listener = makeSenseOfMidi(ev);
	mediator.send(listener, arg);
}

function makeSenseOfMidi(ev){
	var arg = ' ';
	switch(ev.data[1]){
		case 91:
			arg='knob1';
			break;
		case 93:
			arg='knob2';
			break;
		case 26:
			arg='knob3';
			break;
		case 30:
			arg='knob4';
			break;	
	}
	return arg;
}