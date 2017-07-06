/**
 * Created by Yavor on 06-Jul-17.
 */
import alt from '../alt'
import ListActions from '../actions/ListActions';

class ListStore {
    constructor() {
        this.bindActions(ListActions);

        this.cats = [];
        this.error = '';
    }

    onGetTopTenSuccess(topTen) {
        this.cats = topTen;
    }

    onGetTopTenFail(err) {
        this.error = err
    }
}

export default alt.createStore(ListStore);