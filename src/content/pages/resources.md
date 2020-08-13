---
layout: resource-landing
title: Resources
pagination:
  data: collections.resourceArticles
  size: 6
  alias: sectionList
permalink: "/resources/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}/{% endif %}"
---