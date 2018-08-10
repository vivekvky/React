import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './App.css';


import ExportApplication from '../containers/App';
import Home from '../components/Home';

import ListofSurveyors from '../containers/List';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTab: 'Home'
        };
    }




    render() {



        return (
            <div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Port Konnect Cargo Surveyor Master !</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#" onClick={() => this.setState({ currentTab: 'Home' })}>Home</NavItem>
                        <NavItem eventKey={2} href="#" onClick={() => this.setState({ currentTab: 'Edit Surveyor' })}>Edit Surveyor</NavItem>
                        <NavItem eventKey={2} href="#" onClick={() => this.setState({ currentTab: 'Create Surveyor' })}>Add Surveyor</NavItem>
                        <NavItem eventKey={3} href="#" onClick={() => this.setState({ currentTab: `List of Surveyors` })}>List of Surveyors</NavItem>
                    </Nav>
                </Navbar>
                <div className="container">
                    {this.state.currentTab === 'Home' ? <Home /> : false}
                    {this.state.currentTab === 'Edit Surveyor' ? <ExportApplication /> : false}
                    {this.state.currentTab === 'Create Surveyor' ? <ExportApplication new={this.state.currentTab} /> : false}
                    {this.state.currentTab === 'List of Surveyors' ? <ListofSurveyors /> : false}
                </div>
            </div>
        );

    }
}

export default App;
