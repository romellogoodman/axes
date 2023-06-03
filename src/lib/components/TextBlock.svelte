<script>
	import Stage from '$lib/components/Stage.svelte';

	let config = {
		background: '#ffffff',
		color: '#000000',
		text: 'axes'
	};
</script>

<Stage {...config}>
	<div class="text">
		<slot />
	</div>
</Stage>

<style lang="scss">
	.text {
		max-width: 600px;
		font-size: 24px;
	}
</style>
