<script>
	// @ts-nocheck

	/**
	 * LinkButton component with Tailwind CSS variants
	 *
	 * Props:
	 * - href: string
	 * - variant: "primary" | "secondary"
	 * - size: "sm" | "lg"
	 * - outline: boolean
	 */
	export let href = '#';
	export let size = 'md';

	// Mapping for size styles
	const sizeClasses = {
		sm: 'px-2 py-1',
		md: 'px-3 py-1.5',
		lg: 'px-4 py-2'
	};
</script>

<a
	{href}
	class={`inline-block rounded-full border border-stone-600 bg-transparent ${sizeClasses[size]}`}
>
	<slot />
</a>
