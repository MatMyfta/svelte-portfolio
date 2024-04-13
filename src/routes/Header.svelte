<script>
	import { page } from '$app/stores';
  	import "@fontsource-variable/syne";
	import github from "$lib/images/github.svg";
	import linkedin from "$lib/images/linkedin.svg";
	import mmphoto from "$lib/images/mateo_myftaraj_photo.png";
	
	let items = [
	];
	let socials = [
		{name: 'Github', route: 'https://github.com/MatMyfta', icon: github},
		{name: 'LinkedIn', route: 'https://www.linkedin.com/in/mateomyftaraj/', icon: linkedin},
	]
</script>

<header>
	<div class="border-b-4 bg-[#fff] py-8">
		<div class="container mx-auto flex justify-between items-center">
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
							<a class="btn-light px-2 py-2" href="{social.route}">
								<img width="24px" height="24px" src="{social.icon}" alt="{social.name}">
							</a>
						{/each}
					</li>
				</ul>
			</nav>
		</div>
	</div>

	<div class="container mx-auto my-20 gap-4 grid grid-cols-7 items-center">
		<div class="col-span-3">
			<h1 class="font-['Syne_Variable'] font-[900] text-6xl">Ciao, sono<br>Mateo</h1>
			<h2 class="font-['Syne_Variable'] font-[200] text-2xl">Sviluppatore Web</h2>
			<p class="mt-4 mb-16">Something about me here</p>
			<div class="flex gap-4">
				<a href="mailto:mateo@myftaraj.com" class="btn bg-mainAccent">Contattami</a>
			</div>
		</div>
		<div class="col-span-4 justify-self-center w-full">
			<img class="photo-image w-full object-contain border-4" src="{mmphoto}" alt="Mateo Myftaraj in Termoli, Italy"/>
		</div>
	</div>
</header>

<style>
	.logo {
		font-family: 'Syne Variable';
		font-weight: 700;
		font-size: 22px;
	}

	.photo-image {
		border-radius: 10px;
		box-shadow: 4px 4px var(--color-black);
	}
</style>