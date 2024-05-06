import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: '杜同学',
    favicons: ['https://qiniu.img.3000.xin/blog/system/logo.png'],
    logo: 'https://qiniu.img.3000.xin/blog/system/logo.png',
    socialLinks: {
      github: 'https://github.com/duweikang',
    },
    footer: `Copyright © 2018-${new Date().getFullYear()} 杜同学`,
  },
});
