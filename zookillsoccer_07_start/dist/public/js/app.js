(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Animal = function (_Dynamic) {
	_inherits(Animal, _Dynamic);

	function Animal(name, screenId) {
		_classCallCheck(this, Animal);

		console.log('in Animal object, name:' + name + ' screenId:' + screenId);

		var _this = _possibleConstructorReturn(this, (Animal.__proto__ || Object.getPrototypeOf(Animal)).call(this, name));

		_this.dom = document.getElementById(screenId);

		_this.show();
		return _this;
	}

	return Animal;
}(_Dynamic3.default);

exports.default = Animal;

},{"./Dynamic.js":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Static2 = require('./Static.js');

var _Static3 = _interopRequireDefault(_Static2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cage = function (_Static) {
	_inherits(Cage, _Static);

	function Cage(name, screenId) {
		_classCallCheck(this, Cage);

		console.log('in a Zoo Cage, name:' + name + ' screenId:' + screenId);

		var _this = _possibleConstructorReturn(this, (Cage.__proto__ || Object.getPrototypeOf(Cage)).call(this, name));

		_this.dom = document.getElementById(screenId);

		_this.show();

		return _this;
	}

	return Cage;
}(_Static3.default);

exports.default = Cage;

},{"./Static.js":12}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GameObj2 = require('./GameObj.js');

var _GameObj3 = _interopRequireDefault(_GameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dynamic = function (_GameObj) {
	_inherits(Dynamic, _GameObj);

	function Dynamic(name) {
		_classCallCheck(this, Dynamic);

		console.log('in Dynamic');

		return _possibleConstructorReturn(this, (Dynamic.__proto__ || Object.getPrototypeOf(Dynamic)).call(this, name));
	}

	return Dynamic;
}(_GameObj3.default);

exports.default = Dynamic;

},{"./GameObj.js":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameObj = function () {

	//inherits from generic Javascript Object;

	function GameObj(name) {
		_classCallCheck(this, GameObj);

		console.log('in GameObj');

		this.name = name;

		this.id = this.setId();
	} // end of constructor

	/** 
  * get the unique ID value for an object.
  * @returns {String} the unique id, in uuid format.
  */


	_createClass(GameObj, [{
		key: 'getId',
		value: function getId() {
			return this.id;
		}

		/** 
   * get the name assigned to this object.
   * @returns {String} the name.
   */

	}, {
		key: 'getName',
		value: function getName() {
			return this.name;
		}

		/** 
   * set the object's name to a new value.
   * @param {String} newName the new name to use.
   */

	}, {
		key: 'setName',
		value: function setName(newName) {
			this.name = newName;
		}

		/**
  * make the onscreen element visible via CSS.
  */

	}, {
		key: 'show',
		value: function show() {

			this.dom.style.display = 'block';
		}

		/*
  *
  */

	}, {
		key: 'hide',
		value: function hide() {

			this.dom.style.display = 'none';
		}

		/** 
   * Load an image from the drive, and set the 
   * css background image property to this image
   * @param {String} imgPath the path to the image on the website.
   */

	}, {
		key: 'setBackgroundImage',
		value: function setBackgroundImage(imgPath) {

			this.dom.style.backgroundImage = "url('" + imgPath + "')";
		}
	}, {
		key: 'setForegroundImage',
		value: function setForegroundImage(imgPath) {

			var img = new Image();

			img.src = imgPath;

			this.dom.appendChild(img);
		}

		/**
  * set the size of an object, in pixels.
  * @param {Number} width the width, in pixels
  * @param {Number} height the height, in pixels
  */

	}, {
		key: 'setSize',
		value: function setSize(width, height) {

			this.dom.style.width = width + 'px';
			this.dom.style.height = height + 'px';
		}

		/**
  * set position of an object, relative to the
  * enclosing Screen object.
  * @param {Number} top the top corrdinate of the object, in pixels.
  * @param {Number} left the left corrdinate of the object, in pixels.
  */

	}, {
		key: 'setPosition',
		value: function setPosition(top, left) {

			this.dom.style.top = top + 'px';
			this.dom.style.left = left + 'px';
		}

		/** 
   * Generate a unique ID for every game object.
   * @link http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
  * @returns {String} the unique ID in uuid format.
   */

	}, {
		key: 'setId',
		value: function setId() {
			var d = new Date().getTime();
			if (window.performance && typeof window.performance.now === "function") {
				d += performance.now(); //use high-precision timer if available
			}
			var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				var r = (d + Math.random() * 16) % 16 | 0;
				d = Math.floor(d / 16);
				return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
			});
			return uuid;
		} // end of setId

	}]);

	return GameObj;
}(); // end of class


exports.default = GameObj;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

var _Zoo = require('./Zoo.js');

var _Zoo2 = _interopRequireDefault(_Zoo);

var _Trump = require('./Trump.js');

var _Trump2 = _interopRequireDefault(_Trump);

var _Player = require('./Player.js');

var _Player2 = _interopRequireDefault(_Player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameScreen = function (_Screen) {
	_inherits(GameScreen, _Screen);

	function GameScreen(name) {
		_classCallCheck(this, GameScreen);

		console.log('in GameScreen');

		var _this = _possibleConstructorReturn(this, (GameScreen.__proto__ || Object.getPrototypeOf(GameScreen)).call(this, name));

		_this.dom = document.getElementById('game-screen');

		_this.setBackgroundImage('img/screens/game-screen.png');

		return _this;
	} // end of constructor

	/**
 * create game objects
 * - add 4 Cages
 * - add 4 Animals
 * - add a Trump
 * - add a player
 */

	_createClass(GameScreen, [{
		key: 'build',
		value: function build() {

			console.log('building the game...');

			// add a Zoo (4 Animals and 4 Cages go inside it)

			this.zoo = new _Zoo2.default('Funky Zoo');

			this.zoo.build(); // make Zoo and Cages and Animals

			this.dom.appendChild(this.zoo.dom);

			// add a Trump at
			// ??? WHT WAS STYLE NOT DEFINED HERE?

			this.trump = new _Trump2.default(' Donald Presidentia Trump', 440, 245);

			// add a player at y = 500, x = 245 pixels


			this.player = new _Player2.default('myself', 500, 245, this.trump);

			// add a lion 


			// add 4 Cages

			// add 4 Animals

		}
	}]);

	return GameScreen;
}(_Screen3.default); // end of class


exports.default = GameScreen;

},{"./Player.js":8,"./Screen.js":10,"./Trump.js":13,"./Zoo.js":15}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GameObj2 = require('./GameObj.js');

