<script>
	import Header from './Header.svelte';
	import './styles.css';
	import '../app.css';
	
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics'

	injectSpeedInsights();
	inject({ mode: dev ? 'development' : 'production' });

</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
</div>
