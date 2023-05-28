<script>
	import Stage from '$lib/components/Stage.svelte';
	import Word from '$lib/components/Word.svelte';

	let config = {
		text: 'Axes',
		color: '#000000',
		background: '#ffffff'
	};
</script>

<Stage {...config}>
	<Word text={config.text} />
</Stage>

<style lang="scss">
</style>
