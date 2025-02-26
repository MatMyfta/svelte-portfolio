import { json } from '@sveltejs/kit';

async function getPosts() {
	let posts = [];

	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');
		// @ts-ignore
		const metadata = file.metadata;
		const post = { ...metadata, slug };
		post.published && posts.push(post);
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export async function GET({ request }) {
	try {
		const { searchParams } = new URL(request.url);
		const limit = Number(searchParams.get('limit')) || 0;
		const posts = await getPosts();

		return json(limit !== 0 ? posts.slice(0, limit) : posts);
	} catch (error) {
		console.error('API Error:', error);
		return json({ error: 'Failed to fetch posts' }, { status: 500 });
	}
}