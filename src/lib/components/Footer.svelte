<script>
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

<footer class="mt-10 py-10">
	<div class="container max-w-2xl lg:max-w-3xl mx-auto px-4 text-center">
		<p class="mb-2">
			Contattami e creiamo qualcosa di magico insieme <a
				class="text-stone-50 underline"
				href="mailto:mateo@myftaraj.com">mateo@myftaraj.com</a
			>
		</p>

		<div class="flex justify-center items-center gap-4">
			<p class="">...o seguimi su</p>
			<div class="flex gap-4">
				{#each socials as social}
					<a class="[&>svg]:w-6 [&>svg>g>path]:fill-stone-50" href={social.route} target="_blank">
						{@html social.icon}
					</a>
				{/each}
			</div>
		</div>
	</div>
</footer>
