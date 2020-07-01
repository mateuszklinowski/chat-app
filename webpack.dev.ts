import webpack from 'webpack'
import HtmlWebPackPlugin from 'html-webpack-plugin'

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
})

const config: webpack.Configuration = {
    mode: 'development',
    entry: './src/index.tsx',
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            {
                test: /\.scss$/i,
                exclude: /\.module\.scss$/,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.module\.scss$/,
                use: [
                    'style-loader',
                    'css-modules-typescript-loader',
                    { loader: 'css-loader', options: { modules: true } },
                    'sass-loader',
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [htmlPlugin],
    devServer: {
        historyApiFallback: true,
    },
}

export default config
