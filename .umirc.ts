import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'dumi-demo',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  navs: [
    null,
    {
      title: '配置',
      path: 'https://d.umijs.org/zh-CN/config',
    },
    {
      title: '主题',
      path: 'https://d.umijs.org/zh-CN/theme',
    },
    {
      title: '插件',
      path: 'https://d.umijs.org/zh-CN/plugin',
    },
    {
      title: 'Github',
      path: 'https://github.com/18270219411/ui-dumi',
    },
  ],

  history: {
    type: 'hash',
  },
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  },
  // more config: https://d.umijs.org/config
});
