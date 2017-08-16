import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './Routes';

const Root = props => {
	// const isLoading = props.data.user === undefined;
	// const isLoggedOut = props.data.user === null;

	/* if (isLoading) { return <div> Loading ... </div>; } */
	return (
		<Router>
			<Route path="*" component={Routes} />
		</Router>
	);
};

Root.propTypes = {
	data: PropTypes.object,
};

export default Root;
