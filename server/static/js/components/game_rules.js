import React, {Component} from 'react';


class GameRules extends Component {
    renderRules = () => {
        return (
            <div className={'alert alert-info'} role={'alert'}>
                Привет, {this.props.nickname}! В этой игре тебе необходимо найти как можно больше чисел за две минуты.
                Для начала нажми на кнопку Старт.

                <button onClick={this.props.onGameStart} className={'btn btn-success'}>Старт</button>
            </div>
        )
    };

    renderScore = () => {
        const {nickname, totalScore} = this.props;
        return (
            <div className={'alert alert-success'} role={'alert'}>
                Your nickname: {nickname}, total score: {totalScore}
                Thanks for playing!
            </div>
        )
    };

    render() {
        if (this.props.gamePlayed) {
            return this.renderScore()
        } else {
            return this.renderRules()
        }
    }
}

export default GameRules;