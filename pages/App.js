import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import Draw from '../components/Draw';
import ScrollNav from '../components/ScrollNav';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';

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
                <ScrollNav handleShowDraw={this.handleShowDraw}/>
                <Draw open={this.state.showDraw} handleOnClose={this.handleCloseDraw} />
                <Toolbar />
                <Container >
                    <Box my={2}>
                        {[...new Array(40)]
                            .map(
                                () => `Cras mattis consectetur purus sit amet fermentum.
                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                            )
                            .join('\n')}
                    </Box>
                </Container>
            </div>
        )
    }
}

export default App;

