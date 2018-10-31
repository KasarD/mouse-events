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
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, GameField);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GameField.__proto__ || Object.getPrototypeOf(GameField)).call.apply(_ref, [this].concat(args))), _this), _this.renderButton = function (value, key) {
            return _react2.default.createElement(
                'div',
                { className: 'col-4' },
                _react2.default.createElement(_number2.default, { key: key, value: value, searchValue: _this.props.searchValue, onNotify: _this.props.onRefresh })
            );
        }, _this.renderRow = function (values) {
            return _react2.default.createElement(
                'div',
                { className: 'row' },
                values.map(function (val, index) {
                    return _react2.default.createElement(_number2.default, { key: index, value: val, searchValue: _this.props.searchValue, onNotify: _this.props.onRefresh });
                })
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(GameField, [{
        key: 'render',
        value: function render() {
            var items = this.props.items;

            if (items.length === 0) {
                return "";
            } else {
                var rows = [this.renderRow(items.slice(0, 3)), this.renderRow(items.slice(3, 6)), this.renderRow(items.slice(6, 9))];

                return _react2.default.createElement(
                    'div',
                    { className: 'container field' },
                    rows
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvanMvY29tcG9uZW50cy9nYW1lX2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3N0YXRpYy9qcy9jb21wb25lbnRzL2dhbWVfcnVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2pzL2NvbXBvbmVudHMvbG9naW5fc2NyZWVuLmpzIiwid2VicGFjazovLy8uL3N0YXRpYy9qcy9jb21wb25lbnRzL251bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvanMvY29tcG9uZW50cy90aW1lci5qcyJdLCJuYW1lcyI6WyJNQVhfQlVMS19TSVpFIiwiR2FtZUNvbnRhaW5lciIsInByb3BzIiwiY29tcG9uZW50RGlkTW91bnQiLCJfbWFrZVJhbmRvbUFycmF5IiwicmVmcmVzaFZhbHVlcyIsImNvdW50ZXIiLCJzdGF0ZSIsInNldFN0YXRlIiwic2V0TG9naW5OYW1lIiwibmFtZSIsIm5pY2tuYW1lIiwiaXNMb2dvbiIsIl9vbk1vdXNlTW92ZSIsImUiLCJkZWx0YVgiLCJkZWx0YVkiLCJldmVudENvdW50ZXIiLCJwdXNoIiwic2NyZWVuWCIsInNjcmVlblkiLCJsZW5ndGgiLCJfcG9zdEV2ZW50c0J1bGsiLCJzbGljZSIsInNwbGljZSIsInhDb3JkcyIsInlDb3JkcyIsInN1Y2Nlc3NDYWxsYmFjayIsIkF4aW9zIiwicG9zdCIsIngiLCJ5IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImNhdGNoIiwiZXJyb3IiLCJtaW4iLCJtYXgiLCJzaXplIiwicmVzdWx0QXJyYXkiLCJpIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tSW5kZXgiLCJzZWFyY2hWYWx1ZSIsInJhbmRvbUFycmF5Iiwic2F2ZVJlc3VsdHMiLCJjbG9zZUNvbm5lY3Rpb24iLCJ0b3RhbFNjb3JlIiwib25HYW1lU3RhcnQiLCJnYW1lU3RhcnRlZCIsIm9uR2FtZVN0b3AiLCJnYW1lUGxheWVkIiwicmVuZGVyR2FtZUZpZWxkIiwiQ29tcG9uZW50IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiUmVhY3RET00iLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCIsIkdhbWVGaWVsZCIsInJlbmRlckJ1dHRvbiIsInZhbHVlIiwia2V5Iiwib25SZWZyZXNoIiwicmVuZGVyUm93IiwidmFsdWVzIiwibWFwIiwidmFsIiwiaW5kZXgiLCJpdGVtcyIsInJvd3MiLCJHYW1lUnVsZXMiLCJyZW5kZXJSdWxlcyIsInJlbmRlclNjb3JlIiwib25HYW1lU2F2ZSIsIkxvZ2luU2NyZWVuIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvbkxvZ2luIiwib25Ob3RpZnkiLCJOdW1iZXIiLCJyZXNldFN0YXRlIiwiYnRuU3R5bGUiLCJzdWNjZXNzIiwic2V0VGltZW91dCIsIm9uQ2xpY2siLCJwYXJzZUludCIsImJ1dHRvblZhbHVlIiwiVElNRV9JTlRFUlZBTCIsIlRpbWVyIiwidGljIiwiZWxhcHNlZCIsIkRhdGUiLCJzdGFydCIsInRpbWVyIiwidGltZXJTdG9wIiwiY291bnRkb3duIiwic2V0SW50ZXJ2YWwiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNsZWFySW50ZXJ2YWwiLCJzZWNvbmRzIiwicm91bmQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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QXFCLElBQWhDLENBQWQ7QUFDQSxtQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFrQlMsdUJBQWxCO0FBQUE7QUFBQSxhQURKO0FBR0g7Ozs7RUFuQ2UvQyxnQjs7a0JBc0NMb0MsSyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3RhdGljL2pzL2FwcC5qc1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgR2FtZUZpZWxkIGZyb20gJy4vY29tcG9uZW50cy9nYW1lX2ZpZWxkJztcbmltcG9ydCBMb2dpblNjcmVlbiBmcm9tICcuL2NvbXBvbmVudHMvbG9naW5fc2NyZWVuJztcbmltcG9ydCBHYW1lUnVsZXMgZnJvbSAnLi9jb21wb25lbnRzL2dhbWVfcnVsZXMnO1xuaW1wb3J0IFRpbWVyIGZyb20gJy4vY29tcG9uZW50cy90aW1lcic7XG5cbmNvbnN0IE1BWF9CVUxLX1NJWkUgPSAxMDA7XG5cblxuY2xhc3MgR2FtZUNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VhcmNoVmFsdWU6IG51bGwsIC8vINCX0L3QsNGH0LXQvdC40LUsINC60L7RgtC+0YDQvtC1INC40YnQtdGCINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQsiDQtNCw0L3QvdGL0Lkg0LzQvtC80LXQvdGCXG4gICAgICAgICAgICByYW5kb21BcnJheTogW10sICAgLy8g0KDQsNC90LTQvtC80L3Ri9C1INC30L3QsNGH0LXQvdC40Y8g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPINC60L3QvtC/0L7QulxuICAgICAgICAgICAgY291bnRlcjogMCwgICAgICAgIC8vINCe0LHRidC10LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0L/RgNCw0LLQuNC70YzQvdGL0YUg0L7RgtCy0LXRgtC+0LJcblxuICAgICAgICAgICAgaXNMb2dvbjogZmFsc2UsICAgIC8vINCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQt9Cw0LvQvtCz0LjQvdC40LvRgdGPP1xuICAgICAgICAgICAgbmlja25hbWU6ICcnLCAgICAgIC8vINCh0L7QtNC10YDQttC40YIg0L3QuNC60L3QtdC50Lwg0YLQtdC60YPRidC10LPQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cblxuICAgICAgICAgICAgZ2FtZVN0YXJ0ZWQ6IGZhbHNlLCAvLyDQmNCz0YDQsCDQvdCw0YfQsNC70LDRgdGMP1xuICAgICAgICAgICAgZ2FtZVBsYXllZDogZmFsc2UsICAvLyDQmNCz0YDQsCDRgdGL0LPRgNCw0L3QsD9cblxuICAgICAgICAgICAgZGVsdGFYOiBbXSwgICAgICAgICAvLyDQktGA0LXQvNC10L3QvdGL0Lkg0LzQsNGB0LjQsiDQtNC70Y8g0LrQvtC+0YDQtNC40L3QsNGCINC80YvRiNC4INC/0L4gWFxuICAgICAgICAgICAgZGVsdGFZOiBbXSwgICAgICAgICAvLyDQkNC90LDQu9C+0LPQuNGH0L3QviDQv9C+IFlcbiAgICAgICAgICAgIGV2ZW50Q291bnRlcjogMCwgICAgLy8g0KHRh9C10YLRh9C40Log0LfQvdCw0YfQtdC90LjQuSDQstC+INCy0YDQtdC80LXQvdC90L7QvCDRhdCw0L3QuNC70LjRidC1XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqINCf0YDQuCDQv9C10YDQstC40YfQvdC+0Lwg0YDQtdC90LTQtdGA0LjQvdCz0LUg0LrQvtC80L/QvtC90LXQvdGC0LAg0LzRiyDQs9C10L3QtdGA0LjRgNGD0LXQvCDRgNCw0L3QtNC+0LzQvdGL0Lkg0LzQsNGB0YHQuNCyINGH0LjRgdC10LtcbiAgICAgKi9cbiAgICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fbWFrZVJhbmRvbUFycmF5KDEsIDIwLCA5KTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgKiDQm9C+0LPQuNC60LAg0L7QsdC90L7QstC70LXQvdC40Y8g0LLRi9C90LXRgdC10L3QsCDQsiDQtNCw0L3QvdGL0Lkg0LzQtdGC0L7QtCwg0YfRgtC+0LEg0LXQs9C+INC80L7QttC90L4g0LHRi9C70L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINCyINC60LDRh9C10YHRgtCy0LUgY2FsbGJhY2snYSDQv9GA0Lhcblx0ICog0LLRi9Cx0L7RgNC1INC/0YDQsNCy0LjQu9GM0L3QvtCz0L4g0L7RgtCy0LXRgtCwINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC8XG4gICAgICovXG4gICAgcmVmcmVzaFZhbHVlcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY291bnRlciA9IHRoaXMuc3RhdGUuY291bnRlcjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb3VudGVyOiBjb3VudGVyICsgMSxcbiAgICAgICAgfSwgdGhpcy5fbWFrZVJhbmRvbUFycmF5KDEsIDIwLCA5KSk7XG4gICAgfTtcblxuICAgIHNldExvZ2luTmFtZSA9IChuYW1lKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbmlja25hbWU6IG5hbWUsXG4gICAgICAgICAgICBpc0xvZ29uOiB0cnVlXG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIF9vbk1vdXNlTW92ZSA9IChlKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiWDogXCIsIGUuc2NyZWVuWCwgXCIgWTogXCIsIGUuc2NyZWVuWSk7XG4gICAgICAgIGxldCB7ZGVsdGFYLCBkZWx0YVksIGV2ZW50Q291bnRlcn0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIC8vINCf0L7Qu9GD0YfQsNC10Lwg0LrQvtC+0YDQtNC40L3QsNGC0YsgeCDQuCB5INC00LvRjyDRgtC10LrRg9GJ0LXQs9C+INC/0L7Qu9C+0LbQtdC90LjRjyDQutGD0YDRgdC+0YDQsCDRh9C10YDQtdC3INGB0L7QsdGL0YLQuNC1XG4gICAgICAgIGRlbHRhWC5wdXNoKGUuc2NyZWVuWCk7XG4gICAgICAgIGRlbHRhWS5wdXNoKGUuc2NyZWVuWSk7XG5cbiAgICAgICAgLy8g0J/QvtC00YDQsNC30YPQvNC10LLQsNC10YLRgdGPLCDRh9GC0L4g0YDQsNC30LzQtdGA0L3QvtGB0YLRjCBkZWx0YVgg0YDQsNCy0L3QsCDRgNCw0LfQvNC10YDQvdC+0YHRgtC4IGRlbHRhWVxuICAgICAgICBpZiAoZGVsdGFYLmxlbmd0aCA9PT0gTUFYX0JVTEtfU0laRSkge1xuICAgICAgICAgICAgLy8g0JzRiyDQtNC+0LvQttC90Ysg0YHQtNC10LvQsNGC0Ywg0LrQvtC/0LjRjiDQvtGA0LjQs9C40L3QsNC70YzQvdGL0YUg0LzQsNGB0YHQuNCy0L7Qsiwg0YfRgtC+0LHRiyDQv9C10YDQtdC00LDRgtGMINC40YUg0LIg0L/RgNC+0YbQtdC00YPRgNGDINC+0YLQv9GA0LDQstC60Lgg0L3QsCDRgdC10YDQstC10YAsXG4gICAgICAgICAgICAvLyDRgi7Qui4g0LjQvdCw0YfQtSDQtNCw0L3QvdCw0Y8g0L/RgNC+0YbQtdC00YPRgNCwINC80L7QttC10YIg0LLQt9GP0YLRjCDQvdC10LrQvtGA0YDQtdC60YLQvdGL0LUg0LfQvdCw0YfQtdC90LjRjyDQuNC3INGC0LXQutGD0YnQtdCz0L4g0YHQvtGB0YLQvtGP0L3QuNGPINC60L7QvNC/0L7QvdC10L3RgtCwICjQvtCx0L3QvtCy0LvQtdC90LjQtSDRgdC+0YHRgtC+0Y/QvdC40Y8g0L/RgNC+0LjRgdGF0L7QtNC40YIg0LDRgdC40L3RhdGA0L7QvdC90L4pXG4gICAgICAgICAgICB0aGlzLl9wb3N0RXZlbnRzQnVsayhkZWx0YVguc2xpY2UoKSwgZGVsdGFZLnNsaWNlKCkpO1xuXG4gICAgICAgICAgICBkZWx0YVguc3BsaWNlKDAsIGRlbHRhWC5sZW5ndGgpO1xuICAgICAgICAgICAgZGVsdGFZLnNwbGljZSgwLCBkZWx0YVkubGVuZ3RoKTtcbiAgICAgICAgICAgIGV2ZW50Q291bnRlciA9IC0xXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkZWx0YVg6IGRlbHRhWCxcbiAgICAgICAgICAgIGRlbHRhWTogZGVsdGFZLFxuICAgICAgICAgICAgZXZlbnRDb3VudGVyOiBldmVudENvdW50ZXIgKyAxXG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIF9wb3N0RXZlbnRzQnVsayA9ICh4Q29yZHMsIHlDb3Jkcywgc3VjY2Vzc0NhbGxiYWNrID0gbnVsbCkgPT4ge1xuICAgICAgICBBeGlvcy5wb3N0KCcvZXZlbnRzJywge1xuICAgICAgICAgICAgeDogeENvcmRzLFxuICAgICAgICAgICAgeTogeUNvcmRzXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjayAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgX21ha2VSYW5kb21BcnJheSA9IChtaW4sIG1heCwgc2l6ZSkgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0QXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdEFycmF5LnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoc2l6ZSkpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlYXJjaFZhbHVlOiByZXN1bHRBcnJheVtyYW5kb21JbmRleF0sXG4gICAgICAgICAgICByYW5kb21BcnJheTogcmVzdWx0QXJyYXlcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgc2F2ZVJlc3VsdHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHtuaWNrbmFtZSwgZGVsdGFYLCBkZWx0YVksIGNvdW50ZXJ9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgY2xvc2VDb25uZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgQXhpb3MucG9zdCgnL2ZpbicsIHtcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXG4gICAgICAgICAgICAgICAgdG90YWxTY29yZTogY291bnRlcixcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9wb3N0RXZlbnRzQnVsayhkZWx0YVgsIGRlbHRhWSwgY2xvc2VDb25uZWN0aW9uKVxuICAgIH07XG5cbiAgICBvbkdhbWVTdGFydCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBnYW1lU3RhcnRlZDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgb25HYW1lU3RvcCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qge25pY2tuYW1lLCBjb3VudGVyfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9naW46IFwiLCBuaWNrbmFtZSwgXCIgU2NvcmU6IFwiLCBjb3VudGVyKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBnYW1lU3RhcnRlZDogZmFsc2UsXG4gICAgICAgICAgICBnYW1lUGxheWVkOiB0cnVlLFxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICByZW5kZXJHYW1lRmllbGQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IG9uTW91c2VNb3ZlPXt0aGlzLl9vbk1vdXNlTW92ZX0gY2xhc3NOYW1lPXsnY29udGFpbmVyJ30+XG4gICAgICAgICAgICAgICAgPHA+0J3QsNC50LTQuNGC0LUg0YfQuNGB0LvQvjoge3RoaXMuc3RhdGUuc2VhcmNoVmFsdWV9PC9wPlxuICAgICAgICAgICAgICAgIDxHYW1lRmllbGRcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3RoaXMuc3RhdGUucmFuZG9tQXJyYXl9XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvblJlZnJlc2g9e3RoaXMucmVmcmVzaFZhbHVlc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgINCS0LDRiCDRgdGH0LXRgjoge3RoaXMuc3RhdGUuY291bnRlcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8VGltZXIgdGltZXJTdG9wPXt0aGlzLm9uR2FtZVN0b3B9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2lzTG9nb24sIGdhbWVTdGFydGVkLCBnYW1lUGxheWVkLCBuaWNrbmFtZSwgY291bnRlcn0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAoaXNMb2dvbikge1xuICAgICAgICAgICAgaWYgKGdhbWVTdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyR2FtZUZpZWxkKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxHYW1lUnVsZXMgbmlja25hbWU9e25pY2tuYW1lfSB0b3RhbFNjb3JlPXtjb3VudGVyfSBnYW1lUGxheWVkPXtnYW1lUGxheWVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uR2FtZVN0YXJ0PXt0aGlzLm9uR2FtZVN0YXJ0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uR2FtZVNhdmU9e3RoaXMuc2F2ZVJlc3VsdHN9Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA8TG9naW5TY3JlZW4gb25Ob3RpZnk9e3RoaXMuc2V0TG9naW5OYW1lfS8+XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgUmVhY3RET00ucmVuZGVyKDxHYW1lQ29udGFpbmVyLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJykpO1xufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOdW1iZXIgZnJvbSAnLi9udW1iZXInO1xuXG5cbmNsYXNzIEdhbWVGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyQnV0dG9uID0gKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY29sLTQnfT5cbiAgICAgICAgICAgICAgICA8TnVtYmVyIGtleT17a2V5fSB2YWx1ZT17dmFsdWV9IHNlYXJjaFZhbHVlPXt0aGlzLnByb3BzLnNlYXJjaFZhbHVlfSBvbk5vdGlmeT17dGhpcy5wcm9wcy5vblJlZnJlc2h9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfTtcblxuICAgIHJlbmRlclJvdyA9ICh2YWx1ZXMpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncm93J30+XG4gICAgICAgICAgICAgICAge3ZhbHVlcy5tYXAoKHZhbCwgaW5kZXgpID0+IDxOdW1iZXIga2V5PXtpbmRleH0gdmFsdWU9e3ZhbH0gc2VhcmNoVmFsdWU9e3RoaXMucHJvcHMuc2VhcmNoVmFsdWV9IG9uTm90aWZ5PXt0aGlzLnByb3BzLm9uUmVmcmVzaH0gLz4pIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2l0ZW1zfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHJvd3MgPSBbXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJSb3coaXRlbXMuc2xpY2UoMCwgMykpLFxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUm93KGl0ZW1zLnNsaWNlKDMsIDYpKSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclJvdyhpdGVtcy5zbGljZSg2LCA5KSksXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY29udGFpbmVyIGZpZWxkJ30+XG4gICAgICAgICAgICAgICAgICAgIHtyb3dzfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lRmllbGQ7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cblxuY2xhc3MgR2FtZVJ1bGVzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXJSdWxlcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYWxlcnQgYWxlcnQtaW5mbyd9IHJvbGU9eydhbGVydCd9PlxuICAgICAgICAgICAgICAgINCf0YDQuNCy0LXRgiwgPGI+e3RoaXMucHJvcHMubmlja25hbWV9PC9iPiEgPGJyLz5cbiAgICAgICAgICAgICAgICDQkiDRjdGC0L7QuSDQuNCz0YDQtSDRgtC10LHQtSDQvdC10L7QsdGF0L7QtNC40LzQviDQvdCw0LnRgtC4INC60LDQuiDQvNC+0LbQvdC+INCx0L7Qu9GM0YjQtSDRh9C40YHQtdC7INC30LAg0LTQstC1INC80LjQvdGD0YLRiy4gPGJyLz5cbiAgICAgICAgICAgICAgICDQlNC70Y8g0L3QsNGH0LDQu9CwINC90LDQttC80Lgg0L3QsCDQutC90L7Qv9C60YMg0KHRgtCw0YDRgi5cbiAgICAgICAgICAgICAgICA8YnIvPjxici8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uR2FtZVN0YXJ0fSBjbGFzc05hbWU9eydidG4gYnRuLXN1Y2Nlc3MnfT7QodGC0LDRgNGCPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH07XG5cbiAgICByZW5kZXJTY29yZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qge25pY2tuYW1lLCB0b3RhbFNjb3JlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnfSByb2xlPXsnYWxlcnQnfT5cbiAgICAgICAgICAgICAgICA8Yj7QotCy0L7QtSDQuNC80Y86PC9iPiB7bmlja25hbWV9LCA8YnIvPlxuICAgICAgICAgICAgICAgIDxiPtCa0L7Qu9C40YfQtdGB0YLQstC+INC+0YfQutC+0LI6PC9iPiB7dG90YWxTY29yZX0gPGJyLz5cbiAgICAgICAgICAgICAgICDQodC/0LDRgdC40LHQviDQt9CwINC40LPRgNGDIVxuICAgICAgICAgICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMub25HYW1lU2F2ZX0gY2xhc3NOYW1lPXsnYnRuIGJ0bi1zdWNjZXNzJ30+0KHQvtGF0YDQsNC90LjRgtGMINGA0LXQt9GD0LvRjNGC0LDRgiE8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZ2FtZVBsYXllZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyU2NvcmUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyUnVsZXMoKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lUnVsZXM7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuXG5jbGFzcyBMb2dpblNjcmVlbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbmlja25hbWU6ICcnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbmlja25hbWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIG9uTG9naW4gPSAoZSkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uTm90aWZ5KHRoaXMuc3RhdGUubmlja25hbWUpXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnanVtYm90cm9uJ30+XG4gICAgICAgICAgICAgICAgPGgyPtCf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDRgdCy0L7QtSDQuNC80Y88L2gyPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnN0YXRlLm5pY2tuYW1lfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vbkxvZ2lufSBjbGFzc05hbWU9eydidG4gYnRuLXByaW1hcnknfT5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luU2NyZWVuOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5cbmNsYXNzIE51bWJlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYnRuU3R5bGU6ICdidG4tc2Vjb25kYXJ5J1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXRTdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBidG5TdHlsZTogJ2J0bi1zZWNvbmRhcnknXG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIHN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYnRuU3R5bGU6ICdidG4tc3VjY2VzcydcbiAgICAgICAgfSwgdGhpcy5wcm9wcy5vbk5vdGlmeSgpKTtcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLnJlc2V0U3RhdGUsIDEwMDApXG4gICAgfTtcblxuICAgIGVycm9yID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGJ0blN0eWxlOiAnYnRuLWRhbmdlcidcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5yZXNldFN0YXRlLCAxMDAwKVxuICAgIH07XG5cbiAgICBvbkNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoVmFsdWUgPSBwYXJzZUludCh0aGlzLnByb3BzLnNlYXJjaFZhbHVlKSxcbiAgICAgICAgICAgICAgYnV0dG9uVmFsdWUgPSBwYXJzZUludCh0aGlzLnByb3BzLnZhbHVlKTtcbiAgICAgICAgaWYgKHNlYXJjaFZhbHVlID09PSBidXR0b25WYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zdWNjZXNzKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoKVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBidG5TdHlsZSA9IHRoaXMuc3RhdGUuYnRuU3R5bGU7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY29sLTQgdGV4dC1jZW50ZXInfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25DbGlja30gY2xhc3NOYW1lPXtcImJ0biBcIiArIGJ0blN0eWxlfT57dmFsdWV9PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBUSU1FX0lOVEVSVkFMID0gMTIwMDAwO1xuXG5jbGFzcyBUaW1lciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHN0YXJ0OiBudWxsLFxuICAgICAgICAgICAgdGltZXI6IG51bGwsXG4gICAgICAgICAgICBjb3VudGRvd246IG51bGwsXG4gICAgICAgICAgICBlbGFwc2VkOiAwLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGljID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVsYXBzZWQ6IG5ldyBEYXRlKCkgLSB0aGlzLnN0YXRlLnN0YXJ0XG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRpbWVyOiBzZXRUaW1lb3V0KHRoaXMucHJvcHMudGltZXJTdG9wLCBUSU1FX0lOVEVSVkFMKSxcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgY291bnRkb3duOiBzZXRJbnRlcnZhbCh0aGlzLnRpYywgNTApXG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuc3RhdGUuY291bnRkb3duKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgc2Vjb25kcyA9IE1hdGgucm91bmQodGhpcy5zdGF0ZS5lbGFwc2VkIC8gMTAwMCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8cD7QktGA0LXQvNGPINC/0YDQvtGI0LvQvjoge3NlY29uZHN9INC40LcgMTIwINGB0LXQutGD0L3QtDwvcD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==