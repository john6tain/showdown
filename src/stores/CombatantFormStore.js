import alt from '../alt';
import CombatantActions from '../actions/CombatantActions';

class CombatantFormStore {
    constructor() {
        this.bindActions(CombatantActions);

        this.name = '';
        this.description = '';
        this.imageUrl = '';
        this.formMessage = '';
    }

    onHandleInputChange(field, value) {
        if (!this[field]) {
            this.formMessage = 'Invalid input name! Stop tempering you hacker!';
            return;
        }

        this[field] = value;
    }
}

export default alt.createStore(CombatantFormStore);
