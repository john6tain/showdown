import React from 'react';
import GrandChild from './GrandChild';

export default class Child extends React.Component {

    render() {
        let images = [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ84hMKGYnLjbYASltpjWRIIumEGrwWPmkDFVkkr4hppCPekUIY',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTKtYBBr8doTiJ7TjTwLgXAq_G7QDZ4HtbWoeWcsi0_ghBHap_QGVdr9k'
        ];
        let grandChildren = images.map((image, index) => (
            <GrandChild key={ index }
                        url={ image } />
        ));
        return (
            <div>
                { grandChildren }
            </div>
        )
    }
}