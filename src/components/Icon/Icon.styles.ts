import styled from 'styled-components'
import { Theme } from '../../theme';


export const StyledSvg = styled.svg({});

export const DemoUl = styled.ul({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  width: '100%'
});

export const DemoLi = styled.li({
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexDirection: 'column',
  width: '50%'
});

export const DemoBox = styled.div({
  border: `1px solid ${Theme.colors.grey}`,
  background: Theme.colors.white,
  padding: Theme.space[4],
  margin: Theme.space[2],
  textAlign: 'center'
});
