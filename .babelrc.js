const developmentEnvironments = ['development', 'test'];

const developmentPlugins = [
  require('@babel/plugin-transform-runtime'),
  require.resolve('react-refresh/babel'),
];

const productionPlugins = [
  require('babel-plugin-dev-expression'),

  // babel-preset-react-optimize
  require('@babel/plugin-transform-react-constant-elements'),
  require('@babel/plugin-transform-react-inline-elements'),
  require('babel-plugin-transform-react-remove-prop-types'),
];

const hasJsxRuntime = (() => {
  if (process.env.DISABLE_NEW_JSX_TRANSFORM === 'true') {
    return false;
  }

  try {
    require.resolve('react/jsx-runtime');
    return true;
  } catch (e) {
    return false;
  }
})();

module.exports = api => {
  // See docs about api at https://babeljs.io/docs/en/config-files#apicache

  const development = api.env(developmentEnvironments);

  return {
    presets: [
      // @babel/preset-env will automatically target our browserslist targets
      require('@babel/preset-env'),
      require('@babel/preset-typescript'),
      [require('babel-preset-react-app/dependencies'), { helpers: true }],
      // [require('@babel/preset-react'), { development }],
      [
        require.resolve('babel-preset-react-app'),
        {
          runtime: hasJsxRuntime ? 'automatic' : 'classic',
        },
      ],
    ],
    // assumptions: {
    //   setPublicClassFields: false,
    // },
    plugins: [
      // Stage 0
      require('@babel/plugin-proposal-function-bind'),
      [require('@babel/plugin-proposal-class-properties'), { loose: false }],
      [
        '@babel/plugin-transform-react-jsx',
        {
          'throwIfNamespace': false,
        },
      ],
      require('@babel/plugin-proposal-nullish-coalescing-operator'),

      ...(development ? developmentPlugins : productionPlugins),
    ],
  };
};
