import alt from '../alt';

class FormActions {
    constructor() {
        this.generateActions(
            'handleInputChange'
        );
    }

    inputChange(e) {
        let field = e.target.name;
        let value = e.target.value;
        console.log('[FormActions] input change', field, value);
        this.handleInputChange({ field, value });

        return true;
    }
}

export default alt.createActions(FormActions);