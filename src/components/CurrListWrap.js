import React, { Component } from 'react'
import { Divider } from 'antd'

import AddNewCurr from './AddNewCurr'
import CurrList from './CurrList'

class CurrListWrap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shownCurrencies: []
    }
  }

  // this function propped to children currList
  deleteList(sym) {
    let shown = this.state.shownCurrencies
    let newShown = el => {
      let idx = shown.indexOf(el)
      let newArr = shown.slice(0, idx)
      newArr = newArr.concat(shown.slice(idx+1))
      return newArr
    }

    this.setState({
      shownCurrencies: newShown(sym)
    })
  }

  // this function propped to children addNewCurr
  addList(sym) {
    let newArr = this.state.shownCurrencies
    newArr.push(sym)
    this.setState({
      shownCurrencies: newArr
    })
  }

  componentDidUpdate() {}

  render() {
    return (
      <div style={style.wrap}>
        {
          this.state.shownCurrencies.map((val, idx) => {
            return (
              <div key={idx} id={val}>
                <CurrList state={{symbol: val}} props={{deleteList: this.deleteList.bind(this)}}/>
                <Divider style={style.divider} />
              </div>
            )
          })
        }
        <AddNewCurr props={{addList: this.addList.bind(this)}}/>
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
