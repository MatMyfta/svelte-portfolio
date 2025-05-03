<script>
	import personalPhotoWebp from '$lib/images/mateo-sg.webp';

	export let title = '';
	export let description =
		'Il Portfolio e Blog di un Ingegnere Software appassionato di Sviluppo Web e Mobile.';
	export let author = 'Mateo Myftaraj, mateo@myftaraj.com';
	export let url = 'https://www.myftaraj.com';
	export let image = personalPhotoWebp;
	export let imagealt = 'Mateo Myftaraj';
	export let type = 'website';
	export let language = 'it';
	export let robots = 'index,follow';

	const _title = 'Mateo Myftaraj' + (title ? ' - ' + title : '');
</script>

<svelte:head>
	<title>{_title}</title>
	<meta name="description" content={description} />
	<meta name="author" content={author} />
	<meta name="language" content={language} />
	<meta name="robots" content={robots} />
	<link rel="canonical" href={url} />

	<meta property="og:title" content={_title} />
	<meta property="og:type" content={type} />
	<meta property="og:url" content={url} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:image:alt" content={imagealt} />
	<meta property="og:site_name" content="Mateo Myftaraj" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={_title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={image} />
	<meta property="twitter:image:alt" content={imagealt} />
</svelte:head>
