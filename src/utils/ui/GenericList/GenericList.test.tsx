import { shallow } from 'enzyme'
import React from 'react'
import { GenericList } from './GenericList'

describe('Dropdown should render', () => {
  test('should render', () => {
    const list = [
      { id: '1', listElement: '....', As: 'a' as const},
      { id: '2', listElement: '....', As: 'a' as const},
    ]
    const wrapper = shallow(<GenericList list={list} />)
    expect(wrapper).toBeDefined()
    expect(wrapper.children()).toHaveLength(2)
    expect(wrapper.find('a').at(0).exists()).toBe(true)
  })
})