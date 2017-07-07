import React from 'react';
import CombatantActions from '../../actions/CombatantActions';
import FormActions from '../../actions/FormActions';
import CombatantFormStore from '../../stores/CombatantFormStore';
import AddCombatant from '../combatant/AddCombatant';

export default class AddCombatantContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = CombatantFormStore.getState();

        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    componentDidMount() {
        CombatantFormStore.listen(this.onChange);
    }

    componentWillUnmount() {
        CombatantFormStore.unlisten(this.onChange);
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('[AddCombatantContainer] Adding combatant', this.state);
        CombatantActions.addCombatant({
            name: this.state.name,
            image: this.state.image,
            description: this.state.description
        });
    }

    render() {
        let form = {
            title: 'Add Combatant',
            handleSubmit: this.handleSubmit.bind(this),
            submitState: this.state.formSubmitState,
        };
        let input = {
            name: {
                    value: this.state.name,
                    validationState: this.state.nameValidationState
                },
            imageUrl: {
                    value: this.state.image,
                    validationState: this.state.imageUrlValidationState
                },
            description: { value: this.state.description }
        };
        return <AddCombatant form={ form }
                             input={ input }
                             message={ this.state.message }
                             onInputChange={ FormActions.inputChange } />
    }
}