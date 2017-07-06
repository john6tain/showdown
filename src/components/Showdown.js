import React from 'react';
import Post from './Post';

export default class Showdown extends React.Component {
    render() {
        let posts = this.props.posts.map((p, index) => {
            return (
                <Post key={ p._id }
                      imageUrl={ p.imageUrl }/>
            );
        });

        return (
            <div className='container'>
                <h3 className='text-center'>Click on the portrait. Select your favorite.</h3>
                <div className='row'>
                    { posts }
                </div>
            </div>
        );
    }
}