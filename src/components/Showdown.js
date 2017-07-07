import React from 'react';
import Post from './Post';

export default class Showdown extends React.Component {
    render() {
        return (
            <div className='container'>
                <h3 className='text-center'>Click on the portrait. Select your favorite.</h3>
                <div className="row">
                    { this.props.posts.map((p, index) => (
                        <Post key={ p._id }
                              index={ index }
                              id={ p._id }
                              name={ p.name }
                              description={ p.description }
                              imageUrl={ p.imageUrl }
                              upVote={ this.props.upVote }
                              container={ this.props.container } />
                    )) }
                </div>
            </div>
        )
    }
}