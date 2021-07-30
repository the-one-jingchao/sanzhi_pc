const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
module.exports = {
    filenameHashing: false,
    publicPath: './',
    devServer: {
        port: 7789,
        // proxy: {
        //     '/api': {
        //         target: '',
                // ws: true,
                // changeOrigin: true,
                // secure: true,
        //     },
        // },
        disableHostCheck: true,
    },
    chainWebpack: (config) => {
        config.resolve.symlinks(true)

        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 2000, esModule: false }));


        config.resolve.alias
            .set('@', resolve('src'))
            .set('@views', resolve('src/views'))
            .set('@store', resolve('src/store'))
            .set('@models', resolve('src/models'))
            .set('@utils', resolve('src/utils'))
            .set('@config', resolve('src/config'))
            .set('@components', resolve('src/components'))
    },
}
