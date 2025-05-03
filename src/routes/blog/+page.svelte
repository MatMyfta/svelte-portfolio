<script>
	import { formatDate } from '$lib/utils.js';
	import Meta from '$lib/components/Meta.svelte';
	import MyfContainer from '$lib/components/MyfContainer.svelte';

	export let data;
</script>

<Meta title="Blog" />
<MyfContainer>
	{#each data.sortedYears as year}
		<h1 class="font-[700] text-zinc-100 text-3xl lg:text-4xl mt-8">{year}</h1>
		<ul class="mt-4">
			{#each data.postsByYear[year] as post}
				<li class="my-4 flex items-center">
					<span class="text-zinc-400 me-4">{formatDate(post.date)}</span>
					<a
						href="/blog/{post.slug}"
						class="font-[500] text-mindaro-500 hover:underline underline-offset-4">{post.title}</a
					>
				</li>
			{/each}
		</ul>
	{/each}
</MyfContainer>
