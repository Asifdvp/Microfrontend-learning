const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
module.exports={
    devServer:{
        port:8080,
    },
    mode:"development",
     plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new ModuleFederationPlugin({
            name:"container",
            remotes:{
                products:"products@http://localhost:8081/remoteEntry.js",
                carts:"carts@http://localhost:8082/remoteEntry.js"
            },
     
        })
    ]
}