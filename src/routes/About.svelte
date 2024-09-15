<script>
	import personalPhotoWebp from '$lib/images/mateo_myftaraj_photo.webp';

	import aws from '$lib/images/programming/amazonwebservices-plain-wordmark.svg';
	import blender from '$lib/images/programming/blender-original.svg';
	import c from '$lib/images/programming/c-plain.svg';
	import cakephp from '$lib/images/programming/cakephp-plain.svg';
	import cpp from '$lib/images/programming/cplusplus-plain.svg';
	import css3 from '$lib/images/programming/css3-plain.svg';
	import docker from '$lib/images/programming/docker-plain.svg';
	import figma from '$lib/images/programming/figma-plain.svg';
	import flutter from '$lib/images/programming/flutter-plain.svg';
	import git from '$lib/images/programming/git-plain.svg';
	import html5 from '$lib/images/programming/html5-plain.svg';
	import java from '$lib/images/programming/java-plain.svg';
	import js from '$lib/images/programming/javascript-plain.svg';
	import laravel from '$lib/images/programming/laravel-original.svg';
	import php from '$lib/images/programming/php-plain.svg';
	import python from '$lib/images/programming/python-plain.svg';
	import rails from '$lib/images/programming/rails-plain.svg';
	import sass from '$lib/images/programming/sass-original.svg';
	import svelte from '$lib/images/programming/svelte-plain.svg';

	const tools = [
		{
			name: 'php',
			icon: php
		},
		{
			name: 'js',
			icon: js
		},
		{
			name: 'python',
			icon: python
		},
		{
			name: 'java',
			icon: java
		},
		{
			name: 'CPP',
			icon: cpp
		},
		{
			name: 'CakePHP',
			icon: cakephp
		},
		{
			name: 'flutter',
			icon: flutter
		},
		{
			name: 'laravel',
			icon: laravel
		},
		{
			name: 'svelte',
			icon: svelte
		},
		{
			name: 'sass',
			icon: sass
		},
		{
			name: 'git',
			icon: git
		},
		{
			name: 'Docker',
			icon: docker
		}
	];
</script>

<div
	class="container px-4 mx-auto mt-4 mb-8 sm:my-20 gap-4 grid grid-cols-1 lg:grid-cols-7 items-center"
>
	<div class="order-first lg:order-last lg:col-span-4 justify-self-center w-full">
		<picture>
			<source srcset={personalPhotoWebp} type="image/webp" />
			<img
				id="photo-image"
				class="w-full object-contain"
				src={personalPhotoWebp}
				alt="Mateo Myftaraj in Termoli, Italy"
				title="Mateo Myftaraj in Termoli, Italy"
			/>
		</picture>
	</div>
	<div class="order-last lg:order-first lg:col-span-3 my-0 lg:my-0">
		<h1 class="font-[900] text-4xl lg:text-6xl">Ciao, sono Mateo</h1>
		<h2 class="font-[700] text-[#8a898f] text-2xl lg:text-3xl mt-4">{'</Sviluppatore Web>'}</h2>
		<p class="mt-4 mb-12 md:text-lg">
			Sono uno sviluppatore web appassionato con una solida esperienza nella programmazione
			software, maturata grazie alla mia formazione superiore e universitaria e anche grazie alle
			mie esperienze lavorative. Con competenze che spaziano dalla progettazione
			all'implementazione, mi impegno a fornire prodotti di alta qualità che soddisfano le esigenze
			dei clienti e superano le loro aspettative.
		</p>
		<div class="flex gap-4">
			<a href="mailto:mateo@myftaraj.com" class="btn bg-mainAccent">Contattami</a>
		</div>
	</div>
</div>

<section class="bg-mainAccent w-100 py-8 sm:py-12">
	<div class="container px-4 mx-auto">
		<h1 class="font-[600] text-center text-3xl lg:text-4xl mb-12">I miei attrezzi</h1>
		<div class="mx-auto lg:w-3/5 flex flex-wrap justify-center gap-12">
			{#each tools as tool}
				<img class="size-12 md:size-16" src={tool.icon} alt="{tool.name}" />
			{/each}
		</div>
	</div>
</section>

<style>
	#photo-image {
		border-radius: 10px;
	}
</style>
