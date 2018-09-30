import currencyReducer from '../../reducers/CurrencysReducer'

describe('Reducer test', () => {
  let state
  beforeEach(() => {
    state = {
      baseAmount: 1,
      currencies: {},
      currenciesArr: [],
      currencySymbol: '',
      er: {}
    }
  })

  it('STORE_CURR_SYMBOL', () => {
    let payload = {
      currencies: {
        'IDR': 'Rupiah',
        'JPY': 'Yen',
        'MYR': 'Ringgit'
      },
      currenciesArr: [{short: 'IDR', name: 'Rupiah'}, {short: 'JPY', name: 'YEN'}, {short: 'MYR', name: 'Ringgit'}],
      currencySymbol: 'IDR,JPY,MYR'
    }
    state = currencyReducer(state, {
      type: 'STORE_CURR_SYMBOL',
      payload: payload
    })
    let expected = {...state, ...payload}
    expect(state).toEqual(expected)
  })

  it('STORE_ER_DATA', () => {
    let payload = {
      er: {
        'IDR': 15000,
        'GBP': 0.98
      }
    } 
    state = currencyReducer(state, {
      type: 'STORE_ER_DATA',
      payload: payload
    })
    let expected = {...state, ...payload}
    expect(state).toEqual(expected)
  })

  it('STORE_BASE_AMOUNT', () => {
    state = currencyReducer(state, {
      type: 'STORE_BASE_AMOUNT',
      payload: {
        baseAmount: 100
      }
    })
    expect(state).toEqual({...state, baseAmount: 100})
  })
})
