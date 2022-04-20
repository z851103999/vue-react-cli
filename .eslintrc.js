// .eslintrc.js
module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			globalReturn: false
		}
	},
	plugins: ['prettier'],
	extends: ['plugin:prettier/recommended'],
	rules: {
		'prettier/prettier': 'error'
	}
}
