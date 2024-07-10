<script>
	import { formatDate } from '$lib/utils.js';
	import Footer from '../../Footer.svelte';

    export let data;
</script>


<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article">
    <meta property="og:title" content={data.meta.title}>
</svelte:head>


<article class="bg-[#fff] mb-20">
    <section class="bg-mainAccent pb-40">
        <div class="container mx-auto px-4">
            <hgroup class="py-4 px-2">
                <p class="font-semibold">Pubblicato il {formatDate(data.meta.date)}</p>
                <h1 class="text-4xl font-black">{data.meta.title}</h1>
                <p class="text-lg">{data.meta.description}</p>
                <div class="tags flex gap-1 mt-8">
                    {#each data.meta.categories as category}
                        <div class="bg-[#fff] px-2 py-0 rounded-full">&num;{category}</div>
                    {/each}
                </div>
            </hgroup>
        </div>
    </section>

    <div class="px-4">
        <div class="brutal-container border-2 container mx-auto -mt-40 prose px-6 py-4 text-lg bg-[#fff] rounded-xl">
            <svelte:component this={data.content}/>
        </div>
    </div>
</article>

<Footer/>

<style>
</style>