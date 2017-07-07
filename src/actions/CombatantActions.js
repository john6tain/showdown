import alt from '../alt';
import data from '../__fakeData';

class CombatantActions {
    constructor() {
        this.generateActions(
            'getShowdownSuccess',
            'getShowdownFail'
        );
    }

    getShowdown() {
        data.get()
            .then(posts => this.getShowdownSuccess(posts))
            .catch(err => this.getShowdownFail(err));

        return true;
    }
}

export default alt.createActions(CombatantActions);