/**
 * Created by Yavor on 06-Jul-17.
 */

// Actions for listing cats. Used for pages Top 10 and List all cats
import alt from '../alt';
import data from '../__fakeData';

class ListActions {
    constructor() {
        this.generateActions(
            'getTopTenSuccess',
            'getTopTenFail'
        );
    }

    getTopTen() {
        data.getTopTen()
            .then(cats => this.getTopTenSuccess(cats))

        return true;
    }
}

export default alt.createActions(ListActions);