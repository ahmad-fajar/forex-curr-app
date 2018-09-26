import React, { Component } from 'react'
import { connect } from 'react-redux'

import store from '../store/index'

import { Form, Button, Select } from 'antd'

const FormItem = Form.Item
const Option = Select.Option

class AddNewCurr extends Component {
  constructor() {
    super()
    this.state = {
      currencies: []
    }
  }

  options() {
    // let currencyData = this.props.currenciesArr
    let currencyData = store.getState().currencyManager.currenciesArr
    return (
      <Select
        showSearch
        style={style.select}
        placeholder="currency code"
        optionFilterProp="currencyCode"
        filterOption={(input, option) => option.props.currencyCode.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {
          currencyData.map((v, i) => {
            return (
              <Option value={v.code} key={i}>
                {v.code} - {v.name}
              </Option>
            )
          })
        }
      </Select>
    )
  }

  render() {
    return (
      <div>
        <Form layout={'vertical'} style={style.form}>
          <FormItem label="Add Currency">
            { this.options() }
          </FormItem>
          <FormItem>
            <Button type="primary">Add</Button>
          </FormItem>
        </Form>
      </div>
    )
  }

}

const style = {
  form: {
    'width': '83.33%'
  },
  select: {
    'width': '100%'
  }
}

const mapStateToProps = state => {
  return {
    currenciesArr: state.currencyManager.currenciesArr
  }
}

const mapDispatchToProps = disptch => {
  return {}
}

// export default AddNewCurr
export default connect(mapStateToProps, mapDispatchToProps)(AddNewCurr)
