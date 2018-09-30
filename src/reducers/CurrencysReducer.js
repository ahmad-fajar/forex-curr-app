const defaultState = {
  // initial bse amount
  baseAmount: 1,

  // all currenies symbol-name in single object
  currencies: {},

  // array of object. each element contain one currency 
  // symbol and name info
  currenciesArr: [],

  // all used currency symbols in single string. used for api call parameter
  currencySymbol: '',

  // exchange rate info from api
  er: {}
}

const currencyReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'STORE_CURR_SYMBOL':
      return {
        ...state,
        currencies: action.payload.currencies,
        currenciesArr: action.payload.currenciesArr,
        currencySymbol: action.payload.currencySymbol
      }

    case 'STORE_ER_DATA':
      return {
        ...state,
        er: action.payload.er
      }

    case 'STORE_BASE_AMOUNT':
      return {
        ...state,
        baseAmount: action.payload.baseAmount
      }

    default:
      return state
  }
}

export default currencyReducer
