/*
  This file is automatically generated by the sc-vue-cli-plugin-ibrebuild plugin and is
  managed by the IBRS team. All changes to this file will be overwritten when invoking the plugin.
*/

module.exports = {
  rules: {
    /*
      The slot attribute was deprecated in Vue in favor of v-slot.
      However, for the Emerald Web Components, the slot attribute is still valid and required.
      Hence, the usage of the slot attribute is allowed.
    */
    'vue/no-deprecated-slot-attribute': [
      'off',
    ],
    /*
      The default setting clashes with the HTML and Web Component spec regarding
      self-closing-tags and void elements which might cause problems for the Emerald Web Components.
      More info: https://developer.mozilla.org/en-US/docs/Glossary/Void_element
    */
    'vue/html-self-closing': ['error', {
      html: {
        normal: 'never',
        component: 'any',
      },
    }],
    'vue/attribute-hyphenation': ['warn', 'always', {
      ignore: ['isOpen'],
    }],
  },
  overrides: [
    {
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
          },
        ],
      },
    },
    {
      files: [
        './src/**/*.spec.{j,t}s?(x)',
      ],
      rules: {
        'import/order': ['warn'],
      },
    },
    
    {
      files: [
        './src/**/*.{j,t}s?(x)',
        './src/**/**/*.vue',
      ],
      rules: {
        'max-len': [
          'error',
          {
            code: 140,
            ignoreUrls: true,
          },
        ],
      },
    },
  ],
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
};
