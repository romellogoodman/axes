<script>
	import { createStyleTag, getFont } from '$lib/utils';

	export let text = '';
	export let background = '#ffffff';
	export let color = '#000000';
	export let font = null;
	const { name: fontName, fontFamily, fontFile, website: fontWebsite } = font || getFont('Anybody');

	const fontStyleTag =
		fontFamily && fontFile
			? createStyleTag(`
				@font-face {
					font-family: ${fontFamily};
					src: url('${fontFile}');
				}
			`)
			: '';

	const style = `--background: ${background}; --color: ${color}; --font-family: ${
		fontFamily || ''
	}`;
</script>

<svelte:head>
	{@html fontStyleTag}
</svelte:head>

<section id={text} class="stage" {style} data-color={color} data-text={text}>
	<slot />
	{#if fontName}
		<div class="footer">
			<div id="font-info">
				<p>
					font:
					{#if fontWebsite}
						<a href={fontWebsite} target="_blank" rel="noreferrer">{fontName}</a>
					{:else}
						{fontName}
					{/if}
				</p>
			</div>
		</div>
	{/if}
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
		position: relative;
	}

	.footer {
		position: absolute;
		left: 64px;
		bottom: 64px;
	}

	a {
		color: var(--color);
	}
</style>
