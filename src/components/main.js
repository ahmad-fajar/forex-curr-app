import React, { Component } from 'react'
import { Row, Col } from 'antd'

import BaseCurr from './baseCurr'
import CurrListWrap from './currListWrap'

class Main extends Component {
  constructor() {
    super()
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
