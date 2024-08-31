<script>
	import github from '$lib/images/github.svg';
	import chevronRight from '$lib/images/chevron-right.svg';

	const projects = [
		{
			title: 'Personal portfolio',
			paragraph: 'Il mio portfolio personale sviluppato con Svelte',
			link: '/',
			github: null,
			cover: 'personal-portfolio-dall-e.webp',
			alt: 'Portfolio personale in stile anime, immagine generata con Dall-e 3'
		},
		{
			title: 'ML on MSP430',
			paragraph:
				'Algoritmo di semi-supervised learning ottimizzato per sistemi embedded. Testato con diversi dataset su un MSP430',
			link: null,
			github: 'https://github.com/MatMyfta/ML-on-MSP430',
			cover: 'semisupervised-learning-dall-e.webp',
			alt: 'Machine learning su un microcontrollore, immagine generata con Dall-e 3'
		},
		{
			title: 'Snake on MSP432',
			paragraph:
				'Progetto CCS del gioco retró snake sviluppato per microcontrollore MSP432 con schermo LCD',
			link: null,
			github: 'https://github.com/MatMyfta/snake-game',
			cover: 'snake-on-microcontroller.webp',
			alt: 'Snake su microcontrollore con schermo LCD, immagine generata con Dall-e 3'
		}
	];
	// Object.entries() converts an Object into an array of arrays, each sub array first index is the a key and the second index is a value
</script>

<section class="bg-[#f5f4f7] w-100 py-12">
	<div class="container mx-auto px-4">
		<h1 class="font-[600] text-3xl lg:text-4xl text-left mb-8">Progetti</h1>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			<div class="projects">
				<ul>
					{#each projects as project}
						<li class="py-4 border-b-2 border-[#ddd]">
							<div class="flex gap-4 items-center">
								{#if project.link}
									<a href={project.link} class="p-2 bg-[#e2e1e9] rounded-full inline-block">
										<img width="24px" height="24px" src={chevronRight} alt="Read" />
									</a>
								{/if}
								{#if project.github}
									<a href={project.github} class="p-2 bg-[#e2e1e9] rounded-full inline-block" target="_blank">
										<img width="24px" height="24px" src={github} alt="Github" />
									</a>
								{/if}
								<h1 class="text-2xl font-[600]">{project.title}</h1>
							</div>
						</li>
					{/each}
				</ul>
			</div>
			<div class="image lg:display-none"></div>
		</div>

		<!-- <div class="mt-8 flex justify-center">
			<a href="/" aria-disabled="true" class="btn btn-disabled bg-[#ffd43b]">Vai ai progetti</a>
		</div> -->
	</div>
</section>
