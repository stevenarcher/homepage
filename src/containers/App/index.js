/**
 * App Container
 * -------------
 */

import React, { PureComponent } from 'react';
import Header from '../../components/Header/index';

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
