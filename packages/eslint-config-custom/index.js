module.exports = {
  plugins: ['@typescript-eslint', 'unused-imports'],
  extends: [
    'airbnb-typescript',
    'next',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: '.'
  },
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['error', {argsIgnorePattern: '_'}],
    'no-unused-vars': [2, {args: 'all', argsIgnorePattern: '_'}],
    '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '_'}],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'internal', 'external', 'parent', 'type'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before'
          },
          {
            pattern: '~/**',
            group: 'external'
          },
          {
            pattern: '@app/shared/**',
            group: 'external',
            position: 'after'
          },
          {
            pattern: '@app/components/**',
            group: 'external',
            position: 'after'
          },
          {
            pattern: '@app/shared/types/**',
            group: 'external',
            position: 'after'
          }
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        pathGroupsExcludedImportTypes: ['builtin', 'builtin', 'type']
      }
    ]
  }
};
