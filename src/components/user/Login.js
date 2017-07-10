import React from 'react';
import UserActions from '../../actions/UserActions';
import FormActions from '../../actions/FormActions';
import FormStore from '../../stores/FormStore';
import Form from '../form/Form';
import TextGroup from '../form/TextGroup';
import Submit from '../form/Submit';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Login: {} };
        this.onChange = this.onChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    onChange(state) {
        this.setState({ Login: state.Login });
    }

    componentDidMount() {
        FormStore.init('Login');
        FormStore.listen(this.onChange);
    }

    componentWillUnmount() {
        FormStore.unlisten(this.onChange);
    }

    handleLogin(e) {
        e.preventDefault();

        UserActions.login(this.state.Login);
        this.props.history.goBack()
    }

    render() {
        let THIS_STATE = this.state.Login;
        return (
            <Form handleSubmit={ this.handleLogin }
                  title="Login"
                  submitState={ THIS_STATE.submitState }
                  message={ THIS_STATE.message }>

                <TextGroup type="text"
                           label="username"
                           value={ THIS_STATE.username }
                           validationState={ THIS_STATE.validationState }
                           message={ THIS_STATE.message }
                           handleChange={ FormActions.inputChange } />

                <TextGroup type="password"
                           label="password"
                           value={ THIS_STATE.password }
                           validationState={ THIS_STATE.validationState }
                           message={ THIS_STATE.message }
                           handleChange={ FormActions.inputChange } />

                <Submit type="btn-primary" value="Add" />
            </Form>
        )
    }
}