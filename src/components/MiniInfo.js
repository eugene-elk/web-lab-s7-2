import React, {Component} from 'react';

class MiniInfo extends Component {
    state = {
        cats: 10
    };

    

    render() {
        return (
            <div>
                cats: {this.state.cats}
            </div>
        )
    }

}

export default MiniInfo