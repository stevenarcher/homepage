import styled, { injectGlobal } from 'styled-components';
import { colors, typography, shadows, spacing } from '../../styles';
import TypeIn from '../../styles/animation/TypeIn';
import { rgba } from 'polished';


export const Section = styled.div`
	background-color: ${colors.base.background};
	padding: ${spacing(2)};
	&:nth-of-type(odd) {
		background-color: ${colors.base.backgroundDark};
	}
`;
