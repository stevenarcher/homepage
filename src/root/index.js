import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './Routes';

const Root = props => {
	// const isLoading = props.data.user === undefined;
	// const isLoggedOut = props.data.user === null;

	/* if (isLoading) { return <div> Loading ... </div>; } */
	return (
		<BrowserRouter>
			<Route path="*" component={Routes} />
		</BrowserRouter>
	);
};

Root.propTypes = {
	data: PropTypes.object,
};

export default Root;
