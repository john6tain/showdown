import React from 'react';

export default class Showdown extends React.Component {
    render() {
        return (
            <div>
                { this.props.posts.map(p => (
                    <div key={ p._id }
                           onClick={ this.props.upVote.bind(this.props.context, p._id) }>

                        <img src={ p.imageUrl } alt="some alt"/>
                        <p>{ p.description }</p>
                    </div>
                    ))
                }
            </div>
        )
    }
}