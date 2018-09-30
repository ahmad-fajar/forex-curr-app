import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import SmartBaseCurr from '../BaseCurr'

describe('Component: BaseCurr', () => {
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
    // store.clearActions()
    store = mockStore(initState)
    wrapper = shallow(<SmartBaseCurr store={store}/>)
  }
)
  describe('SmartBaseCurr', () => {

    it('render component', () => {
      expect(wrapper.length).toEqual(1)
    })
  })
})
