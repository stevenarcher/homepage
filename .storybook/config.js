import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';
import { configure, addDecorator, setAddon } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import infoAddon from '@storybook/addon-info';
import '../src/global-styles';

const Wrapper = styled.div`
	min-height: 100vh;
	padding: 0 20px;
`;

function Stage(story) {
	return (
		<MemoryRouter context={{}}>
			<Wrapper>
				{story()}
			</Wrapper>
		</MemoryRouter>
	);
}

function loadStories() {
	console.log('Loading stories .........');
	const req = require.context('../src', true, /story\.js$/);
	const paths = req.keys();

	paths.forEach(path => req(path));
}

// update default options
setOptions({
	name: 'Market-Axess',
	url: 'https://github.com/fathomlondon/market-axess-prototype',
	goFullScreen: false,
	showLeftPanel: true,
	showDownPanel: true,
	showSearchBox: false,
	downPanelInRight: false,
	sortStoriesByKind: true,
});

// centering components
addDecorator(centered);

// add a generic stage container for each story
addDecorator(Stage);

// add `knobs` capability to any story
addDecorator(withKnobs);

// add `info` addon
setAddon(infoAddon);

// load our stories
configure(loadStories, module);
