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
				Steven Archer - homepage
			</div>
		);
	}
}

export default App;
