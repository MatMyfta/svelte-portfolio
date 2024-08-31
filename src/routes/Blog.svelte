<script>
	import WorkInProgress from './WorkInProgress.svelte';

	export let posts;
</script>

<section class="bg-[#fff] border-b-4 w-100 py-12">
	<div class="container mx-auto px-4">
		<h1 class="font-[600] text-3xl lg:text-4xl text-left mb-8">Blog</h1>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
			{#each posts.posts as post, index}
				<a href="/blog/{post.slug}">
					<div class="card bg-[#fff] h-full grid">
						<div class="bg-[#e4e4e4] w-full aspect-video rounded-[6px]"></div>
						<div class="h-full pt-2 pb-4">
							<h1 class="text-xl md:text-2xl font-[600] mt-2">{post.title}</h1>
						</div>
					</div>
				</a>
			{/each}
		</div>
		<div class="mt-8 flex justify-center">
			<a href="/blog" class="btn bg-mainAccent">Vai al blog</a>
		</div>
	</div>
</section>
