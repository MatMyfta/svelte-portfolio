<script>
	function thisYear(date = new Date()) {
		return date.getFullYear().toString();
	}
</script>

<footer class="mx-auto px-4 mt-10 max-w-2xl lg:max-w-6xl border-t-2 border-zinc-600/50 py-10">
	<div class="flex justify-between">
		<p>
			<a class="text-zinc-100" href="mailto:mateo@myftaraj.com">mateo@myftaraj.com</a>
		</p>
		<p class="text-zinc-500 text-sm">
			&copy; {thisYear()} Mateo Myftaraj. All right reserved.
		</p>
	</div>
</footer>
