<script>
	export let background = '#000000';

	const onScroll = () => {
		const scrollX = document.body.scrollTop || document.documentElement.scrollTop;
		const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		const scrollPercent = scrollX / height;

		document.querySelector('#progress-bar').style.transform = `scaleX(${scrollPercent})`;
	};

	const style = `--background: ${background};`;
</script>

<svelte:window on:scroll={onScroll} />
<div id="progress-bar" {style} />

<style lang="scss">
	#progress-bar {
		position: fixed;
		left: 0;
		right: 0;
		height: 5px;
		bottom: 50px;
		transform: scaleX(0);
		background: var(--background);
	}
</style>
