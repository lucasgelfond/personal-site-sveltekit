module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	ignorePatterns: ['*.cjs,', '*.config.js'],
	extends: ['airbnb-base-typescript-prettier', 'prettier'],
	plugins: ['svelte3', '@typescript-eslint', 'prettier'],
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
		},
	],
	settings: {
		'svelte3/typescript': () => require('typescript'),
	},
	rules: {
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'import/no-mutable-exports': 0,
		'no-labels': 0,
		'no-restricted-syntax': 0,
		'prettier/prettier': 'error',
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		project: './tsconfig.json',
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
};
