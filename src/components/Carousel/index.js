/**
 * Carousel Component
 * ------------------
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, SliderWrapper, Items, Item, Controls, WrapperDots, Dots, Dot } from './styles';
import RightButton from '../Buttons/RightButton';
import LeftButton from '../Buttons/LeftButton';

class Carousel extends Component {
	/**
	 * @constructor
	 * @param props
	 */
	constructor(props) {
		super(props);
		this.state = {
			selectedItem: 0,
		};
	}

	/**
	 * Did Mount
	 */
	componentDidMount() {
		if (!this.props.children) {
			return;
		}
		this.bindEvents();
		this.setState({ initialized: true });
	}

	/**
	 * Will Unmount
	 */
	componentWillUnmount() {
		if (this.state.initialized) {
			this.unbindEvents();
		}
	}

	// Render -------------------------------------------------------------------

	/**
	 * Render Items
	 */
	renderItems() {
		const { height } = this.props;
		return React.Children.map(this.props.children, (item, index) => {
			const selected = index === this.state.selectedItem;
			return (
				<Item ref={'item' + index} key={'itemKey' + index} selected={selected} height={height}>
					{item}
				</Item>
			);
		});
	}

	renderDots() {
		return React.Children.map(this.props.children, (item, index) => {
			const selected = index === this.state.selectedItem;
			return (
				<Dot
					ref={'dot' + index}
					key={'dotKey' + index}
					selected={selected}
					enabled={!selected}
					onClick={() => {
						this.moveTo(index);
					}}
				/>
			);
		});
	}

	/**
	 * Render
	 */
	render() {
		const { width } = this.props;
		const noChildren = !this.props.children || this.props.children.length === 0;
		if (noChildren) {
			return <div>empty</div>;
		}

		return (
			<Wrapper width={width}>
				<SliderWrapper>
					<Items item={this.state.selectedItem}>
						{this.renderItems()}
					</Items>
				</SliderWrapper>
				<Controls>
					<LeftButton onClick={this.prevItem} />
					<WrapperDots>
						<Dots>
							{this.renderDots()}
						</Dots>
					</WrapperDots>
					<RightButton onClick={this.nextItem} />
				</Controls>
			</Wrapper>
		);
	}

	/**
	 * Move To
	 * @param {Number} position
	 */
	moveTo = position => {
		const lastPosition = this.props.children.length - 1;

		if (position < 0) {
			position = this.props.infiniteLoop ? lastPosition : 0;
		}

		if (position > lastPosition) {
			position = this.props.infiniteLoop ? 0 : lastPosition;
		}

		console.log('move to ', position);
		this.setState({ selectedItem: position });
	};

	/**
	 * Previous Item
	 */
	prevItem = () => {
		this.moveTo(this.state.selectedItem - 1);
	};

	/**
	 * Next Item
	 */
	nextItem = () => {
		this.moveTo(this.state.selectedItem + 1);
	};

	// Bind Events --------------------------------------------------------------

	/**
	 * Bind Events
	 */
	bindEvents = () => {
		if (this.props.useKeyboardArrows) {
			document.addEventListener('keydown', this.navigateWithKeyboard);
		}
	};

	/**
	 * Unbind Events
	 */
	unbindEvents = () => {
		if (this.props.useKeyboardArrows) {
			document.removeEventListener('keydown', this.navigateWithKeyboard);
		}
	};

	// Event Handlers -----------------------------------------------------------

	/**
	 * Navigate With Keyboard
	 * @param event
	 */
	navigateWithKeyboard = event => {
		switch (event.key) {
			case 'ArrowRight':
				this.nextItem();
				break;

			case 'ArrowLeft':
				this.prevItem();
				break;
		}
	};
}

Carousel.propTypes = {
	useKeyboardArrows: PropTypes.bool,
	infiniteLoop: PropTypes.bool,
	children: PropTypes.node,
	width: PropTypes.string,
};

Carousel.defaultProps = {
	useKeyboardArrows: true,
	infiniteLoop: true,
	width: '400px',
	height: '400px',
};

export default Carousel;
