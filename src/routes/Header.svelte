<script>
	// @ts-ignore
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

	import { onMount } from 'svelte';

	let isOpen = false;

	const toggleDropdown = () => {
		isOpen = !isOpen;
	};

	const closeDropdown = () => {
		isOpen = false;
	};

	// @ts-ignore
	let dropdownRef;

	onMount(() => {
		// @ts-ignore
		const handleClickOutside = (event) => {
			// @ts-ignore
			if (dropdownRef && !dropdownRef.contains(event.target)) {
				closeDropdown();
			}
		};
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
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
				<ul class="hidden md:flex items-center justify-between space-x-6">
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

				<div class="md:hidden relative inline-block text-left" bind:this={dropdownRef}>
					<button
						on:click={toggleDropdown}
						class="inline-flex justify-center w-full rounded-md px-4 py-2 text-sm focus:outline-none"
					>
						<svg
							class="ml-2 -mr-1 h-5 w-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 011.08 1.04l-4.24 4.24a.75.75 0 01-1.08 0l-4.24-4.24a.75.75 0 01.02-1.06z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>

					{#if isOpen}
						<div
							class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-stone-700/30 ring-1 ring-black ring-opacity-5 z-50"
						>
							<div class="py-1">
								{#each items as item}
									<a
										href={item.route}
										class="w-full block text-left px-4 py-2 {$page.url.pathname === item.route ? 'text-stone-100' : 'text-stone-400'}"
										on:click={() => {
											closeDropdown();
										}}
									>
										{item.name}
									</a>
								{/each}
							</div>
						</div>
					{/if}
				</div>
			</nav>
		</div>
	</div>
</header>
