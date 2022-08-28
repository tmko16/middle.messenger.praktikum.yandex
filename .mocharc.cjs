module.exports = {
	extension: ['js', 'jsx', 'ts', 'tsx'],
	spec: ['test/**.{js,ts,jsx,tsx}', 'src/**/*.spec.ts'],
	loader: 'ts-node/esm',
	require: 'test/babel-register.js'
};
