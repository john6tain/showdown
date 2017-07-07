import React from 'react';
import CombatantActions from '../../actions/CombatantActions';
import ShowdownStore from '../../stores/ShowdownStore'
import Showdown from '../Showdown';

export default class ShowdownContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = ShowdownStore.getState();

        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    componentDidMount() {
        ShowdownStore.listen(this.onChange);
        CombatantActions.getShowdown();
    }

    componentWillUnmount() {
        ShowdownStore.unlisten(this.onChange);
    }

    upVote(postId) {
        console.log('upvoting', postId);
    }

    render() {
        return <Showdown posts={ this.state.posts } upVote={ this.upVote } context={ this } />;
    }
}
