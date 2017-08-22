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
		return (
			<Wrapper>
				<GitHubButton onClick={() => { this.openURL('https://github.com/stevenarcher') }}/>
				<BitBucketButton onClick={() => { this.openURL('https://bitbucket.org/stevenarcher') }}/>
				<LinkedInButton onClick={() => { this.openURL('http://uk.linkedin.com/pub/steven-archer/17/872/16b') }}/>
				<TwitterButton onClick={() => { this.openURL('http://twitter.com/stevenarcher') }}/>
				<FlickrButton onClick={() => { this.openURL('http://www.flickr.com/photos/stevenarcher') }}/>
				<YouTubeButton onClick={() => { this.openURL('http://www.youtube.com/user/stevenmarcher') }}/>
			</Wrapper>
		);
	}
}

export default Social;
