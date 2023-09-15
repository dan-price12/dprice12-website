import {defineConfig} from 'cypress';

export default defineConfig({
  e2e: {
    supportFile: false,
    baseUrl: 'http://localhost:3000'
  },
  port: 4500,
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite'
    }
  }
});
