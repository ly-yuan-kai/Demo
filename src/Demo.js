import React, { Component } from "react";

import Form from "./Form";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: '',
    };
    this.getName = this.getName.bind(this);
    this.getGender = this.getGender.bind(this);
    this.handleOnClickClear = this.handleOnClickClear.bind(this);
  };

  getName(e) {
    this.setState({name: e.target.value});
  }

  getGender(e) {
    this.setState({gender: e.target.value});
  }

  handleOnClickClear(e) {
    this.setState({
      name: '',
      email: '',
      gender: '',
    });
    alert('onClick Event: Clear input!!');
  }

  render() {
    return(
      <div>
        <Form
          getName={this.getName}
          getGender={this.getGender}
          name={this.state.name}
          gender={this.state.gender}
        />
        <br/>
        <h2>OnChange Event</h2>
        <p>Name: {this.state.name}</p>
        <p>Gender: {this.state.gender}</p>
        <button onClick={this.handleOnClickClear}>
          Clear
        </button>
      </div>
    )
  }
}

export default Demo;
