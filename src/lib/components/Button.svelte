<script>
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
	export let variant = 'primary';
	export let size = 'md';
	export let outline = false;

	// Mapping for variant styles
	const variantClasses = {
		primary: outline
			? 'text-red-600 border border-red-600 bg-transparent'
			: 'bg-red-600 text-white',
		secondary: outline
			? 'text-zinc-600 border border-zinc-600 bg-transparent'
			: 'bg-zinc-600 text-white'
	};

	// Mapping for size styles
	const sizeClasses = {
		sm: 'px-3 py-1',
		md: 'px-4 py-2',
		lg: 'px-6 py-4'
	};
</script>

<a {href} class={`inline-block rounded-full ${variantClasses[variant]} ${sizeClasses[size]}`}>
	<slot />
</a>
