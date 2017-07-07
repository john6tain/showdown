import React from 'react';
import UserActions from '../../actions/UserActions';
import UserStore from '../../stores/UserStore';

export default class LoginFrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = UserStore.getState();
        this.onChange = this.onChange.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
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
        UserActions.login(this.state.user);
    }

    handleOnChange(e) {
        const target = e.target;
        const field = target.name;
        const value = target.value;

        const user = this.state.user;
        user[field] = value;
        this.setState(user);
    }

    render() {
        return (
            <div className="container">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" onChange={this.handleOnChange} />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" onChange={this.handleOnChange} />
                    <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}