<script>
	import { formatDate } from '$lib/utils.js';
	import Footer from '../../Footer.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
	<meta name="author" content="Mateo Myftaraj, mateo@myftaraj.com" />
	<meta name="language" content={data.meta.language}>
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
</svelte:head>

<article class="bg-[#fff] mb-20">
	<section class="bg-mainAccent pb-40">
		<div class="container mx-auto px-4">
			<hgroup class="py-4 px-2">
				<h1 class="font-[600] text-center text-xl lg:text-5xl md:text-3xl mb-4 mt-8">{data.meta.title}</h1>
				<p class="text-xl font-[300] text-center mb-8">{data.meta.description}</p>
				<div class="tags container mx-auto px-4 flex align-center justify-center flex-wrap gap-1 mb-8">
					{#each data.meta.categories as category}
						<div class="bg-[#fff] text-sm px-3 py-1 rounded-full">&num;{category}</div>
					{/each}
				</div>
				<ul class="flex justify-center gap-8 mb-6 p-0">
					<li class="list-none font-semibold text-base">Pubblicato il {formatDate(data.meta.date)}</li>
					<li class="font-semibold text-base">{data.meta.readingTime.text}</li>
				</ul>
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
