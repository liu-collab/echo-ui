const path = require('path')
//const join = path.join

function resolve(dir) {
  return path.resolve(__dirname, dir)
}
module.exports = {
  pages: {
    index: {
      entry: 'examples/main.ts', // 运行入口
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json', '.ts'],
      alias: {
        packages: resolve('packages')
      }
    }
  },
  chainWebpack: (config) => {
    config.module.rule('js').include.add('/packages').end()
  }
}
