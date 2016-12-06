import Static from './Static.js';

export default class Cage extends Static{
	
	constructor ( name ) {

		console.log('in a Zoo Cage, name:' + name );

		super( name );


		// grab a Cage form the dom.

		this.dom = document.createElement( 'div' );



		this.setBackgroundImage( 'img/areas/cage.png' );



	}
}