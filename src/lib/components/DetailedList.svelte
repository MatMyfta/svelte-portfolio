<script>
	import DetailedListItem from './DetailedListItem.svelte';

	export let list;
	export let title;
</script>

<div class="rounded-2xl p-6 bg-zinc-700/50">
	<h2 class="flex pb-4 mb-6 border-b border-zinc-600/50 font-semibold text-zinc-400">
		<span class="ml-3">{title}</span>
	</h2>
	<ol class="mt-6 space-y-4">
		{#each list as listItem}
			<DetailedListItem item={listItem} />
		{/each}
	</ol>
</div>
