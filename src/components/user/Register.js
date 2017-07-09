import React from 'react';
import UserActions from '../../actions/UserActions';
import FormActions from '../../actions/FormActions';
import UserStore from '../../stores/UserStore';
import Form from '../form/Form';
import TextGroup from '../form/TextGroup';
import Submit from '../form/Submit';

export default class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = UserStore.getState();
		this.onChange = this.onChange.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleRegister = this.handleRegister.bind(this);
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

	handleRegister(e) {
		e.preventDefault();
		UserActions.register(this.state.user);
		this.props.history.push("/login");
	}

	handleOnChange(e) {
		FormActions.inputChange(e);
	}

	render() {
		return (
			<Form handleSubmit={this.handleRegister}
				title="Login"
				submitState={this.state.submitState}
				message={this.state.message}>

				<TextGroup type="text"
					label="username"
					validationState={this.state.validationState}
					message={this.state.message}
					handleChange={this.handleOnChange} />

				<TextGroup type="password"
					label="password"
					value={this.state.value}
					validationState={this.state.validationState}
					message={this.state.message}
					handleChange={this.handleOnChange} />
				<TextGroup type="password"
					label="confirmedPassword"
					value={this.state.value}
					validationState={this.state.validationState}
					message={this.state.message}
					handleChange={this.handleOnChange} />
				<TextGroup type="text"
					label="firstName"
					value={this.state.value}
					validationState={this.state.validationState}
					message={this.state.message}
					handleChange={this.handleOnChange} />
				<TextGroup type="text"
					label="lastName"
					value={this.state.value}
					validationState={this.state.validationState}
					message={this.state.message}
					handleChange={this.handleOnChange} />
				<TextGroup type="number"
					label="age"
					value={this.state.value}
					validationState={this.state.validationState}
					message={this.state.message}
					handleChange={this.handleOnChange} />
				<select name="gender" onChange={this.handleOnChange} >
					<option>Male</option>
					<option>Female</option>
				</select>
				<Submit type="btn-primary" value="Add" />
			</Form>
		)
	}
}