import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    logo: 'https://gw.alicdn.com/imgextra/i4/O1CN015t6Kx81yxSlI52XHh_!!6000000006645-2-tps-454-454.png',
    name: 'Fliggy Design',
    footer:
      'Copyright © 2023 Fliggy Design. Built with <a href="https://clam.alibaba-inc.com/">Clamjs</a>.',
    deviceWidth: 375,
    hd: {
      rules: [{ maxWidth: 375, mode: 'vw', options: [100, 750] }],
    },
    socialLinks: {
      gitlab: 'https://xxxx',
    },
  },
  apiParser: {},
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
  },
  theme: {
    '@c-primary': '#6f1f75',
  },
});
