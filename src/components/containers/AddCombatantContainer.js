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

        let name = this.state.name;
        let image = this.state.image;
        let description = this.state.description;
        if (!name || !image) {
            console.log('[AddCombatantContainer]', !name);
            FormActions.validationFail(!name? 'name' : 'image');
            return;
        }

        CombatantActions.addCombatant({ name,  image,  description });
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
            image: {
                    value: this.state.image,
                    validationState: this.state.imageValidationState
                },
            description: { value: this.state.description }
        };
        return <AddCombatant form={ form }
                             input={ input }
                             message={ this.state.message }
                             onInputChange={ FormActions.inputChange } />;
    }
}