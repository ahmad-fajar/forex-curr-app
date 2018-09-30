import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import SmartCurrList from '../CurrList'

describe('Component: CurrList', () => {
  const initState = {
    baseAmount: 1,
    currencies: {},
    currenciesArr: [],
    currencySymbol: '',
    er: {}
  }
  const mockStore = configureStore()
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initState)
    wrapper = shallow(<SmartCurrList store={store}/>)
  }
)
  describe('SmartCurrList', () => {

    it('render component', () => {
      expect(wrapper.length).toEqual(1)
    })

  })
})
