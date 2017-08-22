/**
 * Icon story
 * ----------
 */

import React from 'react';
import colors from '../../../styles/colors';
import { storiesOf } from '@storybook/react';
import LeftIcon from '../LeftIcon';
import RightIcon from '../RightIcon';
import CrossIcon from '../CrossIcon';
import ArrowIcon from './ArrowIcon';
import { Facebook, Flickr, GooglePlus, LinkedIn, Twitter, Pintrest, YouTube } from '../social';
import { number } from '@storybook/addon-knobs';
import { StoryItem, StoryItemName, StoryItemWrapper, StoryList, Title, ScrollWrapper } from '../../../styles/storybook';

const iconComponents = [
	{ Icon: LeftIcon },
	{ Icon: RightIcon },
	{ Icon: CrossIcon },
	{ Icon: Facebook },
	{ Icon: Flickr },
	{ Icon: GooglePlus },
	{ Icon: LinkedIn },
	{ Icon: Twitter },
	{ Icon: Pintrest },
	{ Icon: YouTube },
];

const stories = storiesOf('Icons', module);

stories.addWithInfo('ALL', () =>
	<ScrollWrapper>
		<StoryList>
			<Title>Icons</Title>
			{iconComponents.map(({ Icon }, index) =>
				<StoryItem key={Icon.name + index}>
					<StoryItemName>
						{Icon.name}
					</StoryItemName>
					<StoryItemWrapper>
						<Icon color={colors.base.text} />
					</StoryItemWrapper>
				</StoryItem>
			)}
		</StoryList>
	</ScrollWrapper>
);

iconComponents.forEach(({ Icon }) => {
	const name = Icon.name;
	stories.addWithInfo(name, () => <Icon color={colors.base.text} />);
});

stories.addWithInfo('ArrowIcon', () =>
	<ArrowIcon color={colors.base.text} rotation={number('rotation', 90, { range: true, min: 0, max: 360, step: 1 })} />
);
