import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';


class ExportApplication extends Component {


    constructor(props) {
        super(props);
        this.state = {
            surveyor: {
            },
            editing: false,
            error: false,
            new: true
        }
    }

    componentDidMount() {
        this.props.fetchSurveyor();
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (!nextProps.new) {
            if (nextProps.surveyor) {
                this.setState({
                    surveyor: nextProps.surveyor,
                    new: false,
                })
            }
        } else {
            this.setState({
                editing: true
            })
        }
    }

    changeModel(type, event) {
        var surveyorCopy = JSON.parse(JSON.stringify(this.state.surveyor));
        surveyorCopy[type] = event.target.value;
        this.setState({
            surveyor: surveyorCopy
        })
    }


    save() {
        let error = false;
        var objKeys = ['SurveyorCode', 'SurveyorName', 'ContactPerson', 'PhoneNo', 'EmailId', 'Address', 'Description']
        objKeys.forEach(function (element) {
            if (this.state.surveyor[element] === '' || this.state.surveyor[element] === undefined) {
                error = true;
            }
        }.bind(this));
        if (!error) {
            if (!this.state.new) {
                this.props.editSurveyor(this.state.surveyor);
            } else {
                this.props.addSurveyor(this.state.surveyor);
            }
            this.setState({
                editing: false
            })
        }
        this.setState({ error });


    }

    render() {
        return (
            <div className="container">
                {this.state.new ? false : <Button bsStyle="info" onClick={() => { this.setState({ editing: !this.state.editing }) }}>{this.state.editing ? 'Close Edit' : 'Edit'}</Button>}
                {this.state.editing ?
                    <FormGroup>
                        <ControlLabel>Surveyor Code{this.state.error}</ControlLabel>
                        <FormControl
                            type="text"
                            className={this.state.error && this.state.surveyor.SurveyorCode === '' ? 'red-border' : ''}
                            value={this.state.surveyor.SurveyorCode}
                            placeholder="Enter text"
                            onChange={this.changeModel.bind(this, 'SurveyorCode')}
                        />
                        <ControlLabel>Surveyor Name</ControlLabel>
                        <FormControl
                            type="text"
                            className={this.state.error && this.state.surveyor.SurveyorName === '' ? 'red-border' : ''}
                            value={this.state.surveyor.SurveyorName}
                            placeholder="Enter text"
                            onChange={this.changeModel.bind(this, 'SurveyorName')}
                        />
                        <ControlLabel>Contact Person</ControlLabel>
                        <FormControl
                            type="text"
                            className={this.state.error && this.state.surveyor.ContactPerson === '' ? 'red-border' : ''}
                            value={this.state.surveyor.ContactPerson}
                            placeholder="Enter text"
                            onChange={this.changeModel.bind(this, 'ContactPerson')}
                        />
                        <ControlLabel>Phone No</ControlLabel>
                        <FormControl
                            type="text"
                            className={this.state.error && this.state.surveyor.PhoneNo === '' ? 'red-border' : ''}
                            value={this.state.surveyor.PhoneNo}
                            placeholder="Enter text"
                            onChange={this.changeModel.bind(this, 'PhoneNo')}
                        />
                        <ControlLabel>Email Id</ControlLabel>
                        <FormControl
                            type="text"
                            className={this.state.error && this.state.surveyor.EmailId === '' ? 'red-border' : ''}
                            value={this.state.surveyor.EmailId}
                            placeholder="Enter text"
                            onChange={this.changeModel.bind(this, 'EmailId')}
                        />
                        <ControlLabel>Address</ControlLabel>
                        <FormControl
                            type="text"
                            className={this.state.error && this.state.surveyor.Address === '' ? 'red-border' : ''}
                            value={this.state.surveyor.Address}
                            placeholder="Enter text"
                            onChange={this.changeModel.bind(this, 'Address')}
                        />
                        <ControlLabel>Description</ControlLabel>
                        <FormControl
                            type="text"
                            className={this.state.error && this.state.surveyor.Description === '' ? 'red-border' : ''}
                            value={this.state.surveyor.Description}
                            placeholder="Enter text"
                            onChange={this.changeModel.bind(this, 'Description')}

                        />
                        <Button bsStyle="info" onClick={this.save.bind(this)}>Save</Button>
                    </FormGroup> :
                    <div>
                        <p> Surveyor Code:<strong> {this.state.surveyor.SurveyorCode}</strong></p>
                        <p> Surveyor Name:<strong> {this.state.surveyor.SurveyorName}</strong></p>
                        <p> Contact Person:<strong> {this.state.surveyor.ContactPerson}</strong></p>
                        <p> Phone No:<strong> {this.state.surveyor.PhoneNo}</strong></p>
                        <p> Email Id:<strong> {this.state.surveyor.EmailId}</strong></p>
                        <p> Address:<strong> {this.state.surveyor.Address}</strong></p>
                        <p> Description:<strong> {this.state.surveyor.Description}</strong></p>
                    </div>

                }

            </div>
        );

    }
}

export default ExportApplication;
