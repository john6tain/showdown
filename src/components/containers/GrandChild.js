import React from 'react';

export default class GrandChild extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div key={this.props._id}>
                <img onClick={ this.props.upVote.bind(null, 'argument') } src={ this.props.imageUrl } alt="post" />
            </div>
        )
    }
}