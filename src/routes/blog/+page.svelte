<script>
	import { formatDate } from '$lib/utils.js';
	import Meta from '$lib/components/Meta.svelte';

	export let data;
</script>

<Meta title="Blog" />

<div class="container max-w-2xl lg:max-w-3xl mx-auto px-4">
	{#each data.sortedYears as year}
		<h1 class="font-[700] text-stone-50 text-3xl lg:text-4xl mt-12">{year}</h1>
		<ul class="mt-4">
			{#each data.postsByYear[year] as post}
				<li class="my-4 flex items-center">
					<span class="me-4">{formatDate(post.date)}</span>
					<a
						href="/blog/{post.slug}"
						class="font-[500] text-stone-50 hover:underline underline-offset-4">{post.title}</a
					>
				</li>
			{/each}
		</ul>
	{/each}
</div>
