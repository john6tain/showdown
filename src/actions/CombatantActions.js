import alt from '../alt';
import $ from 'jquery';

class CombatantActions {
    constructor() {
        this.generateActions(
            'getShowdownSuccess',
            'getShowdownFail',
            'addCombatantSuccess',
            'addCombatantFail',
            'upVoteFail'
        );
    }


    getShowdown() {
        let request = {
            type: 'get',
            url: 'http://localhost:3001/showdown/get',
        };
        $.ajax(request)
            .done(response => this.getShowdownSuccess(response))
            .fail(err => this.getShowdownFail(err.responseJSON));

        return true;
    }

    addCombatant(combatant) {
        let request = {
            type: 'post',
            url: 'http://localhost:3001/combatant/add',
            contentType: 'application/json',
            data: JSON.stringify(combatant)
        };
        $.ajax(request)
            .done(combatant => this.addCombatantSuccess(combatant))
            .fail(err => this.addCombatantFail(err.responseJSON));

        return true;
    }

    upVote(combatantId) {
        let request = {
            type: 'method',
            url: 'http://localhost:3001/showdown/upVote',
            contentType: 'application/json',
            data: JSON.stringify(combatantId)
        };
        $.ajax(request)
            .done(() => this.getShowdown())
            .faiL(err => this.upVoteFail(err.responseJSON));
    }
}

export default alt.createActions(CombatantActions);