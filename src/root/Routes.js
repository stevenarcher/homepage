import React from 'react';
import { Route } from 'react-router-dom';
import App from '../containers/App';

export default function Routes() {
	return <Route path="*" component={App} />;
}
