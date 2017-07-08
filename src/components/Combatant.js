import React from 'react';
import { Link } from 'react-router-dom';

export default class Post extends React.Component {
    render() {
        return (
            <div key={ this.props.id }
                 className={this.props.index === 0 ? 'col-xs-6 col-sm-6 col-md-5 col-md-offset-1' : 'col-xs-6 col-sm-6 col-md-5'}>
                <div className='thumbnail fadeInUp animated'>
                    <div className="image-container">
                        <div className="inner-container">
                            <img onClick={ this.props.upVote.bind(this.props.container, this.props.id) }
                                 src={ this.props.imageUrl }
                                 alt="cats"/>
                        </div>
                    </div>
                    <div className='caption text-center'>
                        <p>{ this.props.description }</p>
                        <h4>
                            <Link to={ `/characters/${ this.props.id }` }>
                                <strong>{this.props.name}</strong>
                            </Link>
                        </h4>
                    </div>
                </div>
            </div>
        )
    }
}