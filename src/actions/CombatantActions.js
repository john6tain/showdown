import alt from '../alt';
import data from '../__fakeData';

class CombatantActions {
    constructor() {
        this.generateActions(
            'getShowdownSuccess',
            'getShowdownFail',
            'handleInputChange'
        );
    }

    getShowdown() {
        data.get()
            .then(posts => this.getShowdownSuccess(posts))
            .catch(err => this.getShowdownFail(err));

        return true;
    }

    updateInput(field, value) {
        this.handleInputChange(field, value);
    }
}

export default alt.createActions(CombatantActions);