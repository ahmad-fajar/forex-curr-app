import React, { Component } from 'react'

import { Row, Col } from 'antd'

import { currencies } from '../const/currency'

import { currencyObjToArr } from '../util/convert'
import axios from 'axios'

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

  getCurrencySymbols(currObj) {
    // TODO. simpen currency arr ke store, terus hapus
    // getCurrencies di addNewCurr
    let currencyArr = currencyObjToArr(currObj)
    let symbolArr = []

    currencyArr.forEach(el => {
      symbolArr.push(el.code)
    })

    this.setState({
      symbols: symbolArr.join(',')
    })
  }

  getCurrenciesInfo(base, symbols) {
    axios({
      method: 'GET',
      url: 'https://api.exchangeratesapi.io/latest',
      params: {
        base: base,
        symbols: symbols
      }
    })
    .then(res => {
      console.log(res.data)
    })
    .catch(e => console.log(e))
  }

  async componentWillMount() {
    await this.getCurrencySymbols(currencies)
    await this.getCurrenciesInfo(this.state.base, this.state.symbols)
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
