import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Placeholder from '../containers/Placeholder';
import App from '../containers/App';

export default function Routes() {
	return (
		<Switch>
			<Route path="/wip" component={App} />
			<Route path="*" component={Placeholder} />
		</Switch>
	);
}
