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
				<Header/>
				<Section>
					<h1>About</h1>
					<span>brief description</span>
				</Section>
				<Section>
					<h1>Projects</h1>
					<span>This is where the project will be placed</span>
				</Section>
				<Section>
					<h1>History</h1>
					<span>D3 ... get from linked in?</span>
				</Section>
				<Section>
					<h1>Photography </h1>
					<span>flicker? instergram?</span>
				</Section>
				<Section>
					<h1>Contact</h1>
					<Social/>
				</Section>
			</div>
		);
	}
}

export default App;
