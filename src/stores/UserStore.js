import alt from '../alt';
import Auth from '../components/app/Auth';
import toastr from 'toastr';
import UserActions from '../actions/UserActions';

class UserStore {
    constructor() {
        this.bindActions(UserActions);

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
}

export default alt.createStore(UserStore);