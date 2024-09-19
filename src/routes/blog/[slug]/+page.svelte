<script>
	import { formatDate } from '$lib/utils.js';
	import Footer from '../../Footer.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="twitter:type" content="article" />
	<meta property="twitter:title" content={data.meta.title} />
	<meta property="twitter:description" content={data.meta.description} />
	<meta property="twitter:image" content={data.meta.image} />
	<meta property="twitter:image:alt" content={data.meta.imagealt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:image" content={data.meta.image} />
	<meta property="og:image:alt" content={data.meta.imagealt} />
</svelte:head>

<article class="bg-[#fff] mb-20">
	<section class="bg-mainAccent pb-40">
		<div class="container mx-auto px-4">
			<hgroup class="py-4 px-2">
				<h1 class="font-[600] text-center text-xl lg:text-5xl md:text-3xl mb-4 mt-8">{data.meta.title}</h1>
				<p class="text-xl font-[300] text-center mb-8">{data.meta.description}</p>
				<div class="tags container mx-auto px-4 flex align-center justify-center flex-wrap gap-1 mb-8">
					{#each data.meta.categories as category}
						<div class="bg-[#fff] text-base px-3 py-1 rounded-full">&num;{category}</div>
					{/each}
				</div>
				<div class="flex justify-center mb-6">
					<span class="font-semibold text-base">Pubblicato il {formatDate(data.meta.date)}</span>
				</div>
			</hgroup>
		</div>
	</section>

	<div class="image-container -mt-40 rounded-xl max-w-screen-lg mx-auto aspect-video bg-[#ddd] overflow-hidden">
		<img class="w-full h-full object-cover" src="{data.meta.image}" alt="{data.meta.imagealt}" />
	</div>

	<div class="px-4">
		<div class="container mx-auto prose sm:px-3 md:px-6 py-4 bg-[#fff] rounded-xl">
			<svelte:component this={data.content} />
		</div>
	</div>
</article>

<Footer />

<style>
</style>
