import styled from 'styled-components';
import { colors, typography, shadows } from '../../styles';

const color = colors.buttonPrimary;

export const Wrapper = styled.div`
	${props => `		
    position: relative;
    margin: 0;
    overflow: hidden;
    width: ${props.width};
    height: ${props.height};
    ${shadows.outerLarge}
    background-image: url("./images/placeholder.jpg");
    background-position: center;
    background-size: cover;
	`};
`;

export const Title = styled.h2`
	margin: 0px;
	${typography.header1};
	color: ${color.base.header};
	background-color: ${}
`;

export const Description = styled.div`
	margin: 0px;
	padding-bottom: 30px;
	${typography.header2}
	color: ${colors.base.text};
`;
