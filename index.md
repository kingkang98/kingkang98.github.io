---
layout: default
---

<div class="home">
  <h1>Latest Posts</h1>

  <ul class="post-list">
    {% for post in site.posts %}
      <li class="post-card">
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        <h2>
          <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h2>
        {% if post.excerpt %}
          <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
</div>
