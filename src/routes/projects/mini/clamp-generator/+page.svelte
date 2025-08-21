<script>
	import Meta from '$lib/components/Meta.svelte';

	// Converts pixels to rems based on a base font size of 16px
	function pxToRem(px) {
		return px / 16;
	}

	// Formats a number to four decimal places and removes trailing zeros
	function formatNumber(num) {
		let rounded = Number(num).toFixed(4);
		rounded = rounded.replace(/\.?0+$/, '');
		return rounded;
	}

	// Calculates the clamp CSS code given font sizes and screen sizes
	function calculateClamp(fontSizeMin, fontSizeMax, screenSizeMin, screenSizeMax) {
		// Convert screen sizes from pixels to rems
		const minVW = pxToRem(screenSizeMin);
		const maxVW = pxToRem(screenSizeMax);

		// Validate input
		if (
			isNaN(fontSizeMin) ||
			isNaN(fontSizeMax) ||
			isNaN(minVW) ||
			isNaN(maxVW) ||
			minVW === maxVW
		) {
			throw new Error(
				'Invalid input values. Ensure sizes are numbers and min and max screen sizes are not equal.'
			);
		}

		// Calculate the slope and intercept for the clamp function
		const slopeVW = (fontSizeMax - fontSizeMin) / (maxVW - minVW);
		const yIntercept = fontSizeMin - slopeVW * minVW;

		const slopeVWFormatted = formatNumber(slopeVW * 100);
		const yInterceptFormatted = formatNumber(yIntercept);
		const minFSFormatted = formatNumber(fontSizeMin);
		const maxFSFormatted = formatNumber(fontSizeMax);

		// Return the clamp CSS code
		return {
			clampCode: `font-size: clamp(${minFSFormatted}rem, calc(${yInterceptFormatted}rem + ${slopeVWFormatted}vw), ${maxFSFormatted}rem);`,
			slopeVW,
			yIntercept
		};
	}

	// Reverses the clamp values to get the minimum and maximum screen widths
	function reverseClamp(fontSizeMin, fontSizeMax, slopeVW, yIntercept) {
		// Calculate min and max viewport widths in rems
		const minVW = (fontSizeMin - yIntercept) / slopeVW;
		const maxVW = (fontSizeMax - yIntercept) / slopeVW;

		// Convert viewport widths back to pixels from rems
		const minScreenWidth = minVW * 16;
		const maxScreenWidth = maxVW * 16;

		return {
			minScreenWidth: formatNumber(minScreenWidth),
			maxScreenWidth: formatNumber(maxScreenWidth)
		};
	}

	// === UI State ===

	// Inputs
	let fontSizeMin = 1; // rem
	let fontSizeMax = 2; // rem
	let screenSizeMin = 320; // px
	let screenSizeMax = 1440; // px

	// Outputs / derived
	let clampCode = '';
	let slopeVW = null;
	let yIntercept = null;
	let revMin = '';
	let revMax = '';
	let error = '';

	$: recalc();

	function recalc() {
		error = '';
		try {
			const {
				clampCode: code,
				slopeVW: s,
				yIntercept: b
			} = calculateClamp(
				Number(fontSizeMin),
				Number(fontSizeMax),
				Number(screenSizeMin),
				Number(screenSizeMax)
			);
			clampCode = code;
			slopeVW = s;
			yIntercept = b;

			const { minScreenWidth, maxScreenWidth } = reverseClamp(
				Number(fontSizeMin),
				Number(fontSizeMax),
				s,
				b
			);
			revMin = minScreenWidth;
			revMax = maxScreenWidth;
		} catch (e) {
			error = e?.message || 'Something went wrong.';
			clampCode = '';
			slopeVW = null;
			yIntercept = null;
			revMin = '';
			revMax = '';
		}
	}

	async function copyClamp() {
		if (!clampCode) return;
		try {
			await navigator.clipboard.writeText(clampCode);
			toast('Copied!');
		} catch {
			toast('Copy failed');
		}
	}

	let toasts = [];
	function toast(msg) {
		const id = Math.random().toString(36).slice(2);
		toasts = [...toasts, { id, msg }];
		setTimeout(() => {
			toasts = toasts.filter((t) => t.id !== id);
		}, 2000);
	}
</script>

<Meta title="Generatore di clamp CSS" />

