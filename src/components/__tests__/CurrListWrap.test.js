import React from 'react'
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'

import SmartCurrListWrap from '../CurrListWrap'

describe('Component: CurrListWrap', () => {
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
    wrapper = shallow(<SmartCurrListWrap store={store}/>)
  }
)
  describe('SmartCurrListWrap', () => {

    it('render component', () => {
      expect(wrapper.length).toEqual(1)
    })

  })
})
