import React, { Component } from 'react';

class NameComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name_displayed: 'First Name'
    };
  }

  componentDidMount() {
    console.log('mounted')
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.user_name!==nextProps.user_name) {
      if(nextProps.user_name.indexOf(' ')>-1) {
        this.setState({
          name_displayed : 'Full name'
        })
      } else {
        this.setState({
          name_displayed : 'First name'
        })
      }
    }
  }

  render() {

    const { user_name } = this.props;
    const { name_displayed } = this.state;

    return (
      <div>
        <p>{name_displayed}</p>
        <p>{user_name ? user_name : 'No user here'}</p>
      </div>
    );

  }
}

export default NameComponent;
