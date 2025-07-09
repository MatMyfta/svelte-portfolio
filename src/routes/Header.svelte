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

<header class="container max-w-2xl lg:max-w-3xl mx-auto px-4 py-8">
	<div class="flex justify-between items-center w-full">
		<div class="flex gap-8 center items-center min-w-full justify-between">
			<a href="/" class="">
				<div class="flex flex-col">
					<span class="text-stone-100">&lt Mateo Myftaraj. /&gt</span>
					<span class="text-stone-400">Software Engineer</span>
				</div>
			</a>
			<nav class="flex">
				<ul class="flex items-center justify-between space-x-6">
					{#each items as item}
						<li
							class="flex flex-col items-center"
							aria-current={$page.url.pathname === item.route ? 'page' : undefined}
						>
							<a
								class={$page.url.pathname === item.route ? 'text-stone-100' : 'text-stone-400'}
								href={item.route}>{item.name}</a
							>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	</div>
</header>
