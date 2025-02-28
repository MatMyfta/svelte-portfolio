// src/routes/sitemap.xml/+server.js
import { json } from '@sveltejs/kit';

export async function GET() {
  // Dynamically import all markdown posts
  const paths = import.meta.glob('/src/posts/*.md', { eager: true });

  let posts = [];

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split('/').at(-1)?.replace('.md', '');
    // @ts-ignore
    const metadata = file.metadata;
    const post = { ...metadata, slug };
    if (post.published) {
      posts.push(post);
    }
  }

  // Sort posts in descending order by date
  posts = posts.sort(
    (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
  );

  const staticPages = ['', 'chi-sono', 'blog']; // Add static pages here
  const urls = [...staticPages, ...posts.map(post => `blog/${post.slug}`)];

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          url => `
        <url>
          <loc>https://myftaraj.com/${url}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>
      `
        )
        .join('')}
    </urlset>
  `.trim();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
