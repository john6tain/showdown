import alt from '../alt'
import CombatantActions from '../actions/CombatantActions';

class ShowdownStore {
    constructor() {
        this.bindActions(CombatantActions);

        this.combatants = [];
    }

    onGetShowdownSuccess(response) {
        this.combatants = response.combatants;
        if (response.message) {
            this.message = response.message;
        }
    }
}

export default alt.createStore(ShowdownStore);