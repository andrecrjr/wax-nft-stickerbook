import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';

const { publicVars, rawPublicVars } = loadEnv({ prefixes: ['REACT_APP_'] });


export default defineConfig({
    html:{
        template: './public/index.html',
    },
    plugins: [pluginReact(), pluginSvgr({ mixedImport: true })],
    source: {
        include: [{ not: /[\\/]core-js[\\/]/ }],
        define: {...publicVars, 'process.env': JSON.stringify(rawPublicVars),}
    },
    output: {
    distPath: {
      root: 'build',
    },

  },
});