var _GameObj3 = _interopRequireDefault(_GameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HUD = function (_GameObj) {
	_inherits(HUD, _GameObj);

	function HUD(name) {
		_classCallCheck(this, HUD);

		console.log('in HUD');

		return _possibleConstructorReturn(this, (HUD.__proto__ || Object.getPrototypeOf(HUD)).call(this, name));
	} // end of constructor

	return HUD;
}(_GameObj3.default); // end of class


exports.default = HUD;

},{"./GameObj.js":4}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LostScreen = function (_Screen) {
	_inherits(LostScreen, _Screen);

	function LostScreen(name, screenArray) {
		_classCallCheck(this, LostScreen);

		console.log('in LostScreen');

		var _this = _possibleConstructorReturn(this, (LostScreen.__proto__ || Object.getPrototypeOf(LostScreen)).call(this, name, screenArray));

		_this.dom = document.getElementById('lost-screen');

		// set the background image.

		_this.setBackgroundImage('img/screens/lost-screen.png');

		_this.getStartButton();

		_this.getExitButton();

		return _this;
	} // end of constructor


	return LostScreen;
}(_Screen3.default); // end of class


exports.default = LostScreen;

},{"./Screen.js":10}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_Dynamic) {
	_inherits(Player, _Dynamic);

	function Player(name, top, left, trump) {
		_classCallCheck(this, Player);

		var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, name));

		console.log('in Player object, name:' + name + 'trump:' + trump);

		_this.trump = trump;

		//this.trump = trump; //local reference to Trump

		_this.dom = document.getElementById('player');

		_this.dom.style.top = top + 'px';
		_this.dom.style.left = left + 'px';

		document.addEventListener('keydown', function (event) {
			return _this.slew(event);
		}, false);

		document.addEventListener('keyup', function (event) {
			return _this.unkick(event);
		}, false);

		_this.show();

		return _this;
	}

	_createClass(Player, [{
		key: 'slew',
		value: function slew(event) {

			console.log('in slew');

			var currentY = parseInt(this.dom.style.top);
			var currentX = parseInt(this.dom.style.left);

			console.log("event.keyCode:" + event.keyCode + ' x:' + currentX + 'y:' + currentY);

			switch (event.keyCode) {

				case 37:
					//left arrow
					currentX -= 4;
					this.setPosition(currentY, currentX);
					break;

				case 39:
					//right arrow
					currentX += 4;
					this.setPosition(currentY, currentX);
					break;

				case 32:
					//space bar, a 'kick'
					currentY -= 4;
					this.setPosition(currentY, currentX);
					this.checkForTrump(currentY, currentX);
					break;
			}
		}
	}, {
		key: 'unkick',
		value: function unkick(event) {
			console.log('in unkick (when spacebar is un-pressed)');

			var currentY = parseInt(this.dom.style.top);
			var currentX = parseInt(this.dom.style.left);

			switch (event.keyCode) {

				case 32:
					//space bar, a 'kick'
					currentY += 4;
					this.setPosition(currentY, currentX); // tell trump to 'kick himself'
					break;

			} // end of switch
		}
	}, {
		key: 'checkForTrump',
		value: function checkForTrump(top, left) {

			var trumpCurrentX = parseInt(this.trump.dom.style.left);
			var trumpCurrentY = parseInt(this.trump.dom.style.top);

			console.log('top:' + top + 'left:' + left + ' trumpTop:' + trumpCurrentY + ' trumpLeft:' + trumpCurrentX);

			if (trumpCurrentY > 590 && trumpCurrentX > left && trumpCurrentX < left + 50) {

				trump.startPingPong();
			}
		}
	}]);

	return Player;
}(_Dynamic3.default);

exports.default = Player;

},{"./Dynamic.js":3}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _HUD2 = require('./HUD.js');

var _HUD3 = _interopRequireDefault(_HUD2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Score = function (_HUD) {
	_inherits(Score, _HUD);

	function Score(name) {
		_classCallCheck(this, Score);

		console.log('in Score');

		var _this = _possibleConstructorReturn(this, (Score.__proto__ || Object.getPrototypeOf(Score)).call(this, name));

		_this.dom = document.getElementById('game-score');

		return _this;
	} // end of constructor

	return Score;
}(_HUD3.default); // end of class


exports.default = Score;

},{"./HUD.js":6}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GameObj2 = require('./GameObj.js');

var _GameObj3 = _interopRequireDefault(_GameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Screen = function (_GameObj) {
	_inherits(Screen, _GameObj);

	function Screen(name, screenArray) {
		_classCallCheck(this, Screen);

		console.log('in Screen, name:' + name + ' screens:' + screenArray);

		var _this = _possibleConstructorReturn(this, (Screen.__proto__ || Object.getPrototypeOf(Screen)).call(this, name));

		_this.setScreens(screenArray);

		return _this;
	} // end of constructor

	_createClass(Screen, [{
		key: 'setScreens',
		value: function setScreens(screenArray) {

			console.log("in setScreens, screens:" + screenArray);
			this.screens = screenArray;
		}
	}, {
		key: 'getStartButton',
		value: function getStartButton() {

			this.startButton = this.dom.getElementsByClassName('game-start')[0];
		}
	}, {
		key: 'getExitButton',
		value: function getExitButton() {

			this.exitButton = this.dom.getElementsByClassName('game-exit')[0];
		}
	}]);

	return Screen;
}(_GameObj3.default); // end of class


exports.default = Screen;

},{"./GameObj.js":4}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StartScreen = function (_Screen) {
	_inherits(StartScreen, _Screen);

	function StartScreen(name, screenArray) {
		_classCallCheck(this, StartScreen);

		console.log('in StartScreen, name:' + name + " screens:" + screenArray);

		var _this = _possibleConstructorReturn(this, (StartScreen.__proto__ || Object.getPrototypeOf(StartScreen)).call(this, name, screenArray));

		_this.dom = document.getElementById('start-screen');

		// set the background image

		_this.setBackgroundImage('img/screens/start-screen.png');

		// Search for a 'start' button in the this.dom HTML markup 
		// NOTE: will fail if no button present!

		_this.getStartButton(); // defined in Screen.js

		// Wire up the start button to load the GameScreen.


		_this.startButton.addEventListener('click', function () {

			/////////////alert(' I am in screen:' + this.name );

			_this.screens['start'].hide(); // hide myself

			_this.screens['game'].show(); // show the game screen

			_this.screens['game'].build(); // rebuild the game with all its objects
		});

		_this.getExitButton();

		return _this;
	} // end of constructor


	return StartScreen;
}(_Screen3.default); // end of class


exports.default = StartScreen;

},{"./Screen.js":10}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GameObj2 = require('./GameObj.js');

