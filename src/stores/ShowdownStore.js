import alt from '../alt'
import PostActions from '../actions/PostActions';

class ShowdownStore {
    constructor() {
        this.bindActions(PostActions);

        this.postLeft = {};
        this.postRight = {};
    }

    onGetShowdownSuccess(posts) {
        this.postLeft = posts[0];
        this.postRight = posts[1];
    }
}

export default alt.createStore(ShowdownStore);