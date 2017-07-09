import alt from '../alt';
import Auth from '../components/app/Auth';
import toastr from 'toastr';
import UserActions from '../actions/UserActions';
import FormActions from '../actions/FormActions';

class UserStore {
    constructor() {
        this.bindActions(UserActions);
        this.bindActions(FormActions);

        this.user = { gender: 'Male' };
    }

    onRegisterSuccess(data) {
        toastr.success(data.message);
    }

    onLoginSuccess(data) {
        toastr.success(data.message);
        Auth.authenticateUser(data.token);

    }

    onLoginFail(err) {
        toastr.error(err.error);
    }

    onRegisterFail(err) {
        toastr.error(err.error);
    }

    onLogout() {
        toastr.warning('You have successfully logged out Bye!');
        Auth.deauthenticateUser();
    }
    onHandleInputChange(input) {
        this.user[input.field] = input.value;
    }
}

export default alt.createStore(UserStore);