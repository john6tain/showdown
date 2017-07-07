import alt from '../alt';
import data from '../__fakeData';
import $ from 'jquery';

class CombatantActions {
    constructor() {
        this.generateActions(
            'getShowdownSuccess',
            'getShowdownFail',
            'handleInputChange',
            'addCombatantSuccess',
            'addCombatantFail'
        );
    }

    getShowdown() {
        data.get()
            .then(posts => this.getShowdownSuccess(posts))
            .catch(err => this.getShowdownFail(err));

        return true;
    }

    updateInput(e) {
        let field = e.target.name;
        let value = e.target.value;
        this.handleInputChange({ field, value });

        return true;
    }

    addCombatant(combatantData) {
        let request = {
            method: 'post',
            url: 'http://localhost:3001/combatant/add',
            data: JSON.stringify(combatantData),
            contentType: 'application/json',
            dataType: 'jsonp'
        };
        $.ajax(request)
            .done(combatant => this.addCombatantSuccess(combatant))
            .fail(err => console.log(err));

        return true;
    }
}

export default alt.createActions(CombatantActions);