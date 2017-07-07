import React from 'react';

export default class Post extends React.Component {
    render() {
        console.log('[Inside Post] you should see two logs, but you don\'t, because it crashes on the first one, without throwing an error or rendering anything. You can fix this, by passing down "upVote" function from "ShowdownContainer"');
        return (
            <div key={this.props._id}>
                <img onClick={ this.props.upVote.bind(null, 'argument') } src={ this.props.imageUrl } alt="post" />
            </div>
        );
    }
}