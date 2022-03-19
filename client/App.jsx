import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = { name: "Sung" }
  }

  render(){
    return (
      <h1>
        hello world {+ this.state.name}
      </h1>
    )
  }
}

export default App;