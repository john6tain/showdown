import React from 'react';

export default class Showdown extends React.Component {
    render() {
        return (
            <div>
                <div className="inline">
                    <img src={ this.props.postLeft.image } />
                </div>
                <div className="inline">
                    <img src={ this.props.postRight.image } />
                </div>
            </div>
        )
    }
}