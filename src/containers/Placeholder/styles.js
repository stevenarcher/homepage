/**
 * Social Styles
 * -------------
 */

import styled, { injectGlobal } from 'styled-components';
import { colors, typography, shadows } from '../../styles';
import TypeIn from '../../styles/animation/TypeIn';
import { rgba } from 'polished';

const color = colors.base;

injectGlobal`
	body {
		background: ${color.background};
		background: linear-gradient(${rgba(color.backgroundDark,0.9)}, ${color.backgroundDark});
	}
`;

export const Wrapper = styled.div`
	${typography.style1};
	display: flex;
	align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
	padding: 28px 40px;
	align-items: center;
  justify-content: center;
  text-align: center;
  color: ${colors.card.text};
`;

/*
export const Box = styled.div`
	${shadows.outerLarge}
	padding: 28px 40px;
	align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${colors.card.background};
  color: ${colors.card.text};
`;
*/
export const Title = styled.h1`
	margin: 0px;
	${typography.header1};
`;

export const SubTitle = styled.div`
	margin: 0px;
	padding-bottom: 30px;
	${typography.header2}
	color: ${rgba(colors.card.text,0.1)}
`;

export const Header = styled.header`
	margin: 0px;
	position: absolute;
	top: 0px;
	padding: 4px 0px;
	width: 100%;
	text-align: center;
	${typography.body}
	color: ${colors.base.text};
	background-color: ${colors.card.backgroundLight};
`;

export const Footer = styled.footer`
	margin: 0px;
	button {
		position: absolute;
		right: 0;
		bottom: 0;
	}
`;
