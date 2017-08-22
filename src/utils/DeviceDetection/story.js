/**
 * Carousel story
 * --------------
 */

import React from 'react';
import device from './index';
import { storiesOf } from '@storybook/react';
import { withKnobs} from '@storybook/addon-knobs';
import { StoryItem, StoryGroup, StoryItemWrapper, StoryItemName,StoryList, StoryItemInfo } from '../../styles/storybook';


const renderKeys = object => {
	const items = [];
	Object.keys(object).forEach(key => {
		items.push(<StoryItem>
			<StoryItemName>{key}</StoryItemName>
			<StoryItemInfo>{object[key]}</StoryItemInfo>
		</StoryItem>);
	});
	return items;
};

storiesOf('Device Detection', module).addDecorator(withKnobs).add('demo', () =>
	<StoryList>
		<StoryGroup>
			<StoryItemWrapper>
				{ renderKeys(device) }
			</StoryItemWrapper>
		</StoryGroup>
	</StoryList>
);
