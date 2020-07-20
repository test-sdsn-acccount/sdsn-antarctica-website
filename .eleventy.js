module.exports = function(config) {

    // Layout aliases
    config.addLayoutAlias('base', 'layouts/base.njk');

    // Passthrough copy
    config.addPassthroughCopy('src/_includes');
    config.addPassthroughCopy('src/admin/config.yml');
    config.addPassthroughCopy('src/assets/images');
    config.addPassthroughCopy('src/assets/uploads');
    config.addPassthroughCopy('src/content');

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
