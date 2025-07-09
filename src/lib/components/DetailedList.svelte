<script>
	import DetailedListItem from './DetailedListItem.svelte';

	export let list;
	export let title;
</script>

<div class="rounded-2xl border border-stone-600">
	<h2 class="flex px-1 md:px-3 py-6 border-b border-stone-600">
		<span class="ml-3 text-stone-50">{title}</span>
	</h2>
	<ol class="">
		{#each list as listItem}
			<DetailedListItem item={listItem} />
		{/each}
	</ol>
</div>
