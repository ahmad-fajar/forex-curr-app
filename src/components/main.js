import React, { Component } from 'react'
import store from '../store/index'
import { connect } from 'react-redux'

import { Row, Col } from 'antd'

import { getCurrSymbol, getERData } from '../actions/CurrencyAction'

import { currencyObjToArr } from '../util/convert'

import BaseCurr from './baseCurr'
import CurrListWrap from './currListWrap'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      base: 'USD',
      symbols: ''
    }
  }

  componentWillMount = async () => {
    await this.props.getCurrSymbol()
    await this.props.getERData('USD')
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

const mapStateToProps = state => {
  return {
    currenciesArr: state.currencyManager.currenciesArr
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCurrSymbol: () => dispatch(getCurrSymbol()),
    getERData: base => dispatch(getERData(base))
  }
}

// export default Main
export default connect(mapStateToProps, mapDispatchToProps)(Main)
