import { TypeScriptLoader } from '@venice/core/storybook'

module.exports = ({ config }) => {
	config.module.rules.push(TypeScriptLoader);
	config.resolve.extensions.push('.ts', '.tsx');
	return config;
}
