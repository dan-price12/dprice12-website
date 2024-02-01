module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.[jt]sx?$': ['babel-jest', {configFile: './babel.config.testing.js'}]
    },
    transformIgnorePatterns: ['node_modules/(?!@azure/identity)/'],
    testEnvironment: 'jsdom'
};
