import React from 'react';
import Form from '../form/Form';
import TextGroup from '../form/TextGroup';
import Submit from '../form/Submit';

export default class AddCombatant extends React.Component {
    render() {
        const form = this.props.form;
        const input = this.props.input;
        return (
            <Form handleSubmit={ form.handleSubmit }
                  title={ form.title }
                  submitState={ form.submitState }
                  message={ this.props.message }>

                <TextGroup type="text"
                           label="Name"
                           value={ input.name.value }
                           validationState={ input.name.validationState }
                           message={ this.props.message }
                           handleChange={ this.props.onInputChange } />

                <TextGroup type="text"
                           label="Image"
                           value={ input.imageUrl.value }
                           validationState={ input.imageUrl.validationState }
                           message={ this.props.message }
                           handleChange={ this.props.onInputChange } />

                <TextGroup type="text"
                           label="Description"
                           value={ input.description.value }
                           validationState={ input.description.validationState }
                           message={ this.props.message }
                           handleChange={ this.props.onInputChange } />
                <Submit type="btn-primary" value="Add" />
            </Form>
        )
    }
}