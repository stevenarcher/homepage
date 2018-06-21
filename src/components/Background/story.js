/**
 * Carousel story
 * --------------
 */

import React from 'react';
import Background from './index';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, color, object, array, select, date } from '@storybook/addon-knobs';

storiesOf('Background', module).addDecorator(withKnobs).add('example', () => <Background useWebGL={true} />);
