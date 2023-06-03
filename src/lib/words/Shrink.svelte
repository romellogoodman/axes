<script>
	import Keyframes from '$lib/components/Keyframes.svelte';
	import Stage from '$lib/components/Stage.svelte';
	import Word from '$lib/components/Word.svelte';

	let config = {
		background: '#ffc1f0',
		color: '#e25d6e',
		text: 'shrink'
	};

	const keyframes = [{ 'font-size': '64px' }, { 'font-size': '16px' }, { 'font-size': '64px' }];
</script>

<Keyframes {keyframes} text={config.text} />
<Stage {...config}>
	<Word text={config.text} />
</Stage>

<style lang="scss">
	:global(#shrink .word) {
		animation: shrink-animation 2s infinite;
	}
</style>
