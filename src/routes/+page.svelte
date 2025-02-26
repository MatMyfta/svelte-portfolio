<script>
	import personalPhotoWebp from '$lib/images/mateo_myftaraj_photo.webp';
	import Footer from './Footer.svelte';

	export let data;

	import github from '$lib/images/github.svg?raw';
	import linkedin from '$lib/images/linkedin.svg?raw';
	import instagram from '$lib/images/instagram.svg?raw';

	let socials = [
		{ name: 'Github', route: 'https://github.com/MatMyfta', icon: github },
		{ name: 'LinkedIn', route: 'https://www.linkedin.com/in/mateomyftaraj/', icon: linkedin },
		{ name: 'Instagram', route: 'https://www.instagram.com/matmyfta/', icon: instagram }
	];

	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import DetailedList from '$lib/components/DetailedList.svelte';
</script>

<svelte:head>
	<title>Mateo Myftaraj</title>
	<meta name="description" content="Il portfolio e blog di Mateo Myftaraj" />
	<meta name="og:title" content="Mateo Myftaraj" />
	<meta name="og:url" content="https://www.myftaraj.com" />
	<meta name="og:description" content="Il portfolio e blog di Mateo Myftaraj" />
	<meta name="og:image" content={personalPhotoWebp} />
</svelte:head>

<section class="container max-w-2xl lg:max-w-6xl px-4 mx-auto mt-4 mb-28 sm:my-40 gap-4">
	<div class="max-w-2xl my-0 lg:my-0">
		<h1 class="font-[300] text-2xl lg:text-4xl text-zinc-400 mb-4">Ciao, sono Mateo</h1>
		<h2 class="font-[700] text-2xl lg:text-4xl text-zinc-50 mb-6">
			Ingegnere Software appassionato di Sviluppo <mark
				class="text-zinc-50 bg-amber-600 rounded-sm inline-block -rotate-2">Web</mark
			>
			e <mark class="text-zinc-50 bg-amber-600 rounded-sm inline-block -rotate-2">Mobile</mark>
		</h2>
		<p class="mb-12 md:text-lg/8 text-zinc-400 [&>strong]:text-zinc-300">
			<!-- Sono uno sviluppatore web appassionato con una solida esperienza nella programmazione
			software, maturata grazie alla mia formazione superiore e universitaria e anche grazie alle
			mie esperienze lavorative. Con competenze che spaziano dalla progettazione
			all'implementazione, mi impegno a fornire prodotti di alta qualità che soddisfano le esigenze
			dei clienti e superano le loro aspettative. -->
			Sono un <strong>Developer Full-Stack</strong> e studente in
			<strong>Software Engineering</strong> alla Libera Università di Bolzano.
		</p>
		<div class="flex justify-between items-center gap-4">
			<div>
				<a
					href="/chi-sono"
					class="line-clamp-1 py-4 px-6 rounded-full font-medium outline-offset-2 active:transition-none bg-zinc-700/50 hover:bg-zinc-700 transition text-zinc-400"
					>Scopri di più</a
				>
			</div>
			<div class="flex items-center gap-4">
				<p class="text-zinc-500">...o seguimi su</p>
				<div class="flex gap-4">
					{#each socials as social}
						<a class="[&>svg]:w-6 [&>svg>g>path]:fill-zinc-400" href={social.route} target="_blank">
							<!-- <img class="size-6" src={social.icon} alt={social.name} /> -->
							 { @html social.icon }
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<section class="container max-w-2xl lg:max-w-6xl mx-auto px-4">
	<div class="grid gap-y-10 grid-cols-1 lg:grid-cols-5 gap-10">
		<div class="lg:col-span-3 flex flex-col">
			{#each data.posts as post, index}
				<ArticleCard {post} />
			{/each}
			<div class="mt-8 flex w-full justify-center">
				<a
					href="/blog"
					class="line-clamp-1 py-4 px-6 rounded-full font-medium outline-offset-2 active:transition-none bg-zinc-700/50 hover:bg-zinc-700 transition text-zinc-400"
					>Vai al blog</a
				>
			</div>
		</div>
		<div class="lg:col-span-2 flex flex-col gap-10">
			<DetailedList list={data.work} title="Esperienza" />
			<DetailedList list={data.education} title="Istruzione" />
		</div>
	</div>
</section>

<Footer />
