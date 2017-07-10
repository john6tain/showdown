import React from 'react';

export default class TextGroup extends React.Component {
    render() {
        return (
            <div className={ 'form-group ' + this.props.validationState }>
                <label className='control-label'>{ this.props.label }</label>
                <input type={ this.props.type }
                       name={ this.props.name || this.props.label.toLowerCase() }
                       className='form-control'
                       value={ this.props.value || '' }
                       onChange={ this.props.handleChange }
                       autoFocus={ this.props.autoFocus } />
                { this.props.validationState?
                    <span className='help-block'>{ this.props.message }</span>
                    : null }
            </div>
        );
    }
}