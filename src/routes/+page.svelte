<script>
	import Meta from '$lib/components/Meta.svelte';

	export let data;

	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import DetailedList from '$lib/components/DetailedList.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<Meta />

<div class="container max-w-2xl lg:max-w-3xl mx-auto px-4">
	<section class="my-12">
		<h1 class="font-[700] text-2xl lg:text-4xl mb-6">
			Ciao, sono <span class="text-stone-50">Mateo</span>.
		</h1>
		<p class="mb-6">
			Ingegnere Software appassionato di Sviluppo Web e Mobile.<br />Sono un Developer Full-Stack e
			studente in Software Engineering alla Libera Università di Bolzano.
		</p>
		<Button href="/chi-sono" size="lg">Scopri di più</Button>
	</section>

	<section class="my-12">
		{#each data.posts as post}
			<ArticleCard {post} />
		{/each}
		<div class="my-8 flex w-full justify-center">
			<Button href="/blog" size="lg">Vai al blog</Button>
		</div>
	</section>

	<section class="my-12">
		<div
			class="lg:col-span-2 flex items-start gap-4 [&>*]:basis-1/2 [&>*]:grow-1 [&>*]:flex-shrink-1"
		>
			<DetailedList list={data.work} title="Esperienza" />
			<DetailedList list={data.education} title="Istruzione" />
		</div>
	</section>
</div>