<!-- Header -->
<section class="container max-w-2xl lg:max-w-3xl mx-auto px-4">
	<h1 class="font-[600] text-center text-stone-50 text-4xl mb-4 mt-8">
		Clamp() Font Size Calculator
	</h1>
	<p class="sub">
		Generate responsive font-size with <code>clamp()</code>. Enter sizes, preview, and copy the CSS.
	</p>

	<!-- Inputs -->
	<div class="grid">
		<div class="card">
			<h2>Font Sizes (rem)</h2>
			<div class="field">
				<label for="fsmin">Min font-size</label>
				<input id="fsmin" type="number" min="0" step="0.01" bind:value={fontSizeMin} />
			</div>
			<div class="field">
				<label for="fsmax">Max font-size</label>
				<input id="fsmax" type="number" min="0" step="0.01" bind:value={fontSizeMax} />
			</div>
		</div>

		<div class="card">
			<h2>Viewport Widths (px)</h2>
			<div class="field">
				<label for="vwmin">Min screen width</label>
				<input id="vwmin" type="number" min="1" step="1" bind:value={screenSizeMin} />
			</div>
			<div class="field">
				<label for="vwmax">Max screen width</label>
				<input id="vwmax" type="number" min="1" step="1" bind:value={screenSizeMax} />
			</div>
		</div>
	</div>

	{#if error}
		<div class="error">{error}</div>
	{/if}

	<!-- Output -->
	<div class="card output">
		<h2>CSS Output</h2>
		{#if clampCode}
			<pre><code>{clampCode}</code></pre>
			<button class="btn" on:click={copyClamp}>Copy</button>
		{:else}
			<p>Fill in valid numbers to generate the CSS.</p>
		{/if}

		{#if slopeVW !== null && yIntercept !== null}
			<div class="kv">
				<div><span>Slope (vw):</span><strong>{formatNumber(slopeVW)}rem per rem of vw</strong></div>
				<div><span>Intercept:</span><strong>{formatNumber(yIntercept)}rem</strong></div>
			</div>
		{/if}
	</div>

	<!-- Reverse -->
	<div class="card">
		<h2>Reverse Check</h2>
		{#if revMin && revMax}
			<p>This clamp corresponds to approximately:</p>
			<ul class="bullets">
				<li><strong>{revMin}px</strong> min viewport width</li>
				<li><strong>{revMax}px</strong> max viewport width</li>
			</ul>
		{:else}
			<p>Enter values to see the inferred min/max viewport widths.</p>
		{/if}
	</div>

	<!-- Preview -->
	<div class="card">
		<h2>Live Preview</h2>
		<p class="preview" style={clampCode || ''}>
			Resize the window to see this text scale between {formatNumber(fontSizeMin)}rem and {formatNumber(
				fontSizeMax
			)}rem.
		</p>
	</div>

	<!-- Toasts -->
	<div class="toasts">
		{#each toasts as t (t.id)}
			<div class="toast">{t.msg}</div>
		{/each}
	</div>
</section>

<style>
	h1 {
		font-size: clamp(1.5rem, 1rem + 2vw, 2.5rem);
		margin: 0 0 0.25rem;
	}
	.sub {
		margin: 0 0 1.5rem;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 1rem;
		margin-bottom: 1rem;
	}
	.card {
		@apply border p-4 border-stone-700 mb-4;
		border-radius: 16px;
	}
	.card h2 {
		margin: 0 0 0.75rem;
		font-size: 1.1rem;
	}
	.field {
		display: grid;
		gap: 0.25rem;
		margin-bottom: 0.75rem;
	}
	label {
		font-size: 0.9rem;
	}
	input[type='number'] {
		@apply bg-stone-900 py-2 px-3;
		width: 100%;
		border-radius: 12px;
		color: var(--text);
		outline: none;
	}
	input[type='number']:focus {
		border-color: var(--accent);
		box-shadow: 0 0 0 3px color-mix(in oklab, var(--accent), transparent 80%);
	}
	.output pre {
		@apply bg-stone-900 p-3;
		padding: 0.75rem;
		border-radius: 12px;
		overflow-x: auto;
		border: 1px solid var(--border);
	}
	.error {
		margin: 0.5rem 0 1rem;
		padding: 0.75rem;
		border: 1px solid color-mix(in oklab, var(--error), black 60%);
		background: color-mix(in oklab, var(--error), black 85%);
		color: #ffdede;
		border-radius: 12px;
	}
	.kv {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 0.5rem;
		margin-top: 0.5rem;
	}
	.kv span {
		color: var(--muted);
		margin-right: 0.5rem;
	}
	.bullets {
		margin: 0.25rem 0 0;
		padding-left: 1.1rem;
	}
	.preview {
		@apply bg-stone-900;
		margin: 0.5rem 0 0;
		line-height: 1.4;
		border: 1px solid var(--border);
		border-radius: 12px;
		padding: 1rem;
	}
	.toasts {
		position: fixed;
		bottom: 16px;
		right: 16px;
		display: grid;
		gap: 8px;
	}
	.toast {
		background: #111317;
		border: 1px solid var(--border);
		padding: 0.5rem 0.75rem;
		border-radius: 12px;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
	}
	code {
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace;
	}
</style>
