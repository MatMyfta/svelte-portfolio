<script>
// @ts-nocheck

	import WorkInProgress from './WorkInProgress.svelte';

	export let posts;
</script>

<!-- <WorkInProgress /> -->
<div class="grid grid-cols-1 xl:grid-cols-2 grid-rows-3 gap-4">
	{#each posts.posts as post, index}
		{#if index == 0}
			<div class="card bg-[#fff] row-span-3 h-full grid xl:grid-rows-3">
				<div
					class="bg-[#e4e4e4] w-full aspect-[16/9] xl:aspect-auto row-span-2 rounded-[6px]"
				></div>
				<div class="h-full w-full flex flex-col row-span-1 justify-between">
					<div class="min-h-40">
						<h1 class="text-xl md:text-2xl font-[600] mt-2">{post.title}</h1>
						<p class="mb-4">{post.description}</p>
					</div>
					<div class="mb-2">
						<a href="/blog/{post.slug}" class="btn bg-magentaAccent inline-block">Read more</a>
					</div>
				</div>
			</div>
		{:else}
			<div class="card bg-[#fff] flex">
				<div class="bg-[#e4e4e4] w-full aspect-[16/9] rounded-[6px]"></div>
				<div class="h-full w-full mx-2 flex flex-col">
					<div class="h-full">
						<h1 class="text-xl md:text-2xl font-[600] mt-2">{post.title}</h1>
						<p class="mb-4">{post.description}</p>
					</div>
					<div class="w-full flex justify-end mb-2">
						<a href="/blog/{post.slug}" class="btn bg-magentaAccent inline-block">Read more</a>
					</div>
				</div>
			</div>
		{/if}
	{/each}
</div>
<div class="mt-8 flex justify-center">
	<a href="/blog" class="btn btn-lg bg-magentaAccent">Vai al blog</a>
</div>
