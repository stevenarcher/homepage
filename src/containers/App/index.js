/**
 * App Container
 * -------------
 */

import React, { PureComponent } from 'react';
import Social from '../Social';
import Header from '../../components/Header/index';
import {Section} from './styles';

export class App extends PureComponent {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<Header />
			</div>
		);
	}
}

export default App;
