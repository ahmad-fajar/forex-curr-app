import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'antd'

import { getCurrSymbol, getERData, storeBaseAmount } from '../actions/CurrencyAction'

class BaseCurr extends Component {
  constructor() {
    super()
    this.state = {
      base: 'USD',
      amount: 1
    }
  }

  componentWillMount = async () => {
    await this.props.getERData(this.state.base)
  }
  
  componentDidMount() {
    this.props.storeBaseAmount(this.state.amount)
    this.props.getCurrSymbol()
  }

  render() {
    return (
      <div>
        <div>USD - United States Dollars</div>
        <div>
          <h3>
            <strong>
              <Row>
                <Col span={16}>{this.state.base}</Col>
                <Col>{this.state.amount}</Col>
              </Row>
            </strong>
          </h3>
        </div>
      </div>
    )
  }

} // class BaseCurr

const mapStateToProps = state => {
  return {
    baseInfo: state.currencyManager
  }
}

const mapDispatchToProps = dispatch => {
  return {
    storeBaseAmount: amount => dispatch(storeBaseAmount(amount)),
    getCurrSymbol: () => dispatch(getCurrSymbol()),
    getERData: base => dispatch(getERData(base)),
  }
}

// export default BaseCurr
export default connect(mapStateToProps, mapDispatchToProps)(BaseCurr)
