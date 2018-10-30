/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./static/js/app.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./static/js/app.js":
/*!**************************!*\
  !*** ./static/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _game_field = __webpack_require__(/*! ./components/game_field */ "./static/js/components/game_field.js");

var _game_field2 = _interopRequireDefault(_game_field);

var _login_screen = __webpack_require__(/*! ./components/login_screen */ "./static/js/components/login_screen.js");

var _login_screen2 = _interopRequireDefault(_login_screen);

var _game_rules = __webpack_require__(/*! ./components/game_rules */ "./static/js/components/game_rules.js");

var _game_rules2 = _interopRequireDefault(_game_rules);

var _timer = __webpack_require__(/*! ./components/timer */ "./static/js/components/timer.js");

var _timer2 = _interopRequireDefault(_timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_BULK_SIZE = 10;

var GameContainer = function (_Component) {
    _inherits(GameContainer, _Component);

    function GameContainer(props) {
        _classCallCheck(this, GameContainer);

        var _this = _possibleConstructorReturn(this, (GameContainer.__proto__ || Object.getPrototypeOf(GameContainer)).call(this, props));

        _this.componentDidMount = function () {
            _this._makeRandomArray(1, 20, 9);
        };

        _this.refreshValues = function () {
            var counter = _this.state.counter;
            _this.setState({
                counter: counter + 1
            }, _this._makeRandomArray(1, 20, 9));
        };

        _this.setLoginName = function (name) {
            _this.setState({
                nickname: name,
                isLogon: true
            });
        };

        _this._onMouseMove = function (e) {
            console.log("X: ", e.screenX, " Y: ", e.screenY);
            var _this$state = _this.state,
                deltaX = _this$state.deltaX,
                deltaY = _this$state.deltaY,
                eventCounter = _this$state.eventCounter;

            // Get x and y coordinates from event and push it to current bulk

            deltaX.push(e.screenX);
            deltaY.push(e.screenY);

            // Assumed that deltaX length is equal to deltaY length, so we can check
            // max size only by one array length
            if (deltaX.length === MAX_BULK_SIZE) {
                // We should use COPY of original bulk, because in Axios promise we could
                // get incorrect state! So we use trick with slice() to get a full copy.
                // Since MAX_BULK_SIZE is not very big, that arrays have no effect on performance
                _this._postEventsBulk(deltaX.slice(), deltaY.slice());

                // Now clear up arrays to handle another party
                deltaX.splice(0, deltaX.length);
                deltaY.splice(0, deltaY.length);
                eventCounter = -1;
            }
            _this.setState({
                deltaX: deltaX,
                deltaY: deltaY,
                eventCounter: eventCounter + 1
            });
        };

        _this._postEventsBulk = function (xCords, yCords) {
            var successCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            _axios2.default.post('/events', {
                x: xCords,
                y: yCords
            }).then(function (response) {
                if (successCallback != null) {
                    successCallback();
                }
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        };

        _this._makeRandomArray = function (min, max, size) {
            var resultArray = [];
            for (var i = 0; i < size; i++) {
                resultArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
            }

            var randomIndex = Math.floor(Math.random() * size);
            _this.setState({
                searchValue: resultArray[randomIndex],
                randomArray: resultArray
            });
        };

        _this.saveResults = function () {
            var _this$state2 = _this.state,
                nickname = _this$state2.nickname,
                deltaX = _this$state2.deltaX,
                deltaY = _this$state2.deltaY,
                counter = _this$state2.counter;

            var closeConnection = function closeConnection() {
                _axios2.default.post('/fin', {
                    nickname: nickname,
                    totalScore: counter
                }).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);
                });
            };

            _this._postEventsBulk(deltaX, deltaY, closeConnection);
        };

        _this.onGameStart = function () {
            _this.setState({
                gameStarted: true
            });
        };

        _this.onGameStop = function () {
            var _this$state3 = _this.state,
                nickname = _this$state3.nickname,
                counter = _this$state3.counter;

            console.log("Login: ", nickname, " Score: ", counter);
            _this.setState({
                gameStarted: false,
                gamePlayed: true
            });
        };

        _this.renderGameField = function () {
            return _react2.default.createElement(
                'div',
                { onMouseMove: _this._onMouseMove, className: 'container' },
                _react2.default.createElement(
                    'p',
                    null,
                    '\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043B\u043E: ',
                    _this.state.searchValue
                ),
                _react2.default.createElement(_game_field2.default, {
                    items: _this.state.randomArray,
                    searchValue: _this.state.searchValue,
                    onRefresh: _this.refreshValues
                }),
                _react2.default.createElement(
                    'div',
                    null,
                    '\u0412\u0430\u0448 \u0441\u0447\u0435\u0442: ',
                    _this.state.counter
                ),
                _react2.default.createElement(_timer2.default, { timerStop: _this.onGameStop })
            );
        };

        _this.state = {
            searchValue: null, // Value, that user are looking for
            randomArray: [], // Random values to fill the buttons
            counter: 0, // Total user score counter

            isLogon: false, // If user type his nickname?
            nickname: '', // Handle nickname of current user

            gameStarted: false, // Is game started?
            gamePlayed: false, // Is timer count end?

            deltaX: [], // Store bulk of x mouse coordinates
            deltaY: [], // Store bulk of y mouse coordinates
            eventCounter: 0 // counter for limit bulk size (default - 100)
        };
        return _this;
    }

    /*
     * For the first time, when component did mount, we need to generate array with random values
     */


    /*
     * We move that logic out to use this function in
     * success Number action callback. So if user get the right number
     * then component should refresh his values
     */


    /*
     * Callback for LoginScreen.
     * Put user nickname to the state (we use it in after game statistic and game rules)
     */


    /*
     * Register mouse movement on game container area
     */


    _createClass(GameContainer, [{
        key: 'render',
        value: function render() {
            var _state = this.state,
                isLogon = _state.isLogon,
                gameStarted = _state.gameStarted,
                gamePlayed = _state.gamePlayed,
                nickname = _state.nickname,
                counter = _state.counter;

            if (isLogon) {
                if (gameStarted) {
                    return this.renderGameField();
                } else {
                    return _react2.default.createElement(_game_rules2.default, { nickname: nickname, totalScore: counter, gamePlayed: gamePlayed,
                        onGameStart: this.onGameStart,
                        onGameSave: this.saveResults });
                }
            } else {
                return _react2.default.createElement(_login_screen2.default, { onNotify: this.setLoginName });
            }
        }
    }]);

    return GameContainer;
}(_react.Component);

