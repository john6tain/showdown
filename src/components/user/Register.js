import React from 'react';
import UserActions from '../../actions/UserActions';
import FormActions from '../../actions/FormActions';
import FormStore from '../../stores/FormStore';
import Form from '../form/Form';
import TextGroup from '../form/TextGroup';
import RadioGroup from '../form/RadioGroup';
import RadioElement from '../form/RadioElement';
import Submit from '../form/Submit';

export default class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = { Register: {} };
		this.onChange = this.onChange.bind(this);
		this.handleRegister = this.handleRegister.bind(this);
	}

	onChange(state) {
		this.setState({ Register: state.Register });
	}

	componentDidMount() {
        FormStore.init('Register');
		FormStore.listen(this.onChange);
	}

	componentWillUnmount() {
		FormStore.unlisten(this.onChange);
	}

	handleRegister(e) {
		e.preventDefault();
		UserActions.register(this.state.Register);
		this.props.history.push("/login");
	}

	render() {
	    let THIS_STATE = this.state.Register;
        console.log(THIS_STATE);
		return (
			<Form handleSubmit={this.handleRegister}
				title="Register"
				submitState={THIS_STATE.submitState}
				message={THIS_STATE.message}>

				<TextGroup type="text"
					label="Username"
                    value={THIS_STATE.username}
					validationState={THIS_STATE.validationState}
					message={THIS_STATE.message}
					handleChange={FormActions.inputChange} />

				<TextGroup type="password"
					label="Password"
					value={THIS_STATE.password}
					validationState={THIS_STATE.validationState}
					message={THIS_STATE.message}
					handleChange={FormActions.inputChange} />

				<TextGroup type="password"
					label="Confirm password"
                    name="confirmedPassword"
					value={THIS_STATE.confirmedPassword}
					validationState={THIS_STATE.validationState}
					message={THIS_STATE.message}
					handleChange={FormActions.inputChange} />

				<TextGroup type="text"
					label="First name"
                    name="firstName"
					value={THIS_STATE.firstName}
					validationState={THIS_STATE.validationState}
					message={THIS_STATE.message}
					handleChange={FormActions.inputChange} />

				<TextGroup type="text"
                    label="Last name"
					name="lastName"
					value={THIS_STATE.lastName}
					validationState={THIS_STATE.validationState}
					message={THIS_STATE.message}
					handleChange={FormActions.inputChange} />

				<TextGroup type="number"
					label="age"
					value={THIS_STATE.age}
					validationState={THIS_STATE.validationState}
					message={THIS_STATE.message}
					handleChange={FormActions.inputChange} />

                <RadioGroup validationState={ THIS_STATE.genderValidationState } message={ THIS_STATE.message }>
                    <RadioElement name="gender"
                                  value="Male"
                                  selectedValue = { THIS_STATE.gender }
                                  handleChange={ FormActions.inputChange } />

                    <RadioElement name="gender"
                                  value="Female"
                                  selectedValue = { THIS_STATE.gender }
                                  handleChange={ FormActions.inputChange } />
                </RadioGroup>
				<Submit type="btn-primary" value="Add" />
			</Form>
		)
	}
}