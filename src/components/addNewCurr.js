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
      selected: ''
    }
  }

  options() {
    let currencyData = store.getState().currencyManager.currenciesArr
    return (
      <Select
        showSearch
        style={style.select}
        placeholder="currency code"
        optionFilterProp="currencyCode"
        filterOption={(input, option) => option.props.currencyCode.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        onChange={e => this.selectChangeHandler(e)}
      >
        {
          currencyData.map((v, i) => {
            return (
              <Option value={v.code} key={i} name={v.code}>
                {v.code} - {v.name}
              </Option>
            )
          })
        }
      </Select>
    )
  }

  selectChangeHandler(val) {
    this.setState({
      selected: val
    })
  }

  submit(e) {
    e.preventDefault()
    this.props.props.addList(this.state.selected)
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Form
          layout={'vertical'}
          style={style.form}
          onSubmit={(e) => this.submit(e)}
        >
          <FormItem label="Add Currency">
            { this.options() }
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType='submit'>Add</Button>
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
