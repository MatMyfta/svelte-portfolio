import { json } from '@sveltejs/kit';

export const load = async ({ fetch }) => {
	let posts = [];

	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

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

	// Group posts by year
	const postsByYear = posts.reduce((acc, post) => {
		const year = new Date(post.date).getFullYear();
		if (!acc[year]) acc[year] = [];
		acc[year].push(post);
		return acc;
	}, {});

	// Sort the years in descending order
	// @ts-ignore
	const sortedYears = Object.keys(postsByYear).sort((a, b) => b - a);

	return { postsByYear, sortedYears };
}
