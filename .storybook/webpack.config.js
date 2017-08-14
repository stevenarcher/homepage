// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

/**
 * @param {JSON} storybookBaseConfig
 * @param {string} configType - 'DEVELOPMENT' or 'PRODUCTION'
 * @return {newConfig}
 */
module.exports = (storybookBaseConfig, configType) => {
	const newConfig = genDefaultConfig(storybookBaseConfig, configType);

	newConfig.resolve.modules.push('../src');

	return newConfig;
};
