---
layout: events-landing
title: Events
pagination:
  data: collections.eventsArticles
  size: 6
  alias: sectionList
permalink: "/events/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}/{% endif %}"
---