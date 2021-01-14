import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            vehicles: []
        }
    }
    componentDidMount() {
        fetch('/api/')
            .then(res => res.json())
            .then((result) => {
                console.log(result)
                this.setState({
                    isLoaded: true,
                    vehicles: result
                });
            })
            .catch((error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        return (
            <div>
                <div style={styles.container}>
                    <h1>I'M A DIV OMGGGGG</h1>
                </div>
                <div style={styles.container}>
                    <div>{JSON.stringify(this.state.vehicles)}</div>
                </div>
            </div>
        )
    }
}


const styles = {
    container: {
        border: '1px black solid',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
    },
};

export default App;