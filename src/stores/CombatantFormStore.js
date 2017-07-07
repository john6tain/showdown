import alt from '../alt';
import CombatantActions from '../actions/CombatantActions';

class CombatantFormStore {
    constructor() {
        this.bindActions(CombatantActions);

        this.name = '';
        this.nameValidationState = '';
        this.description = '';
        this.image = '';
        this.imageUrlValidationState = '';
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

        this[input.field] = input.value;
    }
}

export default alt.createStore(CombatantFormStore);
