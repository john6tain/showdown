import React from 'react';
import UserActions from '../../actions/UserActions';
import FormActions from '../../actions/FormActions';
import UserStore from '../../stores/UserStore';
import Form from '../form/Form';
import TextGroup from '../form/TextGroup';
import Submit from '../form/Submit';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = UserStore.getState();
        this.onChange = this.onChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    componentDidMount() {
        UserStore.listen(this.onChange);
    }

    componentWillUnmount() {
        UserStore.unlisten(this.onChange);
    }

    handleLogin(e) {
        e.preventDefault();
        UserActions.login(this.state.user);
        this.props.history.goBack()
    }

    onInputChange(e) {
       FormActions.inputChange(e);
    }

    render() {
        return (
            <Form handleSubmit={ this.handleLogin }
                  title="Login"
                  submitState={ this.state.submitState }
                  message={ this.state.message }>

                <TextGroup type="text"
                           label="username"
                           validationState={ this.state.validationState }
                           message={ this.state.message }
                           handleChange={ this.onInputChange } />

                <TextGroup type="password"
                           label="password"
                           value={ this.state.value }
                           validationState={ this.state.validationState }
                           message={ this.state.message }
                           handleChange={ this.onInputChange } />
                <Submit type="btn-primary" value="Add" />
            </Form>
        )
    }
}