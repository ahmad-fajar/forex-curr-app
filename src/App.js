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
          <h1 style={style.title}>Foreign Exchange Currency App Exercise</h1>
          <Main />
        </Col>
      </Row>
    );
  }
}

const style = {
  title: {
    'textAlign': 'center',
    'margin': '20px 0'
  }
}

export default App;
