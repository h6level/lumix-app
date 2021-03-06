module.exports = {
  'extends': ['stylelint-config-standard-scss'],
  'plugins': ['stylelint-scss'],
  'rules': {
    'indentation': [2],
    'max-empty-lines': 1,
    'max-line-length': 100,
    'selector-max-empty-lines': 0,
    'value-list-max-empty-lines': 1,
    'color-named': 'never',
    'font-weight-notation': 'numeric',
    'unit-case': 'lower',
    'value-keyword-case': 'lower',
    'at-rule-name-case': 'lower',
    'selector-type-case': 'lower',
    'property-case': 'lower',
    'color-hex-case': 'upper',
    'selector-pseudo-element-case': 'lower',
    'value-list-comma-space-after': 'always',
    'value-list-comma-newline-after': 'always-multi-line',
    'declaration-bang-space-before': 'always',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',
    // 'selector-list-comma-newline-after': 'always-multi-line',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-attribute-operator-space-before': 'always',
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',
    'block-closing-brace-space-before': 'always-single-line',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-colon-space-after': 'always',
    'function-name-case': 'lower',
    'function-comma-space-after': 'always-single-line',
    'function-max-empty-lines': 0,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'no-eol-whitespace': true,
    'no-empty-source': true,
    'declaration-block-no-duplicate-properties': true,
    // "declaration-no-important": 0,
    'length-zero-no-unit': true,
    'number-no-trailing-zeros': true,
    'scss/comment-no-empty': true,
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/at-import-partial-extension': 'always',
    'string-quotes': 'single',
    'block-no-empty': null,
    'scss/dollar-variable-pattern': /[a-zA-Z][0-9]?/,
    'at-rule-empty-line-before': null,
    'declaration-empty-line-before': 'never',
    'rule-empty-line-before': ['always', {
      ignore: ['after-comment', 'first-nested', 'inside-block'],
    }],
    'comment-empty-line-before': ['always', {
      except: ['first-nested'],
      ignore: ['after-comment', 'stylelint-commands'],
      ignoreComments: ['/^-webkit-/'],
    }],
    'color-function-notation': 'legacy',
    'no-descending-specificity': null,
    'selector-list-comma-newline-after': null,
  },
};
