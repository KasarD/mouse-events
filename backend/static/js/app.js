import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import GameField from './components/game_field';
import LoginScreen from './components/login_screen';
import GameRules from './components/game_rules';
import Timer from './components/timer';

const MAX_BULK_SIZE = 10;


class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: null, // Value, that user are looking for
            randomArray: [],   // Random values to fill the buttons
            counter: 0,        // Total user score counter

            isLogon: false,    // If user type his nickname?
            nickname: '',      // Handle nickname of current user

            gameStarted: false, // Is game started?
            gamePlayed: false,  // Is timer count end?

            deltaX: [],         // Store bulk of x mouse coordinates
            deltaY: [],         // Store bulk of y mouse coordinates
            eventCounter: 0,    // counter for limit bulk size (default - 100)
        }
    }

    /*
     * For the first time, when component did mount, we need to generate array with random values
     */
    componentDidMount = () => {
        this._makeRandomArray(1, 20, 9);
    };

    /*
     * We move that logic out to use this function in
     * success Number action callback. So if user get the right number
     * then component should refresh his values
     */
    refreshValues = () => {
        const counter = this.state.counter;
        this.setState({
            counter: counter + 1,
        }, this._makeRandomArray(1, 20, 9));
    };

    /*
     * Callback for LoginScreen.
     * Put user nickname to the state (we use it in after game statistic and game rules)
     */
    setLoginName = (name) => {
        this.setState({
            nickname: name,
            isLogon: true
        })
    };

    /*
     * Register mouse movement on game container area
     */
    _onMouseMove = (e) => {
        console.log("X: ", e.screenX, " Y: ", e.screenY);
        let {deltaX, deltaY, eventCounter} = this.state;

        // Get x and y coordinates from event and push it to current bulk
        deltaX.push(e.screenX);
        deltaY.push(e.screenY);

        // Assumed that deltaX length is equal to deltaY length, so we can check
        // max size only by one array length
        if (deltaX.length === MAX_BULK_SIZE) {
            // We should use COPY of original bulk, because in Axios promise we could
            // get incorrect state! So we use trick with slice() to get a full copy.
            // Since MAX_BULK_SIZE is not very big, that arrays have no effect on performance
            this._postEventsBulk(deltaX.slice(), deltaY.slice());

            // Now clear up arrays to handle another party
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
