module.exports = function(config) {

    // Layout aliases
    config.addLayoutAlias('base', 'layouts/base.njk');
    config.addLayoutAlias('page', 'layouts/page.njk');
    config.addLayoutAlias('homepage', 'layouts/homepage.njk');
    config.addLayoutAlias('home', 'layouts/home.njk');
    config.addLayoutAlias('banner', 'layouts/banner.njk');
    config.addLayoutAlias('section-banner', 'layouts/section-banner.njk');
    config.addLayoutAlias('contact-us', 'layouts/contact-us.njk');

    // Passthrough copy
    config.addPassthroughCopy('src/_includes');
    config.addPassthroughCopy('src/admin/config.yml');
    config.addPassthroughCopy('src/assets/images');
    config.addPassthroughCopy('src/assets/uploads');
    config.addPassthroughCopy('src/content');

    // Custom collections
    config.addCollection('homepageSections', collection => {
        return [...collection.getFilteredByGlob('./src/content/homepage/*.md')]
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
