import React, { Component } from 'react';

import '../App.css';
import NameComponent from './NameComponent';
import NavbarComponent from './NavbarComponent';
import SelectComponent from './SelectComponent';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: 'Vivek',
      profession: 'Developer'
    }

  }

  Click() {
    console.log('this is logged from parent')
  }

  clickChange() {
    this.setState({
      user: 'Vivek Molangiri',
      profession: 'Software Engineer'
    })
  }


  render() {
    var array = ['I', 'Am', "Vivek"];
    return (
      <div className="text-large" >
        <NavbarComponent />
        <div className="container">
          <SelectComponent />
          <h1 style={{ color: 'red' }}>Hello world..! this is parent</h1>
          <div>
            {this.state.user}-{this.state.profession}
          </div>
          <NameComponent user={this.state.user} />
          <NameComponent />
          {
            array.map(ele => {
              return (<p key={ele}>{ele}</p>)
            })
          }

          <button onClick={this.clickChange.bind(this)}>Click Me</button>
        </div>
      </div >


    );
  }
}

export default App;