var _GameObj3 = _interopRequireDefault(_GameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dynamic = function (_GameObj) {
	_inherits(Dynamic, _GameObj);

	function Dynamic(name) {
		_classCallCheck(this, Dynamic);

		console.log('in Static');

		return _possibleConstructorReturn(this, (Dynamic.__proto__ || Object.getPrototypeOf(Dynamic)).call(this, name));
	}

	return Dynamic;
}(_GameObj3.default);

exports.default = Dynamic;

},{"./GameObj.js":4}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Trump = function (_Dynamic) {
	_inherits(Trump, _Dynamic);

	function Trump(name, top, left) {
		_classCallCheck(this, Trump);

		console.log('in Trump object, name:' + name);

		var _this = _possibleConstructorReturn(this, (Trump.__proto__ || Object.getPrototypeOf(Trump)).call(this, name));

		_this.dom = document.getElementById('trump');

		_this.dom.style.top = top + 'px';
		_this.dom.style.left = left + 'px';

		_this.initpingPong();

		_this.show();
		return _this;
	}

	_createClass(Trump, [{
		key: 'initpingPong',
		value: function initpingPong() {

			console.log("in pingpong");
			// TODO:set up arcade-style movement for trump

		}
	}, {
		key: 'startPingPong',
		value: function startPingPong() {
			var _this2 = this;

			console.log(" I AM KICKED!!! in trump.startPingPong()");

			this.intervalId = setInterval(function () {
				return _this2.doPingPong;
			}, 40);
		}
	}, {
		key: 'doPingPong',
		value: function doPingPong() {

			//

		}
	}, {
		key: 'stopPingPong',
		value: function stopPingPong() {}
	}]);

	return Trump;
}(_Dynamic3.default);

exports.default = Trump;

},{"./Dynamic.js":3}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WonScreen = function (_Screen) {
	_inherits(WonScreen, _Screen);

	function WonScreen(name, screenArray) {
		_classCallCheck(this, WonScreen);

		console.log('in WonScreen');

		var _this = _possibleConstructorReturn(this, (WonScreen.__proto__ || Object.getPrototypeOf(WonScreen)).call(this, name, screenArray));

		_this.dom = document.getElementById('won-screen');

		_this.setBackgroundImage('img/screens/won-screen.png');

		_this.getStartButton();

		_this.getExitButton();

		return _this;
	} // end of constructor


	return WonScreen;
}(_Screen3.default); // end of class


exports.default = WonScreen;

},{"./Screen.js":10}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Static2 = require('./Static.js');

var _Static3 = _interopRequireDefault(_Static2);

var _Cage = require('./Cage.js');

var _Cage2 = _interopRequireDefault(_Cage);

var _Animal = require('./Animal.js');

var _Animal2 = _interopRequireDefault(_Animal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Zoo = function (_Static) {
	_inherits(Zoo, _Static);

	function Zoo(name) {
		_classCallCheck(this, Zoo);

		console.log('in the zoo');

		var _this = _possibleConstructorReturn(this, (Zoo.__proto__ || Object.getPrototypeOf(Zoo)).call(this, name));

		_this.dom = document.createElement('div');

		return _this;
	}

	/**
 * create 4 cages
 *
 */

	_createClass(Zoo, [{
		key: 'build',
		value: function build() {

			console.log('in Zoo build...');

			this.cages = [];

			this.cages.push(new _Cage2.default('Cage #1', 'cage1')); // or, this.cages[0] 
			this.cages.push(new _Cage2.default('Cage #2', 'cage2'));
			this.cages.push(new _Cage2.default('Cage #3', 'cage3'));
			this.cages.push(new _Cage2.default('Cage #4', 'cage4'));

			// Make cages visible by attaching them inside the Zoo's HTML <div>.


			this.animals = [];

			this.animals.push(new _Animal2.default('Angry Lion', 'lion'));
			this.animals.push(new _Animal2.default('Raging Tiger', 'tiger'));
			this.animals.push(new _Animal2.default('Mauling Bear', 'bear'));
			this.animals.push(new _Animal2.default('Rampaging Gorilla', 'gorilla'));
		}
	}]);

	return Zoo;
}(_Static3.default);

exports.default = Zoo;

},{"./Animal.js":1,"./Cage.js":2,"./Static.js":12}],16:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // Master object.


// Screen objects.
//never directly visible, used to construct visible screens.


// HUD objects.
//never directly visible, used to construct visible screens.


var _GameObj = require('./GameObj.js');

var _GameObj2 = _interopRequireDefault(_GameObj);

var _Screen = require('./Screen.js');

var _Screen2 = _interopRequireDefault(_Screen);

var _StartScreen = require('./StartScreen.js');

var _StartScreen2 = _interopRequireDefault(_StartScreen);

var _GameScreen = require('./GameScreen.js');

var _GameScreen2 = _interopRequireDefault(_GameScreen);

var _WonScreen = require('./WonScreen.js');

var _WonScreen2 = _interopRequireDefault(_WonScreen);

var _LostScreen = require('./LostScreen.js');

var _LostScreen2 = _interopRequireDefault(_LostScreen);

var _HUD = require('./HUD.js');

var _HUD2 = _interopRequireDefault(_HUD);

var _Score = require('./Score.js');

var _Score2 = _interopRequireDefault(_Score);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Static Objects.

// Dynamic Objects.

console.log('loading game.');

// Global storage of all screens created.

// NOTE: convert the 'window.' to 'let' since we don't 
// NOTE: want to run globally anymore.

window.gameScreens = {};

var startScreen = new _StartScreen2.default('start', window.gameScreens);
window.gameScreens['start'] = startScreen;

var gameScreen = new _GameScreen2.default('game', window.gameScreens);
window.gameScreens['game'] = gameScreen;

var wonScreen = new _WonScreen2.default('won', window.gameScreens);
window.gameScreens['won'] = wonScreen;

var lostScreen = new _LostScreen2.default('lost', window.gameScreens);
window.gameScreens['lost'] = lostScreen;

console.log(" gameScreens:" + _typeof(window.gameScreens));

window.score = new _Score2.default('game score object');

// START THE GAME...

// Attach event listeners to the buttons on the start screen.
// Specify what each button does in code.

