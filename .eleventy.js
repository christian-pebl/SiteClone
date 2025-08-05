const pluginSitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function(eleventyConfig) {
  // Copy assets folder to output
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Add blog collection
  eleventyConfig.addCollection("blog", collection =>
    collection.getFilteredByGlob("src/posts/*.md").reverse()
  );
  
  // Add sitemap plugin
  eleventyConfig.addPlugin(pluginSitemap, {
    sitemap: {
      hostname: "https://pebl-cic.co.uk"
    }
  });
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};