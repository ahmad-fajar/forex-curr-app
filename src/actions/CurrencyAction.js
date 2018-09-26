import axios from 'axios'

import { baseURL, currencies } from '../const/currency'

import { currencyObjToArr } from '../util/convert'

export const storeCurrSymbol = payload => {
  return {
    type: 'STORE_CURR_SYMBOL',
    payload: {
      currencies: currencies,
      currenciesArr: payload.currenciesArr,
      currencySymbol: payload.currencySymbol
    }
  }
}

export const getCurrSymbol = () => {
  let currArr = []
  let symbolArr = []
  for (var k in currencies) {
    currArr.push({
      code: k,
      name: currencies[k]
    })
    symbolArr.push(k)
  }

  return (dispatch, getState) => {
    dispatch(storeCurrSymbol({
      currenciesArr: currArr,
      currencySymbol: symbolArr.join(',')
    }))
  }
}


export const storeERData = payload => {
  return {
    type: 'STORE_ER_DATA',
    payload: {
      er: payload.er
    }
  }
}

export const getERData = (base) => {
  return (dispatch, getState) => {
    let data = {}
    let symbols = getState().currencyManager.currencySymbol
  
    axios({
      url: baseURL,
      method: 'GET',
      params: {
        base: base,
        symbols: symbols
      }
    })
    .then(res => {
      // console.log('>>> res', res.data)
      dispatch(storeERData({
        er: res.data.rates
      }))
    })
    .catch(e => console.log(e))
  }
}
