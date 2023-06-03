<script>
	import { createStyleTag } from '$lib/utils';
	import fonts from '$lib/fonts.json';

	export let text = '';
	export let background = '#ffffff';
	export let color = '#000000';
	export let font = null;
	const {
		family: fontFamily,
		filename: fontFilename,
		link: fontLink,
		name: fontName,
		size: fontSize = '128px'
	} = font || fonts.default;

	const fontStyleTag =
		fontFamily && fontFilename
			? createStyleTag(`
				@font-face {
					font-family: ${fontFamily};
					src: url('./fonts/${fontFilename}');
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
					{#if fontLink}
						<a href={fontLink} target="_blank" rel="noreferrer">{fontName}</a>
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
