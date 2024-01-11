import { defineConfig } from 'vite';
import monkey, { cdn } from 'vite-plugin-monkey';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: {
        jquery: [['default', '$'],
        ['default', 'jquery']],
      },
    }),
    monkey({
      entry: 'src/main.js',
      userscript: {
        name: '校友邦实习一键评价 XiaoYouBang Auto Review',
        description: '一键评价，自动填写评价内容',
        icon: 'https://www.xybsyw.com/favicon.ico',
        author: 'lcandy2',
        namespace: 'https://github.com/lcandy2/XiaoYouBang-Auto-Review',
        match: ['*://*.xybsyw.com/personal/*'],
        "run-at": 'document-start',
        license: 'MIT',
      },
      build: {
        externalGlobals: {
          jquery: cdn.npmmirror('jQuery', 'dist/jquery.min.js'),
        },
      },
    }),
  ],
});
