import alt from '../alt';
import CombatantActions from '../actions/CombatantActions';
import FormActions from '../actions/FormActions';

class CombatantFormStore {
    constructor() {
        this.bindActions(CombatantActions);
        this.bindActions(FormActions);

        this.name = '';
        this.nameValidationState = '';
        this.description = '';
        this.image = '';
        this.imageValidationState = '';
        this.formSubmitState = '';
        this.message = '';
    }

    onHandleInputChange(input) {
        if (this[input.field] === undefined) {
            this.message = 'Invalid input name! Stop tempering you hacker!';
            this.formSubmitState = 'has-error';
            this.name = '';
            this.image = '';
            this.description = '';
            return;
        }
        this[`${ input.field }ValidationState`] = '';
        this[input.field] = input.value;
    }

    onAddCombatantSuccess() {
        this.name = '';
        this.nameValidationState = '';
        this.description = '';
        this.image = '';
        this.imageUrlValidationState = '';
        this.formSubmitState = '';
        this.message = '';
    }

    onValidationFail(field) {
        this[`${field}ValidationState`] = 'has-error';
        this.message = `Please enter ${field}`;
    }
}

export default alt.createStore(CombatantFormStore);
