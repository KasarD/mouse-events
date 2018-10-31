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

var MAX_BULK_SIZE = 100;

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
            // console.log("X: ", e.screenX, " Y: ", e.screenY);
            var _this$state = _this.state,
                deltaX = _this$state.deltaX,
                deltaY = _this$state.deltaY,
                eventCounter = _this$state.eventCounter;

            // Получаем координаты x и y для текущего положения курсора через событие

            deltaX.push(e.screenX);
            deltaY.push(e.screenY);

            // Подразумевается, что размерность deltaX равна размерности deltaY
            if (deltaX.length === MAX_BULK_SIZE) {
                // Мы должны сделать копию оригинальных массивов, чтобы передать их в процедуру отправки на сервер,
                // т.к. иначе данная процедура может взять некорректные значения из текущего состояния компонента (обновление состояния происходит асинхронно)
                _this._postEventsBulk(deltaX.slice(), deltaY.slice());

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
            searchValue: null, // Значение, которое ищет пользователь в данный момент
            randomArray: [], // Рандомные значения для заполнения кнопок
            counter: 0, // Общее количество правильных ответов

            isLogon: false, // Пользователь залогинился?
            nickname: '', // Содержит никнейм текущего пользователя

            gameStarted: false, // Игра началась?
            gamePlayed: false, // Игра сыграна?

            deltaX: [], // Временный масив для координат мыши по X
            deltaY: [], // Аналогично по Y
            eventCounter: 0 // Счетчик значений во временном ханилище
        };
        return _this;
    }

    /*
     * При первичном рендеринге компонента мы генерируем рандомный массив чисел
     */


    /*
     * Логика обновления вынесена в данный метод, чтоб его можно было использовать в качестве callback'a при
    * выборе правильного ответа пользователем
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

var TIME_INTERVAL = 7000;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvanMvY29tcG9uZW50cy9nYW1lX2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3N0YXRpYy9qcy9jb21wb25lbnRzL2dhbWVfcnVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2pzL2NvbXBvbmVudHMvbG9naW5fc2NyZWVuLmpzIiwid2VicGFjazovLy8uL3N0YXRpYy9qcy9jb21wb25lbnRzL251bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvanMvY29tcG9uZW50cy90aW1lci5qcyJdLCJuYW1lcyI6WyJNQVhfQlVMS19TSVpFIiwiR2FtZUNvbnRhaW5lciIsInByb3BzIiwiY29tcG9uZW50RGlkTW91bnQiLCJfbWFrZVJhbmRvbUFycmF5IiwicmVmcmVzaFZhbHVlcyIsImNvdW50ZXIiLCJzdGF0ZSIsInNldFN0YXRlIiwic2V0TG9naW5OYW1lIiwibmFtZSIsIm5pY2tuYW1lIiwiaXNMb2dvbiIsIl9vbk1vdXNlTW92ZSIsImUiLCJkZWx0YVgiLCJkZWx0YVkiLCJldmVudENvdW50ZXIiLCJwdXNoIiwic2NyZWVuWCIsInNjcmVlblkiLCJsZW5ndGgiLCJfcG9zdEV2ZW50c0J1bGsiLCJzbGljZSIsInNwbGljZSIsInhDb3JkcyIsInlDb3JkcyIsInN1Y2Nlc3NDYWxsYmFjayIsIkF4aW9zIiwicG9zdCIsIngiLCJ5IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImNhdGNoIiwiZXJyb3IiLCJtaW4iLCJtYXgiLCJzaXplIiwicmVzdWx0QXJyYXkiLCJpIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tSW5kZXgiLCJzZWFyY2hWYWx1ZSIsInJhbmRvbUFycmF5Iiwic2F2ZVJlc3VsdHMiLCJjbG9zZUNvbm5lY3Rpb24iLCJ0b3RhbFNjb3JlIiwib25HYW1lU3RhcnQiLCJnYW1lU3RhcnRlZCIsIm9uR2FtZVN0b3AiLCJnYW1lUGxheWVkIiwicmVuZGVyR2FtZUZpZWxkIiwiQ29tcG9uZW50IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiUmVhY3RET00iLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCIsIkdhbWVGaWVsZCIsIml0ZW1zIiwib25SZWZyZXNoIiwiR2FtZVJ1bGVzIiwicmVuZGVyUnVsZXMiLCJyZW5kZXJTY29yZSIsIm9uR2FtZVNhdmUiLCJMb2dpblNjcmVlbiIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkxvZ2luIiwib25Ob3RpZnkiLCJOdW1iZXIiLCJyZXNldFN0YXRlIiwiYnRuU3R5bGUiLCJzdWNjZXNzIiwic2V0VGltZW91dCIsIm9uQ2xpY2siLCJwYXJzZUludCIsImJ1dHRvblZhbHVlIiwiVElNRV9JTlRFUlZBTCIsIlRpbWVyIiwidGljIiwiZWxhcHNlZCIsIkRhdGUiLCJzdGFydCIsInRpbWVyIiwidGltZXJTdG9wIiwiY291bnRkb3duIiwic2V0SW50ZXJ2YWwiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNsZWFySW50ZXJ2YWwiLCJzZWNvbmRzIiwicm91bmQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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QUNSQSxLQURROztBQUFBLGNBV2xCb0YsR0FYa0IsR0FXWixZQUFNO0FBQ1Isa0JBQUs5RSxRQUFMLENBQWM7QUFDVitFLHlCQUFTLElBQUlDLElBQUosS0FBYSxNQUFLakYsS0FBTCxDQUFXa0Y7QUFEdkIsYUFBZDtBQUdILFNBZmlCOztBQUFBLGNBaUJsQnRGLGlCQWpCa0IsR0FpQkUsWUFBTTtBQUN0QixrQkFBS0ssUUFBTCxDQUFjO0FBQ1ZrRix1QkFBT1YsV0FBVyxNQUFLOUUsS0FBTCxDQUFXeUYsU0FBdEIsRUFBaUNQLGFBQWpDLENBREc7QUFFVkssdUJBQU8sSUFBSUQsSUFBSixFQUZHO0FBR1ZJLDJCQUFXQyxZQUFZLE1BQUtQLEdBQWpCLEVBQXNCLEVBQXRCO0FBSEQsYUFBZDtBQUtILFNBdkJpQjs7QUFBQSxjQXlCbEJRLG9CQXpCa0IsR0F5QkssWUFBTTtBQUN6QkMsMEJBQWMsTUFBS3hGLEtBQUwsQ0FBV3FGLFNBQXpCO0FBQ0gsU0EzQmlCOztBQUdkLGNBQUtyRixLQUFMLEdBQWE7QUFDVGtGLG1CQUFPLElBREU7QUFFVEMsbUJBQU8sSUFGRTtBQUdURSx1QkFBVyxJQUhGO0FBSVRMLHFCQUFTO0FBSkEsU0FBYjtBQUhjO0FBU2pCOzs7O2lDQW9CUTtBQUNMLGdCQUFJUyxVQUFVckQsS0FBS3NELEtBQUwsQ0FBVyxLQUFLMUYsS0FBTCxDQUFXZ0YsT0FBWCxHQUFxQixJQUFoQyxDQUFkO0FBQ0EsbUJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBa0JTLHVCQUFsQjtBQUFBO0FBQUEsYUFESjtBQUdIOzs7O0VBbkNldkMsZ0I7O2tCQXNDTDRCLEsiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3N0YXRpYy9qcy9hcHAuanNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IEdhbWVGaWVsZCBmcm9tICcuL2NvbXBvbmVudHMvZ2FtZV9maWVsZCc7XG5pbXBvcnQgTG9naW5TY3JlZW4gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luX3NjcmVlbic7XG5pbXBvcnQgR2FtZVJ1bGVzIGZyb20gJy4vY29tcG9uZW50cy9nYW1lX3J1bGVzJztcbmltcG9ydCBUaW1lciBmcm9tICcuL2NvbXBvbmVudHMvdGltZXInO1xuXG5jb25zdCBNQVhfQlVMS19TSVpFID0gMTAwO1xuXG5cbmNsYXNzIEdhbWVDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlYXJjaFZhbHVlOiBudWxsLCAvLyDQl9C90LDRh9C10L3QuNC1LCDQutC+0YLQvtGA0L7QtSDQuNGJ0LXRgiDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0LIg0LTQsNC90L3Ri9C5INC80L7QvNC10L3RglxuICAgICAgICAgICAgcmFuZG9tQXJyYXk6IFtdLCAgIC8vINCg0LDQvdC00L7QvNC90YvQtSDQt9C90LDRh9C10L3QuNGPINC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjyDQutC90L7Qv9C+0LpcbiAgICAgICAgICAgIGNvdW50ZXI6IDAsICAgICAgICAvLyDQntCx0YnQtdC1INC60L7Qu9C40YfQtdGB0YLQstC+INC/0YDQsNCy0LjQu9GM0L3Ri9GFINC+0YLQstC10YLQvtCyXG5cbiAgICAgICAgICAgIGlzTG9nb246IGZhbHNlLCAgICAvLyDQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0LfQsNC70L7Qs9C40L3QuNC70YHRjz9cbiAgICAgICAgICAgIG5pY2tuYW1lOiAnJywgICAgICAvLyDQodC+0LTQtdGA0LbQuNGCINC90LjQutC90LXQudC8INGC0LXQutGD0YnQtdCz0L4g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXG5cbiAgICAgICAgICAgIGdhbWVTdGFydGVkOiBmYWxzZSwgLy8g0JjQs9GA0LAg0L3QsNGH0LDQu9Cw0YHRjD9cbiAgICAgICAgICAgIGdhbWVQbGF5ZWQ6IGZhbHNlLCAgLy8g0JjQs9GA0LAg0YHRi9Cz0YDQsNC90LA/XG5cbiAgICAgICAgICAgIGRlbHRhWDogW10sICAgICAgICAgLy8g0JLRgNC10LzQtdC90L3Ri9C5INC80LDRgdC40LIg0LTQu9GPINC60L7QvtGA0LTQuNC90LDRgiDQvNGL0YjQuCDQv9C+IFhcbiAgICAgICAgICAgIGRlbHRhWTogW10sICAgICAgICAgLy8g0JDQvdCw0LvQvtCz0LjRh9C90L4g0L/QviBZXG4gICAgICAgICAgICBldmVudENvdW50ZXI6IDAsICAgIC8vINCh0YfQtdGC0YfQuNC6INC30L3QsNGH0LXQvdC40Lkg0LLQviDQstGA0LXQvNC10L3QvdC+0Lwg0YXQsNC90LjQu9C40YnQtVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiDQn9GA0Lgg0L/QtdGA0LLQuNGH0L3QvtC8INGA0LXQvdC00LXRgNC40L3Qs9C1INC60L7QvNC/0L7QvdC10L3RgtCwINC80Ysg0LPQtdC90LXRgNC40YDRg9C10Lwg0YDQsNC90LTQvtC80L3Ri9C5INC80LDRgdGB0LjQsiDRh9C40YHQtdC7XG4gICAgICovXG4gICAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX21ha2VSYW5kb21BcnJheSgxLCAyMCwgOSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICog0JvQvtCz0LjQutCwINC+0LHQvdC+0LLQu9C10L3QuNGPINCy0YvQvdC10YHQtdC90LAg0LIg0LTQsNC90L3Ri9C5INC80LXRgtC+0LQsINGH0YLQvtCxINC10LPQviDQvNC+0LbQvdC+INCx0YvQu9C+INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQsiDQutCw0YfQtdGB0YLQstC1IGNhbGxiYWNrJ2Eg0L/RgNC4XG5cdCAqINCy0YvQsdC+0YDQtSDQv9GA0LDQstC40LvRjNC90L7Qs9C+INC+0YLQstC10YLQsCDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQvFxuICAgICAqL1xuICAgIHJlZnJlc2hWYWx1ZXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSB0aGlzLnN0YXRlLmNvdW50ZXI7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY291bnRlcjogY291bnRlciArIDEsXG4gICAgICAgIH0sIHRoaXMuX21ha2VSYW5kb21BcnJheSgxLCAyMCwgOSkpO1xuICAgIH07XG5cbiAgICBzZXRMb2dpbk5hbWUgPSAobmFtZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG5pY2tuYW1lOiBuYW1lLFxuICAgICAgICAgICAgaXNMb2dvbjogdHJ1ZVxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICBfb25Nb3VzZU1vdmUgPSAoZSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlg6IFwiLCBlLnNjcmVlblgsIFwiIFk6IFwiLCBlLnNjcmVlblkpO1xuICAgICAgICBsZXQge2RlbHRhWCwgZGVsdGFZLCBldmVudENvdW50ZXJ9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LDQtdC8INC60L7QvtGA0LTQuNC90LDRgtGLIHgg0LggeSDQtNC70Y8g0YLQtdC60YPRidC10LPQviDQv9C+0LvQvtC20LXQvdC40Y8g0LrRg9GA0YHQvtGA0LAg0YfQtdGA0LXQtyDRgdC+0LHRi9GC0LjQtVxuICAgICAgICBkZWx0YVgucHVzaChlLnNjcmVlblgpO1xuICAgICAgICBkZWx0YVkucHVzaChlLnNjcmVlblkpO1xuXG4gICAgICAgIC8vINCf0L7QtNGA0LDQt9GD0LzQtdCy0LDQtdGC0YHRjywg0YfRgtC+INGA0LDQt9C80LXRgNC90L7RgdGC0YwgZGVsdGFYINGA0LDQstC90LAg0YDQsNC30LzQtdGA0L3QvtGB0YLQuCBkZWx0YVlcbiAgICAgICAgaWYgKGRlbHRhWC5sZW5ndGggPT09IE1BWF9CVUxLX1NJWkUpIHtcbiAgICAgICAgICAgIC8vINCc0Ysg0LTQvtC70LbQvdGLINGB0LTQtdC70LDRgtGMINC60L7Qv9C40Y4g0L7RgNC40LPQuNC90LDQu9GM0L3Ri9GFINC80LDRgdGB0LjQstC+0LIsINGH0YLQvtCx0Ysg0L/QtdGA0LXQtNCw0YLRjCDQuNGFINCyINC/0YDQvtGG0LXQtNGD0YDRgyDQvtGC0L/RgNCw0LLQutC4INC90LAg0YHQtdGA0LLQtdGALFxuICAgICAgICAgICAgLy8g0YIu0LouINC40L3QsNGH0LUg0LTQsNC90L3QsNGPINC/0YDQvtGG0LXQtNGD0YDQsCDQvNC+0LbQtdGCINCy0LfRj9GC0Ywg0L3QtdC60L7RgNGA0LXQutGC0L3Ri9C1INC30L3QsNGH0LXQvdC40Y8g0LjQtyDRgtC10LrRg9GJ0LXQs9C+INGB0L7RgdGC0L7Rj9C90LjRjyDQutC+0LzQv9C+0L3QtdC90YLQsCAo0L7QsdC90L7QstC70LXQvdC40LUg0YHQvtGB0YLQvtGP0L3QuNGPINC/0YDQvtC40YHRhdC+0LTQuNGCINCw0YHQuNC90YXRgNC+0L3QvdC+KVxuICAgICAgICAgICAgdGhpcy5fcG9zdEV2ZW50c0J1bGsoZGVsdGFYLnNsaWNlKCksIGRlbHRhWS5zbGljZSgpKTtcblxuICAgICAgICAgICAgZGVsdGFYLnNwbGljZSgwLCBkZWx0YVgubGVuZ3RoKTtcbiAgICAgICAgICAgIGRlbHRhWS5zcGxpY2UoMCwgZGVsdGFZLmxlbmd0aCk7XG4gICAgICAgICAgICBldmVudENvdW50ZXIgPSAtMVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZGVsdGFYOiBkZWx0YVgsXG4gICAgICAgICAgICBkZWx0YVk6IGRlbHRhWSxcbiAgICAgICAgICAgIGV2ZW50Q291bnRlcjogZXZlbnRDb3VudGVyICsgMVxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICBfcG9zdEV2ZW50c0J1bGsgPSAoeENvcmRzLCB5Q29yZHMsIHN1Y2Nlc3NDYWxsYmFjayA9IG51bGwpID0+IHtcbiAgICAgICAgQXhpb3MucG9zdCgnL2V2ZW50cycsIHtcbiAgICAgICAgICAgIHg6IHhDb3JkcyxcbiAgICAgICAgICAgIHk6IHlDb3Jkc1xuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2sgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjaygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIF9tYWtlUmFuZG9tQXJyYXkgPSAobWluLCBtYXgsIHNpemUpID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdEFycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHRBcnJheS5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHNpemUpKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWFyY2hWYWx1ZTogcmVzdWx0QXJyYXlbcmFuZG9tSW5kZXhdLFxuICAgICAgICAgICAgcmFuZG9tQXJyYXk6IHJlc3VsdEFycmF5XG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIHNhdmVSZXN1bHRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7bmlja25hbWUsIGRlbHRhWCwgZGVsdGFZLCBjb3VudGVyfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IGNsb3NlQ29ubmVjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIEF4aW9zLnBvc3QoJy9maW4nLCB7XG4gICAgICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxuICAgICAgICAgICAgICAgIHRvdGFsU2NvcmU6IGNvdW50ZXIsXG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fcG9zdEV2ZW50c0J1bGsoZGVsdGFYLCBkZWx0YVksIGNsb3NlQ29ubmVjdGlvbilcbiAgICB9O1xuXG4gICAgb25HYW1lU3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZ2FtZVN0YXJ0ZWQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIG9uR2FtZVN0b3AgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHtuaWNrbmFtZSwgY291bnRlcn0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2luOiBcIiwgbmlja25hbWUsIFwiIFNjb3JlOiBcIiwgY291bnRlcik7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZ2FtZVN0YXJ0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZ2FtZVBsYXllZDogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmVuZGVyR2FtZUZpZWxkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBvbk1vdXNlTW92ZT17dGhpcy5fb25Nb3VzZU1vdmV9IGNsYXNzTmFtZT17J2NvbnRhaW5lcid9PlxuICAgICAgICAgICAgICAgIDxwPtCd0LDQudC00LjRgtC1INGH0LjRgdC70L46IHt0aGlzLnN0YXRlLnNlYXJjaFZhbHVlfTwvcD5cbiAgICAgICAgICAgICAgICA8R2FtZUZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zPXt0aGlzLnN0YXRlLnJhbmRvbUFycmF5fVxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hWYWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25SZWZyZXNoPXt0aGlzLnJlZnJlc2hWYWx1ZXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICDQktCw0Ygg0YHRh9C10YI6IHt0aGlzLnN0YXRlLmNvdW50ZXJ9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFRpbWVyIHRpbWVyU3RvcD17dGhpcy5vbkdhbWVTdG9wfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtpc0xvZ29uLCBnYW1lU3RhcnRlZCwgZ2FtZVBsYXllZCwgbmlja25hbWUsIGNvdW50ZXJ9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYgKGlzTG9nb24pIHtcbiAgICAgICAgICAgIGlmIChnYW1lU3RhcnRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckdhbWVGaWVsZCgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiA8R2FtZVJ1bGVzIG5pY2tuYW1lPXtuaWNrbmFtZX0gdG90YWxTY29yZT17Y291bnRlcn0gZ2FtZVBsYXllZD17Z2FtZVBsYXllZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkdhbWVTdGFydD17dGhpcy5vbkdhbWVTdGFydH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkdhbWVTYXZlPXt0aGlzLnNhdmVSZXN1bHRzfS8+XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gPExvZ2luU2NyZWVuIG9uTm90aWZ5PXt0aGlzLnNldExvZ2luTmFtZX0vPlxuICAgICAgICB9XG4gICAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoZSkge1xuICAgIFJlYWN0RE9NLnJlbmRlcig8R2FtZUNvbnRhaW5lci8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpKTtcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTnVtYmVyIGZyb20gJy4vbnVtYmVyJztcblxuXG5jbGFzcyBHYW1lRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7aXRlbXMsIHNlYXJjaFZhbHVlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NvbnRhaW5lciBmaWVsZCd9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Jvdyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjb2wtNCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXIgdmFsdWU9e2l0ZW1zWzBdfSBzZWFyY2hWYWx1ZT17c2VhcmNoVmFsdWV9IG9uTm90aWZ5PXt0aGlzLnByb3BzLm9uUmVmcmVzaH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NvbC00J30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlciB2YWx1ZT17aXRlbXNbMV19IHNlYXJjaFZhbHVlPXtzZWFyY2hWYWx1ZX0gb25Ob3RpZnk9e3RoaXMucHJvcHMub25SZWZyZXNofS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY29sLTQnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyIHZhbHVlPXtpdGVtc1syXX0gc2VhcmNoVmFsdWU9e3NlYXJjaFZhbHVlfSBvbk5vdGlmeT17dGhpcy5wcm9wcy5vblJlZnJlc2h9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydyb3cnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY29sLTQnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyIHZhbHVlPXtpdGVtc1szXX0gc2VhcmNoVmFsdWU9e3NlYXJjaFZhbHVlfSBvbk5vdGlmeT17dGhpcy5wcm9wcy5vblJlZnJlc2h9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjb2wtNCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXIgdmFsdWU9e2l0ZW1zWzRdfSBzZWFyY2hWYWx1ZT17c2VhcmNoVmFsdWV9IG9uTm90aWZ5PXt0aGlzLnByb3BzLm9uUmVmcmVzaH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NvbC00J30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlciB2YWx1ZT17aXRlbXNbNV19IHNlYXJjaFZhbHVlPXtzZWFyY2hWYWx1ZX0gb25Ob3RpZnk9e3RoaXMucHJvcHMub25SZWZyZXNofS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncm93J30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NvbC00J30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlciB2YWx1ZT17aXRlbXNbNl19IHNlYXJjaFZhbHVlPXtzZWFyY2hWYWx1ZX0gb25Ob3RpZnk9e3RoaXMucHJvcHMub25SZWZyZXNofS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY29sLTQnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyIHZhbHVlPXtpdGVtc1s3XX0gc2VhcmNoVmFsdWU9e3NlYXJjaFZhbHVlfSBvbk5vdGlmeT17dGhpcy5wcm9wcy5vblJlZnJlc2h9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjb2wtNCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXIgdmFsdWU9e2l0ZW1zWzhdfSBzZWFyY2hWYWx1ZT17c2VhcmNoVmFsdWV9IG9uTm90aWZ5PXt0aGlzLnByb3BzLm9uUmVmcmVzaH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lRmllbGQ7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cblxuY2xhc3MgR2FtZVJ1bGVzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXJSdWxlcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYWxlcnQgYWxlcnQtaW5mbyd9IHJvbGU9eydhbGVydCd9PlxuICAgICAgICAgICAgICAgINCf0YDQuNCy0LXRgiwgPGI+e3RoaXMucHJvcHMubmlja25hbWV9PC9iPiEgPGJyLz5cbiAgICAgICAgICAgICAgICDQkiDRjdGC0L7QuSDQuNCz0YDQtSDRgtC10LHQtSDQvdC10L7QsdGF0L7QtNC40LzQviDQvdCw0LnRgtC4INC60LDQuiDQvNC+0LbQvdC+INCx0L7Qu9GM0YjQtSDRh9C40YHQtdC7INC30LAg0LTQstC1INC80LjQvdGD0YLRiy4gPGJyLz5cbiAgICAgICAgICAgICAgICDQlNC70Y8g0L3QsNGH0LDQu9CwINC90LDQttC80Lgg0L3QsCDQutC90L7Qv9C60YMg0KHRgtCw0YDRgi5cbiAgICAgICAgICAgICAgICA8YnIvPjxici8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uR2FtZVN0YXJ0fSBjbGFzc05hbWU9eydidG4gYnRuLXN1Y2Nlc3MnfT7QodGC0LDRgNGCPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH07XG5cbiAgICByZW5kZXJTY29yZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qge25pY2tuYW1lLCB0b3RhbFNjb3JlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnfSByb2xlPXsnYWxlcnQnfT5cbiAgICAgICAgICAgICAgICA8Yj7QotCy0L7QtSDQuNC80Y86PC9iPiB7bmlja25hbWV9LCA8YnIvPlxuICAgICAgICAgICAgICAgIDxiPtCa0L7Qu9C40YfQtdGB0YLQstC+INC+0YfQutC+0LI6PC9iPiB7dG90YWxTY29yZX0gPGJyLz5cbiAgICAgICAgICAgICAgICDQodC/0LDRgdC40LHQviDQt9CwINC40LPRgNGDIVxuICAgICAgICAgICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMub25HYW1lU2F2ZX0gY2xhc3NOYW1lPXsnYnRuIGJ0bi1zdWNjZXNzJ30+0KHQvtGF0YDQsNC90LjRgtGMINGA0LXQt9GD0LvRjNGC0LDRgiE8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZ2FtZVBsYXllZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyU2NvcmUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyUnVsZXMoKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lUnVsZXM7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuXG5jbGFzcyBMb2dpblNjcmVlbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbmlja25hbWU6ICcnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbmlja25hbWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIG9uTG9naW4gPSAoZSkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uTm90aWZ5KHRoaXMuc3RhdGUubmlja25hbWUpXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnanVtYm90cm9uJ30+XG4gICAgICAgICAgICAgICAgPGgyPtCf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDRgdCy0L7QtSDQuNC80Y88L2gyPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnN0YXRlLm5pY2tuYW1lfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vbkxvZ2lufSBjbGFzc05hbWU9eydidG4gYnRuLXByaW1hcnknfT5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luU2NyZWVuOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5cbmNsYXNzIE51bWJlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYnRuU3R5bGU6ICdidG4tc2Vjb25kYXJ5J1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXRTdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBidG5TdHlsZTogJ2J0bi1zZWNvbmRhcnknXG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIHN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYnRuU3R5bGU6ICdidG4tc3VjY2VzcydcbiAgICAgICAgfSwgdGhpcy5wcm9wcy5vbk5vdGlmeSgpKTtcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLnJlc2V0U3RhdGUsIDEwMDApXG4gICAgfTtcblxuICAgIGVycm9yID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGJ0blN0eWxlOiAnYnRuLWRhbmdlcidcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5yZXNldFN0YXRlLCAxMDAwKVxuICAgIH07XG5cbiAgICBvbkNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoVmFsdWUgPSBwYXJzZUludCh0aGlzLnByb3BzLnNlYXJjaFZhbHVlKSxcbiAgICAgICAgICAgICAgYnV0dG9uVmFsdWUgPSBwYXJzZUludCh0aGlzLnByb3BzLnZhbHVlKTtcbiAgICAgICAgaWYgKHNlYXJjaFZhbHVlID09PSBidXR0b25WYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zdWNjZXNzKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoKVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBidG5TdHlsZSA9IHRoaXMuc3RhdGUuYnRuU3R5bGU7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY29sLTQgdGV4dC1jZW50ZXInfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25DbGlja30gY2xhc3NOYW1lPXtcImJ0biBcIiArIGJ0blN0eWxlfT57dmFsdWV9PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBUSU1FX0lOVEVSVkFMID0gNzAwMDtcblxuY2xhc3MgVGltZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzdGFydDogbnVsbCxcbiAgICAgICAgICAgIHRpbWVyOiBudWxsLFxuICAgICAgICAgICAgY291bnRkb3duOiBudWxsLFxuICAgICAgICAgICAgZWxhcHNlZDogMCxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRpYyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlbGFwc2VkOiBuZXcgRGF0ZSgpIC0gdGhpcy5zdGF0ZS5zdGFydFxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aW1lcjogc2V0VGltZW91dCh0aGlzLnByb3BzLnRpbWVyU3RvcCwgVElNRV9JTlRFUlZBTCksXG4gICAgICAgICAgICBzdGFydDogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIGNvdW50ZG93bjogc2V0SW50ZXJ2YWwodGhpcy50aWMsIDUwKVxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnN0YXRlLmNvdW50ZG93bik7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHNlY29uZHMgPSBNYXRoLnJvdW5kKHRoaXMuc3RhdGUuZWxhcHNlZCAvIDEwMDApO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHA+0JLRgNC10LzRjyDQv9GA0L7RiNC70L46IHtzZWNvbmRzfSDQuNC3IDEyMCDRgdC10LrRg9C90LQ8L3A+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVyOyJdLCJzb3VyY2VSb290IjoiIn0=