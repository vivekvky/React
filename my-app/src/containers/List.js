import { connect } from 'react-redux';

import ListofSurveyors from '../components/ListofSurveyors';

const mapStateToProps = state => {
    return {
        surveyorList: state.surveyor
    };
}



const surveyorList = connect(
    mapStateToProps,
)(ListofSurveyors);

export default surveyorList;
