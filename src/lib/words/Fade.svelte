<script>
	import Stage from '$lib/components/Stage.svelte';
	import Word from '$lib/components/Word.svelte';

	let config = {
		background: '#9cbc10',
		color: '#0F380F',
		text: 'fade'
	};
</script>

<Stage {...config}>
	<Word text={config.text} />
</Stage>

<style lang="scss">
	:global(#fade .word) {
		opacity: 0;
		transition: opacity 2s ease-in-out;
	}

	:global(#fade.in-view .word) {
		opacity: 1;
	}
</style>
