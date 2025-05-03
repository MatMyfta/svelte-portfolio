<script>
	import DetailedListItem from './DetailedListItem.svelte';

	export let list;
	export let title;
</script>

<div class="rounded-2xl p-6 bg-eerie-200/30">
	<h2 class="flex pb-4 mb-6 border-b border-eerie-300/50 font-semibold text-zinc-200">
		<span class="ml-3">{title}</span>
	</h2>
	<ol class="mt-6 space-y-4">
		{#each list as listItem}
			<DetailedListItem item={listItem} />
		{/each}
	</ol>
</div>
