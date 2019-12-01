import React, {Component} from 'react';

class MiniInfo extends Component {
    state = {
        cats: 10
    };



    increaseCats(sobytie) {
        this.setState({
            cats: this.state.cats + 1
    });
    };

    render() {
        return (
            <div>
                {this.props.AnimalName}: {this.state.cats}
                <br/>
                <button onClick={() => this.increaseCats()}> Increase Cats</button>
            </div>
        )
    }

}

export default MiniInfo