import React from 'react';
import UserActions from '../../actions/UserActions';
import UserStore from '../../stores/UserStore';

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
		e.preventDefault();
		const target = e.target;
		const field = target.name;
		const value = target.value;

		const user = this.state.user;
		user[field] = value;
		this.setState(user);
	}

	render() {
		return (
			<form onSubmit={this.handleRegister} action="#">
				<label htmlFor="username">Username:</label>
				<input type="text" name="username" onChange={this.handleOnChange} required/>
				<label htmlFor="password">Password:</label>
				<input type="password" name="password" onChange={this.handleOnChange} />
				<label htmlFor="confirmedPassword">Confirmed Password:</label>
				<input type="password" name="confirmedPassword" onChange={this.handleOnChange} required/>
				<label htmlFor="firstName">FirstName:</label>
				<input type="text" name="firstName" onChange={this.handleOnChange} required/>
				<label htmlFor="lastName">LastName:</label>
				<input type="text" name="lastName" onChange={this.handleOnChange} required/>
				<label htmlFor="age">Age:</label>
				<input type="number" name="age" onChange={this.handleOnChange} required/>
				<label htmlFor="gender">Gender:</label>
				<select name="gender" onChange={this.handleOnChange} >
					<option>Male</option>
					<option>Female</option>
				</select>
				<button>Register</button>
			</form>
		)
	}
}