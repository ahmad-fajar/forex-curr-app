import React, { Component } from 'react'
import { Row, Col } from 'antd'

import BaseCurr from './BaseCurr'
import CurrListWrap from './CurrListWrap'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      abcd: 100
    }
  }

  render() {
    return (
      <div>
        <Row style={style.border}>
          <Col span={20} offset={4}>
            <BaseCurr/>
          </Col>
        </Row>
        <Row style={style.border}>
          <Col span={20} offset={4}>
            <CurrListWrap/>
          </Col>
        </Row>
      </div>
    )
  }

} // class Main

const style = {
  border: {
    'border': '1px solid blue'
  }
}


export default Main
