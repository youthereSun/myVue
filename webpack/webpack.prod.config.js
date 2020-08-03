var webpack = require('webpack')
var path = require('path')
var {merge} = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.config')
var outputDir = path.resolve(__dirname, '../dist')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const TerserPlugin=require('terser-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
    output: {
        filename: 'static/js/project.[hash:10].min.js',
        path: outputDir,
        chunkFilename: 'static/chunks/[name].chunk.js'
    },
    devtool: false,
    mode:'production',
    /*打包index.html文件，并注入js代码*/
    plugins: [
        // https://github.com/ampedandwired/html-webpack-plugin
        // 这是一个webpack的插件来创建html文件渲染你的webpack生成的bundle
        new HtmlWebpackPlugin({
            // 写入bundle的那个index.html
            filename: 'index.html',
            template: 'index.html',
            favicon:"./favicon.ico",
            inject: true,
            minify:{// 压缩HTML代码
                collapseWhitespace:true, // 合并空白字符
                removeComments:true, // 移除注释
                removeAttributeQuotes:true // 移除属性上的引号
            }
        }),
        // 引入打包时清除 dist 目录的插件,引入时需要用对象{ CleanWebpackPlugin }包裹起来
        new CleanWebpackPlugin(),
    ],
    optimization:{//压缩打包
        minimize: true,
        minimizer:[new TerserPlugin({
            parallel: 4, // 并行打包
            terserOptions: {
                ecma: undefined,
                warnings: false,
                parse: {},
                compress: {
                    drop_debugger: false,  // 除了这两句是我加的，基他都是默认配置
                    drop_console: true
                },
                mangle: true, // Note `mangle.properties` is `false` by default.
                module: false,
                output: null,
                toplevel: false,
                nameCache: null,
                ie8: false,
                keep_classnames: undefined,
                keep_fnames: false,
                safari10: false,
            }
        })
        ]
    }

})
