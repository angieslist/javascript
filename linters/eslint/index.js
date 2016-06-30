module.exports = {
  'extends': [
    'airbnb'
  ],
  'parser': 'babel-eslint',
  'plugins': [
    'jsx-a11y',
    'react'
  ],
  'rules': {
    'no-constant-condition': 1,
    'valid-jsdoc': 2,
    'no-unexpected-multiline': 2,

    'array-callback-return': 0,
    'comma-dangle': [2, 'never'],
    'curly': 2,
    'no-alert': 2,
    'no-eq-null': 2,
    'no-param-reassign': [1, { 'props': true }],
    'no-void': 2,
    'vars-on-top': 0,

    'no-label-var': 2,
    'no-multi-spaces': 1,
    'no-undef-init': 2,
    'no-unused-vars': 0,

    'callback-return': [2, ['callback', 'cb', 'next']],
    'handle-callback-err': 2,
    'no-mixed-requires': 2,
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-process-exit': 2,
    'no-restricted-modules': 2,
    'no-useless-escape': 1,
    'no-extra-parens': 0,
    'newline-per-chained-call': 0,
    'padded-block': [1, 'never'],

    'brace-style': [2, '1tbs'],
    'consistent-this': [2, 'self'],
    'func-names': 0,
    'jsx-quotes': [2, 'prefer-single'],
    'indent': [2, 2, {}],
    'new-cap': 1,
    'new-parens': 2,
    'no-else-return': 0,
    'no-continue': 2,
    'no-lonely-if': 2,
    'no-unneeded-ternary': 1,
    'object-curly-spacing': 1,
    'quotes': [2, 'single'],
    'quote-props': 0, // [2, 'as-needed'],
    'space-in-parens': 1,
    'space-infix-ops': [2, { 'int32Hint': true }],
    'space-unary-ops': 2,
    'wrap-regex': 2,

    'arrow-body-style': 0,
    'arrow-parens': 2,
    'constructor-super': 2,
    'no-this-before-super': 2,
    'no-var': 1, /**/
    'object-shorthand': [0, 'always'],
    'prefer-arrow-callback': 0, /**/
    'prefer-const': 1,
    'prefer-rest-params': 1,
    'prefer-template': 0, /* one day remove this */
    'require-yield': 2,

    'max-depth': [2, 6],
    'max-len': 0,
    'max-params': [2, 6],
    'global-require': 0, /* need to be able to require in images for webpack */

    'no-underscore-dangle' : 0,
    'import/no-unresolved': 0, /* must stay off while we use requirejs */

    'jsx-a11y/aria-props': 2,
    'jsx-a11y/aria-proptypes': 0, /**/
    'jsx-a11y/aria-role': 2,
    'jsx-a11y/aria-unsupported-elements': 2,
    'jsx-a11y/href-no-hash': 0, /**/
    'jsx-a11y/img-redundant-alt': 2,
    'jsx-a11y/img-has-alt': 2,
    'jsx-a11y/label-has-for': [1, [ 'Label', 'InputDescriptor']],
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/no-access-key': 2,
    'jsx-a11y/no-onchange': 0,
    'jsx-a11y/onclick-has-focus': 0, /* Need this to allow custom types like Button */
    'jsx-a11y/onclick-has-role': 0, /* Need this to allow custom types like Button */
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'jsx-a11y/tabindex-no-positive': 2,

    'react/jsx-first-prop-new-line': 0, /**/
    'react/no-direct-mutation-state': 2,
    'react/no-danger': 2,
    'react/jsx-equals-spacing': 1,
    'react/jsx-key': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-boolean-value': 0,
    'react/jsx-closing-bracket-location': [0, 'tag-aligned'],
    'react/jsx-indent': 1,
    'react/jsx-indent-props': [1, 2],
    'react/jsx-no-bind': 1,
    'react/jsx-pascal-case': 1,
    'react/jsx-space-before-closing': 1,
    'react/no-is-mounted': 1,
    'react/prefer-es6-class': 0,
    'react/prefer-stateless-function': 1, /**/
    'react/require-render-return': 1,
    'react/sort-comp': [2, {}],
  },

  'env': {
    'browser': true,
    'node': true,
    'worker': false,
    'amd': true,
    'mocha': true,
    'jasmine': false,
    'phantomjs': false,
    'jquery': true,
    'prototypejs': false,
    'shelljs': false,
    'meteor': false,
    'es6': true
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json']
      }
    },
    react: {
      pragma: 'React',
      version: '0.14'
    },
  }
};
