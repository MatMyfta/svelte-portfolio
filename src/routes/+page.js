import experiences from "$lib/data/experiences.json";

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export async function load({ fetch }) {
    try {
        const postsResponse = await fetch('/api/posts?limit=10');
        if (!postsResponse.ok) throw new Error('Failed to fetch posts');
        const posts = await postsResponse.json();

		const education = experiences.education || [];
        const work = experiences.work_experience || [];

        return { posts, education, work };
    } catch (error) {
        console.error('Error loading data:', error);
        return { posts: [], education: [], work: [] };
    }
}
