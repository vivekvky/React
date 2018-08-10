import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { fetchAllSurveyor } from '../actions/actions_info';
import ExportApplication from '../containers/App';
class ListofSurveyors extends Component {

    constructor(props) {
        super(props);
        this.state = {
            SurveyorsList: [],
            id: ''
        };
    }

    componentDidMount() {
        this.props.dispatch(fetchAllSurveyor());
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (nextProps.surveyorList) {
            this.setState({
                SurveyorsList: nextProps.surveyorList
            })
        }
    }

    edit(id, args) {
        this.setState({
            id: id
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-9">
                        <Table striped bordered condensed hover>
                            <thead>
                                <tr>
                                    <th>Surveyor Name</th>
                                    <th>Surveyor Code</th>
                                    <th>Contact person</th>
                                    <th>Phone</th>
                                    {/* <th>Edit</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.SurveyorsList.map(item => {
                                    return (
                                        <tr key={"item-" + item.SurveyorName}>
                                            <td>{item.SurveyorName}</td>
                                            <td>{item.SurveyorCode}</td>
                                            <td>{item.ContactPerson}</td>
                                            <td>{item.PhoneNo}</td>
                                            {/* <td>
                                                <Button bsStyle="info" onClick={this.edit.bind(this, item.SurveyorId)}>Save</Button>
                                            </td> */}
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
                {/* {this.state.id !== '' ? <ExportApplication surveyorid={this.state.id} /> : false} */}
            </div>
        );

    }
}


export default ListofSurveyors;
