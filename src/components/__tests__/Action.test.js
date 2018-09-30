import { storeCurrSymbol, storeERData, baseAmount } from '../../actions/CurrencyAction'

describe('Action test', () => {
  it('storCurrSymbol', () => {
    const payload = {
      currencies: {
        'IDR': 'Rupiah',
        'JPY': 'Yen',
        'MYR': 'Ringgit'
      },
      currenciesArr: [{short: 'IDR', name: 'Rupiah'}, {short: 'JPY', name: 'YEN'}, {short: 'MYR', name: 'Ringgit'}],
      currencySymbol: 'IDR,JPY,MYR'
    }
    const store = storeCurrSymbol(payload)

    const expected = {
      type: 'STORE_CURR_SYMBOL',
      payload: payload
    }

    expect(store).toEqual(expected)
  })

  it('storeERData', () => {
    const payload = {
      er: {
        'IDR': 15000,
        'GBP': 0.98
      }
    } 
    const store = storeERData(payload)
    const expected = {
      type: 'STORE_ER_DATA',
      payload: payload
    }
    expect(store).toEqual(expected)
  })

  it('storeBaseAmount', () => {
    const payload = {
      baseAmount: 100
    } 
    const store = baseAmount(payload)
    const expected = {
      type: 'STORE_BASE_AMOUNT',
      payload: payload
    }
    expect(store).toEqual(expected)
  })
})
