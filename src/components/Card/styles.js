import styled from 'styled-components';
import { colors, typography, shadows, highlights, spacing } from '../../styles';
import { rgba } from 'polished';
const color = colors.card;

export const Wrapper = styled.div`
	${props => `		
    position: relative;
    margin: ${spacing(1)};
    padding: ${spacing(2)};
    overflow: hidden;
    width: ${props.width};
    height: ${props.height};
    ${shadows.outerLarge}
    color: ${colors.card.text};
    background-color: ${colors.card.background};
    background-position: center;
    background-size: cover;
	`};
`;

export const Title = styled.span`
	margin: 0px;
	display: inline-block;
	padding: ${spacing(1)};
	border-radius: ${spacing(1)};
	${typography.header1};
	color: ${color.text};
	background-color: ${rgba('#ffffff',0.3)};
`;

export const Description = styled.div`
	margin: 0px;
	padding-bottom: 30px;
	${typography.header2}
	color: ${color.text};
	background-color: ${colors.card.background};
`;
