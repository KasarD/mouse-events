import React, {Component} from 'react';
import Number from './number';


class GameField extends Component {

    render() {
        const {items, searchValue} = this.props;
        if (items.length === 0) {
            return "";
        } else {
            return (
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-4'}>
                            <Number value={items[0]} searchValue={searchValue} onNotify={this.props.onRefresh}/>
                        </div>
                        <div className={'col-4'}>
                            <Number value={items[1]} searchValue={searchValue} onNotify={this.props.onRefresh}/>
                        </div>
                        <div className={'col-4'}>
                            <Number value={items[2]} searchValue={searchValue} onNotify={this.props.onRefresh}/>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col-4'}>
                            <Number value={items[3]} searchValue={searchValue} onNotify={this.props.onRefresh}/>
                        </div>
                        <div className={'col-4'}>
                            <Number value={items[4]} searchValue={searchValue} onNotify={this.props.onRefresh}/>
                        </div>
                        <div className={'col-4'}>
                            <Number value={items[5]} searchValue={searchValue} onNotify={this.props.onRefresh}/>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col-4'}>
                            <Number value={items[6]} searchValue={searchValue} onNotify={this.props.onRefresh}/>
                        </div>
                        <div className={'col-4'}>
                            <Number value={items[7]} searchValue={searchValue} onNotify={this.props.onRefresh}/>
                        </div>
                        <div className={'col-4'}>
                            <Number value={items[8]} searchValue={searchValue} onNotify={this.props.onRefresh}/>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default GameField;