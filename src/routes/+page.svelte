<script>
	import personalPhotoWebp from '$lib/images/mateo_myftaraj_photo.webp';
	import Footer from './Footer.svelte';
	import Meta from '$lib/components/Meta.svelte';

	export let data;

	import github from '$lib/images/github.svg?raw';
	import linkedin from '$lib/images/linkedin.svg?raw';
	import instagram from '$lib/images/instagram.svg?raw';
	import sg_photo from '$lib/images/mateo-sg.png';

	let socials = [
		{ name: 'Github', route: 'https://github.com/MatMyfta', icon: github },
		{ name: 'LinkedIn', route: 'https://www.linkedin.com/in/mateomyftaraj/', icon: linkedin },
		{ name: 'Instagram', route: 'https://www.instagram.com/matmyfta/', icon: instagram }
	];

	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import DetailedList from '$lib/components/DetailedList.svelte';
</script>

<Meta />

<section class="container max-w-2xl lg:max-w-6xl px-4 mx-auto mt-8 mb-12 md:mt-12 md:mb-20 gap-4">
	<div class="grid md:grid-cols-10 [&>div]:row-[1] items-center group">
		<div class="max-w-2xl my-0 lg:my-0 md:col-start-1 md:col-span-7 z-[1]">
			<h1 class="font-[300] text-2xl lg:text-4xl text-zinc-400 mb-4">Ciao, sono Mateo</h1>
			<h2 class="font-[700] text-2xl lg:text-4xl text-zinc-50 mb-6">
				Ingegnere Software appassionato di Sviluppo <mark
					class="text-zinc-50 bg-amber-600 rounded-sm inline-block -rotate-2">Web</mark
				>
				e <mark class="text-zinc-50 bg-amber-600 rounded-sm inline-block -rotate-2">Mobile</mark>
			</h2>
			<p class="mb-12 md:text-lg/8 text-zinc-200 [&>strong]:text-zinc-300">
				Sono un <strong>Developer Full-Stack</strong> e studente in
				<strong>Software Engineering</strong> alla Libera Università di Bolzano.
			</p>
			<div class="flex flex-wrap justify-between items-center gap-4">
				<div>
					<a
						href="/chi-sono"
						class="line-clamp-1 py-2 px-3 sm:py-4 sm:px-6 rounded-full font-medium outline-offset-2 active:transition-none bg-zinc-700/50 hover:bg-zinc-700 transition text-zinc-400"
						>Scopri di più</a
					>
				</div>
				<div class="flex items-center gap-4">
					<p class="text-zinc-500">...o seguimi su</p>
					<div class="flex gap-4">
						{#each socials as social}
							<a
								class="[&>svg]:w-6 [&>svg>g>path]:fill-zinc-400"
								href={social.route}
								target="_blank"
							>
								{@html social.icon}
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<div class="hidden md:block col-start-6 col-end-11">
			<img
				src={sg_photo}
				alt=""
				class="max-h-[650px] opacity-100 hover:opacity-30 transition-opacity"
			/>
		</div>
	</div>
</section>

<section class="container max-w-2xl lg:max-w-6xl mx-auto px-4 mb-12 md:mb-20">
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
