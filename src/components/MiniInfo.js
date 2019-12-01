import React, {Component} from 'react';

class MiniInfo extends Component {
    state = {
        cats: 10,
        isLoaded: false,
        text: ""
    };

    componentDidMount() {
        fetch("http://fizmatspb.ru/itmoweb/lab3/requester.php")
            .then((response) => {
                return response.text()
            })
            .then((response) => {
                    this.setState({
                            isLoaded: true,
                            text: response
                        }
                    )
                }
            )
            .catch(() => {
                console.log("Fetch Error")
            })
    }

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
                <br/>
                {!this.state.isLoaded ? "text is now loading" : this.state.text}
            </div>
        )
    }

}

export default MiniInfo