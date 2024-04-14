<script>
	import github from '$lib/images/github.svg';

	const projects = [
		{title: 'ML on MSP430', paragraph: 'Algoritmo di semi-supervised learning ottimizzato per sistemi embedded. Testato con diversi dataset su un MSP430', link: null, github: 'https://github.com/MatMyfta/ML-on-MSP430'},
    ];
	// Object.entries() converts an Object into an array of arrays, each sub array first index is the a key and the second index is a value
</script>

<section class="bg-greenSoft border-b-4 w-100 py-12">
	<div class="container mx-auto px-4">
		<h1 class="font-[900] text-2xl lg:text-4xl text-left mb-4">Progetti</h1>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
			{#each projects as project}
				<div class="card bg-[#fff]">
					<div class="bg-[#e4e4e4] w-100 aspect-[16/9] rounded-[6px]"></div>
					<div class="h-40">
						<h1 class="text-2xl font-[600] mt-2">{project.title}</h1>
						<p class="mb-4">{project.paragraph}</p>
					</div>
					<div class="mb-2 grid grid-cols-2 justify-between mr-2">
                        <div class="flex justify-start">
                            {#if project.link}
                            <a href="{project.link}" class="btn bg-greenAccent inline-block">Leggi</a>
                            {/if}
                        </div>
                        <div class="flex justify-end">
                            {#if project.github}
                            <a href="{project.github}" class="btn bg-[#fff] inline-block" target="_blank">
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
