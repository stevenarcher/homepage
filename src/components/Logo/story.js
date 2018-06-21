/**
 * Logo story
 * ----------
 */

import React from 'react';
import Logo from './index';
import { storiesOf } from '@storybook/react';
import { boolean, number, color } from '@storybook/addon-knobs';

const stories = storiesOf('Logo', module);

stories.addWithInfo('example', () =>
	<span>
		<Logo
			width={number('width', 62)}
			percent={boolean('percent', false)}
			innerFill={color('innerFill', '#000000')}
			innerStroke={color('innerStroke', 'none')}
			outerFill={color('outerFill', '#000000')}
			outerStroke={color('outerStroke', 'none')}
			arrowFill={color('arrowFill', '#000000')}
			arrowStroke={color('arrowStroke', 'none')}
		/>
	</span>
);
