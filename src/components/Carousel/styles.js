import styled from 'styled-components';
import { colors, shadows } from '../../styles';
import { base } from '../Buttons/common/styles';

const color = colors.buttonPrimary;

export const Wrapper = styled.div`
	${props => `		
    position: relative;
    margin: 0;
    overflow: hidden;
    width: ${props.width};
	`};
`;

export const SliderWrapper = styled.div`
	${props => `
		overflow: hidden;
		margin: auto;
		width: 100%;
	`};
`;

export const Items = styled.ul`
	${props => `
		transform: translate3d(-${props.item * 100}%, 0px, 0px);
		transition-duration: 0.35s;
		display: flex;
		margin: 0;
		padding: 0;
	`};
`;

export const Item = styled.li`
	${props => `
		width: 100%;
		height: ${props.height};
		min-width: 100%;
    margin: 0;
    position: relative;
    text-align: center;
    list-style: none;
    padding: 0;
	`};
`;

export const Controls = styled.div`
	${props => `
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		align-self: flex-start;
	`};
`;

export const WrapperDots = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-grow: 3;
`;

export const Dots = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	align-self: flex-start;
`;
export const Dot = styled.div`
	${props => {
		const { enabled } = props;
		return `
			background: ${enabled ? color.enabled.background : color.disabled.background};
			width: 5px;
			height: 5px;
			margin: auto;
			border: 0px solid;
			border-radius: 50%;
			margin-left: 8px;
			margin-right: 8px;
			cursor: ${enabled ? 'pointer' : 'not-allowed'};
		
			&:hover {
				background-color:${enabled ? color.hover.background : color.disabled.background};
			}
			${base(props)}
			${shadows.outer};
		`;
	}};
`;
