<script>
	import { page } from '$app/stores';
	import '@fontsource-variable/syne';

	import personalPhotoWebp from '$lib/images/mateo_myftaraj_photo.webp';

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
		<div
			class="container max-w-2xl lg:max-w-6xl px-4 pb-8 mx-auto flex justify-between items-center"
		>
			<div class="flex gap-8 center items-center min-w-full justify-between">
				<a href="/" class="">
					<picture>
						<source srcset={personalPhotoWebp} type="image/webp" />
						<img
							class="w-28 h-28 object-cover rounded-full border-zinc-700 border-4"
							src={personalPhotoWebp}
							alt="Mateo Myftaraj in Termoli, Italy"
							title="Mateo Myftaraj in Termoli, Italy"
						/>
					</picture>
				</a>
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
				<div class="w-28 hidden md:block"></div>
			</div>
		</div>
	</div>
</header>
