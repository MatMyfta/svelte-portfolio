<script>
	import { page } from '$app/stores';
	import '@fontsource-variable/syne';

	let items = [
		{
			name: 'Home',
			route: '/'
		},
		{
			name: 'Chi sono',
			route: '/chi-sono'
		},
		{
			name: 'Blog',
			route: '/blog'
		}
	];
</script>

<header>
	<div class="py-8">
		<div class="container max-w-2xl lg:max-w-6xl px-4 mx-auto flex justify-between items-center">
			<div class="flex gap-8 center items-center min-w-full justify-between">
				<a href="/" class="text-white text-2xl font-[900] font-['Roboto_Serif']">Mateo Myftaraj</a>
				<nav class="flex">
					<ul class="flex items-center justify-between space-x-6">
						{#each items as item}
							<li
								class="flex flex-col items-center"
								aria-current={$page.url.pathname === item.route ? 'page' : undefined}
							>
								<a
									class="lg:text-lg font-semibold {$page.url.pathname === item.route
										? 'border-b-2 text-white'
										: 'text-zinc-400'}"
									href={item.route}>{item.name}</a
								>
							</li>
						{/each}
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>
