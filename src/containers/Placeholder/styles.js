/**
 * Social Styles
 * -------------
 */

import styled from 'styled-components';
import { colors, typography, shadows } from '../../styles';
import { rgba } from 'polished';

export const Wrapper = styled.div`
	${typography.style1};
	display: flex;
	align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
	${shadows.outerLarge}
	padding: 28px 40px;
	align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #ffe5d9;
`;

export const Title = styled.h1`
	margin: 0px;
	${typography.header1};
	color: ${colors.base.header};
`;

export const SubTitle = styled.div`
	margin: 0px;
	padding-bottom: 30px;
	${typography.header2}
	color: ${colors.base.text};
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
	background-color: #ffe5d9;
`;

export const Footer = styled.footer`
	margin: 0px;
	color: ${colors.base.text};
	button {
		position: absolute;
		right: 0;
		bottom: 0;
	}
`;
