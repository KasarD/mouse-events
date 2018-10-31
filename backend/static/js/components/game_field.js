import React, {Component} from 'react';
import Number from './number';


class GameField extends Component {
    renderRow = (values) => {
        return (
            <div className={'row'}>
                {values.map((val, index) => <Number key={index} value={val} searchValue={this.props.searchValue} onNotify={this.props.onRefresh} />) }
            </div>
        )
    };

    render() {
        const {items} = this.props;
        if (items.length === 0) {
            return "";
        } else {
            let rows = [
                this.renderRow(items.slice(0, 3)),
                this.renderRow(items.slice(3, 6)),
                this.renderRow(items.slice(6, 9)),
            ];

            return (
                <div className={'container field'}>
                    {rows}
                </div>
            )
        }
    }
}

export default GameField;