module.exports = {
  distDir: 'build',
  useFileSystemPublicRoutes: false,
  webpackDevMiddleware: (config) => {
    return {
      ...config,
      watchOptions: {
        ...config.watchOptions,
        poll: true,
      }
    };
  },
};