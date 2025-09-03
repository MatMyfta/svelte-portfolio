<script>
	export let post;
</script>

<article class="py-6 border-b border-stone-600">
	{#if post.categories?.length}
		<ul class="flex flex-wrap align-center gap-1 text-stone-500 font-light">
			<li class="py-1">
				{post.date}
			</li>
			{#each post.categories as tag}
				<li class="line-clamp-1 py-1 px-3 rounded-full outline-offset-2">
					#{tag}
				</li>
			{/each}
		</ul>
	{/if}

	<a href="/blog/{post.slug}" aria-label="Read more about {post.title}" class="">
		<h3 class="my-2 font-semibold text-xl text-stone-50">{post.title}</h3>
	</a>

	<p class="mt-2 line-clamp-2">
		{post.description || 'Nessuna descrizione disponibile.'}
	</p>
</article>
