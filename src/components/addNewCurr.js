import React, { Component } from 'react'

import { Form, Button, Select } from 'antd'

import { currencies } from '../const/currency.js'

const FormItem = Form.Item
const Option = Select.Option

class AddNewCurr extends Component {
  constructor() {
    super()
    this.state = {
      currencies: []
    }
  }

  getCurrencies() {
    let arr = []

    for (var key in currencies) {
      arr.push({short: key, long: currencies[key]})
    }

    this.setState({
      currencies: arr
    })
  }

  options() {
    return (
      <Select
        showSearch
        style={style.select}
        placeholder="currency code"
        optionFilterProp="currencyCode"
        filterOption={(input, option) => option.props.currencyCode.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {
          this.state.currencies.map((v, i) => {
            return (
              <Option value={v.short} key={i}>
                {v.short} - {v.long}
              </Option>
            )
          })
        }
      </Select>
    )
  }

  componentWillMount () {
    this.getCurrencies()
  }

  render() {
    return (
      <div>
        <Form layout={'vertical'} style={style.form}>
          <FormItem label="Add Currency">
            { this.options() }
          </FormItem>
          <FormItem>
            <Button type="primary">Submit</Button>
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

export default AddNewCurr
