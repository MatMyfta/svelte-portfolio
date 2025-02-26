<script>
	export let item;
</script>

<li class="flex gap-4 items-center">
	<div
		class="relative mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-full border-2 border-zinc-600"
	>
		<img
			alt={item.role}
			src={item.logo}
			width="40"
			height="40"
			class="h-10 w-10 rounded-full object-cover"
			loading="lazy"
		/>
	</div>
	<dl class="flex flex-auto flex-wrap gap-x-2 items-start">
		<div class="flex flex-col w-full">
			<dt class="sr-only">Info</dt>
			<dd class="text-sm text-zinc-400">{item.details}</dd>

			<dt class="sr-only">Title</dt>
			<dd class="w-full flex-none font-medium text-zinc-100 mt-1 mb-0.5">
				{item.title}
			</dd>

			<div class="flex align-center justify-between">
				<dt class="sr-only">Location</dt>
				<dd class="flex items-center text-sm text-zinc-400">
					<svg viewBox="0 0 20 20" aria-hidden="true" class="w-4 h-4 mr-1" fill="currentColor">
						<path
							fill-rule="evenodd"
							d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
							clip-rule="evenodd"
						></path>
					</svg>
					{item.location}
				</dd>
				<dt class="sr-only">Date</dt>
				<dd class="ml-auto text-sm text-zinc-500">
					<time datetime={item.start_year}>{item.start_year}</time>
					<span aria-hidden="true">-</span>
					<time datetime={item.end_year || 'Present'}>{item.end_year || 'Present'}</time>
				</dd>
			</div>
		</div>
	</dl>
</li>
