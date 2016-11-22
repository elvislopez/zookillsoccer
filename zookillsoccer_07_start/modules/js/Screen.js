import GameObj from './GameObj.js';

export default class Screen extends GameObj {
	
	constructor ( name ) {

		console.log('in Screen');

		super( name );

	
	} // end of constructor

	show () {

		this.dom.style.display = 'bock';
	}

	hide() {

		this.dom.style.display = 'none';
	}

} //end of class