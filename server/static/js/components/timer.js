import React, {Component} from 'react';


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
            timer: setTimeout(this.props.timerStop, 60000),
            start: new Date(),
            countdown: setInterval(this.tic, 50)
        })
    };

    componentWillUnmount = () => {
        clearInterval(this.state.countdown);
    };

    render() {
        let seconds = Math.round(this.state.elapsed / 1000);
        let minutes = Math.floor(seconds / 60);
        return (
            <p>Time elapsed: {minutes}:{seconds}</p>
        )
    }
}

export default Timer;