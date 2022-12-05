module.exports = (ctx) => {
  const isProduction = ctx.env === "production";
  return {
    map: isProduction ? false : {},
    plugins: {
      "postcss-import": {},
      "postcss-preset-env": {
        stage: 1,
      },
      autoprefixer: {},
      cssnano: isProduction ? {} : false,
    },
  };
};
