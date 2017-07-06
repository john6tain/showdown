/**
 * Created by Yavor on 06-Jul-17.
 */
import React from 'react';
import ListActions from '../../actions/ListActions';
import ListStore from '../../stores/ListStore'
import Cats from '../Cats';

export default class TopTenContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = ListStore.getState();

        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    componentDidMount() {
        ListStore.listen(this.onChange);
        ListActions.getTopTen();
    }

    componentWillUnmount() {
        ListStore.unlisten(this.onChange);
    }


    render() {

        return <Cats cats={ this.state.cats } context={ this } />;
    }
}
