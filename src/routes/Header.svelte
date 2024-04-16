<script>
	import { page } from '$app/stores';
	import '@fontsource-variable/syne';
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linkedin.svg';

	let items = [];
	let socials = [
		{ name: 'Github', route: 'https://github.com/MatMyfta', icon: github },
		{ name: 'LinkedIn', route: 'https://www.linkedin.com/in/mateomyftaraj/', icon: linkedin }
	];
</script>

<header>
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
							<a class="btn-light px-2 py-2" href={social.route} target="_blank">
								<img width="24px" height="24px" src={social.icon} alt={social.name} />
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
		font-family: 'Syne Variable';
		font-weight: 700;
		font-size: 22px;
	}
</style>
