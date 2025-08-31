const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
module.exports={
// entry:'./src/index.js',
    devServer:{
        port:8082,
    },
        mode:"development",
     plugins:[
    
        new ModuleFederationPlugin({
            name:"carts",
            filename:"remoteEntry.js",
            exposes:{
                './CartIndex':'./src/index.js'
            },
        }),
            new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
    ]
}