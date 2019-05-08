import React, { Component } from "react";

const message = "Hello World!!"

const h1Tag = <h1>{message}</h1>

class Home extends Component {
  render() {
    return(
      <>
        {h1Tag}
      </>
    )
  }
}

export default Home;