document.addEventListener("DOMContentLoaded", function (e) {
    _reactDom2.default.render(_react2.default.createElement(GameContainer, null), document.getElementById('game'));
});

/***/ }),

/***/ "./static/js/components/game_field.js":
/*!********************************************!*\
  !*** ./static/js/components/game_field.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _number = __webpack_require__(/*! ./number */ "./static/js/components/number.js");

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameField = function (_Component) {
    _inherits(GameField, _Component);

    function GameField() {
        _classCallCheck(this, GameField);

        return _possibleConstructorReturn(this, (GameField.__proto__ || Object.getPrototypeOf(GameField)).apply(this, arguments));
    }

    _createClass(GameField, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                items = _props.items,
                searchValue = _props.searchValue;

            if (items.length === 0) {
                return "";
            } else {
                return _react2.default.createElement(
                    'div',
                    { className: 'container field' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-4' },
                            _react2.default.createElement(_number2.default, { value: items[0], searchValue: searchValue, onNotify: this.props.onRefresh })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-4' },
                            _react2.default.createElement(_number2.default, { value: items[1], searchValue: searchValue, onNotify: this.props.onRefresh })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-4' },
                            _react2.default.createElement(_number2.default, { value: items[2], searchValue: searchValue, onNotify: this.props.onRefresh })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-4' },
                            _react2.default.createElement(_number2.default, { value: items[3], searchValue: searchValue, onNotify: this.props.onRefresh })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-4' },
                            _react2.default.createElement(_number2.default, { value: items[4], searchValue: searchValue, onNotify: this.props.onRefresh })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-4' },
                            _react2.default.createElement(_number2.default, { value: items[5], searchValue: searchValue, onNotify: this.props.onRefresh })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-4' },
                            _react2.default.createElement(_number2.default, { value: items[6], searchValue: searchValue, onNotify: this.props.onRefresh })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-4' },
                            _react2.default.createElement(_number2.default, { value: items[7], searchValue: searchValue, onNotify: this.props.onRefresh })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-4' },
                            _react2.default.createElement(_number2.default, { value: items[8], searchValue: searchValue, onNotify: this.props.onRefresh })
                        )
                    )
                );
            }
        }
    }]);

    return GameField;
}(_react.Component);

exports.default = GameField;

/***/ }),

/***/ "./static/js/components/game_rules.js":
/*!********************************************!*\
  !*** ./static/js/components/game_rules.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameRules = function (_Component) {
    _inherits(GameRules, _Component);

    function GameRules() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, GameRules);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GameRules.__proto__ || Object.getPrototypeOf(GameRules)).call.apply(_ref, [this].concat(args))), _this), _this.renderRules = function () {
            return _react2.default.createElement(
                'div',
                { className: 'alert alert-info', role: 'alert' },
                '\u041F\u0440\u0438\u0432\u0435\u0442, ',
                _react2.default.createElement(
                    'b',
                    null,
                    _this.props.nickname
                ),
                '! ',
                _react2.default.createElement('br', null),
                '\u0412 \u044D\u0442\u043E\u0439 \u0438\u0433\u0440\u0435 \u0442\u0435\u0431\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043D\u0430\u0439\u0442\u0438 \u043A\u0430\u043A \u043C\u043E\u0436\u043D\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \u0447\u0438\u0441\u0435\u043B \u0437\u0430 \u0434\u0432\u0435 \u043C\u0438\u043D\u0443\u0442\u044B. ',
                _react2.default.createElement('br', null),
                '\u0414\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \u0421\u0442\u0430\u0440\u0442.',
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'button',
                    { onClick: _this.props.onGameStart, className: 'btn btn-success' },
                    '\u0421\u0442\u0430\u0440\u0442'
                )
            );
        }, _this.renderScore = function () {
            var _this$props = _this.props,
                nickname = _this$props.nickname,
                totalScore = _this$props.totalScore;

            return _react2.default.createElement(
                'div',
                { className: 'alert alert-success', role: 'alert' },
                _react2.default.createElement(
                    'b',
                    null,
                    '\u0422\u0432\u043E\u0435 \u0438\u043C\u044F:'
                ),
                ' ',
                nickname,
                ', ',
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'b',
                    null,
                    '\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0447\u043A\u043E\u0432:'
                ),
                ' ',
                totalScore,
                ' ',
                _react2.default.createElement('br', null),
                '\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0438\u0433\u0440\u0443!',
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'button',
                    { onClick: _this.props.onGameSave, className: 'btn btn-success' },
                    '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442!'
                )
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(GameRules, [{
        key: 'render',
        value: function render() {
            if (this.props.gamePlayed) {
                return this.renderScore();
            } else {
                return this.renderRules();
            }
        }
    }]);

    return GameRules;
}(_react.Component);

exports.default = GameRules;

/***/ }),

