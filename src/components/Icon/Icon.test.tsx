import * as React from 'react'
import { shallow, mount } from 'enzyme'
import 'jest-styled-components'

import { Icon } from './Icon'
import { StyledSvg } from './Icon.styles'

import { Theme } from '../../Theme'

describe('<Icon>', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Icon iconName="baseline_info" />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders default className', () => {
    const wrapper = shallow(<Icon iconName="baseline_info" />)
    const styledSvg = wrapper.find(StyledSvg)
    expect(styledSvg.exists('.icon')).toEqual(true)
  })

  it('renders a className if provided', () => {
    const wrapper = shallow(
      <Icon className="some-class" iconName="baseline_info" />
    )
    const styledSvg = wrapper.find(StyledSvg)
    expect(styledSvg.exists('.some-class')).toEqual(true)
  })

  it('renders the correct icon name', () => {
    const wrapper = shallow(<Icon iconName="baseline_add_circle" />)
    const styledSvg = wrapper.find(StyledSvg)
    expect(styledSvg.props().name).toEqual('baseline_add_circle')
  })

  it('renders the correct icon fill color', () => {
    const wrapper = mount(
      <Icon iconFill={Theme.colors.primary} iconName="baseline_info" />
    )
    const htmlPath = wrapper.find('path').at(0)
    expect(htmlPath.props().fill).toEqual(Theme.colors.primary)
  })

  it('renders the correct icon size ', () => {
    const wrapper = mount(<Icon iconSize={96} iconName="baseline_info" />)
    const styledSvg = wrapper.find(StyledSvg)
    expect(styledSvg.props().width).toEqual(96)
  })
})
