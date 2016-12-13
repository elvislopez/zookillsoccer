import Dynamic from './Dynamic.js';

export default class Trump extends Dynamic {
	
	constructor ( name, top, left ) {
	console.log('in Trump object, name:' + name );

	super( name );

	this.dom = document.getElementById('trump');

	this.dom.style.top = top + 'px';
	this.dom.style.left = left + 'px';

	this.initpingPong();

	this.show();
	}

	initpingPong () {

		console.log("in pingpong");
		// TODO:set up arcade-style movement for trump


	}

	startPingPong () {

		console.log(" I AM KICKED!!! in trump.startPingPong()");

		this.intervalId = setInterval( () => this.doPingPong, 40 );

	}

	doPingPong () {

		//

	}

	stopPingPong () {

	}

}