import React, {Component} from 'react';

class MiniInfo extends Component {
    state = {
        cats: 10,
        isLoaded: false,
        text: ""
    };

    updateText() {
        let date = new Date();
        date = date.getTime();
        this.setState({isLoaded: false});
        fetch(`http://fizmatspb.ru/itmoweb/lab3/requester.php?v=${date}`)
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

    componentDidMount() {
        this.updateText();
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
                <br/>
                <button onClick={() => this.updateText()}>  Update Text</button>
            </div>
        )
    }

}

export default MiniInfo