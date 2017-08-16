/**
 * Buttons story
 * -------------
 */

import React from 'react';
import colors from '../../../styles/colors';
import { storiesOf } from '@storybook/react';
import Button, { ButtonStyle } from '../Button';
import LeftButton from '../LeftButton';
import RightButton from '../RightButton';
import CloseButton from '../CloseButton';
import { text, boolean } from '@storybook/addon-knobs';
import { StoryItem, StoryItemName, StoryItemWrapper, StoryList, Title, ScrollWrapper } from '../../../styles/storybook';

const buttonComponents = [
	{ Component: Button, name: 'Button Primary', copy: 'Button primary', style: ButtonStyle.primary },
	{ Component: LeftButton, name: 'LeftButton' },
	{ Component: RightButton, name: 'RightButton' },
	{ Component: CloseButton, name: 'CloseButton' },
];

const stories = storiesOf('Buttons', module);

stories.addWithInfo('ALL', () =>
	<ScrollWrapper>
		<StoryList>
			<Title>Buttons</Title>
			{buttonComponents.map(({ Component, name, copy, style }, index) =>
				<StoryItem key={name + index}>
					<StoryItemName>
						{name}
					</StoryItemName>
					<StoryItemWrapper>
						<Component color={colors.base.text} style={style}>
							{copy}
						</Component>
					</StoryItemWrapper>
				</StoryItem>
			)}
		</StoryList>
	</ScrollWrapper>
);

buttonComponents.forEach(({ Component, name, copy }) => {
	stories.addWithInfo(name, () =>
		<Component enabled={boolean('enabled', true)} width={text('width', 'auto')}>
			{text('text', copy ? copy : '')}
		</Component>
	);
});