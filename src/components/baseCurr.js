import React, { Component } from 'react'

import {Col, Row } from 'antd'

class BaseCurr extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div>USD - United States Dollars</div>
        <div>
          <h3>
            <strong>
              <Row>
                <Col span={16}>USD</Col>
                <Col>1000</Col>
              </Row>
            </strong>
          </h3>
        </div>
      </div>
    )
  }

} // class BaseCurr

export default BaseCurr
