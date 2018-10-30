import React, { Component } from 'react';


class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: ''
        }
    }

    onChange = (e) => {
        this.setState({
            nickname: e.target.value
        })
    };

    onLogin = (e) => {
        this.props.onNotify(this.state.nickname)
    };

    render() {
        return (
            <div className={'jumbotron'}>
                <h2>Please, input your nickname</h2>
                <input value={this.state.nickname} onChange={this.onChange} />
                <button onClick={this.onLogin} className={'btn btn-primary'}>Login</button>
            </div>
        )
    }
}

export default LoginScreen;