<script>
	import github from '$lib/images/github.svg';

	const sections = {
		'Title 1': 'paragraph',
		'Title 2': 'paragraph',
		'Title 3': 'paragraph',
		'Title 4': 'paragraph'
	};
	// Object.entries() converts an Object into an array of arrays, each sub array first index is the a key and the second index is a value
</script>

<section class="bg-greenSoft border-b-4 w-100 py-12">
	<div class="container mx-auto px-4">
		<h1 class="font-[900] text-2xl lg:text-4xl text-left mb-4">Progetti</h1>
		<div class="grid grid-cols-4 gap-4">
			{#each Object.entries(sections) as [title, paragraph]}
				<div class="card bg-[#fff]">
					<div class="bg-[#e4e4e4] w-100 aspect-[16/9] rounded-[6px]"></div>
					<div class="h-40">
						<h1 class="text-2xl font-[600] mt-2">{title}</h1>
						<p class="mb-4">{paragraph}</p>
					</div>
					<div class="mb-2 grid grid-cols-2 justify-between mr-2">
                        <div class="flex justify-start">
                            <a href="/" class="btn bg-greenAccent inline-block">Leggi</a>
                        </div>
                        <div class="flex justify-end">
                            <a href="/" class="btn bg-[#fff] inline-block">
								<img width="24px" height="24px" src={github} alt="Github" />
                            </a>
                        </div>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="container mx-auto mt-8 flex justify-center">
		<a href="/" class="btn bg-greenAccent">Vai ai progetti</a>
	</div>
</section>
