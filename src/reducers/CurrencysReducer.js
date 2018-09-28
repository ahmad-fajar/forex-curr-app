const defaultState = {
  baseAmount: 1,
  currencies: {},
  currenciesArr: [],
  currencySymbol: '',
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
