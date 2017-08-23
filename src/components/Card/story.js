/**
 * Carousel story
 * --------------
 */

import React from 'react';
import Card from './index';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, color, object, array, select, date } from '@storybook/addon-knobs';

storiesOf('Card', module).addDecorator(withKnobs).add('example', () => <Card />);
