module.exports = {
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    baseUrl: '/',
    devServer: {
        proxy:'http://localhost:3000'
        // proxy: {
        //     '/registers': {
        //         target: 'http://localhost:3000',
        //         changeOrigin: true,
        //         ws: true,
        //         pathRewrite: {
        //           '^/registers': ''
        //         }
        //     }
        // }
    }
}
//