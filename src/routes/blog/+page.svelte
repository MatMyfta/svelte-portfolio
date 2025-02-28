<script>
	import { formatDate } from '$lib/utils.js';
    import Meta from '$lib/components/Meta.svelte';

	export let data;
</script>

<Meta
    title="Blog"
/>
<div class="container max-w-2xl lg:max-w-4xl mx-auto px-4">
	{#each data.sortedYears as year}
		<h1 class="font-[700] text-zinc-100 text-3xl lg:text-4xl mt-8">{year}</h1>
		<ul class="mt-4">
			{#each data.postsByYear[year] as post}
				<li class="my-2 flex items-center">
					<span class="rounded-full text-zinc-100 me-2 px-3 py-2 bg-zinc-700/50 text-xs"
						>{formatDate(post.date)}</span
					>
					<a
						href="/blog/{post.slug}"
						class="font-[500] text-amber-500 hover:underline underline-offset-4">{post.title}</a
					>
				</li>
			{/each}
		</ul>
	{/each}
</div>
