const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const env = process.env.NODE_ENV || "development";

module.exports = {
  entry: `./src/index.tsx`,
  output: {
    filename: "bundle.js",
    path: process.cwd()
  },

  externals: {
    "desmos": "Desmos",
    "liqvid": "Liqvid",
    "ractive-player": "RactivePlayer",
    "react": "React",
    "react-dom": "ReactDOM",
  },

  mode: env,

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: "ts-loader"
      }
    ],
  },

  // necessary due to bug in old versions of mobile Safari
  devtool: false,

  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          safari10: true
        }
      })
    ],
    emitOnErrors: true
  },
  
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      "@env": path.join(process.cwd(), "src", env)
    }
  }
};
