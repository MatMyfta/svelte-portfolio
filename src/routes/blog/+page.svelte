<script>
	import { formatDate } from '$lib/utils.js';

	export let data;
</script>

<div class="container mx-auto px-4">
	{#each data.sortedYears as year}
		<h1 class="font-[700] text-3xl lg:text-4xl mt-8">{year}</h1>
		<ul class="mt-4">
			{#each data.postsByYear[year] as post}
				<li class="my-2">
					<span class="bg-[#f4f4f4] px-2 py-1 me-1 text-xs">{formatDate(post.date)}</span> 
					<a href="/blog/{post.slug}" class="font-[700] underline">{post.title}</a>
				</li>
			{/each}
		</ul>
	{/each}
</div>