// Make the start screen visible
startScreen.show();

},{"./GameObj.js":4,"./GameScreen.js":5,"./HUD.js":6,"./LostScreen.js":7,"./Score.js":9,"./Screen.js":10,"./StartScreen.js":11,"./WonScreen.js":14}]},{},[16])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0FuaW1hbC5qcyIsIm1vZHVsZXMvanMvQ2FnZS5qcyIsIm1vZHVsZXMvanMvRHluYW1pYy5qcyIsIm1vZHVsZXMvanMvR2FtZU9iai5qcyIsIm1vZHVsZXMvanMvR2FtZVNjcmVlbi5qcyIsIm1vZHVsZXMvanMvSFVELmpzIiwibW9kdWxlcy9qcy9Mb3N0U2NyZWVuLmpzIiwibW9kdWxlcy9qcy9QbGF5ZXIuanMiLCJtb2R1bGVzL2pzL1Njb3JlLmpzIiwibW9kdWxlcy9qcy9TY3JlZW4uanMiLCJtb2R1bGVzL2pzL1N0YXJ0U2NyZWVuLmpzIiwibW9kdWxlcy9qcy9TdGF0aWMuanMiLCJtb2R1bGVzL2pzL1RydW1wLmpzIiwibW9kdWxlcy9qcy9Xb25TY3JlZW4uanMiLCJtb2R1bGVzL2pzL1pvby5qcyIsIm1vZHVsZXMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0lBRXFCLE07OztBQUVwQixpQkFBYyxJQUFkLEVBQW9CLFFBQXBCLEVBQStCO0FBQUE7O0FBQy9CLFVBQVEsR0FBUixDQUFZLDRCQUE0QixJQUE1QixHQUFtQyxZQUFuQyxHQUFrRCxRQUE5RDs7QUFEK0IsOEdBR3hCLElBSHdCOztBQUsvQixRQUFLLEdBQUwsR0FBVyxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBWDs7QUFFQSxRQUFLLElBQUw7QUFQK0I7QUFROUI7Ozs7O2tCQVZtQixNOzs7Ozs7Ozs7QUNGckI7Ozs7Ozs7Ozs7OztJQUVxQixJOzs7QUFFcEIsZUFBYyxJQUFkLEVBQW9CLFFBQXBCLEVBQStCO0FBQUE7O0FBRTlCLFVBQVEsR0FBUixDQUFZLHlCQUF5QixJQUF6QixHQUFnQyxZQUFoQyxHQUErQyxRQUEzRDs7QUFGOEIsMEdBSXZCLElBSnVCOztBQU05QixRQUFLLEdBQUwsR0FBVyxTQUFTLGNBQVQsQ0FBd0Is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QSxPQUFPLEtBQVAsR0FBZSxvQkFBVSxtQkFBVixDQUFmOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLElBQVoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IER5bmFtaWMgZnJvbSAnLi9EeW5hbWljLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5pbWFsIGV4dGVuZHMgRHluYW1pYyB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUsIHNjcmVlbklkICkge1xuXHRjb25zb2xlLmxvZygnaW4gQW5pbWFsIG9iamVjdCwgbmFtZTonICsgbmFtZSArICcgc2NyZWVuSWQ6JyArIHNjcmVlbklkKTtcblxuXHRzdXBlciggbmFtZSApO1xuXG5cdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2NyZWVuSWQpO1xuXG5cdHRoaXMuc2hvdygpO1xuXHR9XG59IiwiaW1wb3J0IFN0YXRpYyBmcm9tICcuL1N0YXRpYy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhZ2UgZXh0ZW5kcyBTdGF0aWN7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUsIHNjcmVlbklkICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIGEgWm9vIENhZ2UsIG5hbWU6JyArIG5hbWUgKyAnIHNjcmVlbklkOicgKyBzY3JlZW5JZCApO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2NyZWVuSWQpO1xuXG5cdFx0dGhpcy5zaG93KCk7XG5cblxuXG5cdH1cbn0iLCJpbXBvcnQgR2FtZU9iaiBmcm9tICcuL0dhbWVPYmouanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWMgZXh0ZW5kcyBHYW1lT2JqIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBEeW5hbWljJyk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXG5cdH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT2JqIHtcblxuXHQvL2luaGVyaXRzIGZyb20gZ2VuZXJpYyBKYXZhc2NyaXB0IE9iamVjdDtcblxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gR2FtZU9iaicpO1xuXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblxuXHRcdHRoaXMuaWQgPSB0aGlzLnNldElkKCk7XG5cblx0fSAvLyBlbmQgb2YgY29uc3RydWN0b3JcblxuXHQvKiogXG5cdCAqIGdldCB0aGUgdW5pcXVlIElEIHZhbHVlIGZvciBhbiBvYmplY3QuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSB1bmlxdWUgaWQsIGluIHV1aWQgZm9ybWF0LlxuXHQgKi9cblx0Z2V0SWQgKCkge1xuXHRcdHJldHVybiB0aGlzLmlkO1xuXHR9XG5cblx0LyoqIFxuXHQgKiBnZXQgdGhlIG5hbWUgYXNzaWduZWQgdG8gdGhpcyBvYmplY3QuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBuYW1lLlxuXHQgKi9cblx0Z2V0TmFtZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcblx0fVxuXG5cdC8qKiBcblx0ICogc2V0IHRoZSBvYmplY3QncyBuYW1lIHRvIGEgbmV3IHZhbHVlLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbmV3TmFtZSB0aGUgbmV3IG5hbWUgdG8gdXNlLlxuXHQgKi9cblx0c2V0TmFtZSAoIG5ld05hbWUgKSB7XG5cdFx0dGhpcy5uYW1lID0gbmV3TmFtZTtcblx0fVxuXG5cdC8qKlxuXHQqIG1ha2UgdGhlIG9uc2NyZWVuIGVsZW1lbnQgdmlzaWJsZSB2aWEgQ1NTLlxuXHQqL1xuXHRzaG93ICgpIHtcblxuXHRcdHRoaXMuZG9tLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG5cdH1cblxuXHQvKlxuXHQqXG5cdCovXG5cblx0aGlkZSAoKSB7XG5cblx0XHR0aGlzLmRvbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG5cdH1cblxuXG5cblx0LyoqIFxuXHQgKiBMb2FkIGFuIGltYWdlIGZyb20gdGhlIGRyaXZlLCBhbmQgc2V0IHRoZSBcblx0ICogY3NzIGJhY2tncm91bmQgaW1hZ2UgcHJvcGVydHkgdG8gdGhpcyBpbWFnZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaW1nUGF0aCB0aGUgcGF0aCB0byB0aGUgaW1hZ2Ugb24gdGhlIHdlYnNpdGUuXG5cdCAqL1xuXHRzZXRCYWNrZ3JvdW5kSW1hZ2UoIGltZ1BhdGggKSB7XG5cblx0XHR0aGlzLmRvbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnXCIgKyBpbWdQYXRoICsgXCInKVwiO1xuXG5cdH1cblxuXHRzZXRGb3JlZ3JvdW5kSW1hZ2UoIGltZ1BhdGggKSB7XG5cblx0XHRsZXQgaW1nID0gbmV3IEltYWdlKCk7XG5cblx0XHRpbWcuc3JjID0gaW1nUGF0aDtcblxuXHRcdHRoaXMuZG9tLmFwcGVuZENoaWxkKCBpbWcgKTtcblxuXHR9XG5cblx0LyoqXG5cdCogc2V0IHRoZSBzaXplIG9mIGFuIG9iamVjdCwgaW4gcGl4ZWxzLlxuXHQqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCB0aGUgd2lkdGgsIGluIHBpeGVsc1xuXHQqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHQgdGhlIGhlaWdodCwgaW4gcGl4ZWxzXG5cdCovXG5cdHNldFNpemUoIHdpZHRoLCBoZWlnaHQgKSB7XG5cblx0XHR0aGlzLmRvbS5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4Jztcblx0XHR0aGlzLmRvbS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuXG5cdH1cblxuXHQvKipcblx0KiBzZXQgcG9zaXRpb24gb2YgYW4gb2JqZWN0LCByZWxhdGl2ZSB0byB0aGVcblx0KiBlbmNsb3NpbmcgU2NyZWVuIG9iamVjdC5cblx0KiBAcGFyYW0ge051bWJlcn0gdG9wIHRoZSB0b3AgY29ycmRpbmF0ZSBvZiB0aGUgb2JqZWN0LCBpbiBwaXhlbHMuXG5cdCogQHBhcmFtIHtOdW1iZXJ9IGxlZnQgdGhlIGxlZnQgY29ycmRpbmF0ZSBvZiB0aGUgb2JqZWN0LCBpbiBwaXhlbHMuXG5cdCovXG5cdHNldFBvc2l0aW9uKCB0b3AsIGxlZnQgKSB7XG5cblx0XHR0aGlzLmRvbS5zdHlsZS50b3AgPSB0b3AgKyAncHgnO1xuXHRcdHRoaXMuZG9tLnN0eWxlLmxlZnQgPSBsZWZ0ICsgJ3B4JztcblxuXHR9XG5cbiAgICAvKiogXG4gICAgICogR2VuZXJhdGUgYSB1bmlxdWUgSUQgZm9yIGV2ZXJ5IGdhbWUgb2JqZWN0LlxuICAgICAqIEBsaW5rIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2NyZWF0ZS1ndWlkLXV1aWQtaW4tamF2YXNjcmlwdFxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgdW5pcXVlIElEIGluIHV1aWQgZm9ybWF0LlxuICAgICAqL1xuICAgIHNldElkICgpIHtcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvL3VzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcbiAgICAgICAgfVxuICAgICAgICB2YXIgdXVpZCA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpKjE2KSUxNiB8IDA7XG4gICAgICAgICAgICBkID0gTWF0aC5mbG9vcihkLzE2KTtcbiAgICAgICAgICAgIHJldHVybiAoYz09J3gnID8gciA6IChyJjB4M3wweDgpKS50b1N0cmluZygxNik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdXVpZDtcblxuICAgIH0gLy8gZW5kIG9mIHNldElkXG5cbn0gLy8gZW5kIG9mIGNsYXNzIiwiaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5pbXBvcnQgWm9vIGZyb20gJy4vWm9vLmpzJztcbmltcG9ydCBUcnVtcCBmcm9tICcuL1RydW1wLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBHYW1lU2NyZWVuJylcblxuXHRcdHN1cGVyKCBuYW1lICk7XG5cblx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnZ2FtZS1zY3JlZW4nICk7XG5cblx0XHR0aGlzLnNldEJhY2tncm91bmRJbWFnZSggJ2ltZy9zY3JlZW5zL2dhbWUtc2NyZWVuLnBuZycgKTtcblxuXHR9IC8vIGVuZCBvZiBjb25zdHJ1Y3RvclxuXG5cdC8qKlxuXHQqIGNyZWF0ZSBnYW1lIG9iamVjdHNcblx0KiAtIGFkZCA0IENhZ2VzXG5cdCogLSBhZGQgNCBBbmltYWxzXG5cdCogLSBhZGQgYSBUcnVtcFxuXHQqIC0gYWRkIGEgcGxheWVyXG5cdCovXG5cblx0YnVpbGQgKCkge1xuXG5cdFx0Y29uc29sZS5sb2coICdidWlsZGluZyB0aGUgZ2FtZS4uLicpO1xuXG5cdFx0Ly8gYWRkIGEgWm9vICg0IEFuaW1hbHMgYW5kIDQgQ2FnZXMgZ28gaW5zaWRlIGl0KVxuXG5cdFx0dGhpcy56b28gPSBuZXcgWm9vKCAnRnVua3kgWm9vJyApO1xuXG5cdFx0dGhpcy56b28uYnVpbGQoKTsgLy8gbWFrZSBab28gYW5kIENhZ2VzIGFuZCBBbmltYWxzXG5cblx0XHR0aGlzLmRvbS5hcHBlbmRDaGlsZCggdGhpcy56b28uZG9tICk7XG5cblx0XHQvLyBhZGQgYSBUcnVtcCBhdFxuXHRcdC8vID8/PyBXSFQgV0FTIFNUWUxFIE5PVCBERUZJTkVEIEhFUkU/XG5cblx0XHR0aGlzLnRydW1wID0gbmV3IFRydW1wKCAnIERvbmFsZCBQcmVzaWRlbnRpYSBUcnVtcCcsIDQ0MCwgMjQ1ICk7XG5cblx0XHQvLyBhZGQgYSBwbGF5ZXIgYXQgeSA9IDUwMCwgeCA9IDI0NSBwaXhlbHNcblxuXG5cdFx0dGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKCAnbXlzZWxmJywgNTAwLCAyNDUsIHRoaXMudHJ1bXAgKTtcblxuXHRcdC8vIGFkZCBhIGxpb24gXG5cblxuXG5cdFx0Ly8gYWRkIDQgQ2FnZXNcblxuXHRcdC8vIGFkZCA0IEFuaW1hbHNcblxuXG5cblx0fVxuXG59IC8vIGVuZCBvZiBjbGFzcyIsImltcG9ydCBHYW1lT2JqIGZyb20gJy4vR2FtZU9iai5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhVRCBleHRlbmRzIEdhbWVPYmoge1xuXHRcblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIEhVRCcpO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHR9IC8vIGVuZCBvZiBjb25zdHJ1Y3RvclxuXG59IC8vIGVuZCBvZiBjbGFzcyIsImltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb3N0U2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSwgc2NyZWVuQXJyYXkgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gTG9zdFNjcmVlbicpO1xuXG5cdFx0c3VwZXIoIG5hbWUsIHNjcmVlbkFycmF5ICk7XG5cblx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbG9zdC1zY3JlZW4nICk7XG5cblx0XHQvLyBzZXQgdGhlIGJhY2tncm91bmQgaW1hZ2UuXG5cblx0XHR0aGlzLnNldEJhY2tncm91bmRJbWFnZSggJ2ltZy9zY3JlZW5zL2xvc3Qtc2NyZWVuLnBuZycgKTtcblxuXHRcdHRoaXMuZ2V0U3RhcnRCdXR0b24oKTtcblxuXHRcdHRoaXMuZ2V0RXhpdEJ1dHRvbigpO1xuXG5cdH0gLy8gZW5kIG9mIGNvbnN0cnVjdG9yXG4gXG5cbn0gLy8gZW5kIG9mIGNsYXNzIiwiaW1wb3J0IER5bmFtaWMgZnJvbSAnLi9EeW5hbWljLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgRHluYW1pYyB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUsIHRvcCwgbGVmdCwgdHJ1bXAgKSB7XG5cblx0c3VwZXIoIG5hbWUgKTtcblxuXHRjb25zb2xlLmxvZygnaW4gUGxheWVyIG9iamVjdCwgbmFtZTonICsgbmFtZSArICd0cnVtcDonICsgdHJ1bXAgKTtcblxuXHR0aGlzLnRydW1wID0gdHJ1bXA7XG5cblx0Ly90aGlzLnRydW1wID0gdHJ1bXA7IC8vbG9jYWwgcmVmZXJlbmNlIHRvIFRydW1wXG5cblx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyJyk7XG5cblx0dGhpcy5kb20uc3R5bGUudG9wID0gdG9wICsgJ3B4Jztcblx0dGhpcy5kb20uc3R5bGUubGVmdCA9IGxlZnQgKyAncHgnO1xuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBcblx0XHRldmVudD0+IHRoaXMuc2xldyhldmVudCksIGZhbHNlKTtcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIFxuXHRcdGV2ZW50PT4gdGhpcy51bmtpY2soZXZlbnQpLCBmYWxzZSk7XG5cdFxuXG5cblx0dGhpcy5zaG93KCk7XG5cdFxuXHR9XG5cblx0c2xldyhldmVudCkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIHNsZXcnKTtcblxuXHRcdGxldCBjdXJyZW50WSA9IHBhcnNlSW50KHRoaXMuZG9tLnN0eWxlLnRvcCk7XG5cdFx0bGV0IGN1cnJlbnRYID0gcGFyc2VJbnQodGhpcy5kb20uc3R5bGUubGVmdCk7XG5cblx0XHRcdFx0Y29uc29sZS5sb2coXCJldmVudC5rZXlDb2RlOlwiICsgZXZlbnQua2V5Q29kZSArICcgeDonICsgY3VycmVudFggKyAneTonICsgY3VycmVudFkpXG5cdFx0XG5cdFx0c3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcblxuXHRcdFx0Y2FzZSAzNzogLy9sZWZ0IGFycm93XG5cdFx0XHRcdGN1cnJlbnRYIC09IDQ7XG5cdFx0XHRcdHRoaXMuc2V0UG9zaXRpb24oY3VycmVudFksIGN1cnJlbnRYKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzk6IC8vcmlnaHQgYXJyb3dcblx0XHRcdFx0Y3VycmVudFggKz0gNDtcblx0XHRcdFx0dGhpcy5zZXRQb3NpdGlvbihjdXJyZW50WSwgY3VycmVudFgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzMjogLy9zcGFjZSBiYXIsIGEgJ2tpY2snXG5cdFx0XHRcdGN1cnJlbnRZIC09IDQ7XG5cdFx0XHRcdHRoaXMuc2V0UG9zaXRpb24oY3VycmVudFksIGN1cnJlbnRYKTtcblx0XHRcdFx0dGhpcy5jaGVja0ZvclRydW1wKGN1cnJlbnRZLCBjdXJyZW50WCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXG5cdH1cblxuXHR1bmtpY2sgKGV2ZW50KSB7XG5cdFx0XHRjb25zb2xlLmxvZygnaW4gdW5raWNrICh3aGVuIHNwYWNlYmFyIGlzIHVuLXByZXNzZWQpJyk7XG5cblx0XHRsZXQgY3VycmVudFkgPSBwYXJzZUludCh0aGlzLmRvbS5zdHlsZS50b3ApO1xuXHRcdGxldCBjdXJyZW50WCA9IHBhcnNlSW50KHRoaXMuZG9tLnN0eWxlLmxlZnQpO1xuXG5cdFx0c3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcblxuXHRcdFx0Y2FzZSAzMjogLy9zcGFjZSBiYXIsIGEgJ2tpY2snXG5cdFx0XHRcdGN1cnJlbnRZICs9IDQ7XG5cdFx0XHRcdHRoaXMuc2V0UG9zaXRpb24oY3VycmVudFksIGN1cnJlbnRYKTsgLy8gdGVsbCB0cnVtcCB0byAna2ljayBoaW1zZWxmJ1xuXHRcdFx0XHRicmVhaztcblxuXHRcdH0gLy8gZW5kIG9mIHN3aXRjaFxuXHR9XG5cblx0Y2hlY2tGb3JUcnVtcCh0b3AsIGxlZnQpIHtcblxuXHRcdGxldCB0cnVtcEN1cnJlbnRYID0gcGFyc2VJbnQodGhpcy50cnVtcC5kb20uc3R5bGUubGVmdCk7XG5cdFx0bGV0IHRydW1wQ3VycmVudFkgPSBwYXJzZUludCh0aGlzLnRydW1wLmRvbS5zdHlsZS50b3ApO1xuXG5cdFx0Y29uc29sZS5sb2coJ3RvcDonICsgdG9wICsgJ2xlZnQ6JyArIGxlZnQgKyAnIHRydW1wVG9wOicgKyB0cnVtcEN1cnJlbnRZICsgJyB0cnVtcExlZnQ6JyArIHRydW1wQ3VycmVudFgpXG5cblx0XHRpZiggdHJ1bXBDdXJyZW50WSA+IDU5MCAmJiB0cnVtcEN1cnJlbnRYID4gbGVmdCAmJiB0cnVtcEN1cnJlbnRYIDwgbGVmdCArIDUwKSB7XG5cblx0XHRcdHRydW1wLnN0YXJ0UGluZ1BvbmcoKTtcblxuXHRcdH1cblxuXHR9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsImltcG9ydCBIVUQgZnJvbSAnLi9IVUQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSBleHRlbmRzIEhVRCB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gU2NvcmUnKTtcblxuXHRcdHN1cGVyKCBuYW1lICk7XG5cblx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnZ2FtZS1zY29yZScgKTtcblxuXHR9IC8vIGVuZCBvZiBjb25zdHJ1Y3RvclxuXG59IC8vIGVuZCBvZiBjbGFzcyIsImltcG9ydCBHYW1lT2JqIGZyb20gJy4vR2FtZU9iai5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlbiBleHRlbmRzIEdhbWVPYmoge1xuXHRcblx0Y29uc3RydWN0b3IgKCBuYW1lLCBzY3JlZW5BcnJheSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBTY3JlZW4sIG5hbWU6JyArIG5hbWUgKyAnIHNjcmVlbnM6JyArIHNjcmVlbkFycmF5KTtcblxuXHRcdHN1cGVyKCBuYW1lICk7XG5cblx0XHR0aGlzLnNldFNjcmVlbnMoIHNjcmVlbkFycmF5ICk7XG5cblx0fSAvLyBlbmQgb2YgY29uc3RydWN0b3JcblxuXHRzZXRTY3JlZW5zICggc2NyZWVuQXJyYXkgKSB7XG5cblx0XHRjb25zb2xlLmxvZyhcImluIHNldFNjcmVlbnMsIHNjcmVlbnM6XCIgKyBzY3JlZW5BcnJheSApXG5cdFx0dGhpcy5zY3JlZW5zID0gc2NyZWVuQXJyYXk7XG5cblx0fVxuXG5cdGdldFN0YXJ0QnV0dG9uICgpIHtcblxuXHRcdHRoaXMuc3RhcnRCdXR0b24gPSB0aGlzLmRvbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCAnZ2FtZS1zdGFydCcgKVsgMCBdO1xuXG5cdH1cblxuXHRnZXRFeGl0QnV0dG9uKCkge1xuXG5cdFx0dGhpcy5leGl0QnV0dG9uID0gdGhpcy5kb20uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggJ2dhbWUtZXhpdCcgKVsgMCBdO1xuXG5cdH1cblxufSAvLyBlbmQgb2YgY2xhc3NcblxuXG5cbiIsImltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydFNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUsIHNjcmVlbkFycmF5ICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIFN0YXJ0U2NyZWVuLCBuYW1lOicgKyBuYW1lICsgXCIgc2NyZWVuczpcIiArIHNjcmVlbkFycmF5KTtcblxuXHRcdHN1cGVyKCBuYW1lLCBzY3JlZW5BcnJheSApO1xuXG5cdFx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3N0YXJ0LXNjcmVlbicgKTtcblxuXHRcdC8vIHNldCB0aGUgYmFja2dyb3VuZCBpbWFnZVxuXG5cdFx0dGhpcy5zZXRCYWNrZ3JvdW5kSW1hZ2UoICdpbWcvc2NyZWVucy9zdGFydC1zY3JlZW4ucG5nJyApO1xuXG5cdFx0Ly8gU2VhcmNoIGZvciBhICdzdGFydCcgYnV0dG9uIGluIHRoZSB0aGlzLmRvbSBIVE1MIG1hcmt1cCBcblx0XHQvLyBOT1RFOiB3aWxsIGZhaWwgaWYgbm8gYnV0dG9uIHByZXNlbnQhXG5cblx0XHR0aGlzLmdldFN0YXJ0QnV0dG9uKCk7IC8vIGRlZmluZWQgaW4gU2NyZWVuLmpzXG5cblx0XHQvLyBXaXJlIHVwIHRoZSBzdGFydCBidXR0b24gdG8gbG9hZCB0aGUgR2FtZVNjcmVlbi5cblxuXG5cdFx0dGhpcy5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XG5cblx0XHRcdC8vLy8vLy8vLy8vLy9hbGVydCgnIEkgYW0gaW4gc2NyZWVuOicgKyB0aGlzLm5hbWUgKTtcblxuXHRcdFx0dGhpcy5zY3JlZW5zWyAnc3RhcnQnIF0uaGlkZSgpOyAvLyBoaWRlIG15c2VsZlxuXG5cdFx0XHR0aGlzLnNjcmVlbnNbICdnYW1lJyBdLnNob3coKTsgLy8gc2hvdyB0aGUgZ2FtZSBzY3JlZW5cblxuXHRcdFx0dGhpcy5zY3JlZW5zWyAnZ2FtZScgXS5idWlsZCgpOyAvLyByZWJ1aWxkIHRoZSBnYW1lIHdpdGggYWxsIGl0cyBvYmplY3RzXG5cblx0XHR9ICk7XG5cblx0XHR0aGlzLmdldEV4aXRCdXR0b24oKTtcblxuXHR9IC8vIGVuZCBvZiBjb25zdHJ1Y3RvclxuXG5cblxufSAvLyBlbmQgb2YgY2xhc3MiLCJpbXBvcnQgR2FtZU9iaiBmcm9tICcuL0dhbWVPYmouanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWMgZXh0ZW5kcyBHYW1lT2JqIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBTdGF0aWMnKTtcblxuXHRcdHN1cGVyKCBuYW1lICk7XG5cblx0fVxufSIsImltcG9ydCBEeW5hbWljIGZyb20gJy4vRHluYW1pYy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRydW1wIGV4dGVuZHMgRHluYW1pYyB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUsIHRvcCwgbGVmdCApIHtcblx0Y29uc29sZS5sb2coJ2luIFRydW1wIG9iamVjdCwgbmFtZTonICsgbmFtZSApO1xuXG5cdHN1cGVyKCBuYW1lICk7XG5cblx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJ1bXAnKTtcblxuXHR0aGlzLmRvbS5zdHlsZS50b3AgPSB0b3AgKyAncHgnO1xuXHR0aGlzLmRvbS5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XG5cblx0dGhpcy5pbml0cGluZ1BvbmcoKTtcblxuXHR0aGlzLnNob3coKTtcblx0fVxuXG5cdGluaXRwaW5nUG9uZyAoKSB7XG5cblx0XHRjb25zb2xlLmxvZyhcImluIHBpbmdwb25nXCIpO1xuXHRcdC8vIFRPRE86c2V0IHVwIGFyY2FkZS1zdHlsZSBtb3ZlbWVudCBmb3IgdHJ1bXBcblxuXG5cdH1cblxuXHRzdGFydFBpbmdQb25nICgpIHtcblxuXHRcdGNvbnNvbGUubG9nKFwiIEkgQU0gS0lDS0VEISEhIGluIHRydW1wLnN0YXJ0UGluZ1BvbmcoKVwiKTtcblxuXHRcdHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCAoKSA9PiB0aGlzLmRvUGluZ1BvbmcsIDQwICk7XG5cblx0fVxuXG5cdGRvUGluZ1BvbmcgKCkge1xuXG5cdFx0Ly9cblxuXHR9XG5cblx0c3RvcFBpbmdQb25nICgpIHtcblxuXHR9XG5cbn0iLCJpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29uU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSwgc2NyZWVuQXJyYXkgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gV29uU2NyZWVuJyk7XG5cblx0XHRzdXBlciggbmFtZSwgc2NyZWVuQXJyYXkgKTtcblxuXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd3b24tc2NyZWVuJyApO1xuXG5cdFx0dGhpcy5zZXRCYWNrZ3JvdW5kSW1hZ2UoICdpbWcvc2NyZWVucy93b24tc2NyZWVuLnBuZycgKTtcblxuXHRcdHRoaXMuZ2V0U3RhcnRCdXR0b24oKTtcblxuXHRcdHRoaXMuZ2V0RXhpdEJ1dHRvbigpO1xuXG5cdH0gLy8gZW5kIG9mIGNvbnN0cnVjdG9yXG5cblxufSAvLyBlbmQgb2YgY2xhc3MiLCJpbXBvcnQgU3RhdGljIGZyb20gJy4vU3RhdGljLmpzJztcbmltcG9ydCBDYWdlIGZyb20gJy4vQ2FnZS5qcyc7XG5pbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vIGV4dGVuZHMgU3RhdGlje1xuXHRcblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIHRoZSB6b28nKTtcblxuXHRcdHN1cGVyKCBuYW1lICk7XG5cblx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG5cblx0fVxuXG5cdC8qKlxuXHQqIGNyZWF0ZSA0IGNhZ2VzXG5cdCpcblx0Ki9cblxuXHRidWlsZCgpIHtcblxuXHRcdGNvbnNvbGUubG9nKCAnaW4gWm9vIGJ1aWxkLi4uJyApO1xuXG5cdFx0dGhpcy5jYWdlcyA9IFtdO1xuXG5cdFx0dGhpcy5jYWdlcy5wdXNoKCBuZXcgQ2FnZSggJ0NhZ2UgIzEnLCAnY2FnZTEnKSApOyAvLyBvciwgdGhpcy5jYWdlc1swXSBcblx0XHR0aGlzLmNhZ2VzLnB1c2goIG5ldyBDYWdlKCAnQ2FnZSAjMicsICdjYWdlMicpICk7XG5cdFx0dGhpcy5jYWdlcy5wdXNoKCBuZXcgQ2FnZSggJ0NhZ2UgIzMnLCAnY2FnZTMnKSApO1xuXHRcdHRoaXMuY2FnZXMucHVzaCggbmV3IENhZ2UoICdDYWdlICM0JywgJ2NhZ2U0JykgKTtcblxuXHRcdC8vIE1ha2UgY2FnZXMgdmlzaWJsZSBieSBhdHRhY2hpbmcgdGhlbSBpbnNpZGUgdGhlIFpvbydzIEhUTUwgPGRpdj4uXG5cblxuXHRcdHRoaXMuYW5pbWFscyA9IFtdO1xuXG5cdFx0dGhpcy5hbmltYWxzLnB1c2goIG5ldyBBbmltYWwoICdBbmdyeSBMaW9uJywgJ2xpb24nICkgKTtcblx0XHR0aGlzLmFuaW1hbHMucHVzaCggbmV3IEFuaW1hbCggJ1JhZ2luZyBUaWdlcicsICd0aWdlcicgKSApO1xuXHRcdHRoaXMuYW5pbWFscy5wdXNoKCBuZXcgQW5pbWFsKCAnTWF1bGluZyBCZWFyJywgJ2JlYXInICkgKTtcblx0XHR0aGlzLmFuaW1hbHMucHVzaCggbmV3IEFuaW1hbCggJ1JhbXBhZ2luZyBHb3JpbGxhJywgJ2dvcmlsbGEnICkgKTtcblxuXG5cdH1cbn0iLCIvLyBNYXN0ZXIgb2JqZWN0LlxuaW1wb3J0IEdhbWVPYmogZnJvbSAnLi9HYW1lT2JqLmpzJztcblxuLy8gU2NyZWVuIG9iamVjdHMuXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJzsgLy9uZXZlciBkaXJlY3RseSB2aXNpYmxlLCB1c2VkIHRvIGNvbnN0cnVjdCB2aXNpYmxlIHNjcmVlbnMuXG5pbXBvcnQgU3RhcnRTY3JlZW4gZnJvbSAnLi9TdGFydFNjcmVlbi5qcyc7XG5pbXBvcnQgR2FtZVNjcmVlbiBmcm9tICcuL0dhbWVTY3JlZW4uanMnO1xuaW1wb3J0IFdvblNjcmVlbiBmcm9tICcuL1dvblNjcmVlbi5qcyc7XG5pbXBvcnQgTG9zdFNjcmVlbiBmcm9tICcuL0xvc3RTY3JlZW4uanMnO1xuXG4vLyBIVUQgb2JqZWN0cy5cbmltcG9ydCBIVUQgZnJvbSAnLi9IVUQuanMnOyAvL25ldmVyIGRpcmVjdGx5IHZpc2libGUsIHVzZWQgdG8gY29uc3RydWN0IHZpc2libGUgc2NyZWVucy5cbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlLmpzJztcblxuLy8gU3RhdGljIE9iamVjdHMuXG5cbi8vIER5bmFtaWMgT2JqZWN0cy5cblxuY29uc29sZS5sb2coJ2xvYWRpbmcgZ2FtZS4nKTtcblxuLy8gR2xvYmFsIHN0b3JhZ2Ugb2YgYWxsIHNjcmVlbnMgY3JlYXRlZC5cblxuLy8gTk9URTogY29udmVydCB0aGUgJ3dpbmRvdy4nIHRvICdsZXQnIHNpbmNlIHdlIGRvbid0IFxuLy8gTk9URTogd2FudCB0byBydW4gZ2xvYmFsbHkgYW55bW9yZS5cbiBcbndpbmRvdy5nYW1lU2NyZWVucyA9IHt9O1xuXG5sZXQgc3RhcnRTY3JlZW4gPSBuZXcgU3RhcnRTY3JlZW4oJ3N0YXJ0Jywgd2luZG93LmdhbWVTY3JlZW5zICk7XG53aW5kb3cuZ2FtZVNjcmVlbnNbICdzdGFydCddID0gc3RhcnRTY3JlZW47XG5cbmxldCBnYW1lU2NyZWVuID0gbmV3IEdhbWVTY3JlZW4oJ2dhbWUnLCB3aW5kb3cuZ2FtZVNjcmVlbnMgKTtcbndpbmRvdy5nYW1lU2NyZWVuc1sgJ2dhbWUnIF0gPSBnYW1lU2NyZWVuOyBcblxubGV0IHdvblNjcmVlbiA9IG5ldyBXb25TY3JlZW4oJ3dvbicsIHdpbmRvdy5nYW1lU2NyZWVucyApO1xud2luZG93LmdhbWVTY3JlZW5zWyAnd29uJyBdID0gd29uU2NyZWVuO1xuXG5sZXQgbG9zdFNjcmVlbiA9IG5ldyBMb3N0U2NyZWVuKCdsb3N0Jywgd2luZG93LmdhbWVTY3JlZW5zICk7XG53aW5kb3cuZ2FtZVNjcmVlbnNbICdsb3N0JyBdID0gbG9zdFNjcmVlbjtcblxuY29uc29sZS5sb2coXCIgZ2FtZVNjcmVlbnM6XCIgKyB0eXBlb2Ygd2luZG93LmdhbWVTY3JlZW5zKVxuXG53aW5kb3cuc2NvcmUgPSBuZXcgU2NvcmUoJ2dhbWUgc2NvcmUgb2JqZWN0Jyk7XG5cbi8vIFNUQVJUIFRIRSBHQU1FLi4uXG5cbi8vIEF0dGFjaCBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIGJ1dHRvbnMgb24gdGhlIHN0YXJ0IHNjcmVlbi5cbi8vIFNwZWNpZnkgd2hhdCBlYWNoIGJ1dHRvbiBkb2VzIGluIGNvZGUuXG5cbi8vIE1ha2UgdGhlIHN0YXJ0IHNjcmVlbiB2aXNpYmxlXG5zdGFydFNjcmVlbi5zaG93KCk7XG5cblxuXG5cblxuXG5cblxuXG5cbiJdfQ==