/***/ "./static/js/components/login_screen.js":
/*!**********************************************!*\
  !*** ./static/js/components/login_screen.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginScreen = function (_Component) {
    _inherits(LoginScreen, _Component);

    function LoginScreen(props) {
        _classCallCheck(this, LoginScreen);

        var _this = _possibleConstructorReturn(this, (LoginScreen.__proto__ || Object.getPrototypeOf(LoginScreen)).call(this, props));

        _this.onChange = function (e) {
            _this.setState({
                nickname: e.target.value
            });
        };

        _this.onLogin = function (e) {
            _this.props.onNotify(_this.state.nickname);
        };

        _this.state = {
            nickname: ''
        };
        return _this;
    }

    _createClass(LoginScreen, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'jumbotron' },
                _react2.default.createElement(
                    'h2',
                    null,
                    '\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0435 \u0438\u043C\u044F'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement('input', { value: this.state.nickname, onChange: this.onChange }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'button',
                    { onClick: this.onLogin, className: 'btn btn-primary' },
                    'Login'
                )
            );
        }
    }]);

    return LoginScreen;
}(_react.Component);

exports.default = LoginScreen;

/***/ }),

/***/ "./static/js/components/number.js":
/*!****************************************!*\
  !*** ./static/js/components/number.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Number = function (_Component) {
    _inherits(Number, _Component);

    function Number(props) {
        _classCallCheck(this, Number);

        var _this = _possibleConstructorReturn(this, (Number.__proto__ || Object.getPrototypeOf(Number)).call(this, props));

        _this.resetState = function () {
            _this.setState({
                btnStyle: 'btn-secondary'
            });
        };

        _this.success = function () {
            _this.setState({
                btnStyle: 'btn-success'
            }, _this.props.onNotify());
            setTimeout(_this.resetState, 1000);
        };

        _this.error = function () {
            _this.setState({
                btnStyle: 'btn-danger'
            });
            setTimeout(_this.resetState, 1000);
        };

        _this.onClick = function (e) {
            var searchValue = parseInt(_this.props.searchValue),
                buttonValue = parseInt(_this.props.value);
            if (searchValue === buttonValue) {
                _this.success();
            } else {
                _this.error();
            }
        };

        _this.state = {
            btnStyle: 'btn-secondary'
        };
        return _this;
    }

    _createClass(Number, [{
        key: 'render',
        value: function render() {
            var btnStyle = this.state.btnStyle;
            var value = this.props.value;
            return _react2.default.createElement(
                'div',
                { className: 'col-4 text-center' },
                _react2.default.createElement(
                    'button',
                    { onClick: this.onClick, className: "btn " + btnStyle },
                    value
                )
            );
        }
    }]);

    return Number;
}(_react.Component);

exports.default = Number;

/***/ }),

