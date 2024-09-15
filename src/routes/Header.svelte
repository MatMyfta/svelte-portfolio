<script>
	import { page } from '$app/stores';
	import '@fontsource-variable/syne';
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linkedin.svg';
	import instagram from '$lib/images/instagram.svg';

	let items = [];
	let socials = [
		{ name: 'Github', route: 'https://github.com/MatMyfta', icon: github },
		{ name: 'LinkedIn', route: 'https://www.linkedin.com/in/mateomyftaraj/', icon: linkedin },
		{ name: 'Instagram', route: 'https://www.instagram.com/matmyfta/', icon: instagram }
	];
</script>

<header>
	<div class="bg-[#fff] py-8">
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
							<a class="" href={social.route} target="_blank">
								<img class="size-6" src={social.icon} alt={social.name} />
							</a>
						{/each}
					</li>
				</ul>
			</nav>
		</div>
	</div>
</header>

<style>
	.logo {
		font-weight: 700;
		font-size: 22px;
	}
</style>
