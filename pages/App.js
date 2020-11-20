import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import Nav from '../components/Nav';
import Draw from '../components/Draw';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDraw: false
        }
    }

    handleShowDraw = () => {
        this.setState({
            showDraw: true
        })
    }

    handleCloseDraw = () => {
        this.setState({
            showDraw: false
        })
    }

    render() {
        return (
            <div className="app">
                <Nav handleShowDraw={this.handleShowDraw} />
                <Draw open={this.state.showDraw} handleOnClose={this.handleCloseDraw} />
                <Container >
                    abc
                </Container>
            </div>
        )
    }
}

export default App;

