module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'extends': 'eslint:recommended',
	'parserOptions': { ecmaVersion: 'latest' },
	'rules': {
		'linebreak-style': ['error', 'unix'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'never'],
		'no-trailing-spaces': ['error'],
		'eol-last': ['error']
	}
}
