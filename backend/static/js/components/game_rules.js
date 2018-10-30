import React, {Component} from 'react';


class GameRules extends Component {
    renderRules = () => {
        return (
            <div className={'alert alert-info'} role={'alert'}>
                Привет, <b>{this.props.nickname}</b>! <br/>
                В этой игре тебе необходимо найти как можно больше чисел за две минуты. <br/>
                Для начала нажми на кнопку Старт.
                <br/><br/>
                <button onClick={this.props.onGameStart} className={'btn btn-success'}>Старт</button>
            </div>
        )
    };

    renderScore = () => {
        const {nickname, totalScore} = this.props;
        return (
            <div className={'alert alert-success'} role={'alert'}>
                <b>Твое имя:</b> {nickname}, <br/>
                <b>Количество очков:</b> {totalScore} <br/>
                Спасибо за игру!
                <br/><br/>
                <button onClick={this.props.onGameSave} className={'btn btn-success'}>Сохранить результат!</button>
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