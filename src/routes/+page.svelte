<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import personalPhotoJpg from '$lib/images/mateo_myftaraj_photo.jpg';
</script>

<svelte:head>
	<title>Mateo Myftaraj</title>
	<meta name="description" content="Il portfolio e blog di Mateo Myftaraj" />
	<meta name="og:title" content="Mateo Myftaraj" />
	<meta name="og:url" content="https://www.myftaraj.com" />
	<meta name="og:description" content="Il portfolio e blog di Mateo Myftaraj" />
	<meta name="og:image" content="{personalPhotoJpg}" />
</svelte:head>

<section>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
