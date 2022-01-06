import webpack from 'webpack';
import webpackPaths from './webpack.paths';
import { dependencies as externals } from '../../release/app/package.json';

const configuration: webpack.Configuration = {
  externals: [...Object.keys(externals || {})],

  stats: 'errors-only',

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            // Remove this line to enable type checking in webpack builds
            transpileOnly: true,
          },
        },
      },
    ],
  },

  output: {
    path: webpackPaths.srcPath,
    // https://github.com/webpack/webpack/issues/1114
    library: {
      type: 'commonjs2',
    },
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [webpackPaths.srcPath, 'node_modules'],
    alias: {
      '@': webpackPaths.srcPath,
      '@src': webpackPaths.srcPath,
      '@main': webpackPaths.srcMainPath,
      '@app': webpackPaths.srcAppPath,
      '@api': webpackPaths.apiPath,
      '@comp': webpackPaths.compPath,
      '@con': webpackPaths.conPath,
      '@core': webpackPaths.corePath,
      '@db': webpackPaths.dbPath,
      '@i18n': webpackPaths.i18nPath,
      '@theme': webpackPaths.themePath,
      '@lib': webpackPaths.libPath,
      '@page': webpackPaths.pagePath,
      '@scss': webpackPaths.scssPath,
      '@service': webpackPaths.servicePath,
      '@static': webpackPaths.staticPath,
      '@icon': webpackPaths.iconPath,
      '@image': webpackPaths.imagePath,
      '@store': webpackPaths.storePath,
      '@styled': webpackPaths.styledPath,
      '@test': webpackPaths.testPath,
      '@tool': webpackPaths.toolPath,
      '@type': webpackPaths.typePath,
      '@util': webpackPaths.utilPath,
    },
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
  ],
};

export default configuration;
