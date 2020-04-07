const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry:  {
        bundle: './src/index.js',
    }, // 入口文件
    output: {
        path: path.resolve(__dirname, 'build'), // 必须使用绝对地址，输出文件夹
        filename: "[name].js", // 打包后输出文件的文件名
        publicPath: '../build/', // 知道如何寻找资源
        // library: '[name]_[chunkhash]',
    },
    externals: {
        'react' : 'React',
        'react-dom': 'ReactDOM'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        }
                    ]
                }),
            },
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', // 开发环境
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 modules: true
            //             }
            //         }
            //     ],
            // },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        // 配置 url-loader 的可选项
                        options: {
                            // 限制 图片大小 10000B，小于限制会将图片转换为 base64格式
                            limit: 1000000,
                            // 超出限制，创建的文件格式
                            // build/images/[图片名].[hash].[图片格式]
                            name: 'images/[name].[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].[hash].css"),
    ]
}