<script>
	export let text = '';
	export let color = '#ffffff';
	export let background = '#000000';

	const style = `--background: ${background}; --color: ${color};`;
</script>

<section class="page" {style} data-text={text}>
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
	}
</style>
