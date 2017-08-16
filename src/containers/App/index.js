/**
 * App Container
 * -------------
 */

import React, { PureComponent } from 'react';

export class App extends PureComponent {
	constructor() {
		super();
		this.state = {
			asideOpen: true,
			selectedID: '',
		};
	}

	render() {
		return (
			<div>
				<h1>Steven Archer</h1>
			</div>
		);
	}
}

export default App;
