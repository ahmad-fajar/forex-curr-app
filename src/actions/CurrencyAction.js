import axios from 'axios'

import { baseURL, currencies } from '../const/currency'


// store currency key-value from ../const/currency
export const storeCurrSymbol = payload => {
  return {
    type: 'STORE_CURR_SYMBOL',
    payload: {
      currencies: payload.currencies,
      currenciesArr: payload.currenciesArr,
      currencySymbol: payload.currencySymbol
    }
  }
}

export const getCurrSymbol = () => {
  return (dispatch, getState) => {
    let currArr = []
    let symbolArr = []
    for (var k in currencies) {
      currArr.push({
        code: k,
        name: currencies[k]
      })
      symbolArr.push(k)
    }

    dispatch(storeCurrSymbol({
      currencies: currencies,
      currenciesArr: currArr,
      currencySymbol: symbolArr.join(',')
    }))
  }
}


// store er data fetched from api
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
    let symbols = getState().currencyManager.currencySymbol
  
    axios({
      url: baseURL,
      method: 'GET',
      params: {
        base: base,
        symbols: symbols
      },
      timeout: 2000
    })
    .then(res => {
      // console.log('>>> res', res.data)
      dispatch(storeERData({
        er: res.data.rates
      }))
    })
    .catch(e => {/*console.log(e.stack)*/})
  }
}


// amount of base currency
export const baseAmount = payload => {
  return {
    type: 'STORE_BASE_AMOUNT',
    payload: {
      baseAmount: payload.baseAmount
    }
  }
}

export const storeBaseAmount = amount => {
  return (dispatch, getState) => {
    dispatch(baseAmount({
      baseAmount: amount
    }))
  }
}
