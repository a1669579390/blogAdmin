const port = process.env.port || process.env.npm_config_port || 3456 // dev port

module.exports = {
    // 选项...
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    devServer: {
        port: port,
        open: true,
        overlay: {
          warnings: false,
          errors: true
        }
    }
  }