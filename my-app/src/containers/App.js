import { connect } from 'react-redux';
import { fetchSurveyor, editSurveyor, addSurveyor } from '../actions/actions_info'
import ExportApplication from '../components/ExportApplication';


const mapStateToProps = state => {
  return {
    surveyor: state.surveyor
  };
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSurveyor: () => {
      dispatch(fetchSurveyor());
    },
    editSurveyor: (surveyor) => {
      dispatch(editSurveyor(surveyor));
    },
    addSurveyor: (surveyor) => {
      dispatch(addSurveyor(surveyor));
    }
  };
}


const surveyor = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExportApplication);

export default surveyor;
