import React from 'react';

export default class RadioElement extends React.Component {
    render() {
        return (
            <label htmlFor={ this.props.value.toLowerCase() } className="radio-inline">
                <input type='radio'
                       name={ this.props.name }
                       id={ this.props.value.toLowerCase() }
                       value={ this.props.value || '' }
                       checked={ this.props.selectedValue === this.props.value }
                       onChange={ this.props.handleChange }/>
                { this.props.value }
            </label>
        );
    }
}