import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import GameField from './components/game_field';
import LoginScreen from './components/login_screen';
import GameRules from './components/game_rules';
import Timer from './components/timer';

class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: null,
            randomArray: [],
            counter: 0,

            isLogon: false,
            nickname: '',

            gameStarted: false,
            gamePlayed: false,
        }
    }

    componentDidMount = () => {
        this._makeRandomArray(1, 20, 9);
    };

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

    onGameStart = () => {
        this.setState({
            gameStarted: true,
            startDate: new Date()
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
            <div className={'container'}>
                <p>Найдите число: {this.state.searchValue}</p>
                <GameField
                    items={this.state.randomArray}
                    searchValue={this.state.searchValue}
                    onRefresh={this.refreshValues}
                />
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
                return <GameRules nickname={nickname} totalScore={counter} gamePlayed={gamePlayed} onGameStart={this.onGameStart}/>
            }
        } else {
            return <LoginScreen onNotify={this.setLoginName}/>
        }
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    ReactDOM.render(<GameContainer/>, document.getElementById('game'));
});
