<script>
	import Keyframes from '$lib/components/Keyframes.svelte';
	import Stage from '$lib/components/Stage.svelte';
	import Word from '$lib/components/Word.svelte';

	let config = {
		background: '#e25d6e',
		color: '#ffc1f0',
		text: 'grow'
	};

	const keyframes = [{ 'font-size': '34px' }, { 'font-size': '128px' }, { 'font-size': '34px' }];
</script>

<Keyframes {keyframes} text={config.text} />
<Stage {...config}>
	<Word text={config.text} />
</Stage>

<style lang="scss">
	:global(#grow .word) {
		animation: grow-animation 2s infinite;
	}
</style>
