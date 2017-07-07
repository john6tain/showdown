import alt from '../alt'
import CombatantActions from '../actions/CombatantActions';

class ShowdownStore {
    constructor() {
        this.bindActions(CombatantActions);

        this.posts = [];
    }

    onGetShowdownSuccess(posts) {
        this.posts = posts;
    }
}

export default alt.createStore(ShowdownStore);