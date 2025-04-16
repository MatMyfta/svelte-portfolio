<script>
	import Header from './Header.svelte';
	import './styles.css';
	import '../app.css';
	import Footer from './Footer.svelte';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	// import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	// import { dev } from '$app/environment';
	// import { inject } from '@vercel/analytics'

	// injectSpeedInsights();
	// inject({ mode: dev ? 'development' : 'production' });
</script>

<div class="app">
	<Header />

	<main class="mt-32">
		<slot />
	</main>

	<Footer />
</div>
