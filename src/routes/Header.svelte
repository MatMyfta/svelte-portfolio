<script>
	import { page } from '$app/stores';
	import MyfContainer from '$lib/components/MyfContainer.svelte';
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

<header class="fixed top-0 z-10 w-screen grid grid-cols-1 grid-rows-1 [&>*]:row-[1] [&>*]:col-[1]">
	<div class="grid grid-cols-1 [&>*]:row-start-1 [&>*]:col-[1]">
		<div class="backdrop-blur-3xl bg-zinc-800/80 row-span-1"></div>
		<div class="backdrop-blur-2xl bg-zinc-800/60 row-span-2"></div>
		<div class="backdrop-blur-xl bg-zinc-800/40 row-span-3"></div>
		<div class="backdrop-blur-md bg-zinc-800/20 row-span-4"></div>
		<div class="backdrop-blur-sm bg-zinc-800/0 row-span-5"></div>
	</div>
	<div class="py-4 z-[11]">
		<div class="flex justify-between items-center">
			<MyfContainer>
				<div class="flex gap-8 center items-center min-w-full justify-between">
					<a href="/" class="text-white text-2xl font-[700]">Mateo Myftaraj.</a>
					<nav class="flex">
						<ul class="flex items-center justify-between space-x-6">
							{#each items as item}
								<li
									class="flex flex-col items-center"
									aria-current={$page.url.pathname === item.route ? 'page' : undefined}
								>
									<a
										class="font-semibold {$page.url.pathname === item.route
											? 'border-b-2 text-white'
											: 'text-zinc-400'}"
										href={item.route}>{item.name}</a
									>
								</li>
							{/each}
						</ul>
					</nav>
				</div>
			</MyfContainer>
		</div>
	</div>
</header>
