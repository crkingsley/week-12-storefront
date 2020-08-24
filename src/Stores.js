import React from 'react'

class Stores extends React.Component {
    constructor() {
        super()
        this.state = {
            response: []
        }
    }

    componentDidMount() {
        this.callApi()
            .then((response) => {
                this.setState({ response: response.length + ' stores found' })
            })
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('http://localhost:3001/stores');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        return (
            <div>
                <div>Stores Place Holder</div>
                <div>{this.state.response}</div>
            </div>
        )
    }
}

export default Stores