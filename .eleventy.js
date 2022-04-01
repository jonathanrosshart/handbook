const path = require("path");
const inspect = require("util").inspect;

const { EleventyRenderPlugin } = require("@11ty/eleventy");
const relativeUrl = require("eleventy-filter-relative-url");
const markdownIt = require("markdown-it");

module.exports = (config) => {
  const md = markdownIt({ html: true, typographer: true });
  config.setLibrary("md", md);

  config.addPlugin(EleventyRenderPlugin);

  config.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`);

  config.addFilter("push", (array, item) =>
    !!item ? [...array, item] : array
  );

  config.addPassthroughCopy({
    "node_modules/uswds/dist/fonts": "assets/fonts",
  });
  config.addPassthroughCopy({
    "node_modules/uswds/dist/img": "assets/uswds/img",
  });
  config.addPassthroughCopy({
    "node_modules/uswds/dist/js": "assets/uswds/js",
  });

  return {
    dir: {
      data: "../data",
      includes: "../includes",
      input: "pages",
      layouts: "../layouts",
    },
  };
};
