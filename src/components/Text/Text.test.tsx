import React from 'react'
import { shallow, mount } from 'enzyme'
import 'jest-styled-components'

import { Text } from './Text'
import { StyledText } from './Text.styles'

import { Theme } from '../../Theme'

describe('<Text>', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Text as="p" />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders default className', () => {
    const wrapper = shallow(<Text as="p" />)
    const styledText = wrapper.find(StyledText)
    expect(styledText.exists('.-text')).toEqual(true)
  })

  it('renders a className if provided', () => {
    const wrapper = shallow(<Text as="p" className="some-class" />)
    const styledText = wrapper.find(StyledText)
    expect(styledText.exists('.some-class')).toEqual(true)
  })

  it('renders the correct styles for textAlign', () => {
    const wrapper = mount(<Text as="p" textAlign="right" />)
    const styledText = wrapper.find(StyledText)
    expect(styledText).toHaveStyleRule('text-align', 'right')
  })

  it('renders the correct styles for fontSize', () => {
    const wrapper = mount(<Text as="p" fontSize={Theme.fontSizes[0]} />)
    const styledText = wrapper.find(StyledText)
    expect(styledText).toHaveStyleRule('font-size', '12px')
  })

  it('renders the correct styles for fontWeight - bold', () => {
    const wrapper = mount(<Text as="p" fontWeight="bold" />)
    const styledText = wrapper.find(StyledText)
    expect(styledText).toHaveStyleRule('font-weight', '700')
  })

  it('renders the correct styles for fontWeight - medium', () => {
    const wrapper = mount(<Text as="p" fontWeight="medium" />)
    const styledText = wrapper.find(StyledText)
    expect(styledText).toHaveStyleRule('font-weight', '500')
  })

  it('renders the correct styles for fontWeight - regular', () => {
    const wrapper = mount(<Text as="p" fontWeight="regular" />)
    const styledText = wrapper.find(StyledText)
    expect(styledText).toHaveStyleRule('font-weight', '400')
  })

  it('renders the correct styles for fontWeight - light', () => {
    const wrapper = mount(<Text as="p" fontWeight="light" />)
    const styledText = wrapper.find(StyledText)
    expect(styledText).toHaveStyleRule('font-weight', '300')
  })

  it('renders the correct styles for color', () => {
    const wrapper = mount(<Text as="p" color={Theme.colors.primary} />)
    const styledText = wrapper.find(StyledText)
    expect(styledText).toHaveStyleRule('color', Theme.colors.primary)
  })

  it('renders the correct styles for marginTop', () => {
    const wrapper = mount(<Text as="p" marginTop={Theme.space[6]} />)
    const styledText = wrapper.find(StyledText)
    expect(styledText).toHaveStyleRule('margin-top', '64px')
  })

  it('renders the correct styles for marginRight', () => {
    const wrapper = mount(<Text as="p" marginRight={Theme.space[6]} />)
    const styledText = wrapper.find(StyledText)
    expect(styledText).toHaveStyleRule('margin-right', '64px')
  })

  it('renders the correct styles for marginBottom', () => {
    const wrapper = mount(<Text as="p" marginBottom={Theme.space[6]} />)
    const styledText = wrapper.find(StyledText)
    expect(styledText).toHaveStyleRule('margin-bottom', '64px')
  })

  it('renders the correct styles for marginLeft', () => {
    const wrapper = mount(<Text as="p" marginLeft={Theme.space[6]} />)
    const styledText = wrapper.find(StyledText)
    expect(styledText).toHaveStyleRule('margin-left', '64px')
  })

  it('renders the correct styles for textTransform', () => {
    const wrapper = mount(<Text as="p" textTransform="uppercase" />)
    const styledText = wrapper.find(StyledText)
    expect(styledText).toHaveStyleRule('text-transform', 'uppercase')
  })

  it('renders the correct styles for textTransform', () => {
    const wrapper = mount(<Text as="p" display="inline" />)
    const styledText = wrapper.find(StyledText)
    expect(styledText).toHaveStyleRule('display', 'inline')
  })

  it('renders the correct styles for hasBottomBorder', () => {
    const wrapper = mount(<Text as="p" hasBottomBorder={true} />)
    const styledText = wrapper.find(StyledText)
    expect(styledText).toHaveStyleRule('border-bottom', '2px solid')
    expect(styledText).toHaveStyleRule('border-bottom-color', 'inherit')
  })
})
