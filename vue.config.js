const path = require('path')
const join = path.join
const fs = require('fs')

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

function getEntries(path) {
  let files = fs.readdirSync(resolve(path))
  const entries = files.reduce((ret, item) => {
    if (item == 'utils') return ret
    const itemPath = join(path, item)
    const isDir = fs.statSync(itemPath).isDirectory()
    if (isDir) {
      ret[item] = resolve(join(itemPath, 'index.ts'))
    } else {
      const [name] = item.split('.')
      ret[name] = resolve(`${itemPath}`)
    }
    return ret
  }, {})
  return entries
}

const devConfig = {
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
        package: resolve('package')
      }
    }
  },
  chainWebpack: (config) => {
    config.module.rule('js').include.add('/package').end()
  }
}

const buildConfig = {
  outputDir: 'lib',
  productionSourceMap: false,
  configureWebpack: {
    entry: {
      ...getEntries('package')
    },
    output: {
      filename: 'e-[name]/index.js',
      libraryTarget: 'commonjs2'
    },
    resolve: {
      alias: {
        package: resolve('package')
      }
    },
    externals: [
      {
        vue: {
          root: 'Vue',
          commonjs: 'vue',
          commonjs2: 'vue'
        }
      }
    ]
  },
  css: {
    sourceMap: true,
    extract: {
      filename: 'style/e-[name].css' //在lib文件夹中建立style文件夹中，生成对应的css文件。
    }
  },
  chainWebpack: (config) => {
    config.module
      .rule('js')
      .include.add('/package')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap((options) => {
        return options
      })

    config.optimization.delete('splitChunks')
    config.plugins.delete('copy')
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.plugins.delete('hmr')
    config.entryPoints.delete('app')

    config.module
      .rule('fonts')
      .use('url-loader')
      .tap((option) => {
        option.fallback.options.name = 'static/fonts/[name].[ext]'
        return option
      })
  }
}

module.exports =
  process.env.NODE_ENV === 'development' ? devConfig : buildConfig
