import alt from '../alt';
import $ from 'jquery';

class UserActions {
    constructor() {
        this.generateActions(
            'registerSuccess',
            'registerFail',
            'loginSuccess',
            'loginFail'
        );
    }

    register(user) {
        $.ajax({
            type: "POST",
            url: "http://localhost:3001/user/register",
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify(user),
            success: (data) =>  this.registerSuccess(data),
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
            success: (data) =>  this.loginSuccess(data),
            error: (err) => this.loginFail(err.responseJSON)
        });

        return true;
    }

}

export default alt.createActions(UserActions);