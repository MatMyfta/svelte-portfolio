<script>
	import Projects from './Projects.svelte';
	import personalPhotoWebp from '$lib/images/mateo_myftaraj_photo.webp';
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
	<meta name="og:image" content={personalPhotoWebp} />
</svelte:head>

<About />
<Projects />
<Blog posts={data} />

<Footer />
