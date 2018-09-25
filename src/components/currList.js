import React, { Component } from 'react'

import {
  Button,
  Col,
  Icon,
  Popconfirm,
  Row
} from 'antd'

class CurrList extends Component {
  constructor() {
    super()
  }

  removeCurrIcon() {
    return (
      <Popconfirm
      placement='bottomRight'
      okType='danger'
      icon={<Icon type='exclamation' style={{ color: 'red' }} />}
      title='Remove this currency?'
      onConfirm={() => this.removeCurrency()}
      okText='Remove' cancelText='Cancel'
      >
        <Icon
        type='close-circle'
        style={style.closeBtn}
        />
      </Popconfirm>
    )
  }

  removeCurrency() {
    console.log('>>> remove')
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
          { this.removeCurrIcon() }
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
