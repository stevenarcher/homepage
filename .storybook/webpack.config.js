// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (config, env) => {
	const c = genDefaultConfig(config, env);

	c.resolve.modules.push('../src');

	return c;
};
