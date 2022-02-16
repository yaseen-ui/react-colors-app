import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.frequentVisit();
    }

    frequentVisit() {
        setInterval(() => {
            this.setState({ date: new Date() });
        }, 1000);
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()} : {this.state.date.getMilliseconds()}.</h2>
            </div>
        );
    }
}

export default Clock;