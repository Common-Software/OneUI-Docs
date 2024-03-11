import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'OneUI',
    logo: '/images/logo.jpg',
    hd: { rules: [] },
    deviceWidth: 375,
    showLineNum: true
  },
  favicons: ['/images/logo.jpg'],
});
