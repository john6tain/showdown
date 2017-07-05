import React from 'react';

export default class RegisterFrom extends React.Component {
    render() {
        return (
            <div className="container">
                <form>
					<label htmlFor="name">Name:</label>
					<input type="text" name="name" onChange={this.props.handleOnChange}/>
					<label htmlFor="username">Username:</label>
					<input type="text" name="username" onChange={this.props.handleOnChange}/>
					<label htmlFor="password">Password:</label>
					<input type="password" name="password" onChange={this.props.handleOnChange}/>
					<button onClick={this.props.handleRegister}>Register</button>
				</form>
            </div>
        )
    }
}