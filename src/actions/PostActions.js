import alt from '../alt';
import data from '../__fakeData';

class PostActions {
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
    }
}

export default alt.createActions(PostActions);