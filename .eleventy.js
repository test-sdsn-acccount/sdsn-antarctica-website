module.exports = function(config) {

    // Layout aliases
    config.addLayoutAlias('base', 'layouts/base.njk');
    config.addLayoutAlias('page', 'layouts/page.njk');
    config.addLayoutAlias('banner', 'layouts/banner.njk');
    config.addLayoutAlias('section-banner', 'layouts/section-banner.njk');
    config.addLayoutAlias('intro-banner', 'layouts/intro-banner.njk');
    config.addLayoutAlias('contact-us', 'layouts/contact-us.njk');

    config.addLayoutAlias('home', 'layouts/pages/home.njk');
    config.addLayoutAlias('about-sdsn', 'layouts/pages/about-sdsn.njk');
    config.addLayoutAlias('about-team', 'layouts/pages/about-team.njk');
    config.addLayoutAlias('what-we-do', 'layouts/pages/what-we-do.njk');
    config.addLayoutAlias('local-sdgs', 'layouts/pages/local-sdgs.njk');
    config.addLayoutAlias('get-involved', 'layouts/pages/get-involved.njk');
    config.addLayoutAlias('resources', 'layouts/pages/resources.njk');
    config.addLayoutAlias('resource-landing', 'layouts/pages/resource-landing.njk');
    config.addLayoutAlias('news-page', 'layouts/pages/news-page.njk');



    // Passthrough copy
    config.addPassthroughCopy('src/_includes');
    config.addPassthroughCopy('src/admin/config.yml');
    config.addPassthroughCopy('src/assets/images');
    config.addPassthroughCopy('src/assets/uploads');
    config.addPassthroughCopy('src/content');

    // Custom collections
    config.addCollection('newsArticles', collection => {
        return [...collection.getFilteredByGlob('./src/content/news/*.md')]
        .reverse();
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
