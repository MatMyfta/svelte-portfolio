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

  // Define static pages with fixed priority and change frequency
  const staticPages = [
    { url: '', priority: 1.0, changefreq: 'daily' },         // Homepage
    { url: 'chi-sono', priority: 0.9, changefreq: 'monthly' },
    { url: 'blog', priority: 0.8, changefreq: 'daily' },
  ];

  // Get today's date to check for recent posts
  const now = new Date();
  const ONE_WEEK = 7 * 24 * 60 * 60 * 1000;
  const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

  // Assign dynamic priority and change frequency to blog posts
  const postUrls = posts.map(post => {
    const postDate = new Date(post.date);
    let priority = 0.5; // Default priority for older posts
    let changefreq = 'monthly'; // Default change frequency

    if (post.featured) {
      priority = 0.8; // Higher priority for featured posts
    } else if (now - postDate < THIRTY_DAYS) {
      priority = 0.7; // Increase priority for recent posts
    }

    // Adjust change frequency based on post recency
    if (now - postDate < ONE_WEEK) {
      changefreq = 'daily';
    } else if (now - postDate < THIRTY_DAYS) {
      changefreq = 'weekly';
    }

    return {
      url: `blog/${post.slug}`,
      priority,
      changefreq
    };
  });

  // Merge static pages and dynamic blog post URLs
  const urls = [...staticPages, ...postUrls];

  // Generate XML sitemap
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          ({ url, priority, changefreq }) => `
        <url>
          <loc>https://www.myftaraj.com/${url}</loc>
          <changefreq>${changefreq}</changefreq>
          <priority>${priority}</priority>
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
