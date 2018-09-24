import React, { Component } from 'react'

import CurrList from './currList'
import AddNewCurr from './addNewCurr'

import { Divider } from 'antd'

class CurrListWrap extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div style={style.wrap}>
        <CurrList/>
        <Divider style={style.divider}/>
        <CurrList/>
        <Divider style={style.divider}/>
        <CurrList/>
        <Divider style={style.divider}/>
        <CurrList/>
        <Divider style={style.divider}/>
        <AddNewCurr/>
      </div>
    )
  }

}

const style = {
  wrap: {
    'padding': '5px' 
  },

  divider: {
    'width': '83.33%'
  }
}

export default CurrListWrap