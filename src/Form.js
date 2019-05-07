import React, { Component } from "react";

class Form extends Component {
  render() {
    return(
      <div>
        Name:
        <input
          type="text"
          value={this.props.name}
          onChange={this.props.getName} /><br/>
        <label>
          <input
            type="radio"
            value="male"
            checked={this.props.gender === "male"}
            onChange={this.props.getGender} />
            Male
        </label>
        <label>
          <input
            type="radio"
            value="female"
            checked={this.props.gender === "female"}
            onChange={this.props.getGender} />
            Female
        </label>
      </div>
    )
  }
}

export default Form
