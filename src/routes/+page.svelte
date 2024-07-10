<script>
	import Projects from './Projects.svelte';
	import personalPhotoJpg from '$lib/images/mateo_myftaraj_photo.jpg';
	import Blog from './Blog.svelte';
	import About from './About.svelte';
	import Footer from './Footer.svelte';

	export let data;
</script>

<svelte:head>
	<title>Mateo Myftaraj</title>
	<meta name="description" content="Il portfolio e blog di Mateo Myftaraj" />
	<meta name="og:title" content="Mateo Myftaraj" />
	<meta name="og:url" content="https://www.myftaraj.com" />
	<meta name="og:description" content="Il portfolio e blog di Mateo Myftaraj" />
	<meta name="og:image" content={personalPhotoJpg} />
</svelte:head>

<About />

<section class="bg-greenSoft border-y-4 w-100 py-12">
	<div class="container mx-auto px-4">
		<h1 class="font-[900] text-3xl lg:text-5xl text-left mb-4">Progetti</h1>
		<Projects />
	</div>
</section>
<section class="bg-violetSoft border-b-4 w-100 py-12">
	<div class="container mx-auto px-4">
		<h1 class="font-[900] text-3xl lg:text-5xl text-left mb-4">Blog</h1>
		<Blog posts={data}/>
	</div>
</section>

<Footer />
