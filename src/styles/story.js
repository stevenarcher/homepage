/**
 * Styles story
 * ------------
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import {
	StoryItem,
	StoryGroup,
	StoryItemName,
	StoryItemInfo,
	StoryItemWrapper,
	StoryList,
	Title,
	StoryDot,
	ScrollWrapper,
	SubTitle,
} from './storybook';
import { colors, palette } from './colors';
import * as shadows from './shadows';
import * as typography from './typography';

const stories = storiesOf('Styles', module);

// Colors ---------------------------------------------------------------------
const storyColors = [];
const storyPalette = [];
const findColors = (object, array) => {
	Object.keys(object).forEach(key => {
		if (typeof object[key] === 'string') {
			array.push({ title: false, name: key, value: object[key] });
		} else {
			const nestedArray = [];
			array.push(nestedArray);
			nestedArray.push({ title: key });
			findColors(object[key], nestedArray);
		}
	});
};
findColors(colors, storyColors);
findColors(palette, storyPalette);

const rgb2hex = rgb => {
	rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
	return rgb && rgb.length === 4
		? '#' +
			('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
			('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
			('0' + parseInt(rgb[3], 10).toString(16)).slice(-2)
		: '';
};

const getColorName = color => {
	if (colorName[color] !== undefined) {
		return colorName[color];
	} else {
		const a = color.split(',');
		const alpha = a[a.length - 1].substring(0, a[a.length - 1].length - 1);
		return `${colorName[rgb2hex(color).toUpperCase()]} - ${alpha * 100}%`;
	}
};

const getColorHex = color => {
	return colorName[color] === undefined ? rgb2hex(color).toUpperCase() : color;
};

const renderPalettes = (item, index) => {
	if (Array.isArray(item)) {
		return (
			<StoryGroup key={index} className="group">
				{item.map(renderPalettes)}
			</StoryGroup>
		);
	} else {
		return renderPalette(item, index);
	}
};

const colorName = {};

const renderPalette = ({ name, value }, index) => {
	colorName[value] = name;
	return (
		<StoryItem key={index} color={value}>
			<StoryItemInfo>
				{value}
			</StoryItemInfo>
			<StoryItemWrapper>
				<StoryDot color={value} />
			</StoryItemWrapper>
			<StoryItemName>
				{name}
			</StoryItemName>
		</StoryItem>
	);
};

const renderColors = (item, index) => {
	if (Array.isArray(item)) {
		return (
			<StoryGroup key={index} className="group">
				{item.map(renderColors)}
			</StoryGroup>
		);
	} else {
		return renderColor(item, index);
	}
};

const renderColor = ({ title, group, name, value }, index) =>
	title
		? <SubTitle key={index}>
				{title}
			</SubTitle>
		: <StoryItem key={index}>
				<StoryItemWrapper>
					<StoryDot color={value} />
				</StoryItemWrapper>
				<StoryItemName>
					{name}
				</StoryItemName>
				<StoryItemInfo>
					{getColorName(value)}
					<br />
					{getColorHex(value)}
				</StoryItemInfo>
			</StoryItem>;

stories.addWithInfo('Colors', () =>
	<ScrollWrapper>
		<StoryList>
			<Title>
				Color Palette<span> - all unique colors are defined here</span>
			</Title>
			{renderPalettes(storyPalette)}
			<Title>Color Theme</Title>
			{renderColors(storyColors)}
		</StoryList>
	</ScrollWrapper>
);

// Shadows --------------------------------------------------------------------

const ShadowDot = styled.div`
	${props => `
	background-color: ${palette.white};
	width:40px;
	height:40px;
	margin: auto;
	border: 0px solid;
	border-radius: 50%;
	${props.shadow}
`};
`;

const storyShadows = [];
Object.keys(shadows).forEach(key => {
	storyShadows.push({ name: key, value: shadows[key] });
});

stories.addWithInfo('Shadows', () =>
	<ScrollWrapper>
		<StoryList>
			<Title>Shadows</Title>
			{storyShadows.map(({ name, value }, index) =>
				<StoryItem key={name}>
					<StoryItemWrapper>
						<ShadowDot shadow={value} />
					</StoryItemWrapper>
					<StoryItemName>
						{name}
					</StoryItemName>
				</StoryItem>
			)}
		</StoryList>
	</ScrollWrapper>
);

// Typography -----------------------------------------------------------------

const storyStyles = [];
Object.keys(typography).forEach(key => {
	if (key !== 'defaults') {
		storyStyles.push({
			name: key,
			Component: styled.div`
				padding: 10px;
				min-width: 60vw;
				text-align: left;
				color: ${colors.base.text};
				background-color: ${palette.white};
				${typography[key]};
			`,
		});
	}
});

stories.addWithInfo('Typography', () =>
	<ScrollWrapper>
		<StoryList>
			<Title>Typography</Title>
			{storyStyles.map(({ name, Component }, index) =>
				<StoryItem key={index}>
					<Component>
						{name} <br />
						The quick brown fox jumps over the lazy dog
					</Component>
				</StoryItem>
			)}
		</StoryList>
	</ScrollWrapper>
);
