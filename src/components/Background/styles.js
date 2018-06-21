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
