// Master object.
import GameObj from './GameObj.js';

// Screen objects.
import Screen from './Screen.js';
import StartScreen from './StartScreen.js'; //never directly visible, used to construct visible screens.
import GameScreen from './GameScreen.js';
import WonScreen from './WonScreen.js';
import LostScreen from './LostScreen.js';

// HUD objects.
import HUD from './HUD.js'; //never directly visible, used to construct visible screens.
import Score from './Score.js';

// Static Ojbects.
import Static from './Static.js';
import Zoo from './Zoo.js';
import Cages from './Cages.js';



// Dynamic Objects.
import Dynamic from './Dynamic.js';
import Animal from './Animal.js';
import Trump from './Trump.js';
import Player from './Player.js';



console.log('loading game.');

window.startScreen = new StartScreen('Zookill Start');
window.gameScreen = new GameScreen('Zookill Game');
window.lostScreen = new LostScreen('Zookill Lost');
window.wonScreen = new WonScreen('Zookill Won');
window.score = new Score('game score object');
window.zoo = new Zoo('zoo');
window.cages = new Cages('cages');
window.animal = new Animal('Zookill Animal');
window.trump = new Trump('Zookill Trump');
window.player = new Player('player');


// Create a generic GameObj

//window.obj1 = new GameObj('donald trump');

//window.obj2 = new Screen('start screen');

//window.obj3 = new HUD('game score');

