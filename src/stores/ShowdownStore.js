import alt from '../alt'
import PostActions from '../actions/PostActions';

class ShowdownStore {
    constructor() {
        this.bindActions(PostActions);

        this.posts = [];
    }

    onGetShowdownSuccess(posts) {
        this.posts = posts;
    }
}

export default alt.createStore(ShowdownStore);