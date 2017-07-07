import alt from '../alt'
import UserActions from '../actions/UserActions';

class UserStore {
    constructor() {
        this.bindActions(UserActions);

        this.user = {gender:'Male'};
    }

    onRegisterSuccess(data) {
        console.log(data);
    }

    onLoginSuccess(data) {
         window.sessionStorage.setItem('token',data.token);
    }

    onLoginFail(err) {
         console.log(err);
    }

    onRegisterFail(err) {
         console.log(err);
    }
}

export default alt.createStore(UserStore);