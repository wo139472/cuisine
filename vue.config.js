module.exports = {
    devServer:{
        proxy:{
            "/api": { // 当项目向/api开头的路径发送请求都会通过服务器代理访问target网站
                target: "https://api.jisuapi.com", // 代理跳转的目标网站
                changeOrigin: true, // 代理跳转至指定的host
                // 当你要 http://capi.douyucdn.cn/api/v1/live?limit=20&offset=0
                // 只需要访问 /showapi_cpQuery
                pathRewrite: { // 路径重写
                    '^/api': '', // rewrite path
                    // 路径重写之后 /api 被替换成了空字符 请求 "/dmzj/recommend.json" => http://v2.api.dmzj.com/recommend.json
                }
            },
        }
    }
}