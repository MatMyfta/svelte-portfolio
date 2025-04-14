<script>
	import MyfContainer from '$lib/components/MyfContainer.svelte';

	import github from '$lib/images/github.svg?raw';
	import linkedin from '$lib/images/linkedin.svg?raw';
	import instagram from '$lib/images/instagram.svg?raw';

	function thisYear(date = new Date()) {
		return date.getFullYear().toString();
	}

	let socials = [
		{ name: 'Github', route: 'https://github.com/MatMyfta', icon: github },
		{ name: 'LinkedIn', route: 'https://www.linkedin.com/in/mateomyftaraj/', icon: linkedin },
		{ name: 'Instagram', route: 'https://www.instagram.com/matmyfta/', icon: instagram }
	];
</script>

<footer class="mt-10 border-t-2 border-zinc-600/50 py-10">
	<MyfContainer>
		<div class="flex flex-col md:flex-row justify-between gap-8">
			<div class="flex-shrink">
				<p class="font-[700] text2xl lg:text-3xl mb-6 text-zinc-400">
					Contattami e creiamo qualcosa di magico insieme <a
						class="text-zinc-100 underline"
						href="mailto:mateo@myftaraj.com">mateo@myftaraj.com</a
					>
				</p>

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
			<div class="shrink-0">
				<p class="text-zinc-500 text-sm">
					&copy; {thisYear()} Mateo Myftaraj. All right reserved.
				</p>
			</div>
		</div>
	</MyfContainer>
</footer>
