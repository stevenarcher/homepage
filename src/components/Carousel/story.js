/**
 * Carousel story
 * --------------
 */

import React from 'react';
import Carousel from './index';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, color, object, array, select, date } from '@storybook/addon-knobs';

storiesOf('Carousel', module).addDecorator(withKnobs).add('example', () =>
	<Carousel>
		<div>
			<h1>Steven Archer</h1>
			<br />
			<span>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed pretium lorem. Suspendisse sed tristique sem.
				Morbi convallis pellentesque tortor, ultricies vehicula risus pulvinar quis. Pellentesque ultricies scelerisque
				tincidunt. Aliquam facilisis congue massa, id venenatis est fringilla quis. Curabitur eu nibh ut augue imperdiet
				eleifend interdum ut dui. Suspendisse eget velit vel orci congue vehicula sed eu massa. Sed vestibulum vehicula
				eros, in sagittis lorem mattis in. Duis viverra lacinia ornare. Sed et velit vitae lectus posuere iaculis dictum
				ac est. Vivamus iaculis commodo orci sit amet suscipit. Quisque non pulvinar magna. Mauris eu hendrerit nisi.
				Etiam eleifend nec orci tincidunt pellentesque
			</span>
		</div>
		<div>
			<h2>Page 2</h2>
			<br />
			<span>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed pretium lorem. Suspendisse sed tristique sem.
				Morbi convallis pellentesque tortor, ultricies vehicula risus pulvinar quis. Pellentesque ultricies scelerisque
				tincidunt. Aliquam facilisis congue massa, id venenatis est fringilla quis. Curabitur eu nibh ut augue imperdiet
				eleifend interdum ut dui. Suspendisse eget velit vel orci congue vehicula sed eu massa. Sed vestibulum vehicula
				eros, in sagittis lorem mattis in. Duis viverra lacinia ornare. Sed et velit vitae lectus posuere iaculis dictum
				ac est. Vivamus iaculis commodo orci sit amet suscipit. Quisque non pulvinar magna. Mauris eu hendrerit nisi.
				Etiam eleifend nec orci tincidunt pellentesque
			</span>
		</div>
		<div>Last Page</div>
	</Carousel>
);
