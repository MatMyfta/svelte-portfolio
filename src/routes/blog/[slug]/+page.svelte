<script>
	import { formatDate } from '$lib/utils.js';
	import Footer from '../../Footer.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
	<meta name="author" content="Mateo Myftaraj, mateo@myftaraj.com" />
	<meta name="language" content={data.meta.language} />
	<meta name="robots" content="index,follow" />

	<meta name="og:email" content="mateo@myftaraj.com" />
	<meta name="og:title" content={data.meta.title} />
	<meta name="og:type" content="article" />
	<meta name="og:image" content={data.meta.image} />
	<meta name="og:site_name" content="Mateo Myftaraj" />
	<meta name="og:description" content={data.meta.description} />

	<meta name="twitter:title" content={data.meta.title} />
	<meta name="twitter:description" content={data.meta.description} />
	<meta name="twitter:image" content={data.meta.image} />
	<meta name="twitter:image:alt" content={data.meta.imagealt} />

	<link
		href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-tomorrow.min.css"
		rel="stylesheet"
	/>
</svelte:head>

<article class="">
	<section class="bg-mainAccent pb-10">
		<div class="container mx-auto px-4">
			<hgroup class="py-4 px-2">
				<h1 class="font-[600] text-center text-zinc-100 text-xl lg:text-5xl md:text-3xl mb-4 mt-8">
					{data.meta.title}
				</h1>
				<div
					class="tags container mx-auto px-4 flex align-center justify-center flex-wrap gap-1 mb-8"
				>
					{#each data.meta.categories as category}
						<div class="line-clamp-1 py-2 px-3 rounded-full font-medium outline-offset-2 bg-zinc-700/50 text-zinc-400 text-sm">
							&num;{category}
						</div>
					{/each}
				</div>
				<ul class="flex justify-center gap-8 mb-6 p-0 text-zinc-400 text-sm">
					<li class="list-none">
						{formatDate(data.meta.date)}
					</li>
					<li class="">{data.meta.readingTime.text}</li>
				</ul>
			</hgroup>
		</div>
	</section>

	<div class="px-4">
		<div
			class="container article-container mx-auto prose sm:px-3 md:px-6 py-4 rounded-xl text-zinc-200 text-base"
		>
			<svelte:component this={data.content} />
		</div>
	</div>
</article>

<Footer />

<style>
	@media (min-width: 52rem) {
		.article-container {
			display: grid;
			grid-template-columns:
				clamp(1rem, 2rem, 5vw)
				[fullbleed-start] minmax(auto, 1fr)
				[wide-start] minmax(auto, 1fr)
				[main-start] min(100%, 65ch)
				[main-end] minmax(auto, 1fr)
				[wide-end] minmax(auto, 1fr)
				[fullbeed-end] clamp(1rem, 2rem, 5vw);
		}
	}

	.article-container :global(*) {
		grid-column: main;
	}
	
	.article-container :global(p) {
		@apply text-zinc-300 mb-8;
	}

	/* Headings */
	.article-container :global(h1) {
		@apply text-4xl font-bold text-zinc-100 mb-6 pb-2;
	}

	.article-container :global(h2) {
		@apply text-3xl font-semibold text-zinc-200 mb-5 pb-1;
	}

	.article-container :global(h3) {
		@apply text-2xl font-semibold text-zinc-300 mb-4;
	}

	.article-container :global(h4),
	.article-container :global(h5),
	.article-container :global(h6) {
		@apply text-xl font-medium text-zinc-400 mb-3;
	}

	/* Lists */
	.article-container :global(ul) {
		@apply list-disc list-inside mb-4 text-zinc-300;
	}

	.article-container :global(ol) {
		@apply list-decimal list-inside mb-4 text-zinc-300;
	}

	.article-container :global(ul li),
	.article-container :global(ol li) {
		@apply pl-4;
	}

	/* Blockquotes */
	.article-container :global(blockquote) {
		@apply border-l-4 border-zinc-500 bg-zinc-800/40 text-zinc-300 italic p-4 mb-6;
	}

	/* Inline Code */
	.article-container :global(code) {
		@apply bg-zinc-800 text-zinc-300 px-1 py-0.5 rounded text-sm;
	}

	/* Code Blocks */
	.article-container :global(pre) {
		@apply bg-zinc-900 text-zinc-200 p-4 rounded-lg overflow-x-auto mb-6;
	}
	.article-container :global(pre > code) {
		@apply bg-transparent p-0;
	}

	/* Math */
	.article-container :global(.math) {
		@apply p-2 rounded-lg overflow-x-auto mb-6;
	}

	/* Links */
	.article-container :global(a) {
		@apply text-blue-400 hover:underline;
	}

	/* Horizontal Rule */
	.article-container :global(hr) {
		@apply border-zinc-700 my-6;
	}

	/* Images */
	.article-container :global(img) {
		@apply mx-auto my-6 rounded-lg shadow-lg;
	}
</style>
