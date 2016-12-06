import Dynamic from './Dynamic.js';

export default class Player extends Dynamic {
	
	constructor ( name ) {
	console.log('in Player object, name:' + name );
	super( name );
	
	}
}