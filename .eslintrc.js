module.exports = {
  root: true,
  extends: ['prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'max-len': [1, { code: 80, comments: 100 }],
        'no-unused-vars': 'off',
        'no-unused-imports': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-unused-imports': 'off',
        'react-native/no-inline-styles': 0,
        // 'no-unexpected-multiline': 'error',
        'no-warning-comments': [
          1,
          { terms: ['todo', 'fixme', 'xxx'], location: 'start' },
        ],
        'prettier/prettier': [
          'warn',
          {
            singleQuote: true,
            semi: true,
            trailingComma: 'all',
          },
        ],
        // 'sort-imports': [
        //   'error',
        //   {
        //     ignoreCase: false,
        //     ignoreDeclarationSort: false,
        //     ignoreMemberSort: false,
        //     memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        //     allowSeparatedGroups: false,
        //   },
        // ],
        // this don't work for react native
        // no, the fucking babel
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/self-closing-comp': [
          'off',
          {
            component: true,
            html: true,
          },
        ],
      },
    },
  ],
};
