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

	function Animal(name) {
		_classCallCheck(this, Animal);

		console.log('in Animal object, name:' + name);

		return _possibleConstructorReturn(this, (Animal.__proto__ || Object.getPrototypeOf(Animal)).call(this, name));
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

	function Cage(name) {
		_classCallCheck(this, Cage);

		console.log('in a Zoo Cage, name:' + name);

		// grab a Cage form the dom.

		var _this = _possibleConstructorReturn(this, (Cage.__proto__ || Object.getPrototypeOf(Cage)).call(this, name));

		_this.dom = document.createElement('div');

		_this.setBackgroundImage('img/areas/cage.png');

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

			// add a Trump

			this.trump = new _Trump2.default(' Donald Presidentia Trump');

			// add a player

			this.player = new _Player2.default('myself');

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

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_Dynamic) {
	_inherits(Player, _Dynamic);

	function Player(name) {
		_classCallCheck(this, Player);

		console.log('in Player object, name:' + name);
		return _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, name));
	}

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

			alert(' I am in screen:' + _this.name);

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

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Trump = function (_Dynamic) {
	_inherits(Trump, _Dynamic);

	function Trump(name) {
		_classCallCheck(this, Trump);

		console.log('in Trump object, name:' + name);

		return _possibleConstructorReturn(this, (Trump.__proto__ || Object.getPrototypeOf(Trump)).call(this, name));
	}

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

			this.cages.push(new _Cage2.default('Cage #1')); // or, this.cages[0] 
			this.cages.push(new _Cage2.default('Cage #2'));
			this.cages.push(new _Cage2.default('Cage #3'));
			this.cages.push(new _Cage2.default('Cage #4'));

			// Make cages visible by attaching them inside the Zoo's HTML <div>.

			for (var i = 0; i < this.cages.length; i++) {
				this.dom.appendChild(this.cages[i].dom);
			}

			this.animals = [];

			this.animals.push(new _Animal2.default('lion'));
			this.animals.push(new _Animal2.default('tiger'));
			this.animals.push(new _Animal2.default('bear'));
			this.animals.push(new _Animal2.default('gorilla'));
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0FuaW1hbC5qcyIsIm1vZHVsZXMvanMvQ2FnZS5qcyIsIm1vZHVsZXMvanMvRHluYW1pYy5qcyIsIm1vZHVsZXMvanMvR2FtZU9iai5qcyIsIm1vZHVsZXMvanMvR2FtZVNjcmVlbi5qcyIsIm1vZHVsZXMvanMvSFVELmpzIiwibW9kdWxlcy9qcy9Mb3N0U2NyZWVuLmpzIiwibW9kdWxlcy9qcy9QbGF5ZXIuanMiLCJtb2R1bGVzL2pzL1Njb3JlLmpzIiwibW9kdWxlcy9qcy9TY3JlZW4uanMiLCJtb2R1bGVzL2pzL1N0YXJ0U2NyZWVuLmpzIiwibW9kdWxlcy9qcy9TdGF0aWMuanMiLCJtb2R1bGVzL2pzL1RydW1wLmpzIiwibW9kdWxlcy9qcy9Xb25TY3JlZW4uanMiLCJtb2R1bGVzL2pzL1pvby5qcyIsIm1vZHVsZXMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0lBRXFCLE07OztBQUVwQixpQkFBYyxJQUFkLEVBQXFCO0FBQUE7O0FBQ3JCLFVBQVEsR0FBUixDQUFZLDRCQUE0QixJQUF4Qzs7QUFEcUIseUdBR2QsSUFIYztBQUlwQjs7Ozs7a0JBTm1CLE07Ozs7Ozs7OztBQ0ZyQjs7Ozs7Ozs7Ozs7O0lBRXFCLEk7OztBQUVwQixlQUFjLElBQWQsRUFBcUI7QUFBQTs7QUFFcEIsVUFBUSxHQUFSLENBQVkseUJBQXlCLElBQXJDOztBQUtBOztBQVBvQiwwR0FJYixJQUphOztBQVNwQixRQUFLLEdBQUwsR0FBVyxTQUFTLGFBQVQsQ0FBd0IsS0FBeEIsQ0FBWDs7QUFJQSxRQUFLLGtCQUFMLENBQXlCLG9CQUF6Qjs7QUFib0I7QUFpQnBCOzs7OztrQkFuQm1CLEk7Ozs7Ozs7OztBQ0ZyQjs7Ozs7Ozs7Ozs7O0lBR3FCLE87OztBQUVwQixrQkFBYyxJQUFkLEVBQXFCO0FBQUE7O0FBRXBCLFVB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QUVBLFFBQVEsR0FBUixDQUFZLGVBQVo7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxPQUFPLFdBQVAsR0FBcUIsRUFBckI7O0FBRUEsSUFBSSxjQUFjLDBCQUFnQixPQUFoQixFQUF5QixPQUFPLFdBQWhDLENBQWxCO0FBQ0EsT0FBTyxXQUFQLENBQW9CLE9BQXBCLElBQStCLFdBQS9COztBQUVBLElBQUksYUFBYSx5QkFBZSxNQUFmLEVBQXVCLE9BQU8sV0FBOUIsQ0FBakI7QUFDQSxPQUFPLFdBQVAsQ0FBb0IsTUFBcEIsSUFBK0IsVUFBL0I7O0FBRUEsSUFBSSxZQUFZLHdCQUFjLEtBQWQsRUFBcUIsT0FBTyxXQUE1QixDQUFoQjtBQUNBLE9BQU8sV0FBUCxDQUFvQixLQUFwQixJQUE4QixTQUE5Qjs7QUFFQSxJQUFJLGFBQWEseUJBQWUsTUFBZixFQUF1QixPQUFPLFdBQTlCLENBQWpCO0FBQ0EsT0FBTyxXQUFQLENBQW9CLE1BQXBCLElBQStCLFVBQS9COztBQUVBLFFBQVEsR0FBUixDQUFZLDBCQUF5QixPQUFPLFdBQWhDLENBQVo7O0FBRUEsT0FBTyxLQUFQLEdBQWUsb0JBQVUsbUJBQVYsQ0FBZjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxJQUFaIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBEeW5hbWljIGZyb20gJy4vRHluYW1pYy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW1hbCBleHRlbmRzIER5bmFtaWMge1xuXHRcblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXHRjb25zb2xlLmxvZygnaW4gQW5pbWFsIG9iamVjdCwgbmFtZTonICsgbmFtZSApO1xuXG5cdHN1cGVyKCBuYW1lICk7XG5cdH1cbn0iLCJpbXBvcnQgU3RhdGljIGZyb20gJy4vU3RhdGljLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FnZSBleHRlbmRzIFN0YXRpY3tcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBhIFpvbyBDYWdlLCBuYW1lOicgKyBuYW1lICk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXG5cblx0XHQvLyBncmFiIGEgQ2FnZSBmb3JtIHRoZSBkb20uXG5cblx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG5cblxuXG5cdFx0dGhpcy5zZXRCYWNrZ3JvdW5kSW1hZ2UoICdpbWcvYXJlYXMvY2FnZS5wbmcnICk7XG5cblxuXG5cdH1cbn0iLCJpbXBvcnQgR2FtZU9iaiBmcm9tICcuL0dhbWVPYmouanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWMgZXh0ZW5kcyBHYW1lT2JqIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBEeW5hbWljJyk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXG5cdH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT2JqIHtcblxuXHQvL2luaGVyaXRzIGZyb20gZ2VuZXJpYyBKYXZhc2NyaXB0IE9iamVjdDtcblxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gR2FtZU9iaicpO1xuXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblxuXHRcdHRoaXMuaWQgPSB0aGlzLnNldElkKCk7XG5cblx0fSAvLyBlbmQgb2YgY29uc3RydWN0b3JcblxuXHQvKiogXG5cdCAqIGdldCB0aGUgdW5pcXVlIElEIHZhbHVlIGZvciBhbiBvYmplY3QuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSB1bmlxdWUgaWQsIGluIHV1aWQgZm9ybWF0LlxuXHQgKi9cblx0Z2V0SWQgKCkge1xuXHRcdHJldHVybiB0aGlzLmlkO1xuXHR9XG5cblx0LyoqIFxuXHQgKiBnZXQgdGhlIG5hbWUgYXNzaWduZWQgdG8gdGhpcyBvYmplY3QuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBuYW1lLlxuXHQgKi9cblx0Z2V0TmFtZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcblx0fVxuXG5cdC8qKiBcblx0ICogc2V0IHRoZSBvYmplY3QncyBuYW1lIHRvIGEgbmV3IHZhbHVlLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbmV3TmFtZSB0aGUgbmV3IG5hbWUgdG8gdXNlLlxuXHQgKi9cblx0c2V0TmFtZSAoIG5ld05hbWUgKSB7XG5cdFx0dGhpcy5uYW1lID0gbmV3TmFtZTtcblx0fVxuXG5cdC8qKlxuXHQqIG1ha2UgdGhlIG9uc2NyZWVuIGVsZW1lbnQgdmlzaWJsZSB2aWEgQ1NTLlxuXHQqL1xuXHRzaG93ICgpIHtcblxuXHRcdHRoaXMuZG9tLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG5cdH1cblxuXHQvKlxuXHQqXG5cdCovXG5cblx0aGlkZSAoKSB7XG5cblx0XHR0aGlzLmRvbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG5cdH1cblxuXG5cblx0LyoqIFxuXHQgKiBMb2FkIGFuIGltYWdlIGZyb20gdGhlIGRyaXZlLCBhbmQgc2V0IHRoZSBcblx0ICogY3NzIGJhY2tncm91bmQgaW1hZ2UgcHJvcGVydHkgdG8gdGhpcyBpbWFnZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaW1nUGF0aCB0aGUgcGF0aCB0byB0aGUgaW1hZ2Ugb24gdGhlIHdlYnNpdGUuXG5cdCAqL1xuXHRzZXRCYWNrZ3JvdW5kSW1hZ2UoIGltZ1BhdGggKSB7XG5cblx0XHR0aGlzLmRvbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnXCIgKyBpbWdQYXRoICsgXCInKVwiO1xuXG5cdH1cblxuXHRzZXRGb3JlZ3JvdW5kSW1hZ2UoIGltZ1BhdGggKSB7XG5cblx0XHRsZXQgaW1nID0gbmV3IEltYWdlKCk7XG5cblx0XHRpbWcuc3JjID0gaW1nUGF0aDtcblxuXHRcdHRoaXMuZG9tLmFwcGVuZENoaWxkKCBpbWcgKTtcblxuXHR9XG5cblx0LyoqXG5cdCogc2V0IHRoZSBzaXplIG9mIGFuIG9iamVjdCwgaW4gcGl4ZWxzLlxuXHQqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCB0aGUgd2lkdGgsIGluIHBpeGVsc1xuXHQqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHQgdGhlIGhlaWdodCwgaW4gcGl4ZWxzXG5cdCovXG5cdHNldFNpemUoIHdpZHRoLCBoZWlnaHQgKSB7XG5cblx0XHR0aGlzLmRvbS5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4Jztcblx0XHR0aGlzLmRvbS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuXG5cdH1cblxuXHQvKipcblx0KiBzZXQgcG9zaXRpb24gb2YgYW4gb2JqZWN0LCByZWxhdGl2ZSB0byB0aGVcblx0KiBlbmNsb3NpbmcgU2NyZWVuIG9iamVjdC5cblx0KiBAcGFyYW0ge051bWJlcn0gdG9wIHRoZSB0b3AgY29ycmRpbmF0ZSBvZiB0aGUgb2JqZWN0LCBpbiBwaXhlbHMuXG5cdCogQHBhcmFtIHtOdW1iZXJ9IGxlZnQgdGhlIGxlZnQgY29ycmRpbmF0ZSBvZiB0aGUgb2JqZWN0LCBpbiBwaXhlbHMuXG5cdCovXG5cdHNldFBvc2l0aW9uKCB0b3AsIGxlZnQgKSB7XG5cblx0XHR0aGlzLmRvbS5zdHlsZS50b3AgPSB0b3AgKyAncHgnO1xuXHRcdHRoaXMuZG9tLnN0eWxlLmxlZnQgPSBsZWZ0ICsgJ3B4JztcblxuXHR9XG5cbiAgICAvKiogXG4gICAgICogR2VuZXJhdGUgYSB1bmlxdWUgSUQgZm9yIGV2ZXJ5IGdhbWUgb2JqZWN0LlxuICAgICAqIEBsaW5rIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2NyZWF0ZS1ndWlkLXV1aWQtaW4tamF2YXNjcmlwdFxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgdW5pcXVlIElEIGluIHV1aWQgZm9ybWF0LlxuICAgICAqL1xuICAgIHNldElkICgpIHtcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvL3VzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcbiAgICAgICAgfVxuICAgICAgICB2YXIgdXVpZCA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpKjE2KSUxNiB8IDA7XG4gICAgICAgICAgICBkID0gTWF0aC5mbG9vcihkLzE2KTtcbiAgICAgICAgICAgIHJldHVybiAoYz09J3gnID8gciA6IChyJjB4M3wweDgpKS50b1N0cmluZygxNik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdXVpZDtcblxuICAgIH0gLy8gZW5kIG9mIHNldElkXG5cbn0gLy8gZW5kIG9mIGNsYXNzIiwiaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5pbXBvcnQgWm9vIGZyb20gJy4vWm9vLmpzJztcbmltcG9ydCBUcnVtcCBmcm9tICcuL1RydW1wLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBHYW1lU2NyZWVuJylcblxuXHRcdHN1cGVyKCBuYW1lICk7XG5cblx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnZ2FtZS1zY3JlZW4nICk7XG5cblx0XHR0aGlzLnNldEJhY2tncm91bmRJbWFnZSggJ2ltZy9zY3JlZW5zL2dhbWUtc2NyZWVuLnBuZycgKTtcblxuXHR9IC8vIGVuZCBvZiBjb25zdHJ1Y3RvclxuXG5cdC8qKlxuXHQqIGNyZWF0ZSBnYW1lIG9iamVjdHNcblx0KiAtIGFkZCA0IENhZ2VzXG5cdCogLSBhZGQgNCBBbmltYWxzXG5cdCogLSBhZGQgYSBUcnVtcFxuXHQqIC0gYWRkIGEgcGxheWVyXG5cdCovXG5cblx0YnVpbGQgKCkge1xuXG5cdFx0Y29uc29sZS5sb2coICdidWlsZGluZyB0aGUgZ2FtZS4uLicpO1xuXG5cdFx0Ly8gYWRkIGEgWm9vICg0IEFuaW1hbHMgYW5kIDQgQ2FnZXMgZ28gaW5zaWRlIGl0KVxuXG5cdFx0dGhpcy56b28gPSBuZXcgWm9vKCAnRnVua3kgWm9vJyApO1xuXG5cdFx0dGhpcy56b28uYnVpbGQoKTsgLy8gbWFrZSBab28gYW5kIENhZ2VzIGFuZCBBbmltYWxzXG5cblx0XHR0aGlzLmRvbS5hcHBlbmRDaGlsZCggdGhpcy56b28uZG9tICk7XG5cblx0XHQvLyBhZGQgYSBUcnVtcFxuXG5cdFx0dGhpcy50cnVtcCA9IG5ldyBUcnVtcCggJyBEb25hbGQgUHJlc2lkZW50aWEgVHJ1bXAnKTtcblxuXHRcdC8vIGFkZCBhIHBsYXllclxuXG5cdFx0dGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKCAnbXlzZWxmJyApO1xuXG5cdFx0Ly8gYWRkIDQgQ2FnZXNcblxuXHRcdC8vIGFkZCA0IEFuaW1hbHNcblxuXG5cblx0fVxuXG59IC8vIGVuZCBvZiBjbGFzcyIsImltcG9ydCBHYW1lT2JqIGZyb20gJy4vR2FtZU9iai5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhVRCBleHRlbmRzIEdhbWVPYmoge1xuXHRcblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIEhVRCcpO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHR9IC8vIGVuZCBvZiBjb25zdHJ1Y3RvclxuXG59IC8vIGVuZCBvZiBjbGFzcyIsImltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb3N0U2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSwgc2NyZWVuQXJyYXkgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gTG9zdFNjcmVlbicpO1xuXG5cdFx0c3VwZXIoIG5hbWUsIHNjcmVlbkFycmF5ICk7XG5cblx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbG9zdC1zY3JlZW4nICk7XG5cblx0XHQvLyBzZXQgdGhlIGJhY2tncm91bmQgaW1hZ2UuXG5cblx0XHR0aGlzLnNldEJhY2tncm91bmRJbWFnZSggJ2ltZy9zY3JlZW5zL2xvc3Qtc2NyZWVuLnBuZycgKTtcblxuXHRcdHRoaXMuZ2V0U3RhcnRCdXR0b24oKTtcblxuXHRcdHRoaXMuZ2V0RXhpdEJ1dHRvbigpO1xuXG5cdH0gLy8gZW5kIG9mIGNvbnN0cnVjdG9yXG4gXG5cbn0gLy8gZW5kIG9mIGNsYXNzIiwiaW1wb3J0IER5bmFtaWMgZnJvbSAnLi9EeW5hbWljLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgRHluYW1pYyB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cdGNvbnNvbGUubG9nKCdpbiBQbGF5ZXIgb2JqZWN0LCBuYW1lOicgKyBuYW1lICk7XG5cdHN1cGVyKCBuYW1lICk7XG5cdFxuXHR9XG59IiwiaW1wb3J0IEhVRCBmcm9tICcuL0hVRC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlIGV4dGVuZHMgSFVEIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBTY29yZScpO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdnYW1lLXNjb3JlJyApO1xuXG5cdH0gLy8gZW5kIG9mIGNvbnN0cnVjdG9yXG5cbn0gLy8gZW5kIG9mIGNsYXNzIiwiaW1wb3J0IEdhbWVPYmogZnJvbSAnLi9HYW1lT2JqLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyZWVuIGV4dGVuZHMgR2FtZU9iaiB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUsIHNjcmVlbkFycmF5ICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIFNjcmVlbiwgbmFtZTonICsgbmFtZSArICcgc2NyZWVuczonICsgc2NyZWVuQXJyYXkpO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHRcdHRoaXMuc2V0U2NyZWVucyggc2NyZWVuQXJyYXkgKTtcblxuXHR9IC8vIGVuZCBvZiBjb25zdHJ1Y3RvclxuXG5cdHNldFNjcmVlbnMgKCBzY3JlZW5BcnJheSApIHtcblxuXHRcdGNvbnNvbGUubG9nKFwiaW4gc2V0U2NyZWVucywgc2NyZWVuczpcIiArIHNjcmVlbkFycmF5IClcblx0XHR0aGlzLnNjcmVlbnMgPSBzY3JlZW5BcnJheTtcblxuXHR9XG5cblx0Z2V0U3RhcnRCdXR0b24gKCkge1xuXG5cdFx0dGhpcy5zdGFydEJ1dHRvbiA9IHRoaXMuZG9tLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoICdnYW1lLXN0YXJ0JyApWyAwIF07XG5cblx0fVxuXG5cdGdldEV4aXRCdXR0b24oKSB7XG5cblx0XHR0aGlzLmV4aXRCdXR0b24gPSB0aGlzLmRvbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCAnZ2FtZS1leGl0JyApWyAwIF07XG5cblx0fVxuXG59IC8vIGVuZCBvZiBjbGFzc1xuXG5cblxuIiwiaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0U2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSwgc2NyZWVuQXJyYXkgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gU3RhcnRTY3JlZW4sIG5hbWU6JyArIG5hbWUgKyBcIiBzY3JlZW5zOlwiICsgc2NyZWVuQXJyYXkpO1xuXG5cdFx0c3VwZXIoIG5hbWUsIHNjcmVlbkFycmF5ICk7XG5cblx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc3RhcnQtc2NyZWVuJyApO1xuXG5cdFx0Ly8gc2V0IHRoZSBiYWNrZ3JvdW5kIGltYWdlXG5cblx0XHR0aGlzLnNldEJhY2tncm91bmRJbWFnZSggJ2ltZy9zY3JlZW5zL3N0YXJ0LXNjcmVlbi5wbmcnICk7XG5cblx0XHQvLyBTZWFyY2ggZm9yIGEgJ3N0YXJ0JyBidXR0b24gaW4gdGhlIHRoaXMuZG9tIEhUTUwgbWFya3VwIFxuXHRcdC8vIE5PVEU6IHdpbGwgZmFpbCBpZiBubyBidXR0b24gcHJlc2VudCFcblxuXHRcdHRoaXMuZ2V0U3RhcnRCdXR0b24oKTsgLy8gZGVmaW5lZCBpbiBTY3JlZW4uanNcblxuXHRcdC8vIFdpcmUgdXAgdGhlIHN0YXJ0IGJ1dHRvbiB0byBsb2FkIHRoZSBHYW1lU2NyZWVuLlxuXG5cblx0XHR0aGlzLnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcblxuXHRcdFx0YWxlcnQoJyBJIGFtIGluIHNjcmVlbjonICsgdGhpcy5uYW1lICk7XG5cblx0XHRcdHRoaXMuc2NyZWVuc1sgJ3N0YXJ0JyBdLmhpZGUoKTsgLy8gaGlkZSBteXNlbGZcblxuXHRcdFx0dGhpcy5zY3JlZW5zWyAnZ2FtZScgXS5zaG93KCk7IC8vIHNob3cgdGhlIGdhbWUgc2NyZWVuXG5cblx0XHRcdHRoaXMuc2NyZWVuc1sgJ2dhbWUnIF0uYnVpbGQoKTsgLy8gcmVidWlsZCB0aGUgZ2FtZSB3aXRoIGFsbCBpdHMgb2JqZWN0c1xuXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5nZXRFeGl0QnV0dG9uKCk7XG5cblx0fSAvLyBlbmQgb2YgY29uc3RydWN0b3JcblxuXG5cbn0gLy8gZW5kIG9mIGNsYXNzIiwiaW1wb3J0IEdhbWVPYmogZnJvbSAnLi9HYW1lT2JqLmpzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljIGV4dGVuZHMgR2FtZU9iaiB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gU3RhdGljJyk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXG5cdH1cbn0iLCJpbXBvcnQgRHluYW1pYyBmcm9tICcuL0R5bmFtaWMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcnVtcCBleHRlbmRzIER5bmFtaWMge1xuXHRcblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXHRjb25zb2xlLmxvZygnaW4gVHJ1bXAgb2JqZWN0LCBuYW1lOicgKyBuYW1lICk7XG5cblx0c3VwZXIoIG5hbWUgKTtcblx0fVxufSIsImltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb25TY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xuXHRcblx0Y29uc3RydWN0b3IgKCBuYW1lLCBzY3JlZW5BcnJheSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBXb25TY3JlZW4nKTtcblxuXHRcdHN1cGVyKCBuYW1lLCBzY3JlZW5BcnJheSApO1xuXG5cdFx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3dvbi1zY3JlZW4nICk7XG5cblx0XHR0aGlzLnNldEJhY2tncm91bmRJbWFnZSggJ2ltZy9zY3JlZW5zL3dvbi1zY3JlZW4ucG5nJyApO1xuXG5cdFx0dGhpcy5nZXRTdGFydEJ1dHRvbigpO1xuXG5cdFx0dGhpcy5nZXRFeGl0QnV0dG9uKCk7XG5cblx0fSAvLyBlbmQgb2YgY29uc3RydWN0b3JcblxuXG59IC8vIGVuZCBvZiBjbGFzcyIsImltcG9ydCBTdGF0aWMgZnJvbSAnLi9TdGF0aWMuanMnO1xuaW1wb3J0IENhZ2UgZnJvbSAnLi9DYWdlLmpzJztcbmltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab28gZXh0ZW5kcyBTdGF0aWN7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gdGhlIHpvbycpO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcblxuXHR9XG5cblx0LyoqXG5cdCogY3JlYXRlIDQgY2FnZXNcblx0KlxuXHQqL1xuXG5cdGJ1aWxkKCkge1xuXG5cdFx0Y29uc29sZS5sb2coICdpbiBab28gYnVpbGQuLi4nICk7XG5cblx0XHR0aGlzLmNhZ2VzID0gW107XG5cblx0XHR0aGlzLmNhZ2VzLnB1c2goIG5ldyBDYWdlKCAnQ2FnZSAjMScpICk7IC8vIG9yLCB0aGlzLmNhZ2VzWzBdIFxuXHRcdHRoaXMuY2FnZXMucHVzaCggbmV3IENhZ2UoICdDYWdlICMyJykgKTtcblx0XHR0aGlzLmNhZ2VzLnB1c2goIG5ldyBDYWdlKCAnQ2FnZSAjMycpICk7XG5cdFx0dGhpcy5jYWdlcy5wdXNoKCBuZXcgQ2FnZSggJ0NhZ2UgIzQnKSApO1xuXG5cdFx0Ly8gTWFrZSBjYWdlcyB2aXNpYmxlIGJ5IGF0dGFjaGluZyB0aGVtIGluc2lkZSB0aGUgWm9vJ3MgSFRNTCA8ZGl2Pi5cblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMuY2FnZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMuZG9tLmFwcGVuZENoaWxkKCB0aGlzLmNhZ2VzWyBpIF0uZG9tICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5hbmltYWxzID0gW107XG5cblx0XHR0aGlzLmFuaW1hbHMucHVzaCggbmV3IEFuaW1hbCggJ2xpb24nICkgKTtcblx0XHR0aGlzLmFuaW1hbHMucHVzaCggbmV3IEFuaW1hbCggJ3RpZ2VyJyApICk7XG5cdFx0dGhpcy5hbmltYWxzLnB1c2goIG5ldyBBbmltYWwoICdiZWFyJyApICk7XG5cdFx0dGhpcy5hbmltYWxzLnB1c2goIG5ldyBBbmltYWwoICdnb3JpbGxhJyApICk7XG5cblxuXHR9XG59IiwiLy8gTWFzdGVyIG9iamVjdC5cbmltcG9ydCBHYW1lT2JqIGZyb20gJy4vR2FtZU9iai5qcyc7XG5cbi8vIFNjcmVlbiBvYmplY3RzLlxuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7IC8vbmV2ZXIgZGlyZWN0bHkgdmlzaWJsZSwgdXNlZCB0byBjb25zdHJ1Y3QgdmlzaWJsZSBzY3JlZW5zLlxuaW1wb3J0IFN0YXJ0U2NyZWVuIGZyb20gJy4vU3RhcnRTY3JlZW4uanMnO1xuaW1wb3J0IEdhbWVTY3JlZW4gZnJvbSAnLi9HYW1lU2NyZWVuLmpzJztcbmltcG9ydCBXb25TY3JlZW4gZnJvbSAnLi9Xb25TY3JlZW4uanMnO1xuaW1wb3J0IExvc3RTY3JlZW4gZnJvbSAnLi9Mb3N0U2NyZWVuLmpzJztcblxuLy8gSFVEIG9iamVjdHMuXG5pbXBvcnQgSFVEIGZyb20gJy4vSFVELmpzJzsgLy9uZXZlciBkaXJlY3RseSB2aXNpYmxlLCB1c2VkIHRvIGNvbnN0cnVjdCB2aXNpYmxlIHNjcmVlbnMuXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZS5qcyc7XG5cbi8vIFN0YXRpYyBPYmplY3RzLlxuXG4vLyBEeW5hbWljIE9iamVjdHMuXG5cbmNvbnNvbGUubG9nKCdsb2FkaW5nIGdhbWUuJyk7XG5cbi8vIEdsb2JhbCBzdG9yYWdlIG9mIGFsbCBzY3JlZW5zIGNyZWF0ZWQuXG5cbi8vIE5PVEU6IGNvbnZlcnQgdGhlICd3aW5kb3cuJyB0byAnbGV0JyBzaW5jZSB3ZSBkb24ndCBcbi8vIE5PVEU6IHdhbnQgdG8gcnVuIGdsb2JhbGx5IGFueW1vcmUuXG4gXG53aW5kb3cuZ2FtZVNjcmVlbnMgPSB7fTtcblxubGV0IHN0YXJ0U2NyZWVuID0gbmV3IFN0YXJ0U2NyZWVuKCdzdGFydCcsIHdpbmRvdy5nYW1lU2NyZWVucyApO1xud2luZG93LmdhbWVTY3JlZW5zWyAnc3RhcnQnXSA9IHN0YXJ0U2NyZWVuO1xuXG5sZXQgZ2FtZVNjcmVlbiA9IG5ldyBHYW1lU2NyZWVuKCdnYW1lJywgd2luZG93LmdhbWVTY3JlZW5zICk7XG53aW5kb3cuZ2FtZVNjcmVlbnNbICdnYW1lJyBdID0gZ2FtZVNjcmVlbjsgXG5cbmxldCB3b25TY3JlZW4gPSBuZXcgV29uU2NyZWVuKCd3b24nLCB3aW5kb3cuZ2FtZVNjcmVlbnMgKTtcbndpbmRvdy5nYW1lU2NyZWVuc1sgJ3dvbicgXSA9IHdvblNjcmVlbjtcblxubGV0IGxvc3RTY3JlZW4gPSBuZXcgTG9zdFNjcmVlbignbG9zdCcsIHdpbmRvdy5nYW1lU2NyZWVucyApO1xud2luZG93LmdhbWVTY3JlZW5zWyAnbG9zdCcgXSA9IGxvc3RTY3JlZW47XG5cbmNvbnNvbGUubG9nKFwiIGdhbWVTY3JlZW5zOlwiICsgdHlwZW9mIHdpbmRvdy5nYW1lU2NyZWVucylcblxud2luZG93LnNjb3JlID0gbmV3IFNjb3JlKCdnYW1lIHNjb3JlIG9iamVjdCcpO1xuXG4vLyBTVEFSVCBUSEUgR0FNRS4uLlxuXG4vLyBBdHRhY2ggZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBidXR0b25zIG9uIHRoZSBzdGFydCBzY3JlZW4uXG4vLyBTcGVjaWZ5IHdoYXQgZWFjaCBidXR0b24gZG9lcyBpbiBjb2RlLlxuXG4vLyBNYWtlIHRoZSBzdGFydCBzY3JlZW4gdmlzaWJsZVxuc3RhcnRTY3JlZW4uc2hvdygpO1xuXG5cblxuXG5cblxuXG5cblxuXG4iXX0=
