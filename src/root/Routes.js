import React from 'react';
import { Route } from 'react-router-dom';
import Placeholder from '../containers/Placeholder';

export default function Routes() {
	return <Route path="*" component={Placeholder} />;
}
