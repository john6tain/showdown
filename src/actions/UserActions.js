import alt from '../alt';
import $ from 'jquery';

class UserActions {
    constructor() {
        this.generateActions(
            'registerSuccess',
            'registerFail',
            'loginSuccess',
            'loginFail',
            'logoutSuccess'
        );
    }

    register(user) {
        $.ajax({
            type: "POST",
            url: "http://localhost:3001/user/register",
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify(user),
            success: (data) => this.registerSuccess(data),
            error: (err) => this.registerFail(err.responseJSON)
        });

        return true;
    }

    login(user) {
        $.ajax({
            type: "POST",
            url: "http://localhost:3001/user/login",
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify(user),
            success: (data) => this.loginSuccess(data),
            error: (err) => this.loginFail(err.responseJSON)
        });

        return true;
    }

    logout() {
        this.logoutSuccess();
        return true;
    }

}

export default alt.createActions(UserActions);