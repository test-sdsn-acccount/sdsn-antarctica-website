const elasticlunr = require("elasticlunr");

module.exports = function(collection) {
  var index = elasticlunr(function() {
    this.addField("title");
    this.addField("author");
    this.setRef("id");
  });

  collection.forEach(page => {
    index.addDoc({
      id: page.url,
      title: page.template.frontMatter.data.title,
      author: page.template.frontMatter.data.author
    });
  });

  return index.toJSON();
};
