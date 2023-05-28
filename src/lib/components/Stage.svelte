<script>
	export let text = '';
	export let background = '#ffffff';
	export let color = '#000000';

	const style = `--background: ${background}; --color: ${color};`;
</script>

<section class="stage" {style} data-color={color} data-text={text}>
	<slot />
</section>

<style lang="scss">
	.stage {
		height: 100vh;
		scroll-snap-align: start;
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--background);
		color: var(--color);
	}
</style>
