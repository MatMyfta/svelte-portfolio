<script>
	import { page } from '$app/stores';
	import '@fontsource-variable/syne';
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linkedin.svg';
	import personalPhotoJpg from '$lib/images/mateo_myftaraj_photo.jpg';
	import personalPhotoWebp from '$lib/images/mateo_myftaraj_photo.webp';

	let items = [];
	let socials = [
		{ name: 'Github', route: 'https://github.com/MatMyfta', icon: github },
		{ name: 'LinkedIn', route: 'https://www.linkedin.com/in/mateomyftaraj/', icon: linkedin }
	];
</script>

<header class="border-b-4">
	<div class="border-b-4 bg-[#fff] py-8">
		<div class="container px-4 mx-auto flex justify-between items-center">
			<div class="corner">
				<a class="logo" href="/">Mateo Myftaraj</a>
			</div>

			<nav class="flex">
				<ul class="flex items-center justify-between space-x-6">
					<!-- {#each items as item}
					<li class="flex flex-col items-center"
						aria-current={$page.url.pathname === item.route ? 'page' : undefined}>
						<a class="font-medium" href="{item.route}">{item.name}</a>
					</li>
					{/each} -->
					<li class="flex items-center space-x-3 pb-1">
						{#each socials as social}
							<a class="btn-light px-2 py-2" href={social.route}>
								<img width="24px" height="24px" src={social.icon} alt={social.name} />
							</a>
						{/each}
					</li>
				</ul>
			</nav>
		</div>
	</div>

	<div class="container px-4 mx-auto mt-4 mb-8 sm:my-20 gap-4 grid grid-cols-1 lg:grid-cols-7 items-center">
		<div class="order-first lg:order-last lg:col-span-4 justify-self-center w-full">
			<picture>
				<source srcset="{personalPhotoWebp}" type="image/webp">
				<source srcset="{personalPhotoJpg}" type="image/jpeg">
				<img
					id="photo-image"
					class="w-full object-contain border-4"
					src={personalPhotoJpg}
					alt="Mateo Myftaraj in Termoli, Italy"
					title="Mateo Myftaraj in Termoli, Italy"
				/>
			</picture>
		</div>
		<div class="order-last lg:order-first lg:col-span-3 my-0 lg:my-0">
			<h1 class="font-[900] text-4xl lg:text-6xl">Ciao, sono<br />Mateo</h1>
			<h2 class="font-[600] text-xl lg:text-2xl">Sviluppatore Web</h2>
			<p class="mt-4 mb-12">
				Sono uno sviluppatore web appassionato con una solida esperienza nella programmazione
				software, maturata grazie alla mia formazione superiore e universitaria e anche grazie alle
				mie esperienze lavorative. Con competenze che spaziano dalla progettazione
				all'implementazione, mi impegno a fornire prodotti di alta qualità che soddisfano le
				esigenze dei clienti e superano le loro aspettative.
			</p>
			<div class="flex gap-4">
				<a href="mailto:mateo@myftaraj.com" class="btn bg-mainAccent">Contattami</a>
			</div>
		</div>
	</div>
</header>

<style>
	.logo {
		font-family: 'Syne Variable';
		font-weight: 700;
		font-size: 22px;
	}

	#photo-image {
		border-radius: 10px;
		box-shadow: 4px 4px var(--color-black);
		background: var(--color-black);
	}
</style>
