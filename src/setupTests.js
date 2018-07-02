import 'jest-enzyme'
import React from 'react'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


configure({ adapter: new Adapter() })

/**
 *  Transform console errors and warnings into errors (i.e. React Proptypes warnings
 *  and errors will now make the tests fail).
 */
global.console.error = jest.fn(e => {
  throw new Error(e)
})
global.console.warning = jest.fn(e => {
  throw new Error(e)
})
