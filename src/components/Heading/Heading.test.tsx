import * as React from 'react'
import { shallow, mount } from 'enzyme'
import 'jest-styled-components'
import { Heading } from './Heading';
import { StyledHeading } from './Heading.styles';
import Theme from "../../theme";

describe('<Heading>', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Heading as="h1" />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders default className', () => {
    const wrapper = shallow(<Heading as="h1" />)
    const styledHeading = wrapper.find(StyledHeading)
    expect(styledHeading.exists('.-heading')).toEqual(true)
  })

  it('renders a className if provided', () => {
    const wrapper = shallow(<Heading as="h1" className="some-class" />)
    const styledHeading = wrapper.find(StyledHeading)
    expect(styledHeading.exists('.some-class')).toEqual(true)
  })

  it('renders the correct styles for textAlign', () => {
    const wrapper = mount(<Heading as="h1" textAlign="right" />)
    const styledHeading = wrapper.find(StyledHeading)
    expect(styledHeading).toHaveStyleRule('text-align', 'right')
  })

  it('renders the correct styles for fontWeight- bold', () => {
    const wrapper = mount(<Heading as="h1" fontWeight="bold" />)
    const styledHeading = wrapper.find(StyledHeading)
    expect(styledHeading).toHaveStyleRule('font-weight', '700')
  })

  it('renders the correct styles for fontWeight - medium', () => {
    const wrapper = mount(<Heading as="h1" fontWeight="medium" />)
    const styledHeading = wrapper.find(StyledHeading)
    expect(styledHeading).toHaveStyleRule('font-weight', '500')
  })

  it('renders the correct styles for fontWeight - regular', () => {
    const wrapper = mount(<Heading as="h1" fontWeight="regular" />)
    const styledHeading = wrapper.find(StyledHeading)
    expect(styledHeading).toHaveStyleRule('font-weight', '400')
  })

  it('renders the correct styles for fontWeight - light', () => {
    const wrapper = mount(<Heading as="h1" fontWeight="light" />)
    const styledHeading = wrapper.find(StyledHeading)
    expect(styledHeading).toHaveStyleRule('font-weight', '300')
  })

  it('renders the correct styles for color', () => {
    const wrapper = mount(
      <Heading as="h1" color={Theme.colors.primary} />
    )
    const styledHeading = wrapper.find(StyledHeading)
    expect(styledHeading).toHaveStyleRule('color', Theme.colors.primary)
  })

  it('renders the correct styles for marginTop', () => {
    const wrapper = mount(<Heading as="h1" marginTop={64} />)
    const styledHeading = wrapper.find(StyledHeading)
    expect(styledHeading).toHaveStyleRule('margin-top', '64px')
  })

  it('renders the correct styles for marginRight', () => {
    const wrapper = mount(<Heading as="h1" marginRight={64} />)
    const styledHeading = wrapper.find(StyledHeading)
    expect(styledHeading).toHaveStyleRule('margin-right', '64px')
  })

  it('renders the correct styles for marginBottom', () => {
    const wrapper = mount(<Heading as="h1" marginBottom={64} />)
    const styledHeading = wrapper.find(StyledHeading)
    expect(styledHeading).toHaveStyleRule('margin-bottom', '64px')
  })

  it('renders the correct styles for marginLeft', () => {
    const wrapper = mount(<Heading as="h1" marginLeft={64} />)
    const styledHeading = wrapper.find(StyledHeading)
    expect(styledHeading).toHaveStyleRule('margin-left', '64px')
  })

  it('renders the correct styles for textTransform', () => {
    const wrapper = mount(<Heading as="h1" textTransform="uppercase" />)
    const styledHeading = wrapper.find(StyledHeading)
    expect(styledHeading).toHaveStyleRule('text-transform', 'uppercase')
  })

  it('renders the correct styles for display', () => {
    const wrapper = mount(<Heading as="h1" display="inline" />)
    const styledHeading = wrapper.find(StyledHeading)
    expect(styledHeading).toHaveStyleRule('display', 'inline')
  })

  it('renders the correct styles for hasBottomBorder', () => {
    const wrapper = mount(<Heading as="h1" hasBottomBorder={true} />)
    const styledHeading = wrapper.find(StyledHeading)
    expect(styledHeading).toHaveStyleRule('border-bottom', '2px solid')
    expect(styledHeading).toHaveStyleRule('border-bottom-color', 'inherit')
  })
})
