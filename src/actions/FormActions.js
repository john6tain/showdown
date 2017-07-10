import alt from '../alt';

class FormActions {
    constructor() {
        this.generateActions(
            'handleInputChange',
            'fieldValidationFail'
        );
    }

    inputChange(e) {
        let field = e.target.name;
        let value = e.target.value;
        console.log('[FormActions]', field, value);
        this.handleInputChange({ field, value });

        return true;
    }

    validationFail(field) {
        this.fieldValidationFail(field);

        return true;
    }
}

export default alt.createActions(FormActions);