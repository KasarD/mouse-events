import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class GameContainer extends Component {
    render() {
        return(
            <h1>Test react lib</h1>
        )
    }
}

document.addEventListener("DOMContentLoaded", function(e) {
  ReactDOM.render(<GameContainer />, document.getElementById('game'));
});
