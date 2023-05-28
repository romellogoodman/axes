<script>
	import { onMount } from 'svelte';

	export let color = '#000000';

	const setPercent = () => {
		const scrollX = document.body.scrollTop || document.documentElement.scrollTop;
		const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		const scrollPercent = scrollX / height;

		document.querySelector('#progress-bar').style.transform = `scaleX(${scrollPercent})`;
	};

	onMount(() => {
		setPercent();
	});

	$: style = `--background: ${color};`;
</script>

<svelte:window on:scroll={setPercent} />
<div id="progress-bar" {style} />

<style lang="scss">
	#progress-bar {
		position: fixed;
		left: 0;
		right: 0;
		height: 5px;
		bottom: 50px;
		transform: scaleX(0);
		z-index: 9999;
		background: var(--background);
		transition: background-color 0.2s ease-in;
	}
</style>
