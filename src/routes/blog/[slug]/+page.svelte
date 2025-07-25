<script>
	import Meta from '$lib/components/Meta.svelte';
	import { formatDate } from '$lib/utils.js';

	export let data;
</script>

<Meta
	title={data.meta.title}
	description={data.meta.description}
	url={data.meta.url}
	image={data.meta.image}
	imagealt={data.meta.imagealt}
	type="article"
	author="Mateo Myftaraj, mateo@myftaraj.com"
	language={data.meta.language}
/>

<svelte:head>
	<meta property="article:published_time" content={data.meta.date} />
	<meta property="article:author" content="Mateo Myftaraj" />

	<!-- PrismJS for Syntax Highlighting -->
	<link
		href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-tomorrow.min.css"
		rel="stylesheet"
	/>
</svelte:head>

<article class="">
	<section class="container max-w-2xl lg:max-w-3xl mx-auto px-4">
		<hgroup class="py-4 px-2">
			<h1 class="font-[600] text-center text-stone-50 text-4xl mb-4 mt-8">
				{data.meta.title}
			</h1>
			<div class="tag px-4 flex align-center justify-center flex-wrap gap-1 mb-8">
				{#each data.meta.categories as category}
					<div
						class="line-clamp-1 py-2 px-3 rounded-full font-medium outline-offset-2 bg-stone-700/50 text-stone-400 text-sm"
					>
						&num;{category}
					</div>
				{/each}
			</div>
			<ul class="flex justify-center gap-8 mb-6 p-0 text-stone-400 text-sm">
				<li class="list-none">
					{formatDate(data.meta.date)}
				</li>
				<li class="">{data.meta.readingTime.text}</li>
			</ul>
		</hgroup>
	</section>

	<div class="px-4">
		<div class="article-container mx-auto prose sm:px-3 md:px-6 py-4 rounded-xl">
			<svelte:component this={data.content} />
		</div>
	</div>
</article>

<style>
	@media (min-width: 52rem) {
		.article-container {
			display: grid;
			grid-template-columns:
				clamp(1rem, 2rem, 5vw)
				[fullbleed-start] minmax(auto, 2fr)
				[wide-start] minmax(auto, 2fr)
				[large-start] minmax(auto, 2rem)
				[main-start] min(100%, 65ch)
				[main-end] minmax(auto, 2rem)
				[large-end] minmax(auto, 2fr)
				[wide-end] minmax(auto, 2fr)
				[fullbeed-end] clamp(1rem, 2rem, 5vw);
		}
	}

	.article-container :global(*) {
		grid-column: main;
	}

	.article-container :global(p) {
		@apply mb-4;
	}

	/* Headings */
	.article-container :global(h1) {
		@apply text-4xl font-bold text-stone-100 mb-6 pb-2;
	}

	.article-container :global(h2) {
		@apply text-3xl font-semibold text-stone-200 mb-5 pb-1;
	}

	.article-container :global(h3) {
		@apply text-2xl font-semibold text-stone-300 mb-4;
	}

	.article-container :global(h4),
	.article-container :global(h5),
	.article-container :global(h6) {
		@apply text-xl font-medium mb-3;
	}

	/* Lists */
	.article-container :global(ul) {
		@apply list-disc list-inside mb-4;
	}

	.article-container :global(ol) {
		@apply list-decimal list-inside mb-4;
	}

	.article-container :global(ul li),
	.article-container :global(ol li) {
		@apply pl-4;
	}

	.article-container :global(strong) {
		@apply text-stone-300;
	}

	/* Blockquotes */
	.article-container :global(blockquote) {
		@apply border-l-4 border-stone-500 bg-stone-800/40 text-stone-300 italic p-4 mb-6;
	}

	/* Inline Code */
	.article-container :global(code) {
		@apply bg-stone-800 text-stone-300 px-1 py-0.5 rounded text-sm;
	}

	/* Code Blocks */
	.article-container :global(pre) {
		@apply bg-stone-900/50 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6;
		grid-column: large;
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
		@apply text-stone-100 underline underline-offset-4 transition hover:text-amber-400;
	}

	/* Horizontal Rule */
	.article-container :global(hr) {
		@apply border-stone-700 my-6;
	}

	/* Images */
	.article-container :global(img) {
		@apply mx-auto my-6 rounded-lg shadow-lg;
	}
</style>
