import React, { Component } from 'react'
import { connect } from 'react-redux'

import store from '../store/index'

import { currencyFormatter, eRFormatter } from '../util/formatter'

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
    this.state = {
      baseAmount: 0,
      er: 0,
      name: '',
      symbol: ''
    }
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

  componentWillMount() {
    this.setState({
      symbol: this.props.state.symbol,
      baseAmount: this.props.baseInfo.baseAmount,
      name: this.props.baseInfo.currencies[this.props.state.symbol]
    })
  }

  componentDidMount() {}

  render() {
    let er = (this.props.baseInfo.er[this.state.symbol])
    let erFmt = eRFormatter(er)
    let calculatedFmt = currencyFormatter((this.state.baseAmount * er))
    // if (er !== undefined) er = er.toFixed(2)
    return (
      <Row>
        <Col span={18}>
          <Row>
            <Col span={16} onClick={() => this.getBaseInfoFromStore()}>{ this.state.symbol }</Col>
            <Col>
              { calculatedFmt }
            </Col>
          </Row>
          <Row>{ this.state.symbol } - { this.state.name }</Row>
          <Row>
            USD 1 = { this.state.symbol } { erFmt }
          </Row>
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

const mapStateToProps = state => {
  return {
    baseInfo: state.currencyManager
  }
}

const mapDispatchToProps = disptch => {
  return {}
}

// export default CurrList
export default connect(mapStateToProps, mapDispatchToProps)(CurrList)
