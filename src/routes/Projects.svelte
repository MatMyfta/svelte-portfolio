<script>
	import github from '$lib/images/github.svg';

	const projects = [
        {
            title: 'Personal portfolio', 
            paragraph: 'Il mio portfolio personale sviluppato con Svelte', 
            link: '/', 
            github: null, 
            cover: 'personal-portfolio-dall-e.webp', 
            alt: "Portfolio personale in stile anime, immagine generata con Dall-e 3"
        },
		{
            title: 'ML on MSP430', 
            paragraph: 'Algoritmo di semi-supervised learning ottimizzato per sistemi embedded. Testato con diversi dataset su un MSP430', 
            link: null, 
            github: 'https://github.com/MatMyfta/ML-on-MSP430', 
            cover: 'semisupervised-learning-dall-e.webp', 
            alt: "Machine learning su un microcontrollore, immagine generata con Dall-e 3"
        },
		{
            title: 'Snake on MSP432', 
            paragraph: 'Progetto CCS del gioco retró snake sviluppato per microcontrollore MSP432 con schermo LCD', 
            link: null, 
            github: 'https://github.com/MatMyfta/snake-game', 
            cover: 'snake-on-microcontroller.webp', 
            alt: "Snake su microcontrollore con schermo LCD, immagine generata con Dall-e 3"
        },
    ];
	// Object.entries() converts an Object into an array of arrays, each sub array first index is the a key and the second index is a value
</script>

<section class="bg-greenSoft border-y-4 w-100 py-12">
	<div class="container mx-auto px-4">
		<h1 class="font-[900] text-2xl lg:text-4xl text-left mb-4">Progetti</h1>
		<div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
			{#each projects as project}
				<div class="card bg-[#fff]">
					<div class="bg-[#e4e4e4] w-100 aspect-[16/9] rounded-[6px] overflow-hidden">
						<img 
                            class="w-full h-full object-cover"
                            alt="{project.alt}" 
                            loading="lazy"
                            src="/images/projects/{project.cover}" />
					</div>
					<div class="h-40">
						<h1 class="text-2xl font-[600] mt-2">{project.title}</h1>
						<p class="mb-4">{project.paragraph}</p>
					</div>
					<div class="mb-2 grid grid-cols-2 justify-between mr-2">
						<div class="flex justify-start">
							{#if project.link}
								<a href={project.link} class="btn bg-greenAccent inline-block">Leggi</a>
							{/if}
						</div>
						<div class="flex justify-end">
							{#if project.github}
								<a href={project.github} class="btn bg-[#fff] inline-block" target="_blank">
									<img width="24px" height="24px" src={github} alt="Github" />
								</a>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
		<div class="mt-8 flex justify-center">
			<a aria-disabled="true" role="link" class="btn btn-disabled bg-greenAccent">Vai ai progetti</a>
		</div>
	</div>
</section>

<style>
	.card h1,
	.card p {
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		display: -webkit-box;
	}
	.card p {
		-webkit-line-clamp: 3;
	}
</style>
