<script>
	export let text = '';
	export let color = '#000000';
	export let background = '#ffffff';

	const style = `--background: ${background}; --color: ${color};`;
</script>

<section class="page" {style} data-color={color} data-text={text}>
	<slot />
</section>

<style lang="scss">
	.page {
		height: 100vh;
		scroll-snap-align: start;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		background: var(--background);
		color: var(--color);
	}
</style>
