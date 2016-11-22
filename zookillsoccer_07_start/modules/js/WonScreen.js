import Screen from './Screen.js';

export default class WonScreen extends Screen {
	
	constructor ( name ) {

		console.log('in WonScreen');

		super( name );

		this.dom = document.getElementById('won-screen');

	} // end of constructor

} // end of class