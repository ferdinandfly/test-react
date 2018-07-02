import React from 'react';
import { shallow } from 'enzyme'

import App from './App';

describe("App component", () => {

  const secondClickEvent = {
    currentTarget: {
      value: "b"
    }
  }

  const firstClickEvent = {
    currentTarget: {
      value: "a"
    }
  }

  const wrapper = () => shallow(<App/>)

  it('should only check the second checkbox', () => {
    const component = wrapper()
    component.find('input').at(1).props().onClick(secondClickEvent)
    expect(component.state()).toEqual({
      checkedList:
        { a: false, b: true, c: false, d: false, e: false }
    })
  })

  it('should only uncheck the second checkbox', () => {
    const component = wrapper().setState({
      checkedList: {
        a: true,
        b: true,
        c: true,
        d: true,
        e: true,
      }
    })
    component.find('input').at(1).props().onClick(secondClickEvent)

    expect(component.state()).toEqual({
      checkedList:
        { a: true, b: false, c: true, d: true, e: true }
    })
  })
  it('should check all the checkbox', () => {
    const component = wrapper()
    component.find('input').at(0).props().onClick(firstClickEvent)
    expect(component.state()).toEqual({
      checkedList:
        { a: true, b: true, c: true, d: true, e: true }
    })
  })

  it('should uncheck all the checkbox', () => {
    const component = wrapper().setState({
      checkedList: {
        a: true,
        b: true,
        c: true,
        d: false,
        e: false,
      }
    })
    component.find('input').at(0).props().onClick(firstClickEvent)
    expect(component.state()).toEqual({
      checkedList:
        { a: false, b: false, c: false, d: false, e: false }
    })
  })
})

