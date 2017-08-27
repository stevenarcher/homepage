/**
 * Social Container
 * ----------------
 */

import React, { PureComponent } from 'react';
import { GitHubButton, BitBucketButton, LinkedInButton, TwitterButton, FlickrButton, YouTubeButton } from '../../components/Buttons/social';
import { Wrapper } from './styles';

export class Social extends PureComponent {
	constructor() {
		super();
	}

	openURL = url => {
		const tab = window.open(url, '_blank');
		tab.focus();
	};

	render() {
		const width = '48px';
		return (
			<Wrapper>
				<GitHubButton width={width} onClick={() => { this.openURL('https://github.com/stevenarcher') }}/>
				<BitBucketButton width={width} onClick={() => { this.openURL('https://bitbucket.org/stevenarcher') }}/>
				<LinkedInButton width={width} onClick={() => { this.openURL('http://uk.linkedin.com/pub/steven-archer/17/872/16b') }}/>
				<TwitterButton width={width} onClick={() => { this.openURL('http://twitter.com/stevenarcher') }}/>
				<FlickrButton width={width} onClick={() => { this.openURL('http://www.flickr.com/photos/stevenarcher') }}/>
				<YouTubeButton width={width} onClick={() => { this.openURL('http://www.youtube.com/user/stevenmarcher') }}/>
			</Wrapper>
		);
	}
}

export default Social;
