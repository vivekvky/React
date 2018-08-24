import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import ExportApplication from '../containers/App';


const EditAdd = () => (

    <Switch>
        <Route path='/surveyor/:SurveyorId'  component={ExportApplication} />
        <Route path='/surveyor' component={ExportApplication} />
    </Switch>
)



export default EditAdd;
