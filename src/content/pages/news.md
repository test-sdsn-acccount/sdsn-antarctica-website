---
layout: news-landing
title: News
pagination:
  data: collections.newsArticles
  size: 3
  alias: sectionList
permalink: "/news/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}/{% endif %}"

---

