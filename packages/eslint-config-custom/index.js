module.exports = {
    plugins: ['@typescript-eslint', 'unused-imports'],
    extends: ['airbnb-typescript', 'next', 'next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        project: '**/tsconfig.json',
        tsconfigRootDir: '.'
    },
    rules: {
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': ['error', {argsIgnorePattern: '_'}],
        'no-unused-vars': [2, {args: 'all', argsIgnorePattern: '_'}],
        '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '_'}],
        '@typescript-eslint/no-var-requires': 2,
        '@typescript-eslint/brace-style': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/comma-spacing': 'off',
        '@typescript-eslint/func-call-spacing': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/keyword-spacing': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/no-extra-parens': 'off',
        '@typescript-eslint/object-curly-spacing': 'off',
        '@typescript-eslint/padding-line-between-statements': 'off',
        '@typescript-eslint/quotes': 'off',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/space-before-blocks': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/space-infix-ops': 'off',
        '@typescript-eslint/type-annotation-spacing': 'off',
        '@typescript-eslint/no-use-before-define': ['warn', {functions: false, classes: false, variables: false, typedefs: false}],
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
