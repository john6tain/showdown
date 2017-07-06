import React from 'react';
import { Link } from 'react-router-dom';

export default class Post extends React.Component {
    render() {
        console.log('Post', this.props);
        return (
            <div key={this.props._id}>
                <img onClick={ this.props.upVote.bind(null, 'argument') } src={ this.props.imageUrl } alt="post" />
            </div>
        );
    }
}