/**
 * Placeholder Container
 * -------------
 */

import React, { PureComponent } from 'react';
import Social from '../Social';
import Button from '../../components/Buttons/Button'
import { Wrapper, Title, SubTitle, Footer, Header, Box } from './styles';

export class Placeholder extends PureComponent {
	constructor() {
		super();
	}

	openURL = url => {
		const tab = window.open(url, '_blank');
		tab.focus();
	};

	render() {
		return (
			<Wrapper>
				<Header>This page is under construction.</Header>
				<Box>
					<Title>Steven Archer</Title>
					<SubTitle>Freelance Developer</SubTitle>
					<Social/>
				</Box>
				<Footer>
					<Button onClick={() => {this.openURL('http://stevenarcher.netlify.com/')}}>See the work in progress</Button>
				</Footer>
			</Wrapper>
		);
	}
}

export default Placeholder;
