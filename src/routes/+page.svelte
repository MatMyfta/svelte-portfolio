<script>
	import Projects from './Projects.svelte';
	import personalPhotoJpg from '$lib/images/mateo_myftaraj_photo.jpg';
	import Blog from './Blog.svelte';
	import About from './About.svelte';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<title>Mateo Myftaraj</title>
	<meta name="description" content="Il portfolio e blog di Mateo Myftaraj" />
	<meta name="og:title" content="Mateo Myftaraj" />
	<meta name="og:url" content="https://www.myftaraj.com" />
	<meta name="og:description" content="Il portfolio e blog di Mateo Myftaraj" />
	<meta name="og:image" content="{personalPhotoJpg}" />
</svelte:head>

<About/>
<Projects/>
<Blog/>
