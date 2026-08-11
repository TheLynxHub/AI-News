import federation from '@originjs/vite-plugin-federation';
import {sentryVitePlugin} from '@sentry/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'electron-vite';
import {resolve} from 'path';

export default defineConfig(({mode}) => {
  const isDev = mode === 'development';

  return {
    main: {
      root: resolve('extension/src/main'),
      build: {
        sourcemap: true,
        externalizeDeps: {exclude: ['tree-kill', 'axios']},
        outDir: resolve('extension_out/main'),
        rolldownOptions: {
          input: resolve('extension/src/main/lynxExtension.ts'),
          output: {entryFileNames: 'mainEntry.cjs', format: 'cjs'},
        },
      },
      resolve: {
        alias: {
          '@lynx_common': resolve(__dirname, '..', 'src/common'),
          '@lynx_main': resolve(__dirname, '..', 'src/main'),
        },
      },
      plugins: [
        sentryVitePlugin({
          authToken: process.env.SENTRY_AUTH_TOKEN,
          org: 'lynxhub',
          project: 'ai-news',
          disable: isDev,
          sourcemaps: {
            filesToDeleteAfterUpload: '**/*.map',
          },
        }),
      ],
    },
    renderer: {
      root: resolve('extension/src/renderer'),
      plugins: [
        sentryVitePlugin({
          authToken: process.env.SENTRY_AUTH_TOKEN,
          org: 'lynxhub',
          project: 'ai-news',
          disable: isDev,
          sourcemaps: {
            filesToDeleteAfterUpload: '**/*.map',
          },
        }),
        react(),
        tailwindcss(),
        federation({
          name: 'extension',
          filename: 'rendererEntry.mjs',
          exposes: {
            Extension: resolve('extension/src/renderer/Extension.tsx'),
          },
          shared: {
            react: {generate: false},
            'react-dom': {generate: false},
            'react-redux': {generate: false},
            '@heroui/react': {generate: false},
            '@heroui/styles': {generate: false},
            'react-aria': {generate: false},
          },
        }),
      ],
      resolve: {
        alias: {
          '@lynx_module': resolve(__dirname, '..', 'module/src'),
          '@lynx_extension': resolve(__dirname, '..', 'extension/src'),
          '@lynx_common': resolve(__dirname, '..', 'src/common'),
          '@lynx': resolve(__dirname, '..', 'src/renderer/mainWindow'),
          '@lynx_shared': resolve(__dirname, '..', 'src/renderer/shared'),
          '@lynx_assets': resolve(__dirname, '..', 'src/renderer/shared/assets'),
        },
      },
      build: {
        sourcemap: true,
        outDir: resolve('extension_out/renderer'),
        rolldownOptions: {
          input: resolve('extension/src/renderer/index.html'),
          treeshake: {moduleSideEffects: false},
        },
        assetsDir: '',
        minify: false,
        target: 'esnext',
        cssCodeSplit: false,
        modulePreload: false,
      },
      publicDir: resolve(__dirname, 'extension/src/renderer/Public'),
    },
  };
});
