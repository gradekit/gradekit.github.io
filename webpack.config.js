module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/i,
          loader: 'css-loader',
          use:["style-loader", "css-loader"],
          options: {
            import: true,
          },
        },
      ],
    },
  };