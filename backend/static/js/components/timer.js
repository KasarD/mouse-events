import React, {Component} from 'react';

const TIME_INTERVAL = 120000;

class Timer extends Component {
    constructor(props){
        super(props);

        this.state = {
            start: null,
            timer: null,
            countdown: null,
            elapsed: 0,
        }
    }

    tic = () => {
        this.setState({
            elapsed: new Date() - this.state.start
        })
    };

    componentDidMount = () => {
        this.setState({
            timer: setTimeout(this.props.timerStop, TIME_INTERVAL),
            start: new Date(),
            countdown: setInterval(this.tic, 50)
        })
    };

    componentWillUnmount = () => {
        clearInterval(this.state.countdown);
    };

    render() {
        let seconds = Math.round(this.state.elapsed / 1000);
        return (
            <p>Время прошло: {seconds} из 120 секунд</p>
        )
    }
}

export default Timer;