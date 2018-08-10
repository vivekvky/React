import React, { Component } from 'react';
import Select from 'react-select';
import { Table } from 'react-bootstrap'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

class SelectComponent extends Component {
    state = {
        selectedOption: '',
        jsonList: []
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
            .then(response => response.json())
            .then(json => {
                this.setState({ jsonList: json })
                console.log(json)
            })
            .catch(error => console.log(error))
    }

    handleChange(selectedOption) {
        this.setState({ selectedOption: selectedOption.value })
        console.log(`Selected: ${selectedOption.label}`);
    }

    render() {
        const { selectedOption } = this.state;
        const selectList = this.state.jsonList.map(item => {
            return { value: item.id, label: item.name }
        })

        return (
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <Select
                                value={this.state.selectedOption.value}
                            onChange={this.handleChange.bind(this)}
                            options={selectList}
                            clearable={true}
                        />
                    </div>
                    <div className="col-md-6">
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-8">
                        <Table stripped="true" bordered condended="true" hover>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>User Name</th>
                                    <th>Zip</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.jsonList.map((item, i) => {
                                    console.log(this.state.selectedOption)
                                    if (item.id === this.state.selectedOption || this.state.selectedOption === '') {
                                        return (
                                            <tr key={i}>
                                                <td >{item.id}</td>
                                                <td >{item.name}</td>
                                                <td >{item.username}</td>
                                                <td >{item.address.zipcode}</td>
                                            </tr>
                                        )
                                    }
                                })}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div >
        )
    }
}

export default SelectComponent;