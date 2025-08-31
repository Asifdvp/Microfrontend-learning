const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
module.exports={
// entry:'./src/index.js',
    devServer:{
        port:8081,
    },
    mode:"development",
     plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
           new ModuleFederationPlugin({
            name:"products",
            filename:"remoteEntry.js",
            exposes:{
                './ProductsIndex':'./src/index.js'
            },
        })
    ]
}