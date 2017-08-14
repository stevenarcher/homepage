/**
 * Storybook styles
 * ----------------
 * These are styles intended to only be used for storybook stories
 */
import { rgba } from 'polished';
import styled from 'styled-components';
import * as shadows from './shadows';
import * as typography from './typography';
import * as transitions from './transitions';
const dustyGray = '#999';
const grayChateau = '#A8A8B8';
const iron = '#e2e2e2';
const white = '#fff';
const black = '#000';

export const StoryList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	margin: 0;
	padding: 10px;
	list-style: none;
`;

export const StoryGroup = styled.div`
	border: 1px solid ${rgba(white, 0.4)};
	padding: 8px;
	margin: 5px;
	float: left;
	display: inline-block;
	position: relative;
	background-color: ${rgba(white, 0.3)};

	h3 {
		text-transform: capitalize;
		margin-top: 2px;
		margin-bottom: 2px;
		${typography.header2} color: ${grayChateau};
	}

	.group {
		.group {
			background-color: ${rgba(iron, 0.1)};
			border: 1px solid ${rgba(iron, 0.4)};
			h3 {
				text-transform: capitalize;
				${typography.style1};
			}
		}
	}
`;

export const StoryItem = styled.div`
	${props => `
	display: inline-block;
	border: 1px solid ${rgba(iron, 0.4)};
	margin: 5px;
	min-width: 88px;
	${transitions.normal('background-color')}
	
	${props.color
		? `
	&:hover {
		background-color: ${rgba(props.color, 0.1)};
	}`
		: ``}
`};
`;

export const StoryItemName = styled.div`
	padding: 5px;
	color: ${dustyGray};
	font-size: 12px;
	text-align: center;
`;

export const StoryItemInfo = styled.div`
	padding: 5px;
	color: ${dustyGray};
	width: 100%;
	background-color: ${rgba(iron, 0.4)};
	font-size: 11px;
	text-align: center;
`;

export const StoryItemWrapper = styled.div`
	padding: 5px;
	color: ${iron};
	text-align: center;
`;

export const Title = styled.h1`
	width: 100%;
	color: ${dustyGray};
	span {
		${typography.body};
	}
`;

export const SubTitle = styled.h3`
	width: 100%;
	color: ${dustyGray};
`;

export const ScrollWrapper = styled.div`
	overflow: scroll;
	height: 100vh;
`;

export const storyDot = props => `
	background-color: ${props.color};
	width:40px;
	height:40px;
	margin: auto;
	border: 0px solid;
	border-radius: 50%;
	${shadows.outerLarge}
`;
export const StoryDot = styled.div`${storyDot};`;
