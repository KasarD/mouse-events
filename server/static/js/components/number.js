import React, {Component} from 'react';


class Number extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnStyle: 'btn-secondary'
        }
    }

    resetState = () => {
        this.setState({
            btnStyle: 'btn-secondary'
        })
    };

    success = () => {
        this.setState({
            btnStyle: 'btn-success'
        }, this.props.onNotify())
        setTimeout(this.resetState, 1000)
    };

    error = () => {
        this.setState({
            btnStyle: 'btn-danger'
        });
        setTimeout(this.resetState, 1000)
    };

    onClick = (e) => {
        const searchValue = parseInt(this.props.searchValue),
              buttonValue = parseInt(this.props.value);
        if (searchValue === buttonValue) {
            this.success()
        } else {
            this.error()
        }

    };

    render() {
        const btnStyle = this.state.btnStyle;
        const value = this.props.value;
        return (
            <div className={'col-4 text-center'}>
                <button onClick={this.onClick} className={"btn " + btnStyle}>{value}</button>
            </div>
        )
    }
}

export default Number;