import React from 'react';
import Combatant from './Combatant';

export default class Showdown extends React.Component {
    render() {
        return (
            <div className='container'>
                <h3 className='text-center'>
                    { this.props.message?
                        this.props.message
                        : 'Click on the portrait. Select your favorite.' }
                </h3>
                <div className="row">
                    { this.props.combatants.map((p, index) => (
                        <Combatant key={ p._id }
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