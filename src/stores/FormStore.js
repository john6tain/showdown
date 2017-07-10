import alt from '../alt';
import toastr from 'toastr';

import CombatantActions from '../actions/CombatantActions';
import UserActions from '../actions/UserActions';
import FormActions from '../actions/FormActions';
import Auth from '../components/app/Auth';

class FormStore {
    _activeStore = null;

    constructor() {
        this.bindActions(CombatantActions);
        this.bindActions(UserActions);
        this.bindActions(FormActions);

        this.Register = {};
        this.Login = {};
        this.AddCombatant = {};

        init = init.bind(this); // Store this context to be used to bind the init method.
    }

    onHandleInputChange(input) {
        if (this[this._activeStore][input.field] === undefined) {
            this.message = 'Invalid input name! Stop tempering you hacker!';
            this.formSubmitState = 'has-error';
            this[this._activeStore] = {};
            return;
        }

        this[this._activeStore][`${ input.field }ValidationState`] = '';
        this[this._activeStore][input.field] = input.value;
    }

    onFieldValidationFail(field) {
        console.log('[FormStore] fail', field);
        this[this._activeStore][`${ field }ValidationState`] = 'has-error';
        this[this._activeStore].message = `Please enter ${ field }`;
    }

    // AddCombatant handlers
    onAddCombatantSuccess() {
        console.log('[AddCombatantStore] inside store');
        storeCache.AddCombatant.reset().read(this);

        toastr.success('Combatant added!');
    }

    onValidationFail(field) {
        this[`${field}ValidationState`] = 'has-error';
        this.message = `Please enter ${field}`;
    }

    // Register handles
    onRegisterSuccess(data) {
        toastr.success(data.message);
    }

    onRegisterFail(err) {
        toastr.error(err.error);
    }

    // Login handlers
    onLoginSuccess(data) {
        toastr.success(data.message);
        Auth.authenticateUser(data.token);

    }

    onLoginFail(err) {
        toastr.error(err.error);
    }

    onLogout() {
        toastr.warning('You have successfully logged out Bye!');
        Auth.deauthenticateUser();
    }
}

let Store = alt.createStore(FormStore);
Store.init = init; // Exposed init method. We call it from react components to get the initial or cached values of store;

export default Store;

function init(storeName) {
    if (this._activeStore) {
        storeCache[this._activeStore].write(this);
    }
    storeCache[storeName].read(this);
    this._activeStore = storeName;
}


let storeCache = {
    AddCombatant:  {
        name: '',
        nameValidationState: '',
        description: '',
        image: '',
        imageValidationState: '',
        formSubmitState: '',
        message: '',
        write(that) {
            this.name = that.AddCombatant.name;
            this.nameValidationState = that.AddCombatant.nameValidationState;
            this.description = that.AddCombatant.description;
            this.image = that.AddCombatant.image;
            this.imageValidationState = that.AddCombatant.imageValidationState;
            this.formSubmitState = that.AddCombatant.formSubmitState;
            this.message = that.AddCombatant.message;

        },
        read(that) {
            that.AddCombatant.name = this.name;
            that.AddCombatant.nameValidationState = this.nameValidationState;
            that.AddCombatant.description = this.description;
            that.AddCombatant.image = this.image;
            that.AddCombatant.imageValidationState = this.imageValidationState;
            that.AddCombatant.formSubmitState = this.formSubmitState;
            that.AddCombatant.message = this.message;
        },
        reset() {
            this.name = '';
            this.nameValidationState = '';
            this.description = '';
            this.image = '';
            this.imageValidationState = '';
            this.formSubmitState = '';
            this.message = '';

            return this;
        }
    },
    Register: {
        username: '',
        password: '',
        confirmedPassword: '',
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        read(that) {
            that.Register.username = this.username;
            that.Register.password = this.password;
            that.Register.confirmedPassword = this.confirmedPassword;
            that.Register.firstName = this.firstName;
            that.Register.lastName = this.lastName;
            that.Register.age = this.age;
            that.Register.gender = this.gender;
        },
        write(that) {
            this.username = that.Register.username;
            this.password = that.Register.password;
            this.confirmedPassword = that.Register.confirmedPassword;
            this.firstName = that.Register.firstName;
            this.lastName = that.Register.lastName;
            this.age = that.Register.age;
            this.gender = that.Register.gender;
        },
        reset() {
            this.username = '';
            this.password = '';
            this.confirmedPassword = '';
            this.firstName = '';
            this.lastName = '';
            this.age = '';
            this.gender = '';

            return this;
        }
    },
    Login: {
        username: '',
        password: '',
        read(that) {
            that.Login.username = this.username;
            that.Login.password = this.password;
        },
        write(that) {
            this.username = that.Login.username;
            this.password = that.Login.password;
        },
        reset() {
            this.username = '';
            this.password = '';

            return this;
        }
    }
};