module.exports = {
	"root": true,
	"plugins": ["node", "prettier"],
	"extends": ["eslint:recommended", "plugin:node/recommended"],
	"env": {
		"node": true,
		"es6": true,
	},
	"parserOptions": { "ecmaVersion": 2017 },
	"rules": {
		"quote-props": ["error", "consistent"],
		"no-dupe-keys": "error",
		"quotes": ["error", "double"],
		"no-undef": "error",
		"no-extra-semi": "error",
		"semi": "error",
		"no-template-curly-in-string": "error",
		"no-caller": "error",
		"yoda": "error",
		"eqeqeq": "error",
		"global-require": "off",
		"brace-style": "error",
		"key-spacing": "error",
		"space-in-parens": ["error", "never"],
		"space-infix-ops": "error",
		"indent": ["error", "tab", { "SwitchCase": 1 }],
		"indent": ["error", "tab", { "SwitchCase": 1 }],
		"no-extra-bind": "warn",
		"no-empty": "off",
		"no-multiple-empty-lines": "error",
		"no-multi-spaces": "error",
		"no-process-exit": "warn",
		"no-trailing-spaces": "error",
		"no-use-before-define": "off",
		"no-unused-vars": ["error", { "args": "none" }],
		"no-unsafe-negation": "error",
		"no-loop-func": "warn",
		"space-before-function-paren": ["error", "never"],
		"space-before-blocks": "error",
		"object-curly-spacing": ["error", "always"],
		"keyword-spacing": ["error", {
			"after": false,
			"overrides": {
				"const": { "after": true },
				"try": { "after": true },
				"else": { "after": true },
				"throw": { "after": true },
				"case": { "after": true },
				"return": { "after": true },
				"finally": { "after": true },
				"do": { "after": true }
			}
		}],
		"no-console": "off",
		"valid-jsdoc": "error",
		"node/no-unsupported-features": ["error", { "version": 4 }],
		"node/no-deprecated-api": "error",
		"node/no-missing-import": "error",
		"node/no-missing-require": [
			"error",
			{
				"allowModules": [
					"webpack"
				]
			}
		],
		"node/no-unpublished-bin": "error",
		"node/no-unpublished-require": "error",
		"node/process-exit-as-throw": "error",
		"eol-last": ["error", "always"],
		"newline-per-chained-call": "off",
		"node/process-exit-as-throw": "error",
		"prettier/prettier": "error"
	}
};
