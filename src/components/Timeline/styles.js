/**
 * Header Styles
 * -------------
 */

import styled from 'styled-components';
import { colors, typography, spacing } from '../../styles';

const color = colors.base;

export const Wrapper = styled.header`
	color: ${color.text};
	background-color: ${color.background};
	${typography.style1};
	width: 100%;
	height: 90px;
	-ms-overflow-style: scrollbar;
	-webkit-app-region: drag;
	-webkit-user-select: none;
	min-width: 500px;
`;

export const Title = styled.div`
	position: relative;
	color: ${color.text};
	${typography.header1};
	height: 45px;
	display: flex;
	flex-direction: row;
	align-items: center;
	align-self: flex-start;
	justify-content: left;
`;
