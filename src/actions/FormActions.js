import alt from '../alt';

class FormActions {
    constructor() {
        this.generateActions(
            'handleInputChange',
            'validationFail'
        );
    }

    inputChange(e) {
        let field = e.target.name;
        let value = e.target.value;
        this.handleInputChange({ field, value });

        return true;
    }

    validationFail(field) {
        this.validationFail(field);
    }
}

export default alt.createActions(FormActions);