import {defineConfig} from 'cypress';

const CI = process.env.CI === 'true';
const TESTING_ENVIRONMENT = process.env.TESTING_ENVIRONMENT;

const baseUrl = CI ? `https://${TESTING_ENVIRONMENT}.salienttechconsulting.com` : 'http://localhost:3000';

module.exports = defineConfig({
    e2e: {
        baseUrl: baseUrl
    },
    port: 4500,
    component: {
        devServer: {
            framework: 'react',
            bundler: 'vite'
        }
    },
    retries: {
        runMode: 2
    }
});
