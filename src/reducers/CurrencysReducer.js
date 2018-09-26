const defaultState = {
  baseAmount: 100, // FIXME
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

    default:
      return state
  }
}

export default currencyReducer
