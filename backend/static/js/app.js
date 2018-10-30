import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import GameField from './components/game_field';
import LoginScreen from './components/login_screen';
import GameRules from './components/game_rules';
import Timer from './components/timer';

const MAX_BULK_SIZE = 100;


class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: null, // Значение, которое ищет пользователь в данный момент
            randomArray: [],   // Рандомные значения для заполнения кнопок
            counter: 0,        // Общее количество правильных ответов

            isLogon: false,    // Пользователь залогинился?
            nickname: '',      // Содержит никнейм текущего пользователя

            gameStarted: false, // Игра началась?
            gamePlayed: false,  // Игра сыграна?

            deltaX: [],         // Временный масив для координат мыши по X
            deltaY: [],         // Аналогично по Y
            eventCounter: 0,    // Счетчик значений во временном ханилище
        }
    }

    /*
     * При первичном рендеринге компонента мы генерируем рандомный массив чисел
     */
    componentDidMount = () => {
        this._makeRandomArray(1, 20, 9);
    };

    /*
     * Логика обновления вынесена в данный метод, чтоб его можно было использовать в качестве callback'a при
	 * выборе правильного ответа пользователем
     */
    refreshValues = () => {
        const counter = this.state.counter;
        this.setState({
            counter: counter + 1,
        }, this._makeRandomArray(1, 20, 9));
    };

    setLoginName = (name) => {
        this.setState({
            nickname: name,
            isLogon: true
        })
    };

    _onMouseMove = (e) => {
        // console.log("X: ", e.screenX, " Y: ", e.screenY);
        let {deltaX, deltaY, eventCounter} = this.state;

        // Получаем координаты x и y для текущего положения курсора через событие
        deltaX.push(e.screenX);
        deltaY.push(e.screenY);

        // Подразумевается, что размерность deltaX равна размерности deltaY
        if (deltaX.length === MAX_BULK_SIZE) {
            // Мы должны сделать копию оригинальных массивов, чтобы передать их в процедуру отправки на сервер,
            // т.к. иначе данная процедура может взять некорректные значения из текущего состояния компонента (обновление состояния происходит асинхронно)
            this._postEventsBulk(deltaX.slice(), deltaY.slice());

            deltaX.splice(0, deltaX.length);
            deltaY.splice(0, deltaY.length);
            eventCounter = -1
        }
        this.setState({
            deltaX: deltaX,
            deltaY: deltaY,
            eventCounter: eventCounter + 1
        })
    };

    _postEventsBulk = (xCords, yCords, successCallback = null) => {
        Axios.post('/events', {
            x: xCords,
            y: yCords
        }).then(response => {
            if (successCallback != null) {
                successCallback()
            }
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    };

    _makeRandomArray = (min, max, size) => {
        let resultArray = [];
        for (let i = 0; i < size; i++) {
            resultArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }

        let randomIndex = Math.floor(Math.random() * (size));
        this.setState({
            searchValue: resultArray[randomIndex],
            randomArray: resultArray
        })
    };

    saveResults = () => {
        const {nickname, deltaX, deltaY, counter} = this.state;
        const closeConnection = () => {
            Axios.post('/fin', {
                nickname: nickname,
                totalScore: counter,
            }).then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
        };

        this._postEventsBulk(deltaX, deltaY, closeConnection)
    };

    onGameStart = () => {
        this.setState({
            gameStarted: true
        });
    };

    onGameStop = () => {
        const {nickname, counter} = this.state;
        console.log("Login: ", nickname, " Score: ", counter);
        this.setState({
            gameStarted: false,
            gamePlayed: true,
        })
    };

    renderGameField = () => {
        return (
            <div onMouseMove={this._onMouseMove} className={'container'}>
                <p>Найдите число: {this.state.searchValue}</p>
                <GameField
                    items={this.state.randomArray}
                    searchValue={this.state.searchValue}
                    onRefresh={this.refreshValues}
                />
                <div>
                    Ваш счет: {this.state.counter}
                </div>
                <Timer timerStop={this.onGameStop}/>
            </div>
        )
    };

    render() {
        const {isLogon, gameStarted, gamePlayed, nickname, counter} = this.state;
        if (isLogon) {
            if (gameStarted) {
                return this.renderGameField()
            } else {
                return <GameRules nickname={nickname} totalScore={counter} gamePlayed={gamePlayed}
                                  onGameStart={this.onGameStart}
                                  onGameSave={this.saveResults}/>
            }
        } else {
            return <LoginScreen onNotify={this.setLoginName}/>
        }
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    ReactDOM.render(<GameContainer/>, document.getElementById('game'));
});
