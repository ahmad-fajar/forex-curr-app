import React, { Component } from 'react'

import CurrList from './currList'
import AddNewCurr from './addNewCurr'

import { Divider } from 'antd'

class CurrListWrap extends Component {
  constructor() {
    super()
    this.state = {
      shownCurrencies: ['IDR', 'JPY', 'KRW', 'GBP']
    }
  }

  render() {
    return (
      <div style={style.wrap}>
        {
          this.state.shownCurrencies.map((val, idx) => {
            return (
              <div key={idx}>
                <CurrList state={{symbol: val}} />
                <Divider style={style.divider}/>
              </div>
            )
          })
        }
        <AddNewCurr/>
      </div>
    )
  }

}

const style = {
  wrap: {
    'padding': '5px',
    'marginTop': '10px'
  },

  divider: {
    'width': '83.33%'
  }
}

export default CurrListWrap
