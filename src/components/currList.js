import React, { Component } from 'react'
import { connect } from 'react-redux'
import equal from 'fast-deep-equal'

import { currencyFormatter, eRFormatter } from '../util/formatter'

import {
  Col,
  Icon,
  Popconfirm,
  Row
} from 'antd'

class CurrList extends Component {
  constructor(props) {
    super(props)
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
    this.props.props.deleteList(this.state.symbol)
  }

  componentDidMount() {
    this.setState({
      symbol: this.props.state.symbol,
      baseAmount: this.props.baseInfo.baseAmount,
      name: this.props.baseInfo.currencies[this.props.state.symbol]
    })
  }

  componentDidUpdate(prevProps) {
    if(!equal(this.props.state.symbol, prevProps.state.symbol)) {
      this.setState({
        symbol: this.props.state.symbol
      })
    }
  }


  render() {
    let er = (this.props.baseInfo.er[this.state.symbol])
    let erFmt = currencyFormatter(eRFormatter(er))
    let calculatedFmt = currencyFormatter(this.props.baseInfo.baseAmount * er)
    return (
      <Row ref={ this.state.symbol }>
        <Col span={18}>
          <Row>
            <Col span={16}>{ this.state.symbol }</Col>
            <Col style={style.calculatedValue}>
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
  },
  calculatedValue: {
    'textAlign': 'right',
    'paddingRight': '6px'
  }
}

const mapStateToProps = state => {
  return {
    baseInfo: state.currencyManager
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

// export default CurrList
export default connect(mapStateToProps, mapDispatchToProps)(CurrList)
