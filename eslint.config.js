import globals from 'globals';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...importPlugin.configs.recommended.rules,
      'no-underscore-dangle': ['error', { allow: ['__filename', '__dirname'] }],
      'import/extensions': ['error', { js: 'always' }],
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'no-console': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  },
  {
    ignores: ['node_modules/', 'dist/'],
  },
];
