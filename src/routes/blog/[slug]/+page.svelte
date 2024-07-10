<script>
	import { formatDate } from '$lib/utils.js';

    export let data;
</script>


<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article">
    <meta property="og:title" content={data.meta.title}>
</svelte:head>

<article class="container mx-auto bg-[#fff] border-4 mt-4">
    <hgroup class="py-4 px-2 border-b-4">
        <p class="font-semibold">Pubblicato il {formatDate(data.meta.date)}</p>
        <h1 class="text-4xl font-black">{data.meta.title}</h1>
        <p class="text-lg">{data.meta.description}</p>
        <div class="tags flex gap-1 mt-8">
            {#each data.meta.categories as category}
                <div class="bg-[#fff] px-2 py-0 border-2 border-[#aaa] rounded-full">&num;{category}</div>
            {/each}
        </div>
    </hgroup>

    <div class="prose px-2 py-4 text-lg">
        <svelte:component this={data.content}/>
    </div>
</article>

<style>
    article .prose h2 {
        font-size: 4em !important;
    }
</style>