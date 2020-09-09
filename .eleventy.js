var dateFilter = require('nunjucks-date-filter');
const searchFilter = require('./src/filters/searchFilter.js');
const fs = require('fs');
const pluginRss = require('@11ty/eleventy-plugin-rss');

module.exports = function(config) {

    // Layout aliases
    config.addLayoutAlias('base', 'layouts/base.njk');
    config.addLayoutAlias('page', 'layouts/page.njk');
    config.addLayoutAlias('page-white', 'layouts/page-white.njk');
    config.addLayoutAlias('banner', 'layouts/banner.njk');
    config.addLayoutAlias('section-banner', 'layouts/section-banner.njk');
    config.addLayoutAlias('intro-banner', 'layouts/intro-banner.njk');

    config.addLayoutAlias('contact-us', 'layouts/pages/contact-us.njk');
    config.addLayoutAlias('home', 'layouts/pages/home.njk');
    config.addLayoutAlias('about-sdsn', 'layouts/pages/about-sdsn.njk');
    config.addLayoutAlias('about-team', 'layouts/pages/about-team.njk');
    config.addLayoutAlias('what-we-do', 'layouts/pages/what-we-do.njk');
    config.addLayoutAlias('youth', 'layouts/pages/youth.njk');
    config.addLayoutAlias('local-sdgs', 'layouts/pages/local-sdgs.njk');
    config.addLayoutAlias('join', 'layouts/pages/join.njk');
    config.addLayoutAlias('resource-landing', 'layouts/pages/resource-landing.njk');
    config.addLayoutAlias('resource-page', 'layouts/pages/resource-page.njk');
    config.addLayoutAlias('news-landing', 'layouts/pages/news-landing.njk');
    config.addLayoutAlias('news-page', 'layouts/pages/news-page.njk');
    config.addLayoutAlias('events-landing', 'layouts/pages/events-landing.njk');
    config.addLayoutAlias('events-page', 'layouts/pages/events-page.njk');
    config.addLayoutAlias('search-page', 'layouts/pages/search-page.njk');


    // Passthrough copy
    config.addPassthroughCopy('src/_includes');
    config.addPassthroughCopy('src/admin/config.yml');
    config.addPassthroughCopy('src/assets/images');
    config.addPassthroughCopy('src/assets/uploads');
    config.addPassthroughCopy('src/content');
    config.addPassthroughCopy('src/filters');
    config.addPassthroughCopy('src/js');

    // Filters
    config.addFilter('search', searchFilter);

    config.addFilter('date', dateFilter);
    dateFilter.setDefaultFormat('MMMM Do');

    // Custom collections
    config.addCollection('tagList', require('./src/filters/getTagList.js'));

    config.addCollection('newsArticles', collection => {
        return [...collection.getFilteredByGlob('./src/content/news/*.md')]
        .reverse();
      });

    config.addCollection('resourceArticles', collection => {
      return [...collection.getFilteredByGlob('./src/content/resources/*.md')]
      .reverse();
    });

    config.addCollection('eventsArticles', collection => {
      return [...collection.getFilteredByGlob('./src/content/events/*.md')]
      .reverse();
    });

    // Plugins
    config.addPlugin(pluginRss);

    // 404 
    config.setBrowserSyncConfig({
      callbacks: {
        ready: function(err, browserSync) {
          const content_404 = fs.readFileSync('dist/404.html');

          browserSync.addMiddleware("*", (req, res) => {
            // Provides the 404 content without redirect.
            res.write(content_404);
            res.end();
          });
        }
      }
    });

    return {
		pathPrefix: "/",
		dir: {
			includes: "_includes",
			data: "_data",
			input: "src",
			output: "dist"
		},
		passthroughFileCopy: true,
    templateFormats: [ "md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
	};

};
