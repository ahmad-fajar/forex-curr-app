import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// configure({ adapter: new Adapter() });

import SmartMain, { Main } from '../Main'

describe('Component: Main', () => {
  const initState = {
    baseAmount: 1,
    currencies: {},
    currenciesArr: [],
    currencySymbol: '',
    er: {}
  }

  const mockStore = configureStore()
  const store = mockStore(initState)

  describe('SmartMain', () => {
    const wrapper = shallow(<SmartMain store={store}/>)
    it('rendered', () => {
      expect(wrapper.length).toEqual(1)
    })

    it('connected to store', () => {
      const wrapInitState = wrapper.instance().props.store.getState()
      expect(wrapInitState).toEqual(initState)
    })
  })
})
