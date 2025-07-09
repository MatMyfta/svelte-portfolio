<script>
	import DetailedListItem from './DetailedListItem.svelte';

	export let list;
	export let title;
</script>

<div class="rounded-2xl border border-stone-600">
	<h2 class="flex p-6 border-b border-stone-600">
		<span class="ml-3">{title}</span>
	</h2>
	<ol class="">
		{#each list as listItem}
			<DetailedListItem item={listItem} />
		{/each}
	</ol>
</div>
