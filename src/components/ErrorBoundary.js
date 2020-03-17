import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        console.log("component did catch running");
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooooooopppssss not good, bro.</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;