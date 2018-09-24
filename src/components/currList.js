import React, { Component } from 'react'

import {
  Col,
  Icon,
  Row
} from 'antd'

class CurrList extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Row>
        <Col span={18}>
          <Row>
            <Col span={16}>IDR</Col>
            <Col>9.999.000</Col>
          </Row>
          <Row>IDR - Indonesian Rupiah</Row>
          <Row>USD 1 = IDR 9.999</Row>
        </Col>
        <Col>
          <Icon type='close-circle' style={style.closeBtn}/>
        </Col>
      </Row>
    )
  }

}

const style = {
  closeBtn: {
    'color': 'red'
  }
}

export default CurrList
