<script>
	export let item;
</script>

<li class="flex items-center gap-2 md:gap-4 p-2 md:p-4 [&:not(:last-child)]:border-b border-b-stone-700">
	<div
		class="flex-shrink-0 flex-grow-1 flex-basis-0 relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border-2 border-stone-700"
	>
		<img
			alt={item.role}
			src={item.logo}
			width="40"
			height="40"
			class="h-full w-full p-1 rounded-full object-cover"
			loading="lazy"
		/>
	</div>
	<dl class="flex flex-auto flex-wrap gap-x-2 items-start">
		<div class="flex flex-col w-full">
			<dt class="sr-only">Info</dt>
			<dd class="text-sm font-light">{item.details}</dd>

			<dt class="sr-only">Title</dt>
			<dd class="w-full flex-none font-medium text-stone-300 mt-1 mb-0.5">
				{item.title}
			</dd>

			<div class="text-sm font-light">
				<span>{item.location}</span>&nbsp;
				<span
					>(<time datetime={item.start_year}>{item.start_year}</time>
					<span aria-hidden="true">-</span>
					<time datetime={item.end_year || 'Present'}>{item.end_year || 'Present'}</time>)</span
				>
			</div>
		</div>
	</dl>
</li>
