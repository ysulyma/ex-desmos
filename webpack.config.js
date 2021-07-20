const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const env = process.env.NODE_ENV || "development";

module.exports = {
  entry: `./src/index.tsx`,
  output: {
    filename: "bundle.js",
    path: __dirname
  },

  externals: {
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
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
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
      "@env": path.join(__dirname, "src", env),
      "@lib": path.join(__dirname, "lib")
    }
  }
};
