import React from 'react';
import { Panel, Image } from 'react-bootstrap';

export default class Showdown extends React.Component {
    render() {
        return (
            <div>
                { this.props.posts.map(p => (
                    <Panel key={ p._id }
                           onClick={ this.props.upVote.bind(this.props.context, p._id) }
                           bsClass='showdown'
                           bsStyle="primary"
                           header={ p.name }>

                        <Image src={ p.imageUrl } responsive />
                        <p>{ p.description }</p>
                    </Panel>
                    ))
                }
            </div>
        )
    }
}