import React from 'react';
import CombatantActions from '../../actions/CombatantActions';
import FormActions from '../../actions/FormActions';
import FormStore from '../../stores/FormStore';
import AddCombatant from '../combatant/AddCombatant';

export default class AddCombatantContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { AddCombatant: {} };

        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState({ AddCombatant: state.AddCombatant });
    }

    componentDidMount() {
        FormStore.init('AddCombatant');
        FormStore.listen(this.onChange);
    }

    componentWillUnmount() {
        FormStore.unlisten(this.onChange);
    }

    handleSubmit(e) {
        e.preventDefault();

        let name = this.state.AddCombatant.name;
        let image = this.state.AddCombatant.image;
        let description = this.state.AddCombatant.description;
        if (!name || !image) {
            FormActions.validationFail(!name? 'name' : 'image');
            return;
        }

        CombatantActions.addCombatant({ name,  image,  description });
    }

    render() {
        let THIS_STATE = this.state.AddCombatant;
        console.log('[AddCombatant]', THIS_STATE);
        let form = {
            title: 'Add Combatant',
            handleSubmit: this.handleSubmit.bind(this),
            submitState: THIS_STATE.formSubmitState,
        };
        let input = {
            name: {
                    value: THIS_STATE.name,
                    validationState: THIS_STATE.nameValidationState
                },
            image: {
                    value: THIS_STATE.image,
                    validationState: THIS_STATE.imageValidationState
                },
            description: { value: THIS_STATE.description }
        };
        return <AddCombatant form={ form }
                             input={ input }
                             message={ THIS_STATE.message }
                             onInputChange={ FormActions.inputChange } />;
    }
}