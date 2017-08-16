/**
 * Header Story
 * -------------
 */

import styled from 'styled-components';
import React from 'react';
import Header from './index';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

export const Wrapper = styled.div`min-width: 500px;`;

storiesOf('Header', module).addDecorator(withKnobs).add('Web GL mode', () =>
	<Wrapper>
		<Header useWebGL={true} />
	</Wrapper>
);
