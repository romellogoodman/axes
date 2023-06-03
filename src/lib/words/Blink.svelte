<script>
	import Keyframes from '$lib/components/Keyframes.svelte';
	import Stage from '$lib/components/Stage.svelte';
	import Word from '$lib/components/Word.svelte';
	import fonts from '$lib/fonts.json';

	let config = {
		background: '#bbbbbb',
		color: '#ffffff',
		text: 'blink',
		font: fonts.inter
	};

	const keyframes = [
		{
			visibility: 'block'
		},
		{
			visibility: 'hidden'
		}
	];
</script>

<Keyframes {keyframes} text={config.text} />
<Stage {...config}>
	<Word text={config.text} />
</Stage>

<style lang="scss">
	:global(#blink .word) {
		animation: blink-animation 1s steps(4, start) infinite;
		animation-play-state: paused;
	}

	:global(#blink.in-view .word) {
		animation-play-state: running;
	}
</style>
