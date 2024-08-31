<script>
	import { formatDate } from '$lib/utils.js';
	import Footer from '../../Footer.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="bg-[#fff] mb-20">
	<section class="bg-mainAccent pb-40">
		<div class="container mx-auto px-4">
			<hgroup class="py-4 px-2">
				<p class="font-semibold text-base">Pubblicato il {formatDate(data.meta.date)}</p>
				<h1 class="font-[600] text-center text-3xl lg:text-4xl mb-8">{data.meta.title}</h1>
				<p class="text-lg text-center">{data.meta.description}</p>
			</hgroup>
		</div>
	</section>

	<div
		class="image-container -mt-40 rounded-xl max-w-screen-lg mx-auto aspect-video bg-[#ddd]"
	></div>

	<div class="px-4">
		<div class="container mx-auto prose px-6 py-4 text-lg bg-[#fff] rounded-xl">
			<svelte:component this={data.content} />
		</div>
	</div>

	<div class="tags container mx-auto px-4 flex gap-1 mt-8">
		{#each data.meta.categories as category}
			<div class="bg-mainAccent text-base px-2 py-0 rounded-full">&num;{category}</div>
		{/each}
	</div>
</article>

<Footer />

<style>
</style>
