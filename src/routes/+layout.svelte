<script>
	import Header from './Header.svelte';
	import './styles.css';
	import '../app.css';
	import Footer from './Footer.svelte';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	injectAnalytics({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();
</script>

<div class="app">
	<Header />

	<main class="mt-32">
		<slot />
	</main>

	<Footer />
</div>
