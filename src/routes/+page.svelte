<script>
	import Meta from '$lib/components/Meta.svelte';

	export let data;

	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import DetailedList from '$lib/components/DetailedList.svelte';
	import MyfContainer from '$lib/components/MyfContainer.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<Meta />

<section class="mt-24 mb-12 md:mt-12 md:mb-20 gap-4">
	<MyfContainer>
		<div class="grid md:grid-cols-10 [&>div]:row-[1] items-center group">
			<div class="max-w-2xl my-0 lg:my-0 md:col-start-1 md:col-span-7 z-[1]">
				<h1 class="font-[700] text-2xl lg:text-4xl text-zinc-400 mb-6">
					Ciao, sono <span class="text-zinc-50">Mateo</span>. Ingegnere Software appassionato di
					<span class="text-zinc-50"
						>Sviluppo
						<mark class="text-zinc-50 bg-red-600 rounded-sm inline-block -rotate-2">Web</mark>
						e
						<mark class="text-zinc-50 bg-red-600 rounded-sm inline-block -rotate-2">Mobile</mark
						></span
					>
				</h1>
				<p class="mb-6 text-zinc-400">
					Sono un Developer Full-Stack e studente in Software Engineering alla Libera Università di
					Bolzano.
				</p>
				<div class="flex flex-wrap justify-between items-center gap-4">
					<div>
						<Button href="/chi-sono" size="lg">Scopri di più</Button>
					</div>
				</div>
			</div>
		</div>
	</MyfContainer>
</section>

<section class="mb-12 md:mb-20">
	<MyfContainer>
		<div class="grid gap-y-10 grid-cols-1 lg:grid-cols-5 gap-10">
			<div
				class="lg:col-span-3 flex flex-col md:[&:hover>article:not(:hover)]:blur-sm md:[&>article]:transition-all md:[&>article]:duration-300"
			>
				{#each data.posts as post}
					<ArticleCard {post} />
				{/each}
				<div class="mt-8 flex w-full justify-center">
					<Button href="/blog" size="lg">Vai al blog</Button>
				</div>
			</div>
			<div class="lg:col-span-2 flex flex-col gap-10">
				<DetailedList list={data.work} title="Esperienza" />
				<DetailedList list={data.education} title="Istruzione" />
			</div>
		</div>
	</MyfContainer>
</section>