/***/ "./static/js/components/timer.js":
/*!***************************************!*\
  !*** ./static/js/components/timer.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TIME_INTERVAL = 120000;

var Timer = function (_Component) {
    _inherits(Timer, _Component);

    function Timer(props) {
        _classCallCheck(this, Timer);

        var _this = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, props));

        _this.tic = function () {
            _this.setState({
                elapsed: new Date() - _this.state.start
            });
        };

        _this.componentDidMount = function () {
            _this.setState({
                timer: setTimeout(_this.props.timerStop, TIME_INTERVAL),
                start: new Date(),
                countdown: setInterval(_this.tic, 50)
            });
        };

        _this.componentWillUnmount = function () {
            clearInterval(_this.state.countdown);
        };

        _this.state = {
            start: null,
            timer: null,
            countdown: null,
            elapsed: 0
        };
        return _this;
    }

    _createClass(Timer, [{
        key: 'render',
        value: function render() {
            var seconds = Math.round(this.state.elapsed / 1000);
            return _react2.default.createElement(
                'p',
                null,
                '\u0412\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u0448\u043B\u043E: ',
                seconds,
                ' \u0438\u0437 120 \u0441\u0435\u043A\u0443\u043D\u0434'
            );
        }
    }]);

    return Timer;
}(_react.Component);

exports.default = Timer;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvanMvY29tcG9uZW50cy9nYW1lX2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3N0YXRpYy9qcy9jb21wb25lbnRzL2dhbWVfcnVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2pzL2NvbXBvbmVudHMvbG9naW5fc2NyZWVuLmpzIiwid2VicGFjazovLy8uL3N0YXRpYy9qcy9jb21wb25lbnRzL251bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvanMvY29tcG9uZW50cy90aW1lci5qcyJdLCJuYW1lcyI6WyJNQVhfQlVMS19TSVpFIiwiR2FtZUNvbnRhaW5lciIsInByb3BzIiwiY29tcG9uZW50RGlkTW91bnQiLCJfbWFrZVJhbmRvbUFycmF5IiwicmVmcmVzaFZhbHVlcyIsImNvdW50ZXIiLCJzdGF0ZSIsInNldFN0YXRlIiwic2V0TG9naW5OYW1lIiwibmFtZSIsIm5pY2tuYW1lIiwiaXNMb2dvbiIsIl9vbk1vdXNlTW92ZSIsImUiLCJjb25zb2xlIiwibG9nIiwic2NyZWVuWCIsInNjcmVlblkiLCJkZWx0YVgiLCJkZWx0YVkiLCJldmVudENvdW50ZXIiLCJwdXNoIiwibGVuZ3RoIiwiX3Bvc3RFdmVudHNCdWxrIiwic2xpY2UiLCJzcGxpY2UiLCJ4Q29yZHMiLCJ5Q29yZHMiLCJzdWNjZXNzQ2FsbGJhY2siLCJBeGlvcyIsInBvc3QiLCJ4IiwieSIsInRoZW4iLCJyZXNwb25zZSIsImNhdGNoIiwiZXJyb3IiLCJtaW4iLCJtYXgiLCJzaXplIiwicmVzdWx0QXJyYXkiLCJpIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tSW5kZXgiLCJzZWFyY2hWYWx1ZSIsInJhbmRvbUFycmF5Iiwic2F2ZVJlc3VsdHMiLCJjbG9zZUNvbm5lY3Rpb24iLCJ0b3RhbFNjb3JlIiwib25HYW1lU3RhcnQiLCJnYW1lU3RhcnRlZCIsIm9uR2FtZVN0b3AiLCJnYW1lUGxheWVkIiwicmVuZGVyR2FtZUZpZWxkIiwiQ29tcG9uZW50IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiUmVhY3RET00iLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCIsIkdhbWVGaWVsZCIsIml0ZW1zIiwib25SZWZyZXNoIiwiR2FtZVJ1bGVzIiwicmVuZGVyUnVsZXMiLCJyZW5kZXJTY29yZSIsIm9uR2FtZVNhdmUiLCJMb2dpblNjcmVlbiIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkxvZ2luIiwib25Ob3RpZnkiLCJOdW1iZXIiLCJyZXNldFN0YXRlIiwiYnRuU3R5bGUiLCJzdWNjZXNzIiwic2V0VGltZW91dCIsIm9uQ2xpY2siLCJwYXJzZUludCIsImJ1dHRvblZhbHVlIiwiVElNRV9JTlRFUlZBTCIsIlRpbWVyIiwidGljIiwiZWxhcHNlZCIsIkRhdGUiLCJzdGFydCIsInRpbWVyIiwidGltZXJTdG9wIiwiY291bnRkb3duIiwic2V0SW50ZXJ2YWwiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNsZWFySW50ZXJ2YWwiLCJzZWNvbmRzIiwicm91bmQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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bUIsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRGY7Ozs7Ozs7Ozs7OztBQUVBLElBQU1RLGdCQUFnQixNQUF0Qjs7SUFFTUMsSzs7O0FBQ0YsbUJBQVluRixLQUFaLEVBQWtCO0FBQUE7O0FBQUEsa0hBQ1JBLEtBRFE7O0FBQUEsY0FXbEJvRixHQVhrQixHQVdaLFlBQU07QUFDUixrQkFBSzlFLFFBQUwsQ0FBYztBQUNWK0UseUJBQVMsSUFBSUMsSUFBSixLQUFhLE1BQUtqRixLQUFMLENBQVdrRjtBQUR2QixhQUFkO0FBR0gsU0FmaUI7O0FBQUEsY0FpQmxCdEYsaUJBakJrQixHQWlCRSxZQUFNO0FBQ3RCLGtCQUFLSyxRQUFMLENBQWM7QUFDVmtGLHVCQUFPVixXQUFXLE1BQUs5RSxLQUFMLENBQVd5RixTQUF0QixFQUFpQ1AsYUFBakMsQ0FERztBQUVWSyx1QkFBTyxJQUFJRCxJQUFKLEVBRkc7QUFHVkksMkJBQVdDLFlBQVksTUFBS1AsR0FBakIsRUFBc0IsRUFBdEI7QUFIRCxhQUFkO0FBS0gsU0F2QmlCOztBQUFBLGNBeUJsQlEsb0JBekJrQixHQXlCSyxZQUFNO0FBQ3pCQywwQkFBYyxNQUFLeEYsS0FBTCxDQUFXcUYsU0FBekI7QUFDSCxTQTNCaUI7O0FBR2QsY0FBS3JGLEtBQUwsR0FBYTtBQUNUa0YsbUJBQU8sSUFERTtBQUVUQyxtQkFBTyxJQUZFO0FBR1RFLHVCQUFXLElBSEY7QUFJVEwscUJBQVM7QUFKQSxTQUFiO0FBSGM7QUFTakI7Ozs7aUNBb0JRO0FBQ0wsZ0JBQUlTLFVBQVVyRCxLQUFLc0QsS0FBTCxDQUFXLEtBQUsxRixLQUFMLENBQVdnRixPQUFYLEdBQXFCLElBQWhDLENBQWQ7QUFDQSxtQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFrQlMsdUJBQWxCO0FBQUE7QUFBQSxhQURKO0FBR0g7Ozs7RUFuQ2V2QyxnQjs7a0JBc0NMNEIsSyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3RhdGljL2pzL2FwcC5qc1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgR2FtZUZpZWxkIGZyb20gJy4vY29tcG9uZW50cy9nYW1lX2ZpZWxkJztcbmltcG9ydCBMb2dpblNjcmVlbiBmcm9tICcuL2NvbXBvbmVudHMvbG9naW5fc2NyZWVuJztcbmltcG9ydCBHYW1lUnVsZXMgZnJvbSAnLi9jb21wb25lbnRzL2dhbWVfcnVsZXMnO1xuaW1wb3J0IFRpbWVyIGZyb20gJy4vY29tcG9uZW50cy90aW1lcic7XG5cbmNvbnN0IE1BWF9CVUxLX1NJWkUgPSAxMDtcblxuXG5jbGFzcyBHYW1lQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWFyY2hWYWx1ZTogbnVsbCwgLy8gVmFsdWUsIHRoYXQgdXNlciBhcmUgbG9va2luZyBmb3JcbiAgICAgICAgICAgIHJhbmRvbUFycmF5OiBbXSwgICAvLyBSYW5kb20gdmFsdWVzIHRvIGZpbGwgdGhlIGJ1dHRvbnNcbiAgICAgICAgICAgIGNvdW50ZXI6IDAsICAgICAgICAvLyBUb3RhbCB1c2VyIHNjb3JlIGNvdW50ZXJcblxuICAgICAgICAgICAgaXNMb2dvbjogZmFsc2UsICAgIC8vIElmIHVzZXIgdHlwZSBoaXMgbmlja25hbWU/XG4gICAgICAgICAgICBuaWNrbmFtZTogJycsICAgICAgLy8gSGFuZGxlIG5pY2tuYW1lIG9mIGN1cnJlbnQgdXNlclxuXG4gICAgICAgICAgICBnYW1lU3RhcnRlZDogZmFsc2UsIC8vIElzIGdhbWUgc3RhcnRlZD9cbiAgICAgICAgICAgIGdhbWVQbGF5ZWQ6IGZhbHNlLCAgLy8gSXMgdGltZXIgY291bnQgZW5kP1xuXG4gICAgICAgICAgICBkZWx0YVg6IFtdLCAgICAgICAgIC8vIFN0b3JlIGJ1bGsgb2YgeCBtb3VzZSBjb29yZGluYXRlc1xuICAgICAgICAgICAgZGVsdGFZOiBbXSwgICAgICAgICAvLyBTdG9yZSBidWxrIG9mIHkgbW91c2UgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIGV2ZW50Q291bnRlcjogMCwgICAgLy8gY291bnRlciBmb3IgbGltaXQgYnVsayBzaXplIChkZWZhdWx0IC0gMTAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBGb3IgdGhlIGZpcnN0IHRpbWUsIHdoZW4gY29tcG9uZW50IGRpZCBtb3VudCwgd2UgbmVlZCB0byBnZW5lcmF0ZSBhcnJheSB3aXRoIHJhbmRvbSB2YWx1ZXNcbiAgICAgKi9cbiAgICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fbWFrZVJhbmRvbUFycmF5KDEsIDIwLCA5KTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgKiBXZSBtb3ZlIHRoYXQgbG9naWMgb3V0IHRvIHVzZSB0aGlzIGZ1bmN0aW9uIGluXG4gICAgICogc3VjY2VzcyBOdW1iZXIgYWN0aW9uIGNhbGxiYWNrLiBTbyBpZiB1c2VyIGdldCB0aGUgcmlnaHQgbnVtYmVyXG4gICAgICogdGhlbiBjb21wb25lbnQgc2hvdWxkIHJlZnJlc2ggaGlzIHZhbHVlc1xuICAgICAqL1xuICAgIHJlZnJlc2hWYWx1ZXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSB0aGlzLnN0YXRlLmNvdW50ZXI7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY291bnRlcjogY291bnRlciArIDEsXG4gICAgICAgIH0sIHRoaXMuX21ha2VSYW5kb21BcnJheSgxLCAyMCwgOSkpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAqIENhbGxiYWNrIGZvciBMb2dpblNjcmVlbi5cbiAgICAgKiBQdXQgdXNlciBuaWNrbmFtZSB0byB0aGUgc3RhdGUgKHdlIHVzZSBpdCBpbiBhZnRlciBnYW1lIHN0YXRpc3RpYyBhbmQgZ2FtZSBydWxlcylcbiAgICAgKi9cbiAgICBzZXRMb2dpbk5hbWUgPSAobmFtZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG5pY2tuYW1lOiBuYW1lLFxuICAgICAgICAgICAgaXNMb2dvbjogdHJ1ZVxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICAvKlxuICAgICAqIFJlZ2lzdGVyIG1vdXNlIG1vdmVtZW50IG9uIGdhbWUgY29udGFpbmVyIGFyZWFcbiAgICAgKi9cbiAgICBfb25Nb3VzZU1vdmUgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlg6IFwiLCBlLnNjcmVlblgsIFwiIFk6IFwiLCBlLnNjcmVlblkpO1xuICAgICAgICBsZXQge2RlbHRhWCwgZGVsdGFZLCBldmVudENvdW50ZXJ9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICAvLyBHZXQgeCBhbmQgeSBjb29yZGluYXRlcyBmcm9tIGV2ZW50IGFuZCBwdXNoIGl0IHRvIGN1cnJlbnQgYnVsa1xuICAgICAgICBkZWx0YVgucHVzaChlLnNjcmVlblgpO1xuICAgICAgICBkZWx0YVkucHVzaChlLnNjcmVlblkpO1xuXG4gICAgICAgIC8vIEFzc3VtZWQgdGhhdCBkZWx0YVggbGVuZ3RoIGlzIGVxdWFsIHRvIGRlbHRhWSBsZW5ndGgsIHNvIHdlIGNhbiBjaGVja1xuICAgICAgICAvLyBtYXggc2l6ZSBvbmx5IGJ5IG9uZSBhcnJheSBsZW5ndGhcbiAgICAgICAgaWYgKGRlbHRhWC5sZW5ndGggPT09IE1BWF9CVUxLX1NJWkUpIHtcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCB1c2UgQ09QWSBvZiBvcmlnaW5hbCBidWxrLCBiZWNhdXNlIGluIEF4aW9zIHByb21pc2Ugd2UgY291bGRcbiAgICAgICAgICAgIC8vIGdldCBpbmNvcnJlY3Qgc3RhdGUhIFNvIHdlIHVzZSB0cmljayB3aXRoIHNsaWNlKCkgdG8gZ2V0IGEgZnVsbCBjb3B5LlxuICAgICAgICAgICAgLy8gU2luY2UgTUFYX0JVTEtfU0laRSBpcyBub3QgdmVyeSBiaWcsIHRoYXQgYXJyYXlzIGhhdmUgbm8gZWZmZWN0IG9uIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICB0aGlzLl9wb3N0RXZlbnRzQnVsayhkZWx0YVguc2xpY2UoKSwgZGVsdGFZLnNsaWNlKCkpO1xuXG4gICAgICAgICAgICAvLyBOb3cgY2xlYXIgdXAgYXJyYXlzIHRvIGhhbmRsZSBhbm90aGVyIHBhcnR5XG4gICAgICAgICAgICBkZWx0YVguc3BsaWNlKDAsIGRlbHRhWC5sZW5ndGgpO1xuICAgICAgICAgICAgZGVsdGFZLnNwbGljZSgwLCBkZWx0YVkubGVuZ3RoKTtcbiAgICAgICAgICAgIGV2ZW50Q291bnRlciA9IC0xXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkZWx0YVg6IGRlbHRhWCxcbiAgICAgICAgICAgIGRlbHRhWTogZGVsdGFZLFxuICAgICAgICAgICAgZXZlbnRDb3VudGVyOiBldmVudENvdW50ZXIgKyAxXG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIF9wb3N0RXZlbnRzQnVsayA9ICh4Q29yZHMsIHlDb3Jkcywgc3VjY2Vzc0NhbGxiYWNrID0gbnVsbCkgPT4ge1xuICAgICAgICBBeGlvcy5wb3N0KCcvZXZlbnRzJywge1xuICAgICAgICAgICAgeDogeENvcmRzLFxuICAgICAgICAgICAgeTogeUNvcmRzXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjayAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgX21ha2VSYW5kb21BcnJheSA9IChtaW4sIG1heCwgc2l6ZSkgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0QXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdEFycmF5LnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoc2l6ZSkpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlYXJjaFZhbHVlOiByZXN1bHRBcnJheVtyYW5kb21JbmRleF0sXG4gICAgICAgICAgICByYW5kb21BcnJheTogcmVzdWx0QXJyYXlcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgc2F2ZVJlc3VsdHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHtuaWNrbmFtZSwgZGVsdGFYLCBkZWx0YVksIGNvdW50ZXJ9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgY2xvc2VDb25uZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgQXhpb3MucG9zdCgnL2ZpbicsIHtcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXG4gICAgICAgICAgICAgICAgdG90YWxTY29yZTogY291bnRlcixcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9wb3N0RXZlbnRzQnVsayhkZWx0YVgsIGRlbHRhWSwgY2xvc2VDb25uZWN0aW9uKVxuICAgIH07XG5cbiAgICBvbkdhbWVTdGFydCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBnYW1lU3RhcnRlZDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgb25HYW1lU3RvcCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qge25pY2tuYW1lLCBjb3VudGVyfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9naW46IFwiLCBuaWNrbmFtZSwgXCIgU2NvcmU6IFwiLCBjb3VudGVyKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBnYW1lU3RhcnRlZDogZmFsc2UsXG4gICAgICAgICAgICBnYW1lUGxheWVkOiB0cnVlLFxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICByZW5kZXJHYW1lRmllbGQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IG9uTW91c2VNb3ZlPXt0aGlzLl9vbk1vdXNlTW92ZX0gY2xhc3NOYW1lPXsnY29udGFpbmVyJ30+XG4gICAgICAgICAgICAgICAgPHA+0J3QsNC50LTQuNGC0LUg0YfQuNGB0LvQvjoge3RoaXMuc3RhdGUuc2VhcmNoVmFsdWV9PC9wPlxuICAgICAgICAgICAgICAgIDxHYW1lRmllbGRcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3RoaXMuc3RhdGUucmFuZG9tQXJyYXl9XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvblJlZnJlc2g9e3RoaXMucmVmcmVzaFZhbHVlc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgINCS0LDRiCDRgdGH0LXRgjoge3RoaXMuc3RhdGUuY291bnRlcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8VGltZXIgdGltZXJTdG9wPXt0aGlzLm9uR2FtZVN0b3B9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2lzTG9nb24sIGdhbWVTdGFydGVkLCBnYW1lUGxheWVkLCBuaWNrbmFtZSwgY291bnRlcn0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAoaXNMb2dvbikge1xuICAgICAgICAgICAgaWYgKGdhbWVTdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyR2FtZUZpZWxkKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxHYW1lUnVsZXMgbmlja25hbWU9e25pY2tuYW1lfSB0b3RhbFNjb3JlPXtjb3VudGVyfSBnYW1lUGxheWVkPXtnYW1lUGxheWVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uR2FtZVN0YXJ0PXt0aGlzLm9uR2FtZVN0YXJ0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uR2FtZVNhdmU9e3RoaXMuc2F2ZVJlc3VsdHN9Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA8TG9naW5TY3JlZW4gb25Ob3RpZnk9e3RoaXMuc2V0TG9naW5OYW1lfS8+XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgUmVhY3RET00ucmVuZGVyKDxHYW1lQ29udGFpbmVyLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJykpO1xufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOdW1iZXIgZnJvbSAnLi9udW1iZXInO1xuXG5cbmNsYXNzIEdhbWVGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtpdGVtcywgc2VhcmNoVmFsdWV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY29udGFpbmVyIGZpZWxkJ30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncm93J30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NvbC00J30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlciB2YWx1ZT17aXRlbXNbMF19IHNlYXJjaFZhbHVlPXtzZWFyY2hWYWx1ZX0gb25Ob3RpZnk9e3RoaXMucHJvcHMub25SZWZyZXNofS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY29sLTQnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyIHZhbHVlPXtpdGVtc1sxXX0gc2VhcmNoVmFsdWU9e3NlYXJjaFZhbHVlfSBvbk5vdGlmeT17dGhpcy5wcm9wcy5vblJlZnJlc2h9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjb2wtNCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXIgdmFsdWU9e2l0ZW1zWzJdfSBzZWFyY2hWYWx1ZT17c2VhcmNoVmFsdWV9IG9uTm90aWZ5PXt0aGlzLnByb3BzLm9uUmVmcmVzaH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Jvdyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjb2wtNCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXIgdmFsdWU9e2l0ZW1zWzNdfSBzZWFyY2hWYWx1ZT17c2VhcmNoVmFsdWV9IG9uTm90aWZ5PXt0aGlzLnByb3BzLm9uUmVmcmVzaH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NvbC00J30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlciB2YWx1ZT17aXRlbXNbNF19IHNlYXJjaFZhbHVlPXtzZWFyY2hWYWx1ZX0gb25Ob3RpZnk9e3RoaXMucHJvcHMub25SZWZyZXNofS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY29sLTQnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyIHZhbHVlPXtpdGVtc1s1XX0gc2VhcmNoVmFsdWU9e3NlYXJjaFZhbHVlfSBvbk5vdGlmeT17dGhpcy5wcm9wcy5vblJlZnJlc2h9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydyb3cnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY29sLTQnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyIHZhbHVlPXtpdGVtc1s2XX0gc2VhcmNoVmFsdWU9e3NlYXJjaFZhbHVlfSBvbk5vdGlmeT17dGhpcy5wcm9wcy5vblJlZnJlc2h9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjb2wtNCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXIgdmFsdWU9e2l0ZW1zWzddfSBzZWFyY2hWYWx1ZT17c2VhcmNoVmFsdWV9IG9uTm90aWZ5PXt0aGlzLnByb3BzLm9uUmVmcmVzaH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NvbC00J30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlciB2YWx1ZT17aXRlbXNbOF19IHNlYXJjaFZhbHVlPXtzZWFyY2hWYWx1ZX0gb25Ob3RpZnk9e3RoaXMucHJvcHMub25SZWZyZXNofS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVGaWVsZDsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuXG5jbGFzcyBHYW1lUnVsZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlclJ1bGVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydhbGVydCBhbGVydC1pbmZvJ30gcm9sZT17J2FsZXJ0J30+XG4gICAgICAgICAgICAgICAg0J/RgNC40LLQtdGCLCA8Yj57dGhpcy5wcm9wcy5uaWNrbmFtZX08L2I+ISA8YnIvPlxuICAgICAgICAgICAgICAgINCSINGN0YLQvtC5INC40LPRgNC1INGC0LXQsdC1INC90LXQvtCx0YXQvtC00LjQvNC+INC90LDQudGC0Lgg0LrQsNC6INC80L7QttC90L4g0LHQvtC70YzRiNC1INGH0LjRgdC10Lsg0LfQsCDQtNCy0LUg0LzQuNC90YPRgtGLLiA8YnIvPlxuICAgICAgICAgICAgICAgINCU0LvRjyDQvdCw0YfQsNC70LAg0L3QsNC20LzQuCDQvdCwINC60L3QvtC/0LrRgyDQodGC0LDRgNGCLlxuICAgICAgICAgICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMub25HYW1lU3RhcnR9IGNsYXNzTmFtZT17J2J0biBidG4tc3VjY2Vzcyd9PtCh0YLQsNGA0YI8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfTtcblxuICAgIHJlbmRlclNjb3JlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7bmlja25hbWUsIHRvdGFsU2NvcmV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYWxlcnQgYWxlcnQtc3VjY2Vzcyd9IHJvbGU9eydhbGVydCd9PlxuICAgICAgICAgICAgICAgIDxiPtCi0LLQvtC1INC40LzRjzo8L2I+IHtuaWNrbmFtZX0sIDxici8+XG4gICAgICAgICAgICAgICAgPGI+0JrQvtC70LjRh9C10YHRgtCy0L4g0L7Rh9C60L7Qsjo8L2I+IHt0b3RhbFNjb3JlfSA8YnIvPlxuICAgICAgICAgICAgICAgINCh0L/QsNGB0LjQsdC+INC30LAg0LjQs9GA0YMhXG4gICAgICAgICAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5vbkdhbWVTYXZlfSBjbGFzc05hbWU9eydidG4gYnRuLXN1Y2Nlc3MnfT7QodC+0YXRgNCw0L3QuNGC0Ywg0YDQtdC30YPQu9GM0YLQsNGCITwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5nYW1lUGxheWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJTY29yZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJSdWxlcygpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVSdWxlczsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5cbmNsYXNzIExvZ2luU2NyZWVuIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBuaWNrbmFtZTogJydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBuaWNrbmFtZTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgb25Mb2dpbiA9IChlKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25Ob3RpZnkodGhpcy5zdGF0ZS5uaWNrbmFtZSlcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydqdW1ib3Ryb24nfT5cbiAgICAgICAgICAgICAgICA8aDI+0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0LLQtdC00LjRgtC1INGB0LLQvtC1INC40LzRjzwvaDI+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUubmlja25hbWV9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uTG9naW59IGNsYXNzTmFtZT17J2J0biBidG4tcHJpbWFyeSd9PkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5TY3JlZW47IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cblxuY2xhc3MgTnVtYmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBidG5TdHlsZTogJ2J0bi1zZWNvbmRhcnknXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNldFN0YXRlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGJ0blN0eWxlOiAnYnRuLXNlY29uZGFyeSdcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBidG5TdHlsZTogJ2J0bi1zdWNjZXNzJ1xuICAgICAgICB9LCB0aGlzLnByb3BzLm9uTm90aWZ5KCkpO1xuICAgICAgICBzZXRUaW1lb3V0KHRoaXMucmVzZXRTdGF0ZSwgMTAwMClcbiAgICB9O1xuXG4gICAgZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYnRuU3R5bGU6ICdidG4tZGFuZ2VyJ1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLnJlc2V0U3RhdGUsIDEwMDApXG4gICAgfTtcblxuICAgIG9uQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2hWYWx1ZSA9IHBhcnNlSW50KHRoaXMucHJvcHMuc2VhcmNoVmFsdWUpLFxuICAgICAgICAgICAgICBidXR0b25WYWx1ZSA9IHBhcnNlSW50KHRoaXMucHJvcHMudmFsdWUpO1xuICAgICAgICBpZiAoc2VhcmNoVmFsdWUgPT09IGJ1dHRvblZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3MoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lcnJvcigpXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGJ0blN0eWxlID0gdGhpcy5zdGF0ZS5idG5TdHlsZTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjb2wtNCB0ZXh0LWNlbnRlcid9PlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vbkNsaWNrfSBjbGFzc05hbWU9e1wiYnRuIFwiICsgYnRuU3R5bGV9Pnt2YWx1ZX08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXI7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFRJTUVfSU5URVJWQUwgPSAxMjAwMDA7XG5cbmNsYXNzIFRpbWVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc3RhcnQ6IG51bGwsXG4gICAgICAgICAgICB0aW1lcjogbnVsbCxcbiAgICAgICAgICAgIGNvdW50ZG93bjogbnVsbCxcbiAgICAgICAgICAgIGVsYXBzZWQ6IDAsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aWMgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZWxhcHNlZDogbmV3IERhdGUoKSAtIHRoaXMuc3RhdGUuc3RhcnRcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGltZXI6IHNldFRpbWVvdXQodGhpcy5wcm9wcy50aW1lclN0b3AsIFRJTUVfSU5URVJWQUwpLFxuICAgICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICBjb3VudGRvd246IHNldEludGVydmFsKHRoaXMudGljLCA1MClcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5jb3VudGRvd24pO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBzZWNvbmRzID0gTWF0aC5yb3VuZCh0aGlzLnN0YXRlLmVsYXBzZWQgLyAxMDAwKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxwPtCS0YDQtdC80Y8g0L/RgNC+0YjQu9C+OiB7c2Vjb25kc30g0LjQtyAxMjAg0YHQtdC60YPQvdC0PC9wPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lcjsiXSwic291cmNlUm9vdCI6IiJ9