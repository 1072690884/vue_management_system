module.exports = {
  devServer: {
    //
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }

      },
      "/ms": {
        target: 'https://www.easy-mock.com/mock/5c05e04be1eaff56e652cecb',
        changeOrigin: true
      }
    }
  },
  lintOnSave: false
};
