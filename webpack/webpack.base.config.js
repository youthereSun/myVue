const path = require("path")
const { VueLoaderPlugin } = require('vue-loader')

const ifProd = process.env.NODE_ENV === 'production' ? true : false

const config = {
    dev: {
        mode: 'development',
        assetsPublcPath: '/',
        assetsSubDirectory: './'
    },
    prod: {
        mode: 'production',
        index: path.resolve(__dirname, "../dist/index.html"),
        assetsPublcPath: path.resolve(__dirname, "../dist"),
        assetsSubDirectory: './'
    }
}
//path.join只是简单的将路径片段进行拼接，并规范化生成一个路径，而path.resolve则一定会生成一个绝对路径，相当于执行cd操作。
module.exports = {
    mode: ifProd ? 'production' : 'development',
    context: path.resolve(__dirname, '../'),    //基础目录，绝对路径，用于从配置中解析入口起点(entry point)和 loader,默认使用当前目录，但是推荐在配置中传递一个值。这使得你的配置独立于 CWD(current working directory - 当前执行路径)。
    entry: {
        app: './src/main.js'
    },
    output: {
        filename: '[name].bulde.[hash:10].js',
        path: ifProd ? config.prod.assetsPublcPath : config.dev.assetsPublcPath
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@':path.join(__dirname,'../src')
        }
    },
    devServer: {
        quiet: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['babel-preset-env'],
                    plugins:['syntax-dynamic-import']// 允许使用 component: () => import( '@/views/login/login') 此方式引入路由
                }
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    // loader: 'file-loader',
                    options: {
                        esModule: false, // 这里设置为false
                        name: 'static/images/[name].[ext]',//将图片打包到images目录，{ test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=43959&name=images/img-[hash:7].[ext]' }
                        limit: 10240
                    }
                }]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
    },
            {test:/\.(ttf|eot|svg|woff|woff2|otf)$/,
                use:[{
                    loader: 'url-loader',
                    // loader: 'file-loader',
                    options: {
                        esModule: false, // 这里设置为false
                        name: 'fonts/[name].[ext]',//将字体打包到fonts目录
                    }
                }]}//字体解析器

        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
