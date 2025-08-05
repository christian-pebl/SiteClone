---
layout: layouts/base
title: "Blog"
description: "All PEBL CIC posts"
permalink: "/blog/"
---

# Blog

<ul>
{% for post in collections.blog %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
    <small>— {{ post.date | date: "%Y-%m-%d" }}</small>
  </li>
{% endfor %}
</ul>