import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Col,
  Form,
  Input,
  Row
} from 'antd'

import { getCurrSymbol, getERData, storeBaseAmount } from '../actions/CurrencyAction'

const FormItem = Form.Item

class BaseCurr extends Component {
  constructor() {
    super()
    this.state = {
      base: 'USD',
      amount: 1
    }
  }

  amountChangeHandler(e) {
    let val = (!e.target.value || e.target.value === '' || e.target.value < 0) ? 1 : e.target.value
    this.setState({
      amount: val
    })
    this.props.storeBaseAmount(val)
  }

  componentWillMount = async () => {
    await this.props.getERData(this.state.base)
  }
  
  componentDidMount = async () => {
    await this.props.getCurrSymbol()
  }

  render() {
    return (
      <div>
        <div>USD - United States Dollars</div>
        <div>
          <h3>
            <Row>
              <strong><Col span={12}>{this.state.base}</Col></strong>
              <Col span={12}>
                <Form layout='inline'>
                  <FormItem>
                  <Input
                    placeholder="amount"
                    name="amount"
                    type='number'
                    onChange={e => this.amountChangeHandler(e)}
                  />
                  </FormItem>
                </Form>
              </Col>
            </Row>
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
