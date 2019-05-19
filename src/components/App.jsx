import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Test',
    };
  }

  render() {
    const { title } = this.state;
    return (
      <div className="py-4 text-purple-800">
        <h1>{title}</h1>
      </div>
    );
  }
}

export default App;
