<script>
	export let item;
</script>

<li class="flex items-center gap-4 p-4 [&:not(:last-child)]:border-b border-b-stone-600">
	<div
		class="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-stone-600"
	>
		<img
			alt={item.role}
			src={item.logo}
			width="40"
			height="40"
			class="h-12 w-12 rounded-full object-cover"
			loading="lazy"
		/>
	</div>
	<dl class="flex flex-auto flex-wrap gap-x-2 items-start">
		<div class="flex flex-col w-full">
			<dt class="sr-only">Info</dt>
			<dd class="font-light">{item.details}</dd>

			<dt class="sr-only">Title</dt>
			<dd class="w-full flex-none font-medium text-stone-100 mt-1 mb-0.5">
				{item.title}
			</dd>

			<div class="flex align-center justify-start text-sm font-light">
				<dt class="sr-only">Location</dt>
				<dd class="">
					{item.location}
				</dd>
				<dt class="sr-only">Date</dt>
				<dd class="ml-4">
					(<time datetime={item.start_year}>{item.start_year}</time>
					<span aria-hidden="true">-</span>
					<time datetime={item.end_year || 'Present'}>{item.end_year || 'Present'}</time>)
				</dd>
			</div>
		</div>
	</dl>
</li>
