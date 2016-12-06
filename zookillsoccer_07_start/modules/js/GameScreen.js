import Screen from './Screen.js';
import Zoo from './Zoo.js';
import Trump from './Trump.js';
import Player from './Player.js';

export default class GameScreen extends Screen {
	
	constructor ( name ) {

		console.log('in GameScreen')

		super( name );

		this.dom = document.getElementById( 'game-screen' );

		this.setBackgroundImage( 'img/screens/game-screen.png' );

	} // end of constructor

	/**
	* create game objects
	* - add 4 Cages
	* - add 4 Animals
	* - add a Trump
	* - add a player
	*/

	build () {

		console.log( 'building the game...');

		// add a Zoo (4 Animals and 4 Cages go inside it)

		this.zoo = new Zoo( 'Funky Zoo' );

		this.zoo.build(); // make Zoo and Cages and Animals

		this.dom.appendChild( this.zoo.dom );

		// add a Trump

		this.trump = new Trump( ' Donald Presidentia Trump');

		// add a player

		this.player = new Player( 'myself' );

		// add 4 Cages

		// add 4 Animals



	}

} // end of class