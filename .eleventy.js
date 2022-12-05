const PostCSSPlugin = require('eleventy-plugin-postcss');
const CleanCSS = require('clean-css');

module.exports = (config) => {
  config.addPlugin(PostCSSPlugin);
  config.addFilter('cssmin', (code) => {
    return new CleanCSS({}).minify(code).styles;
  });
  // eleventyConfig.addPassthroughCopy('');

  return {
    // passthroughFileCopy: true,
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: '_site',
      include: '_includes',
    },
  };
};
