<script>
	export let post;
</script>

<article class="grid py-8 border-b-2 border-zinc-700">
	<div class="">
		<a href="/blog/{post.slug}" aria-label="Read more about {post.title}" class="">
			<h1 class="font-semibold text-xl md:text-2xl text-zinc-50 mb-4">{post.title}</h1>
		</a>

		{#if post.categories?.length}
			<ul class="flex flex-wrap align-center gap-2 mb-4">
				<li class="py-1 text-zinc-500">
					{post.date}
				</li>
				{#each post.categories as tag}
					<li
						class="line-clamp-1 py-1 px-3 rounded-full font-medium outline-offset-2 bg-red-500/20 text-red-500"
					>
						{tag}
					</li>
				{/each}
			</ul>
		{/if}

		<p class="text-zinc-400 mt-1 mb-4 line-clamp-3">
			{post.description || 'Nessuna descrizione disponibile.'}
		</p>

		<a href="/blog/{post.slug}" aria-label="Read more about {post.title}" class="text-mindaro-500">
			Continua a leggere
		</a>
	</div>
</article>
