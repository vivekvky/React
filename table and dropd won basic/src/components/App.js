import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Table } from 'react-bootstrap';
import Select from 'react-select';
import './App.css';

import { fetchInfo } from '../actions/actions_info';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: []
        };
    }

    componentDidMount() {
        this.props.dispatch(fetchInfo());
    }

    handleChange(selectedOption) {
        this.setState({
            selectedOption: selectedOption && selectedOption.length !== 0 ? selectedOption : []
        });
    }

    render() {

        const selectList = this.props.info.map(item => {
            return { value: item.name, label: item.name }
        });

        return (
            <div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Port Konnect Cargo!</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Home</NavItem>
                        <NavDropdown eventKey={3} title="Data Views" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>List</MenuItem>
                            <MenuItem eventKey={3.2}>Search</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>List of Customers</h1>
                            <p>Here we'll list some data from a bunch of smokin' sources!</p>
                            <div className="row">
                                <div className="col-sm-3">
                                    <Select
                                        name="form-feild-name"
                                        value={this.state.selectedOption}
                                        onChange={this.handleChange.bind(this)}
                                        options={selectList}
                                        clearable={true}
                                    />
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-9">
                                    <Table striped bordered condensed hover>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>User Name</th>
                                                <th>Zip code</th>
                                                <th>Company</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.info.map(item => {
                                                console.log(this.state.selectedOption)
                                                if (this.state.selectedOption === '' || this.state.selectedOption.length === 0 || item.name === this.state.selectedOption.value) {
                                                    return (
                                                        <tr key={"item-" + item.name}>
                                                            <td>{item.name}</td>
                                                            <td>{item.address.zipcode}</td>
                                                            <td>{item.username}</td>
                                                            <td>{item.company.name}</td>
                                                        </tr>
                                                    )
                                                }
                                            })}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default App;
