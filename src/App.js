import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Row, Col } from 'antd'

import Main from './components/main'

class App extends Component {
  render() {
    return (
      <Row>
        <Col span={12} offset={6}>
          <h1>Foreign Exchange Currency App Exercise</h1>
          <Main />
        </Col>
      </Row>
    );
  }
}

export default App;


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
